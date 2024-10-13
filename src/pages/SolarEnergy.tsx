import React from 'react';
import { Sun, Battery, Home, Factory } from 'lucide-react';

const SolarEnergy: React.FC = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold mb-6">Solar Energy</h2>
      <div className="bg-yellow-100 p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold mb-4 flex items-center">
          <Sun className="mr-2 text-yellow-500" /> What is Solar Energy?
        </h3>
        <p className="mb-4">
          Solar energy is radiant light and heat from the Sun that is harnessed using a range of technologies such as solar heating, photovoltaics, solar thermal energy, solar architecture, molten salt power plants and artificial photosynthesis.
        </p>
        <p>
          It is an essential source of renewable energy, and its technologies are broadly characterized as either passive solar or active solar depending on how they capture and distribute solar energy or convert it into solar power.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Battery className="mr-2 text-green-500" /> Energy Storage
          </h3>
          <p>
            Solar energy can be stored in batteries or thermal storage systems, allowing for use during nighttime or cloudy days.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Home className="mr-2 text-blue-500" /> Residential Use
          </h3>
          <p>
            Solar panels on homes can significantly reduce or eliminate electricity bills and increase property value.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Factory className="mr-2 text-purple-500" /> Industrial Applications
          </h3>
          <p>
            Large-scale solar farms can power entire communities or industrial complexes, reducing reliance on fossil fuels.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SolarEnergy;