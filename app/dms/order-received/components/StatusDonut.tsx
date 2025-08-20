// components/orderReceived/StatusDonut.tsx
import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer
} from "recharts";

interface Slice {
  name: string;
  value: number;
  color: string;
}

const data: Slice[] = [
  { name: "Approved", value: 20, color: "#3857A5" },
  { name: "Pending", value: 70, color: "#089B3A" }
];

export const StatusDonut: React.FC = () => {
  const total = data.reduce((sum, s) => sum + s.value, 0);

  return (
    <div className="bg-white rounded-2xl px-6 pb-8 pt-4 shadow-sm w-full h-full flex flex-col">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        Sales Order Status
      </h3>
      <hr className="mb-2 -mx-6" />
      <div className="flex items-center justify-center h-full flex-grow">
        {/* Donut + Centered Label */}
        <div className="relative flex-shrink-0" style={{ width: 220, height: 220 }}>
          <ResponsiveContainer width={220} height={220}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                innerRadius={75}
                outerRadius={100}
                startAngle={90}
                endAngle={-270}
                stroke="none"
                paddingAngle={0}
              >
                {data.map((d, i) => (
                  <Cell key={d.name} fill={d.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute top-1/2 left-1/2 flex flex-col items-center justify-center"
            style={{ transform: 'translate(-50%,-50%)' }}>
            <div className="text-lg text-gray-700 mb-1">Total Orders</div>
            <div className="text-2xl font-bold text-black whitespace-nowrap">90 orders</div>
          </div>
        </div>
        {/* Right Hand Legend */}
        <div className="ml-12 flex flex-col gap-8">
          <div className="flex items-center">
            <span className="w-4 h-4 rounded-full" style={{ background: "#3857A5" }} />
            <span className="ml-3 text-base text-gray-900">
              Approved Orders{" "} <br />
              <span className="font-bold">20 orders</span>
            </span>
          </div>
          <div className="flex items-center">
            <span className="w-4 h-4 rounded-full" style={{ background: "#089B3A" }} />
            <span className="ml-3 text-base text-gray-900">
              Pending Orders{" "} <br />
              <span className="font-bold">70 orders</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
