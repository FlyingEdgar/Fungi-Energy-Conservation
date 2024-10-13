import React from 'react';
import { Sun, Wind, Droplet, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const CleanEnergySection: React.FC = () => {
  const cleanEnergySources = [
    { name: 'Solar', icon: <Sun className="text-yellow-500" size={40} />, path: '/energy/solar', image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
    { name: 'Wind', icon: <Wind className="text-blue-500" size={40} />, path: '/energy/wind', image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
    { name: 'Hydropower', icon: <Droplet className="text-blue-400" size={40} />, path: '/energy/hydropower', image: 'https://images.unsplash.com/photo-1586349906319-47f6f3f41137?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
    { name: 'Geothermal', icon: <Zap className="text-red-500" size={40} />, path: '/energy/geothermal', image: 'https://images.unsplash.com/photo-1585516436259-5d4833cb7f8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
  ];

  return (
    <div className="animated-bg text-white p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6">Clean Energy for a Sustainable Future</h2>
      <p className="text-lg mb-8">
        Discover the power of clean, renewable energy sources that are shaping our sustainable future.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cleanEnergySources.map((source, index) => (
          <Link key={index} to={source.path} className="group">
            <div className="relative overflow-hidden rounded-lg shadow-md transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-xl">
              <img src={source.image} alt={source.name} className="w-full h-48 object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-opacity duration-300 group-hover:bg-opacity-20">
                <div className="text-center">
                  <div className="bg-white p-3 rounded-full inline-block mb-2 transition-transform duration-300 group-hover:scale-110">
                    {source.icon}
                  </div>
                  <span className="block text-xl font-semibold group-hover:underline">{source.name}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CleanEnergySection;