"use client";
import { useForm, Controller } from "react-hook-form";
import Input from "@/components/common/ui/Input";
import Button from "@/components/common/ui/Button";

type FormValues = {
  company: string;
  newPackage: string;
  expireDate: string;
  newExpireDate: string;
  package: string;
  status: string;
  description: string;
};

export default function RenewalRequestForm({ onSave }: {
  onSave: (data: FormValues) => void;
}) {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      company: "",
      newPackage: "",
      expireDate: "",
      newExpireDate: "",
      package: "",
      status: "",
      description: "",
    },
  });

  return (
    <div className="bg-white rounded-lg p-6 w-full">
      <form onSubmit={handleSubmit(onSave)}>
        <div className="grid grid-cols-3 gap-x-6 gap-y-4">
          <Controller
            name="company"
            control={control}
            render={({ field }) => (
              <Input {...field} label="Company:" size="sm" />
            )}
          />
          <Controller
            name="newPackage"
            control={control}
            render={({ field }) => (
              <Input {...field} label="New Package:" size="sm" />
            )}
          />
          <Controller
            name="expireDate"
            control={control}
            render={({ field }) => (
              <Input {...field} label="Expire Date:" size="sm" />
            )}
          />
          <Controller
            name="newExpireDate"
            control={control}
            render={({ field }) => (
              <Input {...field} label="New Expire Date:" size="sm" />
            )}
          />
          <Controller
            name="package"
            control={control}
            render={({ field }) => (
              <Input {...field} label="Package:" size="sm" />
            )}
          />
          <Controller
            name="status"
            control={control}
            render={({ field }) => (
              <Input {...field} label="Status:" size="sm" />
            )}
          />
          <div className="col-span-1">
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <Input {...field} label="Description:" size="sm" />
              )}
            />
          </div>
        </div>
        <div className="flex justify-end gap-4 mt-6">
          <Button
            variant="outline"
            type="button"
            onClick={() => reset()}
          >
            Cancel
          </Button>
          <Button type="submit" className="bg-[#445E94] text-white px-8">
            Save
          </Button>
        </div>
      </form>
    </div>
  );
}
