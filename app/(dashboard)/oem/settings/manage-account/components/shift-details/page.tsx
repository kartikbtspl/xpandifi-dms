"use client"

import React, { useState } from 'react'
import Table from '@/components/common/table/Table';
import ShiftDetailsForm from './components/ShiftDetailsForm';
import getShiftDetailsCol from './components/getShiftDetailsCol';
import EditShiftDetailsModal from './components/Modals/EditShiftDetailsModal';
import DeleteShiftDetailsModal from './components/Modals/DeleteShiftDetailsModal';

function ShiftDetails() {

  const [shiftDetailsData, setShiftDetailsData] = useState([
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

  const [loadingShiftDetails, setLoadingShiftDetails] = useState(false);

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
    setShiftDetailsData(prev => {
      const newData = prev.map(item => (item.id === updatedRow.id ? updatedRow : item));
      return newData.map((item, idx) => ({ ...item, srNo: String(idx + 1) }));
    });
  };

  const confirmDelete = () => {
    setShiftDetailsData(prev => {
      const newData = prev.filter(item => item.id !== selectedRow.id);
      return newData.map((item, idx) => ({ ...item, srNo: String(idx + 1) }));
    });
    setIsDeleteModalOpen(false);
    setSelectedRow(null);
  };

  const shiftDetailsColumns = getShiftDetailsCol(handleEdit, handleDeleteClick)

  const handleRefreshShiftDetails = () => {
    setLoadingShiftDetails(true);
    setTimeout(() => {
      setLoadingShiftDetails(false);
      setShiftDetailsData(prev => prev.map((item, idx) => ({ ...item, srNo: String(idx + 1) })));
    }, 1000);
  };


  return (
    <div className='space-y-4'>
      <div className="">
        <ShiftDetailsForm onAdd={(data) => console.log(data)} />
      </div>
      <Table
        rows={shiftDetailsData}
        columns={shiftDetailsColumns}
        onRefresh={handleRefreshShiftDetails}
        loading={loadingShiftDetails}
        showPagination
        rowsPerPage={3}
      />
      {isEditModalOpen && (
        <EditShiftDetailsModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          row={selectedRow}
          onSave={handleSaveEdit}
        />
      )}
      {isDeleteModalOpen && (
        <DeleteShiftDetailsModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={confirmDelete}
        />
      )}
    </div>
  )
}

export default ShiftDetails