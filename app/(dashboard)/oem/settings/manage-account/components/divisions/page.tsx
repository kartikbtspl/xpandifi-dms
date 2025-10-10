"use client"
import React, { useState } from 'react'
import Table from '@/components/common/table/Table';
import getDivisionsCol from './components/getDivisionsCol';
import DivisionsForm from './components/DivisionsForm';
import EditDivisionsModal from './components/Modals/EditDivisionsModal';
import DeleteDivisionsModal from './components/Modals/DeleteDivisionsModal';

function Divisions() {

  const [divisionsData, setDivisionsData] = useState([
    {
      id: 1,
      srNo: "01",
      divisionName: "",
      divisionCode: "",
      action: "",
    },
    {
      id: 2,
      srNo: "02",
      divisionName: "",
      divisionCode: "",
      action: "",
    },
  ]);

  const [loadingDivisions, setLoadingDivisions] = useState(false);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>(null);

  const handleEdit = (row: any) => {
    setSelectedRow(row);
    setIsEditModalOpen(true);
  };

  const handleDeleteClick = (row: any) => {
    setSelectedRow(row);
    setIsDeleteModalOpen(true);
  };

  const handleSaveEdit = (updatedRow: any) => {
    setDivisionsData(prev => {
      const newData = prev.map(item => (item.id === updatedRow.id ? updatedRow : item));
      return newData.map((item, idx) => ({ ...item, srNo: String(idx + 1) }));
    });
  };

  const confirmDelete = () => {
    setDivisionsData(prev => {
      const newData = prev.filter(item => item.id !== selectedRow.id);
      return newData.map((item, idx) => ({ ...item, srNo: String(idx + 1) }));
    });
    setIsDeleteModalOpen(false);
    setSelectedRow(null);
  };

  const divisionsColumns = getDivisionsCol(handleEdit, handleDeleteClick)

  const handleRefreshDivisions = () => {
    setLoadingDivisions(true);
    setTimeout(() => {
      setLoadingDivisions(false);
      setDivisionsData(prev => prev.map((item, idx) => ({ ...item, srNo: String(idx + 1) })));
    }, 1000);
  };


  return (
    <div className='space-y-4'>
      <div className="">
        <DivisionsForm onAdd={(data) => console.log(data)} />
      </div>
      <Table
        rows={divisionsData}
        columns={divisionsColumns}
        onRefresh={handleRefreshDivisions}
        loading={loadingDivisions}
        showPagination
        rowsPerPage={3}
      />
      {isEditModalOpen && (
        <EditDivisionsModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          row={selectedRow}
          onSave={handleSaveEdit}
        />
      )}
      {isDeleteModalOpen && (
        <DeleteDivisionsModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={confirmDelete}
        />
      )}
    </div>
  )
}

export default Divisions