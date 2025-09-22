"use client"
import React from "react";
import { FiTrash2, FiEye } from "react-icons/fi";
import { MdAttachFile, MdModeEditOutline, MdOutlineContentCopy } from "react-icons/md";

export interface Column {
  id: string; // ✅ Correct key name
  label: string;
  render?: (row: any) => React.ReactNode;
}

const getAddNewBeatPlanCol = (onEdit: (row: any) => void, onDelete?: (row: any) => void): Column[] => [
  {
    id: 'srNo',
    label: 'Sr. No',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.srNo}</span>
    ),
  },
  {
    id: 'user',
    label: 'User Name',
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
    id: 'customerName',
    label: 'Customer Name',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.customerName}</span>
    ),
  },
  {
    id: 'targetType',
    label: 'Sales Target Type',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer ">{row.targetType}</span>
    ),
  },
  {
    id: 'salesTarget',
    label: 'Sales Target',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer w-[10px]">{row.salesTarget}</span>
    ),
  },
  {
    id: 'currency',
    label: 'Currency/unit',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer w-[10px]">{row.currency}</span>
    ),
  },
  {
    id: 'collectedTarget',
    label: 'Collected Target',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer w-[10px]">{row.collectedTarget}</span>
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
      <div className="flex flex-col items-center gap-3 text-gray-600">
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

export default getAddNewBeatPlanCol;
