"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React from 'react'
import AddNewBeatForm from './components/AddNewBeatForm'

function AddNewBeat() {
  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "Beat Plan", href: "/oem/beat-plan" },
          { label: "Beat Plan List", href: "/oem/beat-plan/best-plan-list" },
        ]}
      />
      <h1 className="text-3xl text-[#445E94] font-semibold">
        Beat Report List
      </h1>
      <AddNewBeatForm />
      
    </div>
  )
}

export default AddNewBeat