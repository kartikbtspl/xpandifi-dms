"use client";
import { useForm, Controller } from "react-hook-form";
import Input from "@/components/common/ui/Input";
import Dropdown from "@/components/common/ui/Dropdown"; // Your reusable Dropdown
import Button from "@/components/common/ui/Button";

type FormValues = {
  company: string;
  newPackage: string;
  expireDate: string;
  newExpireDate: string;
  package: string;
  description: string;
  status: string;
};

// Example dropdown options, replace with real data
const countryOptions = [
  { label: "--Select Country--", value: "" },
  { label: "India", value: "india" },
  { label: "USA", value: "usa" }
];
const stateOptions = [
  { label: "--Select State--", value: "" },
  { label: "Maharashtra", value: "maharashtra" },
  { label: "California", value: "california" }
];
const cityOptions = [
  { label: "--Select City--", value: "" },
  { label: "Mumbai", value: "mumbai" },
  { label: "Los Angeles", value: "losangeles" }
];
const userOptions = [
  { label: "--Select User--", value: "" },
  { label: "User 1", value: "user1" },
  { label: "User 2", value: "user2" }
];
const distributorOptions = [
  { label: "--Select Distributor--", value: "" },
  { label: "Distributor 1", value: "distributor1" },
  { label: "Distributor 2", value: "distributor2" }
];
const routeOptions = [
  { label: "--Select Route--", value: "" },
  { label: "Route 1", value: "route1" },
  { label: "Route 2", value: "route2" }
];

export default function RenewalRequestForm({ onSave }: { onSave: (data: FormValues) => void }) {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      company: "",
      newPackage: "",
      expireDate: "",
      newExpireDate: "",
      package: "",
      description: "",
      status: "",
    },
  });

  return (
    <div className="bg-white rounded-lg p-6 w-full">
      <form onSubmit={handleSubmit(onSave)}>
        <div className="grid grid-cols-3 gap-4">
          {/* Row 1 */}
          <div className="col-span-1">
            <Controller
              name="company"
              control={control}
              render={({ field }) => (
                <Input {...field} label="Company:" size="sm" />
              )}
            />
          </div>
          <div className="col-span-1">
            <Controller
              name="newPackage"
              control={control}
              render={({ field }) => (
                <Dropdown
                  {...field}
                  label="New Package:"
                  options={countryOptions}
                  size="sm"
                  placeholder="--Select Country--"
                  onChange={val => field.onChange(val)}
                />
              )}
            />
          </div>
          <div className="col-span-1">
            <Controller
              name="expireDate"
              control={control}
              render={({ field }) => (
                <Dropdown
                  {...field}
                  label="Expire Date:"
                  options={stateOptions}
                  size="sm"
                  placeholder="--Select State--"
                  onChange={val => field.onChange(val)}
                />
              )}
            />
          </div>
          <div className="col-span-1">
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <Dropdown
                  {...field}
                  label="Description:"
                  options={distributorOptions}
                  size="sm"
                  placeholder="--Select Distributor--"
                  onChange={val => field.onChange(val)}
                />
              )}
            />
          </div>
          {/* Row 2 */}
          <div className="col-span-1">
            <Controller
              name="newExpireDate"
              control={control}
              render={({ field }) => (
                <Dropdown
                  {...field}
                  label="New Expire Date:"
                  options={cityOptions}
                  size="sm"
                  placeholder="--Select City--"
                  onChange={val => field.onChange(val)}
                />
              )}
            />
          </div>
          <div className="col-span-1">
            <Controller
              name="package"
              control={control}
              render={({ field }) => (
                <Dropdown
                  {...field}
                  label="Package:"
                  options={userOptions}
                  size="sm"
                  placeholder="--Select User--"
                  onChange={val => field.onChange(val)}
                />
              )}
            />
          </div>
          {/* Only Status in Row 3 */}
          <div className="col-span-1">
            <Controller
              name="status"
              control={control}
              render={({ field }) => (
                <Dropdown
                  {...field}
                  label="Status:"
                  options={routeOptions}
                  size="sm"
                  placeholder="--Select Route--"
                  onChange={val => field.onChange(val)}
                />
              )}
            />
          </div>
        </div>
        <div className="flex justify-end gap-4 mt-8">
          <Button
            variant="outline"
            type="button"
            className="rounded-full px-8"
            onClick={() => reset()}
          >
            Reset
          </Button>
          <Button type="submit" className="bg-[#445E94] text-white rounded-full px-8">
            Save
          </Button>
        </div>
      </form>
    </div>
  );
}
