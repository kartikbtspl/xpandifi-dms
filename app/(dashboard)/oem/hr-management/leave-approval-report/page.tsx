"use client"
import Table from '@/components/common/table/Table'
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React, { useState } from 'react'
import getLeaveApprovalCol from "./components/getLeaveApprovalCol"
import { useRouter } from 'next/navigation'

const LeaveApprovalReport = () => {

  const [leaveApprovalData, setLeaveApprovalData] = useState([
    {
      id: 1,
      srNo: "01",
      userName: "Ajinkya Darkase",
      appliedDate: "2025-09-01",
      fromDate: "2025-09-10",
      toDate: "2025-09-12",
      leaveType: "Casual Leave",
      reason: "Family Function",
      leaveCount: 3,
      status: "Approved",
      action: ""
    },
    {
      id: 2,
      srNo: "02",
      userName: "Neha Sharma",
      appliedDate: "2025-09-05",
      fromDate: "2025-09-15",
      toDate: "2025-09-16",
      leaveType: "Sick Leave",
      reason: "Fever",
      leaveCount: 2,
      status: "Rejected",
      action: ""
    },
    {
      id: 3,
      srNo: "03",
      userName: "Rohit Patil",
      appliedDate: "2025-09-08",
      fromDate: "2025-09-20",
      toDate: "2025-09-22",
      leaveType: "Earned Leave",
      reason: "Vacation",
      leaveCount: 3,
      status: "Rejected",
      action: ""
    },
    {
      id: 4,
      srNo: "04",
      userName: "Priya Kulkarni",
      appliedDate: "2025-09-10",
      fromDate: "2025-09-18",
      toDate: "2025-09-19",
      leaveType: "Casual Leave",
      reason: "Personal Work",
      leaveCount: 2,
      status: "Approved",
      action: ""
    },
    {
      id: 5,
      srNo: "05",
      userName: "Vikram Joshi",
      appliedDate: "2025-12-12",
      fromDate: "2025-12-25",
      toDate: "2025-12-27",
      leaveType: "Sick Leave",
      reason: "Medical Appointment",
      leaveCount: 3,
      status: "Rejected",
      action: ""
    },
  ]);

  const router = useRouter();

  const [loadingLeaveApproval, setLoadingLeaveApproval] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>(null);

  const handleView = (row: any) => {
  router.push(
    `/oem/hr-management/leave-approval-report/view-leave-approval-report?row=${encodeURIComponent(JSON.stringify(row))}`
  );
};

  const leaveApprovalListColumns = getLeaveApprovalCol(handleView);

  const handleRefreshLeaveApprovalList = () => {
    setLoadingLeaveApproval(true);
    setTimeout(() => {
      setLoadingLeaveApproval(false);
      setLeaveApprovalData((prev) => [...prev]); // refresh same data
    }, 1000);
  };


  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem" },
          { label: "HR Management", href: "/oem/hr-management" },
          {
            label: "Leave Approval Report",
            href: "/oem/hr-management/leave-approval-report",
          },
        ]}
      />
      <h1 className="text-3xl font-semibold text-[#445E94]">Leave Approval Report</h1>
      <div className="space-y-4 rounded-lg bg-white">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">
            Leave Approval List
          </h1>
        </div>
        <hr className="text-gray-200" />

        <div className="px-6 py-4">
          <Table
            rows={leaveApprovalData}
            columns={leaveApprovalListColumns}
            onRefresh={handleRefreshLeaveApprovalList}
            loading={loadingLeaveApproval}
            showPagination
            rowsPerPage={3}
          />
        </div>
      </div>
    </div>
  )
}

export default LeaveApprovalReport