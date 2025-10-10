"use client";
import React from "react";
import { FiEye } from "react-icons/fi";

export interface Column {
  id: string;
  label: string;
  render?: (row: any, index?: number) => React.ReactNode;
}

const getUserActivityLogCol = (): Column[] => [
  {
    id: "srNo",
    label: "Sr. No.",
    render: (row) => <span className="text-gray-700">{row.srNo}</span>,
  },
  {
    id: "message",
    label: "Message",
    render: (row) => (
      <span className="text-gray-700">{row.message || "-"}</span>
    ),
  },
  {
    id: "notificationType",
    label: "Notification Type",
    render: (row) => (
      <span className="text-gray-700">{row.notificationType || "-"}</span>
    ),
  },
  {
    id: "createdDate",
    label: "Created Date",
    render: (row) => (
      <span className="text-gray-700">{row.createdDate || "-"}</span>
    ),
  },
  {
    id: "timeDifference",
    label: "Time Difference",
    render: (row) => (
      <span className="text-gray-700">{row.timeDifference || "-"}</span>
    ),
  },

];

export default getUserActivityLogCol;
