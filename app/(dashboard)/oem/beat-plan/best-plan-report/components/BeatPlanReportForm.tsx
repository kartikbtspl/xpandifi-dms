"use client";

import { useForm, Controller } from "react-hook-form";
import Dropdown from "@/components/common/ui/Dropdown";
import Button from "@/components/common/ui/Button";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useState } from "react";
import { format } from "date-fns";
import Input from "@/components/common/ui/Input";

type FormValues = {
  country: string;
  dateRange: { startDate: Date; endDate: Date; key: string };
  user: string;
  state: string;
  city: string;
};

export default function BeatPlanReportForm() {
  const countryOptions = [
    { value: "india", label: "India" },
    { value: "usa", label: "USA" },
  ];

  const userOptions = [
    { value: "user1", label: "User 1" },
    { value: "user2", label: "User 2" },
  ];

  const stateOptions = [
    { value: "maharashtra", label: "Maharashtra" },
    { value: "karnataka", label: "Karnataka" },
  ];

  const cityOptions = [
    { value: "mumbai", label: "Mumbai" },
    { value: "bangalore", label: "Bangalore" },
  ];

  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      country: "",
      dateRange: {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
      },
      user: "",
      state: "",
      city: "",
    },
  });

  const [showDatePicker, setShowDatePicker] = useState(false);

  const onSubmit = (data: FormValues) => {
    console.log("Form Data:", {
      ...data,
      startDate: format(data.dateRange.startDate, "yyyy-MM-dd"),
      endDate: format(data.dateRange.endDate, "yyyy-MM-dd"),
    });
  };

  const onReset = () => {
    reset();
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-6">
        {/* Row 1: Country, Date Range, User */}
        <div className="grid grid-cols-3 gap-6">
          {/* Country */}
          <Controller
            name="country"
            control={control}
            render={({ field }) => (
              <Dropdown
                {...field}
                label="Country:"
                placeholder="--Select Country--"
                options={countryOptions}
                size="sm"
                onChange={(val) => field.onChange(val)}
              />
            )}
          />

          {/* Date Range */}
          <Controller
            name="dateRange"
            control={control}
            render={({ field }) => (
              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium text-gray-700">
                  Date Range:
                </label>
                <div
                  className="relative w-full"
                  onClick={() => setShowDatePicker(!showDatePicker)}
                >
                  <Input
                  size="sm"
                    readOnly
                    value={`${format(field.value.startDate, "dd/MM/yyyy")} - ${format(
                      field.value.endDate,
                      "dd/MM/yyyy"
                    )}`}
                    className="w-full rounded-full border border-gray-300 px-3 py-2 text-gray-600 cursor-pointer focus:outline-none"
                  />
                  {showDatePicker && (
                    <div className="absolute z-10 mt-2">
                      <DateRange
                        editableDateInputs={true}
                        onChange={(ranges) => {
                          field.onChange(ranges.selection);
                        }}
                        moveRangeOnFirstSelection={false}
                        ranges={[field.value]}
                      />
                    </div>
                  )}
                </div>
              </div>
            )}
          />

          {/* User */}
          <Controller
            name="user"
            control={control}
            render={({ field }) => (
              <Dropdown
                {...field}
                label="User:"
                placeholder="--Select User--"
                options={userOptions}
                size="sm"
                onChange={(val) => field.onChange(val)}
              />
            )}
          />
        </div>

        {/* Row 2: State, City */}
        <div className="grid grid-cols-2 gap-6">
          {/* State */}
          <Controller
            name="state"
            control={control}
            render={({ field }) => (
              <Dropdown
                {...field}
                label="State:"
                placeholder="--Select State--"
                options={stateOptions}
                size="sm"
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
                label="City:"
                placeholder="--Select City--"
                options={cityOptions}
                size="sm"
                onChange={(val) => field.onChange(val)}
              />
            )}
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3">
          <Button type="button" variant="outline" onClick={onReset}>
            Reset
          </Button>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
}
