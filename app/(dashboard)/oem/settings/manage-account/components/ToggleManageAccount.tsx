"use client"
import { useState } from "react";
import CompanyConfiguration from "./company-configuration/page";
import Circles from "./circles/page";
import Zones from "./zones/page";
import Divisions from "./divisions/page";
import Attendance from "./attendance/page";
import ShiftDetails from "./shift-details/page";
import ModeOfTravel from "./edit-mode-of-travel/page";

export default function ToggleManageAccount() {
  const tabs = [
    { label: "Company Configuration", content: <><CompanyConfiguration/></> },
    { label: "Circles", content: <><Circles /></> },
    { label: "Zones", content:  <><Zones /></> },
    { label: "Divisions", content: <><Divisions /></> },
    { label: "Attendance Location Setting", content: <><Attendance/></> },
    { label: "Shift Details", content: <><ShiftDetails /></> },
    { label: "Mode Of Travel", content: <><ModeOfTravel /></> },
  ];

  const [active, setActive] = useState(tabs[0].label);

  return (
    <div className="w-full">
      {/* Tabs */}
      <div className="flex rounded-full bg-white gap-4 p-1 ">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            onClick={() => setActive(tab.label)}
            className={`px-4 py-2 text-sm cursor-pointer font-medium rounded-full transition-colors
              ${
                active === tab.label
                  ? "bg-[#5D6F9E] text-white shadow-md"
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
