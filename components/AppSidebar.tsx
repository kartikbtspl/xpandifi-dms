'use client';

import { useEffect, useState } from 'react';
import SidebarItem from './SidebarItem';
import { oemMenuItems, dmsMenuItems } from '../lib/menuItems';
import useAuthStore from '../store/useAuthStore';
import useSidebarStore from '../store/useSidebarStore';
import { MenuItem } from '../types';

export default function AppSidebar() {
  const role = useAuthStore((state) => state.role);
  const [items, setItems] = useState<MenuItem[]>([]);
  const { isOpen, toggle, close } = useSidebarStore();

  useEffect(() => {
    if (role === 'oem') setItems(oemMenuItems);
    else if (role === 'dms') setItems(dmsMenuItems);
    else setItems([]);
  }, [role]);

  return (
    <div
  className={`fixed md:static top-0 left-0 h-full z-40 bg-[#16122F] text-white w-64 flex flex-col transition-transform duration-300 ease-in-out overflow-y-auto scrollbar-hide ${
    isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
  }`}
>
      {/* Logo & Close Button */}
      <div className="flex justify-left items-center p-6 mb-7">
        <img className='h-10' src="/xpandifi-logo-white.svg" alt="xpandifi-logo" />
        <button className="md:hidden ml-4" onClick={toggle}>
          ❌
        </button>
      </div>

      {/* Sidebar Menu Items */}
      <nav className="flex flex-col gap-4">
        {items.map((item) => (
          <SidebarItem
            name={item.name}
            key={item.path}
            label={item.name}
            icon={item.icon}
            path={item.path}
            toggleSidebar={close}
          />
        ))}
      </nav>
    </div>
  );
}

