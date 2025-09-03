import React from "react";

export interface MetricCardProps {
  title: string;
  value: string;
  suffix?: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  suffix = ""
}) => (
  <div className="bg-white rounded-2xl p-6 flex-1 min-w-[160px] shadow-sm">
    <p className="text-sm font-medium text-gray-700">{title}</p>
    <p className="mt-1 text-2xl font-bold text-gray-900">
      {value} {suffix}
    </p>
  </div>
);
