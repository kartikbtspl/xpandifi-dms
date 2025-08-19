// app/otp-screen/page.tsx
import React, { Suspense } from "react";
import OTPForm from "./OTPForm";

export const metadata = { title: "Verify OTP" };

export default function VerifyOtpPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Section */}
      <div className="bg-gradient-to-br from-[#445E94] to-[#5F7C95] text-white w-[35%] p-10 flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-6">
          Expand Fast
          <br />
          Sell Globally
        </h1>
        <div className="space-y-10 text-white">
          <div className="flex items-start space-x-3">
            <div className="text-2xl">📦</div>
            <div>
              <p className="font-bold">Seamless Selling</p>
              <p className="text-sm">Effortlessly expand to European & UK marketplaces.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="text-2xl">🎯</div>
            <div>
              <p className="font-bold">Smart Logistics & Analytics</p>
              <p className="text-sm">Optimize inventory, track orders & gain powerful insights.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="text-2xl">💰</div>
            <div>
              <p className="font-bold">Cross-Border Made Easy</p>
              <p className="text-sm">Simplified compliance, invoicing & fulfillment.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col w-[65%] justify-center items-center px-8 py-12">
        <img src="/xpandifi-logo.svg" alt="Logo" className="h-12 mb-4" />
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Enter the code</h2>

        <Suspense fallback={<div className="text-center">Loading form…</div>}>
          <OTPForm />
        </Suspense>
      </div>
    </div>
  );
}
