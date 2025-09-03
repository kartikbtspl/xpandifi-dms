import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type Props = {
  title: string;
  data: { name: string; value: number }[];
  barColor: string;
};

export default function BarChartCard({ title, data, barColor }: Props) {
  return (
    <div className="bg-white w-full md:w-[48%] rounded-xl shadow-md">
      
      {/* 🔹 Header Section */}
      <div className="w-full ">
        <div className="flex justify-between items-center pb-3 p-4">
            <div className="text-lg font-semibold">{title}</div>
            <div className="text-sm text-gray-600 cursor-pointer">6 months ▼</div>
        </div>
      </div>
    
      {/* 🔹 Divider Line */}
      <div className="w-full border-t border-gray-200 mb-6" />

      {/* 🔹 Chart Section */}
      <div className="h-64 p-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barSize={44}>
            <CartesianGrid strokeDasharray="3 3"  stroke="#e5e7eb" />
            <XAxis dataKey="name" />
            <YAxis
              domain={[0, 150000]}
              ticks={[0, 30000, 60000, 90000, 120000, 150000]}
              tickFormatter={(value) => value.toLocaleString()}
            />
            <Tooltip formatter={(v: number) => v.toLocaleString()} />
            <Bar dataKey="value" fill={barColor} radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}
