import React from "react";


export interface Column {
  id: string;
  label: string;
  render?: (row: any) => React.ReactNode;
}

const getDistributorPanelColumns = (): Column[] => [
  {
    id: "name",
    label: "Name",
    render: (row) => (
      <span className="text-gray-700">{row.name}</span>
    ),
  },
  
];

export default getDistributorPanelColumns;
