import React from 'react'

function GeoTagLocation() {
  return (
    <div>
      <h1 className='text-2xl font-semibold'>Map View</h1>
      <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d3502.2076908592835!2d73.77351972552083!3d18.547266172905125!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1757501490326!5m2!1sen!2sin" className='w-full' height="300"  loading="lazy" ></iframe>
    </div>
  )
}

export default GeoTagLocation