import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from 'recharts';
import { Calendar, PieChartIcon, Map, Sun, Wind, Droplet } from 'lucide-react';

const DataVisualization: React.FC = () => {
  const [usageData, setUsageData] = useState([]);
  const [comparisonData, setComparisonData] = useState([]);
  const [renewableData, setRenewableData] = useState([]);

  useEffect(() => {
    // Simulating data fetch from an API
    setTimeout(() => {
      setUsageData([
        { name: 'Jan', energy: 400, water: 240, solar: 50 },
        { name: 'Feb', energy: 300, water: 220, solar: 60 },
        { name: 'Mar', energy: 200, water: 180, solar: 80 },
        { name: 'Apr', energy: 278, water: 190, solar: 90 },
        { name: 'May', energy: 189, water: 170, solar: 120 },
        { name: 'Jun', energy: 239, water: 200, solar: 140 },
      ]);

      setComparisonData([
        { name: 'Lighting', value: 400 },
        { name: 'Heating', value: 300 },
        { name: 'Cooling', value: 300 },
        { name: 'Appliances', value: 200 },
        { name: 'Electronics', value: 150 },
      ]);

      setRenewableData([
        { name: 'Solar', value: 450 },
        { name: 'Wind', value: 300 },
        { name: 'Hydro', value: 200 },
        { name: 'Geothermal', value: 50 },
      ]);
    }, 1000);
  }, []);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];
  const RENEWABLE_COLORS = ['#FDB813', '#81C784', '#4FC3F7', '#FF8A65'];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold mb-6">Data Visualization</h1>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <Calendar className="mr-2 text-blue-500" /> Energy and Water Usage Trends
        </h2>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={usageData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Line yAxisId="left" type="monotone" dataKey="energy" stroke="#8884d8" activeDot={{ r: 8 }} name="Energy (kWh)" />
            <Line yAxisId="right" type="monotone" dataKey="water" stroke="#82ca9d" name="Water (Gallons)" />
            <Line yAxisId="left" type="monotone" dataKey="solar" stroke="#ffc658" name="Solar Energy (kWh)" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <PieChartIcon className="mr-2 text-green-500" /> Energy Usage Comparison
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={comparisonData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {comparisonData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Sun className="mr-2 text-yellow-500" /> Renewable Energy Sources
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={renewableData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8">
                {renewableData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={RENEWABLE_COLORS[index % RENEWABLE_COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <Map className="mr-2 text-red-500" /> Geographical Impact
        </h2>
        <div className="relative w-full h-96">
          <svg viewBox="0 0 800 450" className="w-full h-full">
            {/* Simple USA map outline */}
            <path
              d="M50,200 C100,100 200,50 300,50 C400,50 500,100 550,200 C600,300 700,350 750,300"
              fill="none"
              stroke="#ccc"
              strokeWidth="2"
            />
            {/* Example data points */}
            <circle cx="150" cy="150" r="20" fill="#FF6384" opacity="0.7" />
            <circle cx="300" cy="100" r="15" fill="#36A2EB" opacity="0.7" />
            <circle cx="450" cy="200" r="25" fill="#FFCE56" opacity="0.7" />
            <circle cx="600" cy="150" r="18" fill="#4BC0C0" opacity="0.7" />
          </svg>
          <div className="absolute top-2 left-2 bg-white p-2 rounded shadow">
            <h3 className="font-semibold mb-1">Legend</h3>
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-red-400"></span>
              <span>High Impact</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
              <span>Medium Impact</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-green-400"></span>
              <span>Low Impact</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Environmental Impact</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-3xl font-bold text-green-600">500 kg</p>
            <p className="text-gray-600">CO2 Emissions Reduced</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-blue-600">25 Trees</p>
            <p className="text-gray-600">Equivalent Trees Planted</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-yellow-600">2 Months</p>
            <p className="text-gray-600">Car Usage Offset</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataVisualization;