"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function OTPForm() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(130);
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((t) => Math.max(t - 1, 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const maskEmail = (mail: string) => {
    const [name, domain] = mail.split("@");
    if (!name || !domain) return mail;
    return `${name.slice(0, 2)}${"*".repeat(name.length - 2)}@${domain}`;
  };

  const handleChange = (val: string, i: number) => {
    if (/^[0-9]?$/.test(val)) {
      const copy = [...otp];
      copy[i] = val;
      setOtp(copy);
      if (val && i < otp.length - 1) {
        document.getElementById(`otp-${i + 1}`)?.focus();
      }
    }
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Verifying OTP: " + otp.join(""));
  };

  return (
    <>
      <p className="text-sm text-gray-600 mb-4 text-center">
        We've sent an OTP to <strong>{maskEmail(email)}</strong>
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
              className="w-14 h-14 border border-gray-300 rounded-lg text-center text-xl focus:ring focus:ring-blue-400"
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
    </>
  );
}
