"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React, { useState } from 'react'
import DailySalesReportForm from './components/DailySalesReportForm'
import getDailySalesReportCol from './components/getDailySalesReportCol'
import Table from '@/components/common/table/Table'

const DailySalesReports = () => {

  const [dailySalesReportData, setDailySalesReportData] = useState([
    {
      id: 1,
      srNo: "01",
      userName: "Amit Sharma",
      date: "2025-10-01",
      noOfVisits: "15",
      noOfOrders: "7",
      amount: "₹22,000",
      achived: "₹17,500",
      action: ""
    },
    {
      id: 2,
      srNo: "02",
      userName: "Riya Verma",
      date: "2025-10-01",
      noOfVisits: "12",
      noOfOrders: "5",
      amount: "₹15,900",
      achived: "₹14,400",
      action: ""
    },
    {
      id: 3,
      srNo: "03",
      userName: "John Massey",
      date: "2025-10-01",
      noOfVisits: "18",
      noOfOrders: "10",
      amount: "₹31,750",
      achived: "₹29,000",
      action: ""
    },
    {
      id: 4,
      srNo: "04",
      userName: "Priya Singh",
      date: "2025-10-01",
      noOfVisits: "9",
      noOfOrders: "4",
      amount: "₹12,000",
      achived: "₹9,500",
      action: ""
    },
    {
      id: 5,
      srNo: "05",
      userName: "Sahil Patel",
      date: "2025-10-01",
      noOfVisits: "20",
      noOfOrders: "12",
      amount: "₹37,250",
      achived: "₹36,000",
      action: ""
    }
  ]);



  const [loadingDailySalesReport, setLoadingDailySalesReport] = useState(false);

  const handleView = (row: any) => {
    alert(`Viewing leave balance for ${row.userName}`);
  };

  const dailySalesReportColumns = getDailySalesReportCol(handleView);

  const handleRefreshDailySalesReport = () => {
    setLoadingDailySalesReport(true);
    setTimeout(() => {
      setLoadingDailySalesReport(false);
      setDailySalesReportData((prev) => [...prev]); // refresh same data
    }, 1000);
  };

  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "Target Reports", isClickable: false },
          { label: "Daily Status Report", href: "/oem/reports/target-reports/daily-sales-reports" },
        ]}
      />
      <h1 className="text-3xl font-semibold text-[#445E94]">Daily Status Report</h1>
      <div className="space-y-4 rounded-lg bg-white shadow-sm">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">Distributor GRN List</h1>
        </div>
        <hr className="text-gray-200" />
        <div className="">
          <DailySalesReportForm />
        </div>
      </div>
      <div className="space-y-4 rounded-lg bg-white shadow-sm">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">
            Active Customer List
          </h1>
        </div>
        <hr className="text-gray-200" />

        <div className="px-6 py-4">
          <Table
            rows={dailySalesReportData}
            columns={dailySalesReportColumns}
            onRefresh={handleRefreshDailySalesReport}
            loading={loadingDailySalesReport}
            showPagination
            rowsPerPage={3}
          />
        </div>
      </div>
    </div>
  )
}

export default DailySalesReports