"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React, { useState } from 'react'
import getRoleCol from "./componentns/getRoleCol"
import Button from '@/components/common/ui/Button'
import Table from '@/components/common/table/Table'
import ImportRoleModal from './componentns/Modals/ImportRoleModal'
import ImportExpensesModal from './componentns/Modals/ImportExpensesModal'
import AddRoleModal from './componentns/Modals/AddRoleModal'
import { useRouter } from 'next/navigation'

const Roster = () => {
  const [activeRoleData, setActiveRoleData] = useState([
    { id: 1, srNo: "01", roleName: "Administrator" },
    { id: 2, srNo: "02", roleName: "Manager" },
    { id: 3, srNo: "03", roleName: "Sales Representative" },
    { id: 4, srNo: "04", roleName: "HR Coordinator" },
  ])

  const [archiveRoleData, setArchiveRoleData] = useState([
    { id: 101, srNo: "01", roleName: "Former Administrator" },
    { id: 102, srNo: "02", roleName: "Ex-Manager" },
    { id: 103, srNo: "03", roleName: "Archived Sales Rep" },
    { id: 104, srNo: "04", roleName: "Old HR Coordinator" },
  ])

  const [showArchive, setShowArchive] = useState(false)
  const [activeButton, setActiveButton] = useState("toggleUserView")
  const [roleData, setRoleData] = useState(activeRoleData)
  const [loadingRoleData, setLoadingRoleData] = useState(false)
  const [isImportModalOpen, setIsImportModalOpen] = useState(false)
  const [isImportExpensesModalOpen, setIsImportExpensesModalOpen] = useState(false)
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)

  const router = useRouter();
  const roleColumns = getRoleCol(router)
  const commonBtnClass = "px-4 py-2 rounded-full cursor-pointer text-gray-700 hover:bg-gray-100"

  const toggleUserView = () => {
    setShowArchive(!showArchive)
    setRoleData(showArchive ? activeRoleData : archiveRoleData)
    setActiveButton("toggleUserView")
  }

  const handleImportRolesClick = () => {
    setActiveButton("importRoles")
    setShowArchive(false)
  }

  const handleExportRolesClick = () => {
    setActiveButton("exportRoles")
    setShowArchive(false)
  }

  const handleImportExpensesClick = () => {
    setActiveButton("importExpenses")
    setShowArchive(false)
  }

  const handleImportFile = (file: File | null) => {
    if (!file) return
    console.log("Imported file:", file.name)
  }

  const handleImportExpensesFile = (file: File | null) => {
    if (!file) return
    console.log("Imported file:", file.name)
  }

  const handleAddRole = (newRole: { roleName: string; status: string }) => {
    if (newRole.status === "active") {
      const srNo = (activeRoleData.length + 1).toString().padStart(2, "0")
      const newEntry = {
        id: Date.now(),
        srNo,
        roleName: newRole.roleName,
      }
      const updatedActive = [...activeRoleData, newEntry]
      setActiveRoleData(updatedActive)
      if (!showArchive) setRoleData(updatedActive)
    } else if (newRole.status === "archive") {
      const srNo = (archiveRoleData.length + 1).toString().padStart(2, "0")
      const newEntry = {
        id: Date.now(),
        srNo,
        roleName: newRole.roleName,
      }
      const updatedArchive = [...archiveRoleData, newEntry]
      setArchiveRoleData(updatedArchive)
      if (showArchive) setRoleData(updatedArchive)
    }
  }

  const handleRefreshRole = () => {
    setLoadingRoleData(true)
    setTimeout(() => {
      setLoadingRoleData(false)
      setRoleData(showArchive ? archiveRoleData : activeRoleData)
    }, 1000)
  }

  return (
    <div className="space-y-4">
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "HR Management", isClickable: false },
          { label: "Role", href: "/oem/hr-management/roles" },
        ]}
      />
      <h1 className="text-3xl font-semibold text-[#445E94]">Role</h1>
      <div className="w-full rounded-full bg-white">
        <div className="flex p-1 gap-2">
          <button
            onClick={toggleUserView}
            className={`px-4 py-2 rounded-full cursor-pointer font-medium ${
              activeButton === "toggleUserView"
                ? "bg-[#445E94] text-white border-[#445E94]"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            {showArchive ? "Show Active Users" : "Show Archive Users"}
          </button>
          <button
            onClick={() => {
              handleImportRolesClick()
              setIsImportModalOpen(true)
            }}
            className={`px-4 py-2 rounded-full cursor-pointer font-medium ${
              activeButton === "importRoles"
                ? "bg-[#445E94] text-white border-[#445E94]"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Import Roles
          </button>
          <button
            onClick={handleExportRolesClick}
            className={`px-4 py-2 rounded-full cursor-pointer font-medium ${
              activeButton === "exportRoles"
                ? "bg-[#445E94] text-white border-[#445E94]"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Export Roles
          </button>
          <button
            onClick={() => {
              handleImportExpensesClick()
              setIsImportExpensesModalOpen(true)
            }}
            className={`px-4 py-2 rounded-full cursor-pointer font-medium ${
              activeButton === "importExpenses"
                ? "bg-[#445E94] text-white border-[#445E94]"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Import Expenses
          </button>
        </div>
      </div>
      <div className="flex justify-end">
        <Button onClick={() => setIsAddModalOpen(true)}>
          <span className="text-xl mr-3">+</span>Add Role
        </Button>
      </div>
      <div className="space-y-4 rounded-lg bg-white">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">
            {showArchive ? "Archive Users" : "Active Users"}
          </h1>
        </div>
        <hr className="text-gray-200" />
        <div className="px-6 py-4 w-[1200px] overflow-x-auto">
          <Table
            rows={roleData}
            columns={roleColumns}
            onRefresh={handleRefreshRole}
            loading={loadingRoleData}
            showPagination
            rowsPerPage={2}
          />
        </div>
      </div>
      <AddRoleModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSave={handleAddRole}
      />
      <ImportRoleModal
        isOpen={isImportModalOpen}
        onClose={() => setIsImportModalOpen(false)}
        onImport={handleImportFile}
      />
      <ImportExpensesModal
        isOpen={isImportExpensesModalOpen}
        onClose={() => setIsImportExpensesModalOpen(false)}
        onImport={handleImportExpensesFile}
      />
    </div>
  )
}

export default Roster
