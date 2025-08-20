// components/orderReceived/SalesFilters.tsx
import React, { useState } from "react";
import { FiSearch, FiCalendar } from "react-icons/fi";
import Button from "../../../../components/common/ui/Button";

const options = {
  Country: ["Select country", "Country A", "Country B"],
  State: ["Select state", "State A", "State B"],
  City: ["Select city", "City A", "City B"],
  "Sales Order Type": ["Select order", "Type A", "Type B"],
  Distributor: ["Select Distributor", "Dist A", "Dist B"],
  Route: ["Select route", "Route A", "Route B"],
  User: ["Select user", "User A", "User B"],
};

export const SalesFilters: React.FC = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      {/* SEARCH */}
      <div className="mb-6">
        <label className="block mb-1 text-gray-700 font-medium">
          Search Sales Person
        </label>
        <div className="relative">
          <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search sales person by name, phone number"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-12 border border-gray-300 rounded-full pl-12 pr-4 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
        </div>
      </div>

      {/* FILTERS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {Object.entries(options).map(([label, opts]) => (
          <div key={label} className="flex flex-col">
            <label className="mb-1 text-gray-700 font-medium">{label}</label>
            <select className="h-12 border border-gray-300 rounded-full px-4 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-200">
              {opts.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </div>
        ))}

        {/* Date Range picker */}
        <div className="flex flex-col lg:col-span-1">
          <label className="mb-1 text-gray-700 font-medium">Date Range</label>
          <div className="relative">
            <FiCalendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <button className="w-full h-12 text-left border border-gray-300 rounded-full pl-12 pr-4 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-200">
              Select date
            </button>
          </div>
        </div>
      </div>

      {/* ACTIONS */}
      <div className="flex justify-end items-center gap-4">
        <Button>
          Submit
        </Button>
        <button className="text-red-500 hover:underline">Reset</button>
      </div>
    </div>
  );
};
