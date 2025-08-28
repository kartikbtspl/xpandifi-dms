// app/(auth)/layout.tsx
import React from "react";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Section */}
      <div className="bg-gradient-to-br from-[#445E94] to-[#5F7C95] text-white w-full md:w-[35%] p-10 flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-6">
          Expand Fast
          <br />
          Sell Globally
        </h1>
        <div className="space-y-10">
          <div className="flex items-start space-x-3">
            <div className="text-2xl">📦</div>
            <div>
              <p className="font-bold">Seamless Selling</p>
              <p className="text-sm">
                Effortlessly expand to European & UK marketplaces.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="text-2xl">🎯</div>
            <div>
              <p className="font-bold">Smart Logistics & Analytics</p>
              <p className="text-sm">
                Optimize inventory, track orders & gain powerful insights.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="text-2xl">💰</div>
            <div>
              <p className="font-bold">Cross-Border Made Easy</p>
              <p className="text-sm">
                Simplified compliance, invoicing & fulfillment.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col w-full md:w-[65%] justify-center items-center px-8 py-12">
        {children}
      </div>
    </div>
  );
}
