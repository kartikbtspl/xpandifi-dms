"use client";
import Breadcrumb from "@/components/common/ui/BreadCrumb";
import React, { useState } from "react";
import LeaveConfigurationForm from "./components/LeaveConfigurationForm";
import getLeaveConfigurationCol from "./components/getLeaveConfigurationCol";
import Table from "@/components/common/table/Table";
import Button from "@/components/common/ui/Button";
import { useRouter } from "next/navigation";
import EditLeaveConfigurationModal from "./components/Modals/EditLeaveConfigurationModal";
import DeleteLeaveConfigurationModal from "./components/Modals/DeleteLeaveConfigurationModal";
import AddLeaveConfigurationModal from "./components/Modals/AddLeaveConfigurationModal";

const LeaveConfiguration = () => {
  const [leaveConfigurationData] = useState([
    {
      id: 1,
      srNo: "01",
      role: "Admin",
      leaveType: "casual",
      noOfLeaves: 13,
    },
    {
      id: 2,
      srNo: "02",
      role: "Manager",
      leaveType: "sick",
      noOfLeaves: 10,
    },
    {
      id: 3,
      srNo: "03",
      role: "Employee",
      leaveType: "earned",
      noOfLeaves: 15,
    },
    {
      id: 4,
      srNo: "04",
      role: "Intern",
      leaveType: "unpaid",
      noOfLeaves: 5,
    },
    {
      id: 5,
      srNo: "05",
      role: "Manager",
      leaveType: "casual",
      noOfLeaves: 12,
    },
  ]);

  const router = useRouter();
  const [filteredData, setFilteredData] = useState(leaveConfigurationData);
  const [loadingLeaveConfiguration, setLoadingLeaveConfiguration] = useState(false);

  const handleView = (row: any) => {
    alert(`Viewing leave balance for ${row.role}`);
  };

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>(null);

  const handleAddLeaveConfig = (newRow: any) => {
    setFilteredData((prev) => [...prev, newRow]);
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
    setFilteredData((prev) =>
      prev.map((item) => (item.id === updatedRow.id ? updatedRow : item))
    );
  };

  const confirmDelete = () => {
    setFilteredData((prev) => prev.filter((item) => item.id !== selectedRow.id));
    setIsDeleteModalOpen(false);
    setSelectedRow(null);
  };

  const leaveConfigurationColumns = getLeaveConfigurationCol(handleEdit, handleDeleteClick);

  // ✅ Now matches FormValues: { role: string; leaveType: string }
  const handleFilter = (filters: { role: string; leaveType: string }) => {
    let filtered = leaveConfigurationData;

    if (filters.role) {
      filtered = filtered.filter((row) =>
        row.role.toLowerCase().includes(filters.role.toLowerCase())
      );
    }

    if (filters.leaveType) {
      filtered = filtered.filter((row) => row.leaveType === filters.leaveType);
    }

    setFilteredData(filtered);
  };

  const handleRefreshLeaveConfiguration = () => {
    setLoadingLeaveConfiguration(true);
    setTimeout(() => {
      setLoadingLeaveConfiguration(false);
      setFilteredData(leaveConfigurationData); // reset to all
    }, 1000);
  };

  return (
    <div className="space-y-4">
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "HR Management", href: "/oem/hr-management" },
          {
            label: "Leave Configuration",
            href: "/oem/hr-management/leave-configuration",
          },
        ]}
      />

      <h1 className="text-3xl font-semibold text-[#445E94]">
        Leave Configuration
      </h1>

      {/* ✅ Pass correct handler */}
      <LeaveConfigurationForm onFilter={handleFilter} />

      <div className="space-y-4 rounded-lg bg-white">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">Role Wise Leave Configuration List</h1>
          <Button onClick={() => setIsAddModalOpen(true)}><span className="text-xl">+</span>Add Leave Configuration</Button>
        </div>
        <hr className="text-gray-200" />

        <div className="px-6 py-4">
          <Table
            rows={filteredData}
            columns={leaveConfigurationColumns}
            onRefresh={handleRefreshLeaveConfiguration}
            loading={loadingLeaveConfiguration}
            showPagination
            rowsPerPage={3}
          />
        </div>
      </div>
      <AddLeaveConfigurationModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAddLeaveConfig}
      />
      <EditLeaveConfigurationModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        row={selectedRow}
        onSave={handleSaveEdit}
      />
      <DeleteLeaveConfigurationModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={confirmDelete}
      />
    </div>
  );
};

export default LeaveConfiguration;
