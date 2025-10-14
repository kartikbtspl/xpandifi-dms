"use client";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import Button from "@/components/common/ui/Button";
import Input from "@/components/common/ui/Input";
import Table from "@/components/common/table/Table";
import getStoreTypeCol from "./storeTypeCol";

interface FirmForm {
  firmTypeName: string;
}

export default function FirmType() {
  const { handleSubmit, control, reset } = useForm<FirmForm>({
    defaultValues: {
      firmTypeName: "",
    },
  });

  const [firmTypeData, setFirmTypeData] = React.useState([
    { id: 1, srNo: "1", firmTypeName: "Sole proprietorship", action: "" },
    { id: 2, srNo: "2", firmTypeName: "Public Limited Company(PLC)", action: "" },
  ]);
  const firmTypeCols = getStoreTypeCol();
  const [loadingFirmType, setLoadingFirmType] = React.useState(false);

  const onSubmit = (data: FirmForm) => {
    if (!data.firmTypeName.trim()) {
      alert("Please enter a firm type.");
      return;
    }
    const newEntry = {
      id: firmTypeData.length + 1,
      srNo: String(firmTypeData.length + 1),
      firmTypeName: data.firmTypeName,
      action: "",
    };
    setFirmTypeData((prev) => [...prev, newEntry]);
    reset();
  };

  const handleRefreshFirmtype = () => {
    setLoadingFirmType(true);
    setTimeout(() => {
      setLoadingFirmType(false);
      setFirmTypeData((prev) => [...prev]);
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-sm"
      >
        <div className="grid grid-cols-3 gap-4">
          <Controller
            name="firmTypeName"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Firm Type"
                placeholder="Firm type"
                size="sm"
              />
            )}
          />
        </div>
        <div className="flex justify-end gap-3">
          <Button type="submit" className="bg-[#445E94]">
            + Add Firm Type
          </Button>
          <Button type="button" variant="outline" onClick={() => reset()}>
            Reset
          </Button>
        </div>
      </form>
      <Table
        rows={firmTypeData}
        columns={firmTypeCols}
        onRefresh={handleRefreshFirmtype}
        loading={loadingFirmType}
        filterKey="firmTypeName"
        rowsPerPage={2}
      />
    </div>
  );
}
