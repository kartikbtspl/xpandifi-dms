"use client";
import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const pieData = [
  { name: "Pending", value: 20, color: "#3857A5" },
  { name: "Allow", value: 30, color: "#161B32" },
  { name: "Rejected", value: 70, color: "#089B3A" },
];

export default function BeatReportPieChart() {
  return (
    <div className="rounded-2xl bg-white px-8 py-6 flex flex-col gap-6 w-full shadow-sm">
      {/* Title */}
      <div className="text-lg font-semibold text-gray-800">
        Beat Report - Pie Chart
      </div>

      {/* Chart + Legend */}
      <div className="flex items-center justify-center gap-80 w-full">
        {/* Pie Chart */}
        <ResponsiveContainer width={160} height={160}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              innerRadius={50}
              outerRadius={70}
              stroke="none"
              startAngle={90}
              endAngle={-270}
            >
              {pieData.map((entry) => (
                <Cell key={entry.name} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        {/* Legend */}
        <div className="flex flex-col gap-3">
          {pieData.map((item) => (
            <div className="flex items-center gap-3" key={item.name}>
              <span
                className="inline-block w-3 h-3 rounded-full"
                style={{ background: item.color }}
              />
              <span className="text-sm font-medium text-gray-800">
                {item.name}
              </span>
              <span className="ml-2 text-base font-semibold text-black">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
