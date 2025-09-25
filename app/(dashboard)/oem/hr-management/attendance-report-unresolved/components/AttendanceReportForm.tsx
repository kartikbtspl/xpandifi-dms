"use client";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import Dropdown from "@/components/common/ui/Dropdown";
import Input from "@/components/common/ui/Input";
import Button from "@/components/common/ui/Button";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

type AttendanceFilters = {
  reportType: string;
  dateRange: { startDate: Date; endDate: Date; key: string };
  user: string;
  country: string;
  state: string;
  city: string;
};

export default function AttendanceReportForm() {
  const { control, handleSubmit, reset } = useForm<AttendanceFilters>({
    defaultValues: {
      reportType: "",
      dateRange: { startDate: new Date(), endDate: new Date(), key: "selection" },
      user: "",
      country: "",
      state: "",
      city: "",
    },
  });

  const [showDatePicker, setShowDatePicker] = React.useState(false);

  const reportOptions = [
    { label: "With Attendance Report", value: "with_attendance" },
    { label: "Without Attendance Report", value: "without_attendance" },
  ];

  const userOptions = [
    { label: "User 1", value: "user1" },
    { label: "User 2", value: "user2" },
  ];

  const countryOptions = [
    { label: "India", value: "india" },
    { label: "USA", value: "usa" },
  ];

  const stateOptions = [
    { label: "Maharashtra", value: "maharashtra" },
    { label: "California", value: "california" },
  ];

  const cityOptions = [
    { label: "Mumbai", value: "mumbai" },
    { label: "Los Angeles", value: "losangeles" },
  ];

  const onSubmit = (data: AttendanceFilters) => {
    console.log("Filters:", data);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm">
      {/* Header */}
      <h2 className="text-lg p-6 font-semibold text-gray-800">
        Attendance Report
      </h2>
      <hr className="border-gray-200" />

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-3 p-6 gap-x-6 gap-y-4"
      >
        {/* Report Type */}
        <Controller
          name="reportType"
          control={control}
          render={({ field }) => (
            <Dropdown
              {...field}
              label="Report Type:"
              placeholder="--Select Report--"
              options={reportOptions}
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
              onChange={(val) => field.onChange(val)}
            />
          )}
        />

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
              label="State:"
              placeholder="--Select State--"
              options={stateOptions}
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
              onChange={(val) => field.onChange(val)}
            />
          )}
        />

        {/* Reset & Submit */}
        <div className="col-span-3 flex gap-3 justify-end mt-4">
          <Button type="button" variant="outline" onClick={() => reset()}>
            Reset
          </Button>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
}
