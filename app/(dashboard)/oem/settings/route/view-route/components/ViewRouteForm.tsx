"use client";

import { useForm, Controller } from "react-hook-form";
import Input from "@/components/common/ui/Input";
import Button from "@/components/common/ui/Button";

type FormValues = {
  routeName: string;
  distributor: string;
  status: string;
};

export default function ViewRouteForm({ onBack }: { onBack: () => void }) {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      routeName: "",
      distributor: "",
      status: "",
    },
  });

  return (
    <div className="bg-white rounded-lg p-6 w-full">
      <form>
        <div className="grid grid-cols-3 gap-x-6 gap-y-4">
          <Controller
            name="routeName"
            control={control}
            render={({ field }) => (
              <Input {...field} label="Route Name:" size="sm" placeholder="-" />
            )}
          />
          <Controller
            name="distributor"
            control={control}
            render={({ field }) => (
              <Input {...field} label="Distributor:" size="sm" placeholder="-" />
            )}
          />
          <Controller
            name="status"
            control={control}
            render={({ field }) => (
              <Input {...field} label="Status:" size="sm" placeholder="-" />
            )}
          />
        </div>
        <div className="flex justify-center mt-8">
          <Button type="button" className="bg-[#445E94] text-white px-8" onClick={onBack}>
            Back
          </Button>
        </div>
      </form>
    </div>
  );
}
