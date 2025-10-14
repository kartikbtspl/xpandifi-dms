"use client";

import { useForm, Controller } from "react-hook-form";
import Input from "@/components/common/ui/Input"; 
import Button from "@/components/common/ui/Button";

type FormValues = {
  brandName: string;
};

interface BrandDetailsFormProps {
  onAddBrand: (newBrand: { brandName: string }) => void;
}

export default function BrandDetailsForm({ onAddBrand }: BrandDetailsFormProps) {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      brandName: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    if (!data.brandName.trim()) return; // 🚫 prevent empty value
    onAddBrand(data); 
    reset();
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-3 gap-6 w-full"
      >
        <div>
          <Controller
            name="brandName"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Brand Name:"
                placeholder="Enter brand name"
                size="sm"
                onChange={(e) => field.onChange(e.target.value)}
              />
            )}
          />
        </div>

        <div className="flex justify-start mt-6">
          <Button type="submit" size="sm" className="flex items-center gap-2">
            <span className="text-xl">+</span> Add Brand Details
          </Button>
        </div>
      </form>
    </div>
  );
}
