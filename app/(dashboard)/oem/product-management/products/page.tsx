"use client";

import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useRouter } from "next/navigation";
import Table from "@/components/common/table/Table";
import getActiveProductColumns from "./components/getActiveProductColumns";
import Button from "@/components/common/ui/Button";
import Breadcrumb from "@/components/common/ui/BreadCrumb";
import { Minus, Plus } from "lucide-react";
import ToggleSection from "./components/ToggleSection"

export default function Product() {
  const router = useRouter();

  const [chartData] = useState([
    { name: "Agro Chemicals", value: 111.04 },
    { name: "Agro Chemicals", value: 211.11 },
    { name: "Agro Chemicals", value: 55.04 },
    { name: "Agro Chemicals", value: 33.11 },
    { name: "Agro Chemicals", value: 77.04 },
    { name: "Agro Chemicals", value: 130.25 },
  ]);

  const [isChartOpen, setIsChartOpen] = useState(true);

  return (
    <div className="space-y-4">
      {/* Header */}
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem" },
          { label: "Product Management", href: "/oem/product-management" },
          { label: "Products", href: "/oem/product-management/products" },
        ]}
      />
      <h1 className="text-3xl font-bold mb-4 text-[#5D6F9E]">Products</h1>

      {/* Customer Coverage Chart */}
      <div className="bg-white rounded-2xl shadow-sm p-4 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <h2 className="text-lg font-semibold">Customer Coverage</h2>
            <span className="bg-[#EFF6FF] text-[#445E94] font-bold text-sm px-3 py-2 rounded-full">
              Total Count=4
            </span>
          </div>

          {/* Toggle button */}
          <button
            onClick={() => setIsChartOpen(!isChartOpen)}
            className="p-2 rounded-full hover:bg-gray-100 transition"
          >
            {isChartOpen ? <Minus size={20} /> : <Plus size={20} />}
          </button>
        </div>

        {isChartOpen && (
          <div style={{ width: "100%", height: 250 }}>
            <ResponsiveContainer>
              <BarChart data={chartData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#6b7bbd" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>

      <ToggleSection />
    </div>
  );
}
