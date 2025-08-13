"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function ForgotPage() {
  const [email, setEmail] = useState("");
  const router = useRouter(); // ✅ initialize router

  const handle = (e: FormEvent) => {
    e.preventDefault();
    router.push(`/otp-screen?email=${encodeURIComponent(email)}`);

  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Section */}
      <div className="bg-gradient-to-br from-[#445E94] to-[#5F7C95] text-white w-[35%] p-10 flex flex-col justify-center">
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
      <div className="flex flex-col w-[65%] justify-center items-center px-8 py-12">
        <img src="/xpandifi-logo.svg" alt="Logo" className="h-12 mb-4" />
        <h2 className="text-2xl font-semibold text-gray-800">
          Forgot Your Password?
        </h2>
        <p className="mb-8 text-center">
          Enter your email to receive a password reset link.
        </p>

        <form
          onSubmit={handle}
          className="w-full max-w-md space-y-4"
          noValidate
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-[#445E94] text-white rounded-full hover:bg-[#3b4f7a] transition"
          >
            Send Reset Link
          </button>
        </form>

        <p className="text-sm text-gray-500 mt-8">
          Remember your password?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Back to Login
          </a>
        </p>
      </div>
    </div>
  );
}

