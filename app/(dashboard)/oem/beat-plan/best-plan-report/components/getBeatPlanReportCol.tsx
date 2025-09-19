"use client"
import React from "react";
import { FiTrash2, FiEye } from "react-icons/fi";
import { MdAttachFile, MdModeEditOutline, MdOutlineContentCopy } from "react-icons/md";

export interface Column {
  id: string; // ✅ Correct key name
  label: string;
  render?: (row: any) => React.ReactNode;
}

const getBeatPlanReportCol = (onEdit: (row: any) => void, onDelete?: (row: any) => void): Column[] => [
  {
    id: 'srNo',
    label: 'Sr. No',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.srNo}</span>
    ),
  },
  {
    id: 'beatPlanID',
    label: 'Beat Plan ID',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.beatPlanID}</span>
    ),
  },
  {
    id: 'user',
    label: 'User',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.user}</span>
    ),
  },
  {
    id: 'email',
    label: 'Email',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.email}</span>
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
    id: 'customerNameCode',
    label: 'Customer Name/Code',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.customerNameCode}</span>
    ),
  },
  {
    id: 'visitId',
    label: 'Visit ID',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.visitId}</span>
    ),
  },
  {
    id: 'type',
    label: 'Type',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.type}</span>
    ),
  },
  {
    id: 'visitDate',
    label: 'Visit Date',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer ">{row.visitDate}</span>
    ),
  },
  {
    id: 'roleName',
    label: 'Role Name',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer w-[10px]">{row.roleName}</span>
    ),
  },
  {
    id: 'zoneName',
    label: 'Zone Name',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer w-[10px]">{row.zoneName}</span>
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

export default getBeatPlanReportCol;
