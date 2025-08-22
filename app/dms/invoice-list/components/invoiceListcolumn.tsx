import React from "react";
import InvoiceActionsMenu from "./InvoiceActionsMenu";

export interface Column {
  id: string; // ✅ Correct key name
  label: string;
  render?: (row: any) => React.ReactNode;
}

const getInvoiceListColumns = (): Column[] => [
  {
    id: 'srNo',
    label: 'Sr. No',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.srNo}</span>
    ),
  },
  {
    id: 'invoiceId',
    label: 'Invoice Id',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.invoiceId}</span>
    ),
  },
  {
    id: 'invoiceNo',
    label: 'Invoice No',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.invoiceNo}</span>
    ),
  },
  {
    id: 'salesOrderNo',
    label: 'Sales Order No',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.salesOrderNo}</span>
    ),
  },
  {
    id: 'customer',
    label: 'Customer',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.customer}</span>
    ),
  },
  {
    id: 'createdDate',
    label: 'Created Date',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.createdDate}</span>
    ),
  },
  {
    id: 'totalAmonut',
    label: 'Total Amonut',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.totalAmonut}</span>
    ),
  },
  {
    id: 'amountPaid',
    label: 'Amount Paid',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.amountPaid}</span>
    ),
  },
  {
    id: 'status',
    label: 'Status',
    render: (row) => (
      <span
        className={`px-4 py-1 rounded-full text-sm font-medium ${
          row.status === 'Paid'
            ? 'bg-[#EEF6EB] text-[#008A2E]'
            : 'bg-[#FEF2F2] text-[#FF656A]'
        }`}
      >
        {row.status}
      </span>
    ),
  },
  {
    id: 'remainingAmount',
    label: 'Remaining Amount',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.remainingAmount}</span>
    ),
  },
  {
    id: 'blank',
    label: '',
    render: (row) => <InvoiceActionsMenu />
  },
];

export default getInvoiceListColumns;
