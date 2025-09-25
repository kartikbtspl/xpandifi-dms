import React from "react";

function MapView() {
  return (
    <div className="space-y-4 bg-white rounded-xl p-6">
      <h1 className="text-lg font-semibold text-gray-800">Map View</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3002.189555913081!2d73.77206215700708!3d18.550511833586437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1758781541041!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}   // ✅ style as object
        allowFullScreen        // ✅ JSX syntax (boolean)
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

export default MapView;
