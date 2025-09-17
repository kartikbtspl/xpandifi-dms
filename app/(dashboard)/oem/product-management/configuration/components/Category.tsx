"use client"
import React, { useState } from 'react'
import Table from '@/components/common/table/Table'
import BrandEditModal from './Modals/BrandEditModal'
import BrandDeleteModal from './Modals/BrandDeleteModal'
import getCategoryCol from './categoryCol'
import CategoryForm from './CategoryForm'
import CategoryEditModal from './Modals/CategoryEditModal'
import CategoryDeleteModal from './Modals/CategoryDeleteModal'

function Category() {
  const [categoryData, setCategoryData] = useState([
    { id: 1, srNo: "1", categoryName: 'category 1', action: "" },
    { id: 2, srNo: "2", categoryName: 'category 2', action: "" },
    { id: 3, srNo: "3", categoryName: 'category 3', action: "" },
  ]);

  const [loadingCategory, setLoadingCategory] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>(null);

  const handleAddCategory = (newCategory: { categoryName: string }) => {
    setCategoryData((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        srNo: String(prev.length + 1),
        categoryName: newCategory.categoryName,
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
    setCategoryData((prev) =>
      prev.map((item) => (item.id === updatedRow.id ? updatedRow : item))
    );
  };

  const confirmDelete = () => {
    setCategoryData((prev) => prev.filter((item) => item.id !== selectedRow.id));
    setIsDeleteModalOpen(false);
    setSelectedRow(null);
  };

  const categoryColumns = getCategoryCol(handleEdit, handleDeleteClick);

  const handleRefreshCategory = () => {
    setLoadingCategory(true);
    setTimeout(() => {
      setLoadingCategory(false);
      setCategoryData(categoryData);
    }, 1000)
  };

  return (
    <div className="space-y-4">
      <CategoryForm onAddCategory={handleAddCategory} />

      <Table
        rows={categoryData}
        columns={categoryColumns}
        onRefresh={handleRefreshCategory}
        loading={loadingCategory}
        filterKey="brandName"
      />

      <CategoryEditModal 
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        row={selectedRow}
        onSave={handleSaveEdit}
      />

      <CategoryDeleteModal 
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={confirmDelete}
      />
    </div>
  )
}

export default Category
