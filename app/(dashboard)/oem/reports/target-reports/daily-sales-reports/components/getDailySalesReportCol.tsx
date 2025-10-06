"use client";
import React from "react";
import { FiEye } from "react-icons/fi";

export interface Column {
  id: string;
  label: string;
  render?: (row: any, index?: number) => React.ReactNode;
}

const getDailySalesReportCol = (onView: (row: any) => void): Column[] => [
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
    id: "date",
    label: "date",
    render: (row) => (
      <span className="text-gray-700">{row.date || "-"}</span>
    ),
  },
  {
    id: "noOfVisits",
    label: "No Of Visits",
    render: (row) => (
      <span className="text-gray-700">{row.noOfVisits || "-"}</span>
    ),
  },
  {
    id: "noOfOrders",
    label: "No Of Orders",
    render: (row) => (
      <span className="text-gray-700">{row.noOfOrders || "-"}</span>
    ),
  },
  {
    id: "amount",
    label: "Amount",
    render: (row) => (
      <span className="text-gray-700">{row.amount || "-"}</span>
    ),
  },
  {
    id: "achived",
    label: "%Achived",
    render: (row) => (
      <span className="text-gray-700">{row.achived || "-"}</span>
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

export default getDailySalesReportCol;
