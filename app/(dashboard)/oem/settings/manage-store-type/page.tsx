"use client"
import React, { useState } from 'react'
import Table from '@/components/common/table/Table';
import Breadcrumb from '@/components/common/ui/BreadCrumb';
import ManageStoreTypeForm from './components/ManageStoreTypeForm';
import getStoreTypeCol from './components/getStoreTypeCol';
import EditStoreTypeModal from './components/Modals/EditStoreTypeModal';
import DeleteStoreTypeModal from './components/Modals/DeleteStoreTypeModal';

function ManageStoreType() {

  const [storeTypeData, setStoreTypeData] = useState([
    {
      id: 1,
      srNo: "01",
      storeTypeName: "",
      action: "",
    },
    {
      id: 2,
      srNo: "02",
      storeTypeName: "",
      action: "",
    },
  ]);

  const [loadingStoreType, setLoadingStoreType] = useState(false);

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
    setStoreTypeData(prev => {
      const newData = prev.map(item => (item.id === updatedRow.id ? updatedRow : item));
      return newData.map((item, idx) => ({ ...item, srNo: String(idx + 1) }));
    });
  };

  const confirmDelete = () => {
    setStoreTypeData(prev => {
      const newData = prev.filter(item => item.id !== selectedRow.id);
      return newData.map((item, idx) => ({ ...item, srNo: String(idx + 1) }));
    });
    setIsDeleteModalOpen(false);
    setSelectedRow(null);
  };

  const storeTypeColumns = getStoreTypeCol(handleEdit, handleDeleteClick)

  const handleRefreshStoreType = () => {
    setLoadingStoreType(true);
    setTimeout(() => {
      setLoadingStoreType(false);
      setStoreTypeData(prev => prev.map((item, idx) => ({ ...item, srNo: String(idx + 1) })));
    }, 1000);
  };
  const handleAdd = () => {
    alert("add clicked...");
  }

  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "Settings", isClickable: false },
          { label: "Manage Store Type", href: "/oem/settings/manage-store-type" },
        ]}
      />
      <h1 className="text-3xl font-semibold text-[#445E94]">Manage Store Type</h1>
      <div className="space-y-4 rounded-lg bg-white shadow-sm">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">Add Store Type</h1>
        </div>
        <hr className="text-gray-200" />
        <div className="">
          <ManageStoreTypeForm onAdd={handleAdd} />
        </div>
      </div>
      <div className="space-y-4 rounded-lg bg-white shadow-sm">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">Store Type List</h1>
        </div>
        <hr className="text-gray-200" />
        <div className="px-6 py-4">
          <Table
            rows={storeTypeData}
            columns={storeTypeColumns}
            onRefresh={handleRefreshStoreType}
            loading={loadingStoreType}
            showPagination
            rowsPerPage={3}
          />
        </div>
      </div>
      {isEditModalOpen && (
        <EditStoreTypeModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          row={selectedRow}
          onSave={handleSaveEdit}
        />
      )}
      {isDeleteModalOpen && (
        <DeleteStoreTypeModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={confirmDelete}
        />
      )}
    </div>
  )
}

export default ManageStoreType