import { SimpleTable } from "@/components/SimpleTable";
import { CardItemTaxi } from "@/components/CardItemTaxi";
import { EChartComponent } from "@/components/EchartComponent";
import { columnsData } from "@/data/columnTableFake";
import { optionLineEchart } from "@/helpers/echartsData";
import { optionsPieChart } from "@/helpers/echartsDataBar";
import { optionBarLine } from "@/helpers/echartsDataRace";
import { HomeLayout } from "@/layout/HomeLayout";

import dataTable from "@/MOCK_DATA.json";

export const DeshboardPage = () => {
  return (
    <HomeLayout>
      <main className="p-4 container mx-auto sm:py-4 sm:px-0">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <CardItemTaxi
            icon="/assets/taxi.svg"
            title="Taxis"
            total={20}
            description="Tienes un total de 20 taxis."
          />

          <CardItemTaxi
            icon="/assets/active.svg"
            title="Taxis activos"
            total={15}
            description="Tienes un total de 15 taxis activos."
          />

          <CardItemTaxi
            icon="/assets/garage.svg"
            title="Taxis en taller"
            total={2}
            description="Tienes un total de 2 taxis en taller."
          />

          <CardItemTaxi
            icon="/assets/off.svg"
            title="Taxis inactivos"
            total={3}
            description="Tienes un total de 3 taxis inactivos."
          />
        </div>

        <div>
          <div className="w-full mt-4 bg-white rounded-lg shadow-md border">
            <h2 className="p-4 text-xl font-semibold border-b mb-4">
              Actividad de taxis
            </h2>

            <div className="w-full h-[30rem]">
              <EChartComponent options={optionLineEchart} />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-4">
            <div className="w-full mt-4 bg-white rounded-lg shadow-md border">
              <h2 className="p-4 text-xl font-semibold border-b mb-4">
                Total generado por taxis
              </h2>

              <div className="w-full h-[40rem]">
                <EChartComponent options={optionBarLine} />
              </div>
            </div>

            <div className="w-full mt-4 bg-white rounded-lg shadow-md border">
              <h2 className="p-4 text-xl font-semibold border-b mb-4">
                Gastos generados por taxis
              </h2>

              <div className="w-full h-[30rem]">
                <EChartComponent options={optionsPieChart} />
              </div>
            </div>
          </div>
        </div>

        <SimpleTable data={dataTable} columns={columnsData} />
      </main>
    </HomeLayout>
  );
};
