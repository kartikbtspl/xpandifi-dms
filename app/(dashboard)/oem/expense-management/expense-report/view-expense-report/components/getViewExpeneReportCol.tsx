"use client";
import React from "react";
import { FiEye } from "react-icons/fi";
import { MdModeEditOutline } from "react-icons/md";

export interface Column {
  id: string;
  label: string;
  render?: (row: any) => React.ReactNode;
}

const getViewExpenseReportCol = (
  onView: (row: any) => void,
  onEdit: (row: any) => void
): Column[] => [
  {
    id: "srNo",
    label: "Sr. No",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.srNo}</span>
    ),
  },
  {
    id: "expenseDate",
    label: "Expense Date",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.expenseDate}</span>
    ),
  },
  {
    id: "expenseType",
    label: "Expense Type",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.expenseType}</span>
    ),
  },
  {
    id: "expenseCode",
    label: "Expense Code",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.expenseCode}</span>
    ),
  },
  {
    id: "mode",
    label: "Mode",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.mode}</span>
    ),
  },
  {
    id: "from",
    label: "From",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.from}</span>
    ),
  },
  {
    id: "to",
    label: "To",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.to}</span>
    ),
  },
  {
    id: "actualAmount",
    label: "Actual Amount",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.actualAmount}</span>
    ),
  },
  {
    id: "approvedAmount",
    label: "Approved Amount",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.approvedAmount}</span>
    ),
  },
  {
    id: "actualKm",
    label: "Actual Distance in KM",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.actualKm}</span>
    ),
  },
  {
    id: "billImage",
    label: "Bill Image",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.billImage}</span>
    ),
  },
  {
    id: "action",
    label: "Action",
    render: (row) => (
      <div className="flex items-center gap-3 text-gray-600">
        {/* View Icon */}
        <FiEye
          size={20}
          title="View"
          className="cursor-pointer hover:text-green-500"
          onClick={() => onView(row)}
        />
        {/* Edit Icon */}
        <MdModeEditOutline
          size={20}
          title="Edit"
          className="cursor-pointer hover:text-blue-500"
          onClick={() => onEdit(row)}
        />
      </div>
    ),
  },
];

export default getViewExpenseReportCol;
