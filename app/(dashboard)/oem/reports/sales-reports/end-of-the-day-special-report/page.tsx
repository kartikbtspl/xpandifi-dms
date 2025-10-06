"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React, { useState } from 'react'
import EndOfTheDayForm from './components/EndOfTheDayForm'
import Button from '@/components/common/ui/Button'
import { FiShare } from 'react-icons/fi'
import getEndOfTheDayCol from "./components/getEndOfTheDayCol"
import Table from '@/components/common/table/Table'

const EndOfTheDaySpecialeport = () => {

   const [endOfTheDayData, setEndOfTheDayData] = useState([
      {
        id: 1,
        cutsomer: "-",
        date: "-",
        assignTo: "-",
        status: "-",
        total: "-"
      },
    ])
  
    const [loadingEndOfTheDay, setLoadingEndOfTheDay] = useState(false);
  
    const endOfTheDayColumns = getEndOfTheDayCol();
  
    const handleRefreshEndOfTheDay = () => {
      setLoadingEndOfTheDay(true);
      setTimeout(() => {
        setLoadingEndOfTheDay(false);
        setEndOfTheDayData((prev) => [...prev]); // refresh same data
      }, 1000);
    };

  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "Sales Reports", isClickable: false },
          { label: "End Of The Day Special Report", href: "/oem/reports/sales-reports/end-of-the-day-special-report" },
        ]}
      />
      <h1 className="text-3xl font-semibold text-[#445E94]">End Of The Day Special Report</h1>
      <div className="space-y-4 rounded-lg bg-white">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">Daily Sales Order Report</h1>
        </div>
        <hr className="text-gray-200" />
        <div className="px-6 py-4">
          <EndOfTheDayForm />
        </div>
      </div>
      <div className="space-y-4 rounded-lg bg-white">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">
            Total Amount = 0 INR  
          </h1>
          <div className='flex gap-3'>
            <Button startIcon={<FiShare />} className="cursor-pointer">Export</Button>
          </div>
        </div>
        <hr className="text-gray-200" />

        <div className="px-6 py-4">
          <Table
            rows={endOfTheDayData}
            columns={endOfTheDayColumns}
            onRefresh={handleRefreshEndOfTheDay}
            loading={loadingEndOfTheDay}
            showPagination
            rowsPerPage={3}
          />
        </div>
      </div>
    </div>
  )
}

export default EndOfTheDaySpecialeport