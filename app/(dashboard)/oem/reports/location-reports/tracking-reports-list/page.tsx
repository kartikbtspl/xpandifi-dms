"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React, { useState } from 'react'
import TrackingReportListForm from './components/TrackingReportListForm'
import Button from '@/components/common/ui/Button'
import { FiUpload } from 'react-icons/fi'
import Table from '@/components/common/table/Table'
import getTrackingReportCol from './components/getTrackingReportCol'

const TrackingReportsTable = () => {

  const [trackingReportsListData, setTrackingReportsListData] = useState([
        {
          id: 1,
          srNo: "01",
          event: "",
          lattitude: "",
          longitude: "",
          createdDate: "",
          address: "",
          apkVersion: "",
        },
        {
          id: 2,
          srNo: "02",
          event: "",
          lattitude: "",
          longitude: "",
          createdDate: "",
          address: "",
          apkVersion: "",
        },
        {
          id: 3,
          srNo: "03",
          event: "",
          lattitude: "",
          longitude: "",
          createdDate: "",
          address: "",
          apkVersion: "",
        },
        {
          id: 4,
          srNo: "04",
          event: "",
          lattitude: "",
          longitude: "",
          createdDate: "",
          address: "",
          apkVersion: "",
        },
        {
          id: 5,
          srNo: "05",
          event: "",
          lattitude: "",
          longitude: "",
          createdDate: "",
          address: "",
          apkVersion: "",
        }
      ]);
    
      const [loadingTrackingReportList, setLoadingTrackingReportList] = useState(false);
    
      const trackingReportListColumns = getTrackingReportCol();
    
      const handleRefreshTrackingReportList = () => {
        setLoadingTrackingReportList(true);
        setTimeout(() => {
          setLoadingTrackingReportList(false);
          setTrackingReportsListData((prev) => [...prev]); // refresh same data
        }, 1000);
      };

  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "Location Reports", isClickable: false },
          { label: "Tracking Reports List", href: "/oem/reports/location-reports/tracking-reports-list" },
        ]}
      />
      <h1 className="text-3xl font-semibold text-[#445E94]">Tracking Reports(List)</h1>
      <div className="space-y-4 rounded-lg bg-white shadow-sm">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">User Report</h1>
        </div>
        <hr className="text-gray-200" />
        <div className="">
          <TrackingReportListForm />
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
            rows={trackingReportsListData}
            columns={trackingReportListColumns}
            onRefresh={handleRefreshTrackingReportList}
            loading={loadingTrackingReportList}
            showPagination
            rowsPerPage={3}
          />
        </div>
      </div>
    </div>
  )
}

export default TrackingReportsTable