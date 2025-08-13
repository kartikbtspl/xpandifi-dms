"use client";
import React from "react";
import { TooltipPropsExtended } from "../types/dashboardTypes";

const CustomTooltip: React.FC<TooltipPropsExtended> = ({
  active,
  payload,
  label,
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-gray-200 rounded-lg shadow-lg text-xs">
        <p className="font-medium text-gray-800">{label}</p>
        <p className="text-sm font-semibold text-gray-900">
          {payload[0].value}
        </p>
      </div>
    );
  }
  return null;
};

export default CustomTooltip;
