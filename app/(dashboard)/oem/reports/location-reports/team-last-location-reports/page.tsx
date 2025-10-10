"use client";
import Breadcrumb from '@/components/common/ui/BreadCrumb';
import React from 'react';

const TeamLastLocationReports = () => {
  return (
    <div className='space-y-4'>
      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/oem/dashboard" },
          { label: "Target Reports", isClickable: false },
          { label: "Team Last Location Report", href: "/oem/reports/location-reports/team-last-location-reports" },
        ]}
      />
      <h1 className="text-3xl font-semibold text-[#445E94]">Team Last Location Report</h1>
      <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1797.666600755925!2d73.77158629469287!3d18.55204641265411!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9ddad3f2e59%3A0x219a979e13a0f7a8!2sBrilliantech%20Software%20-%20Ai%20%26%20Digital%20Transformation%20Solutions!5e1!3m2!1sen!2sin!4v1759817599112!5m2!1sen!2sin" width="100%" height="750"loading="lazy" ></iframe>
      </div>
    </div>
  );
};

export default TeamLastLocationReports;
