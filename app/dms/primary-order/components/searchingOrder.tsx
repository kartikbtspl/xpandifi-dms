"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { FiCalendar } from "react-icons/fi";
import "react-datepicker/dist/react-datepicker.css";
import Button from "../../../../components/common/ui/Button";

export default function SearchingOrder() {
  const data = [
    { title: "Team Spring" },
    { title: "Order no" },
    { title: "Date" },
  ];

  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());

  return (
    <div className="flex gap-8 bg-gray-50 p-6 rounded-xl items-end">
      {data.map((item, index) => (
        <div key={index} className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">
            {item.title}
          </label>

          {item.title === "Date" ? (
            <div className="relative w-[400px] ">
              <DatePicker
                selected={startDate}
                onChange={(dates) => {
                  const [start, end] = dates as [Date, Date];
                  setStartDate(start);
                  setEndDate(end);
                }}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                className="w-[400px]  px-10 py-2 border border-gray-300 rounded-full text-sm text-gray-800 cursor-pointer"
                placeholderText="Select date range"
              />
              <FiCalendar
                className="absolute left-3 top-3 text-gray-500 pointer-events-none"
                size={18}
              />
            </div>
          ) : (
            <select className="px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 w-[200px]">
              <option>Select {item.title}</option>
            </select>
          )}
        </div>
      ))}

      <Button rounded="full">Submit</Button>
      <button className="text-sm text-blue-700 font-medium underline mb-3">
        Reset Filters
      </button>
    </div>
  );
}
