"use client";
import { useForm, Controller } from "react-hook-form";
import Input from "@/components/common/ui/Input";
import Button from "@/components/common/ui/Button";
import Dropdown from "@/components/common/ui/Dropdown";

type FormValues = {
  classType: string;
  sequence: string;
};

export default function ManageClassTypeForm({ onAdd }: { onAdd: (data: FormValues) => void }) {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      classType: "",
      sequence: "",
    },
  });

  return (
    <div className="bg-white rounded-lg p-6 w-full">
      <form onSubmit={handleSubmit(onAdd)}>
        <div className="grid grid-cols-3 gap-x-6 gap-y-4">
          <Controller
            name="classType"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Class Type:"
                size="sm"
                placeholder="class type"
              />
            )}
          />
          <Controller
            name="sequence"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Sequence:"
                size="sm"
                placeholder="sequence"
              />
            )}
          />
        </div>
        <div className="flex justify-end gap-4 mt-6">
          <Button variant="outline" type="button" onClick={() => reset()}>
            Reset
          </Button>
          <Button type="submit" className="bg-[#445E94] text-white px-8">
            Add
          </Button>
        </div>
      </form>
    </div>
  );
}
