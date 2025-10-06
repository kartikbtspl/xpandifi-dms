"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import AddCompanyStockForm from "./components/AddCompanyStockForm"
import React, { useState } from 'react'
import Table from '@/components/common/table/Table'
import getAddCompanyStock from './components/getAddCompanyStock'

function AddCompanyStock() {
  const [addCompanyStockData, setAddCompanyStockData] = useState([
      {
        id: 1,
        productId: "-",
        productCode: "-",
        quantity: "-",
        productName: "-",
        pack: "-",
        expiryDate: "",
        action: ""
      },
    ]);
  
    const [loadingAddCompanyStockList, setLoadingAddCompanyStockList] = useState(false);
  
    const addCompanyStockColumns = getAddCompanyStock();
  
    const handleRefreshAddCompanyStockList = () => {
      setLoadingAddCompanyStockList(true);
      setTimeout(() => {
        setLoadingAddCompanyStockList(false);
        setAddCompanyStockData((prev) => [...prev]); // refresh same data
      }, 1000);
    };
  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "Stock Reports", isClickable: false },
          { label: "Company Stock", href: "/oem/reports/stock-reports/company-stock" },
        ]}
      />
      <h1 className="text-3xl font-semibold text-[#445E94]">Primary Stock</h1>
      <div className="space-y-4 rounded-lg bg-white shadow-sm">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">Primary GRN List</h1>
        </div>
        <hr className="text-gray-200" />
        <div className="px-6 py-4">
          <AddCompanyStockForm />
        </div>
      </div>
      <div className="space-y-4 rounded-lg bg-white shadow-sm">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">
            Primary GRN List
          </h1>
        </div>
        <hr className="text-gray-200" />

        <div className="px-6 py-4">
          <Table
            rows={addCompanyStockData}
            columns={addCompanyStockColumns}
            onRefresh={handleRefreshAddCompanyStockList}
            loading={loadingAddCompanyStockList}
            showPagination
            rowsPerPage={3}
          />
        </div>
      </div>
    </div>
  )
}

export default AddCompanyStock