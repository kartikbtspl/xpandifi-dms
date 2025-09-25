"use client";
import React from "react";
import { MdModeEditOutline } from "react-icons/md";
import { FiTrash2, FiEye } from "react-icons/fi";

export interface Column {
  id: string;
  label: string;
  render?: (row: any, index?: number) => React.ReactNode;
}

const getHolidayListCol = (onView: (row: any) => void): Column[] => [
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
    id: "appliedDate",
    label: "Applied Date",
    render: (row) => <span className="text-gray-700">{row.appliedDate || "-"}</span>,
  },
  {
    id: "fromDate",
    label: "From Date",
    render: (row) => <span className="text-gray-700">{row.fromDate || "-"}</span>,
  },
  {
    id: "toDate",
    label: "To Date",
    render: (row) => <span className="text-gray-700">{row.toDate || "-"}</span>,
  },
  {
    id: "leaveType",
    label: "Leave Type",
    render: (row) => <span className="text-gray-700">{row.leaveType || "-"}</span>,
  },
  {
    id: "reason",
    label: "Reason",
    render: (row) => <span className="text-gray-700">{row.reason || "-"}</span>,
  },
  {
    id: "leaveCount",
    label: "Leave Count",
    render: (row) => <span className="text-gray-700">{row.leaveCount || "-"}</span>,
  },
  {
    id: 'status',
    label: 'Status',
    render: (row) => {
      const status = row.status?.toLowerCase(); // convert to lowercase
      return (
        <span
          className={`px-4 py-1 rounded-full text-sm font-medium ${status === 'approved'
              ? 'bg-[#EEF6EB] text-[#008A2E]'
              : 'bg-[#FEF2F2] text-[#FF656A]'
            }`}
        >
          {row.status}
        </span>
      );
    },
  },
  {
    id: 'action',
    label: 'Action',
    render: (row) => (
      <div className="flex items-center gap-3 text-gray-600">
        {/* Delete Icon */}
        <FiEye
          size={20}
          title="Delete"
          className="cursor-pointer hover:text-red-500"
          onClick={() => onView(row)}
        />
      </div>
    ),
  }

];

export default getHolidayListCol;
