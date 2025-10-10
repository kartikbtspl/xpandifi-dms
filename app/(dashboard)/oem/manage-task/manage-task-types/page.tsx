"use client";
import Breadcrumb from '@/components/common/ui/BreadCrumb';
import React, { useState } from 'react';
import ManageTaskTypeForm from './components/ManageTaskTypeForm';
import getManageTaskTypeCol from './components/getManageTaskTypeCol';
import Table from '@/components/common/table/Table';
import EditManageTaskModal from './components/Modals/EditManageTaskModal';
import DeleteManageTaskModal from './components/Modals/DeleteManageTaskModal';
import { v4 as uuidv4 } from "uuid";

const ManageTaskTypes = () => {
  const [taskTypeData, setTaskTypeData] = useState([
    { id: uuidv4(), srNo: "1", taskTypeName: "Task 1", action: "" },
    { id: uuidv4(), srNo: "2", taskTypeName: "Task 2", action: "" },
    { id: uuidv4(), srNo: "3", taskTypeName: "Task 3", action: "" },
  ]);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>(null);
  const [loadingTaskTypes, setLoadingTaskTypes] = useState(false);

  const handleEdit = (row: any) => {
    setSelectedRow(row);
    setIsEditModalOpen(true);
  };

  const handleDeleteClick = (row: any) => {
    setSelectedRow(row);
    setIsDeleteModalOpen(true);
  };

  const handleSaveEdit = (updatedRow: any) => {
    setTaskTypeData(prev => {
      const newData = prev.map(item => (item.id === updatedRow.id ? updatedRow : item));
      return newData.map((item, idx) => ({ ...item, srNo: String(idx + 1) }));
    });
  };

  const confirmDelete = () => {
    setTaskTypeData(prev => {
      const newData = prev.filter(item => item.id !== selectedRow.id);
      return newData.map((item, idx) => ({ ...item, srNo: String(idx + 1) }));
    });
    setIsDeleteModalOpen(false);
    setSelectedRow(null);
  };

  const handleAddTaskType = (newTask: { taskTypeName: string }) => {
    setTaskTypeData(prev => {
      const newData = [
        ...prev,
        {
          id: uuidv4(),
          taskTypeName: newTask.taskTypeName,
          action: "",
        },
      ];
      return newData.map((item, idx) => ({ ...item, srNo: String(idx + 1) }));
    });
  };

  const handleRefreshTaskTypes = () => {
    setLoadingTaskTypes(true);
    setTimeout(() => {
      setLoadingTaskTypes(false);
      setTaskTypeData(prev => prev.map((item, idx) => ({ ...item, srNo: String(idx + 1) })));
    }, 1000);
  };

  const taskTypeColumns = getManageTaskTypeCol(handleEdit, handleDeleteClick);

  return (
    <div className="space-y-4">
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "Manage Task", isClickable: false },
          { label: "Manage Task Types", href: "/oem/manage-task/manage-task-types" },
        ]}
      />
      <h1 className="text-3xl font-semibold text-[#445E94]">Manage Task Types</h1>
      <div className="space-y-4 rounded-lg bg-white shadow-sm">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">Task Type Form</h1>
        </div>
        <hr className="text-gray-200" />
        <div className="">
          <ManageTaskTypeForm onAddTaskType={handleAddTaskType} />
        </div>
      </div>
      <div className="space-y-4 rounded-lg bg-white shadow-sm">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">Task Type List</h1>
        </div>
        <hr className="text-gray-200" />
        <div className="px-6 py-4">
          <Table
            rows={taskTypeData}
            columns={taskTypeColumns}
            onRefresh={handleRefreshTaskTypes}
            loading={loadingTaskTypes}
            showPagination
            rowsPerPage={3}
          />
        </div>
      </div>
      {isEditModalOpen && (
        <EditManageTaskModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          row={selectedRow}
          onSave={handleSaveEdit}
        />
      )}
      {isDeleteModalOpen && (
        <DeleteManageTaskModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={confirmDelete}
        />
      )}
    </div>
  );
};

export default ManageTaskTypes;
