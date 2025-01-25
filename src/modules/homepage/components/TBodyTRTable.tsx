import { GiReceiveMoney, GiPayMoney } from "react-icons/gi";

interface TBodyTRTableProps {
  icon?: boolean;
  rows: { label: string; value: string }[];
}

export const TBodyTRTable = ({ icon, rows }: TBodyTRTableProps) => {
  const icons = {
    ingreso: <GiReceiveMoney size={35} className="text-green-500" />,
    egreso: <GiPayMoney size={35} className="text-red-500" />,
  };

  const IconComponent = icon ? icons.ingreso : icons.egreso;

  return (
    <tr className="p-2 align-middle bg-transparent border-b w-3/10 whitespace-nowrap dark:border-white/40">
      <td className="p-4 border-b border-blue-gray-50">
        <div
          className={`${
            icon ? "bg-green-100" : "bg-red-100"
          } rounded-full p-2 flex items-center justify-center`}
        >
          {IconComponent}
        </div>
      </td>

      {rows.map((row, index) => (
        <td key={index} className="p-4 border-b border-blue-gray-50">
          <div>
            <h2 className="text-sm text-gray-500">{row.label}</h2>
            <p className="text-black font-semibold">{row.value}</p>
          </div>
        </td>
      ))}
    </tr>
  );
};
