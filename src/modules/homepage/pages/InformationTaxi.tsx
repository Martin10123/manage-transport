import { HomeLayout } from "@/layout/HomeLayout";

import { UserDriverTaxi } from "../components/UserDriverTaxi";
import { HistoryMovements } from "../components/HistoryMovements";
import { InfoTaxi } from "../components/InfoTaxi";
import { ListTasks } from "../components/ListTasks";
import { ButtonsInfoTaxi } from "../components/ButtonsInfoTaxi";
import { ImagesTaxi } from "../components/ImagesTaxi";
import { EChartComponent } from "@/components/EchartComponent";
import { optionPieChart } from "../helpers/OptionsPieChart";

export const InformationTaxi = () => {
  return (
    <HomeLayout>
      <section className="p-4 container mx-auto sm:py-4 sm:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr,1fr] lg:gap-4 max-w-full">
          <ImagesTaxi />

          <InfoTaxi />
        </div>

        <div>
          <div className="lg:grid lg:grid-cols-[2fr,1fr] lg:gap-4">
            <UserDriverTaxi />

            <div className="w-full mt-4 bg-white rounded-lg shadow-md border">
              <h2 className="p-4 text-xl font-semibold border-b mb-4">
                Total generado por taxis
              </h2>

              <div className="w-full h-[20rem]">
                <EChartComponent options={optionPieChart} />
              </div>
            </div>
          </div>

          <HistoryMovements />

          <ListTasks />

          <ButtonsInfoTaxi />
        </div>
      </section>
    </HomeLayout>
  );
};
