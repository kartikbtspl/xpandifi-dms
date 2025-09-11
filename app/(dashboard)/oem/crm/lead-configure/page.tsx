"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React from 'react'
import LeadTabs from './components/LeadTabs'

const LeadConfigure = () => {
  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem" },
          { label: "CRM", href: "/oem/crm" },
          { label: "Lead Configure", href: "/oem/crm/lead-configure" },
        ]}
      />
      <h1 className="text-3xl font-bold text-[#445E94]">Lead Configure</h1>
      <LeadTabs />
    </div>
  )
}

export default LeadConfigure