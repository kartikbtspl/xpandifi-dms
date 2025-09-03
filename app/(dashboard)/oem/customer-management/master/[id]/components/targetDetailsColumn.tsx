"use client"
import React from "react";

export interface Column {
  id: string; // ✅ Correct key name
  label: string;
  render?: (row: any) => React.ReactNode;
}

const getTargetDetailsColumn = (): Column[] => [
  {
    id: 'srNo',
    label: 'Sr. No',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.srNo}</span>
    ),
  },
  {
    id: 'financialYear',
    label: 'Financial Year',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer">{row.financialYear}</span>
    ),
  },
  {
    id: 'month',
    label: 'Month',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer flex">{row.month}</span>
    ),
  },
  {
    id: 'collection',
    label: 'Collection',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer flex">{row.collection}</span>
    ),
  },
  {
    id: 'volume',
    label: 'Volume',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer flex">{row.volume}</span>
    ),
  },
  {
    id: 'revenue',
    label: 'Revenue',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer flex">{row.revenue}</span>
    ),
  },
  {
    id: 'category',
    label: 'Category',
    render: (row) => (
      <span className="text-gray-700 cursor-pointer flex">{row.category}</span>
    ),
  },
  
];

export default getTargetDetailsColumn;
