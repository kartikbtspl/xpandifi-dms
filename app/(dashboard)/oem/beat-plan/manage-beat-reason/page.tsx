"use client";

import Breadcrumb from "@/components/common/ui/BreadCrumb";
import React, { useState } from "react";
import BeatReasonForm from "./components/BeatReasonForm";
import getBeatPlanReason from "./components/getBeatPlanReason";
import { useBeatPlanReasonStore } from "@/store/beatPlanReasonStore";
import Table from "@/components/common/table/Table";

const ManageBeatReason = () => {
  const { reasons, updateReason, deleteReason } = useBeatPlanReasonStore();

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
    updateReason(updatedRow);
  };

  const confirmDelete = () => {
    deleteReason(selectedRow.id);
    setIsDeleteModalOpen(false);
    setSelectedRow(null);
  };

  const beatListReportColumns = getBeatPlanReason(
    handleEdit,
    handleDeleteClick
  );

  return (
    <div className="space-y-4">
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "Beat Plan", href: "/oem/beat-plan" },
          {
            label: "Beat Plan Reason",
            href: "/oem/beat-plan/manage-beat-reason",
          },
        ]}
      />
      <h1 className="text-3xl text-[#445E94] font-semibold">
        Beat Plan Reason
      </h1>
      <BeatReasonForm />

      {/* here you can render your table component with beatListReportColumns + reasons */}
      <Table rows={reasons} columns={getBeatPlanReason(handleEdit, handleDeleteClick)} showPagination />
    </div>
  );
};

export default ManageBeatReason;
