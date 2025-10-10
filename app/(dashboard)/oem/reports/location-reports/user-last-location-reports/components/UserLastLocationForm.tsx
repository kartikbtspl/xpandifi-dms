"use client";

import { useForm, Controller } from "react-hook-form";
import Dropdown from "@/components/common/ui/Dropdown";
import Input from "@/components/common/ui/Input";
import Button from "@/components/common/ui/Button";
import { useState } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { FaCalendarAlt } from "react-icons/fa";

type FormValues = {
  country: string;
  state: string;
  user: string;
};

export default function UserLastLocationForm() {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      country: "",
      state: "",
      user: "",
    },
  });

  const [showDatePicker, setShowDatePicker] = useState(false);

  const countryOptions = [
    { label: "India", value: "india" },
    { label: "USA", value: "usa" },
  ];
  const stateOptions = [
    { label: "Maharashtra", value: "maharashtra" },
    { label: "Gujarat", value: "gujarat" },
  ];
  const cityOptions = [
    { label: "Mumbai", value: "mumbai" },
    { label: "Pune", value: "pune" },
  ];
  const userOptions = [
    { label: "User 1", value: "user1" },
    { label: "User 2", value: "user2" },
  ];

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <div className="bg-white rounded-lg p-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-3 gap-x-6 gap-y-4 items-end">
          <Controller
            name="country"
            control={control}
            render={({ field }) => (
              <Dropdown
                {...field}
                label="Country:"
                placeholder="--Select Tasks--"
                size="sm"
                options={countryOptions}
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
        </div>
        {/* Action Buttons */}
        <div className="flex justify-end gap-4 mt-4">
          <Button variant="outline" type="button" onClick={() => reset()}>
            Reset
          </Button>
          <Button type="submit" className="bg-[#445E94] text-white px-6">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
