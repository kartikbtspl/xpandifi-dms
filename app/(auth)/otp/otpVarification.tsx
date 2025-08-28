"use client";

import { useState, useEffect, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";

export default function OtpVerification() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const email = searchParams.get("email");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState(120);
  const [canResend, setCanResend] = useState(false);
  const [verified, setVerified] = useState(false);

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Mask email (e.g., "jo******@gmail.com")
  const maskEmail = (email: string | null) => {
    if (!email) return "";
    const [name, domain] = email.split("@");
    const visiblePart = name.slice(0, 2);
    const maskedPart = "*".repeat(Math.max(0, name.length - 2));
    return `${visiblePart}${maskedPart}@${domain}`;
  };

  // Timer countdown
  useEffect(() => {
    if (timeLeft > 0 && !verified) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft <= 0) {
      setCanResend(true);
    }
  }, [timeLeft, verified]);

  const handleChange = (value: string, index: number) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < otp.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }

      if (value && index === otp.length - 1) {
        const enteredOtp = newOtp.join("");
        if (enteredOtp.length === otp.length) {
          handleVerify(enteredOtp);
        }
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = (enteredOtp?: string) => {
    const finalOtp = enteredOtp || otp.join("");
    console.log("🔑 Verifying OTP:", finalOtp, "for email:", email);

    // Fake API success
    setVerified(true);

    setTimeout(() => {
      router.push(`/reset-password?email=${encodeURIComponent(email || "")}`);
    }, 2000); // redirect after 2s
  };

  const handleResend = () => {
    console.log("📩 Resending OTP to:", email);
    setTimeLeft(120);
    setCanResend(false);
    setOtp(["", "", "", ""]);
    inputRefs.current[0]?.focus();
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  if (verified) {
    return (
      <div className="flex flex-col justify-center items-center h-screen px-4">
        <Image
          src="/xpandifi-logo.svg"
          alt="Logo"
          className="mb-5"
          width={180}
          height={60}
        />
        <h2 className="text-2xl font-semibold text-green-600 mb-2">
          🎉 OTP Verified Successfully!
        </h2>
        <p className="text-gray-600">Redirecting you to reset password...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen px-4">
      <Image src="/xpandifi-logo.svg" alt="Logo" className="mb-6" width={180} height={80} />

      <h2 className="text-2xl font-semibold mb-2">Enter the code</h2>
      <p className="mb-6 text-gray-600 text-center">
        We've sent an OTP to{" "}
        <span className="font-medium">{maskEmail(email)}</span>
        <br />
        Please enter the code to verify your account.
      </p>

      <div className="flex gap-3 mb-6">
        {otp.map((digit, i) => (
          <input
            key={i}
            ref={(el) => {
              inputRefs.current[i] = el;
            }}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(e.target.value, i)}
            onKeyDown={(e) => handleKeyDown(e, i)}
            className="w-12 h-12 text-center border border-gray-300 rounded text-lg focus:ring focus:ring-blue-500"
          />
        ))}
      </div>

      <button
        onClick={() => handleVerify()}
        className="w-40 py-2 bg-[#445E94] text-white rounded-full hover:bg-[#3b4f7a] transition"
      >
        Verify Now
      </button>

      <div className="mt-6 text-sm text-gray-600">
        {!canResend ? (
          <p>
            Resend code in{" "}
            <span className="text-blue-600">{formatTime(timeLeft)}</span>
          </p>
        ) : (
          <button
            onClick={handleResend}
            className="text-blue-600 hover:underline font-medium"
          >
            Resend Code
          </button>
        )}
      </div>
    </div>
  );
}
