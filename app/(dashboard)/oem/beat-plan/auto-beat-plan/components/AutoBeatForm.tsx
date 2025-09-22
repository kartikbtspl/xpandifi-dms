"use client";

import { useForm, Controller } from "react-hook-form";
import Input from "@/components/common/ui/Input";
import Dropdown from "@/components/common/ui/Dropdown"; // assuming you have a dropdown component
import Button from "@/components/common/ui/Button";

type FormValues = {
  user: string;
  dailyVisits: string;
  dateRange: string;
};

export default function AutoBeatForm() {
  const userOptions = [
    { value: "user1", label: "User 1" },
    { value: "user2", label: "User 2" },
  ];

  const zoneOptions = [
    { value: "thisWeek", label: "This Week" },
    { value: "thisMonth", label: "This Month" },
    { value: "custom", label: "Custom Range" },
  ]

  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      user: "",
      dailyVisits: "",
      dateRange: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form Data:", data);
  };

  const onReset = () => {
    reset();
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <form
        onSubmit={handleSubmit(onSubmit)}
      // className="grid grid-cols-3 gap-6 w-full items-end"
      >
        {/* User Dropdown */}
        <div className="grid grid-cols-3 gap-6 w-full items-end mb-4">
          <div>
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
                  onChange={(val) => field.onChange(val)}
                />
              )}
            />
          </div>

          {/* Daily Visits Input */}
          <div>
            <Controller
              name="dailyVisits"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  label="Daily Visits"
                  placeholder="Daily Visits"
                  size="sm"
                  onChange={(e) => field.onChange(e.target.value)}
                />
              )}
            />
          </div>

          {/* Date Range Dropdown */}
          <div>
            <Controller
              name="dateRange"
              control={control}
              render={({ field }) => (
                <Dropdown
                  {...field}
                  label="Date Range"
                  placeholder="Select Zone"
                  size="sm"
                  options={ zoneOptions}
                  onChange={(val) => field.onChange(val)}
                />
              )}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 w-full justify-end">
          <Button type="button" variant="outline" onClick={onReset}>
            Reset
          </Button>
          <Button type="submit" >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
