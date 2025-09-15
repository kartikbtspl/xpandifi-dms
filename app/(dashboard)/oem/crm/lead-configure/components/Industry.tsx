"use client"
import React, { useState } from 'react'
import Table from '@/components/common/table/Table';
import getSourceCol from './sourceColumn'; 
import IndustryForm from './IndustryForm';
import getIndustryCol from './industryColumn';
import IndustryEditModal from './Modals/IndustryEditModal';
import IndustryDeleteModal from './Modals/IndustryDeleteModal';

function Industry() {

  const [industryData, setIndustryData] = useState([
    { id: 1,srNo: "1", leadIndustryName: 'Retail', sequence: 1, action: "" },
    { id: 2,srNo: "2", leadIndustryName: 'Wholesale', sequence: 2, action: "" },
    { id: 3,srNo: "3", leadIndustryName: 'Online', sequence: 3, action: "" },
  ])

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>(null);


  const [loadingIndustry, setLoadingIndustry] = useState(false);

    const handleEdit = (row: any) => {
    setSelectedRow(row);
    setIsEditModalOpen(true);
  };

  const handleDeleteClick = (row: any) => {
    setSelectedRow(row);
    setIsDeleteModalOpen(true);
  };

  const handleSaveEdit = (updatedRow: any) => {
    setIndustryData((prev) =>
      prev.map((item) => (item.id === updatedRow.id ? updatedRow : item))
    );
  };

  const confirmDelete = () => {
    setIndustryData((prev) => prev.filter((item) => item.id !== selectedRow.id));
    setIsDeleteModalOpen(false);
    setSelectedRow(null);
  };

  const IndustryColumns = getIndustryCol(handleEdit, handleDeleteClick);

  const handleRefreshIndustry = () => {
      setLoadingIndustry(true);
      setTimeout(() => {
        setLoadingIndustry(false);
        setIndustryData(industryData);
      }, 1000)};


  return (
    <div className='space-y-4'>
      <IndustryForm />
      <Table rows={industryData} columns={IndustryColumns} loading={loadingIndustry} onRefresh={handleRefreshIndustry} filterKey='leadIndustyName'/>

      {/* Edit Modal  */}
      <IndustryEditModal 
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        row={selectedRow}
        onSave={handleSaveEdit}
      />

      {/* Delete Modal  */}
      <IndustryDeleteModal 
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={confirmDelete}
      />
    </div>
  )
}

export default Industry