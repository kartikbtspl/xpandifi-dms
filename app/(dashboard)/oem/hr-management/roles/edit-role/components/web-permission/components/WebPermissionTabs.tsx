"use client"
import { useState } from "react";
import StartUp from "./StartUp";
import Standard from "./Standard";
import Others from "./Others"
import Platinum from "./Platinum";
import AddOn from "./AddOn";

export default function WebPermissionTabs() {
  const tabs = [
    { label: "StartUp", content: <><StartUp /></> },
    { label: "Standard", content: <><Standard/></> },
    { label: "To be archived", content:  <></> },
    { label: "Others", content: <><Others /></> },
    { label: "Platinum", content: <><Platinum /></> },
    { label: "Add On", content: <><AddOn /></> },
  ];

  const [active, setActive] = useState(tabs[0].label);

  return (
    <div className="w-full flex flex-col gap-4 min-h-150">
      {/* Tabs */}
      <div className="flex rounded-full bg-white gap-2 shadow-sm">
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
      <div className="">
        {tabs.find((tab) => tab.label === active)?.content}
      </div>
    </div>
  );
}
