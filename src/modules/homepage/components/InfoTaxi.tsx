import { dataInfoTaxi } from "../data/dataInfoTaxi";
import { ItemInfoTaxi } from "./ItemInfoTaxi";
import { ItemLastReview } from "./ItemLastReview";

interface InfoTaxiProps {
  handleOpenModalInfo: (name: string) => void;
}

export const InfoTaxi = ({ handleOpenModalInfo }: InfoTaxiProps) => {
  return (
    <div className="mt-4 rounded-lg shadow-md p-4 bg-white sm:mt-0">
      <h2 className="text-3xl mb-4 font-bold text-gray-800">Taxi 1</h2>

      <ul className="grid grid-cols-2 gap-2">
        {dataInfoTaxi.map((item) => (
          <ItemInfoTaxi
            key={item.value}
            {...item}
            handleOpenModalInfo={handleOpenModalInfo}
          />
        ))}
      </ul>

      <div className="grid grid-cols-1 gap-2 mt-4 border-y border-gray-200 py-4 bg-gray-50 px-4">
        <h2 className="text-base text-gray-500">
          Pico y placa:{" "}
          <span className="text-black font-semibold">Lunes, 21/01/2025</span>
        </h2>

        <p className="text-base py-1 rounded-lg text-black">
          Estado: <span className="block text-green-500">Activo</span>
        </p>

        <div className="grid grid-cols-2 gap-2">
          <p className="text-base py-1 rounded-lg text-black">
            Lunes: <span className="block  text-black font-semibold">1-2</span>
          </p>

          <p className="text-base py-1 rounded-lg text-gray-500">
            Martes:{" "}
            <span className="block  text-red-500 font-semibold">3-4</span>
          </p>

          <p className="text-base py-1 rounded-lg text-gray-500">
            Miercoles:{" "}
            <span className="block  text-black font-semibold">5-6</span>
          </p>

          <p className="text-base py-1 rounded-lg text-gray-500">
            Jueves: <span className="block  text-black font-semibold">7-8</span>
          </p>

          <p className="text-base py-1 rounded-lg text-gray-500">
            Viernes:{" "}
            <span className="block  text-red-500 font-semibold">9-0</span>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <ItemLastReview label="Ubiciación actual" value="Cartagena, Bolivar" />

        <ItemLastReview label="Ultimo mantenimiento" value="12/12/2024" />

        <ItemLastReview label="Ultima revisión" value="12/12/2024" />

        <ItemLastReview label="Ultima visita taller" value="12/12/2024" />
      </div>
    </div>
  );
};
