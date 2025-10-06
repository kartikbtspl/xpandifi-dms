"use client"

import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React, { useState } from 'react'
import TargetReportForm from './components/TargetReportForm'
import Button from '@/components/common/ui/Button'
import { FiShare } from 'react-icons/fi'
import getTargetReportCol from './components/getTargetReportCol'
import Table from '@/components/common/table/Table'

const TargetReport = () => {

  const [targetReportData, setTargetReportData] = useState([
      {
        id: 1,
        srNo: "01",
        salesPersonName: "",
        targetAchived: "",
        actualTarget: "",
        percentage: ""
      },
      {
        id: 2,
        srNo: "02",
        salesPersonName: "",
        targetAchived: "",
        actualTarget: "",
        percentage: ""
      },
      {
        id: 3,
        srNo: "03",
        salesPersonName: "",
        targetAchived: "",
        actualTarget: "",
        percentage: ""
      },
      {
        id: 4,
        srNo: "04",
        salesPersonName: "",
        targetAchived: "",
        actualTarget: "",
        percentage: ""
      },
      {
        id: 5,
        srNo: "05",
        salesPersonName: "",
        targetAchived: "",
        actualTarget: "",
        percentage: ""
      },
    ]);
  
    const [loadingTargetReport, setLoadingTargetReport] = useState(false);
  
    const targetReportColumns = getTargetReportCol();
  
    const handleRefreshTargetReport = () => {
      setLoadingTargetReport(true);
      setTimeout(() => {
        setLoadingTargetReport(false);
        setTargetReportData((prev) => [...prev]); // refresh same data
      }, 1000);
    };

  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "Target Reports", isClickable: false },
          { label: "Target Report", href: "/oem/reports/target-reports/target-report" },
        ]}
      />
      <h1 className="text-3xl font-semibold text-[#445E94]">Target Report</h1>
      <div className="space-y-4 rounded-lg bg-white shadow-sm">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">Search Target</h1>
        </div>
        <hr className="text-gray-200" />
        <div className="">
          <TargetReportForm />
        </div>
      </div>
      <div className="space-y-4 rounded-lg bg-white shadow-sm">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">
            Target Report List
          </h1>
          <div className='flex gap-3'>
            <Button startIcon={<FiShare />} className="cursor-pointer">Export</Button>
          </div>
        </div>
        <hr className="text-gray-200" />

        <div className="px-6 py-4">
          <Table
            rows={targetReportData}
            columns={targetReportColumns}
            onRefresh={handleRefreshTargetReport}
            loading={loadingTargetReport}
            showPagination
            rowsPerPage={3}
          />
        </div>
      </div>
    </div>
  )
}

export default TargetReport