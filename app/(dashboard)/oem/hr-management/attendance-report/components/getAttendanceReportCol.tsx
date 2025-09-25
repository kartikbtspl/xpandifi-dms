"use client";
import React from "react";

export interface Column {
  id: string;
  label: string;
  render?: (row: any, index?: number) => React.ReactNode;
}

const getAttendanceReportCol = (): Column[] => [
  {
    id: "srNo",
    label: "Sr.No",
    render: (_row, index) => (
      <span className="text-gray-700">{String(index! + 1).padStart(2, "0")}</span>
    ),
  },
  {
    id: "salesName",
    label: "Sales Name",
    render: (row) => <span className="text-gray-700">{row.salesName}</span>,
  },
  {
    id: "firstIn",
    label: "First In",
    render: (row) => <span className="text-gray-700">{row.firstIn || "-"}</span>,
  },
  {
    id: "lastOut",
    label: "Last Out",
    render: (row) => <span className="text-gray-700">{row.lastOut || "-"}</span>,
  },
  {
    id: "entry",
    label: "Entry (HH:MM:SS)",
    render: (row) => <span className="text-gray-700">{row.entry || "-"}</span>,
  },
  {
    id: "exit",
    label: "Exit (HH:MM:SS)",
    render: (row) => <span className="text-gray-700">{row.exit || "-"}</span>,
  },
  {
    id: "workingHr",
    label: "Working Hr",
    render: (row) => <span className="text-gray-700">{row.workingHr || "-"}</span>,
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
    id: "companyLocationIn",
    label: "Company Location(In)",
    render: (row) => <span className="text-gray-700">{row.companyLocationIn || "-"}</span>,
  },
  {
    id: "companyLocationOut",
    label: "Company Location(Out)",
    render: (row) => <span className="text-gray-700">{row.companyLocationOut || "-"}</span>,
  },
  {
    id: "division",
    label: "Division",
    render: (row) => <span className="text-gray-700">{row.division || "-"}</span>,
  },
  {
    id: "country",
    label: "Country",
    render: (row) => <span className="text-gray-700">{row.country || "-"}</span>,
  },
  {
    id: "state",
    label: "State",
    render: (row) => <span className="text-gray-700">{row.state || "-"}</span>,
  },
  {
    id: "city",
    label: "City",
    render: (row) => <span className="text-gray-700">{row.city || "-"}</span>,
  },
  {
    id: "roleName",
    label: "Role Name",
    render: (row) => <span className="text-gray-700">{row.roleName || "-"}</span>,
  },
  {
    id: "action",
    label: "Action",
    render: (row) => <span className="text-gray-700">{row.action || "-"}</span>,
  },
];

export default getAttendanceReportCol;
