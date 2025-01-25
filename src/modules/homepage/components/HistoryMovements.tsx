import { TBodyTRTable } from "./TBodyTRTable";
import { movementsData } from "../data/dataTakeMovement";
import { TbReportMoney } from "react-icons/tb";

export const HistoryMovements = () => {
  return (
    <div className="mt-4 rounded-lg shadow-md p-4 bg-white">
      <div className="flex justify-between items-center gap-2 mb-4">
        <h3 className="text-xl font-semibold text-black mb-2">
          Historial de movimientos
        </h3>

        <TbReportMoney className="cursor-pointer" size={25} />
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

      <div className="flex justify-between items-center gap-4 md:justify-end">
        <div>
          <h2>Total ingresos: </h2>
          <p className="text-xl font-bold text-gray-800">
            $200.000{" "}
            <span className="ml-2 text-lg font-normal text-green-500">
              +10%
            </span>
          </p>
        </div>
        <div>
          <h2>Total egresos: </h2>
          <p className="text-xl font-bold text-gray-800">
            $200.000{" "}
            <span className="ml-2 text-lg font-normal text-red-500">+10%</span>
          </p>
        </div>
      </div>
    </div>
  );
};
