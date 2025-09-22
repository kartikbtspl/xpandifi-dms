"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React, { useState } from 'react'
import FrequencyForm from './components/FrequencyForm'
import getFrequencyCol from './components/getFrequencyCol'
import Table from '@/components/common/table/Table'

const ManageFrequency = () => {

  const [frequencyData, setFrequencyData] = useState([
    {
      id: 1,
      srNo: "01",
      classType: "ABC",
      distributorName: "PQR",
      frequency: "-",
      action: ""
    },
    {
      id: 2,
      srNo: "02",
      classType: "ABC",
      distributorName: "PQR",
      frequency: "-",
      action: ""
    },
    {
      id: 3,
      srNo: "03",
      classType: "ABC",
      distributorName: "PQR",
      frequency: "-",
      action: ""
    },
  ])

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>(null);

  const [loadingFrequency, setLoadingFrequency] = useState(false);

  const handleEdit = (row: any) => {
    setSelectedRow(row);
    setIsEditModalOpen(true);
  };

  const handleDeleteClick = (row: any) => {
    setSelectedRow(row);
    setIsDeleteModalOpen(true);
  };

  const handleSaveEdit = (updatedRow: any) => {
    setFrequencyData((prev) =>
      prev.map((item) => (item.id === updatedRow.id ? updatedRow : item))
    );
  };

  const confirmDelete = () => {
    setFrequencyData((prev) => prev.filter((item) => item.id !== selectedRow.id));
    setIsDeleteModalOpen(false);
    setSelectedRow(null);
  };

  const frequencyColumns = getFrequencyCol(handleEdit, handleDeleteClick)

  const handleRefreshFrequency = () => {
    setLoadingFrequency(true);
    setTimeout(() => {
      setLoadingFrequency(false);
      setFrequencyData(frequencyData);
    }, 1000)
  };

  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem" },
          { label: "Beat Plan", href: "/oem/beat-plan" },
          {
            label: "Beat Plan Reason",
            href: "/oem/beat-plan/manage-beat-reason",
          },
        ]}
      />
      <h1 className="text-3xl text-[#445E94] font-semibold">
        Beat Plan Reason
      </h1>
      <FrequencyForm />
      <div className=' space-y-4 rounded-lg bg-white'>
        <div className='px-6 pt-4'>
          <h1 className='text-xl'>Class Type List</h1>
        </div>
        <hr className='text-gray-200'/>
        <div className='px-6'>
          <Table rows={frequencyData} columns={frequencyColumns} onRefresh={handleRefreshFrequency} loading={loadingFrequency} showPagination filterKey='classType' />
        </div>
        
      </div>

    </div>
  )
}

export default ManageFrequency