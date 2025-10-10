"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React, { useState } from 'react'
import NsrMasterForm from './components/NsrMasterForm'
import Table from '@/components/common/table/Table';
import getNsrMasterCol from './components/getNsrMasterCol';

function NSRMaster() {

  const [nsrMasterData, setNsrMasterData] = useState([
      {
        id: 1,
        srNo: "01",
        complaintName: "",
      },
      {
        id: 2,
        srNo: "02",
        complaintName: "",
      },
    ]);
  
    const [loadingNsrMaster, setLoadingNsrMaster] = useState(false);

    const handleEdit = (row: any) => {
      alert(`Edit clicked for row with id: ${row.id}`);
    }
    const handleDelete = (row: any) => {
      alert(`Delete clicked for row with id: ${row.id}`); 
    }
  
    const nsrMasterColumns = getNsrMasterCol(handleEdit, handleDelete)
  
    const handleRefreshNsrMaster = () => {
      setLoadingNsrMaster(true);
      setTimeout(() => {
        setLoadingNsrMaster(false);
        setNsrMasterData(prev => prev.map((item, idx) => ({ ...item, srNo: String(idx + 1) })));
      }, 1000);
    };

  const handleAdd = () => {
    alert("Add clicked...")
  };
  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "Settings", isClickable: false },
          { label: "NSR Master", href: "/oem/settings/nsr-master" },
        ]}
      />
      <h1 className="text-3xl font-semibold text-[#445E94]">NSR Master</h1>
      <div className="space-y-4 rounded-lg bg-white shadow-sm">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">Add NSR</h1>
        </div>
        <hr className="text-gray-200" />
        <div className="">
          <NsrMasterForm onAdd={handleAdd} />
        </div>
      </div>
      <div className="space-y-4 rounded-lg bg-white shadow-sm">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">Complaint Type List</h1>
        </div>
        <hr className="text-gray-200" />
        <div className="px-6 py-4">
          <Table
            rows={nsrMasterData}
            columns={nsrMasterColumns}
            onRefresh={handleRefreshNsrMaster}
            loading={loadingNsrMaster}
            showPagination
            rowsPerPage={3}
          />
        </div>
      </div>
    </div>
  )
}

export default NSRMaster