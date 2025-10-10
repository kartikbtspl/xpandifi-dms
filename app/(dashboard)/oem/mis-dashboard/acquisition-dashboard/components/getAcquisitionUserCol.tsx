"use client";
import React from "react";

export interface Column {
  id: string;
  label: string;
  render?: (row: any, index?: number) => React.ReactNode;
}

const getAcquisitionUserCol = (): Column[] => [
  {
    id: "srNo",
    label: "Sr. No.",
    render: (row) => <span className="text-gray-700">{row.srNo}</span>,
  },
  {
    id: "userName",
    label: "User Name",
    render: (row) => <span className="text-gray-700">{row.userName ?? "-"}</span>,
  },
  {
    id: "activityDate",
    label: "Activity Date",
    render: (row) => <span className="text-gray-700">{row.activityDate ?? "-"}</span>,
  },
  {
    id: "activityDoneFrom",
    label: "Activity Done From",
    render: (row) => <span className="text-gray-700">{row.activityDoneFrom ?? "-"}</span>,
  },
];

export default getAcquisitionUserCol;
