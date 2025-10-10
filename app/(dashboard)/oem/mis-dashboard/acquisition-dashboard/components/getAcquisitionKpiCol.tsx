"use client";
import React from "react";

export interface Column {
  id: string;
  label: string;
  render?: (row: any, index?: number) => React.ReactNode;
}

const getAcquisitionKpiCol = (): Column[] => [
  {
    id: "srNo",
    label: "Sr. No.",
    render: (row) => <span className="text-gray-700">{row.srNo}</span>,
  },
  {
    id: "zone",
    label: "Zone",
    render: (row) => <span className="text-gray-700">{row.zone ?? "-"}</span>,
  },
  {
    id: "totalDistributors",
    label: "Total Distributors",
    render: (row) => <span className="text-gray-700">{row.totalDistributors ?? "-"}</span>,
  },
  {
    id: "distributorWithout",
    label: "Distributor Without Retailers",
    render: (row) => <span className="text-gray-700">{row.distributorWithout ?? "-"}</span>,
  },
  {
    id: "withoutDSR",
    label: "Distributor Without DSR",
    render: (row) => <span className="text-gray-700">{row.withoutDSR ?? "-"}</span>,
  },
  {
    id: "dsrWithNo",
    label: "DSR With No Retailer Mapped",
    render: (row) => <span className="text-gray-700">{row.dsrWithNo ?? "-"}</span>,
  },
];

export default getAcquisitionKpiCol;
