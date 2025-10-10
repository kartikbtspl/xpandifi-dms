"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React from 'react'
import ManageAccountForm from './components/ManageAccountForm'
import ToggleManageAccount from './components/ToggleManageAccount'
import Button from '@/components/common/ui/Button'

const ManageAccount = () => {
  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "Settings", isClickable: false },
          { label: "Manage Account", href: "/oem/settings/manage-account" },
        ]}
      />
      <h1 className="text-3xl font-semibold text-[#445E94]">Manage Account</h1>
      <div className="space-y-4 rounded-lg bg-white shadow-sm">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">Company Account Details</h1>
        </div>
        <hr className="text-gray-200" />
        <div className="">
          <ManageAccountForm />
        </div>
      </div>
      <ToggleManageAccount />
      <div className='flex justify-center gap-3'>
        <Button className='cursor-pointer'>Save</Button>
        <Button variant='outline' className='cursor-pointer'>Cancel</Button>
      </div>
    </div>
  )
}

export default ManageAccount