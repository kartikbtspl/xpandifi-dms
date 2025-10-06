"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React from 'react'
import ReceiptCodeConfigurationForm from './components/ReceiptCodeConfigurationForm'

const ReceiptCodeConfigure = () => {
  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "Code Configure", isClickable: false },
          { label: "Receipt Code Configuration", href: "/oem/code-configure/receipt-code-configure" },
        ]}
      />
      <h1 className="text-3xl font-semibold text-[#445E94]">Receipt Code Configuration</h1>
      <div className="space-y-4 rounded-lg bg-white">
              <div className="flex justify-between px-6 pt-4">
                <h1 className="text-xl text-[#445E94]">Receipt Code Configuration</h1>
              </div>
              <hr className="text-gray-200" />
              <div className="px-6 py-4">
                <ReceiptCodeConfigurationForm />
              </div>
            </div>
    </div>
  )
}

export default ReceiptCodeConfigure