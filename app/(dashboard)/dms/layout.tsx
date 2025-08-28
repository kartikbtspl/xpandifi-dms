'use client';
import AppSidebar from '@/components/appLayout/AppSidebar';
import Navbar from '@/components/appLayout/Navbar';
import { ReactNode } from 'react';

export default function DMSLayout({ children }: { children: ReactNode }){
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


// export default function DMSLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <div className="min-h-screen flex">
//       <aside className="w-60 bg-gray-800 text-white p-4">DMS Sidebar</aside>
//       <main className="flex-1 p-6">{children}</main>
//     </div>
//   );
// }
