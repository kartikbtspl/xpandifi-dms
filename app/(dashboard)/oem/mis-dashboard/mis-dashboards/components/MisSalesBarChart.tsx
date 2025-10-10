import { tree } from "next/dist/build/templates/app-page";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const top5Data = [
  { name: "Shrey\nash", value: 130000 },
];

const bottom5Data = [
  { name: "Yash", value: 800 },
  { name: "Pratik", value: 100 },
  { name: "Sonu", value: 2600 },
  { name: "Harsh", value: 700 },
  { name: "Vedant", value: 1900 }
];

export default function MisSalesBarChart() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Top 5 Sales Person */}
      <div className="bg-white rounded-lg shadow">
        <div className="flex flex-col">
          <div className="p-4 text-lg font-semibold">
            <h1 className="text-xl text-[#445E94]">
              Top 5 Sales Person
            </h1>
          </div>
          <hr className="text-gray-200" />
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={top5Data}
              barSize={40}
              margin={{ top: 20, right: 40, left: 20, bottom: 30 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis
                dataKey="name"
                tick={{ fontSize: 15, fill: "#7688A7" }}
                tickLine={false}
                axisLine={true}
                interval={0}
                tickFormatter={val => val.replace("\n", "\n")}
              />
              <YAxis
                domain={[0, 150000]}
                tick={{ fontSize: 13, fill: "#7688A7" }}
                tickLine={false}
                axisLine={true}
              />
              <Tooltip />
              <Bar dataKey="value" fill="#7688A7" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom 5 Sales Person */}
      <div className="bg-white rounded-lg shadow">
        <div className="flex flex-col">
          <div className="p-4 text-lg font-semibold">
            <h1 className="text-xl text-[#445E94]">
              Bottom 5 Sales Person
            </h1>
          </div>
          <hr className="text-gray-200" />
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={bottom5Data}
              barSize={40}
              margin={{ top: 20, right: 20, left: 10, bottom: 30 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis
                dataKey="name"
                tick={{ fontSize: 15, fill: "#3CA740" }}
                tickLine={false}
                axisLine={true}
                interval={0}
              />
              <YAxis
                domain={[0, 2700]}
                tick={{ fontSize: 13, fill: "#3CA740" }}
                tickLine={false}
                axisLine={true}
              />
              <Tooltip />
              <Bar dataKey="value" fill="#3CA740" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
