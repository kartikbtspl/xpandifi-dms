"use client"
import React, { useState } from 'react'
import AddTypeFrom from './components/AddTypeForm'
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import getAddLeadTypeCol from './components/addLeadTypeCol'
import Table from '@/components/common/table/Table'
import EditManageLeadModal from './components/Modals/EditManageLeadModal'
import DeleteManageLeadModal from './components/Modals/DeleteManageLeadModal'

const ManageLeadTypes = () => {

  const [addLeadTypeData, setAddLeadTypeData] = useState([
      { id: 1, srNo: "1", leadTypeName: 'Retail', sequence: 1, action: "" },
      { id: 2, srNo: "2", leadTypeName: 'Wholesale', sequence: 2, action: "" },
      { id: 3, srNo: "3", leadTypeName: 'Online', sequence: 3, action: "" },
    ])

    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState<any>(null);
  
    const [loadingAddLeadType, setLoadingAddLeadType] = useState(false);

    const handleEdit = (row: any) => {
    setSelectedRow(row);
    setIsEditModalOpen(true);
  };

  const handleDeleteClick = (row: any) => {
    setSelectedRow(row);
    setIsDeleteModalOpen(true);
  };

  const handleSaveEdit = (updatedRow: any) => {
    setAddLeadTypeData((prev) =>
      prev.map((item) => (item.id === updatedRow.id ? updatedRow : item))
    );
  };

  const confirmDelete = () => {
    setAddLeadTypeData((prev) => prev.filter((item) => item.id !== selectedRow.id));
    setIsDeleteModalOpen(false);
    setSelectedRow(null);
  };
  
    const addLeadTypeColumns = getAddLeadTypeCol(handleEdit, handleDeleteClick);
  
    const handleRefreshLeadtype = () => {
      setLoadingAddLeadType(true);
      setTimeout(() => {
        setLoadingAddLeadType(false);
        setAddLeadTypeData(addLeadTypeData);
      }, 1000)
    };

  return (
   <div className='space-y-6'>
      <Breadcrumb
              crumbs={[
                { label: "Home", href: "/oem/dashboard" },
                { label: "CRM", href: "/oem/crm" },
                { label: "Manage Lead Types", href: "/oem/crm/manage-lead-types" },
              ]}
            />
            <h1 className="text-3xl font-bold text-[#445E94]">Manage Lead Types</h1>
      <AddTypeFrom />
      <Table rows={addLeadTypeData} columns={addLeadTypeColumns} loading={loadingAddLeadType} onRefresh={handleRefreshLeadtype} filterKey='leadTypeName' />

      {/* Edit Modal  */}
      <EditManageLeadModal 
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        row={selectedRow}
        onSave={handleSaveEdit}
      />

      {/* Delete Modal  */}
      <DeleteManageLeadModal 
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={confirmDelete}
      />
    </div>
  )
}

export default ManageLeadTypes