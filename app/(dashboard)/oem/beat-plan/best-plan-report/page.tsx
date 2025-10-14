"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React, { useState } from 'react'
import BeatPlanReportForm from './components/BeatPlanReportForm'
import getBeatPlanReportCol from './components/getBeatPlanReportCol';
import Table from '@/components/common/table/Table';
import Button from '@/components/common/ui/Button';
import { FiDownload, FiUpload } from 'react-icons/fi';


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
        <div className="space-y-4 rounded-lg bg-white shadow-sm">
          <div className="flex justify-between px-6 pt-4">
            <h1 className="text-xl text-[#445E94]">Beat Plan Report List</h1>
            <div className='flex gap-3'>
              <Button startIcon={<FiUpload />}>Export</Button>
            </div>
          </div>
          <hr className="text-gray-200" />
          <div className="px-6 py-4">
            <Table rows={beatPlanReportData} columns={beatPlanReportColumns} onRefresh={handleRefreshBeatPlanReport} loading={loadingBeatReport} showPagination filterKey='beatPlanID' />
          </div>
        </div>

      </div>

    </div>
  )
}

export default BestPlanReport