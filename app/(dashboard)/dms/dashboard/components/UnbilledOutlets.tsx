"use client";
import React from "react";

const UnbilledOutlets: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-medium text-gray-800 mb-4">Unbilled Outlets</h3>

      <div className="space-y-4">
        <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
          <div>
            <p className="text-sm text-gray-600">Last Month</p>
            <p className="text-2xl font-bold text-gray-800">20</p>
            <p className="text-xs text-gray-500">Outlets</p>
          </div>
          <div className="text-sm text-gray-800">
            <p>Average (P3M): <span className="font-semibold">40</span></p>
            <p>Sales Impact: <span className="font-semibold">30%</span></p>
          </div>
        </div>

        <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
          <div>
            <p className="text-sm text-gray-600">Current Month</p>
            <p className="text-2xl font-bold text-gray-800">11</p>
            <p className="text-xs text-gray-500">Outlets</p>
          </div>
          <div className="text-sm text-gray-800">
            <p>Average (P3M): <span className="font-semibold">30</span></p>
            <p>Sales Impact: <span className="font-semibold">20%</span></p>
          </div>
        </div>

        <div className="text-green-600 text-center text-sm">
          ↓ 45% from last month
        </div>
      </div>
    </div>
  );
};

export default UnbilledOutlets;
