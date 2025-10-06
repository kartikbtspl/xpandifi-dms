"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React from 'react'
import VisitDeviationRepotForm from './componentns/VisitDeviationRepotForm'
import VisitDeviationBarChart from './componentns/VisitDeviationBarChart'

const VisitDurationReports = () => {
  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "Sales Reports", isClickable: false },
          { label: "Visit Deviation Report", href: "/oem/reports/sales-reports/end-of-the-day-special-report" },
        ]}
      />
      <h1 className="text-3xl font-semibold text-[#445E94]">Visit Deviation Report</h1>
      <div className="space-y-4 rounded-lg bg-white">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">Daily Sales Order Report</h1>
        </div>
        <hr className="text-gray-200" />
        <div className="px-6 py-4">
          <VisitDeviationRepotForm />
        </div>
      </div>
      <VisitDeviationBarChart title="Visit Deviation Report"
        data={[{ name: "customers", value: 2 }]}
        barColor="#7085c5" />
    </div>
  )
}

export default VisitDurationReports