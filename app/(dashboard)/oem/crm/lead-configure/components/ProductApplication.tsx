// components/SearchFilters.tsx
"use client";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import Input from "@/components/common/ui/Input";
import Dropdown from "@/components/common/ui/Dropdown";
import Button from "@/components/common/ui/Button";

type FormValues = {
  name: string;
  sequence: string;
  selectUmo: string;
};

const ProductApplication: React.FC = () => {
  const { control, handleSubmit } = useForm<FormValues>({
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

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
  };

  return (
    <div>
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
            + Add Product Application
          </Button>
        </div>
      </form>
      </div>
      <div className="h-100">
        <h1></h1>
        <p></p>
      </div>
    </div>
  );
};

export default ProductApplication;
