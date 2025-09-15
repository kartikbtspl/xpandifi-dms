"use client"
import React, { useState } from 'react'
import BrandDetailsForm from './BrandDetailsForm'
import Table from '@/components/common/table/Table'
import getBrandDetailsCol from './brandDetailsCol'
import BrandEditModal from './Modals/BrandEditModal'
import BrandDeleteModal from './Modals/BrandDeleteModal'

function BrandDetails() {
  const [brandData, setBrandData] = useState([
    { id: 1, srNo: "1", brandName: 'brand1', action: "" },
    { id: 2, srNo: "2", brandName: 'brand2', action: "" },
    { id: 3, srNo: "3", brandName: 'brand3', action: "" },
  ]);

  const [loadingBrand, setLoadingBrand] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>(null);

  const handleAddBrand = (newBrand: { brandName: string }) => {
    setBrandData((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        srNo: String(prev.length + 1),
        brandName: newBrand.brandName,
        action: "",
      },
    ]);
  };

  const handleEdit = (row: any) => {
    setSelectedRow(row);
    setIsEditModalOpen(true);
  };

  const handleDeleteClick = (row: any) => {
    setSelectedRow(row);
    setIsDeleteModalOpen(true);
  };

  const handleSaveEdit = (updatedRow: any) => {
    setBrandData((prev) =>
      prev.map((item) => (item.id === updatedRow.id ? updatedRow : item))
    );
  };

  const confirmDelete = () => {
    setBrandData((prev) => prev.filter((item) => item.id !== selectedRow.id));
    setIsDeleteModalOpen(false);
    setSelectedRow(null);
  };

  const brandColumns = getBrandDetailsCol(handleEdit, handleDeleteClick);

  const handleRefreshBrand = () => {
    setLoadingBrand(true);
    setTimeout(() => {
      setLoadingBrand(false);
      setBrandData(brandData);
    }, 1000)
  };

  return (
    <div className="space-y-4">
      <BrandDetailsForm onAddBrand={handleAddBrand} />

      <Table
        rows={brandData}
        columns={brandColumns}
        onRefresh={handleRefreshBrand}
        loading={loadingBrand}
        filterKey="brandName"
      />

      <BrandEditModal 
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        row={selectedRow}
        onSave={handleSaveEdit}
      />

      <BrandDeleteModal 
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={confirmDelete}
      />
    </div>
  )
}

export default BrandDetails
