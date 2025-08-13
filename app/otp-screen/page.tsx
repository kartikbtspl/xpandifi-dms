"use client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function VerifyOtpPage() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(130); // 2:10 in seconds
   const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";
  
  // Mask email (keep first 2 letters & domain, hide rest)
  const maskEmail = (mail: string) => {
    const [name, domain] = mail.split("@");
    if (!name || !domain) return mail;
    const visiblePart = name.slice(0, 2);
    return `${visiblePart}${"*".repeat(name.length - 2)}@${domain}`;
  };
  // Auto-decrease timer
  useState(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  });

  const handleChange = (value: string, index: number) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      // auto focus next
      if (value && index < otp.length - 1) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        if (nextInput) (nextInput as HTMLInputElement).focus();
      }
    }
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Verifying OTP: " + otp.join(""));
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
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Enter the code</h2>
        <p className="text-sm text-gray-600 mb-8 text-center">
          We've sent an OTP to <strong>{maskEmail(email)}</strong>
          <br />
          Please enter the code to verify your account.
        </p>

        <form onSubmit={handleVerify} className="flex flex-col items-center space-y-6">
          <div className="flex gap-3">
            {otp.map((digit, i) => (
              <input
                key={i}
                id={`otp-${i}`}
                type="text"
                value={digit}
                onChange={(e) => handleChange(e.target.value, i)}
                maxLength={1}
                className="w-14 h-14 border border-gray-300 rounded-lg text-center text-xl focus:outline-none focus:ring focus:ring-blue-400"
              />
            ))}
          </div>

          <div className="text-sm text-gray-500">
            Resend code{" "}
            {timer > 0
              ? `${String(Math.floor(timer / 60)).padStart(2, "0")}:${String(
                  timer % 60
                ).padStart(2, "0")}`
              : "Now"}
          </div>

          <button
            type="submit"
            className="w-64 py-3 bg-[#445E94] text-white rounded-full hover:bg-[#334b73] transition"
          >
            Verify Now
          </button>
        </form>
      </div>
    </div>
  );
}
