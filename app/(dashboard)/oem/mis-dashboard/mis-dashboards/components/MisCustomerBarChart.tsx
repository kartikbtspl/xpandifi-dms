import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const top5CustomerData = [
  { name: "Shrey\nash", value: 2.8 },
];

const bottom5CustomerData = [
  { name: "Yash", value: 5.6 },
  { name: "Pratik", value: 1.2 },
  { name: "Sonu", value: 8.9 },
  { name: "Harsh", value: 4.3 },
  { name: "Vedant", value: 7.8 }
];

export default function MisCustomerBarChart() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Top 5 Customer */}
      <div className="bg-white rounded-lg shadow">
        <h1 className="p-4 text-xl text-[#445E94] font-semibold">
          Top 5 Customer
        </h1>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={top5CustomerData}
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
              domain={[0, 3]}
              tick={{ fontSize: 13, fill: "#7688A7" }}
              tickLine={false}
              axisLine={true}
            />
            <Tooltip />
            <Bar dataKey="value" fill="#45398c" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Bottom 5 Customer */}
      <div className="bg-white rounded-lg shadow">
        <h1 className="p-4 text-xl text-[#445E94] font-semibold">
          Bottom 5 Customer
        </h1>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={bottom5CustomerData}
            barSize={40}
            margin={{ top: 20, right: 20, left: 10, bottom: 30 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
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
            <Bar dataKey="value" fill="#aab2c5" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
