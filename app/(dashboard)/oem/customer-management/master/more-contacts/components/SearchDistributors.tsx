"use client";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import Input from "@/components/common/ui/Input";
import Dropdown, { OptionType } from "@/components/common/ui/Dropdown";
import Button from "@/components/common/ui/Button";

interface SearchFormInputs {
  distributor: string;
  country: string;
  zone: string;
  state: string;
}

const countryOptions: OptionType[] = [
  { value: "India", label: "India" },
  { value: "USA", label: "USA" },
];

const zoneOptions: OptionType[] = [
  { value: "North", label: "North" },
  { value: "South", label: "South" },
];

const stateOptions: OptionType[] = [
  { value: "Maharashtra", label: "Maharashtra" },
  { value: "Delhi", label: "Delhi" },
  
];

const SearchDistributors: React.FC = () => {
  const { handleSubmit, control, reset } = useForm<SearchFormInputs>({
    defaultValues: {
      distributor: "",
      country: "India",
      zone: "",
      state: "",
    },
  });

  const onSubmit = (data: SearchFormInputs) => {
    console.log("🔍 Search Data:", data);
  };

  const handleReset = () => {
    reset({
      distributor: "",
      country: "India",
      zone: "",
      state: "",
    });
  };

  return (
    <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
      <h2 className="text-2xl font-semibold mb-4">Search Distributor</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-wrap gap-4 items-end mb-4 w-full"
      >
        {/* Distributor Input */}
        <div className="flex-1 min-w-[200px]">
          <Controller
            name="distributor"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Distributor"
                placeholder="Select Distributor"
                variant="default"
                size="sm"
              />
            )}
          />
        </div>

        {/* Country Dropdown */}
        <div className="flex-1 min-w-[200px]">
          <Controller
            name="country"
            control={control}
            render={({ field }) => (
              <Dropdown
                {...field}
                label="Country"
                size="sm"
                placeholder="Select Country"
                options={countryOptions}
                value={field.value}
                onChange={(val) => field.onChange(val)}
              />
            )}
          />
        </div>

        {/* Zone Dropdown */}
        <div className="flex-1 min-w-[200px]">
          <Controller
            name="zone"
            control={control}
            render={({ field }) => (
              <Dropdown
                {...field}
                label="Select Zone"
                placeholder="Select Zone"
                options={zoneOptions}
                size="sm"
                value={field.value}
                onChange={(val) => field.onChange(val)}
                clearable
              />
            )}
          />
        </div>

        {/* State Dropdown */}
        <div className="flex-1 min-w-[200px]">
          <Controller
            name="state"
            control={control}
            render={({ field }) => (
              <Dropdown
                {...field}
                label="Select State"
                placeholder="Select State"
                size="sm"
                options={stateOptions}
                value={field.value}
                onChange={(val) => field.onChange(val)}
                clearable
              />
            )}
          />
        </div>
      </form>

      {/* Buttons */}
      <div className="flex gap-2 w-full justify-end">
        <Button variant="outline" onClick={handleReset} size="sm">
          Reset
        </Button>
        <Button size="sm" >Show Archive Distributors</Button>
      </div>
    </div>
  );
};

export default SearchDistributors;
