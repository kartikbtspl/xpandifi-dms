
"use client";
import Breadcrumb from "@/components/common/ui/BreadCrumb";
import Button from "@/components/common/ui/Button";
import React, { useState } from "react";
import Table from "@/components/common/table/Table";
import { useRouter } from "next/navigation";
import { useCategorySchemeStore } from "@/store/useCategorySchemeStore";
import getCategorySchemeCol from "./components/getCategorySchemeCol";
import EditCategoryrSchemeModal from "./components/Modals/EditCategoryrSchemeModal";
import DeleteCategorySchemeModal from "./components/Modals/DeleteCategorySchemeModal";

const CategoryScheme = () => {
  const { activeSchemes, archivedSchemes, updateScheme, deleteScheme } = useCategorySchemeStore();
  const [showArchived, setShowArchived] = useState(false);
  const router = useRouter();

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
    updateScheme(updatedRow);
    setIsEditModalOpen(false);
    setSelectedRow(null);
  };

  const confirmDelete = () => {
    deleteScheme(selectedRow.id);
    setIsDeleteModalOpen(false);
    setSelectedRow(null);
  };

  const columns = getCategorySchemeCol(handleEdit, handleDeleteClick);



  return (
    <div className="space-y-4">
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "Schemes", href: "/oem/schemes" },
          { label: "Category Scheme", href: "/oem/schemes/category-scheme" },
        ]}
      />
      <h1 className="text-3xl text-[#445E94] font-semibold">
        Category Scheme
      </h1>

      <div className="flex gap-2 justify-end w-full">
        <Button
          size="sm"
          variant={showArchived ? "primary" : "outline"}
          onClick={() => setShowArchived((prev) => !prev)}
        >
          {showArchived ? "Show Active Category Schemes" : "Show Archive Category Schemes"}
        </Button>

        <Button
          size="sm"
          onClick={() =>
            router.push("/oem/schemes/category-scheme/new-category-scheme")
          }
        >
          <span className="mr-1">+</span>Add New Category Scheme
        </Button>
      </div>
      {
        <div className="bg-white rounded-lg shadow-sm">
          <div className="flex justify-between px-6 py-3">
            <h2 className="font-semibold text-[#445E94] text-lg">{!showArchived ? "Active Category Scheme List" : "Archive Category Scheme List"}</h2>
            <div className="flex gap-3">
              <Button variant="outline">Import</Button>
              <Button>Export</Button>
            </div>
          </div>
          <hr className="text-gray-200 mb-4" />
          <div className="px-6 py-3">
          <Table
            rows={showArchived ? archivedSchemes : activeSchemes}
            columns={columns}
            filterKey="schemeName"
            showPagination
          />
          </div>
        </div>
      }

      <EditCategoryrSchemeModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        row={selectedRow}
        onSave={handleSaveEdit}
      />
      <DeleteCategorySchemeModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={confirmDelete}
      />
    </div>
  );
};

export default CategoryScheme;
