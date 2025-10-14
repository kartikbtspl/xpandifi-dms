"use client";
import React from "react";
import { FiTrash2 } from "react-icons/fi";
import { MdModeEditOutline } from "react-icons/md"

export interface Column {
  id: string;
  label: string;
  render?: (row: any, index?: number) => React.ReactNode;
}

const getVehicleMasterCol = (
  onEdit: (row: any) => void,
  onDelete: (row: any) => void,
): Column[] => [
  {
    id: "srNo",
    label: "Sr.No.",
    render: (row) => <span className="text-gray-700">{row.srNo}</span>,
  },
  {
    id: "vehicleNo",
    label: "Vehicle No.",
    render: (row) => <span className="text-gray-700">{row.vehicleNo || "-"}</span>,
  },
  {
    id: "driverName",
    label: "Driver Name",
    render: (row) => <span className="text-gray-700">{row.driverName || "-"}</span>,
  },
  {
    id: "driverMobile",
    label: "Driver Mobile",
    render: (row) => <span className="text-gray-700">{row.driverMobile || "-"}</span>,
  },
  {
    id: "tonnage",
    label: "Tonnage",
    render: (row) => <span className="text-gray-700">{row.tonnage || "-"}</span>,
  },
  {
    id: "margin",
    label: "Margin",
    render: (row) => <span className="text-gray-700">{row.margin || "-"}</span>,
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
    id: "action",
    label: "Action",
    render: (row) => (
      <div className="flex items-center gap-3 text-gray-600">
        <MdModeEditOutline
          size={20}
          title="Edit"
          className="cursor-pointer hover:text-blue-500"
          onClick={() => onEdit(row)}
        />
        <FiTrash2
          size={20}
          title="Delete"
          className="cursor-pointer hover:text-red-500"
          onClick={() => onDelete(row)}
        />
      </div>
    ),
  },
];

export default getVehicleMasterCol;

