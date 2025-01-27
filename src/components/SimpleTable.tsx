import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  ColumnDef,
  SortingState,
} from "@tanstack/react-table";
import { useState, useMemo } from "react";
import { THeadTable } from "./THeadTable";
import { PaginationButtons } from "./PaginationButtons";
import { BsThreeDots } from "react-icons/bs";
import { useCloseModal } from "@/hooks/useCloseClickOutside";

interface SimpleTableProps<T> {
  data: T[];
  columns: ColumnDef<T, unknown>[];
  activeOptions?: boolean;
}

export const SimpleTable = <T,>({
  data,
  columns,
  activeOptions,
}: SimpleTableProps<T>) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [filtering, setFiltering] = useState("");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const memoizedColumns = useMemo(() => columns, [columns]);
  const refDropdown = useCloseModal<HTMLDivElement>(() =>
    setOpenDropdown(null)
  );

  const table = useReactTable({
    data,
    columns: memoizedColumns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
      globalFilter: filtering,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
    getFilteredRowModel: getFilteredRowModel(),
  });

  const toggleDropdown = (rowId: string) => {
    setOpenDropdown(openDropdown === rowId ? null : rowId); // Alternar el dropdown
  };

  return (
    <div className="w-full mt-4 bg-white rounded-lg shadow-md border">
      <div className="p-4 border-b-2 mb-4">
        <input
          className="w-full p-3.5 border border-gray-300 rounded-md"
          type="text"
          placeholder="Buscar..."
          value={filtering}
          onChange={(e) => setFiltering(e.target.value)}
        />
      </div>

      <div className="relative overflow-x-auto">
        <table className="border-spacing-0 w-full border overflow-x-auto border-collapse border-gray-300">
          <thead className="bg-gray-50">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="border-b border-gray-300">
                {headerGroup.headers.map((column) => (
                  <THeadTable key={column.id} column={column} />
                ))}
              </tr>
            ))}
          </thead>

          <tbody className="divide-y divide-gray-300">
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className="hover:bg-gray-100 transition-colors duration-200"
              >
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="p-6 border-b border-gray-300 text-center"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}

                {activeOptions && (
                  <td className="p-6 border-b border-gray-300">
                    <div className="relative">
                      <BsThreeDots
                        onClick={() => toggleDropdown(row.id)} // Abre el dropdown al hacer clic
                        className="cursor-pointer"
                      />

                      {openDropdown === row.id && (
                        <div
                          className="absolute right-0 mt-2 w-max bg-white border rounded-md shadow-lg z-[999]"
                          ref={refDropdown}
                        >
                          <ul>
                            <li className="px-4 py-2 cursor-pointer hover:bg-gray-200">
                              Ver
                            </li>
                            <li className="px-4 py-2 cursor-pointer hover:bg-gray-200">
                              Editar
                            </li>
                            <li className="px-4 py-2 cursor-pointer text-red-500 hover:bg-gray-200">
                              Eliminar
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <PaginationButtons table={table} />
    </div>
  );
};
