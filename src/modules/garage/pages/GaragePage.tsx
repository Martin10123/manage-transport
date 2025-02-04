import { CardItemTaxi } from "@/components/CardItemTaxi";
import { HomeLayout } from "@/layout/HomeLayout";
import { CardTaxiGarage } from "../components/CardTaxiGarage";

export const GaragePage = () => {
  return (
    <HomeLayout>
      <section className="p-4 container mx-auto sm:py-4 sm:px-0">
        <div className="p-4 bg-white rounded-md shadow-md">
          <h1 className="text-2xl m-0 font-semibold">Taller</h1>

          <p className="mt-2 text-sm text-gray-600">
            Aqui veras todos los taxis que estan en el taller, podras ver el
            estado de cada uno de ellos y el tiempo que les falta para salir del
            taller.
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-4">
            <CardItemTaxi
              icon="/assets/taxi.svg"
              title="Total de taxis en el taller"
              total={400}
              description="Tienes un total de 400 taxis en el taller."
            />

            <CardItemTaxi
              icon="/assets/repair.svg"
              title="En reparación"
              total={200}
              description="Tienes un total de 200 taxis en reparación."
            />

            <CardItemTaxi
              icon="/assets/waiting.svg"
              title="En espera de repuestos"
              total={150}
              description="Tienes un total de 150 taxis en espera de repuestos."
            />

            <CardItemTaxi
              icon="/assets/check.svg"
              title="Listos para salir"
              total={50}
              description="Tienes un total de 50 taxis listos para salir."
            />
          </div>
        </div>

        <div className="p-4 mt-4 bg-white rounded-md shadow-md grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="text-sm text-gray-500 mb-3 font-semibold">
              Ingresados hace: <span>2 dias</span>
            </h2>

            <select className="py-3 px-4 pe-9 block w-full bg-white border border-gray-200 rounded-lg text-sm">
              <option value="">Hace 2 dias</option>
              <option value="">Hace 3 dias</option>
              <option value="">Hace más de 1 semana</option>
              <option value="">Hace más de 1 mes</option>
              <option value="">Hace más de 6 meses</option>
            </select>
          </div>

          <div>
            <h2 className="text-sm text-gray-500 mb-3 font-semibold">
              Estado: <span>En reparación</span>
            </h2>

            <select className="py-3 px-4 pe-9 block w-full bg-white border border-gray-200 rounded-lg text-sm">
              <option value="">En reparación</option>
              <option value="">En espera de repuestos</option>
              <option value="">Listo para salir</option>
            </select>
          </div>

          <div>
            <h2 className="text-sm text-gray-500 mb-3 font-semibold">
              Tiempo restante: <span>2 dias</span>
            </h2>

            <select className="py-3 px-4 pe-9 block w-full bg-white border border-gray-200 rounded-lg text-sm">
              <option value="">2 dias</option>
              <option value="">3 dias</option>
              <option value="">1 semana</option>
              <option value="">1 mes</option>
              <option value="">6 meses</option>
            </select>
          </div>

          <div>
            <h2 className="text-sm text-gray-500 mb-3 font-semibold">
              Buscar por placa
            </h2>

            <input
              type="text"
              placeholder="Buscar por placa..."
              className="py-3 px-4 w-full bg-white border border-gray-200 rounded-lg text-sm"
            />
          </div>
        </div>

        <div className="p-4 mt-4 bg-white rounded-md shadow-md">
          <h2 className="text-lg font-semibold text-gray-500 mb-4">
            Taxis en el taller
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-auto-fill-300">
            <CardTaxiGarage />
            <CardTaxiGarage />
            <CardTaxiGarage />
            <CardTaxiGarage />
            <CardTaxiGarage />
            <CardTaxiGarage />
            <CardTaxiGarage />
            <CardTaxiGarage />
          </div>
        </div>
      </section>
    </HomeLayout>
  );
};

export default GaragePage;
