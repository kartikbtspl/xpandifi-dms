import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React from 'react'
import BeatReportPieChart from './components/BeatReportPieChart'

const BeatPlanList = () => {
  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem" },
          { label: "Beat Plan", href: "/oem/beat-plan" },
          { label: "Beat Plan List", href: "/oem/beat-plan/best-plan-list" },
        ]}
      />
      <h1 className="text-3xl text-[#445E94] font-semibold">
        Beat Report List
      </h1>
      <BeatReportPieChart />
    </div>
  )
}

export default BeatPlanList