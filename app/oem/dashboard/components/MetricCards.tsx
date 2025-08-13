"use client";
import React from "react";
import {
  Users,
  RefreshCw,
  ShoppingCart,
  Store,
  CreditCard
} from "lucide-react";
import { MetricCardProps } from "../types/dashboardTypes";

const metrics: MetricCardProps[] = [
  {
    title: "Active Distributors",
    value: "23887",
    icon: Users,
    bgColor: "bg-gradient-to-br from-[rgba(255,222,223,0.5)] to-[rgba(255,222,223,0.05)]",
    iconColor: "text-pink-600"
  },
  {
    title: "Distributor Transactions",
    value: "22191",
    icon: RefreshCw,
    bgColor: "bg-gradient-to-br from-[rgba(255,247,222,0.5)] to-[rgba(255,247,222,0.05)]",
    iconColor: "text-yellow-600"
  },
  {
    title: "MTD - Secondary Sales",
    value: "619982",
    icon: ShoppingCart,
    bgColor: "bg-gradient-to-br from-[rgba(224,231,255,0.5)] to-[rgba(224,231,255,0.05)]",
    iconColor: "text-indigo-600"
  },
  {
    title: "MTD EC - No. of Retailers",
    value: "5881",
    icon: Store,
    bgColor: "bg-gradient-to-br from-[rgba(220,252,231,0.5)] to-[rgba(220,252,231,0.05)]",
    iconColor: "text-green-600"
  },
  {
    title: "MTD EC - Primary",
    value: "5881",
    icon: CreditCard,
    bgColor: "bg-gradient-to-br from-[rgba(243,244,246,0.5)] to-[rgba(243,244,246,0.05)]",
    iconColor: "text-gray-600"
  }
];

export default function MetricCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      {metrics.map((m, i) => {
        const Icon = m.icon;
        return (
          <div
            key={i}
            className={`relative rounded-2xl p-6 border-2 ${m.bgColor}`}
          >
            <div className={`absolute top-4 right-4 ${m.iconColor}`}>
              <Icon className="w-6 h-6" />
            </div>
            <p className="text-sm font-medium text-gray-700">{m.title}</p>
            <p className="mt-1 text-3xl font-extrabold text-gray-900">{m.value}</p>
          </div>
        );
      })}
    </div>
  );
}


// "use client";
// import React from "react";
// import { Users, RefreshCw, ShoppingCart, Store, Building } from "lucide-react";
// import { MetricCardProps } from "../types/dashboardTypes";

// const MetricCard: React.FC<MetricCardProps> = ({ title, value, icon: Icon, bgColor, iconColor }) => (
//   <div className={`${bgColor} rounded-lg p-4 flex items-center justify-between`}>
//     <div>
//       <p className="text-sm text-gray-600 mb-1">{title}</p>
//       <p className="text-xl font-bold text-gray-800">{value}</p>
//     </div>
//     <Icon className={`w-6 h-6 ${iconColor}`} />
//   </div>
// );

// const MetricCards: React.FC = () => {
//   const metrics: MetricCardProps[] = [
//     { title: "Active Distributors",        value: "23887",  icon: Users,        bgColor: "bg-pink-50",   iconColor: "text-pink-500" },
//     { title: "Distributor Transactions",   value: "22191",  icon: RefreshCw,    bgColor: "bg-yellow-50", iconColor: "text-yellow-500" },
//     { title: "MTD - Secondary Sales",      value: "619982", icon: ShoppingCart,bgColor: "bg-blue-50",   iconColor: "text-blue-500" },
//     { title: "MTD EC - No. of Retailers",  value: "5881",   icon: Store,        bgColor: "bg-green-50",  iconColor: "text-green-500" },
//     { title: "MTD EC - Primary",           value: "5881",   icon: Building,     bgColor: "bg-gray-50",   iconColor: "text-gray-500" },
//   ];

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
//       {metrics.map((m, i) => <MetricCard key={i} {...m} />)}
//     </div>
//   );
// };

// export default MetricCards;
