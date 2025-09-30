"use client";

import Breadcrumb from "@/components/common/ui/BreadCrumb";
import React, { useState } from "react";
import LeaveBalanceReportForm from "./components/LeaveBalanceReportForm";
import Table from "@/components/common/table/Table";
import getLeaveBalanceReportCol from "./components/getLeaveBalanceReportCol";

const LeaveBalanceReport = () => {
  // Original unfiltered data
  const [leaveBalanceReportData] = useState([
    {
      id: 1,
      srNo: "01",
      userName: "Ajinkya Darkase",
      leavesInYear: 24,
      balanceLeaves: 13,
      consumedLeaves: 11,
      year: "2025",
    },
    {
      id: 2,
      srNo: "02",
      userName: "Neha Sharma",
      leavesInYear: 24,
      balanceLeaves: 20,
      consumedLeaves: 4,
      year: "2025",
    },
    {
      id: 3,
      srNo: "03",
      userName: "Rohit Patil",
      leavesInYear: 24,
      balanceLeaves: 18,
      consumedLeaves: 6,
      year: "2024",
    },
    {
      id: 4,
      srNo: "04",
      userName: "Priya Kulkarni",
      leavesInYear: 24,
      balanceLeaves: 22,
      consumedLeaves: 2,
      year: "2023",
    },
    {
      id: 5,
      srNo: "05",
      userName: "Vikram Joshi",
      leavesInYear: 24,
      balanceLeaves: 15,
      consumedLeaves: 9,
      year: "2024",
    },
  ]);

  // Filtered data state
  const [filteredData, setFilteredData] = useState(leaveBalanceReportData);
  const [loadingLeaveBalance, setLoadingLeaveBalance] = useState(false);

  // Handle view action
  const handleView = (row: any) => {
    alert(`Viewing leave balance for ${row.userName}`);
  };

  const leaveBalanceColumns = getLeaveBalanceReportCol(handleView);

  // Handle filter from form
  const handleFilter = (filters: { user: string; year: string }) => {
    let filtered = leaveBalanceReportData;

    if (filters.user) {
      filtered = filtered.filter((row) =>
        row.userName.toLowerCase().includes(filters.user.toLowerCase())
      );
    }
    if (filters.year) {
      filtered = filtered.filter((row) => row.year === filters.year);
    }

    setFilteredData(filtered);
  };

  const handleRefreshLeaveBalanceReport = () => {
    setLoadingLeaveBalance(true);
    setTimeout(() => {
      setLoadingLeaveBalance(false);
      setFilteredData(leaveBalanceReportData); // reset to all
    }, 1000);
  };

  return (
    <div className="space-y-4">
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "HR Management", href: "/oem/hr-management" },
          {
            label: "Leave Balance Report",
            href: "/oem/hr-management/leave-balance-report",
          },
        ]}
      />

      <h1 className="text-3xl font-semibold text-[#445E94]">
        Leave Balance Report
      </h1>

      {/* Filters form */}
      <LeaveBalanceReportForm onFilter={handleFilter} />

      {/* Table section */}
      <div className="space-y-4 rounded-lg bg-white">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">Leave Balance Report</h1>
        </div>
        <hr className="text-gray-200" />

        <div className="px-6 py-4">
          <Table
            rows={filteredData}
            columns={leaveBalanceColumns}
            onRefresh={handleRefreshLeaveBalanceReport}
            loading={loadingLeaveBalance}
            showPagination
            rowsPerPage={3}
          />
        </div>
      </div>
    </div>
  );
};

export default LeaveBalanceReport;
