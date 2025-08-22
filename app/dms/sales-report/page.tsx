"use client";
import { useState } from "react";
import DatePicker from "react-datepicker"; // Assuming you use this or a custom one
import "react-datepicker/dist/react-datepicker.css";
import Input from "../../../components/common/ui/Input";
import Button from "../../../components/common/ui/Button";
import Table from "../../../components/common/table/Table";

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
    <div className="">
      {/* Breadcrumb */}
      <p className="text-sm text-gray-500 mb-2">
        Dashboard &gt;{" "}
        <span className="text-[#445E94] font-medium">Product wise Sales report</span>
      </p>

      {/* Title */}
      <h1 className="text-2xl font-semibold">Product wise Sales Report</h1>
      <p className="text-sm text-gray-500 mb-6">See product reports</p>

      {/* Filters */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-end">
          {/* Product Search */}
          <Input label="Select Product Name*" placeholder="Search product" />

          {/* Date Range */}
          <div>
            <label className="block text-xs text-gray-500 mb-1">Select Date Range*</label>
            <div className="flex items-center border rounded-full px-3 py-2">
              <DatePicker
                selected={startDate}
                // onChange={(date: Date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                className="outline-none text-sm w-full"
              />
              <span className="mx-2">-</span>
              <DatePicker
                selected={endDate}
                // onChange={(date: Date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                className="outline-none text-sm w-full"
              />
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 mt-4">
          <Button>Submit</Button>
          <Button>Reset Filters</Button>
        </div>

        {/* Quick Ranges */}
        <div className="flex gap-4 mt-4">
          <button className="px-4 py-1 bg-[#F1F5F9] rounded-full text-sm">Last 7 days</button>
          <button className="px-4 py-1 bg-[#F1F5F9] rounded-full text-sm">Last 30 days</button>
          <button className="px-4 py-1 bg-[#F1F5F9] rounded-full text-sm">Last 3 months</button>
        </div>
      </div>

      {/* Results */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Sales Report Result</h2>
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
