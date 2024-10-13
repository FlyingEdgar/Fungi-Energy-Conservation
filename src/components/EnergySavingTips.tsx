import React, { useState, useEffect } from 'react';
import { Lightbulb } from 'lucide-react';

const tips = [
  "Use LED bulbs instead of incandescent ones.",
  "Unplug electronics when not in use to avoid phantom energy consumption.",
  "Use natural light when possible and turn off lights in unoccupied rooms.",
  "Adjust your thermostat: lower in winter, higher in summer.",
  "Use energy-efficient appliances with ENERGY STAR certification.",
  "Seal air leaks around windows and doors to improve insulation.",
  "Use a programmable thermostat to automatically adjust temperature.",
  "Clean or replace air filters regularly for better HVAC efficiency.",
  "Use cold water for laundry when possible to save on water heating costs.",
  "Install low-flow showerheads to reduce hot water usage.",
];

const EnergySavingTips: React.FC = () => {
  const [currentTip, setCurrentTip] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const getRandomTip = () => {
      const randomIndex = Math.floor(Math.random() * tips.length);
      setIsVisible(false);
      setTimeout(() => {
        setCurrentTip(tips[randomIndex]);
        setIsVisible(true);
      }, 500);
    };

    getRandomTip();
    const interval = setInterval(getRandomTip, 10000); // Change tip every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-8 bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
      <h2 className="text-2xl font-semibold mb-4 flex items-center">
        <Lightbulb className="mr-2 text-yellow-500" /> Energy Saving Tip
      </h2>
      <p className={`text-lg italic transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        {currentTip}
      </p>
    </div>
  );
};

export default EnergySavingTips;