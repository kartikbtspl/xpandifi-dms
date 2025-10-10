"use client";
import React from "react";
import { MdModeEditOutline } from "react-icons/md";
import { FiTrash2 } from "react-icons/fi";

export interface Column {
  id: string;
  label: string;
  render?: (row: any, index?: number) => React.ReactNode;
}

const getManageComplaintTypeCol = (): Column[] => [
  {
    id: "srNo",
    label: "Sr. No.",
    render: (row) => <span className="text-gray-700">{row.srNo}</span>,
  },
  {
    id: "complaintName",
    label: "Complaint Name",
    render: (row) => (
      <span className="text-gray-700">{row.complaintName || "-"}</span>
    ),
  },

];

export default getManageComplaintTypeCol;
