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

export const ProfilePage = () => {
  return (
    <HomeLayout>
      <section className="p-4 container mx-auto sm:py-4 sm:px-0">
        <div className="">
          <figure className="">
            <img className="" src={avatar} alt="avatar" />

            <figcaption className="">
              <h1 className="">John Doe</h1>
              <p className="">Software Engineer</p>
            </figcaption>
          </figure>
        </div>

        <div className="">
          <div className="">
            <div className="">
              <h2 className="">Sobre mi</h2>

              <ul className="">
                <li className="">
                  <TbWorld />
                  <p>Colombia</p>
                </li>
                <li className="">
                  <PiCity />
                  <p>Cartagena</p>
                </li>
                <li className="">
                  <MdOutlineEmail />
                  <p>correo@gmail.com</p>
                </li>
                <li className="">
                  <FiPhone />
                  <p>+57 300 000 0000</p>
                </li>
              </ul>
            </div>

            <div className="">
              <h2>Información</h2>

              <ul className="">
                <li className="">
                  <BiTaxi />
                  <div className="">
                    <h2 className="">Taxis</h2>
                    <p className="">20</p>
                  </div>
                </li>
                <li className="">
                  <FaRegCheckSquare />
                  <div className="">
                    <h2 className="">Activos</h2>
                    <p className="">45</p>
                  </div>
                </li>
                <li className="">
                  <MdOutlineDoNotDisturbOff />
                  <div className="">
                    <h2 className="">Inactivos</h2>
                    <p className="">56</p>
                  </div>
                </li>
                <li className="">
                  <FaRegUser />
                  <div className="">
                    <h2 className="">Taxistas</h2>
                    <p className="">67</p>
                  </div>
                </li>
                <li className="">
                  <LuUserCheck />
                  <div className="">
                    <h2 className="">Activos</h2>
                    <p className="">78</p>
                  </div>
                </li>
                <li className="">
                  <FiUserX />
                  <div className="">
                    <h2 className="">Inactivos</h2>
                    <p className="">89</p>
                  </div>
                </li>
                <li className="">
                  <GiHomeGarage />
                  <div className="">
                    <h2 className="">En taller</h2>
                    <p className="">34</p>
                  </div>
                </li>
                <li className="">
                  <GiAutoRepair />
                  <div className="">
                    <h2 className="">En reparación</h2>
                    <p className="">45</p>
                  </div>
                </li>
                <li className="">
                  <MdOutlineAccessTime />
                  <div className="">
                    <h2 className="">En espera de repuestos</h2>
                    <p className="">56</p>
                  </div>
                </li>
                <li className="">
                  <IoCheckmarkDoneSharp />
                  <div className="">
                    <h2 className="">Listos</h2>
                    <p className="">67</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="">
            <div className="">
              <div>
                <h2>Ingresos y egresos</h2>

                <div>
                  <input type="date" name="" id="" />
                </div>
              </div>

              <div className="flex justify-between items-center gap-4 mt-4 md:justify-end">
                <div>
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
                <div>
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

            <div>
              <h2>Historial</h2>

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
