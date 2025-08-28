// components/stock/getStockColumns.tsx
import React from "react";

export interface Column {
  id: string;
  label: string;
  numeric?: boolean;
  render?: (row: any, index?: number) => React.ReactNode;
}

const getStockColumns = (): Column[] => [
  {
    id: "srNo",
    label: "Sr. No",
    render: (_row, index = 0) => (
      <span className="text-gray-700">
        {(index + 1).toString().padStart(2, "0")}
      </span>
    ),
  },
  {
    id: "productName",
    label: "Product Name",
    render: row => (
      <span className="text-gray-900 font-medium">{row.productName}</span>
    ),
  },
  {
    id: "productCategory",
    label: "Product Category",
    render: row => (
      <span className="text-gray-700">{row.productCategory}</span>
    ),
  },
  {
    id: "pack",
    label: "Pack",
    render: row => <span className="text-gray-700">{row.pack}</span>,
  },
  {
    id: "distributorName",
    label: "Distributor Name",
    render: row => (
      <span className="text-gray-700">{row.distributorName}</span>
    ),
  },
  {
    id: "codeLocation",
    label: "Code Location",
    render: row => <span className="text-gray-700">{row.codeLocation}</span>,
  },
  {
    id: "actualStock",
    label: "Actual Stock",
    numeric: true,
    render: row => (
      <span className="text-gray-900 font-medium">{row.actualStock}</span>
    ),
  },
  {
    id: "minimumStock",
    label: "Minimum Stock",
    numeric: true,
    render: row => (
      <span className="text-gray-900 font-medium">{row.minimumStock}</span>
    ),
  },
  {
    id: "updatedOn",
    label: "Updated on",
    render: row => <span className="text-gray-700">{row.updatedOn}</span>,
  },
];

export default getStockColumns;
