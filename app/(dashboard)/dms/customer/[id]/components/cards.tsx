import React from "react";

interface CardsProps {
  title: string;
  icon: React.ReactNode;
  mtd: string;
  ytd: string;
}

export default function Cards({ title, icon, mtd, ytd }: CardsProps) {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-col justify-between min-h-[140px]">
      {/* Icon & Title */}
      <div className="flex items-center gap-2 mb-4">
        <div className="bg-blue-100 rounded-full p-2 text-blue-600">{icon}</div>
        <h3 className="font-semibold text-sm text-gray-800">{title}</h3>
      </div>

      {/* MTD and YTD */}
      <div className="flex justify-between text-xs text-gray-500">
        <div>
          <p>MTD</p>
          <p className="text-lg font-bold text-black">{mtd}</p>
        </div>
        <div>
          <p>YTD</p>
          <p className="text-lg font-bold text-black">{ytd}</p>
        </div>
      </div>
    </div>
  );
}
