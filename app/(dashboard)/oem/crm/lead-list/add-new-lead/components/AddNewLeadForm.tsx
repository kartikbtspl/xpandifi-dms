"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import Input from "@/components/common/ui/Input";
import Dropdown from "@/components/common/ui/Dropdown";
import Button from "@/components/common/ui/Button";

export default function AddNewLeadForm() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      customerType: "new",
      companyName: "",
      existingCustomer: "",
      address: "",
      assignTo: "",
      location: "",
      lat: "",
      long: "",
      country: "",
      state: "",
      city: "",
      pincode: "",
      designation: "",
      website: "",
      leadSource: "",
      leadIndustry: "",
      leadType: "",
      leadDetails: "",
    },
  });

  const countryOptions = [
    { value: "india", label: "India" },
    { value: "usa", label: "USA" },
  ];

  const stateOptions = [
    { value: "maharashtra", label: "Maharashtra" },
    { value: "karnataka", label: "Karnataka" },
  ];

  const cityOptions = [
    { value: "pune", label: "Pune" },
    { value: "delhi", label: "Delhi" },
  ];

  const onSubmit = (data: any) => {
    console.log("Form Submitted:", data);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-sm">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Two-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div>
            <Controller
              name="firstName"
              control={control}
              render={({ field }) => (
                <Input {...field} label="First Name" required placeholder="First Name" className="rounded-lg"/>
              )}
            />
          </div>
          <div>
            <Controller
              name="country"
              control={control}
              render={({ field }) => (
                <Dropdown {...field} label="Country" placeholder="-Select Country-" options={countryOptions} className="rounded-lg"/>
              )}
            />
          </div>

          <div>
            <Controller
              name="lastName"
              control={control}
              render={({ field }) => (
                <Input {...field} label="Last Name" required placeholder="Last Name" className="rounded-lg"/>
              )}
            />
          </div>
          <div>
            <Controller
              name="state"
              control={control}
              render={({ field }) => (
                <Dropdown {...field} label="State" placeholder="-Select State-" options={stateOptions} className="rounded-lg"/>
              )}
            />
          </div>

          <div>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Input {...field} label="Email" placeholder="Enter email" className="rounded-lg"/>
              )}
            />
          </div>
          <div>
            <Controller
              name="city"
              control={control}
              render={({ field }) => (
                <Dropdown {...field} label="City" placeholder="-Select City-" options={cityOptions} className="rounded-lg"/>
              )}
            />
          </div>

          <div>
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <Input {...field} label="Contact Number" placeholder="+91 ..." className="rounded-lg"/>
              )}
            />
          </div>
          <div>
            <Controller
              name="pincode"
              control={control}
              render={({ field }) => (
                <Input {...field} label="Pincode" placeholder="Pincode" className="rounded-lg"/>
              )}
            />
          </div>

          {/* Radio for customer type */}
          <div className="col-span-1">
            <label className="text-sm font-medium text-gray-700">Select</label>
            <div className="flex gap-6 mt-2">
              <label className="flex items-center gap-2">
                <input type="radio" value="new" {...control.register} /> New Customer
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" value="existing" {...control.register} /> Existing Customer
              </label>
            </div>
          </div>

          <div>
            <Controller
              name="designation"
              control={control}
              render={({ field }) => (
                <Input {...field} label="Designation" placeholder="Designation" className="rounded-lg"/>
              )}
            />
          </div>

          {/* Extra Inputs */}
          <div>
            <Controller
              name="companyName"
              control={control}
              render={({ field }) => (
                <Input {...field} label="Company Name" placeholder="Company Name" className="rounded-lg"/>
              )}
            />
          </div>
          <div>
            <Controller
              name="website"
              control={control}
              render={({ field }) => (
                <Input {...field} label="Website" placeholder="Website" className="rounded-lg"/>
              )}
            />
          </div>

          <div>
            <Controller
              name="existingCustomer"
              control={control}
              render={({ field }) => (
                <Input {...field} label="Existing Customer" placeholder="Existing Customer Name" className="rounded-lg"/>
              )}
            />
          </div>
          <div>
            <Controller
              name="leadSource"
              control={control}
              render={({ field }) => (
                <Dropdown {...field} label="Lead Source" placeholder="Website" options={[]} className="rounded-lg"/>
              )}
            />
          </div>

          <div>
            <Controller
              name="address"
              control={control}
              render={({ field }) => (
                <Input {...field} label="Address" placeholder="Company Address" className="rounded-lg"/>
              )}
            />
          </div>
          <div>
            <Controller
              name="leadIndustry"
              control={control}
              render={({ field }) => (
                <Dropdown {...field} label="Lead Industry" placeholder="IT" options={[]} className="rounded-lg"/>
              )}
            />
          </div>

          <div>
            <Controller
              name="assignTo"
              control={control}
              render={({ field }) => (
                <Dropdown {...field} label="Assign To" placeholder="Anup Naik" options={[]} className="rounded-lg" required/>
              )}
            />
          </div>
          <div>
            <Controller
              name="leadType"
              control={control}
              render={({ field }) => (
                <Dropdown {...field} label="Lead Type" placeholder="Hot" options={[]} className="rounded-lg"/>
              )}
            />
          </div>

          <div>
            <Controller
              name="location"
              control={control}
              render={({ field }) => (
                <Input {...field} label="Locations" placeholder="Enter Location" className="rounded-lg"/>
              )}
            />
          </div>
          <div>
            <Controller
              name="leadDetails"
              control={control}
              render={({ field }) => (
                <Input {...field} label="Lead Details" placeholder="Pune, Maharashtra" className="rounded-lg"/>
              )}
            />
          </div>

          <div className="flex gap-4">
            <Controller
              name="lat"
              control={control}
              render={({ field }) => (
                <Input {...field} label="Lat" placeholder="Lat" className="rounded-lg"/>
              )}
            />
            <Controller
              name="long"
              control={control}
              render={({ field }) => (
                <Input {...field} label="Long" placeholder="Long" className="rounded-lg"/>
              )}
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <Button variant="outline">Cancel</Button>
          <Button type="submit" className="px-7">Save</Button>
        </div>
      </form>
    </div>
  );
}
