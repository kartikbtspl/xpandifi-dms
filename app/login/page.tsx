'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import useAuthStore from '../../store/useAuthStore';

// Spinner Component
const Spinner = ({ size = 'sm', className = '' }) => (
  <svg
    className={`animate-spin ${size === 'sm' ? 'w-4 h-4' : 'w-6 h-6'} text-white ${className}`}
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
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8v8z"
    ></path>
  </svg>
);

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false); // Error state for validation

  const login = useAuthStore(state => state.login);
  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false); // Reset error on submit
    const ok = login(email, password);
    if (ok) {
      const stored = localStorage.getItem('token') || '{}';
      try {
        const token = JSON.parse(stored);
        if (token.role === 'oem') router.push('/oem/dashboard');
        else if (token.role === 'dms') router.push('/dms/dashboard');
        else router.push('/');
      } catch {
        router.push('/');
      }
    } else {
      setError(true); // Show error message
    }
    setLoading(false);
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
        <img
          src="/xpandifi-logo.svg"
          alt="Logo"
          className="h-12 mb-4"
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
              Email address and Password not matching
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
                ? 'bg-[#445E94] cursor-not-allowed'
                : 'bg-[#445E94] hover:bg-[#445E94]'
            }`}
          >
            {loading ? <Spinner /> : null}
            {loading ? 'Logging in...' : 'Login'}
          </button>

          <div className="text-right">
            <a href="/forgot-password" className="text-sm text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>
        </form>

        <p className="text-sm text-gray-500 mt-8">
          Don&apos;t have an account?{' '}
          <a href="/register" className="text-blue-600 hover:underline">
            Register here
          </a>
        </p>
      </div>
    </div>
    );
}