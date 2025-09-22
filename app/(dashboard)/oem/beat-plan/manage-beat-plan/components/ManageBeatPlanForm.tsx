"use client";

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Input from "@/components/common/ui/Input";
import Dropdown from "@/components/common/ui/Dropdown";
import Button from "@/components/common/ui/Button";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";

type FormValues = {
  searchBeatPlan: string;
  dateRange: { startDate: Date; endDate: Date; key: string };
  country: string;
  user: string;
  state: string;
  city: string;
};

export default function ManageBeatPlanForm() {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      searchBeatPlan: "",
      dateRange: {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
      },
      country: "",
      user: "",
      state: "",
      city: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form Data:", {
      ...data,
      startDate: format(data.dateRange.startDate, "yyyy-MM-dd"),
      endDate: format(data.dateRange.endDate, "yyyy-MM-dd"),
    });
  };

  const [showDatePicker, setShowDatePicker] = useState(false);

  const countryOptions = [
    { label: "India", value: "india" },
    { label: "USA", value: "usa" },
    { label: "UK", value: "uk" },
  ];

  const userOptions = [
    { label: "John Doe", value: "john" },
    { label: "Jane Smith", value: "jane" },
    { label: "Robert Brown", value: "robert" },
  ];

  const stateOptions = [
    { label: "Maharashtra", value: "maharashtra" },
    { label: "Karnataka", value: "karnataka" },
    { label: "Gujarat", value: "gujarat" },
  ];

  const cityOptions = [
    { label: "Mumbai", value: "mumbai" },
    { label: "Pune", value: "pune" },
    { label: "Bangalore", value: "bangalore" },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {/* Search Beat Plan */}
        <Controller
          name="searchBeatPlan"
          control={control}
          render={({ field }) => (
            <Input {...field} label="Search Beat Plan" placeholder="My Beat" size="sm" />
          )}
        />

        {/* Date Range */}
        <Controller
          name="dateRange"
          control={control}
          render={({ field }) => (
            <div className="flex flex-col relative">
              <label className="mb-1 text-sm font-medium text-gray-700">
                Date Range:
              </label>

              {/* Display selected range in input */}
              <Input
                size="sm"
                readOnly
                value={`${format(field.value.startDate, "dd/MM/yyyy")} - ${format(
                  field.value.endDate,
                  "dd/MM/yyyy"
                )}`}
                className="w-full rounded-full border border-gray-300 px-3 py-2 text-gray-600 cursor-pointer focus:outline-none"
                onClick={() => setShowDatePicker((prev) => !prev)}
              />

              {/* Date Picker Popup */}
              {showDatePicker && (
                <div className="absolute z-10 mt-2 bg-white shadow-lg rounded-lg">
                  <DateRange
                    editableDateInputs
                    moveRangeOnFirstSelection={false}
                    ranges={[field.value]}
                    onChange={(ranges) => {
                      field.onChange(ranges.selection); // update form value
                    }}
                  />

                  {/* Close button */}
                  <div className="flex justify-end p-2">
                    <Button
                      type="button"
                      size="sm"
                      variant="outline"
                      onClick={() => setShowDatePicker(false)}
                    >
                      Done
                    </Button>
                  </div>
                </div>
              )}
            </div>
          )}
        />

        {/* Country */}
        <Controller
          name="country"
          control={control}
          render={({ field }) => (
            <Dropdown {...field} label="Country" options={countryOptions} placeholder="--Select Country--" size="sm" />
          )}
        />

        {/* User */}
        <Controller
          name="user"
          control={control}
          render={({ field }) => (
            <Dropdown {...field} label="User" options={userOptions} placeholder="--Select User--" size="sm" />
          )}
        />

        {/* State */}
        <Controller
          name="state"
          control={control}
          render={({ field }) => (
            <Dropdown {...field} label="State" options={stateOptions} placeholder="Select State" size="sm" />
          )}
        />

        {/* City */}
        <Controller
          name="city"
          control={control}
          render={({ field }) => (
            <Dropdown {...field} label="City" options={cityOptions} placeholder="Select City" size="sm" />
          )}
        />

        {/* Buttons */}
        <div className="col-span-1 md:col-span-3 flex justify-end gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => reset()}
            className="rounded-full"
          >
            Reset
          </Button>
          <Button type="submit" className="rounded-full bg-[#445E94]">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
