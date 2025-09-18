"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React from 'react'
import NewProductSchemeForm from './components/NewProductSchemeForm'

function NewSceme() {
  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem" },
          { label: "Product Schemes", href: "/oem/schemes/product-scheme" },
          { label: "New Product Scheme", href: "/oem/schemes/product-scheme/new-product-scheme" },
        ]}
      />
      <h1 className="text-3xl text-[#445E94] font-semibold">
        Product Scheme
      </h1>
      <NewProductSchemeForm />
    </div>
  )
}

export default NewSceme