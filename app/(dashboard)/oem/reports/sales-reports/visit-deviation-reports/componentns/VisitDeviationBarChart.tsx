import Button from "@/components/common/ui/Button";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { FiUpload } from "react-icons/fi";

type Props = {
  title: string;
  data: { name: string; value: number }[];
  barColor: string;
};

export default function VisitDeviationBarChart({ title, data, barColor }: Props) {
  return (
    <div className="bg-white w-full rounded-xl shadow-sm px-4 pt-4 pb-8">
      {/* Header Section */}
      <div className="flex justify-between items-center pb-2">
        <span className="text-lg font-semibold">{title}</span>
        {/* <button className="bg-[#445E94] text-white px-4 py-1 rounded-md flex items-center gap-2 text-sm">
          <svg width="16" height="16" fill="none"><path d="M8 4v8m0 0-4-4m4 4 4-4" stroke="#fff" strokeWidth="2"/></svg>
          Export With Routes
        </button> */}
        <Button startIcon={<FiUpload />}>Export With Routes</Button>
      </div>

      {/* Chart Section */}
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barSize={70}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb"/>
            <XAxis dataKey="name" />
            <YAxis domain={[0, 2]} ticks={[0, 1, 2]} />
            <Tooltip />
            {/* <Legend
              formatter={() => <span className="text-base text-[#445E94] font-medium">Product Name</span>}
              iconType="circle"
            /> */}
            <Bar dataKey="value" fill={barColor} radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
