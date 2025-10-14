"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React, { useState } from 'react'
import AutoBeatForm from './components/AutoBeatForm'
import getAutoBeatCol from './components/getAutoBeatCol';
import Table from '@/components/common/table/Table';
import EditAutoBeatModal from './components/Modals/EditAutoBeatModal';
import DeleteAutoBeatModal from './components/Modals/DeleteAutoBeatModal';
import Button from '@/components/common/ui/Button';
import { FiDownload, FiUpload } from 'react-icons/fi';

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
          { label: "Home", href: "/oem/dashboard" },
          { label: "Schemes", href: "/oem/schemes" },
          { label: "Category Scheme", href: "/oem/schemes/category-scheme" },
        ]}
      />
      <h1 className="text-3xl text-[#445E94] font-semibold">
        Auto Beat Plan
      </h1>
      <AutoBeatForm />
      <div className="space-y-4 rounded-lg bg-white shadow-sm">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">Auto Beat Plan List</h1>
          <div className='flex gap-3'>
            <Button variant='outline' startIcon={<FiDownload />}>Import</Button>
            <Button startIcon={<FiUpload />}>Export</Button>
          </div>
        </div>
        <hr className="text-gray-200" />
        <div className="px-6 py-4">
          <Table rows={autoBeatData} columns={autoBeatColumns} onRefresh={handleRefreshAutoBeat} filterKey='user' showPagination loading={loadingAutoBeat} />
        </div>
      </div>
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