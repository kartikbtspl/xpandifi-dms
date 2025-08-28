import React from "react";
import { ValueType, NameType } from "recharts/types/component/DefaultTooltipContent";

export interface ChartDataItem {
  name: string;
  value: number;
}

export interface LineChartDataItem {
  name: string;
  target: number;
  achievement: number;
}

export interface PieDataItem {
  name: string;
  value: number;
}

export interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative";
  // icon is a react component (lucide icon)
  icon: React.ComponentType<any>;
  bgColor: string;
  iconColor: string;
}

export interface TooltipPropsExtended {
  active?: boolean;
  payload?: Array<{ value: ValueType }>;
  label?: NameType;
}
