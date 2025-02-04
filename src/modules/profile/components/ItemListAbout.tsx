interface ItemListAboutProps {
  icon: React.ReactNode;
  text: string;
}

export const ItemListAbout = ({ icon, text }: ItemListAboutProps) => {
  return (
    <li className="flex items-center gap-2 text-[#1f2937]">
      {icon}
      <p className="text-base font-normal">{text}</p>
    </li>
  );
};
