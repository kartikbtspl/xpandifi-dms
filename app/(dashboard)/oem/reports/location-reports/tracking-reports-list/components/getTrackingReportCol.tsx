"use client";
import React from "react";
import { FiEye } from "react-icons/fi";

export interface Column {
  id: string;
  label: string;
  render?: (row: any, index?: number) => React.ReactNode;
}

const getTrackingReportCol = (): Column[] => [
  {
    id: "srNo",
    label: "Sr. No.",
    render: (row) => <span className="text-gray-700">{row.srNo}</span>,
  },
  {
    id: "event",
    label: "Event",
    render: (row) => (
      <span className="text-gray-700">{row.event || "-"}</span>
    ),
  },
  {
    id: "lattitude",
    label: "Lattitude",
    render: (row) => (
      <span className="text-gray-700">{row.lattitude || "-"}</span>
    ),
  },
  {
    id: "longitude",
    label: "Longitude",
    render: (row) => (
      <span className="text-gray-700">{row.longitude || "-"}</span>
    ),
  },
  {
    id: "createdDate",
    label: "Created Date",
    render: (row) => (
      <span className="text-gray-700">{row.createdDate || "-"}</span>
    ),
  },
  {
    id: "address",
    label: "Address",
    render: (row) => (
      <span className="text-gray-700">{row.address || "-"}</span>
    ),
  },
  {
    id: "apkVersion",
    label: "APK Version",
    render: (row) => (
      <span className="text-gray-700">{row.apkVersion || "-"}</span>
    ),
  },

];

export default getTrackingReportCol;
