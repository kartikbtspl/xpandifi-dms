"use client"

import React, { useState } from 'react'
import CirclesForm from './components/CirclesForm'
import getCirclesCol from './components/getCirclesCol';
import Table from '@/components/common/table/Table';
import EditCirclesModal from './components/Modals/EditCirclesModal';
import DeleteCirclesModal from './components/Modals/DeleteCirclesModal';

function Circles() {

  const [circlesData, setCirclesData] = useState([
    {
      id: 1,
      srNo: "01",
      circleName: "",
      circleCode: "",
      action: "",
    },
    {
      id: 2,
      srNo: "02",
      circleName: "",
      circleCode: "",
      action: "",
    },
  ]);

  const [loadingCircles, setLoadingCircles] = useState(false);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>(null);
  const [loadingFreightMaster, setLoadingFreightMaster] = useState(false);

  const handleEdit = (row: any) => {
    setSelectedRow(row);
    setIsEditModalOpen(true);
  };

  const handleDeleteClick = (row: any) => {
    setSelectedRow(row);
    setIsDeleteModalOpen(true);
  };

  const handleSaveEdit = (updatedRow: any) => {
    setCirclesData(prev => {
      const newData = prev.map(item => (item.id === updatedRow.id ? updatedRow : item));
      return newData.map((item, idx) => ({ ...item, srNo: String(idx + 1) }));
    });
  };

  const confirmDelete = () => {
    setCirclesData(prev => {
      const newData = prev.filter(item => item.id !== selectedRow.id);
      return newData.map((item, idx) => ({ ...item, srNo: String(idx + 1) }));
    });
    setIsDeleteModalOpen(false);
    setSelectedRow(null);
  };

  const circlesColumns = getCirclesCol(handleEdit, handleDeleteClick)

  const handleRefreshCircles = () => {
    setLoadingCircles(true);
    setTimeout(() => {
      setLoadingCircles(false);
      setCirclesData(prev => prev.map((item, idx) => ({ ...item, srNo: String(idx + 1) })));
    }, 1000);
  };


  return (
    <div className='space-y-4'>
      <div className="">
        <CirclesForm onAdd={(data) => console.log(data)} />
      </div>
      <Table
        rows={circlesData}
        columns={circlesColumns}
        onRefresh={handleRefreshCircles}
        loading={loadingCircles}
        showPagination
        rowsPerPage={3}
      />
      {isEditModalOpen && (
        <EditCirclesModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          row={selectedRow}
          onSave={handleSaveEdit}
        />
      )}
      {isDeleteModalOpen && (
        <DeleteCirclesModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={confirmDelete}
        />
      )}
    </div>
  )
}

export default Circles