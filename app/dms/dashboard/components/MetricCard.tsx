// components/MetricCard.tsx
"use client";
import React from "react";
import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react";

export type MetricCardProps = {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative";
  icon: LucideIcon;
  bgGradient: string;
  iconColor: string;
};

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  change,
  changeType,
  icon: Icon,
  bgGradient,
  iconColor,
}) => (
  <div
    className={`${bgGradient} rounded-xl p-5 flex-1 hover:shadow-lg transition-shadow duration-200`}
  >
    <div className="flex justify-between items-start">
      {/* Text */}
      <div>
        <p className="text-sm font-medium text-gray-700">{title}</p>
        <p className="mt-1 text-2xl font-bold text-gray-900">{value}</p>
        <div className="mt-2 flex items-center text-sm font-medium">
          {changeType === "positive" ? (
            <TrendingUp className="w-4 h-4 text-green-600" />
          ) : (
            <TrendingDown className="w-4 h-4 text-red-600" />
          )}
          <span
            className={`ml-1 ${
              changeType === "positive" ? "text-green-600" : "text-red-600"
            }`}
          >
            {change}
          </span>
        </div>
      </div>

      {/* Icon */}
      <Icon className={`w-6 h-6 ${iconColor}`} />
    </div>
  </div>
);

export default MetricCard;
