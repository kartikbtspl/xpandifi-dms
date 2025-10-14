"use client";
import React from "react";
import { FiTrash2 } from "react-icons/fi";
import { MdModeEditOutline } from "react-icons/md"

export interface Column {
  id: string;
  label: string;
  render?: (row: any, index?: number) => React.ReactNode;
}

const getApprovalRequestCol = (): Column[] => [
  {
    id: "srNo",
    label: "Sr.No.",
    render: (row) => <span className="text-gray-700">{row.srNo}</span>,
  },
  {
    id: "customerName",
    label: "Customer Name",
    render: (row) => <span className="text-gray-700">{row.customerName || "-"}</span>,
  },
  {
    id: "distributor",
    label: "Distributor",
    render: (row) => <span className="text-gray-700">{row.distributor || "-"}</span>,
  },
  {
    id: "route",
    label: "Route",
    render: (row) => <span className="text-gray-700">{row.route || "-"}</span>,
  },
  {
    id: "email",
    label: "Email",
    render: (row) => <span className="text-gray-700">{row.email || "-"}</span>,
  },
  {
    id: "createdBy",
    label: "Created By",
    render: (row) => <span className="text-gray-700">{row.createdBy || "-"}</span>,
  },
  {
    id: "mobile",
    label: "Mobile",
    render: (row) => <span className="text-gray-700">{row.mobile || "-"}</span>,
  },
  {
    id: "createdDate",
    label: "Created Date",
    render: (row) => <span className="text-gray-700">{row.createdDate || "-"}</span>,
  },
  {
    id: "action",
    label: "Action",
    render: (row) => (
      <div className="flex items-center gap-3 text-gray-600">
        <MdModeEditOutline
          size={20}
          title="Edit"
          className="cursor-pointer hover:text-blue-500"
        />
        <FiTrash2
          size={20}
          title="Delete"
          className="cursor-pointer hover:text-red-500"
        />
      </div>
    ),
  },
];

export default getApprovalRequestCol;

