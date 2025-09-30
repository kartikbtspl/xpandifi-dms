"use client";
import React from "react";
import { MdModeEditOutline } from "react-icons/md";
import { FiTrash2 } from "react-icons/fi";

export interface Column {
  id: string;
  label: string;
  render?: (row: any, index?: number) => React.ReactNode;
}

const getUserCol = (): Column[] => [
  {
    id: "srNo",
    label: "Sr. No.",
    render: (row) => <span className="text-gray-700">{row.srNo}</span>,
  },
  {
    id: "userName",
    label: "User Name",
    render: (row) => <span className="text-gray-700">{row.userName}</span>,
  },
  {
    id: "role",
    label: "Role",
    render: (row) => <span className="text-gray-700">{row.role}</span>,
  },
  {
    id: "mobileNo",
    label: "Mobile No.",
    render: (row) => <span className="text-gray-700">{row.mobileNo}</span>,
  },
  {
    id: "zone",
    label: "Zone",
    render: (row) => <span className="text-gray-700">{row.zone}</span>,
  },
  {
    id: "state",
    label: "State",
    render: (row) => <span className="text-gray-700">{row.state}</span>,
  },
  {
    id: "city",
    label: "City",
    render: (row) => <span className="text-gray-700">{row.city}</span>,
  },
  {
    id: "distributorCode",
    label: "Distributor Code",
    render: (row) => <span className="text-gray-700">{row.distributorCode}</span>,
  },
  {
    id: "reportingManager",
    label: "Reporting Manager",
    render: (row) => <span className="text-gray-700">{row.reportingManager}</span>,
  },
  {
    id: "reportingManagerRole",
    label: "Reporting Manager Role",
    render: (row) => <span className="text-gray-700">{row.reportingManagerRole}</span>,
  },
  {
    id: "loginDetails",
    label: "Login Details",
    render: (row) => <span className="text-gray-700">{row.loginDetails}</span>,
  },
  {
    id: "mobileDetails",
    label: "Mobile Details",
    render: (row) => <span className="text-gray-700">{row.mobileDetails}</span>,
  },
  {
    id: "mobilePermission",
    label: "Mobile Permission",
    render: (row) => <span className="text-gray-700">{row.mobilePermission}</span>,
  },
  {
    id: "action",
    label: "Action",
    render: (row) => (
      <div className="flex gap-3">
        <button className="text-blue-600 hover:text-blue-800">
          <MdModeEditOutline size={20} />
        </button>
        <button className="text-red-600 hover:text-red-800">
          <FiTrash2 size={20} />
        </button>
      </div>
    ),
  },
];

export default getUserCol;
