import React, { useState } from 'react';
import { X } from 'lucide-react';

const CnrSettings = () => {
  const [settings, setSettings] = useState({
    retryCount1: '',
    retryCount2: '',
    actWtTime: '',
    channelNo: '',
    channelFreq: '',
    radioMode: 'AJ',
    powerLevel: 'low'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Settings submitted:', settings);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8">CNR Settings</h1>
      <div className="max-w-3xl mx-auto bg-gray-200 rounded-lg p-6 relative">
        <button className="absolute right-2 top-2 p-2 hover:bg-gray-300 rounded-md">
          <X className="h-4 w-4" />
        </button>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Baud Params Section */}
          <div className="border border-gray-300 p-4 rounded-lg bg-white">
            <h2 className="text-lg font-semibold mb-4">Baud Params</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label>Retry cnt on Tx fail</label>
                  <select
                    value={settings.retryCount1}
                    onChange={(e) => setSettings({ ...settings, retryCount1: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="">Select retry count</option>
                    {[1, 2, 3, 4, 5].map((count) => (
                      <option key={count} value={count.toString()}>{count}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label>Retry cnt on Tx fail</label>
                  <select
                    value={settings.retryCount2}
                    onChange={(e) => setSettings({ ...settings, retryCount2: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="">Select retry count</option>
                    {[1, 2, 3, 4, 5].map((count) => (
                      <option key={count} value={count.toString()}>{count}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label>Act wt Time (s)</label>
                <select
                  value={settings.actWtTime}
                  onChange={(e) => setSettings({ ...settings, actWtTime: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="">Select wait time</option>
                  {[1, 2, 3, 4, 5].map((time) => (
                    <option key={time} value={time.toString()}>{time}s</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Channel Settings */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-1/2 space-y-2">
                <label>Channel no:</label>
                <div className="flex gap-2">
                  <select
                    value={settings.channelNo}
                    onChange={(e) => setSettings({ ...settings, channelNo: e.target.value })}
                    className="flex-1 p-2 border border-gray-300 rounded-md"
                  >
                    <option value="">Select channel</option>
                    {[1, 2, 3, 4, 5].map((channel) => (
                      <option key={channel} value={channel.toString()}>Channel {channel}</option>
                    ))}
                  </select>
                  <button className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400">SET CHANNEL NO</button>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-1/2 space-y-2">
                <label>Channel Frequency :</label>
                <div className="flex gap-2">
                  <select
                    value={settings.channelFreq}
                    onChange={(e) => setSettings({ ...settings, channelFreq: e.target.value })}
                    className="flex-1 p-2 border border-gray-300 rounded-md"
                  >
                    <option value="">Select frequency</option>
                    {[30, 40, 50, 60, 70].map((freq) => (
                      <option key={freq} value={freq.toString()}>{freq} MHz</option>
                    ))}
                  </select>
                  <button className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400">SET CHANNEL NO</button>
                </div>
              </div>
            </div>
          </div>

          {/* Radio tx Mode */}
          <div className="bg-gray-100 p-4 rounded-lg space-y-4">
            <h3 className="font-medium">Radio tx Mode</h3>
            <div className="flex items-center gap-8">
              <div className="flex gap-8">
                {['AJ', 'FF-SEC', 'FF-CLR'].map((mode) => (
                  <label key={mode} className="flex items-center gap-2">
                    <input
                      type="radio"
                      value={mode}
                      checked={settings.radioMode === mode}
                      onChange={(e) => setSettings({ ...settings, radioMode: e.target.value })}
                    />
                    {mode}
                  </label>
                ))}
              </div>
              <button className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400">SET TX MODE</button>
            </div>
          </div>

          {/* Power Level */}
          <div className="bg-gray-100 p-4 rounded-lg space-y-4">
            <h3 className="font-medium">Power Level</h3>
            <div className="flex items-center gap-8">
              <div className="flex gap-8">
                {['Low', 'high'].map((level) => (
                  <label key={level} className="flex items-center gap-2">
                    <input
                      type="radio"
                      value={level.toLowerCase()}
                      checked={settings.powerLevel === level.toLowerCase()}
                      onChange={(e) => setSettings({ ...settings, powerLevel: e.target.value })}
                    />
                    {level}
                  </label>
                ))}
              </div>
              <button className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400">SET POWER LEVEL</button>
            </div>
          </div>

          {/* Bottom Buttons */}
          <div className="flex justify-center gap-4">
            <button className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400">SET RTC</button>
            <button className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400">o/c</button>
            <button className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400">SET Data com on</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CnrSettings;

