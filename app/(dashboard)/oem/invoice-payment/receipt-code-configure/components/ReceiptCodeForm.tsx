"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Dropdown from "@/components/common/ui/Dropdown";
import Input from "@/components/common/ui/Input";
import Button from "@/components/common/ui/Button";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

type FormValues = {
  start: string;
  prefix: string;
  postfix: string;
  end: string;
};

export default function ReceiptCodeForm() {


  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      start: "",
      prefix: "",
      postfix: "",
      end: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data); // shows object in console
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-6 items-end"
      >
        {/* Country */}
        <Controller
          name="start"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              label="Start"
              placeholder="--Start From--"
              size="sm"
              className="text-gray-500"
              onChange={(val) => field.onChange(val)}
            />
          )}
        />

        {/* User */}
        <Controller
          name="prefix"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              label="Prefix"
              placeholder="prefix"
              size="sm"
              className="text-gray-500"
              onChange={(val) => field.onChange(val)}
            />
          )}
        />

        {/* State */}
        <Controller
          name="postfix"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              label="Postfix"
              placeholder="postfix"
              size="sm"
              className="text-gray-500"
              onChange={(val) => field.onChange(val)}
            />
          )}
        />

        {/* City */}
        <Controller
          name="end"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              label="End"
              placeholder="--end till--"
              size="sm"
              className="text-gray-500"
              onChange={(val) => field.onChange(val)}
            />
          )}
        />

        {/* Buttons */}
        <div className="col-span-2 flex gap-3 justify-end mt-4">
          <Button type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
