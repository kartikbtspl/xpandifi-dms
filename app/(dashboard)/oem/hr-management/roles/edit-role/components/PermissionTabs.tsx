"use client"
import { Suspense, useState } from "react";
import Note from "./Note";
import WebPermissions from "./web-permission/page";

export default function PermissionTabs() {
  const tabs = [
    { label: "Web Permissions", content: <><WebPermissions /></> },
    { label: "Mobile Permissions", content: <></> },
    { label: "Expense Configuration", content: <></> },
    { label: "Journey Type", content: <></> },
  ];

  const [active, setActive] = useState(tabs[0].label);

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Tabs */}
      <div className="flex rounded-full bg-white gap-2 shadow-sm">
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
      <Suspense fallback={<div className="p-6 text-gray-500">Loading...</div>}>
        <Note />
      </Suspense>
      {/* Content */}
      <div className="">
        {tabs.find((tab) => tab.label === active)?.content}
      </div>
    </div>
  );
}
