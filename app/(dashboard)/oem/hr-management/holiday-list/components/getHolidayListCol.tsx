"use client";
import React from "react";
import { MdModeEditOutline } from "react-icons/md";
import { FiTrash2 } from "react-icons/fi";

export interface Column {
  id: string;
  label: string;
  render?: (row: any, index?: number) => React.ReactNode;
}

const getHolidayListCol = (onEdit: (row: any) => void, onDelete?: (row: any) => void): Column[] => [
  {
    id: "srNo",
    label: "Sr. No.",
    render: (row) => <span className="text-gray-700">{row.srNo}</span>,
  },
  {
    id: "holidayName",
    label: "Holiday Name",
    render: (row) => (
      <span className="text-gray-700">{row.holidayName || "-"}</span>
    ),
  },
  {
    id: "holidayDateTime",
    label: "Holiday Date & Day",
    render: (row) => {
      if (!row.holidayDateTime) return "-";
      const dateObj = new Date(row.holidayDateTime);

      const day = String(dateObj.getDate()).padStart(2, "0"); // 01, 02, ...
      const month = dateObj.toLocaleString("en-US", { month: "short" }); // Jan, Feb, ...
      const year = dateObj.getFullYear(); // 2025
      const weekday = dateObj.toLocaleString("en-US", { weekday: "long" }); // Monday, Tuesday

      return <span className="text-gray-700">{`${day} ${month} ${year} ${weekday}`}</span>;
    },
  },
  {
    id: "year",
    label: "Year",
    render: (row) => <span className="text-gray-700">{row.year || "-"}</span>,
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
    id: 'action',
    label: 'Action',
    render: (row) => (
      <div className="flex items-center gap-3 text-gray-600">
        {/* Edit Icon */}
        <MdModeEditOutline
          size={20}
          title="Edit"
          className="cursor-pointer hover:text-blue-500"
          onClick={() => onEdit(row)}
        />
        {/* Delete Icon */}
        <FiTrash2
          size={20}
          title="Delete"
          className="cursor-pointer hover:text-red-500"
          onClick={() => onDelete && onDelete(row)}
        />
      </div>
    ),
  }

];

export default getHolidayListCol;
