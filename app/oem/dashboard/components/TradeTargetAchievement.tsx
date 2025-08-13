"use client";
import React, { useState } from "react";
import {
  AreaChart, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";
import { TradeDataPoint } from "../types/dashboardTypes";

const data: TradeDataPoint[] = [
  { month:"Jan", target:50000,  achieved:45000 },
  { month:"Feb", target:60000,  achieved:55000 },
  { month:"Mar", target:70000,  achieved:65000 },
  { month:"Apr", target:80000,  achieved:75000 },
  { month:"May", target:90000,  achieved:85000 },
  { month:"Jun", target:100000, achieved:95000 },
  { month:"Jul", target:110000, achieved:105000},
  { month:"Aug", target:120000, achieved:115000},
  { month:"Sep", target:110000, achieved:100000},
  { month:"Oct", target:100000, achieved:90000 },
  { month:"Nov", target:90000,  achieved:80000 },
  { month:"Dec", target:120000, achieved:110000},
];

export default function TradeTargetAchievement() {
  const [tab, setTab] = useState("MTD");
  const tabs = ["MTD","LMTD","YTD"];

  const tooltipFormatter = (value: number, name: string) => [`₹${(value/1000).toFixed(0)}k`, name==="target"?"Target":"Achieved"];
  const yTick = (v: number) => `${(v/1000).toFixed(0)}k`;

  return (
    <div className="bg-white rounded-lg p-6">
      <div className="flex justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Trade Target/Achievement</h3>
          <div className="flex space-x-8">
            {tabs.map(t => (
              <button
                key={t}
                onClick={()=>setTab(t)}
                className={`pb-2 text-sm font-medium transition ${
                  tab===t
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >{t}</button>
            ))}
          </div>
        </div>
        <div className="text-right">
          <div className="mb-2">
            <p className="text-2xl font-bold text-gray-800">₹180K</p>
            <p className="text-sm text-green-600">+12.5% vs target</p>
          </div>
          <div>
            <span className="text-sm text-gray-600">Target Achievement</span>
            <p className="text-2xl font-bold text-blue-600">89%</p>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <span className="inline-block bg-blue-50 text-blue-800 text-sm px-3 py-1 rounded">West Zone</span>
        <p className="text-sm text-gray-600 mt-1">Target: ₹120k</p>
        <p className="text-sm text-gray-600">Achievement: ₹95k</p>
      </div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="achievedGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#93c5fd" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#93c5fd" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb"/>
            <XAxis dataKey="month" axisLine={false} tickLine={false}/>
            <YAxis tickFormatter={yTick} axisLine={false} tickLine={false}/>
            <Tooltip formatter={tooltipFormatter}/>
            <Area type="monotone" dataKey="achieved" stroke="#60a5fa" strokeWidth={2} fill="url(#achievedGrad)"/>
            <Line type="monotone" dataKey="target" stroke="#1e40af" strokeWidth={2} dot={{r:3}}/>
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
