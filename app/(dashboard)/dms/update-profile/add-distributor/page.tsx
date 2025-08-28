"use client";

import { useState } from "react";
import ToggleBasicInfo from "./ToggleBasicInfo";
import getDistributorPanelColumns from "./distributorPanelColumn";
import Table from "@/components/common/table/Table";
import AddDistributorLocation from "./AddDistributorLocations";
import Button from "@/components/common/ui/Button";
import getAddRootColumns from "./addRootColumn";
import EditRootModal from "./modals/EditRootModal";
import DeleteRootModal from "./modals/DeleteRootModal";
// import ConfirmationModal from "./ConfirmationModal";

export default function AddDistributer() {
  const [activeTab, setActiveTab] = useState("Distributor Panel");
  const [isArchiveOpen, setArchiveOpen] = useState(false);
  const [isAssignOpen, setAssignOpen] = useState(false);

  const [assignRow, setAssignRow] = useState<any | null>(null);
  const [deleteRow, setDeleteRow] = useState<any | null>(null); 

  // Sample distributor panel data
  const [distributorPanelData, setDistributorPanelData] = useState([
    { id: 1, name: "Productwise Sales Report" },
    { id: 2, name: "Productwise Sales Report" },
    { id: 3, name: "Productwise Sales Report" },
  ]);

  // Root data
  const [addRootData, setAddRootData] = useState([
    { id: 1, rootName: "ABC road highways", blank: "" },
    { id: 2, rootName: "ABC road highways", blank: "" },
    { id: 3, rootName: "ABC road highways", blank: "" },
  ]);

  // Columns
  const distributorPanelColumn = getDistributorPanelColumns();
  const addRootColumns = getAddRootColumns({
    onEdit: (row) => setAssignRow(row),
    onDelete: (row) => setDeleteRow(row),
  });

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-semibold">Add Distributor</h1>
        <p className="text-[#969BA0]">Add Your Distributor Details</p>
      </div>

      <ToggleBasicInfo />

      <div className="flex flex-col w-full">
        {/* Tabs */}
        <div className="flex gap-6 border-b mb-4">
          {["Distributor Panel", "Add Distributer Locations", "Add Root"].map(
            (tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 text-sm font-medium transition-colors ${
                  activeTab === tab
                    ? "border-b-2 border-blue-500 text-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab}
              </button>
            )
          )}
        </div>

        {/* Tab Content */}
        <div className="flex-1">
          {activeTab === "Distributor Panel" && (
            <Table
              rows={distributorPanelData}
              columns={distributorPanelColumn}
              rowsPerPage={5}
            />
          )}

          {activeTab === "Add Distributer Locations" && (
            <AddDistributorLocation />
          )}

          {activeTab === "Add Root" && (
            <Table
              columns={addRootColumns}
              rows={addRootData}
              rowsPerPage={3}
            />
          )}
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-end gap-3 mt-6">
          <Button variant="outline" className="text-[#E06371] border-[#E06371]">
            Cancel
          </Button>
          <Button>Send Credential SMS</Button>
          <Button className="bg-[#19182F] text-white">Save Distributor</Button>
        </div>
      </div>
      {/* Edit Modal */}
      <EditRootModal isOpen={!!assignRow} onClose={() => setAssignRow(null)}   />
      {/* Delete Confirmation Modal */}
      <DeleteRootModal isOpen={deleteRow} onClose={() => setDeleteRow(null)}/>
    </div>
  );
}
