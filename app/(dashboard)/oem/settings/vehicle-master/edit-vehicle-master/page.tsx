"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React from 'react'
import EditVehicleForm from './components/EditVehicleForm'

function EditVehicleMaster() {
  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "Settings", isClickable: false },
          { label: "Vehicle Master", href: "/oem/settings/vehicle-master" },
        ]}
      />
      <h1 className="text-3xl font-semibold text-[#445E94]">Vehicle Master</h1>
      <div className="space-y-4 rounded-lg bg-white shadow-sm">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">Edit Manage Vehicle</h1>
        </div>
        <hr className="text-gray-200" />
        <div className="">
          <EditVehicleForm />
        </div>
      </div>
    </div>
  )
}

export default EditVehicleMaster