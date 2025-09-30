"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React, { useState } from 'react'
import LeaveReportForm from './components/LeaveReportForm'
import Table from '@/components/common/table/Table'
import getLeaveReportCol from "./components/getLeaveReportCol"
import { useRouter } from 'next/navigation'

const LeaveReport = () => {
  const [leaveReportData] = useState([
    {
      id: 1,
      srNo: "01",
      user: "Ajinkya",
      appliedDate: "2025-09-01",
      fromDate: "2025-09-13",
      toDate: "2025-09-14",
      leaveType: "Casual",
      reason: "Personal Work",
      leaveCount: "2",
      status: "Approved",
    },
    {
      id: 2,
      srNo: "02",
      user: "Neha",
      appliedDate: "2025-09-10",
      fromDate: "2025-09-15",
      toDate: "2025-09-16",
      leaveType: "Sick",
      reason: "Fever",
      leaveCount: "2",
      status: "Pending",
    },
    {
      id: 3,
      srNo: "03",
      user: "Rohit",
      appliedDate: "2025-09-20",
      fromDate: "2025-09-22",
      toDate: "2025-09-23",
      leaveType: "Casual",
      reason: "Travel",
      leaveCount: "2",
      status: "Rejected",
    },
  ]);

  const router = useRouter();

  const [filteredData, setFilteredData] = useState(leaveReportData);
  const [loadingLeavereport, setLoadingLeavereport] = useState(false);

  const handleView = (row: any) => {
    const query = new URLSearchParams(row).toString();
    router.push(`/oem/hr-management/leave-report/view-leave-report?${query}`);
  };

  const leaveReportColumns = getLeaveReportCol(handleView);

  // ✅ Updated filter logic: only user + appliedDate in date range
  const handleFilter = (filters: {
    user: string;
    dateRange: { startDate: Date; endDate: Date };
  }) => {
    let filtered = leaveReportData;

    if (filters.user) {
      filtered = filtered.filter((row) =>
        row.user.toLowerCase().includes(filters.user.toLowerCase())
      );
    }

    if (filters.dateRange?.startDate && filters.dateRange?.endDate) {
      const start = new Date(filters.dateRange.startDate).setHours(0, 0, 0, 0);
      const end = new Date(filters.dateRange.endDate).setHours(23, 59, 59, 999);

      filtered = filtered.filter((row) => {
        if (!row.appliedDate) return false;
        const applied = new Date(row.appliedDate).getTime();
        return applied >= start && applied <= end;
      });
    }

    setFilteredData(filtered);
  };

  const handleRefreshLeaveReport = () => {
    setLoadingLeavereport(true);
    setTimeout(() => {
      setLoadingLeavereport(false);
      setFilteredData(leaveReportData); // reset to all
    }, 1000);
  };

  return (
    <div className="space-y-4">
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "HR Management", href: "/oem/hr-management" },
          { label: "Leave Report", href: "/oem/hr-management/leave-report" },
        ]}
      />

      <h1 className="text-3xl font-semibold text-[#445E94]">Leave Report</h1>

      <LeaveReportForm onFilter={handleFilter} />

      <div className="space-y-4 rounded-lg bg-white">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">
            Role Wise Leave Configuration List
          </h1>
        </div>
        <hr className="text-gray-200" />

        <div className="px-6 py-4">
          <Table
            rows={filteredData}
            columns={leaveReportColumns}
            onRefresh={handleRefreshLeaveReport}
            loading={loadingLeavereport}
            showPagination
            rowsPerPage={3}
          />
        </div>
      </div>
    </div>
  );
};

export default LeaveReport;
