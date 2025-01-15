import * as echarts from "echarts/core";
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  LegendComponent,
  ToolboxComponent,
  DataZoomComponent,
  TransformComponent,
} from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
import { BarChart, LineChart, PieChart } from "echarts/charts";

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  LegendComponent,
  ToolboxComponent,
  CanvasRenderer,
  DataZoomComponent,
  TransformComponent,
  LineChart,
  BarChart,
  PieChart,
]);

export default echarts;
