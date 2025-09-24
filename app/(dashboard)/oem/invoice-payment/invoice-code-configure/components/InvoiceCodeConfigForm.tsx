"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import Input from "@/components/common/ui/Input";
import Button from "@/components/common/ui/Button";

type NumberSeriesForm = {
  start: string;
  prefix: string;
  postfix: string;
  end: string;
};

export default function NumberSeriesForm() {
  const { control, handleSubmit } = useForm<NumberSeriesForm>({
    defaultValues: {
      start: "",
      prefix: "",
      postfix: "",
      end: "",
    },
  });

  const onSubmit = (data: NumberSeriesForm) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Start */}
        <Controller
          name="start"
          control={control}
          render={({ field }) => (
            <Input {...field} label="Start:" placeholder="--Start From--" />
          )}
        />

        {/* Prefix */}
        <Controller
          name="prefix"
          control={control}
          render={({ field }) => (
            <Input {...field} label="Prefix:" placeholder="Prefix" />
          )}
        />

        {/* Postfix */}
        <Controller
          name="postfix"
          control={control}
          render={({ field }) => (
            <Input {...field} label="Postfix:" placeholder="Postfix" />
          )}
        />

        {/* End */}
        <Controller
          name="end"
          control={control}
          render={({ field }) => (
            <Input {...field} label="End:" placeholder="--End Till--" />
          )}
        />

        {/* Submit button aligned right */}
        <div className="md:col-span-2 flex justify-end">
          <Button type="submit" className="bg-[#445E94] text-white px-6 py-2 rounded-full">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
