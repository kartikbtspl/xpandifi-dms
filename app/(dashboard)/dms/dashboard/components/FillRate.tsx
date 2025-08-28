"use client";
import React from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import CustomTooltip from "./CustomTooltip";
import { pieData } from "../data/chartData";

const FillRate: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-medium text-gray-800 mb-4">Fill Rate</h3>

      <div className="flex flex-col items-center mb-4">
        <div style={{ width: 200, height: 200 }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                dataKey="value"
                startAngle={90}
                endAngle={-270}
              >
                <Cell key="filled" fill="#1E3A8A" />
                <Cell key="unfilled" fill="#E0E7FF" />
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend verticalAlign="top" align="center" iconSize={8} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Order Value</span>
          <span className="font-medium">₹10,000</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Fill Rate Value</span>
          <span className="font-medium">₹8,000</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Fill Rate %</span>
          <span className="font-semibold text-blue-600">80%</span>
        </div>
      </div>
    </div>
  );
};

export default FillRate;
