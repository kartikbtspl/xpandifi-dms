"use client"
import React from "react";
import { FiTrash2 } from "react-icons/fi";
import { MdAttachFile, MdModeEditOutline } from "react-icons/md"; 

export interface Column {
  id: string; // ✅ Correct key name
  label: string;
  render?: (row: any) => React.ReactNode;
}

const getProductAppCol = (): Column[] => [
  {
    id: 'srNo',
    label: 'Sr. No',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.srNo}</span>
    ),
  },
  {
    id: 'productApplication',
    label: 'Product Application',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.productApplication}</span>
    ),
  },
  {
    id: 'quantity',
    label: 'Quantity',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.quantity}</span>
    ),
  },
  {
    id: 'umoSize',
    label: 'UmoSize',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.umoSize}</span>
    ),
  },
  {
      id: "action",
      label: "Action",
      render: (row) => (
        <div className="flex items-center gap-3 text-gray-600">
          {/* Delete Icon */}
          <FiTrash2 size={20}/>
        </div>
      ),
    },
  
];

export default getProductAppCol;
