"use client"

import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React, { useState } from 'react'
import RouteForm from './components/RouteForm'
import Button from '@/components/common/ui/Button'
import Table from '@/components/common/table/Table'
import getRouteCol from './components/getRouteCol'
import { useRouter } from 'next/navigation'
import EditRouteModal from './components/Modals/EditRouteModal'
import DeleteRouteModal from './components/Modals/DeleteRouteModal'
import AddRouteModal from './components/Modals/AddRouteModal'

const initialActiveData = [
  {
    id: 1,
    srNo: "01",
    routeCode: "",
    routeName: "",
    distributorName: "",
    action: "",
  },
  {
    id: 2,
    srNo: "02",
    routeCode: "",
    routeName: "",
    distributorName: "",
    action: "",
  },
];

const initialArchiveData = [
  {
    id: 101,
    srNo: "01",
    routeCode: "ARCH01",
    routeName: "Archived Route A",
    distributorName: "Distributor X",
    action: "",
  },
  {
    id: 102,
    srNo: "02",
    routeCode: "ARCH02",
    routeName: "Archived Route B",
    distributorName: "Distributor Y",
    action: "",
  },
];

const Route = () => {
  const [routeData, setRouteData] = useState(initialActiveData);
  const [isArchive, setIsArchive] = useState(false);

  const router = useRouter();
  const [loadingRoute, setLoadingRoute] = useState(false);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>(null);

  const handleAddRoute = (newRoute: any) => {
    setRouteData(prev => {
      const data = [...prev, newRoute].map((item, idx) => ({
        ...item,
        srNo: String(idx + 1).padStart(2, '0'),
      }));
      return data;
    });
  };


  const handleView = () => {
    router.push("/oem/settings/route/view-route");
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
    setRouteData(prev => {
      const newData = prev.map(item => (item.id === updatedRow.id ? updatedRow : item));
      return newData.map((item, idx) => ({ ...item, srNo: String(idx + 1) }));
    });
  };

  const confirmDelete = () => {
    setRouteData(prev => {
      const newData = prev.filter(item => item.id !== selectedRow.id);
      return newData.map((item, idx) => ({ ...item, srNo: String(idx + 1) }));
    });
    setIsDeleteModalOpen(false);
    setSelectedRow(null);
  };

  const routeColumns = getRouteCol(handleView, handleEdit, handleDeleteClick);

  const handleRefreshRoute = () => {
    setLoadingRoute(true);
    setTimeout(() => {
      setLoadingRoute(false);
      setRouteData(prev => prev.map((item, idx) => ({ ...item, srNo: String(idx + 1) })));
    }, 1000);
  };
  const handleSearch = () => {
    alert("Search Clicked...")
  };

  const handleToggleArchive = () => {
    if (!isArchive) {
      setRouteData(initialArchiveData);
    } else {
      setRouteData(initialActiveData);
    }
    setIsArchive(prev => !prev);
  };

  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "Settings", isClickable: false },
          { label: "Route", href: "/oem/settings/route" },
        ]}
      />
      <h1 className="text-3xl font-semibold text-[#445E94]">Route</h1>
      <div className="space-y-4 rounded-lg bg-white shadow-sm">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">Add Store Type</h1>
        </div>
        <hr className="text-gray-200" />
        <div className="">
          <RouteForm onSearch={handleSearch} />
        </div>
      </div>
      <div className='bg-white rounded-full p-1 shadow-sm flex'>
        <Button
          variant={isArchive ? 'primary' : 'outline'}
          onClick={handleToggleArchive}
        >
          {isArchive ? "Show Active Route" : "Show Archive Route"}
        </Button>
      </div>
      <div className='flex justify-end'>
        <Button onClick={() => setIsAddModalOpen(true)}><span className='text-xl mr-3'>+</span>Add Route</Button>
      </div>
      <div className="space-y-4 rounded-lg bg-white shadow-sm">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">Store Type List</h1>
        </div>
        <hr className="text-gray-200" />
        <div className="px-6 py-4">
          <Table
            rows={routeData}
            columns={routeColumns}
            onRefresh={handleRefreshRoute}
            loading={loadingRoute}
            showPagination
            rowsPerPage={3}
          />
        </div>
      </div>
      {isAddModalOpen && (
        <AddRouteModal
          isOpen={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
          onSave={handleAddRoute}
          nextSrNo={String(routeData.length + 1).padStart(2, '0')}
        />
      )}
      {isEditModalOpen && (
        <EditRouteModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          row={selectedRow}
          onSave={handleSaveEdit}
        />
      )}
      {isDeleteModalOpen && (
        <DeleteRouteModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={confirmDelete}
        />
      )}
    </div>
  )
}

export default Route
