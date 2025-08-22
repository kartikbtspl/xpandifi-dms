import React from "react";

export interface Column {
  id: string; // ✅ Correct key name
  label: string;
  render?: (row: any) => React.ReactNode;
}

const getPrimaryTableColumns = (): Column[] => [
  {
    id: 'srNo',
    label: 'Sr. No',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.srNo}</span>
    ),
  },
  {
    id: 'orderNumber',
    label: 'Order Number',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.orderNumber}</span>
    ),
  },
  {
    id: 'distributerName',
    label: 'Distributer Name',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.distributerName}</span>
    ),
  },
  {
    id: 'orderDate',
    label: 'Order Date',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.orderDate}</span>
    ),
  },
  {
    id: 'total',
    label: 'Total',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.total}</span>
    ),
  },
  {
  id: "blank",
  label: "",
  render: (row) => (
    <div className="flex justify-center">
      {row.blank}
    </div>
  )
}
];

export default getPrimaryTableColumns;
