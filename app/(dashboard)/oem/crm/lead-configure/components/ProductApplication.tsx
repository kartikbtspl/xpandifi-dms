"use client";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Input from "@/components/common/ui/Input";
import Dropdown from "@/components/common/ui/Dropdown";
import Button from "@/components/common/ui/Button";
import Table from "@/components/common/table/Table";
import getProductApplicationCol from "./productApplicationCol";
import ProductEditModal from "./Modals/ProductEditModal";
import ProductDeleteModal from "./Modals/ProductDeleteModal";

type FormValues = {
  name: string;
  sequence: string;
  selectUmo: string;
};

const ProductApplication: React.FC = () => {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      name: "",
      sequence: "",
      selectUmo: "",
    },
  });

  const umoOptions = [
    { value: "zone1", label: "Zone 1" },
    { value: "zone2", label: "Zone 2" },
    { value: "zone3", label: "Zone 3" },
  ];

  const [productAppData, setProductAppData] = useState([
    { id: 1, srNo: "1", productApplication: "Sample App", sequence: 1, umoSize: "zone1", action: "" },
  ]);

  const [loadingProductApp, setLoadingProductApp] = useState(false);

  // Modal states
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>(null);

  const handleRefreshProductApp = () => {
    setLoadingProductApp(true);
    setTimeout(() => {
      setLoadingProductApp(false);
      setProductAppData([...productAppData]);
    }, 1000);
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
    setProductAppData((prev) =>
      prev.map((item) => (item.id === updatedRow.id ? updatedRow : item))
    );
  };

  const confirmDelete = () => {
    setProductAppData((prev) => prev.filter((item) => item.id !== selectedRow.id));
    setIsDeleteModalOpen(false);
    setSelectedRow(null);
  };

  const ProductAppColumns = getProductApplicationCol(handleEdit, handleDeleteClick);

  // ✅ Add new row to table
  const onSubmit = (data: FormValues) => {
    setProductAppData((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        srNo: String(prev.length + 1),
        productApplication: data.name,
        sequence: Number(data.sequence),
        umoSize: data.selectUmo,
        action: "",
      },
    ]);
    reset(); // clear form after submit
  };

  return (
    <div className="space-y-4">
      <div className="bg-white p-6 rounded-lg shadow-sm w-full">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-end"
        >
          {/* Name */}
          <Controller
            name="name"
            control={control}
            render={({ field, fieldState }) => (
              <Input
                {...field}
                label="Name"
                placeholder="Enter Product Application"
                error={fieldState.error?.message}
                size="sm"
              />
            )}
          />

          {/* Sequence */}
          <Controller
            name="sequence"
            control={control}
            render={({ field, fieldState }) => (
              <Input
                {...field}
                type="number"
                label="Sequence"
                placeholder="Enter Sequence"
                error={fieldState.error?.message}
                size="sm"
              />
            )}
          />

          {/* Select UMO */}
          <Controller
            name="selectUmo"
            control={control}
            render={({ field, fieldState }) => (
              <Dropdown
                {...field}
                label="Select UMO"
                placeholder="--Select UMO size--"
                options={umoOptions}
                error={fieldState.error?.message}
                size="sm"
                className="rounded-full"
              />
            )}
          />

          {/* Add Button */}
          <div className="flex justify-start mb-1">
            <Button type="submit" rounded="full" className="px-6">
              + Add Product Application
            </Button>
          </div>
        </form>
      </div>

      {/* ✅ Table updates immediately */}
      <Table
        rows={productAppData}
        columns={ProductAppColumns}
        onRefresh={handleRefreshProductApp}
        loading={loadingProductApp}
        filterKey="productApplication"
      />

      <ProductEditModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        row={selectedRow}
        onSave={handleSaveEdit}
      />

      {/* Delete Modal */}
      <ProductDeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={confirmDelete}
      />
    </div>
  );
};

export default ProductApplication;
