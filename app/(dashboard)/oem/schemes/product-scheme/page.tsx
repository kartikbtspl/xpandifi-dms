
"use client";
import Breadcrumb from "@/components/common/ui/BreadCrumb";
import Button from "@/components/common/ui/Button";
import React, { useState } from "react";
// import getDistributorSchemeCol from "./components/getDistributorSchemeCol";
import Table from "@/components/common/table/Table";
import { useRouter } from "next/navigation";
import { useProductSchemeStore } from "@/store/useProductSchemeStore";
import EditProductSchemeModal from "./components/Modals/EditProductSchemeModal";
import DeleteProductSchemeModal from "./components/Modals/DeleteProductSchemeModal";
import getProductSchemeCol from "./components/getProductSchemeCol";

const ProductScheme = () => {
  const { activeSchemes, archivedSchemes, updateScheme, deleteScheme } = useProductSchemeStore();
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

  const columns = getProductSchemeCol(handleEdit, handleDeleteClick);



  return (
    <div className="space-y-4">
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "Schemes", href: "/oem/schemes" },
          { label: "Distributor Scheme", href: "/oem/schemes/product-scheme" },
        ]}
      />
      <h1 className="text-3xl text-[#445E94] font-semibold">
        Product Scheme
      </h1>

      <div className="flex gap-2 justify-end w-full">
        <Button
          size="sm"
          variant={showArchived ? "primary" : "outline"}
          onClick={() => setShowArchived((prev) => !prev)}
        >
          {showArchived ? "Show Active Product Schemes" : "Show Archive Product Schemes"}
        </Button>

        <Button
          size="sm"
          onClick={() =>
            router.push("/oem/schemes/product-scheme/new-product-scheme")
          }
        >
          <span className="mr-1">+</span>Add New Product Scheme
        </Button>
      </div>
      {
        <div className="bg-white p-6 rounded-lg space-y-4">
          <div className="flex justify-between">
            <h2 className="font-semibold text-[#445E94] text-lg">{!showArchived ? "Active Product Scheme List" : "Archive Product Scheme List"}</h2>
            <div className="flex gap-4">
              <Button variant="outline">Import</Button>
              <Button>Export</Button>
            </div>
          </div>
          <hr className="text-gray-200" />
          <Table
            rows={showArchived ? archivedSchemes : activeSchemes}
            columns={columns}
            filterKey="schemeName"
            showPagination
          />
        </div>
      }

      <EditProductSchemeModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        row={selectedRow}
        onSave={handleSaveEdit}
      />
      <DeleteProductSchemeModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={confirmDelete}
      />
    </div>
  );
};

export default ProductScheme;
