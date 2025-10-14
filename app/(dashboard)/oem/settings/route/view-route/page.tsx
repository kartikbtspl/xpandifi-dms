"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React from 'react'
import ViewRouteForm from './components/ViewRouteForm'

function ViewRoute() {
  const handleBack = () => {
    history.back()
  }
  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "Settings", isClickable: false },
          { label: "Route", href: "/oem/settings/route" },
        ]}
      />
      <h1 className="text-3xl font-semibold text-[#445E94]">Route</h1>
      <ViewRouteForm onBack={handleBack}/>
    </div>
  )
}

export default ViewRoute