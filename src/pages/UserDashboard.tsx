import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BarChart, Battery, Droplet, Award, Zap } from 'lucide-react';
import ProgressBar from '../components/ProgressBar';
import EnergySavingTips from '../components/EnergySavingTips';

const UserDashboard: React.FC = () => {
  const [energyUsage, setEnergyUsage] = useState(0);
  const [waterUsage, setWaterUsage] = useState(0);
  const [costSavings, setCostSavings] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulating data fetch from an API
    setTimeout(() => {
      setEnergyUsage(250);
      setWaterUsage(1000);
      setCostSavings(50);
      setProgress(65);
    }, 1000);
  }, []);

  const achievements = [
    { name: 'Energy Saver', icon: <Zap className="text-yellow-500" /> },
    { name: 'Water Conserver', icon: <Droplet className="text-blue-500" /> },
    { name: 'Green Champion', icon: <Award className="text-green-500" /> },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-6">User Dashboard</h1>
      
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Battery className="mr-2 text-green-500" /> Energy Usage
          </h2>
          <p className="text-3xl font-bold">{energyUsage} kWh</p>
          <p className="text-sm text-gray-500">This month</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Droplet className="mr-2 text-blue-500" /> Water Usage
          </h2>
          <p className="text-3xl font-bold">{waterUsage} Gallons</p>
          <p className="text-sm text-gray-500">This month</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <BarChart className="mr-2 text-purple-500" /> Cost Savings
          </h2>
          <p className="text-3xl font-bold">${costSavings}</p>
          <p className="text-sm text-gray-500">This month</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Progress Towards Goal</h2>
        <ProgressBar progress={progress} />
        <p className="mt-2 text-sm text-gray-500">You're {progress}% of the way to your monthly goal!</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Achievements</h2>
        <div className="flex space-x-4">
          {achievements.map((achievement, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-gray-100 p-3 rounded-full mb-2">
                {achievement.icon}
              </div>
              <span className="text-sm">{achievement.name}</span>
            </div>
          ))}
        </div>
      </div>

      <EnergySavingTips />

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
        <div className="grid grid-cols-2 gap-4">
          <Link to="/advanced-calculator" className="btn btn-primary">Advanced Calculator</Link>
          <Link to="/data" className="btn btn-secondary">Data Visualization</Link>
          <Link to="/solutions" className="btn btn-primary">Energy Solutions</Link>
          <Link to="/posts" className="btn btn-secondary">Community Posts</Link>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;