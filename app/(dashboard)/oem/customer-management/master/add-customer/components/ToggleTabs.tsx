"use client"
import { useState } from "react";
import AddMoreContacts from "./AddMoreContacts";
import GeoTagLocation from "./GeoTagLocation";

export default function ToggleTabs() {
  const tabs = [
    { label: "Add More Contact", content: <AddMoreContacts /> },
    { label: "Geo Tag Location", content: <GeoTagLocation /> },
  ];

  const [active, setActive] = useState(tabs[0].label);

  return (
    <>
    <div className="w-full bg-white flex rounded-full">
      {/* Toggle Buttons */}
      <div className=" rounded-full w-full">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            onClick={() => setActive(tab.label)}
            className={` px-4 py-2 text-sm font-medium rounded-full transition-colors
              ${
                active === tab.label
                  ? "bg-[#5D6F9E] text-white"
                  : "text-gray-600 hover:text-[#5D6F9E]"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      
    </div>
    <div className="mt-6">
        {tabs.find((tab) => tab.label === active)?.content}
    </div>
    </>
  );
}
