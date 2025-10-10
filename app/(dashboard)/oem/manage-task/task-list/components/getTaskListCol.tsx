"use client";
import React from "react";
import { FiEye, FiTrash2 } from "react-icons/fi";
import { MdModeEditOutline } from "react-icons/md";

export interface Column {
  id: string;
  label: string;
  render?: (row: any, index?: number) => React.ReactNode;
}

const getTaskListCol = (
  handleEdit: (row: any) => void,
  handleView: (row: any) => void,
  handleDeleteClick: (row: any) => void
): Column[] => [
  {
    id: "srNo",
    label: "Sr. No.",
    render: (row) => <span className="text-gray-700">{row.srNo}</span>,
  },
  {
    id: "taskId",
    label: "Task ID",
    render: (row) => <span className="text-gray-700">{row.taskId ?? "-"}</span>,
  },
  {
    id: "userName",
    label: "User Name",
    render: (row) => <span className="text-gray-700">{row.userName ?? "-"}</span>,
  },
  {
    id: "fromDate",
    label: "From Date",
    render: (row) => <span className="text-gray-700">{row.fromDate ?? "-"}</span>,
  },
  {
    id: "taskType",
    label: "Task Type",
    render: (row) => <span className="text-gray-700">{row.taskType ?? "-"}</span>,
  },
  {
    id: "mainTask",
    label: "Main Task",
    render: (row) => <span className="text-gray-700">{row.mainTask ?? "-"}</span>,
  },
  {
    id: "subTask",
    label: "Sub Task",
    render: (row) => <span className="text-gray-700">{row.subTask ?? "-"}</span>,
  },
  {
    id: "taskStatus",
    label: "Task Status",
    render: (row) => <span className="text-gray-700">{row.taskStatus ?? "-"}</span>,
  },
  {
    id: "assignedTime",
    label: "Assigned(Day/Hrs/Mins)",
    render: (row) => <span className="text-gray-700">{row.assignedTime ?? "-"}</span>,
  },
  {
    id: "completedTime",
    label: "Completed(Day/Hrs/Mins)",
    render: (row) => <span className="text-gray-700">{row.completedTime ?? "-"}</span>,
  },
  {
    id: "action",
    label: "Action",
    render: (row) => (
      <div className="flex items-center gap-3 text-gray-600">
        <MdModeEditOutline
          size={20}
          onClick={() => handleEdit(row)}
          className="cursor-pointer"
        />
        <FiEye
          size={20}
          onClick={() => handleView(row)}
          className="cursor-pointer"
        />
        <FiTrash2
          size={20}
          onClick={() => handleDeleteClick(row)}
          className="cursor-pointer"
        />
      </div>
    ),
  },
];

export default getTaskListCol;
