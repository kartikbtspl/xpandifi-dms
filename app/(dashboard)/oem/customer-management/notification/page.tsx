"use client"
import React, { useState } from 'react'
import BreadCrumb from '@/components/common/ui/BreadCrumb'
import getCustomerNotificationCol from './components/customerNotificationCol'
import Table from '@/components/common/table/Table'

const Notification = () => {

    const [searchData, setSearchData] = useState([
      {
        id : 1,
        srNo: 1,
        customerName: "Shreyash",
        email: "shreyash@gmail.com",
        mobileNo: "9876543210",
      },
      {
        id : 2,
        srNo: 2,
        customerName: "Hashal",
        email: "hashal@gmail.com",
        mobileNo: "9876543210",
      },
      {
        id : 3,
        srNo: 3,
        customerName: "Nikhil",
        email: "nikhil@gmail.com",
        mobileNo: "9876543210",
      },

    ])

    const notificationColumns = getCustomerNotificationCol();

  const [loadingNotification, setLoadingNotification] = useState(false);

  const handleRefreshNotification = () => {
    setLoadingNotification(true);
    setTimeout(() => {
      setLoadingNotification(false);
      setSearchData(searchData);
    }, 1000);
  };

  return (
   <div className='space-y-6'>
    <BreadCrumb 
    crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "Customer Management", href: "/oem/customer-management" },
          { label: "Customer Notification", href: "/oem/customer-management/notification" },
        ]}/>
      <h1 className="text-3xl text-[#5D6F9E] font-bold mb-4">Customer Notification</h1>
      <Table rows={searchData} columns={notificationColumns} onRefresh={handleRefreshNotification} loading = {loadingNotification} filterKey="customerName" rowsPerPage={3}/>
    </div>
  )
}

export default Notification