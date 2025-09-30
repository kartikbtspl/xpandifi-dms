"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React, { useState } from 'react'
import UnderLoadReportForm from "./components/UnderLoadReportForm"
import getUnderLoadReportCol from './components/getUnderLoadReportCol'
import Table from '@/components/common/table/Table'

const UnderLoadReport = () => {

  const [underLoadReportData, setUnderLoadReportData] = useState([
    {
      id: 1,
      srNo: "01",
      vehicleNumber: "-",
      availableCapacity: "-",
      totalCapacity: "-",
      routeName: "-",
      routeDescription: "-",
      action: "-"
    },
    {
      id: 2,
      srNo: "02",
      vehicleNumber: "-",
      availableCapacity: "-",
      totalCapacity: "-",
      routeName: "-",
      routeDescription: "-",
      action: "-"
    },
    {
      id: 3,
      srNo: "03",
      vehicleNumber: "-",
      availableCapacity: "-",
      totalCapacity: "-",
      routeName: "-",
      routeDescription: "-",
      action: "-"
    },
  ]);

  const [loadingUnderLoadReport, setLoadingUnderLoadReport] = useState(false);

  const underLoadReportColumns = getUnderLoadReportCol();

  const handleRefreshUnderLoadReport = () => {
    setLoadingUnderLoadReport(true);
    setTimeout(() => {
      setLoadingUnderLoadReport(false);
      setUnderLoadReportData((prev) => [...prev]); // refresh but same data
    }, 1000);
  };

  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "Sales Order Workflow", href: "/oem/sales-order-workflow" },
          { label: "Under Load Report", href: "/oem/sales-order-workflow/under-load-report" },
        ]}
      />
      <h1 className="text-3xl font-semibold text-[#445E94]">Under Load Report</h1>
      <UnderLoadReportForm />
      <div className="space-y-4 rounded-lg bg-white">
        <div className="flex gap-3 px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">Under Load Condition</h1>
        </div>
        <hr className="text-gray-200" />

        <div className="px-6">
          <Table
            rows={underLoadReportData}
            columns={underLoadReportColumns}
            onRefresh={handleRefreshUnderLoadReport}
            loading={loadingUnderLoadReport}
            showPagination
            rowsPerPage={3}
          />
        </div>
      </div>
    </div>
  )
}

export default UnderLoadReport