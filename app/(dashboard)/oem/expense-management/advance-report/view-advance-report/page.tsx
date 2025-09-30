"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React from 'react'
import ViewAdvanceForm from './components/ViewAdvanceForm'

function ViewAdvanceReport() {
  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "Expense Management", href: "/oem/expense-management" },
          {
            label: "Advanced Report",
            href: "/oem/expense-management/advance-report",
          },
        ]}
      />
      <h1 className="text-3xl text-[#445E94] font-semibold">Advanced Report</h1>
      <ViewAdvanceForm />
    </div>
  )
}

export default ViewAdvanceReport