"use client";
import Breadcrumb from "@/components/common/ui/BreadCrumb";
import React, { useState } from "react";
import getUserWiseLeavesCol from "./components/getUserWiseLeavesCol";
import Table from "@/components/common/table/Table";
import Button from "@/components/common/ui/Button";
import { FiUpload } from "react-icons/fi";
import AddUserRoleModal from "./components/Modals/AddUserWiseLeavesModal"; // ✅ Import your modal
import UploadLeavesModal from "./components/Modals/UploadLeavesModal";

const UserWiseLeaves = () => {
  // ✅ Table data state
  const [userWiseLeaveData, setUserWiseLeaveData] = useState([
    {
      id: 1,
      srNo: "01",
      userName: "John Doe",
      leaveName: "Casual",
      totalLeave: 12,
      leaveBalance: 8,
      leaveConsumed: 4,
    },
    {
      id: 2,
      srNo: "02",
      userName: "Jane Smith",
      leaveName: "Sick",
      totalLeave: 10,
      leaveBalance: 5,
      leaveConsumed: 5,
    },
  ]);

  const [loadingUserWiseLeaves, setLoadingUserWiseLeaves] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  // ✅ Columns definition
  const userWiseLeavesColumns = getUserWiseLeavesCol();

  // ✅ Add new record
  const handleAddLeaveDetails = (newRow: any) => {
    const srNo = (userWiseLeaveData.length + 1).toString().padStart(2, "0");
    const formattedRow = {
      ...newRow,
      srNo,
      userName: newRow.user, // rename to match table
      leaveName: newRow.leaveType,
      totalLeave: newRow.noOfLeaves,
    };
    setUserWiseLeaveData((prev) => [...prev, formattedRow]);
  };

  // ✅ Refresh functionality
  const handleRefreshUserWiseLeaves = () => {
    setLoadingUserWiseLeaves(true);
    setTimeout(() => {
      setLoadingUserWiseLeaves(false);
      // Optionally re-fetch or reset data here
    }, 1000);
  };

  const handleImportFile = (file: File | null) => {
    if (!file) return;
    // logic to read and parse the Excel file and update userWiseLeaveData accordingly
    // Example: read the file with xlsx or similar library and update state
    console.log("Imported file:", file.name);
  };

  return (
    <div className="space-y-4">
      {/* Breadcrumb */}
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "HR Management", isClickable: false },
          {
            label: "User Wise Leaves",
            href: "/oem/hr-management/user-wise-leaves",
          },
        ]}
      />

      <h1 className="text-3xl font-semibold text-[#445E94]">
        User Wise Leaves
      </h1>

      {/* Table Section */}
      <div className="space-y-4 rounded-lg bg-white">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">User Wise Leaves List</h1>
          <div className="flex gap-3">
            <Button onClick={() => setIsAddModalOpen(true)}>
              <span className="text-xl">+</span>Add Leave Details
            </Button>
            <Button onClick={() => setIsUploadModalOpen(true)} startIcon={<FiUpload />} variant="outline">
              Upload Leaves
            </Button>
          </div>
        </div>

        <hr className="text-gray-200" />

        <div className="px-6 py-4 w-[1200px] overflow-x-auto">
          <Table
            rows={userWiseLeaveData}
            columns={userWiseLeavesColumns}
            onRefresh={handleRefreshUserWiseLeaves}
            loading={loadingUserWiseLeaves}
            showPagination
            rowsPerPage={3}
          />
        </div>
      </div>

      {/* ✅ Add Modal */}
      <AddUserRoleModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSave={handleAddLeaveDetails}
      />
      <UploadLeavesModal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
        onImport={handleImportFile}
      />
    </div>
  );
};

export default UserWiseLeaves;
