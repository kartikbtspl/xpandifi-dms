"use client";
import React from "react";
import { MdModeEditOutline } from "react-icons/md";
import { FiTrash2 } from "react-icons/fi";

export interface Column {
  id: string;
  label: string;
  render?: (row: any, index?: number) => React.ReactNode;
}

const getCompanyLocationCol = (): Column[] => [
  {
    id: "srNo",
    label: "Sr. No.",
    render: (row) => (
      <span className="text-gray-700">{row.srNo}</span>
    ),
  },
  {
    id: "companyLocationName",
    label: "Company Location Name",
    render: (row) => <span className="text-gray-700">{row.companyLocationName || "-"}</span>,
  },
  {
    id: "companyLocationCode",
    label: "Company Location Code",
    render: (row) => <span className="text-gray-700">{row.companyLocationCode || "-"}</span>,
  },
  {
    id: "officeLocation",
    label: "Office Location",
    render: (row) => <span className="text-gray-700">{row.officeLocation || "-"}</span>,
  },
  {
    id: "address",
    label: "Company Address",
    render: (row) => <span className="text-gray-700">{row.address || "-"}</span>,
  },
  {
    id: "lat",
    label: "Company Latitude",
    render: (row) => <span className="text-gray-700">{row.lat || "-"}</span>,
  },
  {
    id: "long",
    label: "Company Longitude",
    render: (row) => <span className="text-gray-700">{row.long || "-"}</span>,
  },
  {
    id: "action",
    label: "Action",
    render: () => (
      <div className="flex items-center gap-2">
        <button className="hover:text-blue-500">
          <MdModeEditOutline className="cursor-pointer" title="Edit" size={16} />
        </button>
        <button className="hover:text-red-500">
          <FiTrash2 className="cursor-pointer" title="Delete" size={16} />
        </button>
      </div>
    ),
  },
];

export default getCompanyLocationCol;
