"use client";
import { Users } from "lucide-react";

export default function TotalDistributers() {
  const stats = [
    {
      label: "Total Distributors",
      value: 16,
      color: "text-blue-600",
      bg: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      label: "Active",
      value: 16,
      color: "text-green-600",
      bg: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      label: "Archived",
      value: 0,
      color: "text-black",
      bg: "bg-gray-50",
      iconColor: "text-black",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className="flex items-center justify-between p-4 bg-white border rounded-2xl shadow-sm"
        >
          <div>
            <p className="text-sm text-gray-600">{stat.label}</p>
            <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
          </div>
          <div className={`p-2 rounded-lg ${stat.bg}`}>
            <Users className={`w-5 h-5 ${stat.iconColor}`} />
          </div>
        </div>
      ))}
    </div>
  );
}
