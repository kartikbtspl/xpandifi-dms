"use client";
import React, { useState } from "react";

export interface Column {
  id: string;
  label: string;
  render?: (row: any) => React.ReactNode;
}

// ✅ Component for Quantity Input
const QuantityCell: React.FC<{ row: any }> = ({ row }) => {
  const [value, setValue] = useState(row.quantity || "");
  const maxStock = row.stock || 50;
  const isInvalid = Number(value) > maxStock;

  return (
    <div className="flex flex-col">
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={`w-20 px-2 py-1 border rounded text-center focus:outline-none ${
          isInvalid
            ? "border-red-500 text-red-500"
            : "border-gray-300 text-gray-700"
        }`}
      />
      {isInvalid && (
        <span className="text-red-500 text-xs mt-1">
          Out of stock – {maxStock} units left
        </span>
      )}
    </div>
  );
};

const getOrderListColumns = (): Column[] => [
  {
    id: "srNo",
    label: "Sr. No",
    render: (row) => <span>{row.srNo}</span>,
  },
  {
    id: "productName",
    label: "Product Name",
    render: (row) => <span>{row.productName}</span>,
  },
  {
    id: "sku",
    label: "Sku",
    render: (row) => <span>{row.sku}</span>,
  },
  {
    id: "hsnCode",
    label: "HSN Code",
    render: (row) => <span>{row.hsnCode}</span>,
  },
  {
    id: "rate",
    label: "Rate",
    render: (row) => <span>{row.rate}</span>,
  },
  {
    id: "taxPercentage",
    label: "Tax%",
    render: (row) => <span>{row.taxPercentage}</span>,
  },
  {
    id: "quantity",
    label: "Quantity",
    render: (row) => <QuantityCell row={row} />, // ✅ use component
  },
  {
    id: "amount",
    label: "Amount",
    render: (row) => <span>{row.amount}</span>,
  },
  {
    id: "tax",
    label: "Tax",
    render: (row) => <span>{row.tax}</span>,
  },
  {
    id: "total",
    label: "Total(Including tax)",
    render: (row) => <span>{row.total}</span>,
  },
];

export default getOrderListColumns;



// import React from "react";

// export interface Column {
//   id: string; // ✅ Correct key name
//   label: string;
//   render?: (row: any) => React.ReactNode;
// }

// const getOrderListColumns = (): Column[] => [
//   {
//     id: "srNo",
//     label: "Sr. No",
//     render: (row) => (
//       <span className="text-gray-700 cursor-pointer">{row.srNo}</span>
//     ),
//   },
//   {
//     id: "productName",
//     label: "Product Name",
//     render: (row) => (
//       <span className="text-gray-700 cursor-pointer">{row.productName}</span>
//     ),
//   },
//   {
//     id: "sku",
//     label: "Sku",
//     render: (row) => (
//       <span className="text-gray-700 cursor-pointer">{row.sku}</span>
//     ),
//   },
//   {
//     id: "hsnCode",
//     label: "HSN Code",
//     render: (row) => (
//       <span className="text-gray-700 cursor-pointer">{row.hsnCode}</span>
//     ),
//   },
//   {
//     id: "rate",
//     label: "Rate",
//     render: (row) => (
//       <span className="text-gray-700 cursor-pointer">{row.rate}</span>
//     ),
//   },
//   {
//     id: "taxPercentage",
//     label: "Tax%",
//     render: (row) => (
//       <span className="text-gray-700 cursor-pointer">{row.taxPercentage}</span>
//     ),
//   },
//   {
//     id: "quantity",
//     label: "Quantity",
//     render: (row) => {
//       const [value, setValue] = React.useState(row.quantity || "");
//       const maxStock = row.stock || 50; // default stock = 50 if not passed
//       const isInvalid = Number(value) > maxStock;

//       return (
//         <div className="flex flex-col">
//           <input
//             type="text"
//             value={value}
//             onChange={(e) => setValue(e.target.value)}
//             className={`w-20 px-2 py-1 border rounded text-center focus:outline-none ${
//               isInvalid
//                 ? "border-red-500 text-red-500"
//                 : "border-gray-300 text-gray-700"
//             }`}
//           />
//           {isInvalid && (
//             <span className="text-red-500 text-xs mt-1">
//               Out of stock – {maxStock} units left
//             </span>
//           )}
//         </div>
//       );
//     },
//   },
//   {
//     id: "amount",
//     label: "Amount",
//     render: (row) => (
//       <span className="text-gray-700 cursor-pointer">{row.amount}</span>
//     ),
//   },
//   {
//     id: "tax",
//     label: "Tax",
//     render: (row) => (
//       <span className="text-gray-700 cursor-pointer">{row.tax}</span>
//     ),
//   },
//   {
//     id: "total",
//     label: "Total(Including tax)",
//     render: (row) => (
//       <span className="text-gray-700 cursor-pointer">{row.total}</span>
//     ),
//   },
// ];

// export default getOrderListColumns;
