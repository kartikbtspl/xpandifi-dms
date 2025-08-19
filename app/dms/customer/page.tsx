"use client";

import { useState } from "react";
import Table from "../../../components/common/table/Table";
import SearchFilters from "./components/SearchFilters";
import getCustomerColumns from "./components/customerColumns";
import CustomerCoverageDashboard from "./components/CustomerCoverageDashboard";
import Button from "../../../components/common/ui/Button";
import ArchiveCustomerModal from "./components/modals/ArchiveCustomerModal";
import AssignRouteModal from "./components/modals/AssignRouteModal";
import { useRouter } from "next/navigation";

export default function Customer() {
  const router = useRouter();
  const [isArchiveOpen, setArchiveOpen] = useState(false);
  const [isAssignOpen, setAssignOpen] = useState(false);
  const [customers, setCustomers] = useState([
    {
      id: 1,
      customerName: "Bajaj Enterprises",
      customerCode: "149233",
      customerType: "A- Class",
      cityType: "Confirmed",
      zone: "Nil",
      distributorName: "Teamspring",
      email: "johnsmith121@gmail.com",
      createdBy: "Anup Naik",
      mobile: "77220116",
    },
    {
      id: 2,
      customerName: "Bajaj Enterprises",
      customerCode: "149233",
      customerType: "A- Class",
      cityType: "Confirmed",
      zone: "Nil",
      distributorName: "Teamspring",
      email: "johnsmith121@gmail.com",
      createdBy: "Anup Naik",
      mobile: "77220116",
    },
    {
      id: 3,
      customerName: "Bajaj Enterprises",
      customerCode: "149233",
      customerType: "A- Class",
      cityType: "Confirmed",
      zone: "Nil",
      distributorName: "Teamspring",
      email: "johnsmith121@gmail.com",
      createdBy: "Anup Naik",
      mobile: "77220116",
    },
    {
      id: 4,
      customerName: "Bajaj Enterprises",
      customerCode: "149233",
      customerType: "A- Class",
      cityType: "Confirmed",
      zone: "Nil",
      distributorName: "Teamspring",
      email: "johnsmith121@gmail.com",
      createdBy: "Anup Naik",
      mobile: "77220116",
    },
    {
      id: 5,
      customerName: "Bajaj Enterprises",
      customerCode: "149233",
      customerType: "A- Class",
      cityType: "Confirmed",
      zone: "Nil",
      distributorName: "Teamspring",
      email: "johnsmith121@gmail.com",
      createdBy: "Anup Naik",
      mobile: "77220116",
    },
    {
      id: 6,
      customerName: "Bajaj Enterprises",
      customerCode: "149233",
      customerType: "A- Class",
      cityType: "Confirmed",
      zone: "Nil",
      distributorName: "Teamspring",
      email: "johnsmith121@gmail.com",
      createdBy: "Anup Naik",
      mobile: "77220116",
    },
    {
      id: 7,
      customerName: "Bajaj Enterprises",
      customerCode: "149233",
      customerType: "A- Class",
      cityType: "Confirmed",
      zone: "Nil",
      distributorName: "Teamspring",
      email: "johnsmith121@gmail.com",
      createdBy: "Anup Naik",
      mobile: "77220116",
    },
    {
      id: 8,
      customerName: "Bajaj Enterprises",
      customerCode: "149233",
      customerType: "A- Class",
      cityType: "Confirmed",
      zone: "Nil",
      distributorName: "Teamspring",
      email: "johnsmith121@gmail.com",
      createdBy: "Anup Naik",
      mobile: "77220116",
    },
    {
      id: 9,
      customerName: "Bajaj Enterprises",
      customerCode: "149233",
      customerType: "A- Class",
      cityType: "Confirmed",
      zone: "Nil",
      distributorName: "Teamspring",
      email: "johnsmith121@gmail.com",
      createdBy: "Anup Naik",
      mobile: "77220116",
    },
    {
      id: 10,
      customerName: "Bajaj Enterprises",
      customerCode: "149233",
      customerType: "A- Class",
      cityType: "Confirmed",
      zone: "Nil",
      distributorName: "Teamspring",
      email: "johnsmith121@gmail.com",
      createdBy: "Anup Naik",
      mobile: "77220116",
    },
    {
      id: 11,
      customerName: "Bajaj Enterprises",
      customerCode: "149233",
      customerType: "A- Class",
      cityType: "Confirmed",
      zone: "Nil",
      distributorName: "Teamspring",
      email: "johnsmith121@gmail.com",
      createdBy: "Anup Naik",
      mobile: "77220116",
    },
  ]);

  const [loading, setLoading] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const columns = getCustomerColumns((row) => {
    router.push(`/dms/customer/${row.id}`);
    setSelectedRow(row);
    setModalOpen(true);
  });

  const handleRefresh = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Customer</h1>
      <SearchFilters />
      <div className="mt-6">
        <CustomerCoverageDashboard />
      </div>
      <div className="mt-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold mb-4">Customer View</h1>
          <div>
            <div className="flex items-center space-x-4">
              {/* Archive selected customer */}
              <button
                // disabled={selectedCount === 0}
                onClick={() => setArchiveOpen(true)}
                className="flex items-center px-6 py-2 bg-[#445E94] text-white hover:bg-[#445E99] rounded-full"
              >
                Archive selected customer
              </button>

              {/* Assign Routes Distributor */}
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
                Assign Routes Distributor
              </button>

              {/* Import */}
              <Button variant="outline">Import</Button>

              {/* Export */}
              <Button variant="outline">Export</Button>
            </div>
          </div>
        </div>
        <Table
          columns={columns}
          rows={customers}
          onRowClick={row => router.push(`/dms/customer/${row.id}`)}
          filterKey="cityType"
          onRefresh={handleRefresh}
          loading={loading}
          showPagination={true}
          rowsPerPage={10}
        />
      </div>
      <ArchiveCustomerModal
        isOpen={isArchiveOpen}
        onClose={() => setArchiveOpen(false)}
      />

      <AssignRouteModal
        isOpen={isAssignOpen}
        onClose={() => setAssignOpen(false)}
      />
    </div>
  );
}
