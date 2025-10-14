"use client";

import { useForm, Controller } from "react-hook-form";
import Input from "@/components/common/ui/Input"; 
import Button from "@/components/common/ui/Button";

type FormValues = {
  shortForm: string;
  longForm: string;
  default: number
};

interface PackUnitsFormProps {
  onAddPackUnits: (newPackUnit: { shortForm: string; longForm: string; default: number }) => void;
}

export default function PackUnitsForm({ onAddPackUnits }: PackUnitsFormProps) {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      shortForm: "",
      longForm: "",
      default: 1,
    },
  });

  const onSubmit = (data: FormValues) => {
    if (!data.shortForm.trim() || !data.longForm.trim() || !data.default) return; // 🚫 prevent empty value
    onAddPackUnits(data); 
    reset();
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-4 gap-6 w-full"
      >
        <div>
          <Controller
            name="shortForm"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Short Form :"
                placeholder="Enter short form"
                size="sm"
                onChange={(e) => field.onChange(e.target.value)}
              />
            )}
          />
        </div>
        <div>
          <Controller
            name="longForm"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="long Form :"
                placeholder="Enter long forn"
                size="sm"
                onChange={(e) => field.onChange(e.target.value)}
              />
            )}
          />
        </div>
        <div>
          <Controller
            name="default"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Default :"
                placeholder="Enter default"
                size="sm"
                onChange={(e) => field.onChange(e.target.value)}
              />
            )}
          />
        </div>

        <div className="flex justify-start mt-6">
          <Button type="submit" size="sm" className="flex items-center gap-2">
            <span className="text-xl">+</span> Add Pack Units
          </Button>
        </div>
      </form>
    </div>
  );
}
