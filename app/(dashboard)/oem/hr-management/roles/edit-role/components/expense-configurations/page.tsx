"use client"
import React, { useState } from 'react'
import ExpenseConfigurationForm from './components/ExpenseConfigurationForm';
import getExpenseConfigCol from './components/getExpenseConfigCol';
import Table from '@/components/common/table/Table';
import EditExpenseModal from './components/Modals/EditExpenseModal';
import DeleteExpenseModal from "./components/Modals/DeleteExpenseModal"

function ExpenseConfigurations() {

  const [expenseConfigData, setExpenseConfigData] = useState([
    {
      id: 1,
      srNo: "01",
      expenseCode: "",
      expenseType: "",
      cityType: "",
      expenseName: "",
      maxAllowedAmount: "",
      isDefault: "",
      isFixed: "",
      isDistance: "",
      modeOfTravel: "",
    },
    {
      id: 2,
      srNo: "02",
      expenseCode: "",
      expenseType: "",
      cityType: "",
      expenseName: "",
      maxAllowedAmount: "",
      isDefault: "",
      isFixed: "",
      isDistance: "",
      modeOfTravel: "",
    },
  ]);


  const [loadingExpenseConfig, setLoadingExpenseConfig] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>(null);

  const handleEdit = (row: any) => { setSelectedRow(row); setIsEditModalOpen(true); };
  const handleDeleteClick = (row: any) => { setSelectedRow(row); setIsDeleteModalOpen(true); };
  const handleSaveEdit = (updatedRow: any) => {
    setExpenseConfigData(prev => prev.map(item => item.id === updatedRow.id ? updatedRow : item));
  };
  const confirmDelete = () => {
    setExpenseConfigData(prev => prev.filter(item => item.id !== selectedRow.id));
    setIsDeleteModalOpen(false);
    setSelectedRow(null);
  };

  const expenseConfigColumns = getExpenseConfigCol(handleEdit, handleDeleteClick);

  const handleRefreshExpenseConfig = () => {
    setLoadingExpenseConfig(true);
    setTimeout(() => {
      setLoadingExpenseConfig(false);
      setExpenseConfigData(prev => [...prev]);
    }, 1000);
  };

  const handleAddExpense = (newJourney: any) => {
    setExpenseConfigData(prev => [
      ...prev,
      {
        ...newJourney,
        id: prev.length + 1,
        srNo: String(prev.length + 1).padStart(2, "0"),
      },
    ]);
  };

  return (
    <div className='space-y-4 min-h-200'>
      <ExpenseConfigurationForm onAddExpenseConfig={handleAddExpense} />
      <Table
        rows={expenseConfigData}
        columns={expenseConfigColumns}
        onRefresh={handleRefreshExpenseConfig}
        loading={loadingExpenseConfig}
        showPagination
        rowsPerPage={3}
      />
      <EditExpenseModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        row={selectedRow}
        onSave={handleSaveEdit}
      />
      <DeleteExpenseModal 
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={confirmDelete}
      />
    </div>
  )
}

export default ExpenseConfigurations