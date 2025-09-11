"use client"
import React from "react";
import { FiTrash2 } from "react-icons/fi";
import { MdAttachFile, MdModeEditOutline } from "react-icons/md"; 

export interface Column {
  id: string; // ✅ Correct key name
  label: string;
  render?: (row: any) => React.ReactNode;
}

const getSourceCol = (): Column[] => [
  {
    id: 'srNo',
    label: 'Sr. No',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.srNo}</span>
    ),
  },
  {
    id: 'leadSourceName',
    label: 'Lead Source Name',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.leadSourceName}</span>
    ),
  },
  {
    id: 'sequence',
    label: 'Sequence',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.sequence}</span>
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
            // className="cursor-pointer hover:text-blue-500"
          />
  
          {/* Delete Icon */}
          <FiTrash2 size={20}/>
        </div>
      ),
    },
  
];

export default getSourceCol;
