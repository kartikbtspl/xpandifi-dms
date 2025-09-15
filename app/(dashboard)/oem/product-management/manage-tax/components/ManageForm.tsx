"use client";

import { useForm, Controller } from "react-hook-form";
import Input from "@/components/common/ui/Input";
import Button from "@/components/common/ui/Button";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import AddTaxModal from "./Modals/AddTaxModal";

type FormValues = {
  taxName: string;
};

interface ManageFormProps {
  onAddTax: (newTax: { taxName: string; taxCode: string; percentage: number }) => void;
}

export default function ManageForm({ onAddTax }: ManageFormProps) {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      taxName: "",
    },
  });

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const onSubmit = (data: FormValues) => {
    console.log("Form Submitted:", data);
    reset();
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-wrap gap-6 w-full justify-between"
      >
        <div className="w-1/3">
          <Controller
            name="taxName"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Tax Name/Tax Code:"
                size="sm"
                startIcon={<FiSearch />}
                onChange={(e) => field.onChange(e.target.value)}
              />
            )}
          />
        </div>

        <div className="flex justify-between mt-6 w-1/5">
          <Button variant="outline" size="sm" className="px-4">
            Reset
          </Button>
          <Button
            type="button"
            size="sm"
            className="flex items-center gap-2 px-4"
            onClick={() => setIsAddModalOpen(true)}
          >
            <span className="text-xl">+</span> Add New Tax
          </Button>
        </div>
      </form>

      {/* ✅ Call parent's handler when adding */}
      <AddTaxModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={(newTax) => {
          onAddTax(newTax);
          setIsAddModalOpen(false);
        }}
      />
    </div>
  );
}
