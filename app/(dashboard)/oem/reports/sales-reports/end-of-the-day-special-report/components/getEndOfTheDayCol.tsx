"use client";
import React from "react";
import { FiEye } from "react-icons/fi";

export interface Column {
  id: string;
  label: string;
  render?: (row: any, index?: number) => React.ReactNode;
}

const getDailySalesOrderCol = (): Column[] => [
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
    id: "login",
    label: "Login",
    render: (row) => (
      <span className="text-gray-700">{row.login || "-"}</span>
    ),
  },
  {
    id: "disbursed",
    label: "Disbursed",
    render: (row) => (
      <span className="text-gray-700">{row.disbursed || "-"}</span>
    ),
  },
  {
    id: "closing",
    label: "Closing",
    render: (row) => (
      <span className="text-gray-700">{row.closing || "-"}</span>
    ),
  },
  {
    id: "nonStarter",
    label: "Non Starter",
    render: (row) => (
      <span className="text-gray-700">{row.nonStarter || "-"}</span>
    ),
  },
  {
    id: "ppdClearance",
    label: "PPD Clearance",
    render: (row) => (
      <span className="text-gray-700">{row.ppdClearance || "-"}</span>
    ),
  },
  {
    id: "deactiveClearance",
    label: "Deactive Clearance",
    render: (row) => (
      <span className="text-gray-700">{row.deactiveClearance || "-"}</span>
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
          <FiEye
            size={20}
            title="View"
            className="cursor-pointer hover:text-blue-500"
          />
        </div>
      ),
    },
];

export default getDailySalesOrderCol;
