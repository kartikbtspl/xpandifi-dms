"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import Button from '@/components/common/ui/Button'
import React, { useState } from 'react'
import WebPermissions from './components/WebPermissions'
import AddProfileForm from './components/AddProfileForm'

function AddProfile() {
  const [profileName, setProfileName] = useState("");
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
          <h1 className="text-xl text-[#445E94]">Add Profile</h1>
        </div>
        <hr className="text-gray-200" />
        <div className="">
          <AddProfileForm profileName={profileName} setProfileName={setProfileName} />
        </div>
      </div>
      <div className='bg-white rounded-full p-1 shadow-sm'>
        <Button>Web Permissions</Button>
      </div>
      <div>
        <WebPermissions profileName={profileName} setProfileName={setProfileName} />
      </div>
    </div>
  )
}

export default AddProfile