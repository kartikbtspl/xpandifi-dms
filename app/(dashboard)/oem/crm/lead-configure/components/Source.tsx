"use client"
import React, { useState } from 'react'
import LeadTypeForm from './LeadTypeForm'
import getLeadTypeCol from './leadTypeColumn';
import Table from '@/components/common/table/Table';
import getSourceCol from './sourceColumn'; 
import SourceForm from './SourceForm';
import SourceEditModal from './Modals/SourceEditModal';
import SourceDeleteModal from './Modals/SourceDeleteModal';

function Source() {

  const [sourceData, setSourceData] = useState([
    { id: 1,srNo: "1", leadSourceName: 'Retail', sequence: 1, action: "" },
    { id: 2,srNo: "2", leadSourceName: 'Wholesale', sequence: 2, action: "" },
    { id: 3,srNo: "3", leadSourceName: 'Online', sequence: 3, action: "" },
  ])

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>(null);

  const [loadingSource, setloadingSource] = useState(false);

  const handleRefreshSource = () => {
      setloadingSource(true);
      setTimeout(() => {
        setloadingSource(false);
        setSourceData(sourceData);
      }, 1000)};

  const handleEdit = (row: any) => {
    setSelectedRow(row);
    setIsEditModalOpen(true);
  };

  const handleDeleteClick = (row: any) => {
    setSelectedRow(row);
    setIsDeleteModalOpen(true);
  };

  const handleSaveEdit = (updatedRow: any) => {
    setSourceData((prev) =>
      prev.map((item) => (item.id === updatedRow.id ? updatedRow : item))
    );
  };

  const confirmDelete = () => {
    setSourceData((prev) => prev.filter((item) => item.id !== selectedRow.id));
    setIsDeleteModalOpen(false);
    setSelectedRow(null);
  };

  const sourceColumns = getSourceCol(handleEdit, handleDeleteClick);

  return (
    <div className='space-y-4'>
      <SourceForm />
      <Table rows={sourceData} columns={sourceColumns} loading={loadingSource} onRefresh={handleRefreshSource} filterKey='leadSourceName'/>

      {/* Edit Modal */}
      <SourceEditModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        row={selectedRow}
        onSave={handleSaveEdit}
      />

      {/* Delete Modal */}
      <SourceDeleteModal 
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={confirmDelete}
      />

    </div>
  )
}

export default Source