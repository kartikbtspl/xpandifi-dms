"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React from 'react'
import AddNewHolidayForm from './components/AddNewHolidayForm'

function AddNewHoliday() {

  const handleFormSubmit = (data: any) => {
    console.log("Form submitted data:", data)
    // 🔼 You can save this in state, call API, etc.
  }
  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem" },
          { label: "HR Management", href: "/oem/hr-management" },
          {
            label: "Holiday List",
            href: "/oem/hr-management/holiday-list",
          },
        ]}
      />
      <h1 className="text-3xl font-semibold text-[#445E94]">Add Holiday</h1>
      <AddNewHolidayForm onSubmitData={handleFormSubmit} />
    </div>
  )
}

export default AddNewHoliday