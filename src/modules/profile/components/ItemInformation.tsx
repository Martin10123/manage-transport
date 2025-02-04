interface ItemInformationProps {
  icon: React.ReactNode;
  title: string;
  value: string;
}

export const ItemInformation = ({
  icon,
  title,
  value,
}: ItemInformationProps) => {
  return (
    <li className="flex items-start gap-2">
      {icon}
      <div className="text-[#1f2937]">
        <h2 className="text-sm font-semibold text-gray-800">{title}</h2>

        <p>{value}</p>
      </div>
    </li>
  );
};
