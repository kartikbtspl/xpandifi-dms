"use client";

import { useForm, Controller } from "react-hook-form";
import Input from "@/components/common/ui/Input";
import Button from "@/components/common/ui/Button";

export type FormValuesWorkPlace = {
  weekOff: string;
  companyLocation: string;
  timeZone: string;
  businessSegment: string;
  shiftName: string;
  divisionName: string;
  circleName: string;
};

export default function WorkPlaceDetailsForm() {
  const { control, handleSubmit, reset } = useForm<FormValuesWorkPlace>({
    defaultValues: {
      weekOff: "",
      companyLocation: "",
      timeZone: "",
      businessSegment: "",
      shiftName: "",
      divisionName: "",
      circleName: "",
    },
  });

  const onSubmit = (data: FormValuesWorkPlace) => {
    console.log("Work Place Details:", data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-x-8 gap-y-6 bg-white rounded-lg p-6">
      <Controller
        name="weekOff"
        control={control}
        render={({ field }) => (
          <Input {...field} label="Week Off:" size="sm" className="text-gray-500" />
        )}
      />
      <Controller
        name="companyLocation"
        control={control}
        render={({ field }) => (
          <Input {...field} label="Company Location:" placeholder="-" size="sm" className="text-gray-500" />
        )}
      />
      <Controller
        name="timeZone"
        control={control}
        render={({ field }) => (
          <Input {...field} label="Time Zone:" placeholder="-" size="sm" className="text-gray-500" />
        )}
      />
      <Controller
        name="businessSegment"
        control={control}
        render={({ field }) => (
          <Input {...field} label="Business Segment:" size="sm" className="text-gray-500" />
        )}
      />
      <Controller
        name="shiftName"
        control={control}
        render={({ field }) => (
          <Input {...field} label="Shift Name:" size="sm" className="text-gray-500" />
        )}
      />
      <Controller
        name="divisionName"
        control={control}
        render={({ field }) => (
          <Input {...field} label="Division Name:" size="sm" className="text-gray-500" />
        )}
      />
        <Controller
          name="circleName"
          control={control}
          render={({ field }) => (
            <Input {...field} label="Circle Name:" size="sm" className="text-gray-500" />
          )}
        />
    </form>
  );
}
