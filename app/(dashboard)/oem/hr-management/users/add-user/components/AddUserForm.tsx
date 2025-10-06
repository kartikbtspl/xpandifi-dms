"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import Input from "@/components/common/ui/Input";
import Dropdown from "@/components/common/ui/Dropdown";

const bankNames = [
  { label: "--Select Class Type--", value: "" },
  { label: "Axis", value: "axis" },
  { label: "SBI", value: "sbi" },
];
const cityOptions = [
  { label: "--Select City--", value: "" },
  { label: "Pune", value: "pune" },
  { label: "Mumbai", value: "mumbai" },
];
const vehicleOptions = [
  { label: "--Select business segment--", value: "" },
  { label: "Car", value: "car" },
  { label: "Bike", value: "bike" },
];
const productMonthOptions = [
  { label: "--Select Product Of Month--", value: "" },
  { label: "Product A", value: "a" },
  { label: "Product B", value: "b" },
];
const distributorOptions = [
  { label: "--Select Distributor--", value: "" },
  { label: "Dist A", value: "a" },
  { label: "Dist B", value: "b" },
];
const routeOptions = [
  { label: "--Select Route--", value: "" },
  { label: "Route1", value: "r1" },
  { label: "Route2", value: "r2" },
];

export default function AddUserForm() {
  const { control, handleSubmit, register, reset } = useForm({
    defaultValues: {
      // Existing + new fields
      firstName: "",
      lastName: "",
      email: "",
      userLogin: "",
      phone: "",
      password: "",
      confirmPassword: "",
      allowAttendance: false,
      role: "",
      reportingRole: "",
      reportingManager: "",
      profile: "",
      country: "",
      zoneName: "",
      state: "",
      district: "",
      bankName: "",
      bankAccountNumber: "",
      ifscCode: "",
      vehicleNo: "",
      allowedToTakeOrder: "",
      customerField: "",
      allowedDiscount: "",
      targetForProduct: "",
      productOfMonth: "",
      city: "",
      dateOfBirth: "",
      dateOfJoining: "",
      bloodGroup: "",
      employeeCode: "",
      vendorCode: "",
      privilegeId: "",
      distributor: "",
      route: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log("User Form Submitted:", data);
    reset();
  };

  // Helper wrapper for consistent label + input spacing and size
  const FieldWrapper = ({ label, children }: { label: React.ReactNode; children: React.ReactNode }) => (
    <div className="flex flex-col mb-4">
      <label className="mb-1 text-sm font-medium text-gray-700">{label}</label>
      {children}
    </div>
  );

  return (
    <div className="bg-white p-8 rounded-lg shadow-sm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Controller name="firstName" control={control} render={({ field }) => (
            <FieldWrapper label="First Name">
              <Input {...field} placeholder="First Name" className="w-full min-h-[40px]" />
            </FieldWrapper>
          )} />
          <Controller name="role" control={control} render={({ field }) => (
            <FieldWrapper label="Role">
              <Dropdown {...field} placeholder="--Select Role--" options={[]} className="w-full min-h-[40px]" />
            </FieldWrapper>
          )} />
          <Controller name="lastName" control={control} render={({ field }) => (
            <FieldWrapper label="Last Name">
              <Input {...field} placeholder="Last Name" className="w-full min-h-[40px]" />
            </FieldWrapper>
          )} />
          <Controller name="reportingRole" control={control} render={({ field }) => (
            <FieldWrapper label="Reporting Role">
              <Dropdown {...field} placeholder="--Select Role--" options={[]} className="w-full min-h-[40px]" />
            </FieldWrapper>
          )} />
          <Controller name="email" control={control} render={({ field }) => (
            <FieldWrapper label="Email">
              <Input {...field} placeholder="Email" className="w-full min-h-[40px]" />
            </FieldWrapper>
          )} />
          <Controller name="reportingManager" control={control} render={({ field }) => (
            <FieldWrapper label="Reporting Manager">
              <Dropdown {...field} placeholder="--Select Manager--" options={[]} className="w-full min-h-[40px]" />
            </FieldWrapper>
          )} />
          <Controller name="userLogin" control={control} render={({ field }) => (
            <FieldWrapper label="User Login">
              <Input {...field} placeholder="User Login" className="w-full min-h-[40px]" />
            </FieldWrapper>
          )} />
          <Controller name="profile" control={control} render={({ field }) => (
            <FieldWrapper label="Profile">
              <Dropdown {...field} placeholder="--Select District--" options={[]} className="w-full min-h-[40px]" />
            </FieldWrapper>
          )} />
          <Controller name="phone" control={control} render={({ field }) => (
            <FieldWrapper label="Mobile No">
              <Input {...field} placeholder="+91 ..." className="w-full min-h-[40px]" />
            </FieldWrapper>
          )} />
          <Controller name="country" control={control} render={({ field }) => (
            <FieldWrapper label="Country">
              <Dropdown {...field} placeholder="--Select Country--" options={[]} className="w-full min-h-[40px]" />
            </FieldWrapper>
          )} />
          <Controller name="password" control={control} render={({ field }) => (
            <FieldWrapper label="Password">
              <Input {...field} type="password" placeholder="Password" className="w-full min-h-[40px]" />
            </FieldWrapper>
          )} />
          <Controller name="zoneName" control={control} render={({ field }) => (
            <FieldWrapper label="Zone Name">
              <Dropdown {...field} placeholder="--Select Zone--" options={[]} className="w-full min-h-[40px]" />
            </FieldWrapper>
          )} />
          <div className="flex items-center gap-2 mb-4 col-span-2">
            <input type="checkbox" id="allowAttendance" {...register("allowAttendance")} />
            <label htmlFor="allowAttendance" className="text-sm">Allow User To Mark Attendance From Any Location</label>
          </div>
          <Controller name="state" control={control} render={({ field }) => (
            <FieldWrapper label="State">
              <Dropdown {...field} placeholder="--Select State--" options={[]} className="w-full min-h-[40px]" />
            </FieldWrapper>
          )} />
          <Controller name="confirmPassword" control={control} render={({ field }) => (
            <FieldWrapper label="Confirm Password">
              <Input {...field} type="password" placeholder="Confirm Password" className="w-full min-h-[40px]" />
            </FieldWrapper>
          )} />
          
          <Controller name="district" control={control} render={({ field }) => (
            <FieldWrapper label="District">
              <Dropdown {...field} placeholder="--Select District--" options={[]} className="w-full min-h-[40px]" />
            </FieldWrapper>
          )} />
          {/* New fields */}
          <Controller name="bankName" control={control} render={({ field }) => (
            <FieldWrapper label="Bank Name:">
              <Dropdown {...field} options={bankNames} placeholder="--Select Class Type --" className="w-full min-h-[40px]" />
            </FieldWrapper>
          )} />
          <Controller name="city" control={control} render={({ field }) => (
            <FieldWrapper label="City*">
              <Dropdown {...field} options={cityOptions} placeholder="--Select City--" className="w-full min-h-[40px]" />
            </FieldWrapper>
          )} />
          <Controller name="bankAccountNumber" control={control} render={({ field }) => (
            <FieldWrapper label="Bank Account Number:">
              <Input {...field} className="w-full min-h-[40px]" />
            </FieldWrapper>
          )} />
          <Controller name="dateOfBirth" control={control} render={({ field }) => (
            <FieldWrapper label="Date Of Birth:">
              <Input {...field} className="w-full min-h-[40px]" />
            </FieldWrapper>
          )} />
          <Controller name="ifscCode" control={control} render={({ field }) => (
            <FieldWrapper label="IFSC Code:">
              <Input {...field} className="w-full min-h-[40px]" />
            </FieldWrapper>
          )} />

          <Controller name="dateOfJoining" control={control} render={({ field }) => (
            <FieldWrapper label="Date Of Joining:">
              <Input {...field} className="w-full min-h-[40px]" />
            </FieldWrapper>
          )} />
          <Controller name="vehicleNo" control={control} render={({ field }) => (
            <FieldWrapper label="Vehicle No:">
              <Dropdown {...field} options={vehicleOptions} placeholder="--Select business segment--" className="w-full min-h-[40px]" />
            </FieldWrapper>
          )} />
          <Controller name="bloodGroup" control={control} render={({ field }) => (
            <FieldWrapper label="Blood Group:">
              <Input {...field} className="w-full min-h-[40px]" />
            </FieldWrapper>
          )} />
          <Controller name="allowedToTakeOrder" control={control} render={({ field }) => (
            <FieldWrapper label="Allowed To Take Order:">
              <Input {...field} className="w-full min-h-[40px]" />
            </FieldWrapper>
          )} />
          <Controller name="employeeCode" control={control} render={({ field }) => (
            <FieldWrapper label="Employee Code:">
              <Input {...field} className="w-full min-h-[40px]" />
            </FieldWrapper>
          )} />

          <Controller name="customerField" control={control} render={({ field }) => (
            <FieldWrapper label="Customer Field:">
              <Input {...field} className="w-full min-h-[40px]" />
            </FieldWrapper>
          )} />
           <Controller name="vendorCode" control={control} render={({ field }) => (
            <FieldWrapper label="Vendor Code:">
              <Input {...field} className="w-full min-h-[40px]" />
            </FieldWrapper>
          )} />

          <Controller name="allowedDiscount" control={control} render={({ field }) => (
            <FieldWrapper label="Allowed Discount:">
              <Input {...field} className="w-full min-h-[40px]" />
            </FieldWrapper>
          )} />
          <Controller name="privilegeId" control={control} render={({ field }) => (
            <FieldWrapper label="Privilege ID:">
              <Input {...field} className="w-full min-h-[40px]" />
            </FieldWrapper>
          )} />

          <Controller name="targetForProduct" control={control} render={({ field }) => (
            <FieldWrapper label="Target For Product:">
              <Input {...field} className="w-full min-h-[40px]" />
            </FieldWrapper>
          )} />
          <Controller name="distributor" control={control} render={({ field }) => (
            <FieldWrapper label="Distributor:">
              <Dropdown {...field} options={distributorOptions} placeholder="--Select Distributor--" className="w-full min-h-[40px]" />
            </FieldWrapper>
          )} />

          <Controller name="productOfMonth" control={control} render={({ field }) => (
            <FieldWrapper label="Product Of The Month:">
              <Dropdown {...field} options={productMonthOptions} placeholder="--Select Product Of Month--" className="w-full min-h-[40px]" />
            </FieldWrapper>
          )} />         
          <Controller name="route" control={control} render={({ field }) => (
            <FieldWrapper label="Route:">
              <Dropdown {...field} options={routeOptions} placeholder="--Select Route--" className="w-full min-h-[40px]" />
            </FieldWrapper>
          )} />

        </div>
      </form>
    </div>
  );
}
