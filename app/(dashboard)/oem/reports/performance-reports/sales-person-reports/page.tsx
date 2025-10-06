"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React, { useState } from 'react'
import SalesPersonReportForm from './components/SalesPersonReportForm'
import getSalesPersonReportCol from './components/getSalesPersonReportCol'
import Button from '@/components/common/ui/Button'
import { FiShare } from 'react-icons/fi'
import SalesPersonReportBarChart from './components/SalesPersonReportBarChart'
import Table from '@/components/common/table/Table'

const SalesPersonReports = () => {

  const [salesPersonReportData, setsalesPersonReportData] = useState([
      { id: 1, srNo: "01", routeName: "", amount: "", order: "" },
      { id: 2, srNo: "02", routeName: "", amount: "", order: "" },
      { id: 3, srNo: "03", routeName: "", amount: "", order: "" },
      { id: 4, srNo: "04", routeName: "", amount: "", order: "" },
      { id: 5, srNo: "05", routeName: "", amount: "", order: "" },
    ]);
  
    const chartData = [
      { name: "Customers", amount: 1.2, order: 1.4 },
    ];
    const [loadingSalesPersonReport, setLoadingSalesPersonReport] = useState(false);
    const [showGraph, setShowGraph] = useState(false);
  
    const salesPersonReportColumns = getSalesPersonReportCol();
  
    const handleRefreshSalesPersonReport = () => {
      setLoadingSalesPersonReport(true);
      setTimeout(() => {
        setLoadingSalesPersonReport(false);
        setsalesPersonReportData((prev) => [...prev]); // refresh same data
      }, 1000);
    };
  
    

  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "Performance Reports", isClickable: false },
          { label: "Sales Person Report", href: "/oem/reports/performance-reports/sales-person-reports" },
        ]}
      />
      <h1 className="text-3xl font-semibold text-[#445E94]">Sales Person Report</h1>
      <div className="space-y-4 rounded-lg bg-white shadow-sm">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">Performance Report - Sales Report</h1>
        </div>
        <hr className="text-gray-200" />
        <div className="">
          <SalesPersonReportForm />
        </div>
      </div>
      <div className='bg-white rounded-full shadow-sm p-1'>
        <Button className='cursor-pointer' onClick={() => setShowGraph(prev => !prev)}>
          {showGraph ? "List View" : "Show Graph"}
        </Button>
      </div>
      <div className="space-y-4 rounded-lg bg-white shadow-sm">
        {/* Conditionally render headers/content depending on view */}
        {showGraph ? (
          <>
            <div className="flex justify-between px-6 pt-4">
              <h1 className="text-xl text-[#445E94]">
                Sales Person Graph
              </h1>
              <div className="flex gap-3">
                <Button startIcon={<FiShare />} className="cursor-pointer">
                  Export
                </Button>
              </div>
            </div>
            <hr className="text-gray-200" />
            {/* Graph or custom content goes here */}
            <div className="p-6 flex justify-center items-center min-h-[400px]">
              <SalesPersonReportBarChart
                title="Kilometers"
                data={chartData}
                barColorAmount="#4F6D9F"
                barColorOrder="#D56F7A"
              />
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-between px-6 pt-4">
              <h1 className="text-xl text-[#445E94]">
                Sales Person List
              </h1>
              <div className='flex gap-3'>
                <Button startIcon={<FiShare />} className="cursor-pointer">Export</Button>
              </div>
            </div>
            <hr className="text-gray-200" />
            <div className="px-6">
              <Table
                rows={salesPersonReportData}
                columns={salesPersonReportColumns}
                onRefresh={handleRefreshSalesPersonReport}
                loading={loadingSalesPersonReport}
                showPagination
                rowsPerPage={3}
              />
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default SalesPersonReports