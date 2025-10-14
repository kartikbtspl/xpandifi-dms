"use client";

import { useForm, Controller } from "react-hook-form";
import Input from "@/components/common/ui/Input";

type FormValues = {
  profileName: string;
};

type AddProfileFormProps = {
  initialProfileName?: string;
};

export default function EditProfileForm({ initialProfileName = "" }: AddProfileFormProps) {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      profileName: initialProfileName,
    },
  });

  return (
    <div className="bg-white rounded-lg p-6 w-full">
      <form>
        <div className="grid grid-cols-3 gap-x-8 ">
          <Controller
            name="profileName"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Profile Name"
                disabled
                size="sm"
                placeholder=""
              />
            )}
          />
        </div>
      </form>
    </div>
  );
}
