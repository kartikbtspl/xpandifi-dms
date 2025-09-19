"use client";

import { useForm, Controller } from "react-hook-form";
import Input from "@/components/common/ui/Input";
import Dropdown from "@/components/common/ui/Dropdown";
import Button from "@/components/common/ui/Button";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { addDays } from "date-fns";

type FormValues = {
  country: string;
  startDate: string,
  endDate: string;
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
      startDate: "",
      endDate: "",
      user: "",
      state: "",
      city: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form Data:", data);
  };

  const onReset = () => {
    reset();
  };

  return (
    <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
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
          <div className="grid grid-cols-2 gap-3">
            <Controller
              name="startDate"
              control={control}
              render={({ field }) => (
                <>
                <Input
                  {...field}
                  type="date"
                  label="Start Date:"
                  size="sm"
                  className="text-gray-500"
                  onChange={(e) => field.onChange(e.target.value)}
                />
                <Input
                  {...field}
                  type="date"
                  label="End Date:"
                  size="sm"
                  className="text-gray-500"
                  onChange={(e) => field.onChange(e.target.value)}
                />
                </>
              )}
            />
          </div>

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
          <Button type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
