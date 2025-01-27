import { ECOptionEchart } from "../interfaces/EchartsInterfaces";

export const optionLineEchart: ECOptionEchart = {
  tooltip: {
    trigger: "axis",
  },
  legend: {
    data: [
      "Taxis totales",
      "Taxis activos",
      "Taxis en taller",
      "Taxis inactivos",
    ],
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    top: "15%",
    containLabel: true,
  },
  toolbox: {
    feature: {
      saveAsImage: {},
    },
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      name: "Taxis totales",
      type: "line",
      data: [50, 30, 100, 56, 34, 23, 45],
    },
    {
      name: "Taxis activos",
      type: "line",
      data: [50, 20, 50, 34, 23, 10, 44],
    },
    {
      name: "Taxis en taller",
      type: "line",
      data: [0, 5, 25, 12, 10, 3, 0],
    },
    {
      name: "Taxis inactivos",
      type: "line",
      data: [0, 5, 25, 4, 1, 10, 1],
    },
  ],
};
