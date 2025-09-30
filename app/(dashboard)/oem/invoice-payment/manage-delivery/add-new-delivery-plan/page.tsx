"use client";

import Breadcrumb from "@/components/common/ui/BreadCrumb";
import React, { useState } from "react";
import AddNewDeliveryPlanForm from "./components/AddNewDeliveryPlanForm";
import getNewDeliveryPlanCol from "./components/getNewDeliveryPlanCol";
import Table from "@/components/common/table/Table";
import { useDeliveryPlanStore } from "@/store/useDeliveryPlanStore";
import Button from "@/components/common/ui/Button";
import EditNewDeliveryPlan from "./Modals/EditNewDeliveryPlan";
import DeleteNewDeliveryPlanModal from "./Modals/DeleteNewDeliveryPlanModal";

function AddNewDeliveryPlan() {
  const { deliveryPlans, updateDeliveryPlan, deleteDeliveryPlan } = useDeliveryPlanStore();

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
    updateDeliveryPlan(updatedRow);
    setIsEditModalOpen(false);
    setSelectedRow(null);
  };

  const confirmDelete = () => {
    deleteDeliveryPlan(selectedRow.id);
    setIsDeleteModalOpen(false);
    setSelectedRow(null);
  };

  const newDeliveryColumns = getNewDeliveryPlanCol(handleEdit, handleDeleteClick);

  const [loadingNewDeliveryPlan, setLoadingNewDeliveryPlan] = useState(false);

  // 🔄 Refresh handler
  const handleRefreshNewDeliveryPlan = async () => {
    setLoadingNewDeliveryPlan(true);

    // Simulate API call / fetch from backend
    await new Promise((res) => setTimeout(res, 1500));

    // If you’re fetching from an API, update Zustand store here
    // Example:
    // const data = await fetch("/api/deliveryPlans").then(res => res.json());
    // useDeliveryPlanStore.setState({ deliveryPlans: data });

    setLoadingNewDeliveryPlan(false);
  };

  return (
    <div className="space-y-4">
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "Invoice & Payment", href: "/oem/invoice-payment" },
          { label: "Manage Delivery", href: "/oem/invoice-payment/manage-delivery" },
        ]}
      />

      <h1 className="text-3xl font-semibold text-[#445E94]">Manage Delivery</h1>

      <AddNewDeliveryPlanForm />

      <div className="space-y-4 rounded-lg bg-white">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">Delivery Plan List</h1>
        </div>
        <hr className="text-gray-200" />
        <div className="px-6 w-[1200px]">
          <Table rows={deliveryPlans} columns={newDeliveryColumns} showPagination loading={loadingNewDeliveryPlan} onRefresh={handleRefreshNewDeliveryPlan} />
        </div>
        <div className="flex justify-center gap-3 py-4">
          <Button variant="outline">Cancel</Button>
          <Button>Save</Button>
        </div>
      </div>

      <EditNewDeliveryPlan
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        row={selectedRow}
        onSave={handleSaveEdit}
      />
      <DeleteNewDeliveryPlanModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={confirmDelete}
      />
    </div>
  );
}

export default AddNewDeliveryPlan;
