"use client";
import { useForm, Controller } from "react-hook-form";
import Input from "@/components/common/ui/Input";
import Button from "@/components/common/ui/Button";

type FormValues = {
  productName: string;
  customerGroupName: string;
  customerName: string;
  nsrDifference: string;
};

export default function NsrMasterForm({ onAdd }: { onAdd: (data: FormValues) => void }) {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      productName: "",
      customerGroupName: "",
      customerName: "",
      nsrDifference: "",
    },
  });

  return (
    <div className="bg-white rounded-lg p-6 w-full">
      <form onSubmit={handleSubmit(onAdd)}>
        <div className="grid grid-cols-3 gap-x-6 gap-y-4">
          <Controller
            name="productName"
            control={control}
            render={({ field }) => (
              <Input {...field} label="Product Name/Code" required size="sm" />
            )}
          />
          <Controller
            name="customerGroupName"
            control={control}
            render={({ field }) => (
              <Input {...field} label="Customer Group Name" required size="sm" />
            )}
          />
          <Controller
            name="customerName"
            control={control}
            render={({ field }) => (
              <Input {...field} label="Customer Name/Code" required size="sm" />
            )}
          />
          <div className="col-span-1">
            <Controller
              name="nsrDifference"
              control={control}
              render={({ field }) => (
                <Input {...field} label="NSR Difference" required size="sm" />
              )}
            />
          </div>
        </div>
        <div className="flex justify-end gap-4 mt-6">
          <Button type="submit" className="bg-[#445E94] text-white px-8">
            Add
          </Button>
        </div>
      </form>
    </div>
  );
}
