// getRoleCol.tsx
"use client";
import React from "react";
import { MdModeEditOutline } from "react-icons/md";

export interface Column {
  id: string;
  label: string;
  render?: (row: any, index?: number) => React.ReactNode;
}

const getRoleCol = (router: any): Column[] => {
  return [
    {
      id: "srNo",
      label: "Sr. No.",
      render: (row) => <span className="text-gray-700">{row.srNo}</span>,
    },
    {
      id: "roleName",
      label: "Role Name",
      render: (row) => <span className="text-gray-700">{row.roleName}</span>,
    },
    {
      id: "action",
      label: "Action",
      render: (row) => (
        <div className="flex gap-3">
          <button
            className="hover:text-blue-600 cursor-pointer"
            title="Edit"
            onClick={() =>
              router.push(
                `/oem/hr-management/roles/edit-role?roleName=${encodeURIComponent(
                  row.roleName
                )}`
              )
            }
          >
            <MdModeEditOutline size={20} />
          </button>
        </div>
      ),
    },
  ];
};

export default getRoleCol;
