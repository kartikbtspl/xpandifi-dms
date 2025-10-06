"use client";

import { useForm, Controller } from "react-hook-form";
import Dropdown from "@/components/common/ui/Dropdown";
import Input from "@/components/common/ui/Input";
import Button from "@/components/common/ui/Button";
import { useState } from "react";

type FormValues = {
  user: string;
  month: string;
  visitTarget: string;
  orderTarget: string;
  amountTarget: string;
  volumeTarget: string;
  collectedTarget: string;
  category: string;
};

export default function AddTargetForm() {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      user: "",
      month: "",
      visitTarget: "",
      orderTarget: "",
      amountTarget: "",
      volumeTarget: "",
      collectedTarget: "",
      category: "",
    },
  });

  const userOptions = [
    { label: "--Select User--", value: "" },
    { label: "Amit Sharma", value: "amit" },
    { label: "Sneha Verma", value: "sneha" },
    { label: "Rohit Singh", value: "rohit" },
  ];

  const monthOptions = [
    { label: "--Select Month--", value: "" },
    { label: "January", value: "jan" },
    { label: "February", value: "feb" },
    { label: "March", value: "mar" },
    { label: "April", value: "apr" },
    { label: "May", value: "may" },
    { label: "June", value: "jun" },
    { label: "July", value: "jul" },
    { label: "August", value: "aug" },
    { label: "September", value: "sep" },
    { label: "October", value: "oct" },
    { label: "November", value: "nov" },
    { label: "December", value: "dec" },
  ];

  const categoryOptions = [
    { label: "--Select Category--", value: "" },
    { label: "Category 1", value: "cat1" },
    { label: "Category 2", value: "cat2" },
    { label: "Category 3", value: "cat3" },
  ];

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <div className="bg-white rounded-lg p-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-3 gap-4 items-end">
          <Controller
            name="user"
            control={control}
            render={({ field }) => (
              <Dropdown
                {...field}
                label="User"
                placeholder="--Select User--"
                size="sm"
                options={userOptions}
                onChange={(val) => field.onChange(val)}
              />
            )}
          />
          <Controller
            name="month"
            control={control}
            render={({ field }) => (
              <Dropdown
                {...field}
                label="Month:"
                placeholder="--Select Month--"
                size="sm"
                options={monthOptions}
                onChange={(val) => field.onChange(val)}
              />
            )}
          />
          <Controller
            name="visitTarget"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Visit Target"
                placeholder="Visit Target"
                size="sm"
                onChange={(e) => field.onChange(e.target.value)}
              />
            )}
          />
          <Controller
            name="orderTarget"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Order Target"
                placeholder="Order Target"
                size="sm"
                onChange={(e) => field.onChange(e.target.value)}
              />
            )}
          />
          <Controller
            name="amountTarget"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Amount Target"
                placeholder="Amount Target"
                size="sm"
                onChange={(e) => field.onChange(e.target.value)}
              />
            )}
          />
          <Controller
            name="volumeTarget"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Volume Target"
                placeholder="Volume Target"
                size="sm"
                onChange={(e) => field.onChange(e.target.value)}
              />
            )}
          />
          <Controller
            name="collectedTarget"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Collected Target"
                placeholder="Collected Target"
                size="sm"
                onChange={(e) => field.onChange(e.target.value)}
              />
            )}
          />
          <Controller
            name="category"
            control={control}
            render={({ field }) => (
              <Dropdown
                {...field}
                label="Category:"
                placeholder="--Select Category--"
                size="sm"
                options={categoryOptions}
                onChange={(val) => field.onChange(val)}
              />
            )}
          />
        </div>
        <div className="flex justify-end gap-4 mt-5">
          <Button variant="outline" type="button" onClick={() => reset()}>
            Reset
          </Button>
          <Button type="submit" className="bg-[#445E94] text-white px-6">
            Add
          </Button>
        </div>
      </form>
    </div>
  );
}
