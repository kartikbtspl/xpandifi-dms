// components/ui/Input.tsx
"use client";
import React, { forwardRef } from "react";

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  error?: string;
  helperText?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  variant?: "default" | "filled" | "outlined";
  size?: "sm" | "md" | "lg";
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className = "",
      type = "text",
      label,
      error,
      helperText,
      startIcon,
      endIcon,
      variant = "default",
      size = "md",
      disabled,
      ...props
    },
    ref
  ) => {
    const getSizeClasses = () => {
      switch (size) {
        case "sm":
          return "h-10 px-3 text-sm";
        case "lg":
          return "h-14 px-4 text-lg";
        default:
          return "h-12 px-3 text-base";
      }
    };

    const getVariantClasses = () => {
      switch (variant) {
        case "filled":
          return "border-0 bg-gray-100 focus:bg-white focus:ring-2 focus:ring-blue-200";
        case "outlined":
          return "border-2 border-gray-300 bg-transparent focus:border-blue-500";
        default:
          return "border border-gray-300 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200";
      }
    };

    const getInputClasses = () => {
      let classes = `w-full rounded-full transition-all duration-200 outline-none ${getSizeClasses()} ${getVariantClasses()}`;
      
      if (startIcon) classes += " pl-10";
      if (endIcon) classes += " pr-10";
      if (error) classes += " border-red-500 focus:border-red-500 focus:ring-red-200";
      if (disabled) classes += " bg-gray-100 text-gray-500 cursor-not-allowed";
      if (className) classes += ` ${className}`;
      
      return classes;
    };

    return (
      <div className="flex flex-col space-y-1">
        {label && (
          <label className="text-sm font-medium text-gray-700">
            {label}
          </label>
        )}
        
        <div className="relative">
          {startIcon && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              {startIcon}
            </div>
          )}
          
          <input
            type={type}
            className={getInputClasses()}
            ref={ref}
            disabled={disabled}
            {...props}
          />
          
          {endIcon && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              {endIcon}
            </div>
          )}
        </div>
        
        {(error || helperText) && (
          <p className={error ? "text-xs text-red-500" : "text-xs text-gray-500"}>
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
