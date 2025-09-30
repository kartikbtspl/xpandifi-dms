"use client"
import Table from '@/components/common/table/Table'
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import Button from '@/components/common/ui/Button'
import React, { useState } from 'react'
import getOutstandingReportCol from './components/getOutstandingReportCol'
import { useRouter } from 'next/navigation'

const OutstandingReport = () => {

  const [outstandingData, setOutstandingData] = useState([
    {
      id: 1,
      srNo: "01",
      customerName: "ABC",
      amount: "10,000",
      distributor: "XYZ",
      lastUpdateOn: "16-09-2025 11:49",
      action: ""
    },
    {
      id: 2,
      srNo: "02",
      customerName: "ABC",
      amount: "10,000",
      distributor: "XYZ",
      lastUpdateOn: "16-09-2025 11:49",
      action: ""
    },
    {
      id: 3,
      srNo: "03",
      customerName: "ABC",
      amount: "10,000",
      distributor: "XYZ",
      lastUpdateOn: "16-09-2025 11:49",
      action: ""
    },
  ])

  const router = useRouter();

  const [loadingOutstanding, setLoadingOutstanding] = useState(false);

  const handleView = (row: any) => {
    // pass the row as query param
    router.push(`/oem/invoice-payment/outstanding-report/view-outstanding-report?data=${encodeURIComponent(JSON.stringify(row))}`)
  }

  const handleDelete = (row: any) => {
    // Filter out the row that was clicked
    setOutstandingData(prev => prev.filter(r => r.id !== row.id));
  }

  const outstandingReportColumns = getOutstandingReportCol(handleView, handleDelete);

  const handleRefreshOutstandingReport = () => {
    setLoadingOutstanding(true);
    setTimeout(() => {
      setLoadingOutstanding(false);
      setOutstandingData((prev) => [...prev]); // refresh but same data
    }, 1000);
  };

  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "Invoice & Payment", href: "/oem/invoice-payment" },
          { label: "Outstanding Report", href: "/oem/invoice-payment/outstanding-report" },
        ]}
      />
      <h1 className="text-3xl font-semibold text-[#445E94]">Outstanding Report</h1>
      <div className="space-y-4 rounded-lg bg-white">
        {/* Header */}
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">Primary Order List</h1>
          <div className='flex gap-3'>
            <Button variant='outline'>Import</Button>
            <Button>Export</Button>
          </div>
        </div>

        <hr className="text-gray-200" />

        {/* Table */}
        <div className="px-6 pb-4">
          <Table
            columns={outstandingReportColumns}
            rows={outstandingData}
            onRefresh={handleRefreshOutstandingReport}
            loading={loadingOutstanding}
            showPagination
            rowsPerPage={3}
          />
        </div>
      </div>
    </div>
  )
}

export default OutstandingReport