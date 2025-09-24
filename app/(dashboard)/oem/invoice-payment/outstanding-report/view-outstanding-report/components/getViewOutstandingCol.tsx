import React from "react";
import {  FiTrash2 } from "react-icons/fi";

export interface Column {
  id: string;
  label: string;
  render?: (row: any) => React.ReactNode;
}

const getViewOutstandingCol = (
  onDelete: (row: any) => void
): Column[] => [
    {
      id: "srNo",
      label: "Sr. No",
      render: (row) => (
        <span className="text-gray-700 cursor-pointer">{row.srNo}</span>
      ),
    },
    {
      id: "totalAmount",
      label: "Total Amount",
      render: (row) => (
        <span className="text-gray-700 cursor-pointer">{row.totalAmount}</span>
      ),
    },
    {
      id: "paidAmount",
      label: "Paid Amount",
      render: (row) => (
        <span className="text-gray-700 cursor-pointer">{row.paidAmount}</span>
      ),
    },
    {
      id: "date",
      label: "Date",
      render: (row) => (
        <span className="text-gray-700 cursor-pointer">{row.date}</span>
      ),
    },
    {
      id: "invoiceId",
      label: "Invoice Id",
      render: (row) => (
        <span className="text-gray-700 cursor-pointer">{row.invoiceId}</span>
      ),
    },
    {
      id: "action",
      label: "Action",
      render: (row) => (
        <div className="flex items-center gap-3 text-gray-600">
          <FiTrash2
            size={20}
            title="Delete"
            className="cursor-pointer hover:text-red-500"
            onClick={() => onDelete(row)}
          />
        </div>
      ),
    },
  ];

export default getViewOutstandingCol;
