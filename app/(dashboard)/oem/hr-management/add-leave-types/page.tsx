"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React, { useState } from 'react'
import AddLeaveTypeForm from './components/AddLeaveTypeForm'
import Table from '@/components/common/table/Table'
import getAddLeaveTypeCol from './components/getAddLeaveTypeCol'
import EditAddLeaveTypeModal from './components/Modals/EditAddLeaveTypeModal'
import DeleteAddLeaveTypeModal from './components/Modals/DeleteAddLeaveTypeModal'

const AddLeaveTypes = () => {
  const [leaveTypeData, setLeaveTypeData] = useState([
    {
      id: 1,
      srNo: "01",
      leaveTypeName: "Demo Leave",
      acronym: "casual leave",
      isPaidLeave: "paid",
      action: "",
    },
    {
      id: 2,
      srNo: "02",
      leaveTypeName: "Demo Leave",
      acronym: "casual leave",
      isPaidLeave: "unpaid",
      action: "",
    },
  ]);

  const [loadingLeaveType, setLoadingLeaveType] = useState(false);

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
    setLeaveTypeData((prev) =>
      prev.map((item) => (item.id === updatedRow.id ? updatedRow : item))
    );
  };

  const confirmDelete = () => {
    setLeaveTypeData((prev) => prev.filter((item) => item.id !== selectedRow.id));
    setIsDeleteModalOpen(false);
    setSelectedRow(null);
  };

  const leaveTypeColumns = getAddLeaveTypeCol(handleEdit, handleDeleteClick);

  const handleRefreshLeaveType = () => {
    setLoadingLeaveType(true);
    setTimeout(() => {
      setLoadingLeaveType(false);
      setLeaveTypeData((prev) => [...prev]); // refresh same data
    }, 1000);
  };

  // 🔹 Add new row when form submits
  const handleAddLeaveType = (newLeave: any) => {
    setLeaveTypeData((prev) => [
      ...prev,
      {
        ...newLeave,
        id: prev.length + 1,
        srNo: String(prev.length + 1).padStart(2, "0"),
      },
    ]);
  };

  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem" },
          { label: "HR Management", href: "/oem/hr-management" },
          { label: "Add Leave Types", href: "/oem/sales-order-workflow/add-leave-types" },
        ]}
      />
      <h1 className="text-3xl font-semibold text-[#445E94]">Add Leave Types</h1>

      {/* 🔹 Pass callback */}
      <AddLeaveTypeForm onAddLeaveType={handleAddLeaveType} />

      <div className="space-y-4 rounded-lg bg-white">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">Leave Type List</h1>
        </div>
        <hr className="text-gray-200" />

        <div className="px-6 py-4">
          <Table
            rows={leaveTypeData}
            columns={leaveTypeColumns}
            onRefresh={handleRefreshLeaveType}
            loading={loadingLeaveType}
            showPagination
            rowsPerPage={3}
          />
        </div>
      </div>

      {/* Edit Modal */}
      <EditAddLeaveTypeModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        row={selectedRow}
        onSave={handleSaveEdit}
      />

      {/* Delete Modal */}
      <DeleteAddLeaveTypeModal 
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={confirmDelete}
      />
    </div>
  )
}

export default AddLeaveTypes
