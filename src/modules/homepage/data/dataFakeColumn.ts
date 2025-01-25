import { ColumnDef } from "@tanstack/react-table";
import dayjs from "dayjs";

export const columnsDataMoney: ColumnDef<{
  id: number;
  date: string;
  money: string;
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
  },
];
