"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React, { useState } from 'react'
import AddTargetForm from './components/AddTargetForm'
import { useRouter } from 'next/navigation';
import getAddTargetCol from "./components/getAddTargetCol"
import Table from '@/components/common/table/Table';
import Button from '@/components/common/ui/Button';

function AddTarget() {

  const [addTargetData, setAddTargetData] = useState([
    {
      id: 1,
      user: "Amit Sharma",
      month: "October",
      visitTarget: "15",
      orderTarget: "₹22,000",
      amountTarget: "₹17,500",
      volumeTarget: "30",
      collectionTarget: "₹20,000",
      category: "Category 1",
    },
    {
      id: 2,
      user: "Sneha Verma",
      month: "September",
      visitTarget: "12",
      orderTarget: "₹18,000",
      amountTarget: "₹14,500",
      volumeTarget: "25",
      collectionTarget: "₹16,000",
      category: "Category 2",
    },
    {
      id: 3,
      user: "Rohit Singh",
      month: "August",
      visitTarget: "10",
      orderTarget: "₹14,000",
      amountTarget: "₹11,000",
      volumeTarget: "20",
      collectionTarget: "₹12,000",
      category: "Category 3",
    },
    {
      id: 4,
      user: "Priya Patel",
      month: "July",
      visitTarget: "18",
      orderTarget: "₹28,000",
      amountTarget: "₹21,000",
      volumeTarget: "35",
      collectionTarget: "₹25,500",
      category: "Category 1",
    },
    {
      id: 5,
      user: "Vikas Kumar",
      month: "June",
      visitTarget: "11",
      orderTarget: "₹16,000",
      amountTarget: "₹13,000",
      volumeTarget: "22",
      collectionTarget: "₹15,000",
      category: "Category 2",
    },
  ]);


  const router = useRouter();
  const [loadingAddTarget, setLoadingAddTarget] = useState(false);

  const handleView = (row: any) => {
    // router.push('/oem/reports/target-reports/target/view-target');
    alert("View Clicked...");
  };
  const handleDelete = (row: any) => {
    alert("Delete Clicked...");
  }

  const addTargetColumns = getAddTargetCol(handleView, handleDelete);

  const handleRefreshAddTarget = () => {
    setLoadingAddTarget(true);
    setTimeout(() => {
      setLoadingAddTarget(false);
      setAddTargetData((prev) => [...prev]); // refresh same data
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
          <AddTargetForm />
        </div>
      </div>
      <Table
        rows={addTargetData}
        columns={addTargetColumns}
        onRefresh={handleRefreshAddTarget}
        loading={loadingAddTarget}
        showPagination
        rowsPerPage={3}
      />
      <div className='flex justify-center'>
        <Button>Save</Button>
      </div>
    </div>
  )
}

export default AddTarget