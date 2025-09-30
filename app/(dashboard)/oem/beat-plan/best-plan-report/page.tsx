"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React, { useState } from 'react'
import BeatPlanReportForm from './components/BeatPlanReportForm'
import getBeatPlanReportCol from './components/getBeatPlanReportCol';
import Table from '@/components/common/table/Table';


const BestPlanReport = () => {

  const [beatPlanReportData, setBeatPlanReportData] = useState([
    {
      id: 1,
      srNo: "01",
      beatPlanID: "19170",
      user: "Anup Naik",
      email: "sales@fieldmi.com",
      beatPlanDate: "2025/06/24",
      customerNameCode: "Pradip Pawar/38221728376847091",
      visitId: "NA",
      type: "Not Visited",
      visitDate: "NA",
      roleName: "System ID",
      zoneName: "NA",
      action: ""
    }
  ])

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>(null);

  const [loadingBeatReport, setLoadingBeatReport] = useState(false);

  const handleEdit = (row: any) => {
    setSelectedRow(row);
    setIsEditModalOpen(true);
  };

  const handleDeleteClick = (row: any) => {
    setSelectedRow(row);
    setIsDeleteModalOpen(true);
  };

  const handleSaveEdit = (updatedRow: any) => {
    setBeatPlanReportData((prev) =>
      prev.map((item) => (item.id === updatedRow.id ? updatedRow : item))
    );
  };

  const confirmDelete = () => {
    setBeatPlanReportData((prev) => prev.filter((item) => item.id !== selectedRow.id));
    setIsDeleteModalOpen(false);
    setSelectedRow(null);
  };

  const beatPlanReportColumns = getBeatPlanReportCol(handleEdit, handleDeleteClick)

  const handleRefreshBeatPlanReport = () => {
    setLoadingBeatReport(true);
    setTimeout(() => {
      setLoadingBeatReport(false);
      setBeatPlanReportData(beatPlanReportData);
    }, 1000)
  };

  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "Beat Plan", href: "/oem/beat-plan" },
          { label: "Beat Plan Report", href: "/oem/beat-plan/best-plan-report" },
        ]}
      />
      <h1 className="text-3xl text-[#445E94] font-semibold">
        Search Beat Plan Report
      </h1>
      <BeatPlanReportForm />
      <div className='w-[1200px]'>
        <Table rows={beatPlanReportData} columns={beatPlanReportColumns} onRefresh={handleRefreshBeatPlanReport} loading={loadingBeatReport} showPagination filterKey='beatPlanID' />
      </div>

    </div>
  )
}

export default BestPlanReport