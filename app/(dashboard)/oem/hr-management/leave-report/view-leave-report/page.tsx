import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React,{Suspense} from 'react'
import ViewLeaveReportForm from './components/ViewLeaveReportForm'

function ViewLeaveReport() {
  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "HR Management", href: "/oem/hr-management" },
          { label: "Leave Report", href: "/oem/hr-management/leave-report" },
        ]}
      />
      <h1 className="text-3xl font-semibold text-[#445E94]">View Leave Details</h1>
      <Suspense fallback={<div className="p-6 text-gray-500">Loading...</div>}>
        <ViewLeaveReportForm />
      </Suspense>
    </div>
  )
}

export default ViewLeaveReport