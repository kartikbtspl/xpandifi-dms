'use client'

import { useState } from "react"
import { FaBuilding, FaHashtag, FaCalendarAlt, FaUser, FaClipboardList, FaRupeeSign, FaFileInvoice, FaReceipt } from "react-icons/fa";

export default function EditInvoiceNotes() {

  const [invoiceDetailData, setInvoiceDetailData] = useState([
    {
      icon: <FaBuilding/>,
      title: "Customer Name",
      value: "Raj Kumar"
    },
    {
      icon: <FaHashtag />,
      title: "Invoice No",
      value: "3113"
    },
    {
      icon: <FaCalendarAlt  />,
      title: "Invoice Date",
      value: "14-08-2025"
    },
    {
      icon: <FaClipboardList  />,
      title: "Sales Order No",
      value: "2192"
    },
    {
      icon: <FaFileInvoice  />,
      title: "Total Amount",
      value: "2000.0"
    },
    {
      icon: <FaReceipt  />,
      title: "Paid Amount",
      value: "2000.0"
    },
    {
      icon: <FaRupeeSign  />,
      title: "Due Amount",
      value: "2000.0"
    },
    {
      icon: <FaUser  />,
      title: "Payment Status",
      value: "Pending"
    },
  ])

  return (
    <div className="p-3 bg-white rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Invoice Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {invoiceDetailData.map((item, index) => (
          <div key={index} className="flex items-start bg-[#F8FAFB] p-4 rounded-lg">
            <div className="text-sm mr-3 mt-3 text-[#445E94] ">{item.icon}</div>
            <div>
              <p className="text-sm text-gray-500">{item.title}</p>
              <p className="font-semibold">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
