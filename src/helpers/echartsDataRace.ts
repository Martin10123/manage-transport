import { ECOptionEchart } from "../interfaces/EchartsInterfaces";

export const optionBarLine: ECOptionEchart = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  grid: {
    left: "3%",
    right: "9%",
    bottom: "8%",
    containLabel: true,
  },
  xAxis: [
    {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      axisTick: {
        alignWithLabel: true,
      },
    },
  ],
  yAxis: [
    {
      type: "value",
    },
  ],
  series: [
    {
      name: "Taxi-1",
      type: "bar",
      data: [10, 52, 200, 334, 390, 330, 220],
    },
    {
      name: "Taxi-2",
      type: "bar",
      data: [10, 52, 200, 334, 390, 330, 220],
    },
    {
      name: "Taxi-3",
      type: "bar",
      data: [10, 52, 200, 334, 390, 330, 220],
    },
    {
      name: "Taxi-4",
      type: "bar",
      data: [10, 52, 200, 334, 390, 330, 220],
    },
    {
      name: "Taxi-5",
      type: "bar",
      data: [10, 52, 200, 334, 390, 330, 220],
    },
    {
      name: "Taxi-6",
      type: "bar",
      data: [10, 52, 200, 334, 390, 330, 220],
    },
  ],
  calculable: true,
  dataZoom: [
    {
      show: true,
      start: 0,
      end: 100,
    },
    {
      type: "inside",
      start: 94,
      end: 100,
    },
    {
      show: true,
      yAxisIndex: 0,
      filterMode: "empty",
      width: 30,
      height: "80%",
      showDataShadow: false,
      left: "93%",
    },
  ],
};
