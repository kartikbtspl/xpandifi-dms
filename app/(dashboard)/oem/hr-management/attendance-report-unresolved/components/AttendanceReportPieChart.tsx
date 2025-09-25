"use client";
import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

// Data for Beat Report Pie Chart
const beatReportData = [
  { name: "Total User", value: 20, color: "#E74C3C" },   // red
  { name: "Present", value: 0, color: "#2ECC71" },       // green
  { name: "On Duty", value: 8, color: "#1ABC9C" },       // teal
  { name: "Absent", value: 20, color: "#3498DB" },       // blue
  { name: "Paid Leaves", value: 0, color: "#27AE60" },   // darker green
  { name: "Unpaid Leaves", value: 0, color: "#8E44AD" }, // purple
  { name: "Holiday", value: 0, color: "#E67E22" },       // orange
  { name: "Week Off", value: 0, color: "#E91E63" },      // pink
];

export default function AttendanceReportPieChart() {
  return (
    <div className="rounded-2xl bg-white px-8 py-6 flex flex-col gap-3 w-full shadow-sm">
      <div className="text-lg font-semibold text-gray-800 mb-4">
        Beat Report-Pie Chart
      </div>
      <div className="flex w-3/4 items-center m-auto justify-evenly">
        {/* Donut Chart */}
        <ResponsiveContainer width={180} height={180}>
          <PieChart>
            <Pie
              data={beatReportData}
              dataKey="value"
              nameKey="name"
              innerRadius={55}
              outerRadius={75}
              stroke="none"
              startAngle={90}
              endAngle={-270}
            >
              {beatReportData.map((entry) => (
                <Cell key={entry.name} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        {/* Legend */}
        <div className="ml-8 grid grid-cols-2 gap-x-6 gap-y-2">
          {beatReportData.map((item) => (
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
