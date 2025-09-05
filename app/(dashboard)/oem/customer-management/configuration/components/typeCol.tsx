"use client"
import React from "react";
import { MdModeEditOutline } from "react-icons/md";
import { FiTrash2 } from "react-icons/fi";  // ✅ Import icons

export interface Column {
  id: string;
  label: string;
  render?: (row: any) => React.ReactNode;
}

const getClassTypeCol = (): Column[] => [
  {
    id: "srNo",
    label: "Sr. No",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.srNo}</span>
    ),
  },
  {
    id: "type",
    label: "Type",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.type}</span>
    ),
  },
  {
    id: "sequence",
    label: "Sequence",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.sequence}</span>
    ),
  },
  {
    id: "frequency",
    label: "Frequency",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.frequency}</span>
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
        />

        {/* Delete Icon */}
        <FiTrash2 size={20}/>
      </div>
    ),
  },
];

export default getClassTypeCol;