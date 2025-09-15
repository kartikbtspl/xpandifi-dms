// components/SearchFilters.tsx
"use client";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Input from "@/components/common/ui/Input";
import Dropdown from "@/components/common/ui/Dropdown";
import Button from "@/components/common/ui/Button";
import getStageCol from "./stageColumn";
import Table from "@/components/common/table/Table";

type FormValues = {
  stage: string;
  sequence: string;
  percentage: string;
};

const StageSearch: React.FC = () => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      stage: "",
      sequence: "",
      percentage: "",
    },
  });

  const umoOptions = [
    { value: "zone1", label: "Zone 1" },
    { value: "zone2", label: "Zone 2" },
    { value: "zone3", label: "Zone 3" },
  ];

  const [stageeData, setStageData] = useState([
    { id: 1, srNo: "1", stage: 'ABC', sequence: 1, percentage: "12", action: "" },
    { id: 2, srNo: "2", stage: 'XYZ', sequence: 2, percentage: "42", action: "" },
    { id: 3, srNo: "3", stage: 'PQR', sequence: 3, percentage: "25", action: "" },
  ])

  const [loadingStage, setloadingStage] = useState(false);

  const stageColumns = getStageCol();

  const handleRefreshStage = () => {
    setloadingStage(true);
    setTimeout(() => {
      setloadingStage(false);
      setStageData(stageeData);
    }, 1000)
  };


  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
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
            name="stage"
            control={control}
            render={({ field, fieldState }) => (
              <Input
                {...field}
                label="Stage"
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
                label="Sequence"
                placeholder="Enter Sequence"
                error={fieldState.error?.message}
                size="sm"
              />
            )}
          />

          {/* Select UMO */}
          <Controller
            name="percentage"
            control={control}
            render={({ field, fieldState }) => (
              <Dropdown
                {...field}
                label="Percentage"
                placeholder="Select Zone"
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
              <span className="text-xl">+</span> Add Opportunity Stage
            </Button>
          </div>
        </form>
      </div>
      <Table rows={stageeData} columns={stageColumns} loading={loadingStage} onRefresh={handleRefreshStage} filterKey='stage' />
    </div>
  );
};

export default StageSearch;
