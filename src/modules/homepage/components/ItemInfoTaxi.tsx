interface ItemInfoTaxiProps {
  label: string;
  value: string;
  classNa?: string;
  classValue: string;
}

export const ItemInfoTaxi = ({
  classNa,
  classValue,
  label,
  value,
}: ItemInfoTaxiProps) => {
  return (
    <li
      className={`text-sm px-3 rounded-lg text-gray-500 py-3 border-b border-gray-200 shadow-sm flex flex-col bg-gray-50 ${classNa}`}
    >
      <p>{label}:</p> <p className={`${classValue} text-base`}>{value}</p>
    </li>
  );
};
