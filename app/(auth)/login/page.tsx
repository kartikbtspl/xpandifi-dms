"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";
import Image from "next/image";

// Spinner Component
const Spinner = () => (
  <svg 
    className="animate-spin h-4 w-4 text-white" 
    fill="none" 
    viewBox="0 0 24 24"
  >
    <circle 
      className="opacity-25" 
      cx="12" 
      cy="12" 
      r="10" 
      stroke="currentColor" 
      strokeWidth="4"
    />
    <path 
      className="opacity-75" 
      fill="currentColor" 
      d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
);

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const login = useAuthStore((state) => state.login);
  const role = useAuthStore((state) => state.role);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const router = useRouter();

  //  If already logged in → redirect to dashboard
  useEffect(() => {
    if (isAuthenticated && role) {
      if (role === "OEM") {
        router.replace("/oem/dashboard");
      } else if (role === "DMS") {
        router.replace("/dms/dashboard");
      }
    }
  }, [isAuthenticated, role, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const success = await login(email, password);

      if (success) {
        if (role === "OEM") {
          router.push("/oem/dashboard");
        } else if (role === "DMS") {
          router.push("/dms/dashboard");
        }
      } else {
        setError("Email address and Password not matching");
      }
    } catch (err) {
      setError("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-[65%] justify-center items-center px-8 py-12">
      <Image
        src="/xpandifi-logo.svg"
        alt="Logo"
        className="mb-4"
        height={180}
        width={180}
      />
      <h2 className="text-2xl font-semibold text-gray-800">
        Welcome to Xpandifi DMS
      </h2>
      <p className='mb-8'>Log in to manage your global retail operations.</p>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-4"
        noValidate
      >
        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        {/* Error Message */}
        {error && (
          <div className="flex items-center text-sm text-red-600 mt-1 mb-1">
            <svg className="w-4 h-4 mr-1 text-red-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01" />
            </svg>
            {error}
          </div>
        )}

        {/* Checkbox (left-aligned) */}
        <div className="flex items-center">
          <input
            id="remember"
            type="checkbox"
            className="mr-2"
          />
          <label htmlFor="remember" className="text-sm text-gray-700">
            Remember me
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 flex justify-center items-center gap-2 text-white rounded-full transition ${
            loading
              ? 'bg-[#445E94] cursor-not-allowed opacity-75'
              : 'bg-[#445E94] hover:bg-[#3a4f7a]'
          }`}
        >
          {loading ? <Spinner /> : null}
          {loading ? 'Logging in...' : 'Login'}
        </button>

        <div className="text-right">
          <a 
            href="/forgot-password" 
            className="text-sm text-blue-600 hover:underline"
            onClick={(e) => {
              e.preventDefault();
              router.push("/forgot-password");
            }}
          >
            Forgot password?
          </a>
        </div>
      </form>

      <p className="text-sm text-gray-500 mt-8">
        Don&apos;t have an account?{' '}
        <a 
          href="/register" 
          className="text-blue-600 hover:underline"
          onClick={(e) => {
            e.preventDefault();
            router.push("/register");
          }}
        >
          Register here
        </a>
      </p>
    </div>
  );
}
