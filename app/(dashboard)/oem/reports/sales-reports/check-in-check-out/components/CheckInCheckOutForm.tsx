"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Dropdown from "@/components/common/ui/Dropdown";
import Input from "@/components/common/ui/Input";
import Button from "@/components/common/ui/Button";
import { FaRegCalendarAlt } from "react-icons/fa";
import { DateRange } from "react-date-range";
import { format } from "date-fns";

type FormValues = {
  customer: string;
  country: string;
  state: string;
  city: string;
  route: string;
  user: string;
  dateRange: { startDate: Date; endDate: Date; key: string };
};

export default function CheckInCheckOutForm() {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      customer: "",
      country: "",
      state: "",
      city: "",
      route: "",
      user: "",
      dateRange: { startDate: new Date(), endDate: new Date(), key: "selection" },
    },
  });

  // Mock dropdown options
  const countryOptions = [
    { label: "--Select Country--", value: "" },
    { label: "India", value: "india" },
    { label: "USA", value: "usa" },
  ];
  const stateOptions = [
    { label: "--Select State--", value: "" },
    { label: "Maharashtra", value: "maharashtra" },
    { label: "Gujarat", value: "gujarat" },
  ];
  const cityOptions = [
    { label: "--Select City--", value: "" },
    { label: "Pune", value: "pune" },
    { label: "Mumbai", value: "mumbai" },
  ];
  const routeOptions = [
    { label: "--Select Route--", value: "" },
    { label: "Route 1", value: "r1" },
    { label: "Route 2", value: "r2" },
  ];
  const userOptions = [
    { label: "--Select User--", value: "" },
    { label: "User 1", value: "user1" },
    { label: "User 2", value: "user2" },
  ];

  const [showDatePicker, setShowDatePicker] = useState(false);

  const onSubmit = (data: FormValues) => {
    // handle actual filter
    console.log(data);
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-3 gap-3 w-full items-end">
        {/* Row 1 */}
        <Controller
          name="customer"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              label="Customer:"
              placeholder="Customer"
              size="sm"
              className="text-gray-500"
            />
          )}
        />
        <Controller
          name="country"
          control={control}
          render={({ field }) => (
            <Dropdown
              {...field}
              label="Country:"
              placeholder="--Select Country--"
              size="sm"
              options={countryOptions}
              onChange={val => field.onChange(val)}
            />
          )}
        />
        <Controller
          name="state"
          control={control}
          render={({ field }) => (
            <Dropdown
              {...field}
              label="State:"
              placeholder="--Select State--"
              size="sm"
              options={stateOptions}
              onChange={val => field.onChange(val)}
            />
          )}
        />

        {/* Row 2 */}
        <Controller
          name="city"
          control={control}
          render={({ field }) => (
            <Dropdown
              {...field}
              label="City:"
              placeholder="--Select City--"
              size="sm"
              options={cityOptions}
              onChange={val => field.onChange(val)}
            />
          )}
        />
        <Controller
          name="route"
          control={control}
          render={({ field }) => (
            <Dropdown
              {...field}
              label="Route:"
              placeholder="--Select Route--"
              size="sm"
              options={routeOptions}
              onChange={val => field.onChange(val)}
            />
          )}
        />
        <Controller
          name="user"
          control={control}
          render={({ field }) => (
            <Dropdown
              {...field}
              label="User:"
              placeholder="--Select User--"
              size="sm"
              options={userOptions}
              onChange={val => field.onChange(val)}
            />
          )}
        />

        {/* Date Range Row */}
        <div className="col-span-1 flex flex-col">
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
        </div>
        <div className="col-span-2" /> {/* empty to match layout */}

        {/* Action Button */}
        <div className="col-span-3 flex justify-end mt-4 gap-3">
          <Button variant="outline" type="button" className="cursor-pointer" onClick={() => reset()}>
            Reset
          </Button>
          <Button className="cursor-pointer" type="button" onClick={() => reset()}>
            Search
          </Button>
        </div>
      </form>
    </div>
  );
}
