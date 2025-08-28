"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ResetPassword() {
  const router = useRouter();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!newPassword || !confirmPassword) {
      setError("Both fields are required.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // ✅ Mock success since no backend yet
    setSuccess(true);
  };

  // Redirect to login after success
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        router.push("/login");
      }, 2000); // redirect after 2s
      return () => clearTimeout(timer);
    }
  }, [success, router]);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
       <Image src="/xpandifi-logo.svg" alt="Logo" className="mb-5"  width={180} height={60} />

      <h2 className="text-2xl font-semibold text-gray-800 text-center">
        Reset Password
      </h2>

      <div className="w-full max-w-md p-8">
        {error && (
          <p className="text-red-500 text-sm text-center mb-4">{error}</p>
        )}

        {success ? (
          <p className="text-green-600 text-center font-medium text-lg">
            🎉 Password has been reset successfully! <br />
            Redirecting to Login...
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                New Password
              </label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:ring focus:ring-blue-500 focus:outline-none"
                placeholder="Enter new password"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:ring focus:ring-blue-500 focus:outline-none"
                placeholder="Confirm new password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#445E94] text-white py-2 rounded-full font-medium hover:bg-[#3b4f7a] transition"
            >
              Reset Password
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
