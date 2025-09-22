"use client";

import { useForm, Controller } from "react-hook-form";
import Input from "@/components/common/ui/Input";
import Dropdown from "@/components/common/ui/Dropdown";
import Button from "@/components/common/ui/Button";

type FormValues = {
  classType: string;
  distributor: string;
  classFrequency: string;
};

export default function ClassForm() {
  const classTypeOptions = [
    { value: "", label: "--Select Class Type--" },
    { value: "typeA", label: "Type A" },
    { value: "typeB", label: "Type B" },
  ];

  const distributorOptions = [
    { value: "", label: "--Select Distributor--" },
    { value: "distributorX", label: "Distributor X" },
    { value: "distributorY", label: "Distributor Y" },
  ];

  const frequencyOptions = [
    { value: "", label: "--Select Frequency--" },
    { value: "weekly", label: "Weekly" },
    { value: "monthly", label: "Monthly" },
    { value: "quarterly", label: "Quarterly" },
  ];

  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      classType: "",
      distributor: "",
      classFrequency: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form Data:", data);
    reset();
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-3 gap-6 w-full items-end"
      >
        {/* Class Type */}
        <div>
          <Controller
            name="classType"
            control={control}
            rules={{ required: "Class Type is required" }}
            render={({ field }) => (
              <Dropdown
                {...field}
                label="Class Type"
                placeholder="--Select Class Type--"
                options={classTypeOptions}
                size="sm"
                onChange={(val) => field.onChange(val)}
              />
            )}
          />
        </div>

        {/* Distributor Name */}
        <div>
          <Controller
            name="distributor"
            control={control}
            rules={{ required: "Distributor is required" }}
            render={({ field }) => (
              <Dropdown
                {...field}
                label="Distributor Name"
                placeholder="--Select Distributor--"
                options={distributorOptions}
                size="sm"
                onChange={(val) => field.onChange(val)}
              />
            )}
          />
        </div>

        {/* Class Frequency */}
        <div>
          <Controller
            name="classFrequency"
            control={control}
            rules={{ required: "Frequency is required" }}
            render={({ field }) => (
              <Dropdown
                {...field}
                label="Class Frequency"
                placeholder="--Select Frequency--"
                options={frequencyOptions}
                size="sm"
                onChange={(val) => field.onChange(val)}
              />
            )}
          />
        </div>

        {/* Buttons */}
        <div className="col-span-3 flex gap-3 justify-end mt-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => reset()}
            className="h-[38px]"
          >
            Reset
          </Button>
          <Button type="submit" className="h-[38px]">
            + Add
          </Button>
        </div>
      </form>
    </div>
  );
}
