"use client";
import React from "react";
import { Pencil, Trash2 } from "lucide-react";
import {MdModeEditOutline} from "react-icons/md" // icons for edit/delete
import {FiTrash2} from "react-icons/fi" // icons for edit/delete

export interface Column {
  id: string;
  label: string;
  render?: (row: any, index?: number) => React.ReactNode;
}

const getDepreAttendanceReportCol = (): Column[] => [
  {
    id: "srNo",
    label: "Sr.No",
    render: (_row, index) => (
      <span className="text-gray-700">{String(index! + 1).padStart(2, "0")}</span>
    ),
  },
  {
    id: "username",
    label: "Username",
    render: (row) => <span className="text-gray-700">{row.username || "-"}</span>,
  },
  {
    id: "inTime",
    label: "In Time",
    render: (row) => <span className="text-gray-700">{row.inTime || "-"}</span>,
  },
  {
    id: "outTime",
    label: "Out Time",
    render: (row) => <span className="text-gray-700">{row.outTime || "-"}</span>,
  },
  {
    id: "duration",
    label: "Duration",
    render: (row) => <span className="text-gray-700">{row.duration || "-"}</span>,
  },
  {
    id: "inLocation",
    label: "In Location",
    render: (row) => <span className="text-gray-700">{row.inLocation || "-"}</span>,
  },
  {
    id: "outLocation",
    label: "Out Location",
    render: (row) => <span className="text-gray-700">{row.outLocation || "-"}</span>,
  },
  {
    id: "entry",
    label: "Entry",
    render: (row) => <span className="text-gray-700">{row.entry || "-"}</span>,
  },
  {
    id: "exit",
    label: "Exit",
    render: (row) => <span className="text-gray-700">{row.exit || "-"}</span>,
  },
  {
    id: "action",
    label: "Action",
    render: () => (
      <div className="flex items-center gap-2">
        <button className=" hover:text-blue-500">
          <MdModeEditOutline title="Edit" size={16} />
        </button>
        <button className="hover:text-red-500">
          <FiTrash2 title="Delete" size={16} />
        </button>
      </div>
    ),
  },
];

export default getDepreAttendanceReportCol;
