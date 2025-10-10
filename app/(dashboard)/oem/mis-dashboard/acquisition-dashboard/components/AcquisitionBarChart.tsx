"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";

const data = [
  { name: "JANUARY\n2025", value: 0 },
  { name: "FEBRUARY\n2025", value: 0 },
  { name: "MARCH\n2025", value: 11 },
  { name: "APRIL\n2025", value: 0 },
  { name: "MAY\n2025", value: 0 },
  { name: "JUNE\n2025", value: 0 },
  { name: "JULY\n2025", value: 0 }
];

export default function ActivityTrendChart() {
  return (
    <div className="bg-white rounded-md shadow p-4">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} barSize={50} margin={{ top: 30, right: 30, bottom: 20, left: 20 }}>
          <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" />
          <XAxis 
            dataKey="name"
            tick={{ fontSize: 12, fill: "#6B7280" }}
            interval={0}
            tickLine={false}
            axisLine={true}
            tickFormatter={(val) => val.split("\n").join(" ")} // Replace newline with space for tooltip
          />
          <YAxis 
            domain={[0, 12]} 
            ticks={[0, 2, 4, 6, 8, 10, 12]} 
            tick={{ fontSize: 12, fill: "#6B7280" }} 
            axisLine={true}
            tickLine={false}
          />
          <Tooltip />
          <Bar dataKey="value" fill="#7584B8" radius={[6, 6, 0, 0]} name="Product Name" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
