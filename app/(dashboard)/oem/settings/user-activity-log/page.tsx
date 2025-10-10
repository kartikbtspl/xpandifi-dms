"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React, { useState } from 'react'
import UserActivityLogForm from './components/UserActivityLogForm'
import Table from '@/components/common/table/Table'
import Button from '@/components/common/ui/Button'
import { FiUpload } from 'react-icons/fi'
import getUserActivityLogCol from './components/getUserActivityLogCol'

const UserActivityLog = () => {
  const [userActivityData, setUserActivityData] = useState([
    {
      id: 1,
      srNo: "01",
      message: "",
      notificationType: "",
      createdDate: "",
      timeDifference: "",
    },
    {
      id: 2,
      srNo: "02",
      message: "",
      notificationType: "",
      createdDate: "",
      timeDifference: "",
    },
    {
      id: 3,
      srNo: "03",
      message: "",
      notificationType: "",
      createdDate: "",
      timeDifference: "",
    },
    {
      id: 4,
      srNo: "04",
      message: "",
      notificationType: "",
      createdDate: "",
      timeDifference: "",
    },
    {
      id: 5,
      srNo: "05",
      message: "",
      notificationType: "",
      createdDate: "",
      timeDifference: "",
    }
  ]);

  const [loadingUserActivity, setLoadingUserActivity] = useState(false);

  const handleView = (row: any) => {
    alert("View Clicked...")
  };

  const userActivityColumns = getUserActivityLogCol();

  const handleRefreshUserActivity = () => {
    setLoadingUserActivity(true);
    setTimeout(() => {
      setLoadingUserActivity(false);
      setUserActivityData((prev) => [...prev]); // refresh same data
    }, 1000);
  };
  return (
    <div className='space-y-4 '>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "Settings", isClickable: false },
          { label: "USer Activity Log", href: "/oem/settings/user-activity-log" },
        ]}
      />
      <h1 className="text-3xl font-semibold text-[#445E94]">USer Activity Log</h1>
      <div className="space-y-4 rounded-lg bg-white shadow-sm">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">Add NSR</h1>
        </div>
        <hr className="text-gray-200" />
        <div className="">
          <UserActivityLogForm />
        </div>
      </div>
      <div className="space-y-4 rounded-lg bg-white shadow-sm">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">
            Visit List
          </h1>
          <Button className='cursor-pointer' startIcon={<FiUpload />}>Export</Button>
        </div>
        <hr className="text-gray-200" />
        <div className="px-6 py-4">
          <Table
            rows={userActivityData}
            columns={userActivityColumns}
            onRefresh={handleRefreshUserActivity}
            loading={loadingUserActivity}
            showPagination
            rowsPerPage={3}
          />
        </div>
      </div>
    </div>
  )
}

export default UserActivityLog