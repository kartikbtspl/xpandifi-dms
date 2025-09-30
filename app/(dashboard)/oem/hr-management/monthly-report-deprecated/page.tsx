"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React, { useState } from 'react'
import MonthlyReportDeprecatedForm from "./components/MonthlyReportDeprecatedForm"
import getMonthlyReportDepCol from './components/getMonthlyReportDepCol'
import Table from '@/components/common/table/Table'

function MonthlyReportDeprecated() {

  const [monthlyReportDeprecatedData, setMonthlyReportDeprecatedData] = useState([
    {
      id: 1,
      srNo: "01",
      date: "-",
      userName: "-",
      status: "-",
      inTime: "-",
      outTime: "-",
      duration: "-",
      inLocation: "-",
      outLocation: "-",
    },
    {
      id: 2,
      srNo: "02",
      date: "-",
      userName: "-",
      status: "-",
      inTime: "-",
      outTime: "-",
      duration: "-",
      inLocation: "-",
      outLocation: "-",
    },
    {
      id: 3,
      srNo: "03",
      date: "-",
      userName: "-",
      status: "-",
      inTime: "-",
      outTime: "-",
      duration: "-",
      inLocation: "-",
      outLocation: "-",
    },
  ])

  const [loadingMonthlyReportDept, setloadingMonthlyReportDept] = useState(false);
  const monthlyReportDepColumns = getMonthlyReportDepCol();

  const handleRefreshMonthlyReportDep = () => {
    setloadingMonthlyReportDept(true);
    setTimeout(() => {
      setloadingMonthlyReportDept(false);
      setMonthlyReportDeprecatedData(monthlyReportDeprecatedData);
    }, 1000);
  };

  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "HR Management", href: "/oem/hr-management" },
          { label: "Monthly Report(Deprecated)", href: "/oem/hr-management/monthly-report-deprecated" },
        ]}
      />
      <h1 className="text-3xl font-semibold text-[#445E94]">Monthly Report(Deprecated)</h1>
      <MonthlyReportDeprecatedForm />
      <div className="space-y-4 rounded-lg bg-white">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]"> Monthly Attendance </h1>
        </div>
        <hr className="text-gray-200" />
        <div className="px-6 py-4 w-[1200px] overflow-x-auto">
          <Table
            rows={monthlyReportDeprecatedData}
            columns={monthlyReportDepColumns}
            onRefresh={handleRefreshMonthlyReportDep}
            loading={loadingMonthlyReportDept}
            showPagination
            rowsPerPage={2}
          />
        </div>
      </div>
    </div>
  )
}

export default MonthlyReportDeprecated