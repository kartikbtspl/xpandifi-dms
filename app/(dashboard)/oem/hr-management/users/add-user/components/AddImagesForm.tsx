"use client";

import { useForm, Controller } from "react-hook-form";
import Input from "@/components/common/ui/Input";
import Button from "@/components/common/ui/Button";

export type FormValuesImages = {
  profilePicture?: FileList;
  signature?: FileList;
  passportCopy?: FileList;
  healthCard?: FileList;
  outletBadge?: FileList;
  insurance?: FileList;
  aadharCard?: FileList;
  panCard?: FileList;
};

interface AddImagesFormProps {
  onSave?: (data: FormValuesImages) => void;
}

export default function AddImagesForm({ onSave = () => {} }: AddImagesFormProps) {
  const { control, handleSubmit, reset } = useForm<FormValuesImages>({ defaultValues: {} });

  const onSubmit = (data: FormValuesImages) => {
    onSave(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-white rounded-lg p-6">
      <div className="grid grid-cols-2 gap-4 ">
        {[
          { name: "profilePicture", label: "Profile Picture" },
          { name: "signature", label: "Signature" },
          { name: "passportCopy", label: "Passport Copy" },
          { name: "healthCard", label: "Health Card" },
          { name: "outletBadge", label: "Outlet Badge" },
          { name: "insurance", label: "Insurance" },
          { name: "aadharCard", label: "Aadhar Card" },
          { name: "panCard", label: "PAN Card" },
        ].map(({ name, label }) => (
          <div key={name}>
            <label htmlFor={name} className="block mb-1 text-gray-600">
              {label}:
            </label>
            <Controller
              name={name as keyof FormValuesImages}
              control={control}
              render={({ field }) => (
                <Input
                  id={name}
                  type="file"
                  onChange={(e) => field.onChange(e.target.files)}
                  className="w-full border rounded py-2 px-2"
                />
              )}
            />
          </div>
        ))}
      </div>
    </form>
  );
}
