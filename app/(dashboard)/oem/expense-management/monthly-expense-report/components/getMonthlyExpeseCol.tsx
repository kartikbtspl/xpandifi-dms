"use client";
import React from "react";
import { FiEye, FiTrash2 } from "react-icons/fi";
import { MdModeEditOutline } from "react-icons/md";

export interface Column {
  id: string;
  label: string;
  render?: (row: any) => React.ReactNode;
}

const getMonthlyExpenseCol = (): Column[] => [
  {
    id: "srNo",
    label: "Sr. No",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.srNo}</span>
    ),
  },
  {
    id: "expenseID",
    label: "Expense ID",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.expenseID}</span>
    ),
  },
  {
    id: "userName",
    label: "User Name",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.userName}</span>
    ),
  },
  {
    id: "amount",
    label: "Amount",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.amount}</span>
    ),
  },
  {
    id: "createdAt",
    label: "Created At",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.createdAt}</span>
    ),
  },
  {
    id: "comment",
    label: "Comment",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.comment}</span>
    ),
  },
  {
    id: "status",
    label: "Status",
    render: (row) => {
      const status = row.status?.toLowerCase();
      return (
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${status === "pending"
              ? "bg-yellow-100 text-yellow-700"
              : status === "approved"
                ? "bg-green-100 text-green-700"
                : "bg-gray-100 text-gray-700"
            }`}
        >
          {row.status}
        </span>
      );
    },
  },

];

export default getMonthlyExpenseCol;
