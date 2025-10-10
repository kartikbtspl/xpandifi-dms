"use client";

import { useForm, Controller } from "react-hook-form";
import Button from "@/components/common/ui/Button";
import Input from "@/components/common/ui/Input";

type FormValues = {
  storeTypeName: string;
};

export default function ManageStoreTypeForm({ onAdd }: { onAdd: (data: FormValues) => void }) {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      storeTypeName: "",
    },
  });

  return (
    <div className="bg-white rounded-lg p-6 w-full">
      <form onSubmit={handleSubmit(onAdd)}>
        <div className="grid grid-cols-3 gap-x-6 gap-y-4">
          <Controller
            name="storeTypeName"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Store Type Name"
                size="sm"
                placeholder="--Store Type Name--"
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
