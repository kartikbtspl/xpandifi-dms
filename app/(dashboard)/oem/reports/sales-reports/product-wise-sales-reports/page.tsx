"use client";
import { useState } from "react";
import DatePicker from "react-datepicker"; // Assuming you use this or a custom one
import Input from "@/components/common/ui/Input";
import Button from "@/components/common/ui/Button";
import Table from "@/components/common/table/Table";
import ProductWiseSalesReportForm from "./components/ProductWiseSalesReportForm";
import Breadcrumb from "@/components/common/ui/BreadCrumb";

export default function SalesReport() {
  const [startDate, setStartDate] = useState(new Date("2025-04-04"));
  const [endDate, setEndDate] = useState(new Date("2025-05-13"));

  // ---------- Table Columns ----------
  const columns = [
    { id: "srNo", label: "Sr.No." },
    { id: "product", label: "Product Name-pack" },
    { id: "revenueTotalSale", label: "Revenue Total Sale" },
    { id: "productTotalSale", label: "Product Total Sale" },
  ];

  // ---------- Mock Data ----------
  const rows = [
    { id: 1, srNo: "01", product: "Agent Capsule", revenueTotalSale: 20, productTotalSale: 20 },
    { id: 2, srNo: "02", product: "Baan Gold", revenueTotalSale: 20, productTotalSale: 20 },
    { id: 3, srNo: "03", product: "Avtar", revenueTotalSale: 20, productTotalSale: 20 },
  ];

  return (
    <div className="space-y-4">
      {/* Breadcrumb */}
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "Sales Reports", isClickable: false },
          { label: "Product Wise Sales Report", href: "/oem/reports/sales-reports/product-wise-sales-report" },
        ]}
      />
      <h1 className="text-3xl font-semibold text-[#445E94]">Product Wise Sales Report</h1>
      {/* Filters */}
      <div className="space-y-4 rounded-lg bg-white">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">Daily Sales Order Report</h1>
        </div>
        <hr className="text-gray-200" />
        <div className="px-6 py-4">
          <ProductWiseSalesReportForm />
        </div>
      </div>

      {/* Results */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg text-[#445E94] font-semibold">Sales Report Result</h2>
        <Button>Export</Button>
      </div>

      {/* Table */}
      <Table
        columns={columns}
        rows={rows}
        rowsPerPage={10}
        showPagination
        isFilter={false}
        loading={false}
      />
    </div>
  );
}
