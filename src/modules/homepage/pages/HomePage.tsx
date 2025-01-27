import { CardItemTaxi } from "@/components/CardItemTaxi";
import { SimpleTable } from "@/components/SimpleTable";
import { columnsData } from "@/data/columnTableFake";
import { HomeLayout } from "@/layout/HomeLayout";

import dataTable from "@/MOCK_DATA.json";

export const HomePage = () => {
  return (
    <HomeLayout>
      <section className="p-4 container mx-auto sm:py-4 sm:px-0">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <CardItemTaxi
            icon="/assets/money.svg"
            title="Total de ingresos"
            total="$ 200.000.000"
            description="Tienes un total de $ 200.000.000 en ingresos."
          />

          <CardItemTaxi
            icon="/assets/active-taxis.svg"
            title="Taxistas activos"
            total={200}
            description="Tienes un total de 200 taxistas activos."
          />

          <CardItemTaxi
            icon="/assets/user-active.svg"
            title="Taxistas activos"
            total={150}
            description="tienes un total de 50 taxistas con taxis asignados."
          />

          <CardItemTaxi
            icon="/assets/user-block.svg"
            title="Taxistas inactivos"
            total={50}
            description="Tienes un total de 50 taxistas sin taxis asignados."
          />
        </div>

        <div>
          <SimpleTable data={dataTable} columns={columnsData} activeOptions />
        </div>
      </section>
    </HomeLayout>
  );
};

export default HomePage;
