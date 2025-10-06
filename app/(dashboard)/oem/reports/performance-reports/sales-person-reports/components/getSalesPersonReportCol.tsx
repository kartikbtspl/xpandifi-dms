"use client";
import React from "react";
import { FiEye, FiTrash2 } from "react-icons/fi";

export interface Column {
  id: string;
  label: string;
  render?: (row: any, index?: number) => React.ReactNode;
}

const getSalesPersonReportCol = (): Column[] => [
  {
    id: "srNo",
    label: "Sr. No.",
    render: (row) => <span className="text-gray-700">{row.srNo}</span>,
  },
  {
    id: "routeName",
    label: "Route Name",
    render: (row) => (
      <span className="text-gray-700">{row.routeName || "-"}</span>
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
    id: "order",
    label: "Order",
    render: (row) => (
      <span className="text-gray-700">{row.order || "-"}</span>
    ),
  },
];

export default getSalesPersonReportCol;
