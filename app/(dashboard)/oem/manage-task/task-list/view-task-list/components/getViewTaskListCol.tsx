"use client";
import React from "react";

export interface Column {
  id: string;
  label: string;
  render?: (row: any, index?: number) => React.ReactNode;
}

const getViewTaskListCol = (): Column[] => [
  {
    id: "srNo",
    label: "Sr. No.",
    render: (row) => <span className="text-gray-700">{row.srNo}</span>,
  },
  {
    id: "commentId",
    label: "Comment Id",
    render: (row) => <span className="text-gray-700">{row.commentId ?? "-"}</span>,
  },
  {
    id: "comment",
    label: "Comment",
    render: (row) => <span className="text-gray-700">{row.comment ?? "-"}</span>,
  },
  {
    id: "commentDate",
    label: "Comment Date",
    render: (row) => <span className="text-gray-700">{row.commentDate ?? "-"}</span>,
  },
  
];

export default getViewTaskListCol;
