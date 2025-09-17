import React from "react";
import { IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";

export interface Column {
  id: string;
  label: string;
  render?: (row: any, index?: number) => React.ReactNode;
}

const getNewProductCol = (): Column[] => [
  {
    id: "pack",
    label: "Pack",
    render: (row) => <span className="text-gray-700">{row.pack}</span>,
  },
  {
    id: "mrp",
    label: "MRP",
    render: (row) => <span className="text-gray-700">{row.mrp}</span>,
  },
  {
    id: "rate",
    label: "Rate",
    render: (row) => <span className="text-gray-700">{row.rate}</span>,
  },
  {
    id: "tax",
    label: "Tax",
    render: (row) => <span className="text-gray-700">{row.tax}</span>,
  },
  {
    id: "msp",
    label: "MSP",
    render: (row) => <span className="text-gray-700">{row.msp}</span>,
  },
  {
    id: "piecePack",
    label: "Piece Pack",
    render: (row) => <span className="text-gray-700">{row.piecePack}</span>,
  },
  {
    id: "pieceMrp",
    label: "Piece MRP",
    render: (row) => <span className="text-gray-700">{row.pieceMrp}</span>,
  },
  {
    id: "country",
    label: "Country",
    render: (row) => <span className="text-gray-700">{row.country}</span>,
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
    id: "role",
    label: "Role",
    render: (row) => <span className="text-gray-700">{row.role}</span>,
  },
  {
    id: "itemCode",
    label: "Item Code",
    render: (row) => <span className="text-gray-700">{row.itemCode}</span>,
  },
  
  {
    id: "status",
    label: "Status",
    render: (row) => (
    <span
      className={`px-2 py-1 rounded-full text-white text-xs font-medium ${
        row.status?.toLowerCase() === "active"
          ? "bg-green-500"
          : "bg-red-500"
      }`}
    >
      {row.status}
    </span>
  ),
  },
];

export default getNewProductCol;
