// pages/dms/my-stock/page.tsx or components/stock/MyStockPage.tsx
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { StockFilters } from "./components/StockFilters";
import { StockListHeader } from "./components/StockListHeader";
import Table from "@/components/common/table/Table";
import getStockColumns from "./components/getStockColumns";
import Breadcrumb from "@/components/common/ui/BreadCrumb";

export default function MyStockPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // Sample stock data matching your screenshot
  const stockData = [
    {
      id: 1,
      productName: "Cashew",
      productCategory: "Beverage",
      pack: "Cashew",
      distributorName: "Teamspring",
      codeLocation: "Baner-Baner",
      actualStock: 110.0,
      minimumStock: 0.0,
      updatedOn: "23-07-25 09:29:55",
    },
    {
      id: 2,
      productName: "Cashew",
      productCategory: "Beverage",
      pack: "Cashew",
      distributorName: "Teamspring",
      codeLocation: "Baner-Baner",
      actualStock: 110.0,
      minimumStock: 0.0,
      updatedOn: "23-07-25 09:29:55",
    },
    {
      id: 3,
      productName: "Cashew",
      productCategory: "Beverage",
      pack: "Cashew",
      distributorName: "Teamspring",
      codeLocation: "Baner-Baner",
      actualStock: 110.0,
      minimumStock: 0.0,
      updatedOn: "23-07-25 09:29:55",
    },
    {
      id: 4,
      productName: "Cashew",
      productCategory: "Beverage",
      pack: "Cashew",
      distributorName: "Teamspring",
      codeLocation: "Baner-Baner",
      actualStock: 110.0,
      minimumStock: 0.0,
      updatedOn: "23-07-25 09:29:55",
    },
    // Add more rows as needed...
  ];

  const columns = getStockColumns();

  const handleRefresh = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 800);
  };

  const handleAddStock = () => {
    router.push("/oem/reports/stock-reports/distributor-stock/add");
  };

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="mb-4 flex flex-col gap-4">
        <Breadcrumb
          crumbs={[
            { label: "Home", href: "/oem/dashboard" },
            { label: "Stock Reports", isClickable: false },
            { label: "Distributor Stock", href: "/oem/reports/stock-reports/distributor-stock" },
          ]}
        />
        <h1 className="text-3xl font-semibold text-[#445E94]">Distributor Stock</h1>
      </div>

      {/* Filters */}
      <StockFilters />

      {/* Stock List Header */}
      <StockListHeader onAddStock={handleAddStock} />

      {/* Stock Table */}
      <Table
        columns={columns}
        rows={stockData}
        onRefresh={handleRefresh}
        loading={loading}
        showPagination
        rowsPerPage={10}
        isFilter={false} // Disable table's built-in filter since we have custom filters
      />
    </div>
  );
}
