"use client"
import React from "react";
import { FiTrash2, FiEye } from "react-icons/fi";
import { MdAttachFile, MdModeEditOutline, MdOutlineContentCopy } from "react-icons/md";

export interface Column {
  id: string; // ✅ Correct key name
  label: string;
  render?: (row: any) => React.ReactNode;
}

const getFrequencyCol = (onEdit: (row: any) => void, onDelete?: (row: any) => void): Column[] => [
  {
    id: 'srNo',
    label: 'Sr. No',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.srNo}</span>
    ),
  },
  {
    id: 'classType',
    label: 'Class Type',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.classType}</span>
    ),
  },
  {
    id: 'distributorName',
    label: 'Distributor Name',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.distributorName}</span>
    ),
  },
  {
    id: 'frequency',
    label: 'Frequency',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.frequency}</span>
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

export default getFrequencyCol;
