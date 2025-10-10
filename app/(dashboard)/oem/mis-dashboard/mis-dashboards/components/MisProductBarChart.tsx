import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

const top5ProductData = [
  { name: "Shrey\nash", value: 2300 },
];

const bottom5ProductData = [
  { name: "Yash", value: 5.6 },
  { name: "Pratik", value: 1.2 },
  { name: "Sonu", value: 8.9 },
  { name: "Harsh", value: 4.3 },
  { name: "Vedant", value: 7.8 }
];

export default function MisProductBarChart() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Top 5 Product */}
      <div className="bg-white rounded-lg shadow">
        <h1 className="p-4 text-xl text-[#445E94] font-semibold">
          Top 5 Product
        </h1>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={top5ProductData}
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
              domain={[0, 2500]}
              tick={{ fontSize: 13, fill: "#7688A7" }}
              tickLine={false}
              axisLine={true}
            />
            <Tooltip />
            <Bar dataKey="value" fill="#7b4b15" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Bottom 5 Product */}
      <div className="bg-white rounded-lg shadow">
        <h1 className="p-4 text-xl text-[#445E94] font-semibold">
          Bottom 5 Product
        </h1>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={bottom5ProductData}
            barSize={40}
            margin={{ top: 20, right: 20, left: 10, bottom: 30 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            {/* Dashed red reference line above each bar */}
            {bottom5ProductData.map((entry, idx) => (
              <ReferenceLine
                key={entry.name}
                x={entry.name}
                strokeDasharray="5 5"
                ifOverflow="extendDomain"
                // Because ReferenceLine in BarChart normally needs x/y, this places a horizontal dashed line at y=10 for each bar for effect.
              />
            ))}
            <XAxis
              dataKey="name"
              tick={{ fontSize: 15, fill: "#7688A7" }}
              tickLine={false}
              axisLine={true}
              interval={0}
            />
            <YAxis
              domain={[0, 10]}
              tick={{ fontSize: 13, fill: "#7688A7" }}
              tickLine={false}
              axisLine={true}
            />
            <Tooltip />
            <Bar dataKey="value" fill="#e3e4e7" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
