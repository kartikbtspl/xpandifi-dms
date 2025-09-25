"use client";
import React from "react";
import { FiEye } from "react-icons/fi";

export interface Column {
  id: string;
  label: string;
  render?: (row: any, index?: number) => React.ReactNode;
}

const getLeaveBalanceReportCol = (
  onView: (row: any) => void
): Column[] => [
  {
    id: "srNo",
    label: "Sr. No.",
    render: (row) => <span className="text-gray-700">{row.srNo}</span>,
  },
  {
    id: "userName",
    label: "User Name",
    render: (row) => (
      <span className="text-gray-700">{row.userName || "-"}</span>
    ),
  },
  {
    id: "leavesInYear",
    label: "Leaves In Year",
    render: (row) => (
      <span className="text-gray-700">{row.leavesInYear || "-"}</span>
    ),
  },
  {
    id: "balanceLeaves",
    label: "Balance Leaves",
    render: (row) => (
      <span className="text-gray-700">{row.balanceLeaves || "-"}</span>
    ),
  },
  {
    id: "consumedLeaves",
    label: "Consumed Leaves",
    render: (row) => (
      <span className="text-gray-700">{row.consumedLeaves || "-"}</span>
    ),
  },
  {
    id: "action",
    label: "Action",
    render: (row) => (
      <div className="flex items-center gap-3 text-gray-600">
        {/* View Icon */}
        <FiEye
          size={18}
          title="View"
          className="cursor-pointer hover:text-green-500"
          onClick={() => onView(row)}
        />
      </div>
    ),
  },
];

export default getLeaveBalanceReportCol;
