import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React from 'react'
import AddOpportunityForm from './components/AddOpportunityForm'

function AddOpportunity() {
  return (
    <div className='space-y-4'>
       <Breadcrumb
              crumbs={[
                { label: "Home", href: "/oem" },
                { label: "CRM", href: "/oem/crm" },
                { label: "Opportunity List", href: "/oem/crm/opportunity-list" },
              ]}
        />
        <h1 className="text-3xl font-bold text-[#445E94]">Opportunity List</h1>
      <AddOpportunityForm />
    </div>
  )
}

export default AddOpportunity