"use client"
import Button from "@/components/common/ui/Button";
import React from "react";
import { FiTrash2, FiEye } from "react-icons/fi";
import { MdAttachFile, MdModeEditOutline, MdOutlineContentCopy } from "react-icons/md";

export interface Column {
  id: string; // ✅ Correct key name
  label: string;
  render?: (row: any) => React.ReactNode;
}

const getLeadListCol = (): Column[] => [
  {
    id: 'srNo',
    label: 'Sr. No',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.srNo}</span>
    ),
  },
  {
    id: 'ID',
    label: 'ID',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.ID}</span>
    ),
  },
  {
    id: 'leadName',
    label: 'Lead Name',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.leadName}</span>
    ),
  },
  {
    id: 'companyName',
    label: 'Company Name',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.companyName}</span>
    ),
  },
  {
    id: 'contactNo',
    label: 'Contact No',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.contactNo}</span>
    ),
  },
  {
    id: 'status',
    label: 'Status',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.status}</span>
    ),
  },
  {
    id: 'assignTo',
    label: 'Assign To',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.assignTo}</span>
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
    id: 'createdDate',
    label: 'Created Date',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer ">{row.createdDate}</span>
    ),
  },
  {
    id: 'opportunityId',
    label: 'Lead ID',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer w-[10px]">{row.opportunityId}</span>
    ),
  },
  {
    id: 'website',
    label: 'Website',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer w-[10px]">{row.website}</span>
    ),
  },
  {
    id: 'action',
    label: 'Action',
    render: (row) => (
      <div className="w-[10px]">
      <FiEye />
      </div>
    ),
  },
  
  
];

export default getLeadListCol;
