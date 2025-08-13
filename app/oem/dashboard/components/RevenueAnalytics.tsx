// components/RevenueAnalytics.tsx
"use client";
import React, { useState } from "react";
import {
  ComposedChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine
} from "recharts";

export interface RevenueData {
  month: string;
  sales: number;
  expenses: number;
  target: number;
}

const data: RevenueData[] = [
  { month: "Jan", sales: 15000, expenses: 38500, target: 45000 },
  { month: "Feb", sales: 45500, expenses: 42000, target: 46000 },
  { month: "Mar", sales: 43000, expenses: 41200, target: 44500 },
  { month: "Apr", sales: 47200, expenses: 44800, target: 48000 },
  { month: "May", sales: 46100, expenses: 45500, target: 47500 },
  { month: "Jun", sales: 49300, expenses: 47000, target: 50000 },
  { month: "Jul", sales: 52000, expenses: 50400, target: 52500 },
  { month: "Aug", sales: 50800, expenses: 49200, target: 51000 },
  { month: "Sep", sales: 53600, expenses: 51800, target: 54000 },
  { month: "Oct", sales: 51200, expenses: 49500, target: 52000 },
  { month: "Nov", sales: 54700, expenses: 53000, target: 55000 },
  { month: "Dec", sales: 56300, expenses: 55100, target: 57000 },
];


