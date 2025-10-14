"use client";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import Button from "@/components/common/ui/Button";
import Input from "@/components/common/ui/Input";
import Table from "@/components/common/table/Table";
import getStoreTypeCol from "./storeTypeCol";

interface StoreTypeForm {
  storeTypeName: string;
}

export default function StoreType() {
  const { control, handleSubmit, reset } = useForm<StoreTypeForm>({
    defaultValues: { storeTypeName: "" },
  });

  const [storeTypeData, setStoreTypeData] = React.useState([
    {
      id: 1,
      srNo: "1",
      storeTypeName: "Confirmed",
      action: '',
    },
    {
      id: 2,
      srNo: "2",
      storeTypeName: "Provisional",
      action: '',
    },
  ]);

  const storeTypeCols = getStoreTypeCol();
  const [loadingStoreType, setLoadingStoreType] = React.useState(false);

  // Add logic
  const onSubmit = (data: StoreTypeForm) => {
    if (!data.storeTypeName.trim()) {
      alert("Please enter a store type name.");
      return;
    }

    const newEntry = {
      id: storeTypeData.length + 1,
      srNo: String(storeTypeData.length + 1),
      storeTypeName: data.storeTypeName,
      action: '',
    };
    setStoreTypeData((prev) => [...prev, newEntry]);
    reset();
  };

  // Refresh Simulation
  const handleRefreshStoretype = () => {
    setLoadingStoreType(true);
    setTimeout(() => {
      setLoadingStoreType(false);
      setStoreTypeData((prev) => [...prev]);
    }, 1000);
  };

  return (
    <div className='space-y-6'>
      {/* Add Store Type Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 bg-white rounded-lg p-6 shadow-sm"
      >
        <div className="grid grid-cols-3">
          <Controller
            name="storeTypeName"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Store Type Name"
                placeholder="Store type name"
                size="sm"
              />
            )}
          />
        </div>
        <div className="flex justify-end gap-3">
          <Button type="submit" className="bg-[#445E94]">
            + Add New Store Type
          </Button>
          <Button type="button" variant="outline" onClick={() => reset()}>
            Reset
          </Button>
        </div>
      </form>

      {/* Table */}
      <Table
        rows={storeTypeData}
        columns={storeTypeCols}
        onRefresh={handleRefreshStoretype}
        loading={loadingStoreType}
        filterKey="storeTypeName"
        rowsPerPage={2}
      />
    </div>
  );
}
