import { SimpleTable } from "@/components/SimpleTable";
import { avatar } from "@/images";
import { HomeLayout } from "@/layout/HomeLayout";
import { BiTaxi } from "react-icons/bi";
import { FaRegCheckSquare, FaRegUser } from "react-icons/fa";
import { FiPhone, FiUserX } from "react-icons/fi";
import { GiAutoRepair, GiHomeGarage } from "react-icons/gi";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { LuUserCheck } from "react-icons/lu";
import {
  MdOutlineAccessTime,
  MdOutlineDoNotDisturbOff,
  MdOutlineEmail,
} from "react-icons/md";
import { PiCity } from "react-icons/pi";
import { TbWorld } from "react-icons/tb";
import dataTable from "@/MOCK_DATA (2).json";
import { columnsDataMoney } from "@/modules/homepage/data/dataFakeColumn";
import { ItemListAbout } from "../components/ItemListAbout";
import { ItemInformation } from "../components/ItemInformation";

export const ProfilePage = () => {
  return (
    <HomeLayout>
      <section className="p-4 container mx-auto sm:py-4 sm:px-0">
        <div className="bg-white p-4 rounded-lg shadow-md flex justify-center items-center gap-4">
          <figure className="flex flex-col items-center gap-4">
            <img
              className="size-40 object-cover rounded-full shadow-md"
              src={avatar}
              alt="avatar"
            />

            <figcaption className="">
              <h1 className="text-3xl text-center font-semibold text-gray-800 m-0">
                John Doe
              </h1>
              <p className="text-center text-sm text-gray-500">Jefe de flota</p>
            </figcaption>
          </figure>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md mt-4 sm:grid sm:grid-cols-[1fr,2fr] sm:gap-10">
          <div className="">
            <div className="grid gap-6">
              <h2 className="text-base font-semibold text-gray-800">
                Sobre mi
              </h2>

              <ul className="grid gap-2 sm:grid-cols-2 sm:gap-6">
                <ItemListAbout icon={<TbWorld size={22} />} text="Colombia" />
                <ItemListAbout icon={<PiCity size={22} />} text="Cartagena" />
                <ItemListAbout
                  icon={<MdOutlineEmail size={22} />}
                  text="correo@gmail.com"
                />
                <ItemListAbout
                  icon={<FiPhone size={22} />}
                  text="+57 300 000 0000"
                />
              </ul>
            </div>

            <div className="my-6 border-y border-gray-200 py-4 grid gap-6">
              <h2 className="text-base font-semibold text-gray-800">
                Información
              </h2>

              <ul className="grid grid-cols-2 gap-3 sm:gap-8">
                <ItemInformation
                  icon={<BiTaxi size={22} />}
                  title="Taxis"
                  value="20"
                />

                <ItemInformation
                  icon={<FaRegCheckSquare size={22} />}
                  title="Activos"
                  value="45"
                />
                <ItemInformation
                  icon={<MdOutlineDoNotDisturbOff size={22} />}
                  title="Inactivos"
                  value="56"
                />
                <ItemInformation
                  icon={<FaRegUser size={22} />}
                  title="Taxistas"
                  value="67"
                />
                <ItemInformation
                  icon={<LuUserCheck size={22} />}
                  title="Activos"
                  value="78"
                />
                <ItemInformation
                  icon={<FiUserX size={22} />}
                  title="Inactivos"
                  value="89"
                />
                <ItemInformation
                  icon={<GiHomeGarage size={22} />}
                  title="En taller"
                  value="34"
                />
                <ItemInformation
                  icon={<GiAutoRepair size={22} />}
                  title="En reparación"
                  value="45"
                />
                <ItemInformation
                  icon={<MdOutlineAccessTime size={22} />}
                  title="En espera de repuestos"
                  value="56"
                />
                <ItemInformation
                  icon={<IoCheckmarkDoneSharp size={22} />}
                  title="Listos"
                  value="67"
                />
              </ul>
            </div>
          </div>

          <div className="">
            <div className="">
              <div className="flex justify-between items-center gap-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  Ingresos y egresos
                </h2>

                <div>
                  <input
                    className="bg-white border border-gray-200 rounded-md p-2"
                    type="date"
                    name=""
                    id=""
                    value={new Date().toISOString().split("T")[0]}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2">
                <div className="border border-gray-200 p-4 rounded-lg">
                  <h2 className="text-sm font-semibold text-gray-500">
                    Total ingresos:{" "}
                  </h2>
                  <p className="text-xl font-bold text-gray-800">
                    $200.000{" "}
                    <span className="ml-2 text-lg font-normal text-green-500">
                      +10%
                    </span>
                  </p>
                </div>

                <div className="border border-gray-200 p-4 rounded-lg">
                  <h2 className="text-sm font-semibold text-gray-500">
                    Total egresos:{" "}
                  </h2>
                  <p className="text-xl font-bold text-gray-800">
                    $200.000{" "}
                    <span className="ml-2 text-lg font-normal text-red-500">
                      +10%
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 border-y border-gray-200 py-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Historial de movimientos
              </h2>

              <div>
                <SimpleTable
                  data={dataTable}
                  columns={columnsDataMoney}
                  activeOptions
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </HomeLayout>
  );
};

export default ProfilePage;
