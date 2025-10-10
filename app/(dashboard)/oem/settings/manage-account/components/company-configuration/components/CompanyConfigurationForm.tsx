"use client";

import { useForm, Controller } from "react-hook-form";
import Dropdown from "@/components/common/ui/Dropdown";
import Button from "@/components/common/ui/Button";

type FormValues = {
  customerType: string;
  classificationName: string;
};

const customerTypeOptions = [
  { label: "--Select Customer Type--", value: "" },
  // ...other customer type options
];

const classificationOptions = [
  { label: "--Classification Name--", value: "" },
  // ...other classification options
];

export default function CompanyConfigurationForm({ onAdd }: { onAdd: (data: FormValues) => void }) {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      customerType: "",
      classificationName: "",
    },
  });

  return (
    <div className="bg-white rounded-lg p-6 w-full">
      <form onSubmit={handleSubmit(onAdd)}>
        <div className="grid grid-cols-3 gap-x-6 gap-y-4">
          <Controller
            name="customerType"
            control={control}
            render={({ field }) => (
              <Dropdown
                {...field}
                label="Customer Type"
                options={customerTypeOptions}
                size="sm"
                placeholder="--Select Customer Type--"
                onChange={val => field.onChange(val)}
              />
            )}
          />
          <Controller
            name="classificationName"
            control={control}
            render={({ field }) => (
              <Dropdown
                {...field}
                label="Classification Name"
                options={classificationOptions}
                size="sm"
                placeholder="--Classification Name--"
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
