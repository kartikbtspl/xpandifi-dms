"use client";
import React, { useState } from "react";
import MetricCard from "./components/MetricCard";
import SecondarySalesInvoice from "./components/SecondarySalesInvoice";
import TargetVsAchievement from "./components/TargetVsAchievement";
import ManDaysProductivity from "./components/ManDaysProductivity";
import UnbilledOutlets from "./components/UnbilledOutlets";
import FillRate from "./components/FillRate";
import {
  TrendingUp,
  TrendingDown,
  User,
  Target,
  Wallet,
  IndianRupee,
} from "lucide-react";
import DashboardMetrics from "./components/DashboardMetrics";
import YtdSalesTrend from "./components/YtdSalesTrend";

const DashboardPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"MTD" | "LMTD" | "YTD">("MTD");

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header & Metrics */}
        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-1">Welcome,</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">John Smith</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <MetricCard
            title="Primary Sales Value"
            value="₹12.5M"
            change="+8% vs last month"
            changeType="positive"
            icon={IndianRupee}
            bgGradient="bg-gradient-to-br from-pink-50 via-pink-100 to-pink-50"
            iconColor="text-pink-500"
          />
          <MetricCard
            title="Secondary Sales Value"
            value="₹10.8M"
            change="+5% vs last month"
            changeType="positive"
            icon={TrendingUp}
            bgGradient="bg-gradient-to-br from-green-50 via-green-100 to-green-50"
            iconColor="text-green-500"
          />
          <MetricCard
            title="Retailer Count"
            value="1,247"
            change="-2% daily movement"
            changeType="negative"
            icon={User}
            bgGradient="bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-50"
            iconColor="text-yellow-500"
          />
          <MetricCard
            title="Scheme Utilisation"
            value="1,247"
            change="75% of budget"
            changeType="positive"
            icon={Target}
            bgGradient="bg-gradient-to-br from-indigo-50 via-indigo-100 to-indigo-50"
            iconColor="text-indigo-500"
          />
          <MetricCard
            title="Collection Value"
            value="₹9.2M"
            change="85% on-time"
            changeType="positive"
            icon={Wallet}
            bgGradient="bg-gradient-to-br from-purple-50 via-purple-100 to-purple-50"
            iconColor="text-purple-500"
          />
          </div>
        </div>

        {/* Secondary Sales Invoice & Target vs Achievement */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SecondarySalesInvoice
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <TargetVsAchievement />
        </div>

        {/* New Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <ManDaysProductivity />
          <UnbilledOutlets />
          <FillRate />
        </div>
        <div>
          <DashboardMetrics />
        </div>
        <div className="mx-auto space-y-6">
          <YtdSalesTrend />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
