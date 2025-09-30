"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React, { useState } from 'react'
import BarChartCards from './components/BarChartCards'
import UsersForm from './components/UsersForm'
import Button from '@/components/common/ui/Button'
import getUserCol from './components/getUserCol'
import Table from '@/components/common/table/Table'

const Users = () => {
  const activeUsersData = [
    {
      id: 1,
      srNo: "01",
      userName: "John Doe",
      role: "Manager",
      mobileNo: "1234567890",
      zone: "East",
      state: "Active",
      city: "City A",
      distributorCode: "Dist01",
      reportingManager: "Manager A",
      reportingManagerRole: "Senior Manager",
      loginDetails: "09:00 AM",
      mobileDetails: "Enabled",
      mobilePermission: "Granted"
    }
  ];

  const archiveUsersData = [
    {
      id: 2,
      srNo: "02",
      userName: "Jane Smith",
      role: "Supervisor",
      mobileNo: "0987654321",
      zone: "West",
      state: "Archived",
      city: "City B",
      distributorCode: "Dist02",
      reportingManager: "Manager B",
      reportingManagerRole: "Senior Manager",
      loginDetails: "10:00 AM",
      mobileDetails: "Disabled",
      mobilePermission: "Revoked"
    }
  ];

  const [showArchive, setShowArchive] = useState(false);
  const [usersData, setUsersData] = useState(activeUsersData);
  const [loadingUsersData, setLoadingUsersData] = useState(false);
  const [isMultiArchiveActive, setIsMultiArchiveActive] = useState(false);
  const userColumns = getUserCol();

  const handleSearch = () => {
    alert("search clicked...");
  };

  const handleRefreshUsers = () => {
    setLoadingUsersData(true);
    setTimeout(() => {
      setLoadingUsersData(false);
      setUsersData(showArchive ? archiveUsersData : activeUsersData);
    }, 1000);
  };

  const toggleUserView = () => {
    setShowArchive(!showArchive);
    setIsMultiArchiveActive(false);
    setUsersData(showArchive ? activeUsersData : archiveUsersData);
  };

  const toggleMultiArchive = () => {
    setIsMultiArchiveActive(!isMultiArchiveActive);
    setShowArchive(false);
    // Add your handling for Multi Archive Users data here, currently placeholder data
    // setUsersData(multiArchiveUsersData);
  };

  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "HR Management", isClickable: false },
          {
            label: "User",
            href: "/oem/hr-management/users",
          },
        ]}
      />

      <h1 className="text-3xl font-semibold text-[#445E94]">
        Users
      </h1>
      <BarChartCards
        title="User Login Details"
        data={[{ name: "Category A", value: 2 }]}
        barColor="#7085c5"
      />
      <UsersForm onSearch={handleSearch} />
      <div className='flex justify-end'>
        <Button><span className='text-xl mr-3'>+</span>Add Users</Button>
      </div>

      <div className='w-full rounded-full bg-white'>
        <div className='flex p-1 gap-2'>
          <button 
            onClick={toggleUserView}
            className={`px-4 py-2 rounded-full cursor-pointer ${
              showArchive ? "bg-[#445E94] text-white" : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            {showArchive ? "Show Active Users" : "Show Archive Users"}
          </button>
          <button
            onClick={toggleMultiArchive}
            className={`px-4 py-2 rounded-full cursor-pointer ${
              isMultiArchiveActive ? "bg-[#445E94] text-white" : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Multi Archive Users
          </button>
        </div>
      </div>

      <div className="space-y-4 rounded-lg bg-white">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">{showArchive ? "Archive Users" : "Active Users"}</h1>
        </div>
        <hr className="text-gray-200" />
        <div className="px-6 py-4 w-[1200px] overflow-x-auto">
          <Table
            rows={usersData}
            columns={userColumns}
            onRefresh={handleRefreshUsers}
            loading={loadingUsersData}
            showPagination
            rowsPerPage={2}
          />
        </div>
      </div>
    </div>
  )
}

export default Users;
