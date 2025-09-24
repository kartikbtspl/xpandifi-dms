"use client";
import React from "react";
import { FiEye } from "react-icons/fi";
import { MdCheckCircle, MdCancel } from "react-icons/md";

export interface Column {
  id: string;
  label: string;
  render?: (row: any) => React.ReactNode;
}

const getClubSalesOrderCol = (): Column[] => [
  {
    id: "srNo",
    label: "Sr. No",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.srNo}</span>
    ),
  },
  {
    id: "select",
    label: "Select",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">
        {row.select}
      </span>
    ),
  },
  {
    id: "salesOrderID",
    label: "Sales Order ID",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.salesOrderID}</span>
    ),
  },
  {
    id: "customer",
    label: "Customer",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.customer}</span>
    ),
  },
  {
    id: "date",
    label: "Date",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.date}</span>
    ),
  },
  {
    id: "total",
    label: "Total",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.total}</span>
    ),
  },
  {
    id: "tonnage",
    label: "Tonnage",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.tonnage}</span>
    ),
  },
  {
    id: "vehiclelNo.",
    label: "Vehiclel No",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.vehiclelNo}</span>
    ),
  },
  {
    id: "route",
    label: "Route",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.route}</span>
    ),
  },
  {
    id: "description",
    label: "Description",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.description}</span>
    ),
  },
  {
    id: "shipToParty",
    label: "Ship To Party",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.shipToParty}</span>
    ),
  },
];

export default getClubSalesOrderCol;
