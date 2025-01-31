import { avatar, taxi1 } from "@/images";

export const CardTaxiGarage = () => {
  return (
    <div className="relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-full sm:w-80">
      <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
        <img src={taxi1} alt="card-image" />
      </div>
      <div className="p-4">
        <div className="mb-4 rounded-full bg-blue-500 py-1 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-max text-center">
          En reparación
        </div>
        <h6 className="mb-2 px-2 text-slate-800 text-xl font-semibold">
          Taxi 1 - <span className="text-base text-gray-500">Luis Alfonso</span>
        </h6>
        <ul className="text-sm px-2 grid grid-cols-2 gap-y-4 text-gray-600">
          <li>
            Placa: <br /> ABC-123
          </li>
          <li>
            Fecha de ingreso: <br /> 10/01/2024
          </li>
          <li>
            Marca: <br /> Toyota
          </li>
          <li>
            Modelo: <br /> Corolla
          </li>
        </ul>
      </div>

      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <img
            alt="Tania Andrew"
            src={avatar}
            className="relative inline-block h-8 w-8 object-cover rounded-full"
          />
          <div className="flex flex-col ml-3 text-sm">
            <span className="text-slate-800 font-semibold">Lewis Daniel</span>
            <span className="text-slate-600">January 10, 2024</span>
          </div>
        </div>

        <div>
          <button className="text-blue-500 hover:text-blue-600 focus:outline-none">
            Detalles
          </button>
        </div>
      </div>
    </div>
  );
};
