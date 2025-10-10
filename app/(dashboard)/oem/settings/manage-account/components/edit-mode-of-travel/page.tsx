"use client"
import React, { useState } from 'react'
import Table from '@/components/common/table/Table';
import getModeOdTravelCol from './components/getModeOdTravelCol';
import ModeOfTravelForm from './components/ModeOfTravelForm';
import EditModeOfTavelModal from './components/Modals/EditModeOfTravelModal';
import DeleteModeOfTravelModal from './components/Modals/DeleteModeOfTravelModal';
function ModeOfTravel() {

  const [modeOfTravelData, setModeOfTravelData] = useState([
    {
      id: 1,
      srNo: "01",
      modeOfTravel: "",
      rate: "",
      action: "",
    },
    {
      id: 2,
      srNo: "02",
      modeOfTravel: "",
      rate: "",
      action: "",
    },
  ]);

  const [loadingModeOfTravel, setLoadingModeOfTravel] = useState(false);

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
    setModeOfTravelData(prev => {
      const newData = prev.map(item => (item.id === updatedRow.id ? updatedRow : item));
      return newData.map((item, idx) => ({ ...item, srNo: String(idx + 1) }));
    });
  };

  const confirmDelete = () => {
    setModeOfTravelData(prev => {
      const newData = prev.filter(item => item.id !== selectedRow.id);
      return newData.map((item, idx) => ({ ...item, srNo: String(idx + 1) }));
    });
    setIsDeleteModalOpen(false);
    setSelectedRow(null);
  };

  const modeOfTravelColumns = getModeOdTravelCol(handleEdit, handleDeleteClick)

  const handleRefreshModeOfTravel = () => {
    setLoadingModeOfTravel(true);
    setTimeout(() => {
      setLoadingModeOfTravel(false);
      setModeOfTravelData(prev => prev.map((item, idx) => ({ ...item, srNo: String(idx + 1) })));
    }, 1000);
  };


  return (
    <div className='space-y-4'>
      <div className="">
        <ModeOfTravelForm onAdd={(data) => console.log(data)} />
      </div>
      <Table
        rows={modeOfTravelData}
        columns={modeOfTravelColumns}
        onRefresh={handleRefreshModeOfTravel}
        loading={loadingModeOfTravel}
        showPagination
        rowsPerPage={3}
      />
      {isEditModalOpen && (
        <EditModeOfTavelModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          row={selectedRow}
          onSave={handleSaveEdit}
        />
      )}
      {isDeleteModalOpen && (
        <DeleteModeOfTravelModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={confirmDelete}
        />
      )}
    </div>
  )
}

export default ModeOfTravel;