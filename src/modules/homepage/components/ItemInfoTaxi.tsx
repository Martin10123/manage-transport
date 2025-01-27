interface ItemInfoTaxiProps {
  label: string;
  value: string;
  classNa?: string;
  classValue: string;
  handleOpenModalInfo?: (name: string) => void;
}

export const ItemInfoTaxi = ({
  classNa,
  classValue,
  label,
  value,
  handleOpenModalInfo,
}: ItemInfoTaxiProps) => {
  return (
    <li
      className={`text-sm px-3 rounded-lg text-gray-500 py-3 border-b border-gray-200 shadow-sm flex flex-col bg-gray-50 ${classNa}`}
      onClick={
        classNa === "cursor-pointer"
          ? handleOpenModalInfo && (() => handleOpenModalInfo(label))
          : () => {}
      }
    >
      <p>{label}:</p> <p className={`${classValue} text-base`}>{value}</p>
    </li>
  );
};
