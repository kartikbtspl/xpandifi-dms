'use client';
import AppSidebar from '@/components/appLayout/AppSidebar';
import Navbar from '@/components/appLayout/Navbar';
import { ReactNode } from 'react';

export default function OEMLayout({ children }: { children: ReactNode }){
  return (
    <div className="flex h-screen">
      <AppSidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-6 overflow-auto">{children}</main>
      </div>
    </div>
  )
}