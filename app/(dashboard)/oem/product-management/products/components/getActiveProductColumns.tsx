import React from "react";
import { IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";

export interface Column {
  id: string;
  label: string;
  render?: (row: any, index?: number) => React.ReactNode;
}

const getActiveProductColumns = (
  onRowClick: (row: any) => void
): Column[] => [
  {
    id: "srNo",
    label: "Sr. No",
    render: (_, index) => (
      <span className="text-gray-700">{String(index! + 1).padStart(2, "0")}</span>
    ),
  },
  {
    id: "productName",
    label: "Product Name",
    render: (row) => (
      <span className="text-gray-700 cursor-pointer" onClick={() => onRowClick(row)}>
        {row.productName}
      </span>
    ),
  },
  {
    id: "productCode",
    label: "Product Code",
    render: (row) => <span className="text-gray-700">{row.productCode}</span>,
  },
  {
    id: "brand",
    label: "Brand",
    render: (row) => <span className="text-gray-700">{row.brand}</span>,
  },
  {
    id: "category",
    label: "Category",
    render: (row) => <span className="text-gray-700">{row.category}</span>,
  },
  {
    id: "subCategory",
    label: "Sub-Category",
    render: (row) => <span className="text-gray-700">{row.subCategory}</span>,
  },
  {
    id: "action",
    label: "",
    render: (row) => (
      <IconButton
        color="primary"
        onClick={(e) => {
          e.stopPropagation();
          onRowClick(row);
        }}
      >
        <VisibilityIcon />
      </IconButton>
    ),
  },
];

export default getActiveProductColumns;
