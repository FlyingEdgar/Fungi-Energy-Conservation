import React, { useState } from 'react';
import { CloudRain } from 'lucide-react';

interface CarbonFootprintCalculatorProps {
  setCarbonFootprint: (footprint: number) => void;
}

const CarbonFootprintCalculator: React.FC<CarbonFootprintCalculatorProps> = ({ setCarbonFootprint }) => {
  const [electricity, setElectricity] = useState('');
  const [gas, setGas] = useState('');
  const [milesDriven, setMilesDriven] = useState('');

  const calculateFootprint = () => {
    const electricityEmissions = parseFloat(electricity) * 0.92; // lbs CO2 per kWh
    const gasEmissions = parseFloat(gas) * 11.7; // lbs CO2 per therm
    const carEmissions = parseFloat(milesDriven) * 0.89; // lbs CO2 per mile (average car)

    const totalEmissions = electricityEmissions + gasEmissions + carEmissions;
    setCarbonFootprint(totalEmissions);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-xl font-semibold mb-4 flex items-center">
        <CloudRain className="mr-2 text-gray-600" /> Carbon Footprint Calculator
      </h3>
      <div className="space-y-4">
        <div>
          <label htmlFor="electricity" className="block mb-1">Monthly Electricity Usage (kWh):</label>
          <input
            type="number"
            id="electricity"
            value={electricity}
            onChange={(e) => setElectricity(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="gas" className="block mb-1">Monthly Natural Gas Usage (therms):</label>
          <input
            type="number"
            id="gas"
            value={gas}
            onChange={(e) => setGas(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="milesDriven" className="block mb-1">Miles Driven per Month:</label>
          <input
            type="number"
            id="milesDriven"
            value={milesDriven}
            onChange={(e) => setMilesDriven(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <button
          onClick={calculateFootprint}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Calculate Carbon Footprint
        </button>
      </div>
    </div>
  );
};

export default CarbonFootprintCalculator;