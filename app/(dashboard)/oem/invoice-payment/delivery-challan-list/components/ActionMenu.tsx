// "use client"
// import { useState, useRef, useEffect } from "react";
// import { FiMoreVertical } from "react-icons/fi";
// import { Eye, Download } from "lucide-react";
// import { useRouter } from "next/navigation";

// export default function ActionMenu({
//   onView,
//   onDownload,
// }: {
//   onView?: () => void;
//   onDownload?: () => void;
// }) {
//   const [open, setOpen] = useState(false);
//   const menuRef = useRef<HTMLDivElement>(null);
//   const router = useRouter(); 

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     function handleClickOutside(event: MouseEvent) {
//       if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
//         setOpen(false);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <div className="relative inline-block text-left" ref={menuRef}>
//       {/* Three dots button */}
//       <button
//         onClick={() => setOpen(!open)}
//         className="p-2 rounded-full hover:bg-gray-100"
//       >
//         <FiMoreVertical className="w-5 h-5 text-gray-600" />
//       </button>

//       {/* Dropdown */}
//       {open && (
//         <ul className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
//           <li
//             onClick={() => {
//             //   onView?.();
//             router.push('/oem/invoice-payment/delivery-challan-list/view-challan');
//               setOpen(false);
//             }}
//             className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer rounded-t-lg"
//           >
//             <Eye className="w-4 h-4 mr-2" /> View
//           </li>
//           <li
//             onClick={() => {
//               onDownload?.();
//               setOpen(false);
//             }}
//             className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer rounded-b-lg"
//           >
//             <Download className="w-4 h-4 mr-2" /> Download
//           </li>
//         </ul>
//       )}
//     </div>
//   );
// }

"use client";
import { FiEye } from "react-icons/fi";
import { FiDownload } from "react-icons/fi";
import { useRouter } from "next/navigation";

export default function ActionMenu({
  onView,
  onDownload,
}: {
  onView?: () => void;
  onDownload?: () => void;
}) {
  const router = useRouter();

  return (
    <div className="flex items-center space-x-3">
      {/* View Icon */}
      <button
        onClick={() => {router.push("/oem/invoice-payment/delivery-challan-list/view-challan");}
        }
        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
        title="View"
      >
        <FiEye size={18} className="cursor-pointer hover:text-blue-500"/>
      </button>

      {/* Download Icon */}
      <button
        onClick={onDownload}
        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
        title="Download"
      >
        <FiDownload size={18} className="cursor-pointer hover:text-green-500"/>
      </button>
    </div>
  );
}

