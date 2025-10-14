import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import Input from "@/components/common/ui/Input";

type FormValues = {
  profileName: string;
};

type Props = {
  profileName: string;
  setProfileName: React.Dispatch<React.SetStateAction<string>>;
};

export default function AddProfileForm({ profileName, setProfileName }: Props) {
  const { control, reset } = useForm<FormValues>({
    defaultValues: {
      profileName,
    },
  });

  // Reset form if prop changes
  useEffect(() => {
    reset({ profileName });
  }, [profileName, reset]);

  return (
    <div className="bg-white rounded-lg p-6 w-full">
      <form>
        <div className="grid grid-cols-3 gap-x-8 gap-y-4">
          <Controller
            name="profileName"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Profile Name"
                size="sm"
                placeholder=""
                onChange={(e) => {
                  field.onChange(e);
                  setProfileName(e.target.value);
                }}
              />
            )}
          />
        </div>
      </form>
    </div>
  );
}
