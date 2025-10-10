"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React from 'react'
import RenewalRequestForm from './components/RenewalRequestForm'

const RenewalRequest = () => {

  const handleSave = (data: any) => {
    console.log("Saved data:", data);
    alert("Saved data: " + JSON.stringify(data, null, 2));
  }

  return (
    <div className='space-y-4 '>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "Settings", isClickable: false },
          { label: "Renewal Request", href: "/oem/settings/renewal-request" },
        ]}
      />
      <h1 className="text-3xl font-semibold text-[#445E94]">Renewal Request</h1>
      <div className="space-y-4 rounded-lg bg-white shadow-sm">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">Add NSR</h1>
        </div>
        <hr className="text-gray-200" />
        <div className="">
          <RenewalRequestForm onSave={handleSave} />
        </div>
      </div>
    </div>
  )
}

export default RenewalRequest