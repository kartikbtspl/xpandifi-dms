"use client";
import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import CustomTooltip from "./CustomTooltip";
import { barChartData } from "../data/chartData";
import { TrendingUp } from "lucide-react";

type Tabs = "MTD" | "LMTD" | "YTD";

interface Props {
  activeTab: Tabs;
  setActiveTab: (t: Tabs) => void;
}

const SecondarySalesInvoice: React.FC<Props> = ({
  activeTab,
  setActiveTab,
}) => {
  const tabs: Tabs[] = ["MTD", "LMTD", "YTD"];

  return (
    <div className="border border-gray-300 rounded-lg bg-white overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
        <h3 className="text-lg font-medium text-gray-800">
          Secondary Sales Invoice
        </h3>
        <div className="flex space-x-2 bg-gray-100 rounded-full p-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1 rounded-full text-sm font-medium transition-colors duration-150 ${
                activeTab === tab ? "bg-white text-gray-800" : "text-gray-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="px-6 py-5 flex items-center justify-between">
        <div>
          <p className="text-2xl font-bold text-gray-900">₹180K</p>
          <div className="flex items-center text-sm text-green-600 mt-1">
            <TrendingUp className="w-4 h-4 mr-1" />
            +12.5% vs target
          </div>
        </div>

        <div className="text-right">
          <p className="text-sm text-gray-500">Target Achievement</p>
          <p className="text-2xl font-bold text-blue-600">89%</p>
        </div>
      </div>

      <div className="h-56 px-4 pb-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={barChartData}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          >
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#6B7280" }}
              padding={{ left: 20, right: 20 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#6B7280" }}
              domain={[0, "dataMax"]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar
              dataKey="value"
              fill="#6F83B1"
              radius={[6, 6, 0, 0]}
              barSize={44}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SecondarySalesInvoice;
