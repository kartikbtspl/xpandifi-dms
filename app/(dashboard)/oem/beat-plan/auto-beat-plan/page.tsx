"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React, { useState } from 'react'
import AutoBeatForm from './components/AutoBeatForm'
import getAutoBeatCol from './components/getAutoBeatCol';
import Table from '@/components/common/table/Table';
import EditAutoBeatModal from './components/Modals/EditAutoBeatModal';
import DeleteAutoBeatModal from './components/Modals/DeleteAutoBeatModal';

const AutoBeatPlan = () => {

  const [autoBeatData, setAutoBeatData] = useState([
    {
      id: 1,
      user: "",
      beatPlanDate: "",
      distributor: "",
      route: "",
      customer: "",
      salesTargetType: "",
      salesTarget: "",
      unit: "",
      collectionTarget: "",
      sequence: "",
      action: ""
    }
  ]);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>(null);

  const [loadingAutoBeat, setLoadingAutoBeat] = useState(false);

  const handleEdit = (row: any) => {
    setSelectedRow(row);
    setIsEditModalOpen(true);
  };

  const handleDeleteClick = (row: any) => {
    setSelectedRow(row);
    setIsDeleteModalOpen(true);
  };

  const handleSaveEdit = (updatedRow: any) => {
    setAutoBeatData((prev) =>
      prev.map((item) => (item.id === updatedRow.id ? updatedRow : item))
    );
  };

  const confirmDelete = () => {
    setAutoBeatData((prev) => prev.filter((item) => item.id !== selectedRow.id));
    setIsDeleteModalOpen(false);
    setSelectedRow(null);
  };

  const autoBeatColumns = getAutoBeatCol(handleEdit, handleDeleteClick)

  const handleRefreshAutoBeat = () => {
      setLoadingAutoBeat(true);
      setTimeout(() => {
        setLoadingAutoBeat(false);
        setAutoBeatData(autoBeatData);
      }, 1000)
    };

  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem" },
          { label: "Schemes", href: "/oem/schemes" },
          { label: "Category Scheme", href: "/oem/schemes/category-scheme" },
        ]}
      />
      <h1 className="text-3xl text-[#445E94] font-semibold">
        Auto Beat Plan
      </h1>
      <AutoBeatForm />

      <Table rows={autoBeatData} columns={autoBeatColumns} onRefresh={handleRefreshAutoBeat} filterKey='user' showPagination loading={loadingAutoBeat}/>

      <EditAutoBeatModal 
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        row={selectedRow}
        onSave={handleSaveEdit}
      />

      {/* Delete Modal  */}
      <DeleteAutoBeatModal 
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={confirmDelete}
      />
    </div>
  )
}

export default AutoBeatPlan