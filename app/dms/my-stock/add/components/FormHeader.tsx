"use client"
import React from "react"
import { useRouter } from "next/navigation"
import { FiArrowLeft } from "react-icons/fi"
import Button from "../../../../../components/common/ui/Button"

export function Header() {
  const router = useRouter()
  return (
    <div className="mb-6">
      <Button
        type="button"
        variant="outline"
        onClick={() => router.back()}
        className="inline-flex items-center px-8 py-1 border rounded-full"
      >
        &lt; <span className="ml-2">Back</span>
      </Button>
      <div className="text-sm text-gray-500 mt-2">
        Dashboard &gt; My Stock &gt; Add Stock
      </div>
    </div>
  )
}
