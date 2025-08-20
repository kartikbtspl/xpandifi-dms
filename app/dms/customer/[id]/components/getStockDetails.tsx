import React from "react";

export interface Column {
  id: string; // ✅ Correct key name
  label: string;
  render?: (row: any) => React.ReactNode;
}

const getStockColumns = (): Column[] => [
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
    id: 'openingStock',
    label: 'Opening Stock',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.openingStock}</span>
    ),
  },
  {
    id: 'consumedStock',
    label: 'Consumed Stock',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.consumedStock}</span>
    ),
  },
  {
    id: 'closingStock',
    label: 'Closing Stock',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.closingStock}</span>
    ),
  },
  {
    id: 'status',
    label: 'Status',
    render: (row) => (
      <span className="px-3 py-2 font-semibold bg-green-100 text-green-700 rounded-md text-sm cursor-pointer">
        {row.status}
      </span>
    ),
  },
];

export default getStockColumns;
