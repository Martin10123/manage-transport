import { ECOptionEchart } from "../interfaces/EchartsInterfaces";

const legendData = [
  { value: 1048, name: "Taxi-1" },
  { value: 735, name: "Taxi-2" },
  { value: 580, name: "Taxi-3" },
  { value: 484, name: "Taxi-4" },
  { value: 300, name: "Taxi-5" },
  { value: 300, name: "Taxi-6" },
  { value: 300, name: "Taxi-7" },
  { value: 300, name: "Taxi-8" },
  { value: 300, name: "Taxi-9" },
  { value: 300, name: "Taxi-10" },
  { value: 300, name: "Taxi-11" },
  { value: 300, name: "Taxi-12" },
  { value: 300, name: "Taxi-13" },
  { value: 300, name: "Taxi-14" },
  { value: 300, name: "Taxi-15" },
  { value: 300, name: "Taxi-17" },
  { value: 300, name: "Taxi-18" },
  { value: 300, name: "Taxi-19" },
  { value: 300, name: "Taxi-20" },
  { value: 300, name: "Taxi-21" },
  { value: 300, name: "Taxi-22" },
  { value: 300, name: "Taxi-23" },
  { value: 300, name: "Taxi-24" },
  { value: 300, name: "Taxi-25" },
];

export const optionsPieChart: ECOptionEchart = {
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b}: {c} ({d}%)",
  },
  legend: {
    orient: "horizontal",
    left: "left",
    itemHeight: 12,
    itemWidth: 12,
    textStyle: {
      fontSize: 16,
    },
    type: "scroll",
    scrollDataIndex: 0,
    pageButtonItemGap: 10,
  },
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: "70%",
      data: legendData,
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
    },
  ],
};
