"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React, { useState } from 'react'
import PlannedVisitForm from './components/PlannedVisitForm'
import Button from '@/components/common/ui/Button'
import { FiUpload } from 'react-icons/fi'
import Table from '@/components/common/table/Table'
import getPlannedVisitCol from "./components/getPlannedVisitCol"

const PlannedVisitReports = () => {
  const [plannedVisitListData, setPlannedVisitListData] = useState([
    {
      id: 1,
      srNo: "01",
      userName: "",
      customer: "",
      plannedDetails: "",
      createdAt: "",
      planDate: "",
      address: "",
    },
    {
      id: 2,
      srNo: "02",
      userName: "",
      customer: "",
      plannedDetails: "",
      createdAt: "",
      planDate: "",
      address: "",
    },
    {
      id: 3,
      srNo: "03",
      userName: "",
      customer: "",
      plannedDetails: "",
      createdAt: "",
      planDate: "",
      address: "",
    },
    {
      id: 4,
      srNo: "04",
      userName: "",
      customer: "",
      plannedDetails: "",
      createdAt: "",
      planDate: "",
      address: "",
    },
    {
      id: 5,
      srNo: "05",
      userName: "",
      customer: "",
      plannedDetails: "",
      createdAt: "",
      planDate: "",
      address: "",
    }
  ]);

  const [loadingPlannedVisitReport, setLoadingPalnnedVisitReport] = useState(false);

  const plannedVisitColumns = getPlannedVisitCol();

  const handleRefreshPlannedVisit = () => {
    setLoadingPalnnedVisitReport(true);
    setTimeout(() => {
      setLoadingPalnnedVisitReport(false);
      setPlannedVisitListData((prev) => [...prev]); // refresh same data
    }, 1000);
  };
  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "Visit Reports", isClickable: false },
          { label: "Planned Visit Reports", href: "/oem/reports/location-reports/planned-visit-reports" },
        ]}
      />
      <h1 className="text-3xl font-semibold text-[#445E94]">Planned Visit Reports</h1>
      <div className="space-y-4 rounded-lg bg-white shadow-sm">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">Planned Visit Reports</h1>
        </div>
        <hr className="text-gray-200" />
        <div className="">
          <PlannedVisitForm />
        </div>
      </div>
      <div className="space-y-4 rounded-lg bg-white shadow-sm">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">
            Planned Visit List
          </h1>
          <Button className='cursor-pointer' startIcon={<FiUpload />}>Export</Button>
        </div>
        <hr className="text-gray-200" />
        <div className="px-6 py-4">
          <Table
            rows={plannedVisitListData}
            columns={plannedVisitColumns}
            onRefresh={handleRefreshPlannedVisit}
            loading={loadingPlannedVisitReport}
            showPagination
            rowsPerPage={3}
          />
        </div>
      </div>
    </div>
  )
}

export default PlannedVisitReports