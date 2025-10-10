"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React, { useState } from 'react'
import ManageComplaintTypeForm from './components/ManageComplaintTypeForm';
import getManageComplaintTypeCol from './components/getManageComplaintTypeCol';
import Table from '@/components/common/table/Table';

const ManageContactType = () => {

  const [manageComplaintTypeData, setManageComplaintTypeData] = useState([
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

  const [loadingManageComplaintType, setLoadingManageComplaintType] = useState(false);

  const manageClassTypeColumns = getManageComplaintTypeCol()

  const handleRefreshManageComplaintType = () => {
    setLoadingManageComplaintType(true);
    setTimeout(() => {
      setLoadingManageComplaintType(false);
      setManageComplaintTypeData(prev => prev.map((item, idx) => ({ ...item, srNo: String(idx + 1) })));
    }, 1000);
  };

  const handleAdd = () => {
    alert("Add clicked...")
  }

  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "Settings", isClickable: false },
          { label: "Manage Complaint Type", href: "/oem/settings/manage-complaint-type" },
        ]}
      />
      <h1 className="text-3xl font-semibold text-[#445E94]">Manage Complaint Type</h1>
      <div className="space-y-4 rounded-lg bg-white shadow-sm">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">Manage Complaint List</h1>
        </div>
        <hr className="text-gray-200" />
        <div className="">
          <ManageComplaintTypeForm onAdd={handleAdd} />
        </div>
      </div>
      <div className="space-y-4 rounded-lg bg-white shadow-sm">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">Complaint Type List</h1>
        </div>
        <hr className="text-gray-200" />
        <div className="px-6 py-4">
          <Table
            rows={manageComplaintTypeData}
            columns={manageClassTypeColumns}
            onRefresh={handleRefreshManageComplaintType}
            loading={loadingManageComplaintType}
            showPagination
            rowsPerPage={3}
          />
        </div>
      </div>
    </div>
  )
}

export default ManageContactType