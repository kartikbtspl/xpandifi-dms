"use client"
import React, { useState } from 'react'
import Table from '@/components/common/table/Table';
import getManagePackUnitCol from './components/getManagePackUnitCol';
import ManagePackUnitForm from './components/ManagePackUnitForm';
import DeletePackUnitModal from './components/Modals/DeletePackUnitModal';
import EditPackUnitModal from './components/Modals/EditPackUnitModal';
import Breadcrumb from '@/components/common/ui/BreadCrumb';

function ManagePackUnit() {

  const [packUnitData, setPackUnitData] = useState([
    {
      id: 1,
      srNo: "01",
      shortForm: "",
      longForm: "",
      defaultValue: "",
      action: "",
    },
    {
      id: 2,
      srNo: "02",
      shortForm: "",
      longForm: "",
      defaultValue: "",
      action: "",
    },
  ]);

  const [loadingPackUnit, setLoadingPackUnit] = useState(false);

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
    setPackUnitData(prev => {
      const newData = prev.map(item => (item.id === updatedRow.id ? updatedRow : item));
      return newData.map((item, idx) => ({ ...item, srNo: String(idx + 1) }));
    });
  };

  const confirmDelete = () => {
    setPackUnitData(prev => {
      const newData = prev.filter(item => item.id !== selectedRow.id);
      return newData.map((item, idx) => ({ ...item, srNo: String(idx + 1) }));
    });
    setIsDeleteModalOpen(false);
    setSelectedRow(null);
  };

  const packUnitColumns = getManagePackUnitCol(handleEdit, handleDeleteClick)

  const handleRefreshPackUnit = () => {
    setLoadingPackUnit(true);
    setTimeout(() => {
      setLoadingPackUnit(false);
      setPackUnitData(prev => prev.map((item, idx) => ({ ...item, srNo: String(idx + 1) })));
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
          { label: "Manage Pack Unit", href: "/oem/settings/manage-pack-unit" },
        ]}
      />
      <h1 className="text-3xl font-semibold text-[#445E94]">Manage Pack Unit</h1>
      <div className="space-y-4 rounded-lg bg-white shadow-sm">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">Add Pack Unit</h1>
        </div>
        <hr className="text-gray-200" />
        <div className="">
          <ManagePackUnitForm onAdd={handleAdd} />
        </div>
      </div>
      <div className="space-y-4 rounded-lg bg-white shadow-sm">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">Pack Unit List</h1>
        </div>
        <hr className="text-gray-200" />
        <div className="px-6 py-4">
          <Table
            rows={packUnitData}
            columns={packUnitColumns}
            onRefresh={handleRefreshPackUnit}
            loading={loadingPackUnit}
            showPagination
            rowsPerPage={3}
          />
        </div>
      </div>
      {isEditModalOpen && (
        <EditPackUnitModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          row={selectedRow}
          onSave={handleSaveEdit}
        />
      )}
      {isDeleteModalOpen && (
        <DeletePackUnitModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={confirmDelete}
        />
      )}
    </div>
  )
}

export default ManagePackUnit