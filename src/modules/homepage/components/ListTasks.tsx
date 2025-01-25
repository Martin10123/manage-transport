import { CiViewTable } from "react-icons/ci";
import { tasksData } from "../data/dataTasks";
import { TBodyTRTable } from "./TBodyTRTable";

export const ListTasks = () => {
  return (
    <div className="mt-4 rounded-lg shadow-md p-4 bg-white">
      <div className="flex justify-between items-center gap-2 mb-4">
        <h3 className="text-xl font-semibold text-black mb-2">
          Lista de tareas
        </h3>

        <CiViewTable className="cursor-pointer" size={25} />
      </div>

      <div className="overflow-x-auto">
        <table className="items-center w-full mb-4 align-top border-gray-200 dark:border-white/40">
          <tbody>
            {tasksData.map((task) => (
              <TBodyTRTable
                key={task.description}
                rows={[
                  { label: "Fecha", value: task.date },
                  {
                    label: "Tarea",
                    value: task.task,
                  },
                  { label: "Tipo de tarea", value: task.taskType },
                  { label: "Descripción", value: task.description },
                ]}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
