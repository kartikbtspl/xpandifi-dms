"use client";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Input from "@/components/common/ui/Input";
import Dropdown from "@/components/common/ui/Dropdown";
import Button from "@/components/common/ui/Button";
import getProductAppCol from "./productAppCol";
import Table from "@/components/common/table/Table";
import ProductAppDeleteModal from "./Modal/ProductAppDeleteModal";

type FormValues = {
  productApplication: string;
  quantity: number;
  uom: string;
};

const ProductAppForm: React.FC = () => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      productApplication: "",
      quantity: 0,
      uom: "",
    },
  });

  const [appData, setAppData] = useState([
      { id: 1,srNo: "1", productApplication: 'Mutual Fund', quantity: 1,
        umoSize: "MT", action: "" },
      { id: 2,srNo: "2", productApplication: 'Mutual Fund 2', quantity: 2,
        umoSize: "MT", action: "" },
      { id: 3,srNo: "3", productApplication: 'Mutual Fund 3', quantity: 3,
        umoSize: "MT", action: "" },
    ])
  
    const [loadingProductApp, setLoadingProductApp] = useState(false);

      const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
      const [selectedRow, setSelectedRow] = useState<any>(null);

    const handleDeleteClick = (row: any) => {
      setSelectedRow(row);
      setIsDeleteModalOpen(true);
    };

    const confirmDelete = () => {
    setAppData((prev) => prev.filter((item) => item.id !== selectedRow.id));
    setIsDeleteModalOpen(false);
    setSelectedRow(null);
  };
  
    const appColumns = getProductAppCol(handleDeleteClick);
  
    const handleRefreshAppProduct = () => {
        setLoadingProductApp(true);
        setTimeout(() => {
          setLoadingProductApp(false);
          setAppData(appData);
        }, 1000)};

  const productOptions = [
    { value: "app1", label: "Application 1" },
    { value: "app2", label: "Application 2" },
    { value: "app3", label: "Application 3" },
  ];

  const uomOptions = [
    { value: "kg", label: "Kilogram" },
    { value: "ltr", label: "Liter" },
    { value: "pcs", label: "Pieces" },
  ];

  const onSubmit = (data: FormValues) => {
    console.log("Submitted Data:", data);
  };

  return (
    <div className="space-y-4">
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-6 rounded-lg shadow-sm w-full flex flex-col lg:flex-row gap-4 items-end "
    >
      {/* Product Application */}
      <div className="w-full lg:w-1/4">
        <Controller
          name="productApplication"
          control={control}
          render={({ field, fieldState }) => (
            <Dropdown
              {...field}
              label="Product Application"
              placeholder="--Select Product Application--"
              options={productOptions}
              error={fieldState.error?.message}
              size="sm"
              className="rounded-full"
            />
          )}
        />
      </div>

      {/* Quantity */}
      <div className="w-full lg:w-1/4">
        <Controller
          name="quantity"
          control={control}
          render={({ field, fieldState }) => (
            <Input
              {...field}
              type="number"
              label="Quantity"
              placeholder="Enter Quantity"
              error={fieldState.error?.message}
              size="sm"
            />
          )}
        />
      </div>

      {/* UOM */}
      <div className="w-full lg:w-1/4">
        <Controller
          name="uom"
          control={control}
          render={({ field, fieldState }) => (
            <Dropdown
              {...field}
              label="Uom"
              placeholder="--Select Uom Size--"
              options={uomOptions}
              error={fieldState.error?.message}
              size="sm"
              className="rounded-full"
            />
          )}
        />
      </div>

      {/* Add Button */}
      <div className="">
        <Button type="submit" rounded="full" className="px-6">
          <span className="text-xl">+</span> Add
        </Button>
      </div>
    </form>
    <Table rows={appData} columns={appColumns} onRefresh={handleRefreshAppProduct}loading={loadingProductApp} filterKey="productApplication" />

    {/* Delete Modal  */}
    <ProductAppDeleteModal 
      isOpen={isDeleteModalOpen}
      onClose={() => setIsDeleteModalOpen(false)}
      onConfirm={confirmDelete}
    />
    </div>
  );
};

export default ProductAppForm;
