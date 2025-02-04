import { formatToColombianPesos } from "@/helpers/convertMoney";
import { ColumnDef } from "@tanstack/react-table";
import dayjs from "dayjs";

export const columnsDataMoney: ColumnDef<{
  id: number;
  date: string;
  money: number;
  description: string;
}>[] = [
  {
    header: "ID",
    accessorKey: "id",
  },
  {
    header: "Fecha",
    accessorKey: "date",
    cell: ({ getValue }) => dayjs(getValue() as string).format("DD/MM/YYYY"),
  },
  {
    header: "Descripción",
    accessorKey: "description",
  },
  {
    header: "Monto",
    accessorKey: "money",
    cell: ({ getValue }) =>
      `${formatToColombianPesos(getValue() as number)} pesos`,
  },
];
