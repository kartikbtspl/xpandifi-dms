"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React, { useState } from 'react'
import FreightMasterForm from './components/FreightMasterForm'
import getFreightMasterCol from './components/getFreightMasterCol'
import EditFreightMasterModal from './components/Modals/EditFreightMasterModal'
import Table from '@/components/common/table/Table'
import DeleteFreightMasterModal from './components/Modals/DeleteFreightMasterModal'

const Franchise = () => {
  const [freightMasterData, setFreightMasterData] = useState([
    {
      id: 1,
      srNo: "01",
      freightMasterId: "",
      country: "",
      state: "",
      city: "",
      rateMeasure: "",
      action: "",
    },
    {
      id: 2,
      srNo: "02",
      freightMasterId: "",
      country: "",
      state: "",
      city: "",
      rateMeasure: "",
      action: "",
    },
  ]);

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
    setFreightMasterData(prev => {
      const newData = prev.map(item => (item.id === updatedRow.id ? updatedRow : item));
      return newData.map((item, idx) => ({ ...item, srNo: String(idx + 1) }));
    });
  };

  const confirmDelete = () => {
    setFreightMasterData(prev => {
      const newData = prev.filter(item => item.id !== selectedRow.id);
      return newData.map((item, idx) => ({ ...item, srNo: String(idx + 1) }));
    });
    setIsDeleteModalOpen(false);
    setSelectedRow(null);
  };


  const handleRefreshFreightMaster = () => {
    setLoadingFreightMaster(true);
    setTimeout(() => {
      setLoadingFreightMaster(false);
      setFreightMasterData(prev => prev.map((item, idx) => ({ ...item, srNo: String(idx + 1) })));
    }, 1000);
  };

  const freightMasterColumns = getFreightMasterCol(handleEdit, handleDeleteClick);

  const handleAdd = () => {
    alert("add clicked...");
  }
  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "Settings", isClickable: false },
          { label: "Freight Master", href: "/oem/settings/freight-master" },
        ]}
      />
      <h1 className="text-3xl font-semibold text-[#445E94]">Freight Master</h1>
      <div className="space-y-4 rounded-lg bg-white shadow-sm">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">Add Freight Rate</h1>
        </div>
        <hr className="text-gray-200" />
        <div className="">
          <FreightMasterForm onAdd={handleAdd} />
        </div>
      </div>
      <div className="space-y-4 rounded-lg bg-white shadow-sm">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">Freight Master List</h1>
        </div>
        <hr className="text-gray-200" />
        <div className="px-6 py-4">
          <Table
            rows={freightMasterData}
            columns={freightMasterColumns}
            onRefresh={handleRefreshFreightMaster}
            loading={loadingFreightMaster}
            showPagination
            rowsPerPage={3}
          />
        </div>
      </div>
      {isEditModalOpen && (
        <EditFreightMasterModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          row={selectedRow}
          onSave={handleSaveEdit}
        />
      )}
      {isDeleteModalOpen && (
        <DeleteFreightMasterModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={confirmDelete}
        />
      )}
    </div>
  )
}

export default Franchise