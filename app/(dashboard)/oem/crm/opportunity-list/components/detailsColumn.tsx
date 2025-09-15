"use client"
import Button from "@/components/common/ui/Button";
import React from "react";
import { FiTrash2 } from "react-icons/fi";
import { MdAttachFile, MdModeEditOutline } from "react-icons/md"; 

export interface Column {
  id: string; // ✅ Correct key name
  label: string;
  render?: (row: any) => React.ReactNode;
}

const getDetailsCol = (): Column[] => [
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
    id: 'opportunityName',
    label: 'Opportunity Name',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.opportunityName}</span>
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
    id: 'stage',
    label: 'Stage',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.stage}</span>
    ),
  },
  {
    id: 'closeDate',
    label: 'Expected Close Date',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.closeDate}</span>
    ),
  },
  {
    id: 'value',
    label: 'Value',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.value}</span>
    ),
  },
  {
    id: 'createdDate',
    label: 'Created Date',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.createdDate}</span>
    ),
  },
  {
    id: 'leadId',
    label: 'Lead ID',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.leadId}</span>
    ),
  },
  {
    id: 'status',
    label: 'tatus',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.status}</span>
    ),
  },
  {
    id: 'action',
    label: 'Action',
    render: (row) => (
      <Button variant="outline" className="text-gray-700 cursor-pointer px-5" size="sm">View</Button>
    ),
  },
  
  
];

export default getDetailsCol;
