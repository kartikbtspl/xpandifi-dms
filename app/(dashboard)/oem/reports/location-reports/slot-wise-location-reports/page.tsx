"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React, { useState } from 'react'
import SlotWiseLocationForm from "./components/SlotWiseLocationForm"
import Button from '@/components/common/ui/Button'
import { FiUpload } from 'react-icons/fi'
import getSlotWiseLocationCol from './components/getSlotWiseLocationCol'
import Table from '@/components/common/table/Table'

const SlotWiseLocationReports = () => {

  const [slotWiseLocationData, setSlotWiseLocationData] = useState([
      {
        id: 1,
        srNo: "01",
        salesPerson: "",
        managerName: "",
        date: "",
        nineToTwelve: "",
        twelveToFifteen: "",
        fifteenToEighteen: "",
        eighteenToAbove: "",
        kmTravelled: ""
      },
      {
        id: 2,
        srNo: "02",
        salesPerson: "",
        managerName: "",
        date: "",
        nineToTwelve: "",
        twelveToFifteen: "",
        fifteenToEighteen: "",
        eighteenToAbove: "",
        kmTravelled: ""
      },
      {
        id: 3,
        srNo: "03",
        salesPerson: "",
        managerName: "",
        date: "",
        nineToTwelve: "",
        twelveToFifteen: "",
        fifteenToEighteen: "",
        eighteenToAbove: "",
        kmTravelled: ""
      },
      {
        id: 4,
        srNo: "04",
        salesPerson: "",
        managerName: "",
        date: "",
        nineToTwelve: "",
        twelveToFifteen: "",
        fifteenToEighteen: "",
        eighteenToAbove: "",
        kmTravelled: ""
      },
      {
        id: 5,
        srNo: "05",
        salesPerson: "",
        managerName: "",
        date: "",
        nineToTwelve: "",
        twelveToFifteen: "",
        fifteenToEighteen: "",
        eighteenToAbove: "",
        kmTravelled: ""
      }
    ]);
  
    const [loadingSlotWiseLocationReport, setLoadingSlotWiseLocationReport] = useState(false);
  
    const SlotWiseLocationColumns = getSlotWiseLocationCol();
  
    const handleRefreshSlotWieLocationReport = () => {
      setLoadingSlotWiseLocationReport(true);
      setTimeout(() => {
        setLoadingSlotWiseLocationReport(false);
        setSlotWiseLocationData((prev) => [...prev]); // refresh same data
      }, 1000);
    };

  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "Location Reports", isClickable: false },
          { label: "Slot Wise Location Report", href: "/oem/reports/location-reports/slot-wise-location-reports" },
        ]}
      />
      <h1 className="text-3xl font-semibold text-[#445E94]">Slot Wise Location Report</h1>
      <div className="space-y-4 rounded-lg bg-white shadow-sm">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">Slot Wise Report</h1>
        </div>
        <hr className="text-gray-200" />
        <div className="">
          <SlotWiseLocationForm />
        </div>
      </div>
      <div className="space-y-4 rounded-lg bg-white shadow-sm">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">
            Active Customer List
          </h1>
          <Button className='cursor-pointer' startIcon={<FiUpload />}>Export</Button>
        </div>
        <hr className="text-gray-200" />
        <div className="px-6 py-4">
          <Table
            rows={slotWiseLocationData}
            columns={SlotWiseLocationColumns}
            onRefresh={handleRefreshSlotWieLocationReport}
            loading={loadingSlotWiseLocationReport}
            showPagination
            rowsPerPage={3}
          />
        </div>
      </div>
    </div>
  )
}

export default SlotWiseLocationReports