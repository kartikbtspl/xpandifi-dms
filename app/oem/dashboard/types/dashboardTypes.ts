import { LucideIcon } from "lucide-react";

export interface MetricCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  bgColor: string;
  iconColor: string;
}

export interface RevenueData {
  month: string;
  sales: number;
  expenses: number;
  target: number;
}

export interface TradeDataPoint {
  month: string;
  target: number;
  achieved: number;
}
