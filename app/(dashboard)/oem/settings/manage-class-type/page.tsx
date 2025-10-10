"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React, { useState } from 'react'
import ManageClassTypeForm from './components/ManageClassTypeForm'
import Table from '@/components/common/table/Table'
import getManageClassTypeCol from './components/getManageClassTypeCol'
import EditClassTypeModal from './components/Modals/EditClassTypeModal'
import DeleteClassTypeModal from './components/Modals/DeleteClassTypeModal'

const ManageClassType = () => {
  const [manageClassTypeData, setManageClassTypeData] = useState([
    {
      id: 1,
      srNo: "01",
      classTypeName: "",
      sequence: "",
      action: "",
    },
    {
      id: 2,
      srNo: "02",
      classTypeName: "",
      sequence: "",
      action: "",
    },
  ]);

  const [loadingManageClassType, setLoadingManageClassType] = useState(false);

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
    setManageClassTypeData(prev => {
      const newData = prev.map(item => (item.id === updatedRow.id ? updatedRow : item));
      return newData.map((item, idx) => ({ ...item, srNo: String(idx + 1) }));
    });
  };

  const confirmDelete = () => {
    setManageClassTypeData(prev => {
      const newData = prev.filter(item => item.id !== selectedRow.id);
      return newData.map((item, idx) => ({ ...item, srNo: String(idx + 1) }));
    });
    setIsDeleteModalOpen(false);
    setSelectedRow(null);
  };

  const manageClassTypeColumns = getManageClassTypeCol(handleEdit, handleDeleteClick)

  const handleRefreshManageClassType = () => {
    setLoadingManageClassType(true);
    setTimeout(() => {
      setLoadingManageClassType(false);
      setManageClassTypeData(prev => prev.map((item, idx) => ({ ...item, srNo: String(idx + 1) })));
    }, 1000);
  };

  const handleAdd = () => {
    alert("Add clicked...")
  }
  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "Settings", isClickable: false },
          { label: "Manage Class Type", href: "/oem/settings/manage-class-type" },
        ]}
      />
      <h1 className="text-3xl font-semibold text-[#445E94]">Manage Class Type</h1>
      <div className="space-y-4 rounded-lg bg-white shadow-sm">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">Manage Class Type</h1>
        </div>
        <hr className="text-gray-200" />
        <div className="">
          <ManageClassTypeForm onAdd={handleAdd} />
        </div>
      </div>
      <div className="space-y-4 rounded-lg bg-white shadow-sm">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">Class Type List</h1>
        </div>
        <hr className="text-gray-200" />
        <div className="px-6 py-4">
          <Table
            rows={manageClassTypeData}
            columns={manageClassTypeColumns}
            onRefresh={handleRefreshManageClassType}
            loading={loadingManageClassType}
            showPagination
            rowsPerPage={3}
          />
        </div>
      </div>
      {isEditModalOpen && (
        <EditClassTypeModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          row={selectedRow}
          onSave={handleSaveEdit}
        />
      )}
      {isDeleteModalOpen && (
        <DeleteClassTypeModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={confirmDelete}
        />
      )}
    </div>
  )
}

export default ManageClassType