export default function RevenueAnalytics() {
  const [zone, setZone] = useState("All Zones");
  const [period, setPeriod] = useState("Month");

  const formatRupee = (n: number) =>
    "₹" + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const tooltipFormatter = (value: number, name: string) =>
    [formatRupee(value), name === "sales" ? "Sales" : name === "expenses" ? "Sales Expenses" : "Sales Target"];

  return (
    <div className="bg-white rounded-2xl p-6 mb-8">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Revenue - Expenses Analytics</h3>
        <div className="flex items-center space-x-4">
          <select
            value={zone}
            onChange={e => setZone(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-1 text-sm"
          >
            <option>All Zones</option>
            <option>North Zone</option>
            <option>South Zone</option>
            <option>East Zone</option>
            <option>West Zone</option>
          </select>
          <div className="flex bg-gray-100 rounded-full overflow-hidden">
            {["Year","Quarter","Month","Week","Day"].map(p => (
              <button
                key={p}
                onClick={()=>setPeriod(p)}
                className={`px-4 py-2 text-sm ${
                  period===p 
                    ? "bg-blue-600 text-white" 
                    : "text-gray-600 hover:bg-gray-200"
                }`}
              >{p}</button>
            ))}
          </div>
        </div>
      </div>

      <div className="text-2xl font-bold text-gray-900 mb-2">{formatRupee(60000)}</div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data}>
            <defs>
              <linearGradient id="salesGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10b981" stopOpacity={0.3}/>
                <stop offset="100%" stopColor="#10b981" stopOpacity={0.05}/>
              </linearGradient>
              <linearGradient id="expGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.3}/>
                <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.05}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb"/>
            <XAxis dataKey="month" tick={{ fill: '#475569' }} axisLine={false} tickLine={false}/>
            <YAxis
              tickFormatter={formatRupee}
              tick={{ fill: '#475569' }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip formatter={tooltipFormatter}/>
            <Legend verticalAlign="bottom" height={36} iconType="circle"/>
            
            {/* Sales Area with straight line */}
            <Area
              type="linear"
              dataKey="sales"
              stroke="#10b981"
              strokeWidth={2}
              fill="url(#salesGrad)"
              name="Sales"
            />
            {/* Sales dots */}
            <Line
              type="linear"
              dataKey="sales"
              stroke="transparent"
              dot={{ stroke:'#10b981', fill:'#10b981', r:4 }}
              activeDot={{ stroke:'#10b981', fill:'#fff', r:6 }}
            />
            
            {/* Expenses Area with straight line */}
            <Area
              type="linear"
              dataKey="expenses"
              stroke="#3b82f6"
              strokeWidth={2}
              fill="url(#expGrad)"
              name="Sales Expenses"
            />
            {/* Expenses dots */}
            <Line
              type="linear"
              dataKey="expenses"
              stroke="transparent"
              dot={{ stroke:'#3b82f6', fill:'#3b82f6', r:4 }}
              activeDot={{ stroke:'#3b82f6', fill:'#fff', r:6 }}
            />
            
            {/* Target Line */}
            <Line
              type="linear"
              dataKey="target"
              stroke="#ef4444"
              strokeWidth={2}
              dot={{ stroke:'#ef4444', fill:'#fff', r:4 }}
              activeDot={{ stroke:'#ef4444', fill:'#fff', r:6 }}
              name="Sales Target"
            />
            
            {/* Current month marker */}
            <ReferenceLine
              x="Aug"
              stroke="#CBD5E1"
              strokeDasharray="3 3"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}




// // components/RevenueAnalytics.tsx
// "use client";
// import React, { useState } from "react";
// import {
//   ComposedChart,
//   Area,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
//   ReferenceLine,
//   DotProps
// } from "recharts";

// export interface RevenueData {
//   month: string;
//   sales: number;
//   expenses: number;
//   target: number;
// }

// const data: RevenueData[] = [
//   { month: "Jan", sales: 8,  expenses: 7.5, target: 12 },
//   { month: "Feb", sales: 10, expenses: 9.5, target: 12 },
//   { month: "Mar", sales: 9,  expenses: 8,   target: 12 },
//   { month: "Apr", sales: 10, expenses: 9,   target: 12 },
//   { month: "May", sales: 9,  expenses: 8.5, target: 12 },
//   { month: "Jun", sales: 11, expenses: 10,  target: 12 },
//   { month: "Jul", sales: 13, expenses: 12,  target: 12 },
//   { month: "Aug", sales: 14, expenses: 13,  target: 12 },
//   { month: "Sep", sales: 15, expenses: 14,  target: 12 },
//   { month: "Oct", sales: 14, expenses: 13.5,target: 12 },
//   { month: "Nov", sales: 13, expenses: 12.5,target: 12 },
//   { month: "Dec", sales: 16, expenses: 15,  target: 12 }
// ];

// export default function RevenueAnalytics() {
//   const [zone, setZone] = useState("All Zones");
//   const [period, setPeriod] = useState("Month");

//   const tickFormatter = (v: number) => `₹${v}L`;
//   const tooltipFormatter = (value: number, name: string) =>
//     [`₹${value}L`, name === "sales" ? "Sales" : name === "expenses" ? "Sales Expenses" : "Sales Target"];

//   return (
//     <div className="bg-white rounded-2xl p-6 mb-8">
//       <div className="flex justify-between items-center mb-4">
//         <h3 className="text-lg font-semibold text-gray-800">Revenue - Expenses Analytics</h3>
//         <div className="flex items-center space-x-4">
//           <select
//             value={zone}
//             onChange={e => setZone(e.target.value)}
//             className="border border-gray-300 rounded-lg px-3 py-1 text-sm"
//           >
//             <option>All Zones</option>
//             <option>North Zone</option>
//             <option>South Zone</option>
//             <option>East Zone</option>
//             <option>West Zone</option>
//           </select>
//           <div className="flex bg-gray-100 rounded-full overflow-hidden">
//             {["Year","Quarter","Month","Week","Day"].map(p => (
//               <button
//                 key={p}
//                 onClick={()=>setPeriod(p)}
//                 className={`px-4 py-2 text-sm ${
//                   period===p 
//                     ? "bg-blue-600 text-white" 
//                     : "text-gray-600 hover:bg-gray-200"
//                 }`}
//               >{p}</button>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className="text-2xl font-bold text-gray-900 mb-2">₹ 45455452</div>

//       <div className="h-80">
//         <ResponsiveContainer width="100%" height="100%">
//           <ComposedChart data={data}>
//             <defs>
//               <linearGradient id="salesGrad" x1="0" y1="0" x2="0" y2="1">
//                 <stop offset="0%" stopColor="#10b981" stopOpacity={0.3}/>
//                 <stop offset="100%" stopColor="#10b981" stopOpacity={0.05}/>
//               </linearGradient>
//               <linearGradient id="expGrad" x1="0" y1="0" x2="0" y2="1">
//                 <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.3}/>
//                 <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.05}/>
//               </linearGradient>
//             </defs>
//             <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb"/>
//             <XAxis dataKey="month" tick={{ fill: '#475569' }} axisLine={false} tickLine={false}/>
//             <YAxis tickFormatter={tickFormatter} tick={{ fill: '#475569' }} axisLine={false} tickLine={false}/>
//             <Tooltip formatter={tooltipFormatter}/>
//             <Legend verticalAlign="bottom" height={36} iconType="circle"/>
//             <Area
//               type="monotone"
//               dataKey="sales"
//               stroke="#10b981"
//               strokeWidth={2}
//               fill="url(#salesGrad)"
//               name="Sales"
//             />
//             <Area
//               type="monotone"
//               dataKey="expenses"
//               stroke="#3b82f6"
//               strokeWidth={2}
//               fill="url(#expGrad)"
//               name="Sales Expenses"
//             />
//             <Line
//               type="monotone"
//               dataKey="target"
//               stroke="#ef4444"
//               strokeWidth={2}
//               dot={{ stroke:'#ef4444', fill:'#fff', r:4 }}
//               name="Sales Target"
//             />
//             <ReferenceLine
//               x="Aug"
//               stroke="#CBD5E1"
//               strokeDasharray="3 3"
//             />
//             {/* Highlight Aug dots */}
//             {data.map((d, idx) => idx===7 && (
//               <circle
//                 key="aug-dot"
//                 cx={0}
//                 cy={0}
//                 r={6}
//                 fill="#fff"
//                 stroke="#475569"
//                 strokeWidth={2}
//                 label="Aug"
//               />
//             ))}
//           </ComposedChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// }



// "use client";
// import React, { useState } from "react";
// import {
//   AreaChart, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
// } from "recharts";
// import { RevenueData } from "../types/dashboardTypes";

// const data: RevenueData[] = [
//   { month:"Jan", sales:4545450, expenses:4545400, target:4545480 },
//   { month:"Feb", sales:4545460, expenses:4545420, target:4545500 },
//   { month:"Mar", sales:4545470, expenses:4545410, target:4545490 },
//   { month:"Apr", sales:4545480, expenses:4545430, target:4545520 },
//   { month:"May", sales:4545490, expenses:4545440, target:4545510 },
//   { month:"Jun", sales:4545500, expenses:4545450, target:4545530 },
//   { month:"Jul", sales:4545520, expenses:4545460, target:4545540 },
//   { month:"Aug", sales:4545540, expenses:4545480, target:4545560 },
//   { month:"Sep", sales:4545530, expenses:4545470, target:4545550 },
//   { month:"Oct", sales:4545520, expenses:4545460, target:4545540 },
//   { month:"Nov", sales:4545510, expenses:4545450, target:4545530 },
//   { month:"Dec", sales:4545500, expenses:4545440, target:4545520 },
// ];

// export default function RevenueAnalytics() {
//   const [period, setPeriod] = useState("Month");
//   const [zone, setZone]     = useState("All Zones");

//   const formatYAxis = (n: number) => `₹${(n/100000).toFixed(0)}L`;

//   const tooltipFormatter = (value: number, name: string) => [`₹${(value/100000).toFixed(1)}L`, name];

//   return (
//     <div className="bg-white rounded-lg p-6 mb-8">
//       <div className="flex justify-between mb-4">
//         <div>
//           <h3 className="text-lg font-semibold text-gray-800">Revenue - Expenses Analytics</h3>
//           <p className="text-2xl font-bold text-gray-800 mt-2">₹ 45455452</p>
//         </div>
//         <div className="flex items-center space-x-4">
//           <select
//             value={zone}
//             onChange={e => setZone(e.target.value)}
//             className="border border-gray-300 rounded px-2 py-1 text-sm"
//           >
//             <option>All Zones</option>
//             <option>North Zone</option>
//             <option>South Zone</option>
//             <option>East Zone</option>
//             <option>West Zone</option>
//           </select>
//           <div className="flex space-x-2 bg-gray-100 rounded-lg overflow-hidden">
//             {["Year","Quarter","Month","Week","Day"].map(p => (
//               <button
//                 key={p}
//                 onClick={()=>setPeriod(p)}
//                 className={`px-3 py-1 text-sm ${
//                   period===p ? "bg-blue-500 text-white" : "text-gray-600 hover:bg-gray-200"
//                 }`}
//               >
//                 {p}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//       <div className="h-80">
//         <ResponsiveContainer width="100%" height="100%">
//           <AreaChart data={data}>
//             <defs>
//               <linearGradient id="salesGrad" x1="0" y1="0" x2="0" y2="1">
//                 <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
//                 <stop offset="95%" stopColor="#10b981" stopOpacity={0.1}/>
//               </linearGradient>
//               <linearGradient id="expGrad" x1="0" y1="0" x2="0" y2="1">
//                 <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
//                 <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
//               </linearGradient>
//             </defs>
//             <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
//             <XAxis dataKey="month" axisLine={false} tickLine={false} />
//             <YAxis tickFormatter={formatYAxis} axisLine={false} tickLine={false}/>
//             <Tooltip formatter={tooltipFormatter}/>
//             <Legend verticalAlign="bottom" height={36}/>
//             <Area   type="monotone" dataKey="sales"    stroke="#10b981" strokeWidth={2} fill="url(#salesGrad)" name="Sales" />
//             <Area   type="monotone" dataKey="expenses" stroke="#3b82f6" strokeWidth={2} fill="url(#expGrad)"  name="Sales Expenses"/>
//             <Line   type="monotone" dataKey="target"   stroke="#ef4444" strokeWidth={2} dot={{r:4}} name="Sales Target"/>
//           </AreaChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// }
