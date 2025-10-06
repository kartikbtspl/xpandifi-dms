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

type DataItem = {
  name: string;
  amount: number;
  order: number;
};

type Props = {
  title: string;
  data: DataItem[];
  barColorAmount: string;
  barColorOrder: string;
};

export default function RouteReportBarChart({
  title,
  data,
  barColorAmount,
  barColorOrder,
}: Props) {
  return (
    <div className="bg-white w-full rounded-xl">
      {/* Chart */}
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barSize={40} margin={{ top: 20, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="amount" fill={barColorAmount} radius={[6, 6, 0, 0]} name="Amount" />
            <Bar dataKey="order" fill={barColorOrder} radius={[6, 6, 0, 0]} name="Order" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
