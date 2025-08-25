"use client";
import TotalDistributors from "./TotalDistributors";
import Input from "../../../../components/common/ui/Input";
import Button from "../../../../components/common/ui/Button";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Pencil } from "lucide-react";
import getAddDistributerListColumns from "./addDistributerListColumn";
import Table from "../../../../components/common/table/Table";
import AssignRouteModal from "../../customer/components/modals/AssignRouteModal";
import AddDistributer from "./AddDistributor";

export default function SendCredentials() {
  const [distributerListData, setDistributerListData] = useState([
    {
      id: 1,
      srNo: "1",
      distributerName: "sssa",
      distributerCode: "Bajaj Enterprizes",
      status: "2025-07-24 8:15",
      blank: (
        <button className="p-2 rounded-full hover:bg-gray-100">
          <Pencil className="w-5 h-5 text-blue-600" />
        </button>
      ),
    },
    {
      id: 2,
      srNo: "1",
      distributerName: "sssa",
      distributerCode: "Bajaj Enterprizes",
      status: "2025-07-24 8:15",
      blank: (
        <button className="p-2 rounded-full hover:bg-gray-100">
          <Pencil className="w-5 h-5 text-blue-600" />
        </button>
      ),
    },
    {
      id: 3,
      srNo: "1",
      distributerName: "sssa",
      distributerCode: "Bajaj Enterprizes",
      status: "2025-07-24 8:15",
      blank: (
        <button className="p-2 rounded-full hover:bg-gray-100">
          <Pencil className="w-5 h-5 text-blue-600" />
        </button>
      ),
    },
    {
      id: 4,
      srNo: "1",
      distributerName: "sssa",
      distributerCode: "Bajaj Enterprizes",
      status: "2025-07-24 8:15",
      blank: (
        <button className="p-2 rounded-full hover:bg-gray-100">
          <Pencil className="w-5 h-5 text-blue-600" />
        </button>
      ),
    },
    {
      id: 5,
      srNo: "1",
      distributerName: "sssa",
      distributerCode: "Bajaj Enterprizes",
      status: "2025-07-24 8:15",
      blank: (
        <button className="p-2 rounded-full hover:bg-gray-100">
          <Pencil className="w-5 h-5 text-blue-600" />
        </button>
      ),
    },
    {
      id: 6,
      srNo: "1",
      distributerName: "sssa",
      distributerCode: "Bajaj Enterprizes",
      status: "2025-07-24 8:15",
      blank: (
        <button className="p-2 rounded-full hover:bg-gray-100">
          <Pencil className="w-5 h-5 text-blue-600" />
        </button>
      ),
    },
    {
      id: 7,
      srNo: "1",
      distributerName: "sssa",
      distributerCode: "Bajaj Enterprizes",
      status: "2025-07-24 8:15",
      blank: (
        <button className="p-2 rounded-full hover:bg-gray-100">
          <Pencil className="w-5 h-5 text-blue-600" />
        </button>
      ),
    },
    {
      id: 8,
      srNo: "1",
      distributerName: "sssa",
      distributerCode: "Bajaj Enterprizes",
      status: "2025-07-24 8:15",
      blank: (
        <button className="p-2 rounded-full hover:bg-gray-100">
          <Pencil className="w-5 h-5 text-blue-600" />
        </button>
      ),
    },
    {
      id: 9,
      srNo: "1",
      distributerName: "sssa",
      distributerCode: "Bajaj Enterprizes",
      status: "2025-07-24 8:15",
      blank: (
        <button className="p-2 rounded-full hover:bg-gray-100">
          <Pencil className="w-5 h-5 text-blue-600" />
        </button>
      ),
    },
    {
      id: 10,
      srNo: "1",
      distributerName: "sssa",
      distributerCode: "Bajaj Enterprizes",
      status: "2025-07-24 8:15",
      blank: (
        <button className="p-2 rounded-full hover:bg-gray-100">
          <Pencil className="w-5 h-5 text-blue-600" />
        </button>
      ),
    },
  ]);

  const [loadingDistributerData, setLoadingDistributerData] = useState(false);
  const distributerListColumn = getAddDistributerListColumns();

  const handleDistributerListRefresh = () => {
    setLoadingDistributerData(true);
    setTimeout(() => setLoadingDistributerData(false), 1000);
  };

  const [activeTab, setActiveTab] = useState("Archieve customers");

  const [isAssignOpen, setAssignOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Distributer Management</h1>
        <p className="text-[#969BA0]">
          Manage and track your distributer networkd
        </p>
      </div>
      <div>
        <TotalDistributors />
      </div>
      <div className="space-y-5 bg-white p-8 rounded-lg shadow-sm">
        <div className="flex justify-between">
          <div className="w-[48%]">
            <label htmlFor="">Search Distributers</label>
            <Input placeholder="search distributers by name or code..." />
          </div>
          <div className="flex w-[50%] justify-between">
            <div className="w-[30%]">
              <label htmlFor="">Select Country</label>
              <Input
                placeholder="Select Country"
                endIcon={<ChevronDown className="w-5 h-5" />}
              />
            </div>
            <div className="w-[30%]">
              <label htmlFor="">Select Zone</label>
              <Input
                placeholder="Select Zone"
                endIcon={<ChevronDown className="w-5 h-5" />}
              />
            </div>
            <div className="w-[30%]">
              <label htmlFor="">Select State</label>
              <Input
                placeholder="Select State"
                endIcon={<ChevronDown className="w-5 h-5" />}
              />
            </div>
          </div>
        </div>
        <div className=" flex justify-end">
          <Button className="text-[#E06371] border-[#E06371]" variant="outline">
            Reset filters
          </Button>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="w-[48%]">
          <h1>Add Distributer List</h1>
        </div>
        <div className="w-[30%] flex justify-between">
          <button
            onClick={() => setAssignOpen(true)}
            className="flex items-center px-6 py-2 bg-[#445E94] text-white rounded-full hover:bg-[#445E99]"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 4v16m8-8H4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Add Distributor
          </button>
          <Button variant="outline">Import</Button>
          <Button variant="outline">Export</Button>
        </div>
      </div>
      <div>
        <div className="flex gap-6 pb-2 p-2 mb-4">
          {["Archieve customers", "No-archieve customers"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 text-sm text-[#718EBF] font-medium ${
                activeTab === tab
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        {activeTab === "Archieve customers" && (
          <div>
            <Table
              columns={distributerListColumn}
              rows={distributerListData}
              onRefresh={handleDistributerListRefresh}
              rowsPerPage={5}
              loading={loadingDistributerData}
              filterKey="distributerCode"
            />
          </div>
        )}
        {activeTab === "No-archieve customers" && (
          <div>
            <Table
              columns={distributerListColumn}
              rows={distributerListData}
              onRefresh={handleDistributerListRefresh}
              rowsPerPage={5}
              loading={loadingDistributerData}
              filterKey="distributerCode"
            />
          </div>
        )}
      </div>
      <AddDistributer
        isOpen={isAssignOpen}
        onClose={() => setAssignOpen(false)}
      />
    </div>
  );
}
