import React, { useState } from 'react';
import { Zap } from 'lucide-react';

interface EnergyCalculatorProps {
  setEnergySavings: (savings: number) => void;
}

const EnergyCalculator: React.FC<EnergyCalculatorProps> = ({ setEnergySavings }) => {
  const [energyUsage, setEnergyUsage] = useState('');

  const calculateEnergySavings = () => {
    const usage = parseFloat(energyUsage);
    if (!isNaN(usage)) {
      const savings = usage * 0.1; // Assume 10% savings for simplicity
      setEnergySavings(savings);
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Zap className="mr-2 text-yellow-500" /> Energy Calculator
      </h2>
      <div className="mb-4">
        <label htmlFor="energyUsage" className="block mb-2">
          Weekly Energy Usage (kWh):
        </label>
        <input
          type="number"
          id="energyUsage"
          value={energyUsage}
          onChange={(e) => setEnergyUsage(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Enter your weekly energy usage"
        />
      </div>
      <button
        onClick={calculateEnergySavings}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
      >
        Calculate Savings
      </button>
    </div>
  );
};

export default EnergyCalculator;