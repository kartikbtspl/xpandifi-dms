"use client";
import { useState } from "react";
import Table from "@/components/common/table/Table";
import Button from "@/components/common/ui/Button";
import Input from "@/components/common/ui/Input";
import { Textarea } from "@/components/common/ui/Textarea";
import Image from "next/image";
import Breadcrumb from "@/components/common/ui/BreadCrumb";

export default function ProductView() {
  const [activeTab, setActiveTab] = useState("basic");

  // ---------- Table Columns ----------
  const columns = [
    { id: "pack", label: "Pack" },
    { id: "packUnit", label: "Pack Unit" },
    { id: "price", label: "Price" },
    { id: "state", label: "State" },
    { id: "city", label: "City" },
  ];

  // ---------- Mock Table Data ----------
  const rows = [
    {
      id: 1,
      pack: 790,
      packUnit: "kg",
      price: "₹1,200",
      state: "Tamilnadu",
      city: "Trichy",
    },
    {
      id: 2,
      pack: 420,
      packUnit: "ml",
      price: "₹390",
      state: "Karnataka",
      city: "Bangalore",
    },
    {
      id: 3,
      pack: 600,
      packUnit: "l",
      price: "₹750",
      state: "Kerala",
      city: "Kochin",
    },
  ];

  return (
    <div className="space-y-4">
      <div>
        {/* Back Button */}
        <Button  className="rounded-full px-4 mb-4 cursor-pointer" onClick={() => history.back()}>
          ← Back
        </Button>

        {/* Breadcrumb */}
        <Breadcrumb
                crumbs={[
                  { label: "Home", href: "/oem/dashboard" },
                  { label: "Product Management", href: "/oem/product-management" },
                  { label: "View Product", href: `/oem/product-management/products/` },
                ]}
              />
      </div>

      {/* Tabs + Content */}
      <div className="bg-white p-6 rounded-xl shadow-md mt-8">
        {/* 🔹 Tabs Header */}
        <div className="p-1 flex w-full bg-[#F8FAFB] rounded-full overflow-hidden text-sm font-medium text-gray-600 mb-6 justify-between">
          <div
            className={`px-6 py-2 cursor-pointer w-[90%] text-center ${
              activeTab === "basic"
                ? " bg-white rounded-full text-black shadow-sm"
                : "hover:text-black"
            }`}
            onClick={() => setActiveTab("basic")}
          >
            Basic Info
          </div>
          <div
            className={`px-6 py-2 cursor-pointer w-[90%] text-center ${
              activeTab === "packaging"
                ? " bg-white rounded-full text-black shadow-sm"
                : "hover:text-black"
            }`}
            onClick={() => setActiveTab("packaging")}
          >
            Packaging & Pricing
          </div>
          <div
            className={`px-6 py-2 cursor-pointer w-[90%] text-center ${
              activeTab === "additional"
                ? " bg-white rounded-full text-black shadow-sm"
                : "hover:text-black"
            }`}
            onClick={() => setActiveTab("additional")}
          >
            Additional Info
          </div>
        </div>

        {/* 🔹 Tab Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {activeTab === "basic" && (
            <>
              <Input label="Product Code*" />
              <Input label="Product Name*" />
              <Input label="Category*" placeholder="Enter category" />
              <Input label="Sub-Category" />
              <Input label="Brand*" placeholder="Enter brand" />
              <Input label="Status*" />
              <Input label="Division" placeholder="Enter division" />
            </>
          )}

          {activeTab === "packaging" && (
            <>
              <Input label="Pack Title*" />
              <Input label="Pack Unit" />
              <Input label="Material Group" placeholder="Enter category" />
              <Input label="Product Weight" />
              <Input label="Bar Code" placeholder="Enter brand" />
            </>
          )}

          {activeTab === "additional" && (
            <>
              <div className="sm:col-span-2">
                <Textarea
                label="Details"
                  className="w-full border rounded-lg p-2 text-sm"
                  rows={3}
                />
              </div>
              <Input label="Custom Field 1" placeholder="Enter custom field 1" />
              <Input label="Custom Field 2" placeholder="Enter custom field 2" />
              <div>
                <label className="block text-md text-bold  mb-1">
                  Product Image
                </label>
                <Image
                  src={"/cent.jpg"}
                  alt="product"
                  className="rounded-lg border p-1"
                  width={150}
                  height={150}
                />
              </div>
            </>
          )}
        </div>
      </div>

      {/* 🔹 Table Section */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-4">
          Product Packaging Details
        </h2>
        <Table
          columns={columns}
          rows={rows}
          rowsPerPage={10}
          showPagination
          isFilter={false}
          loading={false}
        />
      </div>
    </div>
  );
}
