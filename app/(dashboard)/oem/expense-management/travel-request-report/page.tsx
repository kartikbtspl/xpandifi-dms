"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React, { useState } from 'react'
import TravelRequestForm from './components/TravelRequestForm'
import Button from '@/components/common/ui/Button'
import Table from '@/components/common/table/Table'
import getTravelRequest from './components/getTravelRequest'
import { useRouter } from 'next/navigation'

const TravelRequestReport = () => {

  const [travelRequestData, setTravelRequestData] = useState([
        {
          id: 1,
          srNo: "01",
          travelRequestId: "ABC",
          userName: "PQR",
          createdAt: "2024/07/17 19:05:28",
          comment: "NA",
          status: "pending",

        },
        {
          id: 2,
          srNo: "02",
          travelRequestId: "ABC",
          userName: "PQR",
          createdAt: "2024/07/17 19:05:28",
          comment: "NA",
          status: "pending",
        },
        {
          id: 3,
          srNo: "03",
          travelRequestId: "ABC",
          userName: "PQR",
          createdAt: "2024/07/17 19:05:28",
          comment: "NA",
          status: "pending",
        },
      ]);
    
      const router = useRouter();
      const [loadingTravelRequest, setLoadingTravelRequest] = useState(false);
    
      const handleView = (row: any) => {
        console.log("Viewing row:", row);
        router.push("/oem/expense-management/expense-report/view-expense-report")
        // Here you can open a modal if you want
      };
    
      const handleApprove = (row: any) => {
        setTravelRequestData((prev) =>
          prev.map((item) =>
            item.id === row.id ? { ...item, status: "approved" } : item
          )
        );
      };
    
      const handleReject = (row: any) => {
        setTravelRequestData((prev) => prev.filter((item) => item.id !== row.id));
      };
    
      const travelRequestColumns = getTravelRequest(
        handleView,
        handleApprove,
        handleReject
      );
    
      const handleRefreshTravelRequest = () => {
        setLoadingTravelRequest(true);
        setTimeout(() => {
          setLoadingTravelRequest(false);
          setTravelRequestData((prev) => [...prev]); // refresh but same data
        }, 1000);
      };

  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "Expense Management", href: "/oem/expense-management" },
          {
            label: "My Expense Report List",
            href: "/oem/expense-management/travel-request-report",
          },
        ]}
      />
      <h1 className="text-3xl text-[#445E94] font-semibold">Travel Request Report</h1>
      <TravelRequestForm />
      <div className="space-y-4 rounded-lg bg-white">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">Expense Report List</h1>
          <Button>Export</Button>
        </div>
        <hr className="text-gray-200" />

        <div className="px-6">
          <Table
            rows={travelRequestData}
            columns={travelRequestColumns}
            onRefresh={handleRefreshTravelRequest}
            loading={loadingTravelRequest}
            showPagination
            filterKey="travelRequestId"
          />
        </div>
      </div>
    </div>
  )
}

export default TravelRequestReport