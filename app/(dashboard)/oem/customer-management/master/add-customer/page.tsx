"use client";

import React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  customerFormSchema,
  CustomerFormData,
} from "@/lib/vlaidations/customerForm/customerScema";
import Input from "@/components/common/ui/Input";
import Dropdown from "@/components/common/ui/Dropdown";
import Button from "@/components/common/ui/Button";
import Breadcrumb from "@/components/common/ui/BreadCrumb";
import ToggleTabs from "./components/ToggleTabs";

export default function AddNewCustomer() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CustomerFormData>({
    resolver: zodResolver(customerFormSchema),
    defaultValues: {
      customerName: "",
      code: "",
      email: "",
      phone: "",
      fax: "",
      customerAccount: "",
      status: "active",
      route: "",
      gst: "",
      country: "",
      zone: "",
      state: "",
      district: "",
      city: "",
      distributor: "",
      storeType: "",
      pincode: "",
      classType: "",
      billingAddress: "",
      address: "",
      firmType: "",
      businessSegment: "",
      locations: "",
      noOfLocations: 0,
      latLong: "",
      area: "",
      customerType: "",
      customerSubType: "",
    },
  });

  // Dropdown options
  const countryOptions = [
    { value: "india", label: "India" },
    { value: "usa", label: "USA" },
  ];
  const zoneOptions = [
    { value: "north", label: "North Zone" },
    { value: "south", label: "South Zone" },
  ];
  const stateOptions = [
    { value: "maharashtra", label: "Maharashtra" },
    { value: "karnataka", label: "Karnataka" },
  ];
  const districtOptions = [
    { value: "pune", label: "Pune" },
    { value: "bangaloreUrban", label: "Bangalore Urban" },
  ];
  const cityOptions = [
    { value: "mumbai", label: "Mumbai" },
    { value: "delhi", label: "Delhi" },
  ];
  const distributorOptions = [
    { value: "dist1", label: "Distributor 1" },
    { value: "dist2", label: "Distributor 2" },
  ];
  const routeOptions = [
    { value: "route1", label: "Route 1" },
    { value: "route2", label: "Route 2" },
  ];
  const storeOptions = [
    { value: "store1", label: "Store 1" },
    { value: "store2", label: "Store 2" },
  ];
  const classOptions = [
    { value: "class1", label: "Class 1" },
    { value: "class2", label: "Class 2" },
  ];
  const firmTypeOptions = [
    { value: "proprietorship", label: "Proprietorship" },
    { value: "partnership", label: "Partnership" },
  ];
  const businessSegmentOptions = [
    { value: "retail", label: "Retail" },
    { value: "wholesale", label: "Wholesale" },
  ];
  const locationOptions = [
    { value: "single", label: "Single" },
    { value: "multiple", label: "Multiple" },
  ];
  const customerTypeOptions = [
    { value: "cType1", label: "CType 1" },
    { value: "cType2", label: "CType 2" },
    
  ];
  const customerSubTypeOptions = [
    { value: "subtype1", label: "Subtype 1" },
    { value: "subtype2", label: "Subtype 2" },
    { value: "cType3", label: "CType 3" },
    { value: "cType4", label: "CType 4" },
  ];

  const onSubmit: SubmitHandler<CustomerFormData> = (data) => {
    console.log("Form submitted:", data);
  };

  const onReset = () => {
    reset();
  };

  // Helper for error text
  const ErrorText = ({ message }: { message?: string }) =>
    message ? <p className="text-red-500 text-sm mt-1">{message}</p> : null;

  return (
    <div className="space-y-6">
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/dashboard" },
          { label: "Customer Management", href: "/customer-management" },
          { label: "Customer Master", href: "/customer-management/master" },
        ]}
      />
      <h1 className="text-3xl text-[#5D6F9E] font-semibold">Customer Master</h1>
      <div className="bg-white p-8 rounded-lg shadow-sm">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Row 1 */}
            <div>
              <Controller
                name="customerName"
                control={control}
                render={({ field }) => (
                  <Input {...field} label="Customer Name" placeholder="Enter customer name" className="rounded-lg" required/>
                )}
              />
              <ErrorText message={errors.customerName?.message} />
            </div>
            <div>
              <Controller
                name="country"
                control={control}
                render={({ field }) => (
                  <Dropdown {...field} label="Country" placeholder="-Select Country-" options={countryOptions} className="rounded-lg" required/>
                )}
              />
              <ErrorText message={errors.country?.message} />
            </div>

            {/* Row 2 */}
            <div>
              <Controller
                name="code"
                control={control}
                render={({ field }) => <Input {...field} label="Code" placeholder="Enter code" className="rounded-lg"/>}
              />
              <ErrorText message={errors.code?.message} />
            </div>
            <div>
              <Controller
                name="zone"
                control={control}
                render={({ field }) => (
                  <Dropdown {...field} label="Zone Name" placeholder="-Select Zone-" options={zoneOptions} className="rounded-lg"/>
                )}
              />
              <ErrorText message={errors.zone?.message} />
            </div>

            {/* Row 3 */}
            <div>
              <Controller
                name="email"
                control={control}
                render={({ field }) => <Input {...field} label="Email" placeholder="Enter email" className="rounded-lg"/>}
              />
              <ErrorText message={errors.email?.message} />
            </div>
            <div>
              <Controller
                name="state"
                control={control}
                render={({ field }) => (
                  <Dropdown {...field} label="State" placeholder="-Select state-" options={stateOptions} className="rounded-lg" required/>
                )}
              />
              <ErrorText message={errors.state?.message} />
            </div>

            {/* Row 4 */}
            <div>
              <Controller
                name="phone"
                control={control}
                render={({ field }) => <Input {...field} label="Phone Number" placeholder="+91 ..." className="rounded-lg"/>}
              />
              <ErrorText message={errors.phone?.message} />
            </div>
            <div>
              <Controller
                name="district"
                control={control}
                render={({ field }) => (
                  <Dropdown {...field} label="District" placeholder="-Select District-" options={districtOptions} className="rounded-lg" required/>
                )}
              />
              <ErrorText message={errors.district?.message} />
            </div>

            {/* Row 5 */}
            <div>
              <Controller
                name="fax"
                control={control}
                render={({ field }) => <Input {...field} label="Fax No" placeholder="Enter fax" className="rounded-lg"/>}
              />
              <ErrorText message={errors.fax?.message} />
            </div>
            <div>
              <Controller
                name="city"
                control={control}
                render={({ field }) => (
                  <Dropdown {...field} label="City" placeholder="-Select city-" options={cityOptions} className="rounded-lg" required/>
                )}
              />
              <ErrorText message={errors.city?.message} />
            </div>

            {/* Row 6 */}
            <div>
              <Controller
                name="customerAccount"
                control={control}
                render={({ field }) => (
                  <Input {...field} label="Customer Account Group 1" placeholder="Enter customer account" className="rounded-lg"/>
                )}
              />
              <ErrorText message={errors.customerAccount?.message} />
            </div>
            <div>
              <Controller
                name="distributor"
                control={control}
                render={({ field }) => (
                  <>
                  <Dropdown {...field} label="Distributor" placeholder="-Select distributor-" options={distributorOptions} className="rounded-lg" required plusButton={<button className=" border w-4 bg-gray-200 cursor-pointer">+</button>}/>
                  </>
                )}
              />
              <ErrorText message={errors.distributor?.message} />
            </div>

            {/* Row 7 */}
            <div>
              <Controller
                name="status"
                control={control}
                render={({ field }) => (
                  <div>
                    <label className="text-sm font-medium text-gray-700">Status</label>
                    <div className="flex gap-6 mt-2">
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          value="active"
                          checked={field.value === "active"}
                          onChange={field.onChange}
                          className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        Active
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          value="archive"
                          checked={field.value === "archive"}
                          onChange={field.onChange}
                          className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        Archive
                      </label>
                    </div>
                  </div>
                )}
              />
            </div>
            <div>
              <Controller
                name="route"
                control={control}
                render={({ field }) => (
                  <Dropdown {...field} label="Route" placeholder="-Select route-" options={routeOptions} className="rounded-lg" required plusButton={<button className="border w-4 bg-gray-200 cursor-pointer">+</button>}/>
                )}
              />
              <ErrorText message={errors.route?.message} />
            </div>
            <div>
              <Controller
                name="storeType"
                control={control}
                render={({ field }) => (
                  <Dropdown {...field} label="Store Type" placeholder="-Select store-" options={storeOptions} className="rounded-lg"/>
                )}
              />
              <ErrorText message={errors.storeType?.message} />
            </div>
            <div>
              <Controller
                name="pincode"
                control={control}
                render={({ field }) => <Input {...field} label="Pincode" placeholder="Enter pincode" className="rounded-lg" required/>}
              />
              <ErrorText message={errors.pincode?.message} />
            </div>

            <div>
              <Controller
                name="classType"
                control={control}
                render={({ field }) => (
                  <Dropdown {...field} label="Class Type" placeholder="-Select class-" options={classOptions} className="rounded-lg"/>
                )}
              />
              <ErrorText message={errors.classType?.message} />
            </div>
            <div>
              <Controller
                name="billingAddress"
                control={control}
                render={({ field }) => <Input {...field} label="Billing Address" placeholder="Enter billing address" className="rounded-lg"/>}
              />
              <ErrorText message={errors.billingAddress?.message} />
            </div>

            {/* Row 8 */}
            <div>
              <Controller
                name="gst"
                control={control}
                render={({ field }) => <Input {...field} label="GST" placeholder="Enter GST number" className="rounded-lg"/>}
              />
              <ErrorText message={errors.gst?.message} />
            </div>
            <div>
              <Controller
                name="address"
                control={control}
                render={({ field }) => <Input {...field} label="Address" placeholder="Enter address" className="rounded-lg" required/>}
              />
              <ErrorText message={errors.address?.message} />
            </div>

            {/* Row 11 */}
            <div>
              <Controller
                name="firmType"
                control={control}
                render={({ field }) => (
                  <Dropdown {...field} label="Firm Type" placeholder="-Select firm-" options={firmTypeOptions} className="rounded-lg"/>
                )}
              />
              <ErrorText message={errors.firmType?.message} />
            </div>
            <div>
              <Controller
                name="latLong"
                control={control}
                render={({ field }) => <Input {...field} label="Lat-Long" placeholder="Enter lat-long" className="rounded-lg" required/>}
              />
              <ErrorText message={errors.latLong?.message} />
            </div>

            <div>
              <Controller
                name="businessSegment"
                control={control}
                render={({ field }) => (
                  <Dropdown {...field} label="Business Segment" placeholder="-Select business-" options={businessSegmentOptions} className="rounded-lg"/>
                )}
              />
              <ErrorText message={errors.businessSegment?.message} />
            </div>
            <div>
              <Controller
                name="area"
                control={control}
                render={({ field }) => <Input {...field} label="Area" placeholder="Enter area" className="rounded-lg" required/>}
              />
              <ErrorText message={errors.area?.message} />
            </div>

            {/* Row 12 */}
            <div>
              <Controller
                name="locations"
                control={control}
                render={({ field }) => (
                  <Dropdown {...field} label="Locations" placeholder="-Select location-" options={locationOptions} className="rounded-lg"/>
                )}
              />
              <ErrorText message={errors.locations?.message} />
            </div>
            <div>
              <Controller
                name="customerType"
                control={control}
                render={({ field }) => (
                  <Dropdown {...field} label="Customer Type" placeholder="-Select customer type-" options={customerTypeOptions} className="rounded-lg" required/>
                )}
              />
              <ErrorText message={errors.customerType?.message} />
            </div>


            <div>
              <Controller
                name="noOfLocations"
                control={control}
                render={({ field }) => (
                  <Input {...field} label="No. of Locations" placeholder="Enter number of locations" type="number" className="rounded-lg"/>
                )}
              />
              <ErrorText message={errors.noOfLocations?.message} />
            </div>

            <div>
              <Controller
                name="customerSubType"
                control={control}
                render={({ field }) => (
                  <Dropdown {...field} label="Customer Sub-Type" placeholder="-Select sub-type-" options={customerSubTypeOptions} className="rounded-lg" required/>
                )}
              />
              <ErrorText message={errors.customerSubType?.message} />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <Button variant="outline" onClick={onReset}>
              Cancel
            </Button>
            <Button type="submit" className="px-6">
              Save
            </Button>
          </div>
        </form>
      </div>
      <ToggleTabs />
    </div>
  );
}
