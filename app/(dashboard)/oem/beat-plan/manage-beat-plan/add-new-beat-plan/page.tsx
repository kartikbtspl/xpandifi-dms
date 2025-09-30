"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React, { useState } from 'react'
import FormAddNewBeatPlan from './components/FormAddNewBeatPlan'
import getAddNewBeatPlanCol from './components/getAddNewBeatPlanCol';
import Table from '@/components/common/table/Table';
import Button from '@/components/common/ui/Button';

function AddNewBeatPlan() {

  const [newBeatPlanData, setNewBeatPlanData] = useState([
        {
          id: 1,
          srNo: "01",
          user: "Anup Naik",
          beatPlanDate: "2025/06/24",
          distributor: "NA",
          route: "Pune",
          customerName: "NA",
          targetType: "Amount",
          salesTarget: "20000",
          currency: "INR",
          collectedTarget: "0",
          sequence: "1",
          action: ""
        },
        {
          id: 2,
          srNo: "02",
          user: "Anup Naik",
          beatPlanDate: "2025/06/24",
          distributor: "NA",
          route: "Pune",
          customerName: "NA",
          targetType: "Amount",
          salesTarget: "20000",
          currency: "INR",
          collectedTarget: "0",
          sequence: "1",
          action: ""
        },
        {
          id: 3,
          srNo: "03",
          user: "Anup Naik",
          beatPlanDate: "2025/06/24",
          distributor: "NA",
          route: "Pune",
          customerName: "NA",
          targetType: "Amount",
          salesTarget: "20000",
          currency: "INR",
          collectedTarget: "0",
          sequence: "1",
          action: ""
        },
      ]);

    
      const [isEditModalOpen, setIsEditModalOpen] = useState(false);
      const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
      const [selectedRow, setSelectedRow] = useState<any>(null);
    
      const [loadingNewBeatPlan, setLoadingNewBeatPlan] = useState(false);
    
      const handleEdit = (row: any) => {
        setSelectedRow(row);
        setIsEditModalOpen(true);
      };
    
      const handleDeleteClick = (row: any) => {
        setSelectedRow(row);
        setIsDeleteModalOpen(true);
      };
    
      const handleSaveEdit = (updatedRow: any) => {
        setNewBeatPlanData((prev) =>
          prev.map((item) => (item.id === updatedRow.id ? updatedRow : item))
        );
      };
    
      const confirmDelete = () => {
        setNewBeatPlanData((prev) => prev.filter((item) => item.id !== selectedRow.id));
        setIsDeleteModalOpen(false);
        setSelectedRow(null);
      };
    
      const newBeatPlanColumns = getAddNewBeatPlanCol(handleEdit, handleDeleteClick)
    
      const handleRefreshNewBeatPlan = () => {
        setLoadingNewBeatPlan(true);
        setTimeout(() => {
          setLoadingNewBeatPlan(false);
          setNewBeatPlanData(newBeatPlanData);
        }, 1000)
      };

  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "Beat Plan", href: "/oem/beat-plan" },
          {
            label: "Add New Beat Plan",
            href: "/oem/beat-plan/manage-beat-plan/add-new-beat-plan",
          },
        ]}
      />
      <h1 className="text-3xl text-[#445E94] font-semibold">
        Manage Beat Plan
      </h1>
      <FormAddNewBeatPlan />
      <div className='w-[1200px]'>
        <Table rows={newBeatPlanData} columns={newBeatPlanColumns} onRefresh={handleRefreshNewBeatPlan} loading={loadingNewBeatPlan} showPagination filterKey='user'/>
      </div>
    </div>
  )
}

export default AddNewBeatPlan