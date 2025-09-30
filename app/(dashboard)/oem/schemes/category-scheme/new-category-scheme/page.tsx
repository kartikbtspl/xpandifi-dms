"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React from 'react'
import NewCategorySchemeForm from './components/NewCategorySchemeForm'

function NewCategoryScheme() {
  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "Category Schemes", href: "/oem/schemes/category-scheme" },
          { label: "New Category Scheme", href: "/oem/schemes/category-scheme/new-category-scheme" },
        ]}
      />
      <h1 className="text-3xl text-[#445E94] font-semibold">
        Category Scheme
      </h1>
      <NewCategorySchemeForm />
    </div>
  )
}

export default NewCategoryScheme