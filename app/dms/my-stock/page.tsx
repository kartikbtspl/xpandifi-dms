// pages/dms/my-stock/page.tsx or components/stock/MyStockPage.tsx
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { StockFilters } from "./components/StockFilters";
import { StockListHeader } from "./components/StockListHeader";
import Table from "../../../components/common/table/Table";
import getStockColumns from "./components/getStockColumns";

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
    router.push("/dms/my-stock/add");
  };

  const handleRowClick = (row: any) => {
    router.push(`/dms/my-stock/${row.id}`);
  };

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="mb-6">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <span>Dashboard</span>
          <span className="mx-2">›</span>
          <span>My Stock</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-1">My Stock</h1>
        <p className="text-gray-600">Manage and track your stock</p>
      </div>

      {/* Filters */}
      <StockFilters />

      {/* Stock List Header */}
      <StockListHeader onAddStock={handleAddStock} />

      {/* Stock Table */}
      <Table
        columns={columns}
        rows={stockData}
        onRowClick={handleRowClick}
        onRefresh={handleRefresh}
        loading={loading}
        showPagination
        rowsPerPage={10}
        isFilter={false} // Disable table's built-in filter since we have custom filters
      />
    </div>
  );
}
