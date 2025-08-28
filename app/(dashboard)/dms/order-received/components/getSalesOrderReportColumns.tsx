import React from "react";
import { Chip, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export interface Column {
  id: string;
  label: string;
  numeric?: boolean;
  render?: (row: any) => React.ReactNode;
}

const getSalesOrderReportColumns = (onRowClick: (row: any) => void): Column[] => [
  {
    id: "srNo",
    label: "Sr. No",
    render: (row) => <span>{row.srNo.toString().padStart(2, "0")}</span>,
  },
  {
    id: "salesPerson",
    label: "Sales Person",
    render: (row) => <span>{row.salesPerson}</span>,
  },
  {
    id: "customer",
    label: "Customer",
    render: (row) => <span>{row.customer}</span>,
  },
  {
    id: "date",
    label: "Date",
    render: (row) => <span>{row.date}</span>,
  },
  {
    id: "status",
    label: "Status",
    render: (row) => (
      <Chip
        label={row.status}
        size="medium"
        sx={{
          fontWeight: 700,
          borderRadius: "8px",
          backgroundColor: "#E3EFFE",
          color: "#415387",
        }}
      />
    ),
  },
  {
    id: "total",
    label: "Total",
    render: (row) => <span>₹{row.total}</span>,
  },
  {
    id: "address",
    label: "Address",
    render: (row) => <span>{row.address}</span>,
  },
  {
    id: "approvalStatus",
    label: "Approval Status",
    render: (row) => {
      const chipColors: Record<
        string,
        { bg: string; color: string }
      > = {
        Delivered: { bg: "#E6F9EC", color: "#16A34A" },
        Pending: { bg: "#FEF9E6", color: "#CA8A04" },
        Processing: { bg: "#EEF2FF", color: "#4338CA" },
        Cancelled: { bg: "#FEE2E2", color: "#DC2626" },
      };

      const { bg, color } = chipColors[row.approvalStatus] || {
        bg: "#F3F4F6",
        color: "#374151",
      };

      return (
        <Chip
          label={row.approvalStatus}
          size="medium"
          sx={{
            fontWeight: 700,
            borderRadius: "8px",
            backgroundColor: bg,
            color: color,
          }}
        />
      );
    },
  },
  {
    id: "actions",
    label: "",
    render: () => (
      <IconButton size="medium">
        <MoreVertIcon fontSize="small" />
      </IconButton>
    ),
  },
];

export default getSalesOrderReportColumns;


// // components/orderReceived/getSalesOrderReportColumns.tsx
// import React from "react";
// import Badge from "@mui/material/Badge";
// import Button from "../../../../components/common/ui/Button";

// export interface Column {
//   id: string;
//   label: string;
//   numeric?: boolean;
//   render?: (row: any, index?: number) => React.ReactNode;
// }

// const statusColors: Record<string, string> = {
//   Ordered: "#D0E2FF",
//   Delivered: "#D4EDDA",
//   Pending: "#FFF3CD",
//   Processing: "#D1ECF1",
//   Cancelled: "#F8D7DA",
// };

// const textColors: Record<string, string> = {
//   Ordered: "#3857A5",
//   Delivered: "#22863A",
//   Pending: "#856404",
//   Processing: "#0C5460",
//   Cancelled: "#721C24",
// };

// const getSalesOrderReportColumns = (onView: (row: any) => void): Column[] => [
//   {
//     id: "srNo",
//     label: "Sr. No",
//     render: (_row, index = 0) => (
//       <span className="text-gray-700">
//         {(index + 1).toString().padStart(2, "0")}
//       </span>
//     ),
//   },
//   {
//     id: "salesPerson",
//     label: "Sales Person",
//     render: row => <span className="text-gray-700">{row.salesPerson}</span>,
//   },
//   {
//     id: "customer",
//     label: "Customer",
//     render: row => <span className="text-gray-700">{row.customer}</span>,
//   },
//   {
//     id: "date",
//     label: "Date",
//     render: row => <span className="text-gray-700">{row.date}</span>,
//   },
//   {
//     id: "status",
//     label: "Status",
//     render: row => (
//       <Badge
//         badgeContent={row.status}
//         sx={{
//           "& .MuiBadge-badge": {
//             backgroundColor: statusColors[row.status],
//             color: textColors[row.status],
//             fontSize: "0.75rem",
//             height: "auto",
//             minWidth: 0,
//             padding: "6px 8px",
//             borderRadius: "12px",
//           },
//         }}
//       />
//     ),
//   },
//   {
//     id: "total",
//     label: "Total",
//     numeric: true,
//     render: row => (
//       <span className="text-gray-900 font-medium">
//         ₹{row.total.toLocaleString()}
//       </span>
//     ),
//   },
//   {
//     id: "address",
//     label: "Address",
//     render: row => (
//       <span className="text-gray-700 truncate max-w-xs">{row.address}</span>
//     ),
//   },
//   {
//     id: "approvalStatus",
//     label: "Approval Status",
//     render: row => (
//       <Badge
//         badgeContent={row.approvalStatus}
//         sx={{
//           "& .MuiBadge-badge": {
//             backgroundColor: statusColors[row.approvalStatus],
//             color: textColors[row.approvalStatus],
//             fontSize: "0.75rem",
//             height: "auto",
//             minWidth: 0,
//             padding: "6px 8px",
//             borderRadius: "12px",
//           },
//         }}
//       />
//     ),
//   },
//   {
//     id: "actions",
//     label: "",
//     render: row => (
//       <Button
//         variant="ghost"
//         onClick={() => onView(row)}
//         className="text-gray-500 hover:text-gray-700 p-2"
//       >
//         ⋮
//       </Button>
//     ),
//   },
// ];

// export default getSalesOrderReportColumns;


// // // components/orderReceived/getSalesOrderReportColumns.tsx
// // import React from "react";
// // import { Badge } from "@mui/material"; // or your own Badge component
// // import Button from "../../../../components/common/ui/Button";

// // export interface Column {
// //   id: string;
// //   label: string;
// //   numeric?: boolean;
// //   render?: (row: any) => React.ReactNode;
// // }

// // const getSalesOrderReportColumns = (onView: (row: any) => void): Column[] => [
// //   {
// //     id: "orderNo",
// //     label: "Order No",
// //     render: row => (
// //       <span className="text-gray-900 font-medium cursor-pointer" onClick={() => onView(row)}>
// //         {row.orderNo}
// //       </span>
// //     ),
// //   },
// //   {
// //     id: "date",
// //     label: "Date",
// //     render: row => (
// //       <span className="text-gray-700">{new Date(row.date).toLocaleDateString()}</span>
// //     ),
// //   },
// //   {
// //     id: "salesPerson",
// //     label: "Sales Person",
// //     render: row => <span className="text-gray-700">{row.salesPerson}</span>,
// //   },
// //   {
// //     id: "customer",
// //     label: "Customer",
// //     render: row => <span className="text-gray-700">{row.customer}</span>,
// //   },
// //   {
// //     id: "channel",
// //     label: "Channel",
// //     render: row => <span className="text-gray-700">{row.channel}</span>,
// //   },
// //   {
// //     id: "status",
// //     label: "Status",
// //     render: row => {
// //       const color = row.status === "Approved" ? "green" : row.status === "Pending" ? "yellow" : "red";
// //       return (
// //         <span
// //           className={`px-2 py-1 rounded-full text-sm font-medium ${
// //             color === "green"
// //               ? "bg-green-100 text-green-700"
// //               : color === "yellow"
// //               ? "bg-yellow-100 text-yellow-700"
// //               : "bg-red-100 text-red-700"
// //           }`}
// //         >
// //           {row.status}
// //         </span>
// //       );
// //     },
// //   },
// //   {
// //     id: "amount",
// //     label: "Amount",
// //     numeric: true,
// //     render: row => (
// //       <span className="text-gray-900 font-medium">
// //         ₹{row.amount.toLocaleString()}
// //       </span>
// //     ),
// //   },
// //   {
// //     id: "actions",
// //     label: "Actions",
// //     render: row => (
// //       <Button variant="outline" onClick={() => onView(row)}>
// //         View
// //       </Button>
// //     ),
// //   },
// // ];

// // export default getSalesOrderReportColumns;
