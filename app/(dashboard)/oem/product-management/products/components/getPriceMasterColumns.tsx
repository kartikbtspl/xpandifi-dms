import React from "react";
import { IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";

export interface Column {
  id: string;
  label: string;
  render?: (row: any, index?: number) => React.ReactNode;
}

const getPriceMasterColumns = (): Column[] => [
  {
    id: "srNo",
    label: "Sr. No",
    render: (row) => <span className="text-gray-700">{row.srNo}</span>,
  },
  {
    id: "priceMasterId",
    label: "Price Master Id",
    render: (row) => <span className="text-gray-700">{row.priceMasterId}</span>,
  },
  {
    id: "productCode",
    label: "Product Code",
    render: (row) => <span className="text-gray-700">{row.productCode}</span>,
  },
  {
    id: "pack",
    label: "Pack",
    render: (row) => <span className="text-gray-700">{row.pack}</span>,
  },
  {
    id: "packUnit",
    label: "Pack Unit",
    render: (row) => <span className="text-gray-700">{row.packUnit}</span>,
  },
  {
    id: "mrp",
    label: "MRP",
    render: (row) => <span className="text-gray-700">{row.mrp}</span>,
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
    id: "createdDate",
    label: "Created Date",
    render: (row) => <span className="text-gray-700">{row.createdDate}</span>,
  },
  {
    id: "status",
    label: "Status",
    render: (row) => (
      <span
        className={`px-2 py-1 rounded-full text-white text-xs font-medium ${row.status?.toLowerCase() === "active"
            ? "bg-green-500"
            : "bg-red-500"
          }`}
      >
        {row.status}
      </span>
    ),
  },
];

export default getPriceMasterColumns;
