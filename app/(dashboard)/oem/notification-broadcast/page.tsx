"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React from 'react'
import NotificationBroadcastForm from './components/NotificationBroadcastForm'

const NotificationBroadcast = () => {
  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "Notification Broadcast", href: "/oem/notification-broadcast" },
        ]}
      />
      <h1 className="text-3xl font-semibold text-[#445E94]">Notification Broadcast</h1>
      <div className="space-y-4 rounded-lg bg-white shadow-sm">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">Notification Broadcast</h1>
        </div>
        <hr className="text-gray-200" />
        <div className="">
          <NotificationBroadcastForm />
        </div>
      </div>
    </div>
  )
}

export default NotificationBroadcast
