"use client"
import React from "react";
import { MdAttachFile } from "react-icons/md"; 

export interface Column {
  id: string; // ✅ Correct key name
  label: string;
  render?: (row: any) => React.ReactNode;
}

const getCustomerWiseDocsCol = (): Column[] => [
  {
    id: 'srNo',
    label: 'Sr. No',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.srNo}</span>
    ),
  },
  {
    id: 'customerType',
    label: 'Customer Type',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.customerType}</span>
    ),
  },
  {
    id: 'customerSubType',
    label: 'Customer Sub Type',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.customerSubType}</span>
    ),
  },
  {
    id: 'documentName',
    label: 'Document Name',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.documentName}</span>
    ),
  },
  {
    id: 'isMandatory',
    label: 'Is Mandatory',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.isMandatory}</span>
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

export default getCustomerWiseDocsCol;
