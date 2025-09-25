// AttendanceSummaryForm.tsx
"use client";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import Input from "@/components/common/ui/Input";
import Button from "@/components/common/ui/Button";
import { FiShare } from "react-icons/fi";

type CampnayLocationFormValues = {
  companyLocationName: string;
  companyLocationCode: string;
  officeLocation: string;
  address: string;
  lat: string;
  long: string;
};

interface CompanyLocationFormProps {
  onSubmitData: (data: CampnayLocationFormValues) => void;
}

export default function CompanyLocationForm({
  onSubmitData,
}: CompanyLocationFormProps) {
  const { control, handleSubmit, reset } = useForm<CampnayLocationFormValues>({
    defaultValues: {
      companyLocationName: "",
      companyLocationCode: "",
      officeLocation: "",
      address: "",
      lat: "",
      long: "",
    },
  });

  const onSubmit = (data: CampnayLocationFormValues) => {
    onSubmitData(data); // 🔼 Send form values up
  };

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="flex justify-between p-6">
        <h2 className="text-lg font-semibold text-gray-800">
        Location
      </h2>
      <Button variant="outline" startIcon={<FiShare />} className="cursor-pointer">Upload Location</Button>
      </div>
      
      <hr className="border-gray-200" />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-2 p-6 gap-x-6 gap-y-4"
      >
        {/* Company Location Name */}
        <Controller
          name="companyLocationName"
          control={control}
          render={({ field }) => (
            <Input {...field} label="Company Location Name:" placeholder="Enter company location name" />
          )}
        />

        {/* Company Location Code */}
        <Controller
          name="companyLocationCode"
          control={control}
          render={({ field }) => (
            <Input {...field} label="Company Location Code:" placeholder="Enter company location code" />
          )}
        />

        {/* Office Location */}
        <Controller
          name="officeLocation"
          control={control}
          render={({ field }) => (
            <Input {...field} label="Office Location:" placeholder="Enter office location" />
          )}
        />

        {/* Address */}
        <Controller
          name="address"
          control={control}
          render={({ field }) => (
            <Input {...field} label="Address:" placeholder="Enter address" />
          )}
        />

        {/* Latitude */}
        <Controller
          name="lat"
          control={control}
          render={({ field }) => (
            <Input {...field} label="Latitude:" placeholder="Enter latitude" />
          )}
        />

        {/* Longitude */}
        <Controller
          name="long"
          control={control}
          render={({ field }) => (
            <Input {...field} label="Longitude:" placeholder="Enter longitude" />
          )}
        />

        {/* Reset & Submit */}
        <div className="col-span-2 flex gap-3 justify-end mt-4">
          <Button className="cursor-pointer" type="button" variant="outline" onClick={() => reset()}>
            Reset
          </Button>
          <Button className="cursor-pointer" type="submit">Save</Button>
        </div>
      </form>
    </div>
  );
}
