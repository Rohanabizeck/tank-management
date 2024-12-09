import React, { useState } from 'react';
import { X } from 'lucide-react';
import * as RadioGroup from '@radix-ui/react-radio-group';
import * as Label from '@radix-ui/react-label';
import { Slot } from '@radix-ui/react-slot';

const Button = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <Slot
      className={`px-4 py-2 rounded-md transition duration-200 ${className}`}
      ref={ref}
      {...props}
    />
  );
});

Button.displayName = 'Button';

const Communication = () => {
  const [selectedOption, setSelectedOption] = useState('STARSV1');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Selected option:', selectedOption);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8">Communication</h1>
      <div className="max-w-2xl mx-auto bg-gray-200 rounded-lg p-6 relative">
        <button className="absolute right-2 top-2 p-2 hover:bg-gray-300 rounded-md">
          <X className="h-4 w-4" />
        </button>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          <RadioGroup.Root
            defaultValue={selectedOption}
            onValueChange={setSelectedOption}
            className="space-y-4"
          >
            {['STARSV 1', 'TADIRAN 1', 'STARSV 2', 'TADIRAN 2', 'HCRR', 'OFC', 'SDR'].map((option) => (
              <div key={option} className="flex items-center space-x-2">
                <RadioGroup.Item
                  value={option.replace(' ', '')}
                  id={option.replace(' ', '')}
                  className="w-4 h-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-2 after:h-2 after:rounded-full after:bg-blue-500" />
                </RadioGroup.Item>
                <Label.Root htmlFor={option.replace(' ', '')} className="text-sm font-medium text-gray-700">
                  {option}
                </Label.Root>
              </div>
            ))}
          </RadioGroup.Root>

          <div className="flex justify-center gap-4 mt-6">
            <Button type="submit" className="bg-blue-500 text-white hover:bg-blue-600">
              Ok
            </Button>
            <Button type="button" className="bg-gray-500 text-white hover:bg-gray-600">
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Communication;

