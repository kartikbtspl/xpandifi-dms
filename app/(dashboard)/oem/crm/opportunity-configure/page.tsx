import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React from 'react'
import ToggleOpportunity from './components/ToggleOpportunity'

const OpportunityConfigure = () => {
  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "CRM", href: "/oem/crm" },
          { label: "Opportunity Configure", href: "/oem/crm/opportunity-configure" },
        ]}
      />
      <h1 className="text-3xl font-bold text-[#445E94]">Opportunity Configure</h1>
      <ToggleOpportunity />
    </div>
  )
}

export default OpportunityConfigure