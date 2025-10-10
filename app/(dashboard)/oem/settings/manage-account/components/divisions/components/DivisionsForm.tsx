"use client";

import { useForm, Controller } from "react-hook-form";
import Dropdown from "@/components/common/ui/Dropdown";
import Button from "@/components/common/ui/Button";

type FormValues = {
  divisionName: string;
  divisionCode: string;
};

const divisionNameOptions = [
  { label: "--Division Name--", value: "" },
  // ...other classification options
];

const divisionCodeOptions = [
  { label: "--Select Division Code--", value: "" },
  // ...other customer type options
];

export default function DivisionsForm({ onAdd }: { onAdd: (data: FormValues) => void }) {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      divisionName: "",
      divisionCode: "",
    },
  });

  return (
    <div className="bg-white rounded-lg p-6 w-full">
      <form onSubmit={handleSubmit(onAdd)}>
        <div className="grid grid-cols-3 gap-x-6 gap-y-4">
          <Controller
            name="divisionName"
            control={control}
            render={({ field }) => (
              <Dropdown
                {...field}
                label="Division Name"
                options={divisionNameOptions}
                size="sm"
                placeholder="--Select Circle Name--"
                onChange={val => field.onChange(val)}
              />
            )}
          />
          <Controller
            name="divisionCode"
            control={control}
            render={({ field }) => (
              <Dropdown
                {...field}
                label="Division Code"
                options={divisionCodeOptions}
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
