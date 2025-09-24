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
  country: string;
  state: string;
  city: string;
  dateRange: { startDate: Date; endDate: Date; key: string };
};

export default function TravelRequestForm() {
  const countryOptions = [
    { value: "india", label: "India" },
    { value: "usa", label: "USA" },
    { value: "uk", label: "UK" },
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
      dateRange: {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
      },
      state: "",
      city: "",
    },
  });

  const [showDatePicker, setShowDatePicker] = useState(false);

  const onSubmit = (data: FormValues) => {
    console.log("Filter Data:", {
      ...data,
      dateRange: {
        start: data.dateRange.startDate,
        end: data.dateRange.endDate,
      },
    });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-3 gap-6 w-full items-end"
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
              options={countryOptions}
              size="sm"
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
              options={stateOptions}
              size="sm"
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
              options={cityOptions}
              size="sm"
              className="text-gray-500"
              onChange={(val) => field.onChange(val)}
            />
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

              {/* Input with formatted range */}
              <Input
                size="sm"
                readOnly
                
                value={`${format(field.value.startDate, "dd/MM/yyyy")} - ${format(
                  field.value.endDate,
                  "dd/MM/yyyy"
                )}`}
                className="text-gray-500"
                onClick={() => setShowDatePicker((prev) => !prev)}
              />

              {/* Calendar Popup */}
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
          <Button
            type="button"
            variant="outline"
            onClick={() => reset()}
          >
            Reset
          </Button>
          <Button type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
