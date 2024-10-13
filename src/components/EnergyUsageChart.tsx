import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Calendar, Zap, Droplet } from 'lucide-react';

const generateData = (period: string) => {
  const baseData = [
    { name: 'Jan', energy: 400, water: 300 },
    { name: 'Feb', energy: 380, water: 290 },
    { name: 'Mar', energy: 350, water: 280 },
    { name: 'Apr', energy: 320, water: 270 },
    { name: 'May', energy: 300, water: 260 },
    { name: 'Jun', energy: 290, water: 250 },
    { name: 'Jul', energy: 310, water: 280 },
    { name: 'Aug', energy: 330, water: 300 },
    { name: 'Sep', energy: 340, water: 290 },
    { name: 'Oct', energy: 360, water: 280 },
    { name: 'Nov', energy: 380, water: 290 },
    { name: 'Dec', energy: 410, water: 310 },
  ];

  if (period === 'last6months') {
    return baseData.slice(6);
  } else if (period === 'last3months') {
    return baseData.slice(9);
  }
  return baseData;
};

const EnergyUsageChart: React.FC = () => {
  const [period, setPeriod] = useState('last12months');
  const [data, setData] = useState(generateData('last12months'));

  useEffect(() => {
    setData(generateData(period));
  }, [period]);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4 flex items-center">
        <Calendar className="mr-2 text-green-600" /> Usage Trend
      </h3>
      <div className="mb-4">
        <select
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
          className="p-2 border rounded transition-colors duration-300 focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
        >
          <option value="last12months">Last 12 Months</option>
          <option value="last6months">Last 6 Months</option>
          <option value="last3months">Last 3 Months</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Legend />
          <Line yAxisId="left" type="monotone" dataKey="energy" stroke="#8884d8" activeDot={{ r: 8 }} name="Energy (kWh)" />
          <Line yAxisId="right" type="monotone" dataKey="water" stroke="#82ca9d" name="Water (Gallons)" />
        </LineChart>
      </ResponsiveContainer>
      <div className="mt-4 flex items-center justify-center space-x-4">
        <div className="flex items-center">
          <Zap className="mr-1 text-purple-500" size={18} />
          <span>Energy</span>
        </div>
        <div className="flex items-center">
          <Droplet className="mr-1 text-green-500" size={18} />
          <span>Water</span>
        </div>
      </div>
    </div>
  );
};

export default EnergyUsageChart;