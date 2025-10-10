"use client";

import { useForm, Controller } from "react-hook-form";
import Dropdown from "@/components/common/ui/Dropdown";
import Button from "@/components/common/ui/Button";
import Input from "@/components/common/ui/Input";

type FormValues = {
  shortForm: string;
  longForm: string;
  defaultValue: string;
};

export default function ManagePackUnitForm({ onAdd }: { onAdd: (data: FormValues) => void }) {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      shortForm: "",
      longForm: "",
      defaultValue: "",
    },
  });

  return (
    <div className="bg-white rounded-lg p-6 w-full">
      <form onSubmit={handleSubmit(onAdd)}>
        <div className="grid grid-cols-3 gap-x-6 gap-y-4">
          <Controller
            name="shortForm"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Short Form"
                size="sm"
                placeholder="--Short Form--"
                onChange={val => field.onChange(val)}
              />
            )}
          />
          <Controller
            name="longForm"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Long Form"
                size="sm"
                placeholder="--Long Form--"
                onChange={val => field.onChange(val)}
              />
            )}
          />
          <Controller
            name="defaultValue"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Default Value"
                size="sm"
                placeholder="--Default Value--"
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
