"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Dropdown from "@/components/common/ui/Dropdown";
import Input from "@/components/common/ui/Input";
import Button from "@/components/common/ui/Button";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

type FormValues = {
  user: string;
  country: string;
  state: string;
  city: string;
  dateRange: { startDate: Date; endDate: Date; key: string };
};

export interface ManageDeliveryFormProps {
  onFilter: (filters: FormValues) => void;
}

export default function ManageDeliveryForm({ onFilter }: ManageDeliveryFormProps) {
  const countryOptions = [
    { value: "india", label: "India" },
    { value: "usa", label: "USA" },
    { value: "uk", label: "UK" },
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
    { value: "pune", label: "Pune" },
    { value: "mumbai", label: "Mumbai" },
    { value: "bangalore", label: "Bangalore" },
  ];

  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      country: "",
      user: "",
      state: "",
      city: "",
      dateRange: { startDate: new Date(), endDate: new Date(), key: "selection" },
    },
  });

  const [showDatePicker, setShowDatePicker] = useState(false);

  const onSubmit = (data: FormValues) => {
    onFilter(data); // send filters to parent (ManageDelivery.tsx)
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-3 gap-6 w-full items-end"
      >
        {/* User Dropdown */}
        <Controller
          name="user"
          control={control}
          render={({ field }) => (
            <Dropdown
              {...field}
              label="User Name"
              placeholder="--Select User--"
              options={userOptions}
              size="sm"
              onChange={(val) => field.onChange(val)}
            />
          )}
        />

        {/* Country Dropdown */}
        <Controller
          name="country"
          control={control}
          render={({ field }) => (
            <Dropdown
              {...field}
              label="Country"
              placeholder="--Select Country--"
              options={countryOptions}
              size="sm"
              onChange={(val) => field.onChange(val)}
            />
          )}
        />

        {/* State Dropdown */}
        <Controller
          name="state"
          control={control}
          render={({ field }) => (
            <Dropdown
              {...field}
              label="State"
              placeholder="--Select State--"
              options={stateOptions}
              size="sm"
              onChange={(val) => field.onChange(val)}
            />
          )}
        />

        {/* City Dropdown */}
        <Controller
          name="city"
          control={control}
          render={({ field }) => (
            <Dropdown
              {...field}
              label="City"
              placeholder="--Select City--"
              options={cityOptions}
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
            <div className="flex flex-col relative col-span-3 md:col-span-1">
              <label className="mb-1 text-sm font-medium text-gray-700">Date Range:</label>
              <Input
                size="sm"
                readOnly
                value={`${format(field.value.startDate, "dd/MM/yyyy")} - ${format(
                  field.value.endDate,
                  "dd/MM/yyyy"
                )}`}
                onClick={() => setShowDatePicker((prev) => !prev)}
              />
              {showDatePicker && (
                <div className="absolute z-10 mt-2 bg-white shadow-lg rounded-lg">
                  <DateRange
                    editableDateInputs
                    moveRangeOnFirstSelection={false}
                    ranges={[field.value]}
                    onChange={(ranges) => field.onChange(ranges.selection)}
                  />
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

        {/* Buttons */}
        <div className="col-span-3 flex gap-3 justify-end mt-4">
          <Button type="button" variant="outline" onClick={() => reset()}>
            Reset
          </Button>
          <Button type="submit">Apply Filters</Button>
        </div>
      </form>
    </div>
  );
}
