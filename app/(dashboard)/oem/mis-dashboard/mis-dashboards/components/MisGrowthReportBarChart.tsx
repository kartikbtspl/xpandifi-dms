import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "JANUARY\n2025", value: 40000 },
  { name: "FEBRUARY\n2025", value: 170000 },
  { name: "MARCH\n2025", value: 300000 },
  { name: "APRIL\n2025", value: 180000 },
  { name: "MAY\n2025", value: 220000 },
  { name: "JUNE\n2025", value: 150000 },
  { name: "JULY\n2025", value: 100000 },
];

export default function MisGrowthReportBarChart() {
  return (
    <div className="bg-white rounded-lg">
      <ResponsiveContainer width="100%" height={370}>
        <BarChart
          data={data}
          barSize={40}
          margin={{ top: 20, right: 40, left: 20, bottom: 40 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 15, fill: "#7b8dbb" }}
            tickLine={false}
            axisLine={true}
            interval={0}
            tickFormatter={val => val.replace("\n", "\n")}
          />
          <YAxis
            tick={{ fontSize: 13, fill: "#7b8dbb" }}
            domain={[0, 320000]}
            tickLine={false}
            axisLine={true}
          />
          <Tooltip />
          <Bar dataKey="value" fill="#7b8dbb" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
