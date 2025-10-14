"use client";
import React from "react";
import { FiTrash2 } from "react-icons/fi";
import { MdModeEditOutline } from "react-icons/md"

export interface Column {
  id: string;
  label: string;
  render?: (row: any, index?: number) => React.ReactNode;
}

const getProfilesCol = (
  onEdit: (row: any) => void,
  onDelete: (row: any) => void,
): Column[] => [
    {
      id: "srNo",
      label: "Sr.No.",
      render: (row) => <span className="text-gray-700">{row.srNo}</span>,
    },
    {
      id: "profileName",
      label: "Profile Name",
      render: (row) => <span className="text-gray-700">{row.profileName || "-"}</span>,
    },
    {
      id: "action",
      label: "Action",
      render: (row) => (
        <div className="flex items-center gap-3 text-gray-600">
          <MdModeEditOutline
            size={20}
            title="Edit"
            className="cursor-pointer hover:text-blue-500"
            onClick={() => onEdit(row)}
          />
          <FiTrash2
            size={20}
            title={`${row.disableDelete ? `disabled` : `Delete`}`}
            className={` ${row.disableDelete ? 'opacity-40 cursor-default hover:text-gray-900' : 'cursor-pointer hover:text-red-500'}`}
            onClick={() => {
              if (!row.disableDelete) onDelete(row)
            }}
          />
        </div>
      ),
    },
  ];

export default getProfilesCol;

