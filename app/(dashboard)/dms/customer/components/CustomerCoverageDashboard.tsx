"use client";
import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend
} from "recharts";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

// Data for the donut
const donutData = [
  { name: "Covered", value: 20, color: "#3857A5" },
  { name: "UnCovered", value: 30, color: "#161B32" },
  { name: "Total", value: 70, color: "#089B3A" }
];

const legendLabels = [
  { name: "Covered", color: "#3857A5", value: 20 },
  { name: "UnCovered", color: "#161B32", value: 30 },
  { name: "Total", color: "#089B3A", value: 70 },
];

export default function CustomerCoverageDashboard() {
  return (
    <div className="flex flex-wrap w-full gap-4 justify-between">
      {/* Left - Donut Chart and Legend */}
      <div className="rounded-2xl bg-white px-8 py-6 flex flex-col gap-3 min-w-[340px] max-w-[440px] flex-1 shadow-sm">
        <div className="text-lg font-semibold text-gray-800 mb-4">
          Customer Coverage
        </div>
        <div className="flex items-center gap-20">
          <ResponsiveContainer width={120} height={120}>
            <PieChart>
              <Pie
                data={donutData}
                dataKey="value"
                nameKey="name"
                innerRadius={40}
                outerRadius={60}
                stroke="none"
                startAngle={90}
                endAngle={-270}
              >
                {donutData.map((entry, idx) => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="ml-4 flex flex-col gap-2">
            {legendLabels.map(item => (
              <div className="flex items-center gap-2" key={item.name}>
                <span
                  className="inline-block w-3 h-3 rounded-full"
                  style={{ background: item.color }}
                />
                <span className="text-sm font-medium text-gray-800">{item.name}</span>
                <span className="ml-2 text-base font-semibold text-black">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right - Metrics */}
      <div className="flex-1 grid grid-cols-2 gap-4 min-w-[300px] max-w-3xl">
        {/* Top Metrics */}
        <div className="col-span-2 flex gap-4">
          {/* Total Order Amount */}
          <div className="rounded-2xl bg-white flex-1 px-6 py-4 min-w-[200px] shadow-sm flex flex-col">
            <div className="text-md font-semibold text-gray-800 mb-1">
              Total Order Amount
            </div>
            <div className="text-2xl font-bold text-black mb-1">
              ₹2,45,67,890
            </div>
            <div className="flex items-center text-sm">
              <ArrowUpRight className="w-4 h-4 text-green-600 mr-1" />
              <span className="text-green-600 mr-1 font-semibold">1.35%</span>
              <span className="text-gray-500">vs last month</span>
            </div>
          </div>
          {/* Total Visits */}
          <div className="rounded-2xl bg-white flex-1 px-6 py-4 min-w-[160px] shadow-sm flex flex-col">
            <div className="text-md font-semibold text-gray-800 mb-1">
              Total Visits
            </div>
            <div className="text-2xl font-bold text-black mb-1">
              1,234
            </div>
            <div className="flex items-center text-sm">
              <ArrowUpRight className="w-4 h-4 text-green-600 mr-1" />
              <span className="text-green-600 mr-1 font-semibold">1.35%</span>
              <span className="text-gray-500">vs last month</span>
            </div>
          </div>
        </div>

        {/* Bottom Metrics */}
        <div className="rounded-2xl bg-white px-6 py-4 min-w-[160px] shadow-sm flex flex-col">
          <div className="text-md font-semibold text-gray-800 mb-1">
            Total Orders
          </div>
          <div className="text-2xl font-bold text-black mb-1">567</div>
          <div className="flex items-center text-sm">
            <ArrowDownRight className="w-4 h-4 text-red-500 mr-1" />
            <span className="text-red-500 mr-1 font-semibold">0.35%</span>
            <span className="text-gray-500">vs last month</span>
          </div>
        </div>
        <div className="rounded-2xl bg-white px-6 py-4 min-w-[160px] shadow-sm flex flex-col">
          <div className="text-md font-semibold text-gray-800 mb-1">
            Active Customers
          </div>
          <div className="text-2xl font-bold text-black mb-1">892</div>
          <div className="flex items-center text-sm">
            <ArrowDownRight className="w-4 h-4 text-red-500 mr-1" />
            <span className="text-red-500 mr-1 font-semibold">0.35%</span>
            <span className="text-gray-500">vs last month</span>
          </div>
        </div>
      </div>
    </div>
  );
}
