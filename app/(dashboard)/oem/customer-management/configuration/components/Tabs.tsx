"use client"
import { useState } from "react";
import RequiredDocumentCol from "./RequiredDocumentCol";
import EmailIdContent from "./EmailIdContent";
import CustomerType from "./CustomerType";
import CustomerWiseDocs from "./CustomerWiseDocs";
import StoreType from "./StoreType";
import ClassType from "./ClassType";

export default function Tabs() {
  const tabs = [
    { label: "Required Document", content: <><RequiredDocumentCol /></> },
    { label: "Email & ID Range", content: <><EmailIdContent /></> },
    { label: "Customer Type", content: <><CustomerType /></> },
    { label: "Customer Wise Docs", content: <><CustomerWiseDocs /></> },
    { label: "Store Type", content: <><StoreType /></> },
    { label: "Class Type", content: <><ClassType /></> },
    { label: "Firm Type", content: <p>🏢 Manage firm types.</p> },
    { label: "Business Segment", content: <p>📊 Configure business segments.</p> },
  ];

  const [active, setActive] = useState(tabs[0].label);

  return (
    <div className="w-full">
      {/* Tabs */}
      <div className="flex justify-between rounded-full bg-white">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            onClick={() => setActive(tab.label)}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors
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
