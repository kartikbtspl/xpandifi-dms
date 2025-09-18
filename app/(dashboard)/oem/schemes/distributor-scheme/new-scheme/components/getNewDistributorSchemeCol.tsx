"use client";
import React from "react";
import { MdModeEditOutline } from "react-icons/md";
import { FiTrash2 } from "react-icons/fi";

export interface Column {
  id: string;
  label: string;
  render?: (row: any) => React.ReactNode;
}

const getNewDistributorSchemeCol = (handleDeleteClick: (row: any) => void): Column[] => [
  { id: "srNo", label: "Sr. No" },
  { id: "opportunityName", label: "Opportunity Name" },
  { id: "schemeOn", label: "Scheme On" },
  { id: "schemeOnValue", label: "Scheme On Value" },
  { id: "discountType", label: "Discount Type" },
  { id: "discountValue", label: "Discount Value" },
  {
    id: "action",
    label: "Action",
    render: (row) => (
      <div className="flex items-center gap-3 text-gray-600">
        <FiTrash2 size={20} className="cursor-pointer hover:text-red-500" onClick={() => handleDeleteClick(row)}/>
      </div>
    ),
  },
];

export default getNewDistributorSchemeCol;
