import React, { useState, useRef, useEffect } from "react";
import { MoreVertical } from "lucide-react";

interface RowActionsProps {
  row: any;
  onEdit: (row: any) => void;
  onDelete: (row: any) => void;
}

const RowActions: React.FC<RowActionsProps> = ({ row, onEdit, onDelete }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      {/* Trigger button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="p-2 rounded-full hover:bg-gray-100"
      >
        <MoreVertical className="w-5 h-5 text-gray-600" />
      </button>

      {/* Popup menu */}
      {open && (
        <ul className="absolute w-28 bg-white border border-gray-200 rounded-lg shadow-md z-10">
          <li
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => {
              onEdit(row);
              setOpen(false);
              
            }}
          >
            Edit
          </li>
          <li
            className="px-4 py-2 text-red-600 hover:bg-gray-100 cursor-pointer"
            onClick={() => {
              onDelete(row);
              setOpen(false);
            }}
          >
            Delete
          </li>
        </ul>
      )}
    </div>
  );
};

export default RowActions;
