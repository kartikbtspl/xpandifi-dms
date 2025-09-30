"use client";
import React from "react";
import { MdModeEditOutline } from "react-icons/md";
import { FiTrash2 } from "react-icons/fi";

export interface Column {
  id: string;
  label: string;
  render?: (row: any, index?: number) => React.ReactNode;
}

const getMonthlyReportDepCol = (): Column[] => [
  {
    id: "srNo",
    label: "Sr. No.",
    render: (row) => (
      <span className="text-gray-700">{row.srNo}</span>
    ),
  },
  {
    id: "date",
    label: "Date",
    render: (row) => <span className="text-gray-700">{row.date}</span>,
  },
  {
    id: "userName",
    label: "User Name",
    render: (row) => <span className="text-gray-700">{row.userName}</span>,
  },
  {
    id: "status",
    label: "status",
    render: (row) => <span className="text-gray-700">{row.status}</span>,
  },
  {
    id: "inTime",
    label: "In Time",
    render: (row) => <span className="text-gray-700">{row.inTime}</span>,
  },
  {
    id: "outTime",
    label: "Out Time",
    render: (row) => <span className="text-gray-700">{row.outTime}</span>,
  },
  {
    id: "duration",
    label: "Duration",
    render: (row) => <span className="text-gray-700">{row.duration}</span>,
  },
  {
    id: "inLocation",
    label: "In Location",
    render: (row) => <span className="text-gray-700">{row.inLocation}</span>,
  },
  {
    id: "outLocation",
    label: "Out Location",
    render: (row) => <span className="text-gray-700">{row.outLocation}</span>,
  },
];

export default getMonthlyReportDepCol;
