export const ButtonsInfoTaxi = () => {
  return (
    <div className="mt-4 rounded-lg shadow-md p-4 bg-white lg:grid lg:grid-cols-2 lg:gap-4">
      <div>
        <p>
          Activar o desactivar el taxi para que pueda ser visible en la
          aplicación.
        </p>

        <div className="flex gap-4 mt-4">
          <p>Inactivo</p>

          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="w-9 h-5 bg-gray-200 hover:bg-gray-300 peer-focus:outline-0 peer-focus:ring-transparent rounded-full peer transition-all ease-in-out duration-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] md:after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-indigo-600 hover:peer-checked:bg-indigo-700"></div>
          </label>

          <p>Activo</p>
        </div>
      </div>

      <div className="flex items-center gap-2 mt-6 sm:justify-end">
        <button className="bg-blue-500 text-white rounded-lg py-2 px-4 w-max sm:py-3 sm:px-6 duration-200 hover:bg-blue-600 hover:shadow-lg">
          Enviar al taller
        </button>

        <button className="bg-gray-300 text-black rounded-lg py-2 px-4 w-max sm:py-3 sm:px-6 duration-200 hover:bg-gray-400 hover:shadow-lg">
          asignar conductor
        </button>
      </div>
    </div>
  );
};
