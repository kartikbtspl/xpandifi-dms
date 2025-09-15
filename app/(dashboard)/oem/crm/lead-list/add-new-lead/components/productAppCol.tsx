// leadTypeColumn.tsx
"use client";
import React from "react";
import { FiTrash2 } from "react-icons/fi";

export interface Column {
  id: string;
  label: string;
  render?: (row: any) => React.ReactNode;
}

const getProductAppCol = (onDelete?: (row: any) => void): Column[] => [
  {
    id: "srNo",
    label: "Sr. No",
    render: (row) => <span className="text-gray-700">{row.srNo}</span>,
  },
  {
    id: "productApplication",
    label: "Product Application",
    render: (row) => <span className="text-gray-700">{row.productApplication}</span>,
  },
  {
    id: "quantity",
    label: "Quantity",
    render: (row) => <span className="text-gray-700">{row.quantity}</span>,
  },
  {
    id: "umoSize",
    label: "UMO Size",
    render: (row) => <span className="text-gray-700">{row.umoSize}</span>,
  },
  {
    id: "action",
    label: "Action",
    render: (row) => (
      <div className="flex items-center gap-3 text-gray-600">
        {/* Delete Icon */}
        <FiTrash2
          size={20}
          title="Delete"
          className="cursor-pointer hover:text-red-500"
          onClick={() => onDelete && onDelete(row)}
        />
      </div>
    ),
  },
];

export default getProductAppCol;
