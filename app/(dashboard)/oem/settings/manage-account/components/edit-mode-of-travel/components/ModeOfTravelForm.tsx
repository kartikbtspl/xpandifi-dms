"use client";

import { useForm, Controller } from "react-hook-form";
import Input from "@/components/common/ui/Input";
import Button from "@/components/common/ui/Button";

type FormValues = {
  mode: string;
  rate: string;
};

export default function ModeOfTravelForm({ onAdd }: { onAdd: (data: FormValues) => void }) {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      mode: "",
      rate: "",
    },
  });

  return (
    <div className="bg-white rounded-lg p-6 w-full">
      <form onSubmit={handleSubmit(onAdd)}>
        <div className="grid grid-cols-3 gap-x-6 gap-y-4">
          <Controller
            name="mode"
            control={control}
            render={({ field }) => (
              <Input {...field} label="Mode Of Travel:" size="sm" />
            )}
          />
          <Controller
            name="rate"
            control={control}
            render={({ field }) => (
              <Input {...field} label="Rate(Rs):" size="sm" />
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
