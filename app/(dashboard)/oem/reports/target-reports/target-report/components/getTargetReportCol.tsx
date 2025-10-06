"use client";
import React from "react";
import { FiEye, FiTrash2 } from "react-icons/fi";

export interface Column {
  id: string;
  label: string;
  render?: (row: any, index?: number) => React.ReactNode;
}

const getTargetReportCol = (): Column[] => [
  {
    id: "srNo",
    label: "Sr. No.",
    render: (row) => <span className="text-gray-700">{row.srNo}</span>,
  },
  {
    id: "salesPersonName",
    label: "Sales Person Name",
    render: (row) => (
      <span className="text-gray-700">{row.salesPersonName || "-"}</span>
    ),
  },
  {
    id: "targetAchived",
    label: "Target Achived",
    render: (row) => (
      <span className="text-gray-700">{row.targetAchived || "-"}</span>
    ),
  },
  {
    id: "actualTarget",
    label: "Actual Target",
    render: (row) => (
      <span className="text-gray-700">{row.actualTarget || "-"}</span>
    ),
  },
  {
    id: "percentage",
    label: "Percentage",
    render: (row) => (
      <span className="text-gray-700">{row.percentage || "-"}</span>
    ),
  },
];

export default getTargetReportCol;
