import React from "react";

export interface Column {
  id: string; // ✅ Correct key name
  label: string;
  render?: (row: any) => React.ReactNode;
}

const getChallanColumns = (): Column[] => [
  {
    id: 'srNo',
    label: 'Sr. No',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.srNo}</span>
    ),
  },
  {
    id: 'dispatchDocumentNumber',
    label: 'Dispatch Document Number',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.dispatchDocumentNumber}</span>
    ),
  },
  {
    id: 'customerName',
    label: 'Customer Name',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.customerName}</span>
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
    id: 'createdDate',
    label: 'Created Date',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.createdDate}</span>
    ),
  },
  {
    id: 'action',
    label: 'Action',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.action}</span>
    ),
  },
];

export default getChallanColumns;
