import React from "react";

export interface Column {
  id: string; // ✅ Correct key name
  label: string;
  render?: (row: any) => React.ReactNode;
}

const getPrimaryListColumns = (): Column[] => [
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
    id: 'rate',
    label: 'Rate',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.rate}</span>
    ),
  },
  {
    id: 'qty',
    label: 'Qty',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.qty}</span>
    ),
  },
  {
    id: 'subTotal',
    label: 'Sub Total',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.subTotal}</span>
    ),
  },
  {
    id: 'discount',
    label: 'Discount',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.discount}</span>
    ),
  },
  {
    id: 'total',
    label: 'Total',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.total}</span>
    ),
  },
];

export default getPrimaryListColumns;
