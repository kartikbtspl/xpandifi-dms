"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React, { useState } from 'react'
import Table from '@/components/common/table/Table';
import getViewTargetCol from "./components/getViewTargetCol"

function ViewTarget() {

  const [viewTargetData, setViewTargetData] = useState([
    {
      id: 1,
      srNo: "01",
      categoryName: "Shreyash",
      categoryVolume: "20000.0"
    },
    {
      id: 2,
      srNo: "02",
      categoryName: "Nikhil",
      categoryVolume: "20000.0"
    },
    {
      id: 3,
      srNo: "03",
      categoryName: "Harshal",
      categoryVolume: "20000.0"
    },
    {
      id: 4,
      srNo: "04",
      categoryName: "Devashish",
      categoryVolume: "20000.0"
    },
    {
      id: 5,
      srNo: "05",
      categoryName: "Kartik",
      categoryVolume: "20000.0"
    },
  ]);

  const [loadingViewTarget, setLoadingViewTarget] = useState(false);

  const viewTargetColumns = getViewTargetCol();

  const handleRefreshViewTarget = () => {
    setLoadingViewTarget(true);
    setTimeout(() => {
      setLoadingViewTarget(false);
      setViewTargetData((prev) => [...prev]); // refresh same data
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
          <h1 className="text-xl text-[#445E94]">
            Demo Manager - Category List
          </h1>
        </div>
        <hr className="text-gray-200" />

        <div className="px-6 ">
          <Table
            rows={viewTargetData}
            columns={viewTargetColumns}
            onRefresh={handleRefreshViewTarget}
            loading={loadingViewTarget}
            showPagination
            rowsPerPage={3}
          />
        </div>
      </div>
    </div>
  )
}

export default ViewTarget