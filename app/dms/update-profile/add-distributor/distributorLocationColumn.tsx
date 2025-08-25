import React from "react";


export interface Column {
  id: string;
  label: string;
  render?: (row: any) => React.ReactNode;
}

const getDistributorLocationColumns = (): Column[] => [
  {
    id: "srNo",
    label: "Sr.No.",
    render: (row) => (
      <span className="text-gray-700">{row.srNo}</span>
    ),
  },
  {
    id: "locationName",
    label: "Location Name",
    render: (row) => (
      <span className="text-gray-700">{row.locationName}</span>
    ),
  },
  {
    id: "locationCode",
    label: "Location Code",
    render: (row) => (
      <span className="text-gray-700">{row.locationCode}</span>
    ),
  },
  {
    id: "officeLocation",
    label: "Location Code",
    render: (row) => (
      <span className="text-gray-700">{row.officeLocation}</span>
    ),
  },
  {
    id: "address",
    label: "Address",
    render: (row) => (
      <span className="text-gray-700">{row.address}</span>
    ),
  },
  {
    id: "lattitude",
    label: "Lattitude",
    render: (row) => (
      <span className="text-gray-700">{row.lattitude}</span>
    ),
  },
  {
    id: "Longitude",
    label: "longitude",
    render: (row) => (
      <span className="text-gray-700">{row.longitude}</span>
    ),
  },
  {
    id: "action",
    label: "Action",
    render: (row) => (
      <span className="text-gray-700">{row.action}</span>
    ),
  },
];

export default getDistributorLocationColumns;
