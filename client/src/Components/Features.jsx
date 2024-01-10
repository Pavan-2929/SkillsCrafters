import React from 'react'

export default function Features() {
  return (
    <div className="flex mt-8 w-[90vw] flex-wrap mx-auto gap-4">
      <div className="flex-1 p-8 border rounded-lg text-center mx-1">
        <h2 className="text-2xl mb-2">10+</h2>
        <p>Registered Company</p>
      </div>
      <div className="flex-1 p-8 border rounded-lg text-center sm:ml-4 mx-1">
        <h2 className="text-2xl mb-2">1,000+</h2>
        <p>Total Clients</p>
      </div>
      <div className="flex-1 p-8 border rounded-lg text-center sm:ml-4 mx-1">
        <h2 className="text-2xl mb-2">50+</h2>
        <p>Well-known Developers</p>
      </div>
      <div className="flex-1 p-8 border rounded-lg text-center sm:ml-4 mx-1">
        <h2 className="text-2xl mb-2">24/7</h2>
        <p>Instructor Support</p>
      </div>
    </div>
  );
}
