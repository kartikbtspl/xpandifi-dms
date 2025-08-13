"use client";
import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import CustomTooltip from "./CustomTooltip";
import { lineChartData } from "../data/chartData";

const TargetVsAchievement: React.FC = () => {
  const totalTarget = lineChartData.reduce((s, i) => s + i.target, 0);
  const totalAchievement = lineChartData.reduce((s, i) => s + i.achievement, 0);
  const achievementPercent =
    totalTarget > 0 ? Math.round((totalAchievement / totalTarget) * 100) : 0;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800">
          Target vs Achievement
        </h3>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-gray-400 rounded-full mr-2"></div>
            <span className="text-sm text-gray-600">Target</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
            <span className="text-sm text-gray-600">Achievement</span>
          </div>
        </div>
      </div>

      <div className="h-64 mb-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={lineChartData}>
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
            />
            <YAxis hide />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="target"
              stroke="#9CA3AF"
              strokeWidth={2}
              dot={{ fill: "#9CA3AF", strokeWidth: 2, r: 4 }}
            />
            <Line
              type="monotone"
              dataKey="achievement"
              stroke="#3B82F6"
              strokeWidth={2}
              dot={{ fill: "#3B82F6", strokeWidth: 2, r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="text-center">
          <p className="text-2xl font-bold text-gray-800">
            ₹{totalTarget.toLocaleString()}
          </p>
          <p className="text-sm text-gray-600">Total Target</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-blue-600">
            ₹{totalAchievement.toLocaleString()}
          </p>
          <p className="text-sm text-gray-600">Total Achievement</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-green-600">
            {achievementPercent}%
          </p>
          <p className="text-sm text-gray-600">Achievement %</p>
        </div>
      </div>
    </div>
  );
};

export default TargetVsAchievement;
