import React from "react";
import { FiDownload } from "react-icons/fi";

export interface Column {
  id: string;
  label: string;
  render?: (row: any) => React.ReactNode;
}

const getDistributorInvoiceListCol = (onDownload: (row: any) => void): Column[] => [
  {
    id: "srNo",
    label: "Sr. No",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.srNo}</span>
    ),
  },
  {
    id: "invoiceId",
    label: "Invoice ID",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.invoiceId}</span>
    ),
  },
  {
    id: "orderNo",
    label: "Order No.",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.orderNo}</span>
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
    id: "createdDate",
    label: "Created Date",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.createdDate}</span>
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
    id: "action",
    label: "Action",
    render: (row) => (
      <div className="flex items-center gap-3 text-gray-600">
        <FiDownload
          size={20}
          title="Download"
          className="cursor-pointer hover:text-green-500"
          onClick={() => onDownload(row)}
        />
      </div>
    ),
  },
];

export default getDistributorInvoiceListCol;
