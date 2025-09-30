"use client";

import { useForm, Controller } from "react-hook-form";
import Dropdown from "@/components/common/ui/Dropdown";
import Button from "@/components/common/ui/Button";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
// import "react-date-range/dist/styles.css";
// import "react-date-range/dist/theme/default.css";
import { useState } from "react";
import Input from "@/components/common/ui/Input";


type FormValues = {
  user: string;
  dateRange: { startDate: Date; endDate: Date };
  country: string;
  state: string;
  city: string;
};

interface LeaveReportFormProps {
  onFilter: (filters: FormValues) => void;
}

export default function LeaveReportForm({
  onFilter,
}: LeaveReportFormProps) {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      user: "",
      dateRange: { startDate: new Date(), endDate: new Date() },
      country: "",
      state: "",
      city: "",
    },
  });

  const userOptions = [
    { value: "ajinkya", label: "Ajinkya Darkase" },
    { value: "neha", label: "Neha Sharma" },
    { value: "rohit", label: "Rohit Patil" },
  ];

  const countryOptions = [
    { value: "india", label: "India" },
    { value: "usa", label: "USA" },
  ];

  const stateOptions = [
    { value: "maharashtra", label: "Maharashtra" },
    { value: "gujarat", label: "Gujarat" },
  ];

  const cityOptions = [
    { value: "pune", label: "Pune" },
    { value: "mumbai", label: "Mumbai" },
  ];

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const onSubmit = (data: FormValues) => {
    onFilter({ ...data, dateRange: dateRange[0] });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Leave Report
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* User */}
          <Controller
            name="user"
            control={control}
            render={({ field }) => (
              <Dropdown
                {...field}
                label="User"
                placeholder="--Select User--"
                options={userOptions}
                size="sm"
                className="w-full text-gray-500"
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
                <label className="mb-1 text-sm font-medium text-gray-700">
                  Date Range:
                </label>
                <Input
                  size="sm"
                  readOnly
                  value={
                    field.value?.startDate && field.value?.endDate
                      ? `${format(field.value.startDate, "dd/MM/yyyy")} - ${format(
                        field.value.endDate,
                        "dd/MM/yyyy"
                      )}`
                      : ""
                  }
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

          {/* Country */}
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
                className="w-full text-gray-500"
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
                options={stateOptions}
                size="sm"
                className="w-full text-gray-500"
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
                options={cityOptions}
                size="sm"
                className="w-full text-gray-500"
                onChange={(val) => field.onChange(val)}
              />
            )}
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-3 justify-end mt-6">
          <Button
            type="button"
            variant="outline"
            onClick={() => {
              reset();
              onFilter({
                user: "",
                dateRange: { startDate: new Date(), endDate: new Date() },
                country: "",
                state: "",
                city: "",
              });
            }}
          >
            Reset
          </Button>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
}
