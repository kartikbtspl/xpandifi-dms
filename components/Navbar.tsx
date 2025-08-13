'use client';

import { AiOutlineMenu, AiOutlineBell, AiOutlineQuestionCircle, AiOutlineInbox } from "react-icons/ai";
import { useRouter } from 'next/navigation';
import useAuthStore from '../store/useAuthStore';
import useSidebarStore from '../store/useSidebarStore';
import Image from 'next/image';

export default function Navbar() {
  const logout = useAuthStore(state => state.logout);
  const role = useAuthStore(state => state.role);
  const toggleSidebar = useSidebarStore(state => state.toggle);
  const router = useRouter();

  return (
    <div className="h-16 bg-white flex items-center justify-between px-4 p-8 shadow-sm">
      {/* Left section */}
      <div className="flex items-center gap-3">
        <button 
          onClick={toggleSidebar} 
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <AiOutlineMenu size={22} />
        </button>
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="pl-8 pr-4 py-2 bg-gray-100 rounded-full text-sm focus:outline-none border border-transparent focus:border-gray-300 w-64"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 absolute left-2 top-1/2 -translate-y-1/2 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 3a7.5 7.5 0 006.15 13.65z" />
          </svg>
        </div>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-5">
        <AiOutlineBell size={20} className="cursor-pointer" />
        <AiOutlineQuestionCircle size={20} className="cursor-pointer" />
        <AiOutlineInbox size={20} className="cursor-pointer" />
        
        {/* User Info */}
        <div className="flex items-center gap-2">
          <Image
            src="https://www.svgrepo.com/show/382109/male-avatar-boy-face-man-user-7.svg"
            alt="User Avatar"
            width={28}
            height={28}
            className="rounded-full"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-medium text-gray-800">John Smith</span>
            <span className="text-xs text-gray-500">johnsmith@fieldmi.com</span>
          </div>
        </div>

        <div className="text-sm text-gray-600">{role?.toUpperCase() || ''}</div>
        <button
          onClick={() => {
            logout();
            router.push('/login');
          }}
          className="text-sm text-red-500"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

