"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React, { useState } from 'react'
import AttendanceSummaryForm from './components/AttendanceSummaryForm'
import Button from '@/components/common/ui/Button'
import { FiShare } from 'react-icons/fi'
import getAttendanceSummaryCol from './components/getAttendanceSummaryCol'
import Table from '@/components/common/table/Table'

const AttendanceSummary = () => {
  const allData = [
    {
      id: 1,
      srNo: "01",
      employeeName: "Shreyash",
      presentDays: "49",
      absentDays: "1",
      leaves: "1",
      holidays: "4",
      weeklyOffs: "2",
    },
    {
      id: 2,
      srNo: "02",
      employeeName: "Harshal",
      presentDays: "49",
      absentDays: "1",
      leaves: "1",
      holidays: "4",
      weeklyOffs: "2",
    },
    {
      id: 3,
      srNo: "03",
      employeeName: "Nikhil",
      presentDays: "49",
      absentDays: "1",
      leaves: "1",
      holidays: "4",
      weeklyOffs: "2",
    },
  ];

  const [attendanceSummaryData, setAttendanceSummaryData] = useState(allData);
  const [loadingAttendanceSummary, setLoadingAttendanceSummary] = useState(false);

  const attendanceSummaryColumns = getAttendanceSummaryCol();

  const handleSearch = (filters: any) => {
    // For now, filter by user only (can extend to country/state/city)
    let filtered = allData;
    if (filters.user) {
      filtered = filtered.filter(
        (row) => row.employeeName.toLowerCase() === filters.user.toLowerCase()
      );
    }
    setAttendanceSummaryData(filtered);
  };

  const handleRefreshAttendanceSummary = () => {
    setLoadingAttendanceSummary(true);
    setTimeout(() => {
      setLoadingAttendanceSummary(false);
      setAttendanceSummaryData(allData); // refresh with full data
    }, 1000);
  };

  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem" },
          { label: "HR Management", href: "/oem/hr-management" },
          {
            label: "Attendance Summary",
            href: "/oem/hr-management/attendance-summary",
          },
        ]}
      />
      <h1 className="text-3xl font-semibold text-[#445E94]">Attendance Summary</h1>
      
      {/* ✅ Pass search handler */}
      <AttendanceSummaryForm onSearch={handleSearch} />

      <div className="space-y-4 rounded-lg bg-white">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">
            Attendance Summary
          </h1>
          <Button startIcon={<FiShare />} className="cursor-pointer">Export</Button>
        </div>
        <hr className="text-gray-200" />

        <div className="px-6 py-4">
          <Table
            rows={attendanceSummaryData}
            columns={attendanceSummaryColumns}
            onRefresh={handleRefreshAttendanceSummary}
            loading={loadingAttendanceSummary}
            showPagination
            rowsPerPage={3}
          />
        </div>
      </div>
    </div>
  )
}

export default AttendanceSummary
