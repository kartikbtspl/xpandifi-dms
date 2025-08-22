import React from "react";

export interface Column {
  id: string; // ✅ Correct key name
  label: string;
  render?: (row: any) => React.ReactNode;
}

const getRetailerStockColumns = (): Column[] => [
  {
    id: 'srNo',
    label: 'Sr. No',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.srNo}</span>
    ),
  },
  {
    id: 'productName',
    label: 'Product Name',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.productName}</span>
    ),
  },
  {
    id: 'pack',
    label: 'Pack',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.pack}</span>
    ),
  },
  {
    id: 'stock',
    label: 'Stock',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.stock}</span>
    ),
  },
  {
    id: 'stockUpdatedDate',
    label: 'StockUpdated Date',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.stockUpdatedDate}</span>
    ),
  },
  {
    id: 'asOnDate',
    label: 'As On Date',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.asOnDate}</span>
    ),
  },
  {
    id: 'stockDate',
    label: 'Stock Date',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.stockDate}</span>
    ),
  },
];

export default getRetailerStockColumns;
