"use client"
import React, { forwardRef } from "react"

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({
  label,
  error,
  rows = 4,
  className = "",
  ...props
}, ref) => {
  const base = "w-full border border-gray-300 rounded-3xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-200"
  return (
    <div className="w-full">
      {label && <label className="block mb-1 text-gray-700">{label}</label>}
      <textarea
        ref={ref}
        rows={rows}
        className={`${base} ${className}`}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  )
})

Textarea.displayName = "Textarea"
