import React, { useState } from 'react';
import { Droplet } from 'lucide-react';

interface WaterCalculatorProps {
  setWaterSavings: (savings: number) => void;
}

const WaterCalculator: React.FC<WaterCalculatorProps> = ({ setWaterSavings }) => {
  const [waterUsage, setWaterUsage] = useState('');

  const calculateWaterSavings = () => {
    const usage = parseFloat(waterUsage);
    if (!isNaN(usage)) {
      const savings = usage * 0.15; // Assume 15% savings for simplicity
      setWaterSavings(savings);
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Droplet className="mr-2 text-blue-500" /> Water Calculator
      </h2>
      <div className="mb-4">
        <label htmlFor="waterUsage" className="block mb-2">
          Weekly Water Usage (Gallons):
        </label>
        <input
          type="number"
          id="waterUsage"
          value={waterUsage}
          onChange={(e) => setWaterUsage(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Enter your weekly water usage"
        />
      </div>
      <button
        onClick={calculateWaterSavings}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
      >
        Calculate Savings
      </button>
    </div>
  );
};

export default WaterCalculator;