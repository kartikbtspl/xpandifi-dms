"use client"
import React, { useState } from 'react'
import JourneyTypeForm from './components/JourneyTypeForm'
import getJourneyTypeCol from './components/getJourneyTypeCol';
import Table from '@/components/common/table/Table';
import EditJourneyTypeModal from './components/Modals/EditJourneyTypeModal';
import DeleteJourneyTypeModal from './components/Modals/DeleteJourneyTypeModal';

function JourneyTypes() {
  const [journeyTypeData, setJourneyTypeData] = useState([
    { id: 1, srNo: "01", expense: "", journeyName: "", callTargets: "" },
    { id: 2, srNo: "02", expense: "", journeyName: "", callTargets: "" },
  ]);
  const [loadingJourneyType, setLoadingJourneyType] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>(null);

  const handleEdit = (row: any) => { setSelectedRow(row); setIsEditModalOpen(true); };
  const handleDeleteClick = (row: any) => { setSelectedRow(row); setIsDeleteModalOpen(true); };
  const handleSaveEdit = (updatedRow: any) => {
    setJourneyTypeData(prev => prev.map(item => item.id === updatedRow.id ? updatedRow : item));
  };
  const confirmDelete = () => {
    setJourneyTypeData(prev => prev.filter(item => item.id !== selectedRow.id));
    setIsDeleteModalOpen(false);
    setSelectedRow(null);
  };

  const journeyColumns = getJourneyTypeCol(handleEdit, handleDeleteClick);

  const handleRefreshJourneyType = () => {
    setLoadingJourneyType(true);
    setTimeout(() => {
      setLoadingJourneyType(false);
      setJourneyTypeData(prev => [...prev]);
    }, 1000);
  };

  const handleAddJourneyType = (newJourney: any) => {
    setJourneyTypeData(prev => [
      ...prev,
      {
        ...newJourney,
        id: prev.length + 1,
        srNo: String(prev.length + 1).padStart(2, "0"),
      },
    ]);
  };

  return (
    <div className="space-y-4 min-h-200">
      <JourneyTypeForm onAddJourneyType={handleAddJourneyType} />
      <Table
        rows={journeyTypeData}
        columns={journeyColumns}
        onRefresh={handleRefreshJourneyType}
        loading={loadingJourneyType}
        showPagination
        rowsPerPage={3}
      />
      <EditJourneyTypeModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        row={selectedRow}
        onSave={handleSaveEdit}
      />
      <DeleteJourneyTypeModal 
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={confirmDelete}
      />
    </div>
  );
}

export default JourneyTypes;