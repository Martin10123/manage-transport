import { TBodyTRTable } from "./TBodyTRTable";
import { movementsData } from "../data/dataTakeMovement";
import { TbReportMoney } from "react-icons/tb";

interface HistoryMovementsProps {
  handleOpenModalInfo: (name: string) => void;
}

export const HistoryMovements = ({
  handleOpenModalInfo,
}: HistoryMovementsProps) => {
  return (
    <div className="mt-4 rounded-lg shadow-md p-4 bg-white">
      <div className="flex justify-between items-center gap-2 mb-4">
        <h3 className="text-xl font-semibold text-black mb-2">
          Historial de movimientos
        </h3>

        <button
          className="bg-gray-100 text-gray-800 rounded-lg p-2 w-max duration-200 hover:bg-gray-200 hover:shadow-lg"
          onClick={() => handleOpenModalInfo("movimientos")}
        >
          <TbReportMoney className="cursor-pointer" size={25} />
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="items-center w-full mb-4 align-top border-gray-200 dark:border-white/40">
          <tbody>
            {movementsData.map((movement, index) => (
              <TBodyTRTable
                key={index}
                icon={movement.icon}
                rows={[
                  { label: "Fecha", value: movement.date },
                  {
                    label: "Tipo de movimiento",
                    value: movement.tipoMovimiento,
                  },
                  { label: "Descripción", value: movement.description },
                  { label: "Monto", value: movement.amount },
                ]}
              />
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center gap-4 mt-4 md:justify-end">
        <div>
          <h2 className="text-sm font-semibold text-gray-500">
            Total ingresos:{" "}
          </h2>
          <p className="text-xl font-bold text-gray-800">
            $200.000{" "}
            <span className="ml-2 text-lg font-normal text-green-500">
              +10%
            </span>
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-gray-500">
            Total egresos:{" "}
          </h2>
          <p className="text-xl font-bold text-gray-800">
            $200.000{" "}
            <span className="ml-2 text-lg font-normal text-red-500">+10%</span>
          </p>
        </div>
      </div>
    </div>
  );
};
