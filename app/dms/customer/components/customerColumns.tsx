// components/customer/components/getCustomerColumns.ts
import React from "react";

export interface Column {
  id: string;
  label: string;
  numeric?: boolean;
  render?: (row: any) => React.ReactNode;
}

const getCustomerColumns = (onRowClick: (row: any) => void): Column[] => [
  {
    id: "customerName",
    label: "Customer Name/Code",
    render: row => (
      <div
        className="flex flex-col cursor-pointer"
        onClick={() => onRowClick(row)}
      >
        <span className="font-medium text-gray-900">{row.customerName}</span>
        <span className="text-sm text-gray-500">#{row.customerCode}</span>
      </div>
    ),
  },
  {
    id: "customerType",
    label: "Customer Type",
    render: row => (
      <span
        className="text-gray-700 cursor-pointer"
        onClick={() => onRowClick(row)}
      >
        {row.customerType}
      </span>
    ),
  },
  {
    id: "cityType",
    label: "City Type",
    render: row =>
      row.cityType === "Confirmed" ? (
        <span
          className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium cursor-pointer"
          onClick={() => onRowClick(row)}
        >
          Confirmed
        </span>
      ) : (
        <span
          className="text-gray-700 cursor-pointer"
          onClick={() => onRowClick(row)}
        >
          {row.cityType || "Nil"}
        </span>
      ),
  },
  {
    id: "zone",
    label: "Zone",
    render: row => (
      <span
        className="text-gray-700 cursor-pointer"
        onClick={() => onRowClick(row)}
      >
        {row.zone || "Nil"}
      </span>
    ),
  },
  {
    id: "distributorName",
    label: "Distributor Name",
    render: row => (
      <span
        className="text-gray-700 cursor-pointer"
        onClick={() => onRowClick(row)}
      >
        {row.distributorName}
      </span>
    ),
  },
  {
    id: "email",
    label: "Email",
    render: row => (
      <span
        className="text-gray-700 cursor-pointer"
        onClick={() => onRowClick(row)}
      >
        {row.email}
      </span>
    ),
  },
  {
    id: "createdBy",
    label: "Created By",
    render: row => (
      <span
        className="text-gray-700 cursor-pointer"
        onClick={() => onRowClick(row)}
      >
        {row.createdBy}
      </span>
    ),
  },
  {
    id: "mobile",
    label: "Mobile",
    render: row => (
      <span
        className="text-gray-700 cursor-pointer"
        onClick={() => onRowClick(row)}
      >
        {row.mobile}
      </span>
    ),
  },
  {
    id: "createdDate",
    label: "Created Date",
    render: row => (
      <span
        className="text-gray-700 cursor-pointer"
        onClick={() => onRowClick(row)}
      >
        {row.createdDate}
      </span>
    ),
  },
  {
    id: "blank",
    label: "",
    render: row => (
      <span
        className="text-gray-700 cursor-pointer"
        onClick={() => onRowClick(row)}
      >
        {row.blank}
      </span>
    ),
  },
];

export default getCustomerColumns;

