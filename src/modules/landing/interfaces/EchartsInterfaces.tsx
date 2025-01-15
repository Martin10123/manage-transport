import { ComposeOption } from "echarts";

import type {
  BarSeriesOption,
  LineSeriesOption,
  PieSeriesOption,
} from "echarts/charts";
import type {
  TitleComponentOption,
  TooltipComponentOption,
  GridComponentOption,
  DatasetComponentOption,
} from "echarts/components";

export type ECOptionEchart = ComposeOption<
  | BarSeriesOption
  | LineSeriesOption
  | PieSeriesOption
  | TitleComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | DatasetComponentOption
>;
