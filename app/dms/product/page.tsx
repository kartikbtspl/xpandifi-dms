"use client";

import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useRouter } from "next/navigation";
import Table from "../../../components/common/table/Table";
import getActiveProductColumns from "./components/getActiveProductColumns";
import Button from "../../../components/common/ui/Button";

export default function Product() {
  const router = useRouter();
  const [products] = useState([
    {
      id: 1,
      productName: "Agent Capsule",
      productCode: "AgentCapsule001",
      brand: "Indofil",
      category: "Agro Chemicals",
      subCategory: "Insecticides",
    },
    {
      id: 2,
      productName: "Agent Capsule",
      productCode: "AgentCapsule001",
      brand: "Indofil",
      category: "Agro Chemicals",
      subCategory: "Insecticides",
    },
    {
      id: 3,
      productName: "Agent Capsule",
      productCode: "AgentCapsule001",
      brand: "Indofil",
      category: "Agro Chemicals",
      subCategory: "Insecticides",
    },
  ]);

  const [chartData] = useState([
    { name: "Agro Chemicals", value: 111.04 },
    { name: "Agro Chemicals", value: 211.11 },
    { name: "Agro Chemicals", value: 55.04 },
    { name: "Agro Chemicals", value: 33.11 },
    { name: "Agro Chemicals", value: 77.04 },
    { name: "Agro Chemicals", value: 130.25 },
  ]);

  const handleRowClick = (row: any) => {
    router.push(`/dms/product/${row.id}`);
  };

  const columns = getActiveProductColumns(handleRowClick);

  return (
    <div>
      {/* Header */}
      <h1 className="text-3xl font-bold mb-1">Product Management</h1>
      <p className="text-gray-500 mb-6">
        Monitor and manage your product inventory
      </p>

      {/* Customer Coverage Chart */}
      <div className="bg-white rounded-2xl shadow-sm p-4 mb-6">
        <div className="flex items-center gap-4 mb-4">
          <h2 className="text-lg font-semibold">Customer Coverage</h2>
          <span className="bg-[#EFF6FF] text-[#445E94] font-bold text-sm px-3 py-2 rounded-full">
            Total Count=4
          </span>
        </div>
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
      </div>

      {/* Active Product List */}
      <div className="bg-white rounded-2xl shadow-sm p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Active Product List</h2>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
            >
              Import
            </Button>
            <Button
              variant="primary"
            >
              Export
            </Button>
          </div>
        </div>

        <Table
          columns={columns}
          rows={products}
          onRowClick={handleRowClick}
          showPagination={true}
          rowsPerPage={10}
        />
      </div>
    </div>
  );
}
