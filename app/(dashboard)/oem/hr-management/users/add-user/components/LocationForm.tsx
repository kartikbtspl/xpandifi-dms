"use client";

import { useForm, Controller } from "react-hook-form";
import Input from "@/components/common/ui/Input";
import Button from "@/components/common/ui/Button";

export type FormValuesLocation = {
  homeLocation: string;
  healthCard: string;
  insurance: string;
  homeLat: string;
  homeLong: string;
};

interface LocationFormProps {
  onSave: (data: FormValuesLocation) => void;
}

export default function LocationForm({ onSave }: LocationFormProps) {
  const { control, handleSubmit, reset } = useForm<FormValuesLocation>({
    defaultValues: {
      homeLocation: "",
      healthCard: "",
      insurance: "",
      homeLat: "",
      homeLong: "",
    },
  });

  const onSubmit = (data: FormValuesLocation) => {
    onSave(data);
    reset();
  };

  return (<div className="flex bg-white rounded-lg p-6 gap-10">
    <div >
      <iframe className="rounded-lg" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d643.397090933866!2d73.77143516770276!3d18.5518849608926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9ddad3f2e59%3A0x219a979e13a0f7a8!2sBrilliantech%20Software%20-%20Ai%20%26%20Digital%20Transformation%20Solutions!5e0!3m2!1sen!2sin!4v1759471005632!5m2!1sen!2sin" width="600" height="450" loading="lazy" ></iframe>
    </div>
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-6 w-full">
      <Controller
        name="homeLocation"
        control={control}
        render={({ field }) => (
          <Input {...field} label="Home Location:" placeholder="Address" size="sm" className="text-gray-500" />
        )}
      />
      <Controller
        name="healthCard"
        control={control}
        render={({ field }) => (
          <Input {...field} label="Health Card:" placeholder="Current Address" size="sm" className="text-gray-500" />
        )}
      />
      <Controller
        name="insurance"
        control={control}
        render={({ field }) => (
          <Input {...field} label="Insurance:" placeholder="Permanent Address" size="sm" className="text-gray-500" />
        )}
      />
      <div className="grid grid-cols-2 gap-6">
        <Controller
          name="homeLat"
          control={control}
          render={({ field }) => (
            <Input {...field} label="Home Lat" placeholder="Lat" size="sm" className="text-gray-500" />
          )}
        />
        <Controller
          name="homeLong"
          control={control}
          render={({ field }) => (
            <Input {...field} label="Home Long" placeholder="Long" size="sm" className="text-gray-500" />
          )}
        />
      </div>
    </form>
  </div>
  );
}
