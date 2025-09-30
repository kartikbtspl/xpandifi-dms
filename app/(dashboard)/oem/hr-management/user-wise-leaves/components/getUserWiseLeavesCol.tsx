"use client";
import React from "react";

export interface Column {
  id: string;
  label: string;
  render?: (row: any, index?: number) => React.ReactNode;
}

const getUserWiseLeavesCol = (): Column[] => [
  {
    id: "srNo",
    label: "Sr. No.",
    render: (row) => (
      <span className="text-gray-700">{row.srNo}</span>
    ),
  },
  {
    id: "userName",
    label: "User Name",
    render: (row) => <span className="text-gray-700">{row.userName}</span>,
  },
  {
    id: "leaveName",
    label: "Leave Name",
    render: (row) => <span className="text-gray-700">{row.leaveName}</span>,
  },
  {
    id: "totalLeave",
    label: "Total Leave",
    render: (row) => <span className="text-gray-700">{row.totalLeave}</span>,
  },
  {
    id: "leaveBalance",
    label: "Leave Balance",
    render: (row) => <span className="text-gray-700">{row.leaveBalance}</span>,
  },
  {
    id: "leaveConsumed",
    label: "Leave Consumed",
    render: (row) => <span className="text-gray-700">{row.leaveConsumed}</span>,
  },
];

export default getUserWiseLeavesCol;
