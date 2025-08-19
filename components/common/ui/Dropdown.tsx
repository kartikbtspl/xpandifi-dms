// components/ui/Dropdown.tsx
"use client";
import React, { forwardRef, useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export interface OptionType {
  value: string;
  label: string;
  disabled?: boolean;
}

interface DropdownProps {
  label?: string;
  placeholder?: string;
  options: OptionType[];
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  helperText?: string;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "filled" | "outlined";
  searchable?: boolean;
  clearable?: boolean;
  className?: string;
  name?: string;
}

const Dropdown = forwardRef<HTMLButtonElement, DropdownProps>(
  (
    {
      label,
      placeholder = "Select option",
      options,
      value,
      onChange,
      error,
      helperText,
      disabled = false,
      size = "md",
      variant = "default",
      searchable = false,
      clearable = false,
      className = "",
      name,
      ...props
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const dropdownRef = useRef<HTMLDivElement>(null);

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

    const selectedOption = options.find(option => option.value === value);
    
    const filteredOptions = searchable
      ? options.filter(option =>
          option.label.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : options;

    const getButtonClasses = () => {
      let classes = `w-full rounded-full transition-all duration-200 outline-none flex items-center justify-between text-left ${getSizeClasses()} ${getVariantClasses()}`;
      
      if (error) classes += " border-red-500 focus:border-red-500 focus:ring-red-200";
      if (disabled) classes += " bg-gray-100 text-gray-500 cursor-not-allowed";
      if (!selectedOption) classes += " text-gray-400";
      if (className) classes += ` ${className}`;
      
      return classes;
    };

    const getOptionClasses = (option: OptionType) => {
      let classes = "w-full px-3 py-2 text-left text-sm hover:bg-gray-100 transition-colors duration-150";
      
      if (option.value === value) classes += " bg-blue-50 text-blue-600";
      if (option.disabled) classes += " text-gray-400 cursor-not-allowed bg-gray-50";
      
      return classes;
    };

    // Close dropdown when clicking outside
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setIsOpen(false);
          setSearchTerm("");
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleOptionSelect = (optionValue: string) => {
      onChange?.(optionValue);
      setIsOpen(false);
      setSearchTerm("");
    };

    const handleClear = (e: React.MouseEvent) => {
      e.stopPropagation();
      onChange?.("");
    };

    return (
      <div className="flex flex-col space-y-1" ref={dropdownRef}>
        {label && (
          <label className="text-sm font-medium text-gray-700">
            {label}
          </label>
        )}
        
        <div className="relative">
          <button
            type="button"
            ref={ref}
            onClick={() => !disabled && setIsOpen(!isOpen)}
            className={getButtonClasses()}
            disabled={disabled}
            {...props}
          >
            <span className="truncate">
              {selectedOption ? selectedOption.label : placeholder}
            </span>
            
            <div className="flex items-center space-x-1">
              {clearable && selectedOption && !disabled && (
                <button
                  type="button"
                  onClick={handleClear}
                  className="text-gray-400 hover:text-gray-600 p-1"
                >
                  ×
                </button>
              )}
              <ChevronDown
                className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                  isOpen ? "transform rotate-180" : ""
                }`}
              />
            </div>
          </button>

          {/* Hidden input for form submission */}
          <input
            type="hidden"
            name={name}
            value={value || ""}
          />
          
          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-hidden">
              {searchable && (
                <div className="p-2 border-b border-gray-200">
                  <input
                    type="text"
                    placeholder="Search options..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
              )}
              
              <div className="max-h-48 overflow-y-auto">
                {filteredOptions.length > 0 ? (
                  filteredOptions.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => !option.disabled && handleOptionSelect(option.value)}
                      className={getOptionClasses(option)}
                      disabled={option.disabled}
                    >
                      {option.label}
                    </button>
                  ))
                ) : (
                  <div className="px-3 py-2 text-sm text-gray-500">
                    No options found
                  </div>
                )}
              </div>
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

Dropdown.displayName = "Dropdown";

export default Dropdown;
