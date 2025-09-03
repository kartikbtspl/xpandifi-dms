import React from "react";
import { Button } from "@mui/material";

export interface Column {
  id: string;
  label: string;
  numeric?: boolean;
  render?: (row: any) => React.ReactNode;
}

const getProductColumns = (
  onRowClick: (row: any) => void,
  onRemove: (id: number) => void
): Column[] => [
  {
    id: "productId",
    label: "Product ID",
    render: (row) => (
      <span
        className="text-gray-700 cursor-pointer"
        onClick={() => onRowClick(row)}
      >
        {row.productId}
      </span>
    ),
  },
  {
    id: "productCode",
    label: "Product Code",
    render: (row) => (
      <span
        className="text-gray-700 cursor-pointer"
        onClick={() => onRowClick(row)}
      >
        {row.productCode}
      </span>
    ),
  },
  {
    id: "quantity",
    label: "Quantity",
    numeric: true,
    render: (row) => (
      <span
        className="text-gray-700 cursor-pointer"
        onClick={() => onRowClick(row)}
      >
        {row.quantity}
      </span>
    ),
  },
  {
    id: "productName",
    label: "Product Name",
    render: (row) => (
      <span
        className="text-gray-700 cursor-pointer"
        onClick={() => onRowClick(row)}
      >
        {row.productName}
      </span>
    ),
  },
  {
    id: "pack",
    label: "Pack",
    render: (row) => (
      <span
        className="text-gray-700 cursor-pointer"
        onClick={() => onRowClick(row)}
      >
        {row.pack}
      </span>
    ),
  },
  {
    id: "expiryDate",
    label: "Expiry Date",
    render: (row) => (
      <span
        className="text-gray-700 cursor-pointer"
        onClick={() => onRowClick(row)}
      >
        {row.expiryDate}
      </span>
    ),
  },
  {
    id: "action",
    label: "Action",
    render: (row) => (
      <Button
        variant="text"
        color="error"
        size="small"
        onClick={(e) => {
          e.stopPropagation();
          onRemove(row.id);
        }}
      >
        Remove
      </Button>
    ),
  },
];

export default getProductColumns;
