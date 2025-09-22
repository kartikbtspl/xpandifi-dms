"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React, { useState } from 'react'
import ManageExpenseConfigForm from './components/ManageExpenseConfigForm'
import Button from '@/components/common/ui/Button'
import getExpenseConfigListCol from './components/getExpenseConfigListCol'
import Table from '@/components/common/table/Table'
import EditExpenseConfigModal from './components/Modals/EditExpenseConfigModal'
import DeleteExpeseConfigModal from './components/Modals/DeleteExpeseConfigModal'

const ManageExpenseConfiguration = () => {

  const [expenseConfigData, setExpenseConfigData] = useState([
    {
      id: 1,
      srNo: "01",
      expenseType: "EXP123455",
      expenseMode: "Shreyas",
      role: "20,000",
      maxAmount: "10,000",
      country: "India",
      state: "Goa",
      city: "Agoda",
      isDefault: "No",
      isDistance: "No",
      action: ""
    },
    {
      id: 2,
      srNo: "02",
      expenseType: "EXP123455",
      expenseMode: "Shreyas",
      role: "20,000",
      maxAmount: "10,000",
      country: "India",
      state: "Goa",
      city: "Agoda",
      isDefault: "No",
      isDistance: "No",
      action: ""
    },
    {
      id: 3,
      srNo: "03",
      expenseType: "EXP123455",
      expenseMode: "Shreyas",
      role: "20,000",
      maxAmount: "10,000",
      country: "India",
      state: "Goa",
      city: "Agoda",
      isDefault: "No",
      isDistance: "No",
      action: ""
    },
  ])

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>(null);

  const [loadingExpenseConfig, setLoadingExpenseConfig] = useState(false);

  const handleEdit = (row: any) => {
    setSelectedRow(row);
    setIsEditModalOpen(true);
  };

  const handleDeleteClick = (row: any) => {
    setSelectedRow(row);
    setIsDeleteModalOpen(true);
  };

  const handleSaveEdit = (updatedRow: any) => {
    setExpenseConfigData((prev) =>
      prev.map((item) => (item.id === updatedRow.id ? updatedRow : item))
    );
  };

  const confirmDelete = () => {
    setExpenseConfigData((prev) => prev.filter((item) => item.id !== selectedRow.id));
    setIsDeleteModalOpen(false);
    setSelectedRow(null);
  };

  const expenseConfigColumns = getExpenseConfigListCol(handleEdit, handleDeleteClick)

  const handleRefreshExpenseConfig = () => {
    setLoadingExpenseConfig(true);
    setTimeout(() => {
      setLoadingExpenseConfig(false);
      setExpenseConfigData(expenseConfigData);
    }, 1000)
  };

  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem" },
          { label: "Expense Management", href: "/oem/expense-management" },
          {
            label: "Manage Expense Configuration",
            href: "/oem/expense-management/manage-expense-configuration",
          },
        ]}
      />
      <h1 className="text-3xl text-[#445E94] font-semibold">Manage Expense Configuration</h1>
      <ManageExpenseConfigForm />
      <div className='flex justify-end'>
        <Button><span className='text-xl mr-2'>+</span>Add New Customer Scheme</Button>
      </div>
      <div className='flex flex-col gap-4 bg-white rounded-lg'>
        <div className='px-6 pt-4'>
          <h1 className='text-[#445E94]'>Expense List</h1>
        </div>
        <hr className='text-gray-200' />
        <div className='p-6'>
          <Table
            rows={expenseConfigData}
            columns={expenseConfigColumns}
            onRefresh={handleRefreshExpenseConfig}
            loading={loadingExpenseConfig}
            showPagination
            filterKey='expenseType'
          />
        </div>
        <EditExpenseConfigModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        row={selectedRow}
        onSave={handleSaveEdit}
      />
      <DeleteExpeseConfigModal
              isOpen={isDeleteModalOpen}
              onClose={() => setIsDeleteModalOpen(false)}
              onConfirm={confirmDelete}
            />
      </div>
    </div>
  )
}

export default ManageExpenseConfiguration