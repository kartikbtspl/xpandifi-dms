"use client"
import React from "react";
import { FiTrash2, FiEye } from "react-icons/fi";
import { MdAttachFile, MdModeEditOutline, MdOutlineContentCopy } from "react-icons/md";

export interface Column {
  id: string; // ✅ Correct key name
  label: string;
  render?: (row: any) => React.ReactNode;
}

const getAutoBeatCol = (onEdit: (row: any) => void, onDelete?: (row: any) => void): Column[] => [
  {
    id: 'user',
    label: 'User',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.user}</span>
    ),
  },
  {
    id: 'beatPlanDate',
    label: 'Beat Plan Date',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.beatPlanDate}</span>
    ),
  },
  {
    id: 'distributor',
    label: 'Distributor',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.distributor}</span>
    ),
  },
  {
    id: 'route',
    label: 'Route',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.route}</span>
    ),
  },
  {
    id: 'customer',
    label: 'Customer',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.customer}</span>
    ),
  },
  {
    id: 'salesTargetType',
    label: 'Sales Target Type',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.salesTargetType}</span>
    ),
  },
  {
    id: 'salesTarget',
    label: 'Sales Target',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.salesTarget}</span>
    ),
  },
  {
    id: 'unit',
    label: 'Unit/Currency',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.unit}</span>
    ),
  },
  {
    id: 'collectionTarget',
    label: 'Collection Target',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer ">{row.collectionTarget}</span>
    ),
  },
  {
    id: 'sequence',
    label: 'Sequence',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer w-[10px]">{row.sequence}</span>
    ),
  },
  {
    id: 'action',
    label: 'Action',
    render: (row) => (
      <div className="flex items-center gap-3 text-gray-600">
        {/* Edit Icon */}
        <MdModeEditOutline
          size={20}
          title="Edit"
          className="cursor-pointer hover:text-blue-500"
          onClick={() => onEdit(row)}
        />
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

export default getAutoBeatCol;
