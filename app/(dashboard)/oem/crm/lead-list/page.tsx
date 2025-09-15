import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React from 'react'
import LeadListForm from './components/LeadListForm'
import StatusRadioGroup from './components/StatusRadioGroup'
import LeadListTable from "./components/LeadListTable"

const LeadList = () => {
  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem" },
          { label: "CRM", href: "/oem/crm" },
          { label: "Manage Lead Types", href: "/oem/crm/manage-lead-types" },
        ]}
      />
      <h1 className="text-3xl font-bold mb-4 text-[#5D6F9E]">Lead List</h1>
      <StatusRadioGroup />
      <LeadListForm />
      <LeadListTable />
    </div>
  )
}

export default LeadList