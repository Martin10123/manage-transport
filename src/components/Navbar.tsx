import { useState } from "react";
import { logo } from "../images";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

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
            <div className="inline-flex items-center gap-x-2 text-xl font-semibold">
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
            <button className="font-medium text-blue-500 focus:outline-none">
              Dashboard
            </button>
            <button className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400">
              Inicio
            </button>
            <button className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400">
              Taller
            </button>
            <button className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400 border-t border-gray-200 pt-4 sm:p-0 sm:border-none">
              Configuraciones
            </button>
            <button className="font-medium text-red-500 hover:text-red-600 focus:outline-none focus:text-red-400">
              Cerrar sesión
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
