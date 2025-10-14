"use client";
import React from "react";
import { FiTrash2 } from "react-icons/fi";
import { FiDownload } from "react-icons/fi";

export interface Column {
  id: string;
  label: string;
  render?: (row: any, index?: number) => React.ReactNode;
}

const getDocumentsCol = (
  onDownload: (row: any) => void,
  onDelete: (row: any) => void,
): Column[] => [
  {
    id: "srNo",
    label: "Sr. No.",
    render: (row) => <span className="text-gray-700">{row.srNo}</span>,
  },
  {
    id: "documentName",
    label: "Document Name",
    render: (row) => <span className="text-gray-700">{row.documentName || "-"}</span>,
  },
  {
    id: "documentNumber",
    label: "Document Number",
    render: (row) => <span className="text-gray-700">{row.documentNumber || "-"}</span>,
  },
  {
    id: "documentDate",
    label: "Document Date",
    render: (row) => <span className="text-gray-700">{row.documentDate || "-"}</span>,
  },
  {
    id: "version",
    label: "Version",
    render: (row) => <span className="text-gray-700">{row.version || "-"}</span>,
  },
  {
    id: "action",
    label: "Action",
    render: (row) => (
      <div className="flex items-center gap-3 text-gray-600">
        {/* Download icon */}
        <FiDownload
          size={20}
          title="Download"
          className="cursor-pointer hover:text-blue-500"
          onClick={() => onDownload(row)}
        />
        {/* Delete icon */}
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

export default getDocumentsCol;
