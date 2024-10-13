import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ResultsProps {
  energySavings: number;
  waterSavings: number;
}

const Results: React.FC<ResultsProps> = ({ energySavings, waterSavings }) => {
  const getEnergySavingsFactoid = (savings: number) => {
    if (savings > 10) {
      return `Your energy savings could power ${Math.floor(savings / 10)} homes for a day!`;
    } else {
      return `Your energy savings could charge ${Math.floor(savings * 30)} smartphones!`;
    }
  };

  const getWaterSavingsFactoid = (savings: number) => {
    if (savings > 100) {
      return `You've saved enough water to fill ${Math.floor(savings / 100)} bathtubs!`;
    } else {
      return `Your water savings could provide drinking water for ${Math.floor(savings * 2)} people for a day!`;
    }
  };

  return (
    <div className="mt-8 bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <AlertCircle className="mr-2 text-green-500" /> Your Impact
      </h2>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <h3 className="font-semibold">Energy Savings:</h3>
          <p>{energySavings.toFixed(2)} kWh per week</p>
          <p className="text-sm text-gray-600 mt-2">{getEnergySavingsFactoid(energySavings)}</p>
        </div>
        <div>
          <h3 className="font-semibold">Water Savings:</h3>
          <p>{waterSavings.toFixed(2)} gallons per week</p>
          <p className="text-sm text-gray-600 mt-2">{getWaterSavingsFactoid(waterSavings)}</p>
        </div>
      </div>
    </div>
  );
};

export default Results;