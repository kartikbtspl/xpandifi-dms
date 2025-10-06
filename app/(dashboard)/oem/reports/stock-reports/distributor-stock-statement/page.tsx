"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React, { useState } from 'react'
import DistributorStockStatementForm from "./components/DistributorStockStatementForm"
import { FiShare } from 'react-icons/fi'
import Button from '@/components/common/ui/Button'
import getDistributorStockStatementCol from './components/getDistributorStockStatementCol'
import Table from '@/components/common/table/Table'

const DistributorStockStatement = () => {

  const [distributorStockStatementData, setDistributorStockStatementData] = useState([
    {
      id: 1,
      srNo: "01",
      distributorName: "Medico Distributors",
      productName: "Amoxycillin Capsules",
      pack: "Box of 10",
      openingStock: "",
      consumedStock: "",
      closingStock: "",
      action: "",
    },
    {
      id: 2,
      srNo: "02",
      distributorName: "Medico Distributors",
      productName: "Amoxycillin Capsules",
      pack: "Box of 10",
      openingStock: "",
      consumedStock: "",
      closingStock: "",
      action: "",
    },
    {
      id: 3,
      srNo: "03",
      distributorName: "Medico Distributors",
      productName: "Amoxycillin Capsules",
      pack: "Box of 10",
      openingStock: "",
      consumedStock: "",
      closingStock: "",
      action: "",
    },
    {
      id: 4,
      srNo: "04",
      distributorName: "Medico Distributors",
      productName: "Amoxycillin Capsules",
      pack: "Box of 10",
      openingStock: "",
      consumedStock: "",
      closingStock: "",
      action: "",
    },
    {
      id: 5,
      srNo: "05",
      distributorName: "Medico Distributors",
      productName: "Amoxycillin Capsules",
      pack: "Box of 10",
      openingStock: "",
      consumedStock: "",
      closingStock: "",
      action: "",
    }
  ]);


  const [loadingdistributorStockState, setLoadingdistributorStockState] = useState(false);

  const handleView = (row: any) => {
    alert(`Viewing leave balance for ${row.userName}`);
  };

  const distributorStockStatementColumns = getDistributorStockStatementCol(handleView);

  const handleRefreshDistributorStockStatement = () => {
    setLoadingdistributorStockState(true);
    setTimeout(() => {
      setLoadingdistributorStockState(false);
      setDistributorStockStatementData((prev) => [...prev]); // refresh same data
    }, 1000);
  };

  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "Stock Reports", isClickable: false },
          { label: "Distributor Stock Statement", href: "/oem/reports/stock-reports/distributor-stock-statement" },
        ]}
      />
      <h1 className="text-3xl font-semibold text-[#445E94]">Distributor Stock Statement</h1>
      <div className="space-y-4 rounded-lg bg-white shadow-sm">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">Distributor Stock Report</h1>
        </div>
        <hr className="text-gray-200" />
        <div className="px-6 py-4">
          <DistributorStockStatementForm />
        </div>
      </div>
      <div className="space-y-4 rounded-lg bg-white shadow-sm">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">
            Stock List
          </h1>
          <div className='flex gap-3'>
            <Button startIcon={<FiShare />} className="cursor-pointer">Export</Button>
          </div>
        </div>
        <hr className="text-gray-200" />

        <div className="px-6 py-4">
          <Table
            rows={distributorStockStatementData}
            columns={distributorStockStatementColumns}
            onRefresh={handleRefreshDistributorStockStatement}
            loading={loadingdistributorStockState}
            showPagination
            rowsPerPage={3}
          />
        </div>
      </div>
    </div>
  )
}

export default DistributorStockStatement