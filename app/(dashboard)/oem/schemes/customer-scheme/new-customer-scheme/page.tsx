"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React from 'react'
import NewCustomerSchemeForm from './components/NewCustomerSchemeForm'

function NewCustomerScheme() {
  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem" },
          { label: "Customer Schemes", href: "/oem/schemes/customer-scheme" },
          { label: "New Customer Scheme", href: "/oem/schemes/customer-scheme/new-customer-scheme" },
        ]}
      />
      <h1 className="text-3xl text-[#445E94] font-semibold">
        Customer Scheme
      </h1>
      <NewCustomerSchemeForm />
    </div>
  )
}

export default NewCustomerScheme