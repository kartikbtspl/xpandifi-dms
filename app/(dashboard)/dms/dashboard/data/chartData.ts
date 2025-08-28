import { ChartDataItem, LineChartDataItem, PieDataItem } from "../types/dashboardTypes";

export const barChartData: ChartDataItem[] = [
  { name: "John Doe", value: 60000 },
  { name: "Jane Smith", value: 35000 },
  { name: "Mike Johnson", value: 28000 },
];

export const lineChartData: LineChartDataItem[] = [
  { name: "John Doe", target: 30000, achievement: 35000 },
  { name: "Jane Smith", target: 120000, achievement: 95000 },
  { name: "Sarah Wilson", target: 60000, achievement: 35000 },
  { name: "Lisa Chen", target: 120000, achievement: 120000 },
];

export const pieData: PieDataItem[] = [
  { name: "Filled", value: 80 },
  { name: "Unfilled", value: 20 },
];
