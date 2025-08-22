import React from "react";

export interface Column {
  id: string; // ✅ Correct key name
  label: string;
  render?: (row: any) => React.ReactNode;
}

const getInvoiceItemListColumns = (): Column[] => [
  {
    id: 'srNo',
    label: 'Sr. No',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.srNo}</span>
    ),
  },
  {
    id: 'product',
    label: 'Product(name/code/category/pack/Price Master ID/Scheme type/Sub offer ID)',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.product}</span>
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
    id: 'tax',
    label: 'Tax',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.tax}</span>
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
    id: 'msp',
    label: ' MSP',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.msp}</span>
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

export default getInvoiceItemListColumns;
