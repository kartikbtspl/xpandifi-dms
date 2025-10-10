"use client"
import Breadcrumb from '@/components/common/ui/BreadCrumb'
import React from 'react'
import TrackingReportMapForm from './components/TrackingReportMapForm'

const TrackingReportsMap = () => {
  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "Location Reports", isClickable: false },
          { label: "Tracking Reports(Map)", href: "/oem/reports/location-reports/tracking-reports-map" },
        ]}
      />
      <h1 className="text-3xl font-semibold text-[#445E94]">Tracking Reports(Map)</h1>
      <div className="space-y-4 rounded-lg bg-white shadow-sm">
        <div className="flex justify-between px-6 pt-4">
          <h1 className="text-xl text-[#445E94]">User Report</h1>
        </div>
        <hr className="text-gray-200" />
        <div className="">
          <TrackingReportMapForm />
        </div>
      </div>
      <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1797.666600755925!2d73.77158629469287!3d18.55204641265411!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9ddad3f2e59%3A0x219a979e13a0f7a8!2sBrilliantech%20Software%20-%20Ai%20%26%20Digital%20Transformation%20Solutions!5e1!3m2!1sen!2sin!4v1759817599112!5m2!1sen!2sin" width="100%" height="750"loading="lazy" ></iframe>
      </div>
    </div>
  )
}

export default TrackingReportsMap