import React, { useState } from 'react';
import { X } from 'lucide-react';

const Communication = () => {
  const [selectedOption, setSelectedOption] = useState('STARSV1');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Selected option:', selectedOption);
  };

  const handleCancel = () => {
    console.log('Cancel clicked');
    // Add any cancel logic here
  };

  const options = ['STARSV 1', 'TADIRAN 1', 'STARSV 2', 'TADIRAN 2', 'HCRR', 'OFC', 'SDR'];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8">Communication</h1>
      <div className="max-w-2xl mx-auto bg-gray-200 rounded-lg p-6 relative">
        <button className="absolute right-2 top-2 p-2 hover:bg-gray-300 rounded-md">
          <X className="h-4 w-4" />
        </button>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-4">
            {options.map((option) => (
              <div key={option} className="flex items-center space-x-2">
                <input
                  type="radio"
                  id={option.replace(' ', '')}
                  name="communication"
                  value={option.replace(' ', '')}
                  checked={selectedOption === option.replace(' ', '')}
                  onChange={(e) => setSelectedOption(e.target.value)}
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <label htmlFor={option.replace(' ', '')} className="text-sm font-medium text-gray-700">
                  {option}
                </label>
              </div>
            ))}
          </div>

          <div className="flex justify-end space-x-4 mt-6">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Ok
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Communication;

