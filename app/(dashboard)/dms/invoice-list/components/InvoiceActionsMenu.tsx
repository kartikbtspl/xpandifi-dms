'use client'

import { useState, useRef, useEffect } from 'react';
import { FiMoreVertical } from 'react-icons/fi';
import { FaEye, FaEdit, FaDownload, FaEnvelope, FaMoneyCheckAlt } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

export default function InvoiceActionsMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !(menuRef.current as any).contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const router = useRouter();
  function handleEditList(){
    router.push("/dms/invoice-list/edit");
  }

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="p-2 hover:bg-[#E3E8F3] rounded-full text-gray-600 hover:text-black transition duration-150 ease-in-out"
      >
        <FiMoreVertical size={20} />
      </button>

      {open && (
        <ul className="absolute right-0 z-10 w-40 bg-white shadow-lg rounded-md border-gray-200 mt-2 py-1">
          <li className="flex items-center px-4 py-2 text-sm text-gray-700 border-b hover:bg-gray-100 cursor-pointer gap-2">
            <FaEye className="text-base" />
            View
          </li>
          <li className="flex items-center px-4 py-2 text-sm text-gray-700 border-b hover:bg-gray-100 cursor-pointer gap-2">
            <FaMoneyCheckAlt className="text-base" />
            Pay
          </li>
          <li className="flex items-center px-4 py-2 text-sm text-gray-700 border-b hover:bg-gray-100 cursor-pointer gap-2"
          onClick={() => handleEditList()}>
            <FaEdit className="text-base" />
            Edit
          </li>
          <li className="flex items-center px-4 py-2 text-sm text-gray-700 border-b hover:bg-gray-100 cursor-pointer gap-2">
            <FaEnvelope className="text-base" />
            Mail
          </li>
          <li className="flex items-center px-4 py-2 text-sm text-gray-700 border-b hover:bg-gray-100 cursor-pointer gap-2">
            <FaDownload className="text-base" />
            Download
          </li>
        </ul>
      )}
    </div>
  );
}
