"use client";
import React from "react";

export interface Column {
  id: string;
  label: string;
  render?: (row: any, index?: number) => React.ReactNode;
}

const getAcquisitionZoneCol = (): Column[] => [
  {
    id: "srNo",
    label: "Sr. No.",
    render: (row) => <span className="text-gray-700">{row.srNo}</span>,
  },
  {
    id: "role",
    label: "Role",
    render: (row) => <span className="text-gray-700">{row.role ?? "-"}</span>,
  },
  {
    id: "oneWeek",
    label: "<1 Week",
    render: (row) => <span className="text-gray-700">{row.oneWeek ?? "-"}</span>,
  },
  {
    id: "oneToFourWeeks",
    label: "1-4 Weeks",
    render: (row) => <span className="text-gray-700">{row.oneToFourWeeks ?? "-"}</span>,
  },
  {
    id: "oneToThreeMonths",
    label: "1-3 Months",
    render: (row) => <span className="text-gray-700">{row.oneToThreeMonths ?? "-"}</span>,
  },
  {
    id: "threeMonths",
    label: ">3 Months",
    render: (row) => <span className="text-gray-700">{row.threeMonths ?? "-"}</span>,
  },
  {
    id: "neverLoggedIn",
    label: "Never Logged In",
    render: (row) => <span className="text-gray-700">{row.neverLoggedIn ?? "-"}</span>,
  },
];

export default getAcquisitionZoneCol;
