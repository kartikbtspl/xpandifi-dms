"use client";
import Button from "@/components/common/ui/Button";
import Input from "@/components/common/ui/Input";
import React, { useState } from "react";

function EmailIdContent() {
  const [formData, setFormData] = useState({
    email: "",
    prefix: "",
    postfix: "",
    start: "",
    end: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = { ...formData }; // ✅ collected data
    console.log("Submitted Data:", data);
    // 👉 you can now send `data` to API or save it
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm ">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Email */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">Email:</label>
          <Input
            placeholder="Enter email"
            size="sm"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
        </div>

        {/* Prefix */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">Prefix:</label>
          <Input
            placeholder="Enter prefix"
            size="sm"
            value={formData.prefix}
            onChange={(e) => handleChange("prefix", e.target.value)}
          />
        </div>

        {/* Postfix */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">Postfix:</label>
          <Input
            placeholder="Enter postfix"
            size="sm"
            value={formData.postfix}
            onChange={(e) => handleChange("postfix", e.target.value)}
          />
        </div>

        {/* Start */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">Start:</label>
          <Input
            placeholder="Start from"
            size="sm"
            value={formData.start}
            onChange={(e) => handleChange("start", e.target.value)}
          />
        </div>

        {/* End */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">End:</label>
          <Input
            placeholder="End till"
            size="sm"
            value={formData.end}
            onChange={(e) => handleChange("end", e.target.value)}
          />
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
}

export default EmailIdContent;
