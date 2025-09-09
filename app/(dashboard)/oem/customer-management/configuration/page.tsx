import React from 'react'
import Tabs from './components/Tabs'
import Breadcrumb from '@/components/common/ui/BreadCrumb'

const Configuration = () => {
  return (
    <div className='space-y-6'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/dashboard" },
          { label: "Customer Management", href: "/customer-management" },
          { label: "Customer Configuration", href: "/customer-management/configuration" },
        ]}
      />
      <Tabs />
    </div>
  )
}

export default Configuration