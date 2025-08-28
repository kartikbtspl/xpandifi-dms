"use client"
import React from "react";
import { MdAttachFile } from "react-icons/md"; 

export interface Column {
  id: string; // ✅ Correct key name
  label: string;
  render?: (row: any) => React.ReactNode;
}

const getDocumentColumn = (): Column[] => [
  {
    id: 'srNo',
    label: 'Sr. No',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.srNo}</span>
    ),
  },
  {
    id: 'documentType',
    label: 'Document Type',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.documentType}</span>
    ),
  },
  {
    id: 'document',
    label: 'Document',
    render: (row) => (
      <span className="text-[#445E94] underline cursor-pointer flex"><MdAttachFile size={20} className="text-[#445E94]" />{row.document}</span>
    ),
  },
  
];

export default getDocumentColumn;
