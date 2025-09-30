"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React, { useState } from 'react'
import Table from '@/components/common/table/Table'
import MaterailStockReportForm from './components/MaterailStockReportForm'
import getMaterialStockCol from './components/getMaterialStockCol'

const MaterialStockReport = () => {

  const [materialStockData, setMaterialStockData] = useState([
    {
      id: 1,
      srNo: "01",
      salesPerson: "-",
      customer: "-",
      plant: "-",
      date: "-",
      status: "-",
      total: "-",
      address: "-",
      approvalStatus: "-",
      action: "-"
    },
    {
      id: 2,
      srNo: "02",
      salesPerson: "-",
      customer: "-",
      plant: "-",
      date: "-",
      status: "-",
      total: "-",
      address: "-",
      approvalStatus: "-",
      action: "-"
    },
    {
      id: 3,
      srNo: "03",
      salesPerson: "-",
      customer: "-",
      plant: "-",
      date: "-",
      status: "-",
      total: "-",
      address: "-",
      approvalStatus: "-",
      action: "-"
    },
  ]);

  const [loadingMaterialStock, setLoadingMaterialStock] = useState(false);

  const materialStockColumns = getMaterialStockCol();

  const handleRefreshMaterialStock = () => {
        setLoadingMaterialStock(true);
        setTimeout(() => {
          setLoadingMaterialStock(false);
          setMaterialStockData((prev) => [...prev]); // refresh but same data
        }, 1000);
      };

  return (
    <div className='space-y-4'>
      <div className='space-y-4'>
        <Breadcrumb
          crumbs={[
            { label: "Home", href: "/oem/dashboard" },
            { label: "Sales Order Workflow", href: "/oem/sales-order-workflow" },
            { label: "Material Stock Report", href: "/oem/sales-order-workflow/material-stock-report"},
          ]}
        />
        <h1 className="text-3xl font-semibold text-[#445E94]">Club Sales Order</h1>
        <MaterailStockReportForm />
        <div className="space-y-4 rounded-lg bg-white">
          <div className="flex gap-3 px-6 pt-4">
            <h1 className="text-xl text-[#445E94]">Total Amount = </h1>
            <h1 className="text-xl text-[#445E94]">Total Orders = </h1>
          </div>
          <hr className="text-gray-200" />

          <div className="px-6">
            <Table
            rows={materialStockData}
            columns={materialStockColumns}
            onRefresh={handleRefreshMaterialStock}
            loading={loadingMaterialStock}
            showPagination
            rowsPerPage={3}
          />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MaterialStockReport