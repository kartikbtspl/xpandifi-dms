import React from "react";
import { FiEye, FiTrash2 } from "react-icons/fi";
import { MdModeEditOutline } from 'react-icons/md'

export interface Column {
  id: string;
  label: string;
  render?: (row: any) => React.ReactNode;
}

const getNewDeliveryPlanCol = (
  onEdit: (row: any) => void,
  // onView: (row: any) => void,
  onDelete: (row: any) => void
): Column[] => [
  {
    id: "srNo",
    label: "Sr. No",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.srNo}</span>
    ),
  },
  {
    id: "user",
    label: "User",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.user}</span>
    ),
  },
  {
    id: "deliveryPlanDate",
    label: "Delivery Plan Date",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.deliveryPlanDate}</span>
    ),
  },
  
  {
    id: "distributor",
    label: "Distributor",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.distributor}</span>
    ),
  },
  {
    id: "route",
    label: "Route",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.route}</span>
    ),
  },
  {
    id: "customer",
    label: "Customer",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.customer}</span>
    ),
  },
  {
    id: "target",
    label: "Target",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.target}</span>
    ),
  },
  {
    id: "action",
    label: "Action",
    render: (row) => (
      <div className="flex items-center gap-3 text-gray-600">
        <MdModeEditOutline
          size={20}
          title="Edit"
          className="cursor-pointer hover:text-green-500"
          onClick={() => onEdit(row)}
        />
        <FiTrash2
          size={20}
          title="Delete"
          className="cursor-pointer hover:text-red-500"
          onClick={() => onDelete(row)}
        />
      </div>
    ),
  },
];

export default getNewDeliveryPlanCol;
