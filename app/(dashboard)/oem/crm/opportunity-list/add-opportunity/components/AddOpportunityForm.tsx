
"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import Input from "@/components/common/ui/Input";
import Dropdown from "@/components/common/ui/Dropdown";
import Button from "@/components/common/ui/Button";
import Documents from "./Documents";
import ToggleDocs from "./ToggleDocs" 

interface CustomerForm {
  companyName: string;
  designation: string;
  email: string;
  contactNumber: string;
  assignTo: string;
  website: string;
  address: string;
  customerType: "new" | "existing";
  firstName: string;
  lastName: string;
  existingCustomer: string;
  stage: string;
  value: string;
  expectedCloseDate: string;
}

export default function AddCustomerForm() {
  const { control, handleSubmit, reset } = useForm<CustomerForm>({
    defaultValues: {
      companyName: "",
      designation: "",
      email: "",
      contactNumber: "",
      assignTo: "",
      website: "",
      address: "",
      customerType: "new",
      firstName: "",
      lastName: "",
      existingCustomer: "",
      stage: "",
      value: "",
      expectedCloseDate: "",
    },
  });

  const assignOptions = [
    { value: "anup", label: "Anup Naik" },
    { value: "shreya", label: "Shreya" },
  ];

  const stageOptions = [
    { value: "stage1", label: "Stage 1" },
    { value: "stage2", label: "Stage 2" },
  ];

  const valueOptions = [
    { value: "0", label: "0" },
    { value: "1000", label: "1000" },
    { value: "5000", label: "5000" },
  ];

  const onSubmit = (data: CustomerForm) => {
    console.log("✅ Submitted Data:", data);
  };

  return (
    <div className="space-y-4">
      <div className="bg-white p-8 rounded-lg shadow-sm">
        <form onSubmit={handleSubmit(onSubmit)} >
          {/* Left Column */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>
              <Controller
                name="companyName"
                control={control}
                render={({ field }) => <Input {...field} label="Company Name" placeholder="Company Name" className="rounded-lg" />}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Select</label>
              <div className="flex gap-6 mt-2">
                <Controller
                  name="customerType"
                  control={control}
                  render={({ field }) => (
                    <>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          value="new"
                          checked={field.value === "new"}
                          onChange={field.onChange}
                        />
                        New Customer
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          value="existing"
                          checked={field.value === "existing"}
                          onChange={field.onChange}
                        />
                        Existing Customer
                      </label>
                    </>
                  )}
                />
              </div>
            </div>

            <div>
              <Controller
                name="designation"
                control={control}
                render={({ field }) => <Input {...field} label="Designation" placeholder="Designation" className="rounded-lg" />}
              />
            </div>
            <div>
              <Controller
                name="firstName"
                control={control}
                render={({ field }) => (
                  <Input {...field} label="First Name" placeholder="First Name" className="rounded-lg" />
                )}
              />
            </div>

            <div>
              <Controller
                name="email"
                control={control}
                render={({ field }) => <Input {...field} label="Email" placeholder="Email" className="rounded-lg" />}
              />
            </div>
            <div>
              <Controller
                name="lastName"
                control={control}
                render={({ field }) => (
                  <Input {...field} label="Last Name" placeholder="Last Name" className="rounded-lg" />
                )}
              />
            </div>

            <div>
              <Controller
                name="contactNumber"
                control={control}
                render={({ field }) => <Input {...field} label="Contact Number" placeholder="+91 ..." className="rounded-lg" />}
              />
            </div>
            <div>
              <Controller
                name="existingCustomer"
                control={control}
                render={({ field }) => (
                  <Input {...field} label="Existing Customer" placeholder="Existing Customer Name" className="rounded-lg" />
                )}
              />
            </div>

            <div>
              <Controller
                name="assignTo"
                control={control}
                render={({ field }) => (
                  <Dropdown {...field} label="Assign To" options={assignOptions} placeholder="Select User" className="rounded-lg" />
                )}
              />
            </div>
            <div>
              <Controller
                name="stage"
                control={control}
                render={({ field }) => (
                  <Dropdown {...field} label="Stage" options={stageOptions} placeholder="--Select Stage--" className="rounded-lg" />
                )}
              />
            </div>

            <div>
              <Controller
                name="website"
                control={control}
                render={({ field }) => <Input {...field} label="Website" placeholder="Website" className="rounded-lg" />}
              />
            </div>
            <div>
              <Controller
                name="value"
                control={control}
                render={({ field }) => (
                  <Dropdown {...field} label="Value" options={valueOptions} placeholder="Select Value" className="rounded-lg" />
                )}
              />
            </div>

            <div>
              <Controller
                name="address"
                control={control}
                render={({ field }) => <Input {...field} label="Address" placeholder="Company Address" className="rounded-lg" />}
              />
            </div>
            <div>
              <Controller
                name="expectedCloseDate"
                control={control}
                render={({ field }) => (
                  <Input {...field} label="Expected Close Date" placeholder="dd-mm-yy" type="date" className="rounded-lg" />
                )}
              />
            </div>
          </div>
          <div className="flex justify-center gap-4 mt-6">
            <Button variant="outline" type="button" onClick={() => reset()}>
              Cancel
            </Button>
            <Button type="submit">Save</Button>
          </div>
        </form>
      </div>
      <ToggleDocs />
    </div>
  );
}
