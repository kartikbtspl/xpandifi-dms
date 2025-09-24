"use client";

import { useForm, Controller } from "react-hook-form";
import Button from "@/components/common/ui/Button";
import Dropdown from "@/components/common/ui/Dropdown";

type FormValues = {
  country: string;
  state: string;
  city: string;
  status: string;
};

export default function MaterailStockReportForm() {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      country: "",
      state: "",
      city: "",
      status: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
  };

  const countryOptions = [
    { label: "India", value: "india" },
    { label: "USA", value: "usa" },
    { label: "UK", value: "uk" },
  ];

  const stateOptions = [
    { label: "Maharashtra", value: "maharashtra" },
    { label: "California", value: "california" },
    { label: "London", value: "london" },
  ];

  const cityOptions = [
    { label: "Mumbai", value: "mumbai" },
    { label: "Los Angeles", value: "los_angeles" },
    { label: "London City", value: "london_city" },
  ];

  const statusOptions = [
    { label: "Active", value: "active" },
    { label: "Inactive", value: "inactive" },
    { label: "Pending", value: "pending" },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-3 gap-6 items-end"
      >
        {/* Country */}
        <Controller
          name="country"
          control={control}
          render={({ field }) => (
            <Dropdown
              {...field}
              label="Country"
              placeholder="--Select Country--"
              size="sm"
              options={countryOptions}
              className="text-gray-500"
              onChange={(val) => field.onChange(val)}
            />
          )}
        />

        {/* State */}
        <Controller
          name="state"
          control={control}
          render={({ field }) => (
            <Dropdown
              {...field}
              label="State"
              placeholder="--Select State--"
              size="sm"
              options={stateOptions}
              className="text-gray-500"
              onChange={(val) => field.onChange(val)}
            />
          )}
        />

        {/* City */}
        <Controller
          name="city"
          control={control}
          render={({ field }) => (
            <Dropdown
              {...field}
              label="City"
              placeholder="--Select City--"
              size="sm"
              options={cityOptions}
              className="text-gray-500"
              onChange={(val) => field.onChange(val)}
            />
          )}
        />

        {/* Status */}
        <Controller
          name="status"
          control={control}
          render={({ field }) => (
            <Dropdown
              {...field}
              label="Status"
              placeholder="--Select Status--"
              size="sm"
              options={statusOptions}
              className="text-gray-500"
              onChange={(val) => field.onChange(val)}
            />
          )}
        />

        {/* Buttons */}
        <div className="col-span-3 flex gap-3 justify-end mt-4">
          <Button variant="outline" onClick={() => reset()}>
            Reset
          </Button>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
}
