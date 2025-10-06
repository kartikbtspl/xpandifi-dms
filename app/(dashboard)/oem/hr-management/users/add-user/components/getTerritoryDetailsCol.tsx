"use client";
import React from "react";

export interface Column {
  id: string;
  label: string;
  render?: (row: any, index?: number) => React.ReactNode;
}

const getTerritoryDetailsCol = (): Column[] => [
  {
    id: "srNo",
    label: "Sr. No.",
    render: (row) => (
      <span className="text-gray-700">{row.srNo}</span>
    ),
  },
  {
    id: "distributorName",
    label: "DistributorName",
    render: (row) => <span className="text-gray-700">{row.distributorName}</span>,
  },
  {
    id: "routeName",
    label: "Route Name",
    render: (row) => <span className="text-gray-700">{row.routeName}</span>,
  },
  
];

export default getTerritoryDetailsCol;
