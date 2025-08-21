"use client"

import SearchingOrder from "./components/SearchingOrder";
import Button from "../../../components/common/ui/Button";
import Table from "../../../components/common/table/Table";
import getPrimaryTableColumns from "./components/primaryOrdertable";
import { useState } from "react";
import { FiEye } from "react-icons/fi";
import { useRouter } from "next/navigation";

export default function PromaryOrder(){

  const router = useRouter();

  const [primaryTableData, setPrimaryTableData] = useState([
    {
      id : 1,
      srNo : "01",
      orderNumber : "245",
      distributerName: "Teamspring",
      orderDate: "22 june,2025",
      total : "6723",
      blank : <FiEye className="text-blue-600 cursor-pointer" />,
    },
    {
      id : 2,
      srNo : "02",
      orderNumber : "245",
      distributerName: "Teamspring",
      orderDate: "22 june,2025",
      total : "6723",
      blank : <FiEye className="text-blue-600 cursor-pointer" />,
    },
    {
      id : 3,
      srNo : "03",
      orderNumber : "245",
      distributerName: "Teamspring",
      orderDate: "22 june,2025",
      total : "6723",
      blank : <FiEye className="text-blue-600 cursor-pointer" />,
    },
    {
      id : 4,
      srNo : "04",
      orderNumber : "245",
      distributerName: "Teamspring",
      orderDate: "22 june,2025",
      total : "6723",
      blank : <FiEye className="text-blue-600 cursor-pointer" />,
    },
    {
      id : 5,
      srNo : "05",
      orderNumber : "245",
      distributerName: "Teamspring",
      orderDate: "22 june,2025",
      total : "6723",
      blank : <FiEye className="text-blue-600 cursor-pointer" />,
    },
    {
      id : 6,
      srNo : "06",
      orderNumber : "245",
      distributerName: "Teamspring",
      orderDate: "22 june,2025",
      total : "6723",
      blank : <FiEye className="text-blue-600 cursor-pointer" />,
    },
    {
      id : 7,
      srNo : "07",
      orderNumber : "245",
      distributerName: "Teamspring",
      orderDate: "22 june,2025",
      total : "6723",
      blank : <FiEye className="text-blue-600 cursor-pointer" />,
    },
    {
      id : 8,
      srNo : "08",
      orderNumber : "245",
      distributerName: "Teamspring",
      orderDate: "22 june,2025",
      total : "6723",
      blank : <FiEye className="text-blue-600 cursor-pointer" />,
    },
  ]);

  const primaryTableColumns = getPrimaryTableColumns();

  const [loadingPrimaryTable, setLoadingPrimaryTable] = useState(false);

  const handleRefreshPrimary = () => {
    setLoadingPrimaryTable(true);
    setTimeout(() => {
      setLoadingPrimaryTable(false)
      setPrimaryTableData(primaryTableData)
    }, 1000);
  };

  const handleAddClick = () =>{
    router.push("primary-order/add-products")
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Primary Order</h1>
      <p className="text-sm text-gray-500">Monitor and manage your primary order</p>

      <div className="mt-4">
        <SearchingOrder />
      </div>
      <div className="flex w-full justify-between mt-4 ">
        <h1 className="text-xl font-semibold">Primary order list</h1>
        <Button rounded="full" onClick={handleAddClick}>Add Primary order</Button>
      </div>
      <div className="mt-4">
        <Table
          columns={primaryTableColumns} 
          rows={primaryTableData}
          rowsPerPage={4} 
          loading={loadingPrimaryTable} 
          onRefresh={handleRefreshPrimary} 
          showPagination={true}  
          onRowClick={row => router.push(`/dms/primary-order/${row.id}`)}
          filterKey="orderNumber"
        />
      </div>
      
    </div>
  )
}
