'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MenuItem } from '@/types/index';
import React from 'react';

export default function SidebarItem({ name, icon: Icon, path }: MenuItem){
  const pathname = usePathname();
   const active = pathname.startsWith(path);
  return (
    <Link 
      href={path} 
      className={`flex items-center gap-3 p-3 ${
        active ? 'bg-[#5D6F9E] text-white' : 'hover:bg-[#383e54] text-gray-300'
      }`}
    >
      <span><Icon className="text-lg" /></span>
      <span className="text-sm font-medium">{name}</span>
    </Link>
  )
}