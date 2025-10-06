"use client"
import { useState } from "react";

interface SectionProps {
  title: string;
  reports: string[];
  selected: string[];
  setSelected: (selected: string[]) => void;
  expandedDefault?: boolean;
}

export default function Section({ title, reports, selected, setSelected, expandedDefault = false }: SectionProps) {
  const [expanded, setExpanded] = useState(expandedDefault);


  const allChecked = reports.length > 0 && selected.length === reports.length;

  const toggleSection = () => setExpanded((prev) => !prev);

  const handleSectionCheckbox = () => {
    if (!allChecked) {
      setSelected([...reports]);
      setExpanded(true);
    } else {
      setSelected([]);
    }
  };

  const handleReportCheckbox = (report: string) => {
    if (selected.includes(report)) {
      setSelected(selected.filter((r) => r !== report));
    } else {
      setSelected([...selected, report]);
    }
  };

  return (
    <div className="mb-4">
      <div className="flex items-center gap-2 mb-1">
        <input
          type="checkbox"
          checked={allChecked}
          onChange={handleSectionCheckbox}
        />
        <span
          className="text-[#445E94] cursor-pointer select-none"
          onClick={toggleSection}
        >
          {title}
        </span>
      </div>
      {expanded && reports.length > 0 && (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 table-auto">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="text-left p-2 w-1/10">Select</th>
                <th className="text-left p-2">Name</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report) => (
                <tr key={report} className="border-t border-gray-100">
                  <td className="text-center p-2">
                    <input
                      type="checkbox"
                      checked={selected.includes(report)}
                      onChange={() => handleReportCheckbox(report)}
                    />
                  </td>
                  <td className="p-2">{report}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
