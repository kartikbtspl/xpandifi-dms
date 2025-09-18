"use client";

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Input from "@/components/common/ui/Input";
import Dropdown from "@/components/common/ui/Dropdown";
import Button from "@/components/common/ui/Button";
import Table from "@/components/common/table/Table";
import { useProductSchemeStore } from "@/store/useProductSchemeStore";
import { useRouter } from "next/navigation";
import getNewDistributorSchemeCol from "./getNewProductSchemeCol";
import DeleteNewProductSchemeModal from "./Modals/DeleteNewProductSchemeModal"

export default function NewSchemeForm() {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      schemeName: "",
      startDate: "",
      endDate: "",
      terms: "",
      description: "",
      distributor: "",
      schemeOn: "",
      schemeOnValue: "",
      discountType: "",
      discountValue: "",
      country: "",
      state: "",
      city: "",
      productCode: "",
      pack: ""
    },
  });
  const { deleteScheme } = useProductSchemeStore();

  const distributorOptions = [
    { value: "dist1", label: "Distributor 1" },
    { value: "dist2", label: "Distributor 2" },
  ];

  const schemeOnOptions = [
    { value: "invoice", label: "Invoice Amount" },
    { value: "product", label: "Product" },
  ];

  const discountTypeOptions = [
    { value: "percentage", label: "Percentage" },
    { value: "flat", label: "Flat Amount" },
  ];
  const countryOptions = [
    { value: "my", label: "India" },
    { value: "other", label: "USA" },
  ];
  const stateOptions = [
    { value: "mh", label: "Maharashtra" },
    { value: "wg", label: "Washington" },
  ];
  const cityOptions = [
    { value: "lt", label: "Latur" },
    { value: "op", label: "Olympia" },
  ];

  const [rows, setRows] = useState<any[]>([]);
  const addScheme = useProductSchemeStore((state) => state.addScheme);
  const router = useRouter();

  const onSubmit = (data: any) => {
    const newRow = {
       id: Date.now(),
      // srNo: rows.length + 1,
      opportunityName: data.schemeName,
      schemeOn: data.schemeOn,
      schemeOnValue: data.schemeOnValue,
      discountType: data.discountType,
      discountValue: data.discountValue,
      startDate: data.startDate,
      endDate: data.endDate,
      schemeName: data.schemeName,
      productCode: data.productCode, 
      pack: data.pack, 
    };

    setRows((prev) => [...prev, newRow]);
    reset();
  };

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>(null);

  const handleDeleteClick = (row: any) => {
    setSelectedRow(row);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    if (selectedRow) {
      // remove the selected row from local state
      setRows((prevRows) => prevRows.filter((row) => row.id !== selectedRow.id));

      // optional: if you really want to delete from global store too
      deleteScheme(selectedRow.id);

      setIsDeleteModalOpen(false);
      setSelectedRow(null);
    }
  };

  const handleFinalSubmit = () => {
  if (rows.length === 0) return;

  rows.forEach((row) => {
    addScheme({
      schemeName: row.schemeName,
      startDate: row.startDate,
      endDate: row.endDate,
    });
  });

  setRows([]);
  reset();
  router.push("/oem/schemes/product-scheme");
};


  return (
    <div className="space-y-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 bg-white p-6 rounded-lg shadow-sm"
      >
        {/* Inputs same as before... */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Controller
            name="schemeName"
            control={control}
            render={({ field }) => (
              <Input {...field} label="Scheme Name" required placeholder="Scheme Name" />
            )}
          />

          <Controller
            name="startDate"
            control={control}
            render={({ field }) => (
              <Input {...field} type="date" label="Start Date" required />
            )}
          />

          <Controller
            name="endDate"
            control={control}
            render={({ field }) => (
              <Input {...field} type="date" label="End Date" required />
            )}
          />

          <Controller
            name="terms"
            control={control}
            render={({ field }) => (
              <Input {...field} label="Terms And Condition" required placeholder="Enter Terms" />
            )}
          />

          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <Input {...field} label="Description" placeholder="Enter Description" />
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Controller
            name="country"
            control={control}
            render={({ field }) => (
              <Dropdown {...field} label="Country" placeholder="--Select Country--" options={countryOptions} />
            )}
          />
          <Controller
            name="state"
            control={control}
            render={({ field }) => (
              <Dropdown {...field} label="State" placeholder="--Select State--" options={stateOptions} />
            )}
          />
          <Controller
            name="city"
            control={control}
            render={({ field }) => (
              <Dropdown {...field} label="City" placeholder="--Select City--" options={cityOptions} />
            )}
          />
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Controller
            name="productCode"
            control={control}
            render={({ field }) => (
              <Dropdown {...field} label="Product Code" placeholder="--Select Product--" options={distributorOptions} />
            )}
          />
          <Controller
            name="pack"
            control={control}
            render={({ field }) => (
              <Dropdown {...field} label="Pack" placeholder="--Select pack--" options={distributorOptions} />
            )}
          />

          <Controller
            name="schemeOn"
            control={control}
            render={({ field }) => (
              <Dropdown {...field} label="Scheme On" placeholder="--Select Scheme On--" options={schemeOnOptions} />
            )}
          />

          <Controller
            name="schemeOnValue"
            control={control}
            render={({ field }) => (
              <Input {...field} label="Scheme On Value" placeholder="Scheme Value" />
            )}
          />

          <Controller
            name="discountType"
            control={control}
            render={({ field }) => (
              <Dropdown {...field} label="Discount Type" placeholder="--Select Discount Type--" options={discountTypeOptions} />
            )}
          />

          <Controller
            name="discountValue"
            control={control}
            render={({ field }) => (
              <Input {...field} label="Discount Value" placeholder="Enter Value" />
            )}
          />
        </div>

        <div className="flex justify-end gap-4 mt-6">
          <Button type="button" variant="outline" onClick={() => reset()}>
            Reset
          </Button>
          <Button type="submit">Add</Button>
        </div>
      </form>

      <div className="space-y-4">
        <Table
          columns={getNewDistributorSchemeCol(handleDeleteClick)}
          rows={rows}
          showPagination
        />

        <div className="w-full flex justify-center gap-4">
          <Button onClick={handleFinalSubmit}>Submit</Button>
          <Button
            variant="outline"
            onClick={() => {
              reset();
              setRows([]);
              router.push("/oem/schemes/product-scheme");
            }}
          >
            Cancel
          </Button>
        </div>
      </div>
      <DeleteNewProductSchemeModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={confirmDelete}
      />
    </div>
  );
}
