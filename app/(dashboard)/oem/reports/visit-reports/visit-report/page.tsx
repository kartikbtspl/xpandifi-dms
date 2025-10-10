"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React, { useState } from 'react'
import VisitReportsForm from './components/VisitReportForm'
import Button from '@/components/common/ui/Button'
import { FiUpload } from 'react-icons/fi'
import getVisitReportCol from './components/getVisitReportCol'
import Table from '@/components/common/table/Table'

const VisitReports = () => {
  const [visitReportData, setVisitReportData] = useState([
    {
      id: 1,
      srNo: "01",
      userName: "",
      customer: "",
      plannedDetails: "",
      status: "",
      address: "",
      remark: "",
    },
    {
      id: 2,
      srNo: "02",
      userName: "",
      customer: "",
      plannedDetails: "",
      status: "",
      address: "",
      remark: "",
    },
    {
      id: 3,
      srNo: "03",
      userName: "",
      customer: "",
      plannedDetails: "",
      status: "",
      address: "",
      remark: "",
    },
    {
      id: 4,
      srNo: "04",
      userName: "",
      customer: "",
      plannedDetails: "",
      status: "",
      address: "",
      remark: "",
    },
    {
      id: 5,
      srNo: "05",
      userName: "",
      customer: "",
      plannedDetails: "",
      status: "",
      address: "",
      remark: "",
    }
  ]);

  const [loadingVisitReport, setLoadingVisitReport] = useState(false);

  const handleView = (row: any) => {
    alert("View Clicked...")
  };

  const visitReportColumns = getVisitReportCol(handleView);

  const handleRefreshVisitReport = () => {
    setLoadingVisitReport(true);
    setTimeout(() => {
      setLoadingVisitReport(false);
      setVisitReportData((prev) => [...prev]); // refresh same data
    }, 1000);
  };
  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "Visit Reports", isClickable: false },
          { label: "Visit Report", href: "/oem/reports/visit-reports/visit-report" },
        ]}
      />
      <h1 className="text-3xl font-semibold text-[#445E94]">Visit Reports</h1>
      <div className="space-y-4 rounded-lg bg-white shadow-sm">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">Visit Reports</h1>
        </div>
        <hr className="text-gray-200" />
        <div className="">
          <VisitReportsForm />
        </div>
      </div>
      <div className="space-y-4 rounded-lg bg-white shadow-sm">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">
            Visit List
          </h1>
          <Button className='cursor-pointer' startIcon={<FiUpload />}>Export</Button>
        </div>
        <hr className="text-gray-200" />
        <div className="px-6 py-4">
          <Table
            rows={visitReportData}
            columns={visitReportColumns}
            onRefresh={handleRefreshVisitReport}
            loading={loadingVisitReport}
            showPagination
            rowsPerPage={3}
          />
        </div>
      </div>
    </div>
  )
}

export default VisitReports