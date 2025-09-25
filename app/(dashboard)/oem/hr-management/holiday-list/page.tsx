"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import Button from '@/components/common/ui/Button'
import React, { useState } from 'react'
import { FiShare } from 'react-icons/fi'
import getHolidayListCol from './components/getHolidayListCol'
import Table from '@/components/common/table/Table'
import { useRouter } from 'next/navigation'
import { useHolidayStore } from "@/store/hr-management/holiday-list/useHolidayStore";
import EditHolidayListModal from './components/Modals/EditHolidayListModal'
import DeleteHolidayListModal from './components/Modals/DeleteHolidayListModal'

const HolidayList = () => {

  const [holidayListData, setHolidayListDataData] = useState([
    {
      id: 1,
      srNo: "01",
      holidayName: "",
      holidayDateTime: "",
      year: "2024",
      country: "",
      state: "",
      action: "",
    },
    {
      id: 2,
      srNo: "02",
      holidayName: "",
      holidayDateTime: "",
      year: "2025",
      country: "",
      state: "",
      action: "",
    },
  ]);

  const router = useRouter();
  const holidays = useHolidayStore((state) => state.holidays);
  const updateHoliday = useHolidayStore((state) => state.updateHoliday);
  const deleteHoliday = useHolidayStore((state) => state.deleteHoliday);

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
    // Update the store
    updateHoliday(updatedRow);

    // Optional: update local state for table refresh
    setHolidayListDataData((prev) =>
      prev.map((item) => (item.id === updatedRow.id ? updatedRow : item))
    );
  };

  const confirmDelete = () => {
    if (selectedRow) {
      deleteHoliday(selectedRow.id); // remove from store
      setIsDeleteModalOpen(false);
      setSelectedRow(null);
    }
  };

  const [loadingHolidayList, setLoadingHolidayList] = useState(false);

  const holidayListColumns = getHolidayListCol(handleEdit, handleDeleteClick);

  const handleRefreshHolidayList = () => {
    setLoadingHolidayList(true);
    setTimeout(() => {
      setLoadingHolidayList(false);
      setHolidayListDataData((prev) => [...prev]); // refresh same data
    }, 1000);
  };

  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem" },
          { label: "HR Management", href: "/oem/hr-management" },
          {
            label: "Holiday List",
            href: "/oem/hr-management/holiday-list",
          },
        ]}
      />
      <h1 className="text-3xl font-semibold text-[#445E94]">Holiday List</h1>
      <div className="space-y-4 rounded-lg bg-white">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">
            Holiday List
          </h1>
          <div className='flex gap-3'>
            <Button startIcon={<FiShare />} variant='outline' className="cursor-pointer">Upload Holiday's</Button>
            <Button className="cursor-pointer" onClick={() => router.push('/oem/hr-management/holiday-list/add-new-holiday')}><span className='text-xl'>+</span>Add New Holiday</Button>
          </div>
        </div>
        <hr className="text-gray-200" />

        <div className="px-6 py-4">
          <Table
            rows={holidays}
            columns={holidayListColumns}
            onRefresh={handleRefreshHolidayList}
            loading={loadingHolidayList}
            showPagination
            rowsPerPage={3}
          />
        </div>
      </div>
      <EditHolidayListModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        row={selectedRow}
        onSave={handleSaveEdit}
      />
      <DeleteHolidayListModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={confirmDelete}
      />
    </div>
  )
}

export default HolidayList