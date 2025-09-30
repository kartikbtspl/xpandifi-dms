"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React from 'react'
import NewSchemeForm from './components/NewScemeForm'

function NewSceme() {
  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "Distributor Schemes", href: "/oem/schemes/distributor-scheme" },
          { label: "New Scheme", href: "/oem/schemes/distributor-scheme/new-scheme" },
        ]}
      />
      <h1 className="text-3xl text-[#445E94] font-semibold">
        Distributor Scheme
      </h1>
      <NewSchemeForm />
    </div>
  )
}

export default NewSceme