"use client"
import { useState } from "react";

export default function LeadTabs() {
  const tabs = [
    { label: "Show Archive Users", content: <></> },
    { label: "Multi Archive Users", content: <></> },
  ];

  const [active, setActive] = useState("");

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
