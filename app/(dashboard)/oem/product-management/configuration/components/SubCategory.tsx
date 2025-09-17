"use client"
import React, { useState } from 'react'
import Table from '@/components/common/table/Table'
import SubCategoryForm from './SubCategoryForm'
import getSubCategoryCol from './subCategoryCol'
import SubCategoryEditModal from './Modals/SubCategoryEditModal'
import SubCategoryDeleteModal from './Modals/SubCategoryDeleteModal'

function SubCategory() {
  const [subCategoryData, setSubCategoryData] = useState([
    { id: 1, srNo: "1", subCategoryName: 'sub category 1', action: "" },
    { id: 2, srNo: "2", subCategoryName: 'sub category 2', action: "" },
    { id: 3, srNo: "3", subCategoryName: 'sub category 3', action: "" },
  ]);

  const [loadingSubCategory, setLoadingSubCategory] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>(null);

  const handleAddCategory = (newSubCategory: { subCategoryName: string }) => {
    setSubCategoryData((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        srNo: String(prev.length + 1),
        subCategoryName: newSubCategory.subCategoryName,
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
    setSubCategoryData((prev) =>
      prev.map((item) => (item.id === updatedRow.id ? updatedRow : item))
    );
  };

  const confirmDelete = () => {
    setSubCategoryData((prev) => prev.filter((item) => item.id !== selectedRow.id));
    setIsDeleteModalOpen(false);
    setSelectedRow(null);
  };

  const SubCategoryColumns = getSubCategoryCol(handleEdit, handleDeleteClick);

  const handleRefreshSubCategory = () => {
    setLoadingSubCategory(true);
    setTimeout(() => {
      setLoadingSubCategory(false);
      setSubCategoryData(subCategoryData);
    }, 1000)
  };

  return (
    <div className="space-y-4">
      <SubCategoryForm onAddSubCategory={handleAddCategory} />

      <Table
        rows={subCategoryData}
        columns={SubCategoryColumns}
        onRefresh={handleRefreshSubCategory}
        loading={loadingSubCategory}
        filterKey="subCategoryName"
      />

      <SubCategoryEditModal 
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        row={selectedRow}
        onSave={handleSaveEdit}
      />

      <SubCategoryDeleteModal 
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={confirmDelete}
      />
    </div>
  )
}

export default SubCategory
