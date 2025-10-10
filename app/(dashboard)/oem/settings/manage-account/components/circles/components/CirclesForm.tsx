"use client";

import { useForm, Controller } from "react-hook-form";
import Dropdown from "@/components/common/ui/Dropdown";
import Button from "@/components/common/ui/Button";

type FormValues = {
  circleName: string;
  circleCode: string;
};

const circleCodeOptions = [
  { label: "--Select Circle Code--", value: "" },
  // ...other customer type options
];

const circleNameOptions = [
  { label: "--Circle Name--", value: "" },
  // ...other classification options
];

export default function CirclesForm({ onAdd }: { onAdd: (data: FormValues) => void }) {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      circleName: "",
      circleCode: "",
    },
  });

  return (
    <div className="bg-white rounded-lg p-6 w-full">
      <form onSubmit={handleSubmit(onAdd)}>
        <div className="grid grid-cols-3 gap-x-6 gap-y-4">
          <Controller
            name="circleName"
            control={control}
            render={({ field }) => (
              <Dropdown
                {...field}
                label="Circle Name"
                options={circleNameOptions}
                size="sm"
                placeholder="--Select Circle Name--"
                onChange={val => field.onChange(val)}
              />
            )}
          />
          <Controller
            name="circleCode"
            control={control}
            render={({ field }) => (
              <Dropdown
                {...field}
                label="Circle Code"
                options={circleCodeOptions}
                size="sm"
                placeholder="--Circle Type--"
                onChange={val => field.onChange(val)}
              />
            )}
          />
        </div>
        <div className="flex justify-end mt-8">
          <Button type="submit" className="bg-[#445E94] text-white px-8">
            Add
          </Button>
        </div>
      </form>
    </div>
  );
}
