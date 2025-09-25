"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React, { useState } from 'react'
import BeatReportPieChart from './components/BeatReportPieChart'
import DailyAttendanceReportForm from './components/DailyAttendanceReportForm'
import getAttendanceReportCol from './components/getAttendanceReportCol'
import Table from '@/components/common/table/Table'
import Button from '@/components/common/ui/Button'
import { FiShare } from "react-icons/fi";

const AttendanceReport = () => {

  const [attendanceReportData, setAttendanceReportData] = useState([
      {
        id: 1,
        srNo: "01",
        salesName: "",
        firstIn: "",
        lastOut: "",
        entry: "",
        exit: "",
        workingHr: "",
        inLocation: "",
        outLocation: "",
        companyLocationIn: "",
        companyLocationOut: "",
        division: "",
        country: "",
        state: "",
        city: "",
        roleName: "",
        action: ""
      },
      {
        id: 2,
        srNo: "02",
        salesName: "",
        firstIn: "",
        lastOut: "",
        entry: "",
        exit: "",
        workingHr: "",
        inLocation: "",
        outLocation: "",
        companyLocationIn: "",
        companyLocationOut: "",
        division: "",
        country: "",
        state: "",
        city: "",
        roleName: "",
        action: ""
      },
    ]);

    const [loadingAttendanceReport, setLoadingAttendanceReport] = useState(false);

    const attendacneReportColumns = getAttendanceReportCol();

  const handleRefreshAttendanceReport = () => {
    setLoadingAttendanceReport(true);
    setTimeout(() => {
      setLoadingAttendanceReport(false);
      setAttendanceReportData((prev) => [...prev]); // refresh same data
    }, 1000);
  };

  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem" },
          { label: "HR Management", href: "/oem/hr-management" },
          { label: "Attendance Report", href: "/oem/sales-order-workflow/attendance-report" },
        ]}
      />
      <h1 className="text-3xl font-semibold text-[#445E94]">Attendance Report</h1>
      <BeatReportPieChart />
      <DailyAttendanceReportForm />
      <div className="space-y-4 rounded-lg bg-white">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">Total Employees = 0</h1>
          <Button startIcon={<FiShare/>}>Export</Button>
        </div>
        <hr className="text-gray-200" />

        <div className="px-6 w-[1220px] py-4">
          <Table
            rows={attendanceReportData}
            columns={attendacneReportColumns}
            onRefresh={handleRefreshAttendanceReport}
            loading={loadingAttendanceReport}
            showPagination
            rowsPerPage={3}
          />
        </div>
      </div>
    </div>
  )
}

export default AttendanceReport