"use client"
import { useState } from "react";
import StandardMobile from "./StandardMobile";
import StartUpMobile from "./StartUpMobile";
import PlatinumMobile from "./PlatinumMobile";
import OthersMobile from "./OthersMobile";
import AddOnMobile from "./AddOnMobile";

export default function WebPermissionTabs() {
  const tabs = [
    { label: "Standard", content: <><StandardMobile /></> },
    { label: "StartUp", content: <><StartUpMobile /></> },
    { label: "Platinum", content: <><PlatinumMobile /></> },
    { label: "Others", content: <><OthersMobile /></> },
    { label: "Add On", content: <><AddOnMobile /></> },
  ];

  const [active, setActive] = useState(tabs[0].label);

  return (
    <div className="w-full flex flex-col min-h-150">
      {/* Tabs */}
      <div className="flex rounded-full bg-white gap-2 shadow-sm mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            onClick={() => setActive(tab.label)}
            className={`px-4 py-2 text-sm cursor-pointer font-medium rounded-full transition-colors
              ${active === tab.label
                ? "bg-[#5D6F9E] text-white"
                : "text-gray-600 hover:bg-gray-100"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {/* Content */}
      <div className="">
        {tabs.find((tab) => tab.label === active)?.content}
      </div>

    </div>
  );
}
