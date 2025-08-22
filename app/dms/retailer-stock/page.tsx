"use client"
import SearchDistributers from "./components/SearchDistributers";
import Button from "../../../components/common/ui/Button";
import getRetailerStockColumns from "./components/retailerStockColumn";
import { useState } from "react";
import Table from "../../../components/common/table/Table";

export default function RetailerStock() {

  const [retailColumnData, setretailColumnData] = useState([
    {
      id: 1,
      srNo : "01",
      productName : "Karnier mens face wash",
      pack : "5",
      stock : "15",
      stockUpdatedDate : "22 june 2025",
      asOnDate : "12 july 2025",
      stockDate : "5 aug 2025",
    },
    {
      id: 2,
      srNo : "01",
      productName : "Garnier mens face wash",
      pack : "5",
      stock : "15",
      stockUpdatedDate : "22 june 2025",
      asOnDate : "12 july 2025",
      stockDate : "5 aug 2025",
    },
    {
      id: 3,
      srNo : "01",
      productName : "Garnier mens face wash",
      pack : "5",
      stock : "15",
      stockUpdatedDate : "22 june 2025",
      asOnDate : "12 july 2025",
      stockDate : "5 aug 2025",
    },
    {
      id: 4,
      srNo : "01",
      productName : "Garnier mens face wash",
      pack : "5",
      stock : "15",
      stockUpdatedDate : "22 june 2025",
      asOnDate : "12 july 2025",
      stockDate : "5 aug 2025",
    },
    {
      id: 5,
      srNo : "01",
      productName : "Garnier mens face wash",
      pack : "5",
      stock : "15",
      stockUpdatedDate : "22 june 2025",
      asOnDate : "12 july 2025",
      stockDate : "5 aug 2025",
    },
    {
      id: 6,
      srNo : "01",
      productName : "Garnier mens face wash",
      pack : "5",
      stock : "15",
      stockUpdatedDate : "22 june 2025",
      asOnDate : "12 july 2025",
      stockDate : "5 aug 2025",
    },
    {
      id: 7,
      srNo : "01",
      productName : "Garnier mens face wash",
      pack : "5",
      stock : "15",
      stockUpdatedDate : "22 june 2025",
      asOnDate : "12 july 2025",
      stockDate : "5 aug 2025",
    },
    {
      id: 8,
      srNo : "01",
      productName : "Garnier mens face wash",
      pack : "5",
      stock : "15",
      stockUpdatedDate : "22 june 2025",
      asOnDate : "12 july 2025",
      stockDate : "5 aug 2025",
    },
  ])

  const retailColumns = getRetailerStockColumns();
  const [loadingRetailData, setloadingRetailData] = useState(false);

  const handleRetailerRefresh = () => {
    setloadingRetailData(true);
    setTimeout(() => setloadingRetailData(false), 1000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Retailer Stock</h1>
        <p className="text-[#969BA0] ">Monitor and manage your retailer stock</p>
      </div>
      <div>
        <SearchDistributers />
      </div>
      <div className="flex flex-wrap w-full justify-between ">
        <h1 className="text-2xl font-semibold">Stock Report List</h1>
        <Button className="w-32">Export</Button>
      </div>
      <div>
        <Table 
          columns={retailColumns} 
          rows={retailColumnData} 
          onRefresh={handleRetailerRefresh} 
          loading={loadingRetailData} 
          filterKey="productName"
          rowsPerPage={4}/>
      </div>
    </div>
  );
}
