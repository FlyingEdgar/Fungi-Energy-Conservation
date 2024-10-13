import React from 'react';
import { Wind, Zap, Mountain, Sailboat } from 'lucide-react';

const WindEnergy: React.FC = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold mb-6">Wind Energy</h2>
      <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold mb-4 flex items-center">
          <Wind className="mr-2 text-blue-500" /> What is Wind Energy?
        </h3>
        <p className="mb-4">
          Wind energy is the use of air flow through wind turbines to mechanically power generators for electricity. Wind power is a popular sustainable, renewable energy source that has a much smaller impact on the environment compared to burning fossil fuels.
        </p>
        <p>
          Modern wind turbines are used to capture kinetic energy from the wind and generate electricity for homes, businesses, and industries.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Zap className="mr-2 text-yellow-500" /> Power Generation
          </h3>
          <p>
            Wind farms can produce large amounts of electricity, rivaling traditional power plants without harmful emissions.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Mountain className="mr-2 text-green-500" /> Onshore Wind Farms
          </h3>
          <p>
            Onshore wind farms are more common and less expensive to build and maintain than offshore installations.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Sailboat className="mr-2 text-blue-500" /> Offshore Wind Farms
          </h3>
          <p>
            Offshore wind farms can harness stronger, more consistent winds, though they are more challenging to construct.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WindEnergy;