"use client";
import React from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import CustomTooltip from "./CustomTooltip";
import { lineChartData } from "../data/chartData";

const ManDaysProductivity: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-medium text-gray-800 mb-4">Man-Days & Productivity</h3>

      <div className="h-56 mb-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={lineChartData}>
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
            <YAxis hide />
            <Tooltip content={<CustomTooltip />} />
            <Line type="monotone" dataKey="target" stroke="#9CA3AF" strokeWidth={2} dot={{ r: 4, strokeWidth: 2, fill: "#9CA3AF" }} />
            <Line type="monotone" dataKey="achievement" stroke="#3B82F6" strokeWidth={2} dot={{ r: 4, strokeWidth: 2, fill: "#3B82F6" }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg">
        <div className="text-center">
          <p className="text-xl font-bold text-gray-800">91.3%</p>
          <p className="text-sm text-gray-600">Avg Attendance</p>
        </div>
        <div className="text-center">
          <p className="text-xl font-bold text-gray-800">87.5%</p>
          <p className="text-sm text-gray-600">Avg Productivity</p>
        </div>
      </div>
    </div>
  );
};

export default ManDaysProductivity;
