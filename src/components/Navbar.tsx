import { useState } from "react";
import { logo } from "@/images";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { SocialMedia } from "./SocialMedia";
import { NavLink } from "react-router-dom";
import { routes } from "@/routes/routes";

export const Navbar = () => {
  const [openNavDrop, setOpenNavDrop] = useState(false);

  const handleNavDrop = () => {
    setOpenNavDrop(!openNavDrop);
  };

  return (
    <header className="relative container m-auto flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-3 border-b rounded-b-lg shadow-sm">
      <nav className="w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center justify-between">
          <div className="w-max flex-none text-xl font-semibold focus:outline-none focus:opacity-80">
            <div className="inline-flex items-center gap-x-2 text-xl font-semibold cursor-pointer">
              <img className="w-10 h-auto" src={logo} alt="Logo" />
              <p>MT</p>
            </div>
          </div>
          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle relative size-7 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
              onClick={handleNavDrop}
            >
              {!openNavDrop && <IoMdMenu />}

              {openNavDrop && <IoClose />}
            </button>
          </div>
        </div>
        <div
          className={`absolute shadow w-full top-[4.4rem] left-0 p-4 overflow-hidden transition-all duration-300 basis-full grow bg-white sm:block ${
            openNavDrop ? "block" : "hidden sm:relative sm:top-0 sm:shadow-none"
          }`}
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
            {routes.map((routes) => (
              <NavLink
                key={routes.name}
                to={routes.to}
                className={({ isActive }) => {
                  return `font-medium focus:outline-none flex justify-center items-center ${
                    isActive
                      ? "text-blue-500 hover:text-blue-700"
                      : "text-gray-500 hover:text-gray-900"
                  }`;
                }}
              >
                {routes.name}
              </NavLink>
            ))}

            <button className="font-medium text-red-500 hover:text-red-600 focus:outline-none focus:text-red-400">
              Cerrar sesión
            </button>
          </div>

          <div className="flex justify-center border-t border-gray-200 mt-4 sm:hidden">
            <SocialMedia />
          </div>
        </div>
      </nav>
    </header>
  );
};
