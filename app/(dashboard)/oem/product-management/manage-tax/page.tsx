"use client";

import Breadcrumb from '@/components/common/ui/BreadCrumb';
import React, { useState } from 'react';
import ManageForm from './components/ManageForm';
import getManageTaxCol from './components/manageTaxCol';
import Table from '@/components/common/table/Table';
import EditTaxModal from './components/Modals/EditTaxModal';
import DeleteTaxModal from './components/Modals/DeleteTaxModal';
import AddTaxModal from './components/Modals/AddTaxModal';
import { v4 as uuidv4 } from "uuid";

const ManageTax = () => {
  const [taxData, setTaxData] = useState([
    { id: uuidv4(), srNo: "1", taxCode: 'tax1', taxName: "GST0", percentage: 0, action: "" },
    { id: uuidv4(), srNo: "2", taxCode: 'tax2', taxName: "GST5", percentage: 5, action: "" },
    { id: uuidv4(), srNo: "3", taxCode: 'tax3', taxName: "GST25", percentage: 25, action: "" },
  ]);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>(null);
  const [loadingTax, setLoadingTax] = useState(false);

  // Helper function to assign sequential srNo after any data update
  const withResequencedSrNo = (arr: typeof taxData) => 
    arr.map((item, idx) => ({ ...item, srNo: String(idx + 1) }));

  const handleEdit = (row: any) => {
    setSelectedRow(row);
    setIsEditModalOpen(true);
  };

  const handleDeleteClick = (row: any) => {
    setSelectedRow(row);
    setIsDeleteModalOpen(true);
  };

  const handleSaveEdit = (updatedRow: any) => {
    setTaxData(prev =>
      withResequencedSrNo(prev.map(item => item.id === updatedRow.id ? updatedRow : item))
    );
  };

  const confirmDelete = () => {
    setTaxData(prev => 
      withResequencedSrNo(prev.filter(item => item.id !== selectedRow.id))
    );
    setIsDeleteModalOpen(false);
    setSelectedRow(null);
  };

  const handleAddTax = (newTax: { taxName: string; taxCode: string; percentage: number }) => {
    setTaxData(prev =>
      withResequencedSrNo([
        ...prev,
        {
          id: uuidv4(),
          srNo: String(prev.length + 1),
          ...newTax,
          action: "",
        },
      ])
    );
  };

  const taxColumns = getManageTaxCol(handleEdit, handleDeleteClick);

  const handleRefreshTax = () => {
    setLoadingTax(true);
    setTimeout(() => {
      setLoadingTax(false);
      setTaxData(prev => withResequencedSrNo(prev));
    }, 1000);
  };

  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "Product Management", href: "/oem/product-management" },
          { label: "Manage Tax", href: "/oem/product-management/manage-tax" },
        ]}
      />
      <h1 className='text-3xl text-[#445E94] font-semibold'>Manage Tax</h1>
      <ManageForm onAddTax={handleAddTax} />
      <Table
        rows={taxData}
        columns={taxColumns}
        onRefresh={handleRefreshTax}
        loading={loadingTax}
        filterKey='taxCode'
      />
      <EditTaxModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        row={selectedRow}
        onSave={handleSaveEdit}
      />
      <DeleteTaxModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={confirmDelete}
      />
    </div>
  );
};

export default ManageTax;
