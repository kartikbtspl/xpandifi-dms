"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React, { useState } from 'react'
import VehicleMasterForm from './components/VehicleMasterForm'
import Button from '@/components/common/ui/Button'
import Table from '@/components/common/table/Table'
import getVehicleMasterCol from './components/getVehicleMasterCol'
import { useRouter } from 'next/navigation'

const VehicleMaster = () => {
  const [vehicleData, setVehicleData] = useState([
    {
      id: 1,
      srNo: "01",
      vehicleNo: "",
      driverName: "",
      driverMobile: "",
      tonnage: "",
      margin: "",
      country: "",
      state: "",
      city: "",
      action: "",
    },
    {
      id: 2,
      srNo: "02",
      vehicleNo: "",
      driverName: "",
      driverMobile: "",
      tonnage: "",
      margin: "",
      country: "",
      state: "",
      city: "",
      action: "",
    },
    {
      id: 3,
      srNo: "03",
      vehicleNo: "",
      driverName: "",
      driverMobile: "",
      tonnage: "",
      margin: "",
      country: "",
      state: "",
      city: "",
      action: "",
    },
  ]);

  const router = useRouter();
  const [loadingVehicle, setLoadingVehicle] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>(null);

  const handleEdit = () => {
    router.push('/oem/settings/vehicle-master/edit-vehicle-master')
  }

  const confirmDelete = () => {
    setVehicleData(prev => {
      const newData = prev
        .filter(item => item.id !== selectedRow.id)
        .map((item, idx) => ({
          ...item,
          id: idx + 1, // Overwrite id to be unique and stable; or use Date.now()/uuid here too
          srNo: String(idx + 1).padStart(2, '0'),
        }));
      return newData;
    });
    setIsDeleteModalOpen(false);
    setSelectedRow(null);
  };

  const handleDeleteClick = (row: any) => {
    setSelectedRow(row);
    setIsDeleteModalOpen(true);
  };
  const vehicleColumns = getVehicleMasterCol(handleEdit, handleDeleteClick);

  const handleRefreshVehicleMaster = () => {
    setLoadingVehicle(true);
    setTimeout(() => {
      setLoadingVehicle(false);
      setVehicleData(prev =>
        prev.map((item, idx) => ({
          ...item,
          id: idx + 1, // Or keep the original id if you want them stable
          srNo: String(idx + 1).padStart(2, '0'),
        }))
      );
    }, 1000);
  }

  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "Settings", isClickable: false },
          { label: "Vehicle Master", href: "/oem/settings/vehicle-master" },
        ]}
      />
      <h1 className="text-3xl font-semibold text-[#445E94]">Vehicle Master</h1>
      <div className="space-y-4 rounded-lg bg-white shadow-sm">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">Vehicle Master List</h1>
        </div>
        <hr className="text-gray-200" />
        <div className="">
          <VehicleMasterForm />
        </div>
      </div>
      <div className='flex justify-end'>
        <Button onClick={() => router.push('/oem/settings/vehicle-master/add-vehicle-master')}><span className='text-xl mr-3'>+</span>Add New Manage Vehicle</Button>
      </div>
      <div className="space-y-4 rounded-lg bg-white shadow-sm">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">Store Type List</h1>
        </div>
        <hr className="text-gray-200" />
        <div className="px-6 py-4">
          <Table
            rows={vehicleData}
            columns={vehicleColumns}
            onRefresh={handleRefreshVehicleMaster}
            loading={loadingVehicle}
            showPagination
            rowsPerPage={3}
          />
        </div>
      </div>
    </div>
  )
}

export default VehicleMaster