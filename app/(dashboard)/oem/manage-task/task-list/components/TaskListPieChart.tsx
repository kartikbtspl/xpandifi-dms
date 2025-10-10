"use client";
import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Total Upcoming", value: 20, color: "#E74C3C" },   // red
  { name: "Total Open", value: 0, color: "#2ECC71" },        // green
  { name: "Total Close", value: 8, color: "#1ABC9C" },       // teal
  { name: "Total Rejected", value: 20, color: "#3498DB" },   // blue
  { name: "Total Overdue", value: 0, color: "#27AE60" },     // dark green
];

export default function TaskListPieChart() {
  return (
    <div className="rounded-2xl bg-white px-8 py-6 flex flex-col gap-3 w-full shadow-sm">
      <div className="text-xl text-[#445E94] mb-4">
        Task Details With Status
      </div>
      <div className="flex w-3/4 items-center m-auto justify-evenly">
        {/* Donut Chart */}
        <ResponsiveContainer width={180} height={180}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius={55}
              outerRadius={75}
              stroke="none"
              startAngle={90}
              endAngle={-270}
            >
              {data.map((entry) => (
                <Cell key={entry.name} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        {/* Legend */}
        <div className="ml-8 grid grid-cols-1 gap-y-2">
          {data.map((item) => (
            <div className="flex items-center gap-2" key={item.name}>
              <span
                className="inline-block w-3 h-3 rounded-full"
                style={{ background: item.color }}
              />
              <span className="text-sm text-gray-700">{item.name}</span>
              <span className="ml-1 text-base font-semibold text-black">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
