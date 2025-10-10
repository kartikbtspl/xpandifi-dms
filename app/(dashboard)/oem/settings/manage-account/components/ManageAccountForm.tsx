"use client";

import { useForm, Controller } from "react-hook-form";
import Input from "@/components/common/ui/Input";
import Dropdown from "@/components/common/ui/Dropdown";
import Button from "@/components/common/ui/Button";
import { Label } from "recharts";

type FormValues = {
  customerName: string;
  companyEmail: string;
  companyMobile: string;
  companyPhone: string;
  companyID: string;
  address: string;
  country: string;
  state: string;
  city: string;
  validity: string;
  expiryDate: string;
  noOfUsers: string;
  timeZone: string;
  serviceType: string;
  billingAddress: string;
  companyImage: string; // handle as file or string
  gstNo: string;
  customField1: string;
  customField2: string;
  startFYMonth: string;
  endFYMonth: string;
  terms: string;
  carryForwardLeaves: boolean;
  premiumSupport: boolean;
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  password: string;
  confirmPassword: string;
};

export default function ManageAccountForm() {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      customerName: "",
      companyEmail: "",
      companyMobile: "",
      companyPhone: "",
      companyID: "",
      address: "",
      country: "",
      state: "",
      city: "",
      validity: "",
      expiryDate: "",
      noOfUsers: "",
      timeZone: "",
      serviceType: "",
      billingAddress: "",
      companyImage: "",
      gstNo: "",
      customField1: "",
      customField2: "",
      startFYMonth: "",
      endFYMonth: "",
      terms: "",
      carryForwardLeaves: false,
      premiumSupport: false,
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      password: "",
      confirmPassword: "",
    },
  });

  // Dummy options for dropdowns
  const countryOptions = [{ label: "India", value: "india" }];
  const stateOptions = [{ label: "Maharashtra", value: "maharashtra" }];
  const cityOptions = [{ label: "Mumbai", value: "mumbai" }];
  const validityOptions = [{ label: "1 Year", value: "1year" }];
  const serviceTypeOptions = [{ label: "SaaS", value: "saas" }];

  return (
    <form className="bg-white rounded-lg pb-4 w-full">
      <div className="grid grid-cols-2 gap-x-8 gap-y-4 p-6 mb-4">
        {/* Left column */}
        <Controller name="customerName" control={control} render={({ field }) => (
          <Input {...field} label="Customer Name" required size="sm" />
        )} />
        <Controller name="companyEmail" control={control} render={({ field }) => (
          <Input {...field} label="Company Email" required size="sm" />
        )} />
        <Controller name="companyMobile" control={control} render={({ field }) => (
          <Input {...field} label="Company Mobile" required size="sm" />
        )} />
        <Controller name="companyPhone" control={control} render={({ field }) => (
          <Input {...field} label="Company Phone" required size="sm" />
        )} />
        <Controller name="companyID" control={control} render={({ field }) => (
          <Input {...field} label="Company ID" required size="sm" />
        )} />
        <Controller name="address" control={control} render={({ field }) => (
          <Input {...field} label="Address" required size="sm" />
        )} />
        <Controller name="country" control={control} render={({ field }) => (
          <Dropdown {...field} label="Country" required options={countryOptions} size="sm" />
        )} />
        <Controller name="state" control={control} render={({ field }) => (
          <Dropdown {...field} label="State" required options={stateOptions} size="sm" />
        )} />
        <Controller name="city" control={control} render={({ field }) => (
          <Dropdown {...field} label="City" required options={cityOptions} size="sm" />
        )} />
        <Controller name="validity" control={control} render={({ field }) => (
          <Dropdown {...field} label="Validity" required options={validityOptions} size="sm" />
        )} />
        <Controller name="expiryDate" control={control} render={({ field }) => (
          <Input {...field} label="Expiry Date" required size="sm" />
        )} />
        <Controller name="noOfUsers" control={control} render={({ field }) => (
          <Input {...field} label="No Of Users" required size="sm" />
        )} />
        <Controller name="timeZone" control={control} render={({ field }) => (
          <Input {...field} label="Time Zone" required size="sm" />
        )} />
        <Controller name="serviceType" control={control} render={({ field }) => (
          <Dropdown {...field} label="Service Type" required options={serviceTypeOptions} size="sm" />
        )} />
        <Controller name="billingAddress" control={control} render={({ field }) => (
          <Input {...field} label="Billing Address" required size="sm" />
        )} />
        <Controller
          name="companyImage"
          control={control}
          render={({ field }) => (
            <div className="flex flex-col">
            <label htmlFor="">Image</label>
            <input
              type="file"
              onChange={e => field.onChange(e.target.files?.[0])}
              onBlur={field.onBlur}
              name={field.name}
              ref={field.ref}
              className="px-3 py-2 border border-gray-300 rounded-full h-10 w-full"
            />
            </div>
          )}
        />
        <Controller name="customField1" control={control} render={({ field }) => (
          <Input {...field} label="Custom Field 1" size="sm" />
        )} />
        <Controller name="customField2" control={control} render={({ field }) => (
          <Input {...field} label="Custom Field 2" size="sm" />
        )} />
        <Controller name="startFYMonth" control={control} render={({ field }) => (
          <Input {...field} label="Start FY Month*" size="sm" />
        )} />
        <Controller name="endFYMonth" control={control} render={({ field }) => (
          <Input {...field} label="End FY Month" required size="sm" />
        )} />
        <Controller name="gstNo" control={control} render={({ field }) => (
          <Input {...field} label="GST No" size="sm" />
        )} />
        <Controller name="terms" control={control} render={({ field }) => (
          <Input {...field} label="Terms And Conditions" size="sm" />
        )} />

        {/* Checkboxes */}
        {/* <Controller name="carryForwardLeaves" control={control} render={({ field }) => (
          <input type="checkbox" {...field} label="Is carry forward leaves allowed in leave module?" />
        )} /> */}
        <div className="flex flex-col gap-2">
        <Controller
          name="carryForwardLeaves"
          control={control}
          render={({ field }) => (
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={field.value}
                onChange={e => field.onChange(e.target.checked)}
                onBlur={field.onBlur}
                name={field.name}
                ref={field.ref}
              />
              Is carry forward leaves allowed in leave module?
            </label>
          )}
        />
        <Controller
          name="premiumSupport"
          control={control}
          render={({ field }) => (
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={field.value}
                onChange={e => field.onChange(e.target.checked)}
                onBlur={field.onBlur}
                name={field.name}
                ref={field.ref}
              />
              Is Premium Support Enabled?
            </label>
          )}
        />
        </div>
      </div>
      {/* <hr className="text-gray-200 " /> */}
      <div className=" font-semibold px-6 py-3 border border-gray-200 rounded-lg">Customer Point Of Contact</div>
      {/* <hr className="text-gray-200 mb-8" /> */}
      <div className="grid grid-cols-2 gap-x-8 gap-y-4 p-6">
        <Controller name="firstName" control={control} render={({ field }) => (
          <Input {...field} label="First Name" required size="sm" />
        )} />
        <Controller name="lastName" control={control} render={({ field }) => (
          <Input {...field} label="Last Name" required size="sm" />
        )} />
        <Controller name="email" control={control} render={({ field }) => (
          <Input {...field} label="Email" required size="sm" />
        )} />
        <Controller name="mobile" control={control} render={({ field }) => (
          <Input {...field} label="Mobile" required size="sm" />
        )} />
        <Controller name="password" control={control} render={({ field }) => (
          <Input {...field} label="Password" required type="password" size="sm" />
        )} />
        <Controller name="confirmPassword" control={control} render={({ field }) => (
          <Input {...field} label="Confirm Password" required type="password" size="sm" />
        )} />
      </div>

      {/* <div className="flex justify-end gap-4 mt-4 px-6">
        <Button variant="outline" type="button" onClick={() => reset()}>
          Reset
        </Button>
        <Button type="submit" className=" px-8">
          Save
        </Button>
      </div> */}
    </form>
  );
}
