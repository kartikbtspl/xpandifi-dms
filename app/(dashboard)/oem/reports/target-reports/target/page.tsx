"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React, { useState } from 'react'
import TargetForm from './components/TargetForm'
import Button from '@/components/common/ui/Button'
import getTargetCol from './components/getTargetCol'
import Table from '@/components/common/table/Table'
import { useRouter } from 'next/navigation'

const Target = () => {

  const [targetData, setTargetData] = useState([
    {
      id: 1,
      srNo: "01",
      userName: "Amit Sharma",
      role: "Manager",
      month: "October",
      visits: "7",
      orders: "₹22,000",
      amount: "₹17,500",
      volumeTarget: "25",
      collection: "₹21,000",
    },
    {
      id: 2,
      srNo: "02",
      userName: "Sneha Verma",
      role: "Sales Executive",
      month: "September",
      visits: "10",
      orders: "₹16,500",
      amount: "₹14,200",
      volumeTarget: "30",
      collection: "₹13,000",
    },
    {
      id: 3,
      srNo: "03",
      userName: "Rohit Singh",
      role: "Area Lead",
      month: "August",
      visits: "5",
      orders: "₹9,500",
      amount: "₹7,800",
      volumeTarget: "20",
      collection: "₹8,000",
    },
    {
      id: 4,
      srNo: "04",
      userName: "Priya Patel",
      role: "Senior Manager",
      month: "July",
      visits: "8",
      orders: "₹27,000",
      amount: "₹24,500",
      volumeTarget: "35",
      collection: "₹25,300",
    },
    {
      id: 5,
      srNo: "05",
      userName: "Vikas Kumar",
      role: "Sales Rep",
      month: "June",
      visits: "6",
      orders: "₹12,000",
      amount: "₹10,000",
      volumeTarget: "18",
      collection: "₹9,700",
    },
  ]);

  const router = useRouter();
  const [loadingTarget, setLoadingTarget] = useState(false);

  const handleView = (row: any) => {
    router.push('/oem/reports/target-reports/target/view-target');
  };
  const handleDelete = (row: any) => {
    alert("Delete Clicked...");
  }

  const targetColumns = getTargetCol(handleView, handleDelete);

  const handleRefreshTarget = () => {
    setLoadingTarget(true);
    setTimeout(() => {
      setLoadingTarget(false);
      setTargetData((prev) => [...prev]); // refresh same data
    }, 1000);
  };

  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "Target Reports", isClickable: false },
          { label: "Target", href: "/oem/reports/target-reports/target" },
        ]}
      />
      <h1 className="text-3xl font-semibold text-[#445E94]">Target</h1>
      <div className="space-y-4 rounded-lg bg-white shadow-sm">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">Search Target</h1>
        </div>
        <hr className="text-gray-200" />
        <div className="">
          <TargetForm />
        </div>
      </div>
      <div className='flex justify-end'>
        <Button onClick={() => router.push('/oem/reports/target-reports/target/add-target')}><span className='mr-3 text-xl'>+</span>Add Target</Button>
      </div>
      <div className="space-y-4 rounded-lg bg-white shadow-sm">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">
            Active Customer List
          </h1>
        </div>
        <hr className="text-gray-200" />

        <div className="px-6">
          <Table
            rows={targetData}
            columns={targetColumns}
            onRefresh={handleRefreshTarget}
            loading={loadingTarget}
            showPagination
            rowsPerPage={3}
          />
        </div>
      </div>
    </div>
  )
}

export default Target