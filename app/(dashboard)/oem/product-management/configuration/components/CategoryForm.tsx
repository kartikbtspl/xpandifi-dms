"use client";

import { useForm, Controller } from "react-hook-form";
import Input from "@/components/common/ui/Input"; 
import Button from "@/components/common/ui/Button";

type FormValues = {
  categoryName: string;
};

interface CategoryFormProps {
  onAddCategory: (newCategory: { categoryName: string }) => void;
}

export default function CategoryForm({ onAddCategory }: CategoryFormProps) {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      categoryName: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    if (!data.categoryName.trim()) return; // 🚫 prevent empty value
    onAddCategory(data); 
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
            name="categoryName"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Category Name:"
                placeholder="Enter category"
                size="sm"
                onChange={(e) => field.onChange(e.target.value)}
              />
            )}
          />
        </div>

        <div className="flex justify-start mt-6">
          <Button type="submit" size="sm" className="flex items-center gap-2">
            <span className="text-xl">+</span> Add Category
          </Button>
        </div>
      </form>
    </div>
  );
}
