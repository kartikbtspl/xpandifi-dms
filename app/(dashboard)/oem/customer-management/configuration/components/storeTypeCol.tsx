"use client"
import React from "react";
import { MdDeleteOutline, MdModeEditOutline } from "react-icons/md";
import { FiTrash2 } from "react-icons/fi";  // ✅ Import icons

export interface Column {
  id: string;
  label: string;
  render?: (row: any) => React.ReactNode;
}

const getStoreTypeCol = (): Column[] => [
  {
    id: "srNo",
    label: "Sr. No",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.srNo}</span>
    ),
  },
  {
    id: "storeTypeName",
    label: "Store Type Name",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.storeTypeName}</span>
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

export default getStoreTypeCol;
