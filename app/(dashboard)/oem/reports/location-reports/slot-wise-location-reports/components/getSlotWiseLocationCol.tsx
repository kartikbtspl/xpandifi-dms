"use client";
import React from "react";
import { FiEye } from "react-icons/fi";

export interface Column {
  id: string;
  label: string;
  render?: (row: any, index?: number) => React.ReactNode;
}

const getSlotWiseLocationCol = (): Column[] => [
  {
    id: "srNo",
    label: "Sr. No.",
    render: (row) => <span className="text-gray-700">{row.srNo}</span>,
  },
  {
    id: "salesPerson",
    label: "User Name",
    render: (row) => (
      <span className="text-gray-700">{row.userName || "-"}</span>
    ),
  },
  {
    id: "managerName",
    label: "User Name",
    render: (row) => (
      <span className="text-gray-700">{row.userName || "-"}</span>
    ),
  },
  {
    id: "date",
    label: "date",
    render: (row) => (
      <span className="text-gray-700">{row.date || "-"}</span>
    ),
  },
  {
    id: "nineToTwelve",
    label: "09:00 AM - 12:00 Noon",
    render: (row) => (
      <span className="text-gray-700">{row.nineToTwelve || "-"}</span>
    ),
  },
  {
    id: "twelveToFifteen",
    label: "12:01 PM - 15:00 PM",
    render: (row) => (
      <span className="text-gray-700">{row.twelveToFifteen || "-"}</span>
    ),
  },
  {
    id: "fifteenToEighteen",
    label: "15:01 PM - 18:00 PM",
    render: (row) => (
      <span className="text-gray-700">{row.fifteenToEighteen || "-"}</span>
    ),
  },
  {
    id: "eighteenToAbove",
    label: "18:00 PM to Above",
    render: (row) => (
      <span className="text-gray-700">{row.eighteenToAbove || "-"}</span>
    ),
  },
  {
    id: "kmTravelled",
    label: "KM Travelled",
    render: (row) => (
      <span className="text-gray-700">{row.kmTravelled || "-"}</span>
    ),
  },

];

export default getSlotWiseLocationCol;
