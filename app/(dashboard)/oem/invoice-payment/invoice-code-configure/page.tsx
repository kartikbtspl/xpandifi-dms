import React from 'react'
import InvoiceCodeConfigForm from './components/InvoiceCodeConfigForm'
import Breadcrumb from '@/components/common/ui/BreadCrumb'

const InvoiceCodeConfigure = () => {
  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem" },
          { label: "Invoice & Payment", href: "/oem/invoice-payment" },
          {
            label: "Invoice Code Configure",
            href: "/oem/invoice-payment/invoice-code-configure",
          },
        ]}
      />
      <h1 className="text-3xl text-[#445E94] font-semibold mb-4">Invoice Code Configure</h1>
      <InvoiceCodeConfigForm />
    </div>
  )
}

export default InvoiceCodeConfigure