"use client";

import { useForm, Controller } from "react-hook-form";
import Input from "@/components/common/ui/Input";
import Button from "@/components/common/ui/Button";

type FormValues = {
  shiftName: string;
  startTime: string;
  endTime: string;
};

export default function ShiftDetailsForm({ onAdd }: { onAdd: (data: FormValues) => void }) {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      shiftName: "",
      startTime: "",
      endTime: "",
    },
  });

  return (
    <div className="bg-white rounded-lg p-6 w-full">
      <form onSubmit={handleSubmit(onAdd)}>
        <div className="grid grid-cols-3 gap-x-6 gap-y-4">
          <Controller
            name="shiftName"
            control={control}
            render={({ field }) => (
              <Input {...field} label="Shift Name:" size="sm" />
            )}
          />
          <Controller
            name="startTime"
            control={control}
            render={({ field }) => (
              <Input {...field} label="Start Time:" size="sm" />
            )}
          />
          <Controller
            name="endTime"
            control={control}
            render={({ field }) => (
              <Input {...field} label="End Time:" size="sm" />
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
