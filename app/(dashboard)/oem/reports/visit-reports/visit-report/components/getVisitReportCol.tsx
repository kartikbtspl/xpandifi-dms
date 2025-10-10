"use client";
import React from "react";
import { FiEye } from "react-icons/fi";

export interface Column {
  id: string;
  label: string;
  render?: (row: any, index?: number) => React.ReactNode;
}

const getTrackingReportCol = (onView: (row: any) => void): Column[] => [
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
    id: "customer",
    label: "Customer",
    render: (row) => (
      <span className="text-gray-700">{row.customer || "-"}</span>
    ),
  },
  {
    id: "plannedDetails",
    label: "Planned Details",
    render: (row) => (
      <span className="text-gray-700">{row.plannedDetails || "-"}</span>
    ),
  },
  {
    id: "status",
    label: "Status",
    render: (row) => (
      <span className="text-gray-700">{row.status || "-"}</span>
    ),
  },
  {
    id: "address",
    label: "Address",
    render: (row) => (
      <span className="text-gray-700">{row.address || "-"}</span>
    ),
  },
  {
    id: "remark",
    label: "Remark",
    render: (row) => (
      <span className="text-gray-700">{row.remark || "-"}</span>
    ),
  },
  {
    id: "action",
    label: "Action",
    render: (row) => (
      <div className="flex gap-3">
        <button className="hover:text-green-500 cursor-pointer" onClick={() => onView(row)}>
          <FiEye size={20} />
        </button>
      </div>
    ),
  },

];

export default getTrackingReportCol;
