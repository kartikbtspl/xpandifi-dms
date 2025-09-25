"use client";
import React from "react";
import { MdModeEditOutline } from "react-icons/md";
import { FiTrash2 } from "react-icons/fi";

export interface Column {
  id: string;
  label: string;
  render?: (row: any, index?: number) => React.ReactNode;
}

const getAttendanceSummaryCol = (): Column[] => [
  {
    id: "srNo",
    label: "Sr. No.",
    render: (row) => (
      <span className="text-gray-700">{row.srNo}</span>
    ),
  },
  {
    id: "employeeName",
    label: "Employee Name",
    render: (row) => <span className="text-gray-700">{row.employeeName}</span>,
  },
  {
    id: "presentDays",
    label: "Total Present Days",
    render: (row) => <span className="text-gray-700">{row.presentDays}</span>,
  },
  {
    id: "absentDays",
    label: "Total Absent Days",
    render: (row) => <span className="text-gray-700">{row.absentDays}</span>,
  },
  {
    id: "leaves",
    label: "Total Leaves",
    render: (row) => <span className="text-gray-700">{row.leaves}</span>,
  },
  {
    id: "holidays",
    label: "Total Holiday",
    render: (row) => <span className="text-gray-700">{row.holidays}</span>,
  },
  {
    id: "weeklyOffs",
    label: "Total Weekly Offs",
    render: (row) => <span className="text-gray-700">{row.weeklyOffs}</span>,
  },
];

export default getAttendanceSummaryCol;
