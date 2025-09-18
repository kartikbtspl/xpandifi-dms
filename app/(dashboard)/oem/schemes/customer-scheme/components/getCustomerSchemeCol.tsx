"use client"
import React from "react";
import { MdDeleteOutline, MdModeEditOutline } from "react-icons/md";
import { FiTrash2 } from "react-icons/fi";  // ✅ Import icons

export interface Column {
  id: string;
  label: string;
  render?: (row: any) => React.ReactNode;
}

const getCustomerSchemeCol = (
  handleEdit: (row: any) => void,
  handleDeleteClick: (row: any) => void
): Column[] => [
  {
    id: "srNo",
    label: "Sr. No",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.srNo}</span>
    ),
  },
  {
    id: "schemeName",
    label: "Scheme Name",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.schemeName}</span>
    ),
  },
  {
    id: "startDate",
    label: "Start Date",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.startDate}</span>
    ),
  },
  {
    id: "endDate",
    label: "End Date",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.endDate}</span>
    ),
  },
  {
    id: "action",
    label: "Action",
    render: (row) => (
      <div className="flex items-center gap-3 text-gray-600">
        {/* Edit Icon */}
        <MdModeEditOutline
          size={20}
          onClick={() => handleEdit(row)}
          // className="cursor-pointer hover:text-blue-500"
        />

        {/* Delete Icon */}
        <FiTrash2 size={20}
         onClick={() => handleDeleteClick(row)}
         />
      </div>
    ),
  },
];

export default getCustomerSchemeCol;
