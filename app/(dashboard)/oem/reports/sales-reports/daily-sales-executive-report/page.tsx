"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React, { useState } from 'react'
import DailySalesOrderForm from './components/DailySalesOrderForm'
import Button from '@/components/common/ui/Button'
import { FiShare, FiShare2 } from 'react-icons/fi'
import getDailySalesOrderCol from './components/getDailySalesOrderCol'
import Table from '@/components/common/table/Table'

const DailySalesExecutiveReport = () => {

  const [dailySalesOrderReportData, setDailySalesOrderReportData] = useState([
    {
      id: 1,
      cutsomer: "-",
      date: "-",
      assignTo: "-",
      status: "-",
      total: "-"
    },
  ])

  const [loadingDailySales, setLoadingDailySales] = useState(false);

  const dailySalesColumns = getDailySalesOrderCol();

  const handleRefreshDailySalesReport = () => {
    setLoadingDailySales(true);
    setTimeout(() => {
      setLoadingDailySales(false);
      setDailySalesOrderReportData((prev) => [...prev]); // refresh same data
    }, 1000);
  };

  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "Sales Reports", isClickable: false },
          { label: "Daily Sales Order Report", href: "/oem/reports/sales-reports/daily-sales-executive-report" },
        ]}
      />
      <h1 className="text-3xl font-semibold text-[#445E94]">Daily Sales Order Report</h1>
      <div className="space-y-4 rounded-lg bg-white">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">Daily Sales Order Report</h1>
        </div>
        <hr className="text-gray-200" />
        <div className="px-6 py-4">
          <DailySalesOrderForm />
        </div>
      </div>
      <div className="space-y-4 rounded-lg bg-white">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">
            Total Amount = 0 INR  
          </h1>
          <div className='flex gap-3'>
            <Button startIcon={<FiShare />} className="cursor-pointer">Export</Button>
          </div>
        </div>
        <hr className="text-gray-200" />

        <div className="px-6 py-4">
          <Table
            rows={dailySalesOrderReportData}
            columns={dailySalesColumns}
            onRefresh={handleRefreshDailySalesReport}
            loading={loadingDailySales}
            showPagination
            rowsPerPage={3}
          />
        </div>
      </div>
    </div>
  )
}

export default DailySalesExecutiveReport