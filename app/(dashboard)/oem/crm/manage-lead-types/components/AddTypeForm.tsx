"use client";

import { useForm, Controller } from "react-hook-form";
import Input from "@/components/common/ui/Input"; // reusable input
import Button from "@/components/common/ui/Button"; // reusable button

type FormValues = {
  leadType: string;
  sequence: string;
};

export default function AddTypeFrom() {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      leadType: "",
      sequence: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form Submitted:", data);
    reset(); // clears the form after submission
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-3 gap-6 w-full"
      >
        {/* Name */}
        <div>
          <Controller
            name="leadType"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Add Lead Type:"
                placeholder="Enter Lead Type"
                size="sm"
                onChange={(e) => field.onChange(e.target.value)}
              />
            )}
          />
        </div>

        {/* Sequence */}
        <div>
          <Controller
            name="sequence"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Sequence:"
                placeholder="Enter Sequence"
                size="sm"
                onChange={(e) => field.onChange(e.target.value)}
              />
            )}
          />
          </div>
          <div className="flex justify-start mt-6">
            <Button type="submit" size="sm" className="flex items-center gap-2">
              <span className="text-xl">+</span> Add Type
            </Button>
          </div>
      </form>
    </div>
  );
}
