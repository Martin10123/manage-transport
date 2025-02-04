import { taxi1 } from "@/images";
import { HomeLayout } from "@/layout/HomeLayout";

export const DetailsTaxiGarage = () => {
  return (
    <HomeLayout>
      <section className="container mx-auto sm:py-4 sm:px-0 lg:grid lg:grid-cols-2 lg:gap-4">
        <figure className="relative m-2.5 overflow-hidden text-white rounded-md">
          <img className="rounded-md aspect-auto" src={taxi1} alt="Taxi" />
        </figure>

        <div className="p-4">
          <div>
            <div className="mb-4 rounded-full bg-blue-500 py-1 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-max text-center">
              En reparación
            </div>
            <h6 className="mb-2 text-slate-800 text-xl font-semibold">
              Taxi 1 -{" "}
              <span className="text-base text-gray-500">Luis Alfonso</span>
            </h6>
            <ul className="text-sm grid grid-cols-2 gap-y-4 text-gray-600">
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

          <div className="">
            <h2 className="text-slate-800 text-xl font-semibold mt-4">
              Descipción del problema
            </h2>

            <p className="text-gray-600 text-sm mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
              quaerat possimus aliquam quasi earum in voluptatem magnam.
              Temporibus, repellendus! Iusto explicabo tempora nobis incidunt,
              aut modi perspiciatis sapiente voluptatibus. Officia.
            </p>
          </div>

          <div className="border-t border-slate-200 mt-4">
            <h2 className="text-slate-800 text-xl font-semibold mt-4">
              Piezas necesarias
            </h2>

            <ul className="text-sm grid grid-cols-1 pt-4 gap-y-1 text-gray-600">
              <li>Frenos</li>
              <li>Llantas</li>
              <li>Aceite</li>
              <li>Filtro de aire</li>
            </ul>
          </div>

          <div className="border-t border-slate-200 mt-4">
            <h2 className="text-slate-800 text-xl font-semibold mt-4">
              Cambios realizados
            </h2>

            <ul className="text-sm grid grid-cols-1 pt-4 gap-y-1 text-gray-600">
              <li>Cambio de aceite</li>
              <li>Cambio de frenos</li>
              <li>Cambio de llantas</li>
            </ul>
          </div>

          <div className="border-t border-slate-200 mt-4">
            <h2 className="text-slate-800 text-xl font-semibold mt-4">
              Historial de reparaciones
            </h2>

            <ul className="text-sm grid grid-cols-1 pt-4 gap-y-1 text-gray-600">
              <li>
                <span className="font-semibold">10/01/2024</span> - Cambio de
                aceite
              </li>
              <li>
                <span className="font-semibold">10/01/2024</span> - Cambio de
                frenos
              </li>
              <li>
                <span className="font-semibold">10/01/2024</span> - Cambio de
                llantas
              </li>
            </ul>
          </div>

          <div className="flex justify-between border-t border-slate-200 mt-4 pt-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">
              Finalizar reparación
            </button>

            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md">
              Cancelar reparación
            </button>
          </div>
        </div>
      </section>
    </HomeLayout>
  );
};

export default DetailsTaxiGarage;
