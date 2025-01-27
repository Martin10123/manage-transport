interface ItemLastReviewProps {
  label: string;
  value: string;
}

export const ItemLastReview = ({ label, value }: ItemLastReviewProps) => {
  return (
    <div className="mt-4">
      <h3 className="text-sm text-gray-500">{label}</h3>
      <p className="text-base text-gray-800 font-semibold">{value}</p>
    </div>
  );
};
