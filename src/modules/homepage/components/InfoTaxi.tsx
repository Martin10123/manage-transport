import { ItemInfoTaxi } from "./ItemInfoTaxi";
import { ItemLastReview } from "./ItemLastReview";

const dataInfoTaxi = [
  {
    label: "Estado",
    value: "Activo",
    classValue: "font-semibold text-green-500",
  },
  {
    label: "Placa",
    value: "ABC-123",
    classValue: "font-semibold text-yellow-500",
  },
  {
    label: "Marca",
    value: "Chevrolet",
    classValue: "font-semibold text-gray-800",
  },
  {
    label: "Modelo",
    value: "2020",
    classValue: "font-semibold text-gray-800",
  },
  {
    label: "Color",
    value: "Rojo",
    classValue: "font-semibold text-gray-800",
  },
  {
    label: "Tipo",
    value: "Sedan",
    classValue: "font-semibold text-gray-800",
  },
  {
    label: "En taller",
    value: "2",
    classValue: "font-semibold text-red-500",
    classNa: "cursor-pointer",
  },
  {
    label: "Mantenimientos",
    value: "4",
    classValue: "font-semibold text-red-500",
    classNa: "cursor-pointer",
  },
  {
    label: "Accidentes",
    value: "3",
    classValue: "font-semibold text-red-500",
    classNa: "cursor-pointer",
  },
  {
    label: "Multas",
    value: "5",
    classValue: "font-semibold text-red-500",
    classNa: "cursor-pointer",
  },
];

export const InfoTaxi = () => {
  return (
    <div className="mt-4 rounded-lg shadow-md p-4 bg-white sm:mt-0">
      <h2 className="text-3xl mb-4 font-bold text-gray-800">Taxi 1</h2>

      <ul className="grid grid-cols-2 gap-2">
        {dataInfoTaxi.map((item) => (
          <ItemInfoTaxi key={item.value} {...item} />
        ))}
      </ul>

      <div className="grid grid-cols-1 gap-2 mt-4 border-y border-gray-200 py-4 bg-gray-50 px-4">
        <h2 className="text-base text-gray-500">
          Pico y placa:{" "}
          <span className="text-black font-semibold">Lunes, 21/01/2025</span>
        </h2>

        <p className="text-base py-1 rounded-lg text-black">
          Estado: <p className="text-green-500">Activo</p>
        </p>

        <div className="grid grid-cols-2 gap-2">
          <p className="text-base py-1 rounded-lg text-black">
            Lunes: <p className="text-black font-semibold">1-2</p>
          </p>

          <p className="text-base py-1 rounded-lg text-gray-500">
            Martes: <p className="text-red-500 font-semibold">3-4</p>
          </p>

          <p className="text-base py-1 rounded-lg text-gray-500">
            Miercoles: <p className="text-black font-semibold">5-6</p>
          </p>

          <p className="text-base py-1 rounded-lg text-gray-500">
            Jueves: <p className="text-black font-semibold">7-8</p>
          </p>

          <p className="text-base py-1 rounded-lg text-gray-500">
            Viernes: <p className="text-red-500 font-semibold">9-0</p>
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
