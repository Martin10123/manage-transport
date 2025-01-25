import { avatar } from "@/images";
import { FaGoogle } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdOutlineCalendarMonth } from "react-icons/md";

export const UserDriverTaxi = () => {
  return (
    <div className="mt-4 rounded-lg shadow-md p-4 bg-white md:grid md:grid-cols-2">
      <div className="grid grid-cols-1 mt-4">
        <h3 className="text-base font-semibold text-gray-500">Asignado a:</h3>

        <figure className="flex items-center justify-center gap-4 mt-2">
          <img
            className="inline-block w-52 h-52 aspect-auto object-cover rounded-full"
            src={avatar}
            alt="Avatar"
          />
        </figure>

        <h1 className="text-4xl font-bold text-gray-800 text-center my-4 capitalize">
          Martin Simarra
        </h1>
      </div>

      <ul className="grid grid-cols-1 gap-1 mt-2 md:grid-cols-1 md:gap-2">
        <li className="flex flex-col text-sm text-black font-semibold border gap-1 border-gray-200 p-4 rounded-xl bg-gray-50">
          <MdOutlineCalendarMonth className="mb-1" size={30} color="gray" />
          Fecha de ingreso:
          <span className="text-gray-500 text-base">12/12/2024</span>
        </li>
        <li className="flex flex-col text-sm text-black font-semibold border gap-1 border-gray-200 p-4 rounded-xl bg-gray-50">
          <IoIosPhonePortrait className="mb-1" size={30} color="gray" />
          <p>Telefono:</p>
          <span className="text-gray-500 text-base">123456789</span>
        </li>
        <li className="flex flex-col text-sm text-black font-semibold border gap-1 border-gray-200 p-4 rounded-xl bg-gray-50">
          <FaGoogle className="mb-1" size={30} color="gray" />
          <p>Correo:</p>
          <span className="text-gray-500 text-base truncate">
            martinsimarra1012@gmail.com
          </span>
        </li>
        <li className="flex flex-col text-sm text-black font-semibold border gap-1 border-gray-200 p-4 rounded-xl bg-gray-50">
          <HiOutlineDocumentText className="mb-1" size={30} color="gray" />
          <p>Documento:</p>
          <span className="text-gray-500 text-base">1000222000</span>
        </li>
      </ul>
    </div>
  );
};
