import React from 'react';
import { Thermometer, Home, Factory, Leaf } from 'lucide-react';

const GeothermalEnergy: React.FC = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold mb-6">Geothermal Energy</h2>
      <div className="bg-red-100 p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold mb-4 flex items-center">
          <Thermometer className="mr-2 text-red-500" /> What is Geothermal Energy?
        </h3>
        <p className="mb-4">
          Geothermal energy is heat derived from the sub-surface of the earth. It is contained in the rocks and fluids beneath the earth's crust and can be extracted to generate clean electricity or to be used directly for heating.
        </p>
        <p>
          This energy source is renewable, as heat is continuously produced inside the earth.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Home className="mr-2 text-blue-500" /> Residential Use
          </h3>
          <p>
            Geothermal heat pumps can be used to heat and cool homes efficiently, reducing energy costs and carbon footprint.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Factory className="mr-2 text-purple-500" /> Industrial Applications
          </h3>
          <p>
            Geothermal power plants can provide baseload power, operating 24/7 to produce electricity for industrial use.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Leaf className="mr-2 text-green-500" /> Environmental Benefits
          </h3>
          <p>
            Geothermal energy production emits very low levels of greenhouse gases and has a small land footprint compared to other energy sources.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GeothermalEnergy;