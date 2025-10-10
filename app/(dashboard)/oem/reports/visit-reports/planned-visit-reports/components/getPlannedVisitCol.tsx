"use client";
import React from "react";
import { FiEye } from "react-icons/fi";

export interface Column {
  id: string;
  label: string;
  render?: (row: any, index?: number) => React.ReactNode;
}

const getTrackingReportCol = (): Column[] => [
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
    id: "createdAt",
    label: "Created At",
    render: (row) => (
      <span className="text-gray-700">{row.createdAt || "-"}</span>
    ),
  },
  {
    id: "planDate",
    label: "Plan Date",
    render: (row) => (
      <span className="text-gray-700">{row.planDate || "-"}</span>
    ),
  },
  {
    id: "address",
    label: "Address",
    render: (row) => (
      <span className="text-gray-700">{row.address || "-"}</span>
    ),
  },

];

export default getTrackingReportCol;
