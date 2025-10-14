"use client"
import Table from '@/components/common/table/Table'
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React, { useState } from 'react'
import getProfilesCol from './components/getProfilesCol'
import { useRouter } from 'next/navigation'
import Button from '@/components/common/ui/Button'

function Profiles() {

  const [profileData, setProfileData] = useState([
    {
      id: 1,
      srNo: "01",
      profileName: "Read Only",
      action: "",
      disableDelete: true
    },
    {
      id: 2,
      srNo: "02",
      profileName: "Admin",
      action: "",
      disableDelete: true
    },
  ])

  const router = useRouter();

  const [loadingProfiles, setLoadingProfiles] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>(null);

  const handleEdit = (row: any) => {
    router.push(`/oem/settings/profiles/edit-profiles?profileName=${encodeURIComponent(row.profileName)}`);
  }

  const handleDeleteClick = (row: any) => {
    setSelectedRow(row);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    setProfileData(prev => {
      const newData = prev.filter(item => item.id !== selectedRow.id);
      return newData.map((item, idx) => ({ ...item, srNo: String(idx + 1) }));
    });
    setIsDeleteModalOpen(false);
    setSelectedRow(null);
  };

  const profileColumns = getProfilesCol(handleEdit, handleDeleteClick);

  const handleRefreshProfiles = () => {
    setLoadingProfiles(true);
    setTimeout(() => {
      setLoadingProfiles(false);
      setProfileData(prev => prev.map((item, idx) => ({ ...item, srNo: String(idx + 1) })));
    }, 1000);
  };

  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "Settings", isClickable: false },
          { label: "Profiles", href: "/oem/settings/profiles" },
        ]}
      />
      <h1 className="text-3xl font-semibold text-[#445E94]">Profiles</h1>
      <div className="space-y-4 rounded-lg bg-white shadow-sm">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">Profile List</h1>
          <Button onClick={() => router.push('/oem/settings/profiles/add-profile')}><span className='text-xl mr-3'>+</span>Add Profile</Button>
        </div>
        <hr className="text-gray-200" />
        <div className="px-6 py-4">
          <Table
            rows={profileData}
            columns={profileColumns}
            onRefresh={handleRefreshProfiles}
            loading={loadingProfiles}
            showPagination
            rowsPerPage={3}
          />
        </div>
      </div>
    </div>
  )
}

export default Profiles