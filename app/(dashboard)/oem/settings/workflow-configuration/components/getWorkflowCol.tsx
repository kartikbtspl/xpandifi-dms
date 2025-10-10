"use client";
import React from "react";
import { FiTrash2 } from "react-icons/fi";

export interface Column {
  id: string;
  label: string;
  render?: (row: any, index?: number) => React.ReactNode;
}

const getWorkflowCol = (onDelete?: (row: any) => void): Column[] => [
  {
    id: "srNo",
    label: "Sr. No.",
    render: (row) => <span className="text-gray-700">{row.srNo}</span>,
  },
  {
    id: "workflowName",
    label: "Workflow Name",
    render: (row) => (
      <span className="text-gray-700">{row.workflowName || "-"}</span>
    ),
  },
  {
    id: "taskName",
    label: "Task Name",
    render: (row) => (
      <span className="text-gray-700">{row.taskName || "-"}</span>
    ),
  },
  {
    id: "objectName",
    label: "Object Name",
    render: (row) => (
      <span className="text-gray-700">{row.objectName || "-"}</span>
    ),
  },
  {
    id: "approvalType",
    label: "Approval Type",
    render: (row) => (
      <span className="text-gray-700">{row.approvalType || "-"}</span>
    ),
  },
  {
    id: "roles",
    label: "Roles",
    render: (row) => (
      <span className="text-gray-700">{row.roles || "-"}</span>
    ),
  },
  {
    id: "noOfLevels",
    label: "No Of Levels",
    render: (row) => (
      <span className="text-gray-700">{row.noOfLevels || "-"}</span>
    ),
  },
  {
    id: "editableLevels",
    label: "Editable Levels",
    render: (row) => (
      <span className="text-gray-700">{row.editableLevels || "-"}</span>
    ),
  },
  {
    id: 'action',
    label: 'Action',
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
  }

];

export default getWorkflowCol;
