"use client";
import React from "react";

export interface Column {
  id: string;
  label: string;
  render?: (row: any) => React.ReactNode;
}

const getUnderLoadReportCol = (): Column[] => [
  {
    id: "srNo",
    label: "Sr. No",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.srNo}</span>
    ),
  },
  {
    id: "vehicleNumber",
    label: "Vehicle Number",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">
        {row.vehicleNumber}
      </span>
    ),
  },
  {
    id: "availableCapacity",
    label: "Available Capacity(tonnage)",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.availableCapacity}</span>
    ),
  },
  {
    id: "totalCapacity",
    label: "Total Capacity(tonnage)",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.totalCapacity}</span>
    ),
  },
  {
    id: "routeName",
    label: "Route Name",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.routeName}</span>
    ),
  },
  {
    id: "routeDescription",
    label: "Route Description",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.routeDescription}</span>
    ),
  },
  {
    id: "action",
    label: "Action",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.action}</span>
    ),
  },
];

export default getUnderLoadReportCol;
