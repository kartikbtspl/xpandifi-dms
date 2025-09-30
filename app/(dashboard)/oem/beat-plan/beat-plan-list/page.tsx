"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React, { useState } from 'react'
import BeatReportPieChart from './components/BeatReportPieChart'
import BeatPlanReportForm from './components/BeatListReportForm'
import Button from '@/components/common/ui/Button'
import getBeatListCol from './components/getBeatListCol'
import Table from '@/components/common/table/Table'
import { useRouter } from 'next/navigation'

const BeatPlanList = () => {

  const [beatListReportData, setBeatListReportData] = useState([
      {
        id: 1,
        srNo: "01",
        beatPlanID: "70",
        username: "Anup Naik",
        beatPlanDate: "14 Auguts 2020",
        distributorName: "Pradip Pawar/38221728376847091",
        routeName: "pune",
        comments: "NA",
        status: "To be submitted",
        noOfCustomers: "NA",
        zoneName: "NA",
        action: ""
      }
    ])
    const router = useRouter();
  
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState<any>(null);
  
    const [loadingBeatListReport, setLoadingBeatListReport] = useState(false);
  
    const handleEdit = (row: any) => {
      setSelectedRow(row);
      setIsEditModalOpen(true);
    };
  
    const handleDeleteClick = (row: any) => {
      setSelectedRow(row);
      setIsDeleteModalOpen(true);
    };
  
    const handleSaveEdit = (updatedRow: any) => {
      setBeatListReportData((prev) =>
        prev.map((item) => (item.id === updatedRow.id ? updatedRow : item))
      );
    };
  
    const confirmDelete = () => {
      setBeatListReportData((prev) => prev.filter((item) => item.id !== selectedRow.id));
      setIsDeleteModalOpen(false);
      setSelectedRow(null);
    };
  
    const beatListReportColumns = getBeatListCol(handleEdit, handleDeleteClick)
  
    const handleRefreshBeatReportList = () => {
      setLoadingBeatListReport(true);
      setTimeout(() => {
        setLoadingBeatListReport(false);
        setBeatListReportData(beatListReportData);
      }, 1000)
    };

  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "Beat Plan", href: "/oem/beat-plan" },
          { label: "Beat Plan List", href: "/oem/beat-plan/beat-plan-list" },
        ]}
      />
      <h1 className="text-3xl text-[#445E94] font-semibold">
        Beat Report List
      </h1>
      <BeatReportPieChart />
      <BeatPlanReportForm />
      <div className='w-full flex justify-end'>
        <Button onClick={() => router.push('/oem/beat-plan/beat-plan-list/add-new-beat')}><span className='text-xl'>+</span>Add New Beat</Button>
      </div>
      <Table rows={beatListReportData} columns={beatListReportColumns} onRefresh={handleRefreshBeatReportList} showPagination loading={loadingBeatListReport} filterKey='beatPlanID'/>
    </div>
  )
}

export default BeatPlanList