import React from "react";
import RowActions from "./RowActions";

export interface Column {
  id: string;
  label: string;
  render?: (row: any, index?: number) => React.ReactNode;
}

const getAddRootColumns = ({
  onEdit,
  onDelete,
}: {
  onEdit: (row: any) => void;
  onDelete: (row: any) => void;
}): Column[] => [
  {
    id: "srNo",
    label: "Sr.No.",
    render: (row) => <span className="text-gray-700">{row.srNo}</span>,
  },
  {
    id: "rootName",
    label: "Root Name",
    render: (row) => <span className="text-gray-700">{row.rootName}</span>,
  },
  {
    id: "blank",
    label: "",
    render: (row) => (
      <RowActions row={row} onEdit={onEdit} onDelete={onDelete} />
    ),
  },
];

export default getAddRootColumns;
