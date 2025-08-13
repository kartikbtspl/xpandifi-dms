"use client";
import MetricCards from "./components/MetricCards";
import RevenueAnalytics from "./components/RevenueAnalytics";
import TradeTargetAchievement from "./components/TradeTargetAchievement";

export default function OemHome(){
  return (
     <div className="min-h-screen">
      <div className="max-w-7xl mx-auto space-y-6">
        <MetricCards />
        <RevenueAnalytics />
        <TradeTargetAchievement />
      </div>
    </div>
  )
}
