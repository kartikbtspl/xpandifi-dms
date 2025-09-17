"use client";

import { useForm, Controller } from "react-hook-form";
import Input from "@/components/common/ui/Input"; 
import Button from "@/components/common/ui/Button";

type FormValues = {
  subCategoryName: string;
};

interface SubCategoryFormProps {
  onAddSubCategory: (newSubCategory: { subCategoryName: string }) => void;
}

export default function SubCategoryForm({ onAddSubCategory }: SubCategoryFormProps) {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      subCategoryName: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    if (!data.subCategoryName.trim()) return; // 🚫 prevent empty value
    onAddSubCategory(data); 
    reset();
  };

  return (
    <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-3 gap-6 w-full"
      >
        <div>
          <Controller
            name="subCategoryName"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Sub Category :"
                placeholder="Enter sub category"
                size="sm"
                onChange={(e) => field.onChange(e.target.value)}
              />
            )}
          />
        </div>

        <div className="flex justify-start mt-6">
          <Button type="submit" size="sm" className="flex items-center gap-2">
            <span className="text-xl">+</span> Add Sub Category
          </Button>
        </div>
      </form>
    </div>
  );
}
