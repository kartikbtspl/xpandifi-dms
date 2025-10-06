"use client";

import { useForm, Controller } from "react-hook-form";
import Dropdown from "@/components/common/ui/Dropdown";
import Input from "@/components/common/ui/Input";
import Button from "@/components/common/ui/Button";
import { useState } from "react";

type FormValues = {
  primaryCode: string;
  companyLocation: string;
};

export default function CompanyGrnListForm() {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      primaryCode: "",
      companyLocation: "",
    },
  });

  const userOptions = [
    { label: "--Select User--", value: "" },
    { label: "User 1", value: "user1" },
    { label: "User 2", value: "user2" },
  ];

  const [showDatePicker, setShowDatePicker] = useState(false);

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <div className="bg-white rounded-lg">
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-3 items-end">
        {/* User Field */}
        <Controller
          name="primaryCode"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              {...field}
              label="Primary Code:"
              placeholder="Primary Code/Name"
              size="sm"
              onChange={val => field.onChange(val)}
            />
          )}
        />
        <Controller
          name="companyLocation"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Dropdown
              {...field}
              label="Company Location:"
              placeholder="--Select Location--"
              size="sm"
              options={userOptions}
              onChange={val => field.onChange(val)}
            />
          )}
        />

        {/* Action Buttons */}
        <div className="col-span-2 flex justify-end gap-4 mt-4">
          <Button variant="outline" type="button" onClick={() => reset()}>
            Reset
          </Button>
          <Button type="submit" className="bg-[#445E94] text-white px-6">
            Search
          </Button>
        </div>
      </form>
    </div>
  );
}
