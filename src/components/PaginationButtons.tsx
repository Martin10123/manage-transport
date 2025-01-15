import { Table } from "@tanstack/react-table";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

interface PaginationButtonsProps<T> {
  table: Table<T>;
}

export const PaginationButtons = <T,>({ table }: PaginationButtonsProps<T>) => {
  const isCanPreviousPage = table.getCanPreviousPage()
    ? "pointer-events-auto opacity-100"
    : "pointer-events-none opacity-50";
  const isCanNextPage = table.getCanNextPage()
    ? "pointer-events-auto opacity-100"
    : "pointer-events-none opacity-50";

  return (
    <div className="p-4 flex justify-center items-center gap-4">
      <button
        className={`text-2xl ${isCanPreviousPage}`}
        onClick={() => table.setPageIndex(0)}
      >
        <MdKeyboardDoubleArrowLeft />
      </button>
      <button
        className={`text-2xl ${isCanPreviousPage}`}
        onClick={() => table.previousPage()}
      >
        <MdKeyboardArrowLeft />
      </button>
      <button
        className={`text-2xl ${isCanNextPage}`}
        onClick={() => table.nextPage()}
      >
        <MdKeyboardArrowRight />
      </button>
      <button
        className={`text-2xl ${isCanNextPage}`}
        onClick={() => table.setPageIndex(table.getPageCount() - 1)}
      >
        <MdKeyboardDoubleArrowRight />
      </button>
    </div>
  );
};
