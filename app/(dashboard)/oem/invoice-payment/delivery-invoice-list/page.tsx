"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React, { useState } from 'react'
import getInvoiceListCol from './components/getInvoiceListCol';
import Table from '@/components/common/table/Table';

const DeliveryInvoiceList = () => {

  const [deliveryInvoiceListData, setDeliveryInvoiceListData] = useState([
    {
      id: 1,
      srNo: "01",
      invoiceId: "23",
      orderNo: "234",
      distributor: "Teamspring",
      createdDate: "16-09-2025 11:49",
      totalAmount: "2340000.00",
      action: ""
    },
    {
      id: 2,
      srNo: "02",
      invoiceId: "24",
      orderNo: "445",
      distributor: "Teamspring",
      createdDate: "16-09-2025 11:49",
      totalAmount: "2340000.00",
      action: ""
    },
    {
      id: 3,
      srNo: "03",
      invoiceId: "20",
      orderNo: "200",
      distributor: "Teamspring",
      createdDate: "16-09-2025 11:49",
      totalAmount: "2340000.00",
      action: ""
    },
  ])

  const [loadingInvoiceList, setLoadingInvoiceList] = useState(false);

  const handleDownload = (row: any) => {
    alert(`Downloading invoice ${row.invoiceId}`);
    // 🔽 Replace this with actual download logic
  };

  const invoiceListColumns = getInvoiceListCol(handleDownload);

  const handleRefreshInvoiceList = () => {
        setLoadingInvoiceList(true);
        setTimeout(() => {
          setLoadingInvoiceList(false);
          setDeliveryInvoiceListData((prev) => [...prev]); // refresh but same data
        }, 1000);
      };

  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem" },
          { label: "Invoice & Payment", href: "/oem/invoice-payment" },
          {
            label: "Delivery Challan List",
            href: "/oem/invoice-payment/delivery-invoice-list",
          },
        ]}
      />
      <h1 className="text-3xl text-[#445E94] font-semibold mb-4">Distributor Invoice List</h1>
      <div className="space-y-4 rounded-lg bg-white">
        {/* Header */}
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">Invoice List</h1>
        </div>

        <hr className="text-gray-200" />

        {/* Table */}
        <div className="px-6 pb-4">
          <Table
            columns={invoiceListColumns}
            rows={deliveryInvoiceListData}
            onRefresh={handleRefreshInvoiceList}
            loading={loadingInvoiceList}
            showPagination
            rowsPerPage={3}
          />
        </div>
      </div>
    </div>
  )
}

export default DeliveryInvoiceList