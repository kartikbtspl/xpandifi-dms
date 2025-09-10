"use client";

import { useState } from "react";
import Table from "@/components/common/table/Table";
import SearchFilters from "./components/SearchFilters";
import getCustomerColumns from "./components/customerColumns";
import CustomerCoverageDashboard from "./components/CustomerCoverageDashboard";
import Button from "@/components/common/ui/Button";
import ArchiveCustomerModal from "./components/modals/ArchiveCustomerModal";
import AssignRouteModal from "./components/modals/AssignRouteModal";
import { useRouter } from "next/navigation";
import { FiMoreVertical } from "react-icons/fi";
import Breadcrumb from "@/components/common/ui/BreadCrumb";
import ImportCreditModal from "./components/modals/ImportCreditModal";

export default function Customer() {
  const router = useRouter();
  const [isArchiveOpen, setArchiveOpen] = useState(false);
  const [isAssignOpen, setAssignOpen] = useState(false);

  const [isArchived, setIsArchived] = useState(false);
  const [isMapView, setIsMapView] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const handleConfirm = (file: File | null) => {
    if (file) {
      console.log("Selected File:", file);
    }
    setIsOpen(false);
  };

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
      createdDate: "2019-08-01 13:14:00.0",
      blank: <FiMoreVertical />
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
      createdDate: "2019-08-01 13:14:00.0",
      blank: <FiMoreVertical />
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
      createdDate: "2019-08-01 13:14:00.0",
      blank: <FiMoreVertical />
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
      createdDate: "2019-08-01 13:14:00.0",
      blank: <FiMoreVertical />
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
      createdDate: "2019-08-01 13:14:00.0",
      blank: <FiMoreVertical />
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
      createdDate: "2019-08-01 13:14:00.0",
      blank: <FiMoreVertical />
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
      createdDate: "2019-08-01 13:14:00.0",
      blank: <FiMoreVertical />
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
      createdDate: "2019-08-01 13:14:00.0",
      blank: <FiMoreVertical />
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
      createdDate: "2019-08-01 13:14:00.0",
      blank: <FiMoreVertical />
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
      createdDate: "2019-08-01 13:14:00.0",
      blank: <FiMoreVertical />
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
      createdDate: "2019-08-01 13:14:00.0",
      blank: <FiMoreVertical />
    },
  ]);

  const [loading, setLoading] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const columns = getCustomerColumns((row) => {
    router.push(`/oem/customer-management/master/${row.id}`);
    setSelectedRow(row);
    setModalOpen(true);
  });

  const handleRefresh = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };
  return (
    <div className="space-y-6">
      <Breadcrumb crumbs={[
        { label: "Home", href: "/dashboard" },
        { label: "Customer Management", href: "/customer-management" },
        { label: "Customer Master", href: "/customer-management/master" },
      ]} />
      <h1 className="text-3xl font-bold mb-4">Customer Master</h1>
      <SearchFilters />

      <div className="flex items-center gap-2 p-2 rounded-full">
        {/* Toggle: Map View / List */}
        <button
          onClick={() => {setIsMapView(!isMapView) 
            setIsArchived(false)}}
          className={`px-4 py-2 rounded-full text-sm font-medium shadow
            ${isMapView
              ? "bg-[#709EFF33] text-black hover:bg-blue-200"
              : "bg-white text-gray-600 hover:bg-gray-100"
            }`}
        >
          {isMapView ? "Customer List" : "Show Map View"}
        </button>

        {/* Action Buttons */}
        <button className="px-4 py-2 rounded-full text-sm font-medium text-gray-600 bg-white shadow hover:bg-gray-100"
          onClick={() => router.push('/oem/customer-management/master/add-customer')}>
          + Add New Customer
        </button>
        <button className="px-4 py-2 rounded-full text-sm font-medium text-gray-600 bg-white shadow hover:bg-gray-100" onClick={() => setIsOpen(true)}>
          Credit Import
        </button>
        <button className="px-4 py-2 rounded-full text-sm font-medium text-gray-600 bg-white shadow hover:bg-gray-100">
          Credit Export
        </button>
      </div>
      <div className="mt-6">
        <CustomerCoverageDashboard />
      </div>
      <div className="mt-6 ">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold mb-4">{isArchived ? "Archive Customer List" : `${isMapView ? "Map View" : "Customer List"}`}</h1>
          <div>
            <div className="flex items-center space-x-4">
              {/* Archive selected customer */}
              <button
                // disabled={selectedCount === 0}
                onClick={() => {
                  if(isArchived) {
                    setIsArchived(false)
                  }else{
                    setArchiveOpen(true)
                    setIsMapView(false)
                  }
                  
                }}
                className="flex items-center px-6 py-2 bg-[#445E94] text-white hover:bg-[#445E99] rounded-full"
              >
                {isArchived ? "Show Active Customers" : "Archive selected customer"}
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

        {isArchived === true ? (
          <>
            {/* <Button>Active List</Button> */}
            <Table
              columns={columns}
              rows={customers}
              onRowClick={row => router.push(`/oem/customer-management/master/${row.id}`)}
              filterKey="cityType"
              onRefresh={handleRefresh}
              loading={loading}
              showPagination={true}
              rowsPerPage={5}
            />
          </>
        ) : (
          <>
          {
            isMapView === true ? (<>
            <div className="w-full h-[500px] rounded-lg overflow-hidden shadow">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d16982.716348798855!2d73.77523134811534!3d18.552841063341223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1757420314356!5m2!1sen!2sin" width="100%" height="450" loading="lazy"></iframe>
            </div>
            </> ) : (<>
            <Table
              columns={columns}
              rows={customers}
              onRowClick={row => router.push(`/oem/customer-management/master/${row.id}`)}
              filterKey="cityType"
              onRefresh={handleRefresh}
              loading={loading}
              showPagination={true}
              rowsPerPage={10}
            />
            </>)
          }  
          </>
        )
        }
      </div>
      <ArchiveCustomerModal
        isOpen={isArchiveOpen}
        onClose={() => setArchiveOpen(false)}
        onConfirm={() => setIsArchived(true)}
      />

      <AssignRouteModal
        isOpen={isAssignOpen}
        onClose={() => setAssignOpen(false)}
      />

      <ImportCreditModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onConfirm={handleConfirm}
      />
    </div>
  );
}
