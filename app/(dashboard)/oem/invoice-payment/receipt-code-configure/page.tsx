"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React from 'react'
import ReceiptCodeForm from './components/ReceiptCodeForm'

function ReceiptCodeConfigure() {
  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "Invoice & Payment", href: "/oem/invoice-payment" },
          { label: "Receipt Code Configure", href: "/oem/invoice-payment/receipt-code-configure" },
        ]}
      />
      <h1 className="text-3xl font-semibold text-[#445E94]">Receipt Code Configure</h1>
      <ReceiptCodeForm />
    </div>
  )
}

export default ReceiptCodeConfigure