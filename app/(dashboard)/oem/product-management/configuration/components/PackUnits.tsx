"use client"
import React, { useState } from 'react'
import Table from '@/components/common/table/Table'
import SubCategoryEditModal from './Modals/SubCategoryEditModal'
import SubCategoryDeleteModal from './Modals/SubCategoryDeleteModal'
import PackUnitsForm from './PackUnitsForm'
import getPackUnitsCol from './packUnitsCol'
import PackUnitsEditModal from './Modals/PackUnitsEditModal'

function SubCategory() {
  const [unitsData, setUnitsData] = useState([
    { id: 1, srNo: "1", shortForm: 'in', longForm: "Inch", default : 1, action: "" },
    { id: 2, srNo: "2", shortForm: 'ft', longForm: "Foot", default : 1, action: "" },
    { id: 3, srNo: "3", shortForm: 'm', longForm: "Meter", default : 1, action: "" },
  ]);

  const [loadingUnits, setLoadingUnits] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>(null);

  const handleAddUnits = (newPackUnits: { shortForm: string , longForm: string, default: number}) => {
    setUnitsData((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        srNo: String(prev.length + 1),
        shortForm: newPackUnits.shortForm,
        longForm : newPackUnits.longForm,
        default : 1,
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
    setUnitsData((prev) =>
      prev.map((item) => (item.id === updatedRow.id ? updatedRow : item))
    );
  };

  const confirmDelete = () => {
    setUnitsData((prev) => prev.filter((item) => item.id !== selectedRow.id));
    setIsDeleteModalOpen(false);
    setSelectedRow(null);
  };

  const unitsColumn = getPackUnitsCol(handleEdit, handleDeleteClick);

  const handleRefreshUnits = () => {
    setLoadingUnits(true);
    setTimeout(() => {
      setLoadingUnits(false);
      setUnitsData(unitsData);
    }, 1000)
  };

  return (
    <div className="space-y-4">
      <PackUnitsForm onAddPackUnits={handleAddUnits} />

      <Table
        rows={unitsData}
        columns={unitsColumn}
        onRefresh={handleRefreshUnits}
        loading={loadingUnits}
        filterKey="longForm"
      />

      <PackUnitsEditModal
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
