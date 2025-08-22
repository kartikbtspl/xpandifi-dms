import React from "react";

export interface Column {
  id: string; // ✅ Correct key name
  label: string;
  render?: (row: any) => React.ReactNode;
}

const getContactInfoColumn = (): Column[] => [
  {
    id: 'name',
    label: 'Name',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.name}</span>
    ),
  },
  {
    id: 'email',
    label: 'Email',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.email}</span>
    ),
  },
  {
    id: 'mobileNumber',
    label: 'Mobile Number',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.mobileNumber}</span>
    ),
  },
  {
    id: 'designation',
    label: 'Designation',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.designation}</span>
    ),
  },
  
];

export default getContactInfoColumn;
