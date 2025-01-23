import { useEffect, useRef } from "react";
import echarts from "@/config/echartConfig";
import { ECOptionEchart } from "@/interfaces/EchartsInterfaces";

interface EChartProps {
  options: ECOptionEchart;
}

export const EChartComponent = ({ options }: EChartProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let chart: echarts.ECharts | null = null;

    if (ref.current) {
      chart =
        echarts.getInstanceByDom(ref.current) || echarts.init(ref.current);
      chart.setOption(options);
    }

    const handleResize = () => {
      if (chart) chart.resize();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (chart) chart.dispose();
      window.removeEventListener("resize", handleResize);
    };
  }, [options]);

  return <div ref={ref} className="w-full h-full rounded-lg"></div>;
};
