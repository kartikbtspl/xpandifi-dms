"use client";
import React from "react";
import { FiEye } from "react-icons/fi";

export interface Column {
  id: string;
  label: string;
  render?: (row: any, index?: number) => React.ReactNode;
}

const getCheckInCheckOutCol = (): Column[] => [
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
    id: "checkInTime",
    label: "Check-In Time",
    render: (row) => (
      <span className="text-gray-700">{row.checkInTime || "-"}</span>
    ),
  },
  {
    id: "checkInLocation",
    label: "Check-In Location",
    render: (row) => (
      <span className="text-gray-700">{row.checkInLocation || "-"}</span>
    ),
  },
  {
    id: "checkOutTime",
    label: "Check-Out Time",
    render: (row) => (
      <span className="text-gray-700">{row.checkOutTime || "-"}</span>
    ),
  },
  {
    id: "checkOutLocation",
    label: "Check-Out Location",
    render: (row) => (
      <span className="text-gray-700">{row.checkOutLocation || "-"}</span>
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
    id: "action",
    label: "Action",
    render: (row) => (
      <div className="flex items-center gap-3 text-gray-600">
        {/* View Icon */}
        <FiEye
          size={18}
          title="View"
          className="cursor-pointer hover:text-green-500"
        />
      </div>
    ),
  },
];

export default getCheckInCheckOutCol;
