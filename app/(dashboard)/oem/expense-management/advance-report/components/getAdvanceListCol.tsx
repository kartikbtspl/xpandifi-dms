"use client";
import React from "react";
import { FiEye } from "react-icons/fi";
import { MdCheckCircle, MdCancel } from "react-icons/md";

export interface Column {
  id: string;
  label: string;
  render?: (row: any) => React.ReactNode;
}

const getAdvanceListCol = (
  onView: (row: any) => void,
  onApprove: (row: any) => void,
  onReject: (row: any) => void // make required for row delete
): Column[] => [
  {
    id: "srNo",
    label: "Sr. No",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.srNo}</span>
    ),
  },
  {
    id: "advanceRequestID",
    label: "Advance Request ID",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">
        {row.advanceRequestID}
      </span>
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
    id: "createdAt",
    label: "Created At",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.createdAt}</span>
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
    id: "reason",
    label: "Reason",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.reason}</span>
    ),
  },
  {
    id: "status",
    label: "Status",
    render: (row) => {
      const status = row.status?.toLowerCase();
      return (
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            status === "pending"
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
  {
    id: "action",
    label: "Action",
    render: (row) => {
      const status = row.status?.toLowerCase();

      return (
        <div className="flex items-center gap-3 text-gray-600">
          {/* Always show View */}
          <FiEye
            size={20}
            title="View"
            className="cursor-pointer hover:text-blue-500"
            onClick={() => onView(row) 
              
            }
          />

          {/* If Pending → Approve + Reject */}
          {status === "pending" && (
            <>
              <MdCheckCircle
                size={22}
                title="Approve"
                className="cursor-pointer text-green-600 hover:text-green-800"
                onClick={() => onApprove(row)}
              />
              <MdCancel
                size={22}
                title="Reject"
                className="cursor-pointer text-red-600 hover:text-red-800"
                onClick={() => onReject(row)} // remove row
              />
            </>
          )}
        </div>
      );
    },
  },
];

export default getAdvanceListCol;
