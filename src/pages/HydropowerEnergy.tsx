import React from 'react';
import { Droplet, Zap, Mountain, BarChart } from 'lucide-react';

const HydropowerEnergy: React.FC = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold mb-6">Hydropower Energy</h2>
      <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold mb-4 flex items-center">
          <Droplet className="mr-2 text-blue-500" /> What is Hydropower Energy?
        </h3>
        <p className="mb-4">
          Hydropower or hydroelectric power is electricity produced from generators driven by turbines that convert the potential energy of falling or fast-flowing water into mechanical energy.
        </p>
        <p>
          It is a flexible source of electricity since plants can be ramped up and down very quickly to adapt to changing energy demands.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Zap className="mr-2 text-yellow-500" /> Reliable Power
          </h3>
          <p>
            Hydropower provides a reliable source of energy, as it can be quickly adjusted to meet fluctuating electricity demands.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Mountain className="mr-2 text-green-500" /> Environmental Impact
          </h3>
          <p>
            While clean, large hydropower projects can affect local ecosystems. Modern designs aim to minimize these impacts.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <BarChart className="mr-2 text-blue-500" /> Economic Benefits
          </h3>
          <p>
            Hydropower installations can provide flood control, irrigation, and water supply benefits in addition to electricity generation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HydropowerEnergy;