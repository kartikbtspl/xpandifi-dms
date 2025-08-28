// components/ui/Button.tsx
"use client";
import React, { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "destructive";
  size?: "sm" | "md" | "lg" | "xl";
  loading?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  fullWidth?: boolean;
  rounded?: "sm" | "md" | "lg" | "full";
  textColor?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = "",
      variant = "primary",
      size = "md",
      loading = false,
      startIcon,
      endIcon,
      fullWidth = false,
      rounded = "full",
      textColor,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const getSizeClasses = () => {
      switch (size) {
        case "sm":
          return "h-9 px-3 text-sm";
        case "lg":
          return "h-12 px-6 text-lg";
        case "xl":
          return "h-14 px-8 text-xl";
        default:
          return "h-10 px-4 text-base";
      }
    };

    const getVariantClasses = () => {
      // If textColor is provided, don't include default text colors in variant classes
      switch (variant) {
        case "secondary":
          return `bg-gray-100 hover:bg-gray-200 border border-gray-200 ${!textColor ? 'text-gray-900' : ''}`;
        case "outline":
          return `bg-transparent border border-[#445E94] hover:bg-[#445E94] ${!textColor ? 'text-[#445E94] hover:text-white' : ''}`;
        case "ghost":
          return `bg-transparent hover:bg-[#445E94]/10 ${!textColor ? 'text-[#445E94]' : ''}`;
        case "destructive":
          return `bg-red-600 hover:bg-red-700 border border-red-600 ${!textColor ? 'text-white' : ''}`;
        default:
          return `bg-[#445E94] hover:bg-[#3a4f7a] border border-[#445E94] ${!textColor ? 'text-white' : ''}`;
      }
    };

    const getRoundedClasses = () => {
      switch (rounded) {
        case "sm":
          return "rounded-sm";
        case "lg":
          return "rounded-lg";
        case "full":
          return "rounded-full";
        default:
          return "rounded-md";
      }
    };

    const getButtonClasses = () => {
      let classes = `inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#445E94] focus:ring-offset-2 ${getSizeClasses()} ${getVariantClasses()} ${getRoundedClasses()}`;
      
      if (fullWidth) classes += " w-full";
      if (disabled || loading) classes += " opacity-50 cursor-not-allowed pointer-events-none";
      if (className) classes += ` ${className}`;
      
      return classes;
    };

    const getButtonStyle = () => {
      if (textColor) {
        return { color: textColor };
      }
      return {};
    };

    return (
      <button
        ref={ref}
        className={getButtonClasses()}
        style={getButtonStyle()}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
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
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
        
        {!loading && startIcon && (
          <span className="mr-2 flex-shrink-0">
            {startIcon}
          </span>
        )}
        
        <span>{children}</span>
        
        {!loading && endIcon && (
          <span className="ml-2 flex-shrink-0">
            {endIcon}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
