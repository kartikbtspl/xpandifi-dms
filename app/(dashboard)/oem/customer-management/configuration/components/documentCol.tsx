"use client"
import React from "react";
import { MdAttachFile } from "react-icons/md"; 

export interface Column {
  id: string; // ✅ Correct key name
  label: string;
  render?: (row: any) => React.ReactNode;
}

const getDocumentCol = (): Column[] => [
  {
    id: 'srNo',
    label: 'Sr. No',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.srNo}</span>
    ),
  },
  {
    id: 'customerDocumnetName',
    label: 'Customer Documnet Name',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.customerDocumnetName}</span>
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

export default getDocumentCol;
