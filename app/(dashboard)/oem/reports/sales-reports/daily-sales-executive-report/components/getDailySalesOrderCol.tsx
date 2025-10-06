"use client";
import React from "react";

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
    id: "customer",
    label: "Customer",
    render: (row) => (
      <span className="text-gray-700">{row.customer || "-"}</span>
    ),
  },
  {
    id: "date",
    label: "Date",
    render: (row) => (
      <span className="text-gray-700">{row.date || "-"}</span>
    ),
  },
  {
    id: "assignTo",
    label: "Assign To",
    render: (row) => (
      <span className="text-gray-700">{row.assignTo || "-"}</span>
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
    id: "total",
    label: "Total",
    render: (row) => (
      <span className="text-gray-700">{row.total || "-"}</span>
    ),
  },
];

export default getDailySalesOrderCol;
