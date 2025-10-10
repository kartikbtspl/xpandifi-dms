"use client"
import React, { useState } from 'react'
import ZonesForm from './components/ZonesForm';
import getZonesCol from './components/getZonesCol';
import Table from '@/components/common/table/Table';
import EditZonesModal from './components/Modals/EditZonesModal';
import DeleteZonesModal from './components/Modals/DeleteZonesModal';

function Zones() {

  const [zonesData, setZonesData] = useState([
    {
      id: 1,
      srNo: "01",
      zoneName: "",
      zoneCode: "",
      action: "",
    },
    {
      id: 2,
      srNo: "02",
      zoneName: "",
      zoneCode: "",
      action: "",
    },
  ]);

  const [loadingZones, setLoadingZones] = useState(false);

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
    setZonesData(prev => {
      const newData = prev.map(item => (item.id === updatedRow.id ? updatedRow : item));
      return newData.map((item, idx) => ({ ...item, srNo: String(idx + 1) }));
    });
  };

  const confirmDelete = () => {
    setZonesData(prev => {
      const newData = prev.filter(item => item.id !== selectedRow.id);
      return newData.map((item, idx) => ({ ...item, srNo: String(idx + 1) }));
    });
    setIsDeleteModalOpen(false);
    setSelectedRow(null);
  };

  const zonesColumns = getZonesCol(handleEdit, handleDeleteClick)

  const handleRefreshZones = () => {
    setLoadingZones(true);
    setTimeout(() => {
      setLoadingZones(false);
      setZonesData(prev => prev.map((item, idx) => ({ ...item, srNo: String(idx + 1) })));
    }, 1000);
  };


  return (
    <div className='space-y-4'>
      <div className="">
        <ZonesForm onAdd={(data) => console.log(data)} />
      </div>
      <Table
        rows={zonesData}
        columns={zonesColumns}
        onRefresh={handleRefreshZones}
        loading={loadingZones}
        showPagination
        rowsPerPage={3}
      />
      {isEditModalOpen && (
        <EditZonesModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          row={selectedRow}
          onSave={handleSaveEdit}
        />
      )}
      {isDeleteModalOpen && (
        <DeleteZonesModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={confirmDelete}
        />
      )}
    </div>
  )
}

export default Zones