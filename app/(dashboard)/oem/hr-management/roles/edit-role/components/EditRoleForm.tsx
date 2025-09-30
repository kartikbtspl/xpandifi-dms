"use client";
import React, { useState } from "react";
import Input from "@/components/common/ui/Input";
import Dropdown from "@/components/common/ui/Dropdown";
import Button from "@/components/common/ui/Button";

const EditRoleForm = () => {
  const [form, setForm] = useState({
    roleName: "",
    description: "",
    status: "Active",
    profile: "View",
    city: "",
  });

  const statusOptions = [
    { label: "Active", value: "Active" },
    { label: "Archive", value: "Archive" },
  ];
  const profileOptions = [
    { label: "View", value: "View" },
    { label: "Edit", value: "Edit" },
  ];
  const cityOptions = [
    { label: "Mumbai", value: "Mumbai" },
    { label: "Delhi", value: "Delhi" },
    { label: "Bangalore", value: "Bangalore" },
    { label: "Chennai", value: "Chennai" },
  ];

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleReset = () => {
    setForm({
      roleName: "",
      description: "",
      status: "Active",
      profile: "View",
      city: "",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted:", form);
    // Your save logic
  };

  return (
    <form className="bg-white p-6 rounded-xl shadow-sm w-full" onSubmit={handleSubmit}>
      <div className="flex gap-4 mb-5">
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">Role Name:</label>
          <Input
            value={form.roleName}
            onChange={(e) => handleChange("roleName", e.target.value)}
          />
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">Description</label>
          <Input
            value={form.description}
            onChange={(e) => handleChange("description", e.target.value)}
          />
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">Status</label>
          <Dropdown
            value={form.status}
            options={statusOptions}
            onChange={(val) => handleChange("status", val)}
            placeholder="Active"
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div>
          <label className="block text-sm font-medium mb-1">Profile</label>
          <Dropdown
            value={form.profile}
            options={profileOptions}
            onChange={(val) => handleChange("profile", val)}
            placeholder="View"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">City:</label>
          <Dropdown
            value={form.city}
            options={cityOptions}
            onChange={(val) => handleChange("city", val)}
            placeholder="--Select Status--"
          />
        </div>
      </div>
      <div className="flex flex-1 items-end justify-end gap-4">
          <Button type="button" variant="outline" onClick={handleReset}>
            Reset
          </Button>
          <Button type="submit" className="bg-[#445E94] text-white px-5">
            Submit
          </Button>
        </div>
    </form>
  );
};

export default EditRoleForm;
