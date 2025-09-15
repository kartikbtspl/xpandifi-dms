"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React from 'react'
import ToggleProducts from "./components/ToggleProducts"

const Configuration = () => {
  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem" },
          { label: "Product Configuration", href: "/oem/product-management" },
          { label: "Manage Tax", href: "/oem/product-management/configuration" },
        ]}
      />
      <h1 className='text-3xl text-[#445E94] font-semibold'>Product Configuation</h1>
      <ToggleProducts />
    </div>
  )
}

export default Configuration