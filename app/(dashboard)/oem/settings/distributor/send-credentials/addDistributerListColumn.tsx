import React from "react";


export interface Column {
  id: string;
  label: string;
  render?: (row: any) => React.ReactNode;
}

const getAddDistributerListColumns = (): Column[] => [
  {
    id: "srNo",
    label: "Sr. No",
    render: (row) => (
      <span className="text-gray-700">{row.srNo}</span>
    ),
  },
  {
    id: "distributerName",
    label: "Distributer Name",
    render: (row) => (
      <span className="text-gray-700">{row.distributerName}</span>
    ),
  },
  {
    id: "distributerCode",
    label: "Distributer Code",
    render: (row) => (
      <span className="text-gray-700">{row.distributerCode}</span>
    ),
  },
  {
    id: "status",
    label: "Status",
    render: (row) => (
      <span className="text-gray-700">{row.status}</span>
    ),
  },
  {
    id: "blank",
    label: "",
    render: (row) => (
      <span className="text-gray-700">{row.blank}</span>
    ),
  },
];

export default getAddDistributerListColumns;
