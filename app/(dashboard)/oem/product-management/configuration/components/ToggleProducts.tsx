"use client"
import { useState } from "react";
import BrandDetails from "./BrandDetails";

export default function LeadTabs() {
  const tabs = [
    { label: "Brand Details", content: <><BrandDetails /></> },
    { label: "Category", content: <></> },
    { label: "Sub-category", content:  <></> },
    { label: "Pack Units", content: <></> },
  ];

  const [active, setActive] = useState(tabs[0].label);

  return (
    <div className="w-full">
      {/* Tabs */}
      <div className="flex rounded-full bg-white gap-4">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            onClick={() => setActive(tab.label)}
            className={`px-4 py-2 text-sm cursor-pointer font-medium rounded-full transition-colors
              ${
                active === tab.label
                  ? "bg-[#5D6F9E] text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="mt-6">
        {tabs.find((tab) => tab.label === active)?.content}
      </div>
    </div>
  );
}
