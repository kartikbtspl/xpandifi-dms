"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Fake API simulation
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Redirect to OTP page with email in query string
      router.push(`/otp?email=${encodeURIComponent(email)}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-[65%] justify-center items-center px-8 py-12">
      <Image src="/xpandifi-logo.svg" alt="Logo" className="mb-5"  width={180} height={60} />
      <h2 className="text-2xl font-semibold text-gray-800">
        Forgot Your Password?
      </h2>
      <p className="mb-8 text-center">
        Enter your email to receive a password reset link.
      </p>

      <form
        onSubmit={handleSubmit}
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
          disabled={loading || !email.trim()}
          className={`w-full py-2 text-white rounded-full transition ${
            loading || !email.trim()
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[#445E94] hover:bg-[#3b4f7a]"
          }`}
        >
          {loading ? "Sending..." : "Send Reset Link"}
        </button>
      </form>
    </div>
  );
}

