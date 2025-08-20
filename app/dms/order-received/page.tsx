"use client";
import { MetricCard } from "./components/MetricCard";
import { StatusDonut } from "./components/StatusDonut";
import { SalesFilters } from "./components/SalesFilters";
import Table from "../../../components/common/table/Table";
import getSalesOrderReportColumns from "./components/getSalesOrderReportColumns";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "../../../components/common/ui/Button";

export default function OrderReceived() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [salesOrderReports, setSalesOrderReport] = useState([
    {
    id: 1,
    srNo: 1,
    salesPerson: "Anup Naik",
    customer: "1 Li (1 Li * 1)",
    date: "2000.0",
    status: "Ordered",
    total: 32444.0,
    address: "1, Sus, Pune, Maharashtra",
    approvalStatus: "Delivered",
  },
  {
    id: 2,
    srNo: 2,
    salesPerson: "Anup Naik",
    customer: "1 Li (1 Li * 1)",
    date: "2000.0",
    status: "Ordered",
    total: 32444.0,
    address: "1, Sus, Pune, Maharashtra",
    approvalStatus: "Pending",
  },
  {
    id: 3,
    srNo: 3,
    salesPerson: "Anup Naik",
    customer: "1 Li (1 Li * 1)",
    date: "2000.0",
    status: "Ordered",
    total: 32444.0,
    address: "1, Sus, Pune, Maharashtra",
    approvalStatus: "Processing",
  },
  {
    id: 4,
    srNo: 4,
    salesPerson: "Anup Naik",
    customer: "1 Li (1 Li * 1)",
    date: "2000.0",
    status: "Ordered",
    total: 32444.0,
    address: "1, Sus, Pune, Maharashtra",
    approvalStatus: "Cancelled",
  },
  ]);

  const columns = getSalesOrderReportColumns((row) => {
    router.push(`/dms/order-received/${row.orderNo}`);
  });

   const handleRefresh = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <div className="space-y-5">
      {/* Page header */}
      <div className="mb-4">
        <p className="text-sm text-gray-500 mb-2">
          Dashboard &gt; Order Received
        </p>
        <h1 className="text-3xl font-bold mb-2">Order Received</h1>
        <p className="text-gray-600">Manage and track your Order Received</p>
      </div>

      {/* Metrics */}
      <div className="flex flex-wrap gap-4">
        <MetricCard title="MTD Amount" value="₹76,534" />
        <MetricCard title="MTD Orders" value="9" suffix="orders" />
        <MetricCard title="Approved Orders" value="11" suffix="approved" />
        <MetricCard title="Pending Orders" value="2" suffix="pending" />
      </div>

      {/* Donut + Filters */}
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-[40%]">
          <StatusDonut />
        </div>
        <div className="w-full lg:w-[60%]">
          <SalesFilters />
        </div>
      </div>
      <div className="mt-6">
        <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold mb-4">Sales Order Report</h2>
        <Button>Export</Button>
        </div>
        <Table
          columns={columns}
          rows={salesOrderReports}
          loading={loading}
          onRefresh={handleRefresh}
          showPagination
          rowsPerPage={10}
        />
      </div>
    </div>
  );
}
