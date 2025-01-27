import { SimpleTable } from "@/components/SimpleTable";
import { IoMdClose } from "react-icons/io";

import { columnsDataMoney } from "../data/dataFakeColumn";
import { useDisableScroll } from "@/hooks/useDisabledScroll";
import dataTable from "@/MOCK_DATA (2).json";

export const SeeInfoSelectTaxi = ({
  nameOptionSelect,
  handleOpenModalInfo,
}: {
  nameOptionSelect: string;
  handleOpenModalInfo: (name: string) => void;
}) => {
  useDisableScroll(true);

  return (
    <div className="size-full fixed top-0 start-0 z-[9999] overflow-x-hidden overflow-y-auto pointer-events-none sm:bg-black sm:bg-opacity-50 sm:p-4 sm:backdrop-blur-sm">
      <div className="mt-0 opacity-1000 ease-out transition-all sm:max-w-[75%] sm:w-full h-full sm:mx-auto">
        <div className="max-h-full overflow-hidden flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto">
          <div className="flex justify-between items-center py-3 px-4 border-b">
            <h3 className="font-bold text-gray-800">
              Historial de {nameOptionSelect}
            </h3>

            <button
              className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none"
              onClick={() => handleOpenModalInfo("")}
            >
              <IoMdClose />
            </button>
          </div>

          <div className="px-4 pb-4 overflow-y-auto">
            <div>
              <SimpleTable
                data={dataTable}
                columns={columnsDataMoney}
                activeOptions
              />
            </div>
          </div>

          <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t">
            <button className="bg-blue-500 text-white rounded-lg py-2 px-4 w-max duration-200 hover:bg-blue-600 hover:shadow-lg">
              Agregar
            </button>

            <button className="bg-gray-300 text-black rounded-lg py-2 px-4 w-max duration-200 hover:bg-gray-400 hover:shadow-lg">
              Descargar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
