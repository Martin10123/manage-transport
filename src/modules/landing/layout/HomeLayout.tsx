import { Navbar } from "../../../components/Navbar";
import { Footer } from "../../../components/Footer";

export const HomeLayout = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  return (
    <div className="w-full min-h-screen bg-gray-100">
      <Navbar />

      {children}

      <Footer />
    </div>
  );
};
