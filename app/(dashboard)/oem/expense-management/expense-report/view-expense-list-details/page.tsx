import React from 'react'
import ListDetailsForm from './components/ListDetailsForm'
import Breadcrumb from '@/components/common/ui/BreadCrumb'

function ViewExpenseListDetails() {
  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "Expense Management", href: "/oem/expense-management" },
          {
            label: "Advanced Report",
            href: "/oem/expense-management/expense-report",
          },
        ]}
      />
      <h1 className="text-3xl text-[#445E94] font-semibold">Advanced Report</h1>
      <ListDetailsForm />
    </div>
  )
}

export default ViewExpenseListDetails