"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React, { useState } from 'react'
import ManageBeatPlanForm from './components/ManageBeatPlanForm'
import getManageBeatPlanCol from './components/getManageBeatPlanCol'
import Button from '@/components/common/ui/Button'
import Table from '@/components/common/table/Table'
import { useRouter } from 'next/navigation'

function ManageBeatPlan() {

  const [manageBeatPlanData, setManageBeatPlanData] = useState([
      {
        id: 1,
        srNo: "01",
        beatPlanID: "70",
        user: "Anup Naik",
        beatPlanDate: "2025/06/24",
        distributorName: "NA",
        route: "Pune",
        customerName: "NA",
        targetType: "Amount",
        salesTarget: "20000",
        currency: "INR",
        collectedTarget: "0",
        action: ""
      },
      {
        id: 2,
        srNo: "02",
        beatPlanID: "70",
        user: "Anup Naik",
        beatPlanDate: "2025/06/24",
        distributorName: "NA",
        route: "Pune",
        customerName: "NA",
        targetType: "Amount",
        salesTarget: "20000",
        currency: "INR",
        collectedTarget: "0",
        action: ""
      },
      {
        id: 3,
        srNo: "03",
        beatPlanID: "70",
        user: "Anup Naik",
        beatPlanDate: "2025/06/24",
        distributorName: "NA",
        route: "Pune",
        customerName: "NA",
        targetType: "Amount",
        salesTarget: "20000",
        currency: "INR",
        collectedTarget: "0",
        action: ""
      },
    ])

    const router = useRouter();
  
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState<any>(null);
  
    const [loadingManageBeat, setLoadingManageBeat] = useState(false);
  
    const handleEdit = (row: any) => {
      setSelectedRow(row);
      setIsEditModalOpen(true);
    };
  
    const handleDeleteClick = (row: any) => {
      setSelectedRow(row);
      setIsDeleteModalOpen(true);
    };
  
    const handleSaveEdit = (updatedRow: any) => {
      setManageBeatPlanData((prev) =>
        prev.map((item) => (item.id === updatedRow.id ? updatedRow : item))
      );
    };
  
    const confirmDelete = () => {
      setManageBeatPlanData((prev) => prev.filter((item) => item.id !== selectedRow.id));
      setIsDeleteModalOpen(false);
      setSelectedRow(null);
    };
  
    const manageBeatColumns = getManageBeatPlanCol(handleEdit, handleDeleteClick)
  
    const handleRefreshManageBeatPlan = () => {
      setLoadingManageBeat(true);
      setTimeout(() => {
        setLoadingManageBeat(false);
        setManageBeatPlanData(manageBeatPlanData);
      }, 1000)
    };

  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "Beat Plan", href: "/oem/beat-plan" },
          {
            label: "Beat Plan Reason",
            href: "/oem/beat-plan/manage-beat-plan",
          },
        ]}
      />
      <h1 className="text-3xl text-[#445E94] font-semibold">
        Manage Beat Plan
      </h1>
      <ManageBeatPlanForm />
      <div className='flex justify-end'>
        <Button onClick={() => router.push('/oem/beat-plan/manage-beat-plan/add-new-beat-plan')}><span className='text-xl'>+</span>Add New Beat Plan</Button>
      </div>
      <Table rows={manageBeatPlanData} columns={manageBeatColumns} onRefresh={handleRefreshManageBeatPlan} loading={loadingManageBeat} showPagination filterKey='beatPlanID'/>
    </div>
  )
}

export default ManageBeatPlan