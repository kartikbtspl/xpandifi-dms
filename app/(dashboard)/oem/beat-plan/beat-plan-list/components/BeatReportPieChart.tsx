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
    <div className="rounded-2xl bg-white px-8 py-6 flex flex-col gap-3 min-w-[340px] max-w-[440px] shadow-sm">
      <div className="text-lg font-semibold text-gray-800 mb-4">
        Beat Report - Pie Chart
      </div>
      <div className="flex items-center gap-20">
        {/* Pie Chart */}
        <ResponsiveContainer width={120} height={120}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              innerRadius={40}
              outerRadius={60}
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
        <div className="ml-4 flex flex-col gap-2">
          {pieData.map((item) => (
            <div className="flex items-center gap-2" key={item.name}>
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
