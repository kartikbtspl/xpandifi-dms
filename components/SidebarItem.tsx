'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MenuItem } from '../types';
import React from 'react';

export default function SidebarItem({ name, icon, path }: MenuItem){
  const pathname = usePathname();
  const active = pathname === path;
  return (
    <Link href={path} className={'flex items-center gap-3 p-2 rounded ' + (active ? 'bg-[#445E94]' : 'hover:bg-[#445E94]')}>
      <span className="text-lg">{icon}</span>
      <span className="text-sm">{name}</span>
    </Link>
  )
}
