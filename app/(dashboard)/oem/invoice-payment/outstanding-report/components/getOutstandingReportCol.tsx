import React from "react";
import { FiEye, FiTrash2 } from "react-icons/fi";

export interface Column {
  id: string;
  label: string;
  render?: (row: any) => React.ReactNode;
}

const getOutstandingReportCol = (
  onView: (row: any) => void,
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
      id: "customerName",
      label: "Customer Name",
      render: (row) => (
        <span className="text-gray-700 cursor-pointer">{row.customerName}</span>
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
      id: "distributor",
      label: "Distributor",
      render: (row) => (
        <span className="text-gray-700 cursor-pointer">{row.distributor}</span>
      ),
    },
    {
      id: "lastUpdateOn",
      label: "Last Update On",
      render: (row) => (
        <span className="text-gray-700 cursor-pointer">{row.lastUpdateOn}</span>
      ),
    },
    {
      id: "action",
      label: "Action",
      render: (row) => (
        <div className="flex items-center gap-3 text-gray-600">
          <FiEye
            size={20}
            title="View"
            className="cursor-pointer hover:text-blue-500"
            onClick={() => onView(row)}
          />
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

export default getOutstandingReportCol;
