"use client";
import React from "react";
import { FiEye, FiTrash2 } from "react-icons/fi";
import { MdModeEditOutline } from "react-icons/md";

export interface Column {
  id: string;
  label: string;
  render?: (row: any, index?: number) => React.ReactNode;
}

const getManageTaskTypeCol = (
   handleEdit: (row: any) => void,
  handleDeleteClick: (row: any) => void
): Column[] => [
  {
    id: "srNo",
    label: "Sr. No.",
    render: (row) => <span className="text-gray-700">{row.srNo}</span>,
  },
  {
    id: "taskTypeName",
    label: "Task Type Name",
    render: (row) => (
      <span className="text-gray-700">{row.taskTypeName || "-"}</span>
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

export default getManageTaskTypeCol;
