"use client";

import { useState } from "react";
import Input from "../../../../components/common/ui/Input";
import ToggleBasicInfo from "./ToggleBasicInfo";
import getDistributorPanelColumns from "./distributorPanelColumn";
import Table from "../../../../components/common/table/Table";
import AddDistributorLocation from "./AddDistributorLocations";
import Button from "../../../../components/common/ui/Button";

export default function addDistributer() {
  const [activeTab, setActiveTab] = useState("Distributor Panel");
  const [distributorPanelData, setDistributorPanelData] = useState([
    {
      id: 1,
      name: "Productwise Sales Report",
    },
    {
      id: 2,
      name: "Productwise Sales Report",
    },
    {
      id: 3,
      name: "Productwise Sales Report",
    },
    {
      id: 4,
      name: "Productwise Sales Report",
    },
    {
      id: 5,
      name: "Productwise Sales Report",
    },
    {
      id: 6,
      name: "Productwise Sales Report",
    },
    {
      id: 7,
      name: "Productwise Sales Report",
    },
    {
      id: 8,
      name: "Productwise Sales Report",
    },
    {
      id: 9,
      name: "Productwise Sales Report",
    },
  ]);

  const distributorPanelColumn = getDistributorPanelColumns();
  const [loadingPanelData, setLoadingPanelData] = useState(false);

  const handleDistributorPanelRefresh = () => {
    setLoadingPanelData(true);
    setTimeout(() => setLoadingPanelData(false), 1000);
  };

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-semibold">Add Distriuter</h1>
        <p className="text-[#969BA0]">Add Your Distributer Details</p>
      </div>
      <div>
        <ToggleBasicInfo />
      </div>
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
              onRefresh={handleDistributorPanelRefresh}
              rowsPerPage={5}
              loading={loadingPanelData}
            />
          )}

          {activeTab === "Add Distributer Locations" && (
            <AddDistributorLocation />
          )}

          {activeTab === "Add Root" && <div />}
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
    </div>
  );
}
