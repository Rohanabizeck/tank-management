import React, { useState } from 'react';

const OsmMap = () => {
  const [lookIn, setLookIn] = useState('');
  const [name, setName] = useState('');
  const [showType, setShowType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { lookIn, name, showType });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Open OSM Map</h1>
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-[120px,1fr,auto,auto] gap-4 items-center">
            <label htmlFor="lookIn" className="font-medium text-gray-700">
              Look in:
            </label>
            <select
              id="lookIn"
              value={lookIn}
              onChange={(e) => setLookIn(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select location</option>
              <option value="location1">Location 1</option>
              <option value="location2">Location 2</option>
            </select>
            <button type="button" className="p-2 bg-gray-200 hover:bg-gray-300 border border-gray-300 rounded-md transition duration-200">
              ↑
            </button>
            <button type="button" className="p-2 bg-gray-200 hover:bg-gray-300 border border-gray-300 rounded-md transition duration-200">
              →
            </button>
          </div>

          <div className="grid grid-cols-[120px,1fr,auto] gap-4 items-center">
            <label htmlFor="name" className="font-medium text-gray-700">
              Name:
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button type="button" className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 rounded-md transition duration-200">
              Select
            </button>
          </div>

          <div className="grid grid-cols-[120px,1fr,auto] gap-4 items-center">
            <label htmlFor="showType" className="font-medium text-gray-700">
              Show type:
            </label>
            <input
              id="showType"
              type="text"
              value={showType}
              onChange={(e) => setShowType(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button type="button" className="px-4 py-2 bg-red-500 text-white hover:bg-red-600 rounded-md transition duration-200">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OsmMap;

