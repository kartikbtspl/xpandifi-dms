"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React, { useState } from 'react'
import ManageForm from './components/ManageForm'
import getManageTaxCol from './components/manageTaxCol'
import Table from '@/components/common/table/Table'
import EditTaxModal from './components/Modals/EditTaxModal'
import DeleteTaxModal from './components/Modals/DeleteTaxModal'
import AddTaxModal from './components/Modals/AddTaxModal'

const ManageTax = () => {

  const [taxData, setTaxData] = useState([
        { id: 1, srNo: "1", taxCode: 'tax1', taxName: "GST0" ,percentage: 0, action: "" },
        { id: 2, srNo: "2", taxCode: 'tax2', taxName: "GST5", percentage: 5, action: "" },
        { id: 3, srNo: "3", taxCode: 'tax3', taxName:"GST25", percentage: 25, action: "" },
      ])
  
      const [isEditModalOpen, setIsEditModalOpen] = useState(false);
      const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
      const [selectedRow, setSelectedRow] = useState<any>(null);
    
      const [loadingTax, setLoadingTax] = useState(false);
  
      const handleEdit = (row: any) => {
      setSelectedRow(row);
      setIsEditModalOpen(true);
    };
  
    const handleDeleteClick = (row: any) => {
      setSelectedRow(row);
      setIsDeleteModalOpen(true);
    };
  
    const handleSaveEdit = (updatedRow: any) => {
      setTaxData((prev) =>
        prev.map((item) => (item.id === updatedRow.id ? updatedRow : item))
      );
    };
  
    const confirmDelete = () => {
      setTaxData((prev) => prev.filter((item) => item.id !== selectedRow.id));
      setIsDeleteModalOpen(false);
      setSelectedRow(null);
    };

      const handleAddTax = (newTax: { taxName: string; taxCode: string; percentage: number }) => {
    setTaxData((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        srNo: String(prev.length + 1),
        ...newTax,
        action: "",
      },
    ]);
  };
    
      const taxColumns = getManageTaxCol(handleEdit, handleDeleteClick);
    
      const handleRefreshTax = () => {
        setLoadingTax(true);
        setTimeout(() => {
          setLoadingTax(false);
          setTaxData(taxData);
        }, 1000)
      };

  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem" },
          { label: "Product Management", href: "/oem/product-management" },
          { label: "Manage Tax", href: "/oem/product-management/manage-tax" },
        ]}
      />
      <h1 className='text-3xl text-[#445E94] font-semibold'>Manage Tax</h1>
      <ManageForm onAddTax={handleAddTax} />
      
      <Table rows={taxData} columns={taxColumns} onRefresh={handleRefreshTax} loading={loadingTax} filterKey='taxCode'/>
      
      

      <EditTaxModal 
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        row={selectedRow}
        onSave={handleSaveEdit}
      />

      {/* Delete Modal  */}
      <DeleteTaxModal 
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={confirmDelete}
      />
    </div>
  )
}

export default ManageTax