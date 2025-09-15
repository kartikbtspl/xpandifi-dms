"use client";
import { useState } from "react";

export default function StatusRadioGroup() {
  const [status, setStatus] = useState("source");

  return (
    <div className="w-full mx-auto p-4 px-6 bg-white rounded-lg shadow-sm">
      <label className="block text-gray-700 font-medium mb-3">Status</label>
      <div className="flex items-center gap-6">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="status"
            value="source"
            checked={status === "source"}
            onChange={(e) => setStatus(e.target.value)}
            className="text-blue-700 focus:ring-blue-700"
          />
          <span className="text-gray-700">Source</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="status"
            value="industry"
            checked={status === "industry"}
            onChange={(e) => setStatus(e.target.value)}
            className="text-blue-700 focus:ring-blue-700"
          />
          <span className="text-gray-700">Industry</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="status"
            value="type"
            checked={status === "type"}
            onChange={(e) => setStatus(e.target.value)}
            className="text-blue-700 focus:ring-blue-700"
          />
          <span className="text-gray-700">Type</span>
        </label>
      </div>
    </div>
  );
}
