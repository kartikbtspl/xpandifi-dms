import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Remining", value: 7, color: "#f6bf9f" }, // peach/orange
  { name: "Achieved", value: 3, color: "#00c0f6" }, // bright blue
  { name: "Target", value: 0, color: "#f6bf9f" },
  { name: "Target", value: 0, color: "#00c0f6" },
];

export default function MisYearlyTargetPieChart() {
  return (
    <div className="bg-white rounded-lg shadow p-6 w-full">
      <h3 className="text-xl font-medium mb-6">Yearly Target vs Achieved</h3>
      <div className="flex items-center justify-center gap-8">
        {/* Donut Chart */}
        <ResponsiveContainer width={200} height={200}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius={80}
              outerRadius={100}
              stroke="none"
              startAngle={90}
              endAngle={-270}
            >
              {data.map((entry) => (
                <Cell key={entry.name + entry.color} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        {/* Manual Legend */}
        <div className="grid grid-cols-1 gap-y-2">
          {data.map((item, idx) => (
            <div key={item.name + idx} className="flex items-center gap-2">
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
      <div className="text-sm text-gray-600 mt-4 flex justify-between px-2">
        <span>Total Order Amount</span>
        <span className="text-orange-400 font-semibold">0%</span>
      </div>
      <div className="text-sm text-gray-600 mt-2 flex justify-between px-2">
        <span>Total Order Amount</span>
        <span className="text-blue-500 font-semibold">Infinite</span>
      </div>
    </div>
  );
}
