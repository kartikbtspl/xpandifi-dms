"use client";
import React, { useState } from "react";
import LeadTypeForm from "./LeadTypeForm";
import getLeadTypeCol from "./leadTypeColumn";
import Table from "@/components/common/table/Table";
import EditLeadTypeModal from "./Modals/EditLeadTypeModal";
import DeleteLeadTypeModal from "./Modals/DeleteLeadTypeModal";

function LeadType() {
  const [leadTypeData, setLeadTypeData] = useState([
    { id: 1, srNo: "1", leadTypeName: "Retail", sequence: 1 },
    { id: 2, srNo: "2", leadTypeName: "Wholesale", sequence: 2 },
    { id: 3, srNo: "3", leadTypeName: "Online", sequence: 3 },
  ]);

  const [loadingLeadType, setLoadingLeadType] = useState(false);

  // Modal states
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>(null);

  const handleRefreshLeadtype = () => {
    setLoadingLeadType(true);
    setTimeout(() => {
      setLoadingLeadType(false);
      setLeadTypeData([...leadTypeData]);
    }, 1000);
  };

  const handleEdit = (row: any) => {
    setSelectedRow(row);
    setIsEditModalOpen(true);
  };

  const handleDeleteClick = (row: any) => {
    setSelectedRow(row);
    setIsDeleteModalOpen(true);
  };

  const handleSaveEdit = (updatedRow: any) => {
    setLeadTypeData((prev) =>
      prev.map((item) => (item.id === updatedRow.id ? updatedRow : item))
    );
  };

  const confirmDelete = () => {
    setLeadTypeData((prev) => prev.filter((item) => item.id !== selectedRow.id));
    setIsDeleteModalOpen(false);
    setSelectedRow(null);
  };

  const leadTypeColumns = getLeadTypeCol(handleEdit, handleDeleteClick);

  return (
    <div className="space-y-4">
      <LeadTypeForm />
      <Table
        rows={leadTypeData}
        columns={leadTypeColumns}
        loading={loadingLeadType}
        onRefresh={handleRefreshLeadtype}
        filterKey="leadTypeName"
      />

      {/* Edit Modal */}
      <EditLeadTypeModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        row={selectedRow}
        onSave={handleSaveEdit}
      />

      {/* Delete Modal */}
      <DeleteLeadTypeModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={confirmDelete}
      />
    </div>
  );
}

export default LeadType;
