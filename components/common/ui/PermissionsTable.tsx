import React from "react";

interface PermissionsTableProps {
  rows: string[];               // row headers (can vary)
  actions: string[];            // fixed column headers (actions)
  checked: boolean[][];         // checked state for each cell
  setChecked: React.Dispatch<React.SetStateAction<boolean[][]>>; // setter for checked
  idPrefix?: string;            // optional prefix for checkbox ids
}

export default function PermissionsTable({
  rows,
  actions,
  checked,
  setChecked,
  idPrefix = "permissionsTable"
}: PermissionsTableProps) {
  // Check if all are selected
  const selectAll = checked.every(row => row.every(c => c));

  // Toggle all checkboxes
  const handleSelectAll = () => {
    const next = !selectAll;
    setChecked(Array(rows.length).fill(0).map(() => Array(actions.length).fill(next)));
  };

  // Toggle individual cell checkbox
  const handleCellChange = (rowIdx: number, colIdx: number) => {
    setChecked(prev =>
      prev.map((row, rIdx) =>
        row.map((val, cIdx) => (rIdx === rowIdx && cIdx === colIdx ? !val : val))
      )
    );
  };

  return (
    <div className="overflow-x-auto w-full">
      <table className="min-w-full border-separate border-spacing-0">
        <thead>
          <tr className="bg-blue-50 text-gray-700">
            <th className="py-2 px-2 border-b border-gray-200 font-medium text-left">
              <div className="flex items-center">
                <input
                  id={`${idPrefix}-selectAll`}
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleSelectAll}
                  className="accent-[#3498db]"
                />
                <label
                  htmlFor={`${idPrefix}-selectAll`}
                  className="ml-2 text-gray-900 font-normal text-base select-none"
                >
                  Select All
                </label>
              </div>
            </th>
            {actions.map(action => (
              <th key={action} className="py-2 px-3 border-b border-gray-200 font-medium text-center">
                {action}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white">
          {rows.map((rowName, rowIdx) => (
            <tr key={`${rowName}-${rowIdx}`} className={rowIdx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              <td className="py-2 px-2 border-b border-gray-100 text-sm text-gray-700">
                {rowName}
              </td>
              {actions.map((action, colIdx) => (
                <td key={action} className="py-2 px-3 border-b border-gray-100 text-center">
                  <input
                    type="checkbox"
                    checked={checked[rowIdx][colIdx]}
                    onChange={() => handleCellChange(rowIdx, colIdx)}
                    className="accent-[#3498db]"
                    id={`${idPrefix}-${rowIdx}-${colIdx}`}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
