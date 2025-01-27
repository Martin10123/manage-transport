interface Task {
  date: string;
  task: string;
  taskType: string;
  description: string;
}

export const tasksData: Task[] = [
  {
    date: "2025-01-24",
    task: "Actualizar el estado del taxi",
    taskType: "Mantenimiento",
    description:
      "Cambiar el estado del taxi (activo/inactivo) en la aplicación en tiempo real.",
  },
  {
    date: "2025-01-24",
    task: "Revisar la información de pico y placa",
    taskType: "Consulta",
    description:
      "Consultar las restricciones de circulación según el horario y el día para evitar multas.",
  },
  {
    date: "2025-01-24",
    task: "Supervisar el estado del vehículo",
    taskType: "Revisión",
    description:
      "Ver el diagnóstico técnico del taxi, incluyendo estado del motor, frenos, y otros componentes.",
  },
  {
    date: "2025-01-24",
    task: "Programar mantenimiento",
    taskType: "Mantenimiento",
    description:
      "Agendar las fechas de mantenimiento preventivo o reparaciones a través del calendario en la aplicación.",
  },
  {
    date: "2025-01-24",
    task: "Registrar ingresos",
    taskType: "Financiera",
    description:
      "Monitorear los ingresos generados diariamente, semanalmente y mensualmente para mantener un registro financiero.",
  },
  {
    date: "2025-01-24",
    task: "Revisar la información del conductor",
    taskType: "Consulta",
    description:
      "Confirmar el conductor asignado o notificar en caso de que no haya uno disponible.",
  },
  {
    date: "2025-01-24",
    task: "Gestionar repuestos",
    taskType: "Adquisición",
    description:
      "Consultar y adquirir los repuestos necesarios para las reparaciones y mantenimiento del vehículo.",
  },
  {
    date: "2025-01-24",
    task: "Consultar historial de taller",
    taskType: "Consulta",
    description:
      "Verificar las fechas de entradas previas al taller y los motivos (reparación, mantenimiento, etc.).",
  },
  {
    date: "2025-01-24",
    task: "Actualizar el diagnóstico del vehículo",
    taskType: "Mantenimiento",
    description:
      "Agregar o modificar información sobre reparaciones realizadas o problemas detectados.",
  },
  {
    date: "2025-01-24",
    task: "Cumplir con las reglas de circulación",
    taskType: "Regulación",
    description:
      "Usar la aplicación para asegurarse de que el vehículo esté en cumplimiento con las normativas locales.",
  },
];
