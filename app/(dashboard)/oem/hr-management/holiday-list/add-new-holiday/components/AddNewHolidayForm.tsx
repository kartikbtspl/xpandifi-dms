// HolidayForm.tsx
"use client";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import Input from "@/components/common/ui/Input";
import Dropdown from "@/components/common/ui/Dropdown";
import Button from "@/components/common/ui/Button";
import { FiShare } from "react-icons/fi";
import { useHolidayStore } from "@/store/hr-management/holiday-list/useHolidayStore";
import { useRouter } from "next/navigation";

type HolidayFormValues = {
  holidayName: string;
  holidayImage: File | null;
  holidayDateTime: string;
  holidayStatus: string;
  country: string;
  state: string;
};

interface HolidayFormProps {
  onSubmitData: (data: HolidayFormValues) => void;
}

export default function AddNewHolidayForm({ onSubmitData }: HolidayFormProps) {
  const { control, handleSubmit, reset, setValue } = useForm<HolidayFormValues>({
    defaultValues: {
      holidayName: "",
      holidayImage: null,
      holidayDateTime: "",
      holidayStatus: "",
      country: "",
      state: "",
    },
  });

  const addHoliday = useHolidayStore((state) => state.addHoliday);
  const router = useRouter();

  const onSubmit = (data: HolidayFormValues) => {
    addHoliday({
      holidayName: data.holidayName,
      holidayDateTime: data.holidayDateTime,
      holidayStatus: data.holidayStatus,
      country: data.country,
      state: data.state,
      holidayImage: data.holidayImage,
    });
    router.push("/oem/hr-management/holiday-list");
  };

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="flex justify-between p-6">
        <h2 className="text-lg font-semibold text-gray-800">Holiday</h2>
        <Button
          variant="outline"
          startIcon={<FiShare />}
          className="cursor-pointer"
        >
          Upload Holiday
        </Button>
      </div>

      <hr className="border-gray-200" />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-2 p-6 gap-x-6 gap-y-4"
      >
        {/* Holiday Name */}
        <Controller
          name="holidayName"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              label="Holiday Name:"
              placeholder="Enter holiday name"
            />
          )}
        />

        {/* Holiday Image (file upload) */}
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-700">
            Holiday Image:
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0] || null;
              setValue("holidayImage", file);
            }}
            className="p-3 border border-gray-300 rounded-full h-12 text-sm"
          />
        </div>

        {/* Holiday Date */}
        <Controller
          name="holidayDateTime"
          control={control}
          render={({ field }) => (
            <Input {...field} type="date" label="Holiday Date:" />
          )}
        />

        {/* Holiday Status */}
        <Controller
          name="holidayStatus"
          control={control}
          render={({ field }) => (
            <Dropdown
              {...field}
              label="Holiday Status:"
              placeholder="Select status"
              options={[
                { label: "Active", value: "Active" },
                { label: "Archive", value: "Archive" },
              ]}
            />
          )}
        />

        {/* Country Dropdown */}
        <Controller
          name="country"
          control={control}
          render={({ field }) => (
            <Dropdown
              {...field}
              label="Country:"
              placeholder="Select country"
              options={[
                { label: "India", value: "India" },
                { label: "USA", value: "USA" },
                { label: "UK", value: "UK" },
              ]}
            />
          )}
        />

        {/* State Dropdown */}
        <Controller
          name="state"
          control={control}
          render={({ field }) => (
            <Dropdown
              {...field}
              label="State Holiday:"
              placeholder="Select state"
              options={[
                { label: "Maharashtra", value: "Maharashtra" },
                { label: "Karnataka", value: "Karnataka" },
                { label: "Delhi", value: "Delhi" },
              ]}
            />
          )}
        />

        {/* Reset & Submit */}
        <div className="col-span-2 flex gap-3 justify-end mt-4">
          <Button
            className="cursor-pointer"
            type="button"
            variant="outline"
            onClick={() => router.push("/oem/hr-management/holiday-list")}
          >
            Cancel
          </Button>
          <Button className="cursor-pointer" type="submit">
            Save
          </Button>
        </div>
      </form>
    </div>
  );
}
