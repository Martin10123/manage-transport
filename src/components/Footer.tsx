import { logo } from "@/images";
import { SocialMedia } from "./SocialMedia";

export const Footer = () => {
  return (
    <footer className="mt-auto w-full container py-10 px-4 sm:px-6 lg:px-8 mx-auto border-t border-gray-200 bg-white rounded-t-lg shadow-md">
      <div className="text-center">
        <div className="flex-none text-xl font-semibold focus:outline-none focus:opacity-80">
          <span className="inline-flex items-center gap-x-2 text-xl font-semibold">
            <img className="w-10 h-auto" src={logo} alt="Logo" />
            MT
          </span>
        </div>

        <div className="mt-3">
          <p className="text-gray-500 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
            <a
              className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium"
              href="#"
            >
              Learn more
            </a>{" "}
            about our company.
          </p>
        </div>

        <SocialMedia />

        <div className="mt-6 text-sm text-gray-500">
          <p className="text-gray-500">
            © {new Date().getFullYear()} company name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
