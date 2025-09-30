"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React, { useState } from 'react'
import ClubSalesOrderForm from './components/ClubSalesOrderForm'
import Table from '@/components/common/table/Table'
import getClubSalesOrderCol from './components/getClubSalesOrderCol'

const ClubSalesOrder = () => {

  const [clubSalesOrderData, setClubSalesOrderData] = useState([
    {
      id: 1,
      srNo: "01",
      select: "ABC",
      salesOrderID: "PQR",
      customer: "-",
      date: "2024/07/17 19:05:28",
      total: "pending",
      tonnage: "-",
      vehiclelNo: "-",
      route: "-",
      description: "-",
      shipToParty: "-"
    },
    {
      id: 2,
      srNo: "02",
      select: "ABC",
      salesOrderID: "PQR",
      customer: "-",
      date: "2024/07/17 19:05:28",
      total: "pending",
      tonnage: "-",
      vehiclelNo: "-",
      route: "-",
      description: "-",
      shipToParty: "-"
    },
    {
      id: 3,
      srNo: "03",
      select: "ABC",
      salesOrderID: "PQR",
      customer: "-",
      date: "2024/07/17 19:05:28",
      total: "pending",
      tonnage: "-",
      vehiclelNo: "-",
      route: "-",
      description: "-",
      shipToParty: "-"
    },
  ]);

  const [loadingClubSalesOrder, setLoadingClubSalesOrder] = useState(false);

  const clubSalesOrderColumns = getClubSalesOrderCol();

  const handleRefreshClubSalesOrder = () => {
        setLoadingClubSalesOrder(true);
        setTimeout(() => {
          setLoadingClubSalesOrder(false);
          setClubSalesOrderData((prev) => [...prev]); // refresh but same data
        }, 1000);
      };

  return (
    <div className='space-y-4'>
      <div className='space-y-4'>
        <Breadcrumb
          crumbs={[
            { label: "Home", href: "/oem/dashboard" },
            { label: "Sales Order Workflow", href: "/oem/sales-order-workflow" },
            { label: "Club Sales Order", href: "/oem/sales-order-workflow/club-sales-order" },
          ]}
        />
        <h1 className="text-3xl font-semibold text-[#445E94]">Club Sales Order</h1>
        <ClubSalesOrderForm />
        <div className="space-y-4 rounded-lg bg-white">
          <div className="flex justify-between px-6 pt-4">
            <h1 className="text-xl text-[#445E94]">Club Sales Order List</h1>
          </div>
          <hr className="text-gray-200" />

          <div className="px-6">
            <Table
            rows={clubSalesOrderData}
            columns={clubSalesOrderColumns}
            onRefresh={handleRefreshClubSalesOrder}
            loading={loadingClubSalesOrder}
            showPagination
            rowsPerPage={3}
          />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClubSalesOrder