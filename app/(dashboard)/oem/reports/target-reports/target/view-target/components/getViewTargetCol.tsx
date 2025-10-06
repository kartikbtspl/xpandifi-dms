"use client";
import React from "react";
import { FiEye } from "react-icons/fi";

export interface Column {
  id: string;
  label: string;
  render?: (row: any, index?: number) => React.ReactNode;
}

const getViewTargetCol = (): Column[] => [
  {
    id: "srNo",
    label: "Sr. No.",
    render: (row) => <span className="text-gray-700">{row.srNo}</span>,
  },
  {
    id: "categoryName",
    label: "Category Name",
    render: (row) => (
      <span className="text-gray-700">{row.categoryName || "-"}</span>
    ),
  },
  {
    id: "categoryVolume",
    label: "Category Volume",
    render: (row) => (
      <span className="text-gray-700">{row.categoryVolume || "-"}</span>
    ),
  },
];

export default getViewTargetCol;
