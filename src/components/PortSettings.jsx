import React, { useState } from 'react';
// import { X } from 'lucide-react';

const PortSettings = () => {
  const [settings, setSettings] = useState({
    starsv1: '',
    starsv2: '',
    cnr1: '',
    cnr2: '',
    alns: '',
    gps: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Settings submitted:', settings);
  };

  const handleCancel = () => {
    console.log('Settings cancelled');
    // Add cancel logic here
  };

  const comPorts = ['COM 1', 'COM 2', 'COM 3'];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8">Port Settings</h1>
      <div className="max-w-2xl mx-auto bg-gray-200 rounded-lg p-6 relative">
        <button className="absolute right-2 top-2 p-2 hover:bg-gray-300 rounded-md">
          {/* <X className="h-4 w-4" /> */}
        </button>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-[120px,1fr] gap-4 items-center">
            <label htmlFor="starsv1" className="text-right font-medium">
              STARSV 1 :
            </label>
            <input
              type="text"
              id="starsv1"
              value={settings.starsv1}
              onChange={(e) => setSettings({ ...settings, starsv1: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-md bg-white"
            />

            <label htmlFor="starsv2" className="text-right font-medium">
              STARSV 2 :
            </label>
            <input
              type="text"
              id="starsv2"
              value={settings.starsv2}
              onChange={(e) => setSettings({ ...settings, starsv2: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-md bg-white"
            />

            <label htmlFor="cnr1" className="text-right font-medium">
              CNR 1 :
            </label>
            <input
              type="text"
              id="cnr1"
              value={settings.cnr1}
              onChange={(e) => setSettings({ ...settings, cnr1: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-md bg-white"
            />

            <label htmlFor="cnr2" className="text-right font-medium">
              CNR 2 :
            </label>
            <input
              type="text"
              id="cnr2"
              value={settings.cnr2}
              onChange={(e) => setSettings({ ...settings, cnr2: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-md bg-white"
            />

            <label htmlFor="alns" className="text-right font-medium">
              ALNS :
            </label>
            <input
              type="text"
              id="alns"
              value={settings.alns}
              onChange={(e) => setSettings({ ...settings, alns: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-md bg-white"
            />

            <label htmlFor="gps" className="text-right font-medium">
              GPS :
            </label>
            <select
              id="gps"
              value={settings.gps}
              onChange={(e) => setSettings({ ...settings, gps: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-md bg-white"
            >
              <option value="">Select port</option>
              {comPorts.map(port => (
                <option key={port} value={port}>{port}</option>
              ))}
            </select>
          </div>

          <div className="flex justify-center space-x-4 mt-8">
            <button
              type="submit"
              className="px-8 py-2 bg-white text-black rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              Ok
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="px-8 py-2 bg-white text-black rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PortSettings;

