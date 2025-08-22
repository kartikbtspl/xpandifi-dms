"use client"
import React, { forwardRef } from "react"
import ReactDatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { FiCalendar } from "react-icons/fi"

interface DatePickerProps {
  label?: string
  selected: Date | null
  onChange: (date: Date | null) => void
  placeholder?: string
  error?: string
}

const CustomInput = forwardRef<HTMLInputElement, any>(({ value, onClick, placeholder }, ref) => (
  <div className="relative w-full">
    <FiCalendar className="absolute left-4 top-1/2 transform -translate-y-1/2 " />
    <input
      ref={ref}
      readOnly
      value={value}
      onClick={onClick}
      placeholder={placeholder}
      className="w-full border border-gray-300 rounded-full pl-12 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
    />
  </div>
))
CustomInput.displayName = "CustomInput"

export const DatePicker: React.FC<DatePickerProps> = ({
  label,
  selected,
  onChange,
  placeholder = "Select date",
  error,
}) => (
  <div className="w-full">
    {label && <label className="block mb-1 text-gray-700">{label}</label>}
    <ReactDatePicker
      selected={selected}
      onChange={onChange}
      placeholderText={placeholder}
      customInput={<CustomInput placeholder={placeholder} />}
      dateFormat="MM/dd/yyyy"
    />
    {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
  </div>
)
