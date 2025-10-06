"use client";

import { useState } from "react";
import WorkPlaceDetailsForm from "./WorkPlaceDetailsForm";
import Button from "@/components/common/ui/Button";
import LocationForm from "./LocationForm";
import AddImagesForm from "./AddImagesForm";
import TerritoryDetails from "./TerritoryDetails";

export default function AddUserTabs() {
  const tabs = [
    { label: "Add Images", content: <AddImagesForm onSave={(data) => console.log("Images:", data)} /> },
    { label: "Geo Tag Location", content: <LocationForm onSave={(data) => console.log("Location:", data)} /> },
    { label: "Work Place Details", content: <WorkPlaceDetailsForm /> },
    { label: "Territory Details", content: <TerritoryDetails /> },
  ];

  const [active, setActive] = useState(tabs[0].label);

  return (
    <div className="w-full flex flex-col h-150 gap-4">
      <div className="flex rounded-full bg-white gap-2 shadow-sm">
        {tabs.map(tab => (
          <button
            key={tab.label}
            onClick={() => setActive(tab.label)}
            className={`px-4 py-2 text-sm cursor-pointer font-medium rounded-full transition-colors ${
              active === tab.label ? "bg-[#5D6F9E] text-white" : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>
        {tabs.find(tab => tab.label === active)?.content}
        <div className="flex mt-4 gap-4">
          <div className="flex justify-end gap-3 w-2/3 mr-10">
            <Button className="cursor-pointer" variant="outline">Cancel</Button>
            <Button className="cursor-pointer">Save</Button>
          </div>
          <div className="flex justify-end w-2/5">
            <Button variant="outline">Send Credentials</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
