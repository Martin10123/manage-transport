interface CardItemTaxiProps {
  icon: string;
  title: string;
  total: number;
  description: string;
}

export const CardItemTaxi = ({
  description,
  icon,
  title,
  total,
}: CardItemTaxiProps) => {
  return (
    <div className="shadow rounded-lg border bg-white">
      <div className="flex items-center gap-4 p-4">
        <figure className="w-max shadow-lg bg-white border p-3 rounded-full">
          <img className="size-6" src={icon} alt={title} />
        </figure>

        <div>
          <h2 className="text-base text-gray-400">{title}</h2>
          <p className="text-2xl font-bold">{total}</p>
        </div>
      </div>
      <div className="border-t border-gray-200 p-4">
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </div>
  );
};
