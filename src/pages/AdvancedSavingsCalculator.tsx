import React, { useState } from 'react';
import { PlusCircle, MinusCircle, Calculator, Download, Share2, Zap, Droplet, Apple } from 'lucide-react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface ElectricAppliance {
  id: number;
  name: string;
  power: number;
  hours: number;
}

interface WaterAppliance {
  id: number;
  name: string;
  flowRate: number;
  minutes: number;
}

interface FoodItem {
  id: number;
  name: string;
  quantity: number;
  carbonFootprint: number;
}

const AdvancedSavingsCalculator: React.FC = () => {
  const [electricAppliances, setElectricAppliances] = useState<ElectricAppliance[]>([
    { id: 1, name: 'Refrigerator', power: 150, hours: 24 },
    { id: 2, name: 'TV', power: 100, hours: 4 },
  ]);

  const [waterAppliances, setWaterAppliances] = useState<WaterAppliance[]>([
    { id: 1, name: 'Shower', flowRate: 2.1, minutes: 10 },
    { id: 2, name: 'Washing Machine', flowRate: 50, minutes: 45 },
  ]);

  const [foodItems, setFoodItems] = useState<FoodItem[]>([
    { id: 1, name: 'Beef', quantity: 1, carbonFootprint: 60 },
    { id: 2, name: 'Vegetables', quantity: 2, carbonFootprint: 2 },
  ]);

  const [activeTab, setActiveTab] = useState<'electric' | 'water' | 'food'>('electric');

  const addItem = (type: 'electric' | 'water' | 'food') => {
    switch (type) {
      case 'electric':
        setElectricAppliances([...electricAppliances, { id: Date.now(), name: '', power: 0, hours: 0 }]);
        break;
      case 'water':
        setWaterAppliances([...waterAppliances, { id: Date.now(), name: '', flowRate: 0, minutes: 0 }]);
        break;
      case 'food':
        setFoodItems([...foodItems, { id: Date.now(), name: '', quantity: 0, carbonFootprint: 0 }]);
        break;
    }
  };

  const removeItem = (id: number, type: 'electric' | 'water' | 'food') => {
    switch (type) {
      case 'electric':
        setElectricAppliances(electricAppliances.filter(item => item.id !== id));
        break;
      case 'water':
        setWaterAppliances(waterAppliances.filter(item => item.id !== id));
        break;
      case 'food':
        setFoodItems(foodItems.filter(item => item.id !== id));
        break;
    }
  };

  const updateItem = (id: number, field: string, value: string | number, type: 'electric' | 'water' | 'food') => {
    switch (type) {
      case 'electric':
        setElectricAppliances(electricAppliances.map(item =>
          item.id === id ? { ...item, [field]: typeof value === 'string' ? value : Number(value) } : item
        ));
        break;
      case 'water':
        setWaterAppliances(waterAppliances.map(item =>
          item.id === id ? { ...item, [field]: typeof value === 'string' ? value : Number(value) } : item
        ));
        break;
      case 'food':
        setFoodItems(foodItems.map(item =>
          item.id === id ? { ...item, [field]: typeof value === 'string' ? value : Number(value) } : item
        ));
        break;
    }
  };

  const calculateTotalUsage = (type: 'electric' | 'water' | 'food') => {
    switch (type) {
      case 'electric':
        return electricAppliances.reduce((total, appliance) => total + (appliance.power * appliance.hours) / 1000, 0);
      case 'water':
        return waterAppliances.reduce((total, appliance) => total + (appliance.flowRate * appliance.minutes), 0);
      case 'food':
        return foodItems.reduce((total, item) => total + (item.quantity * item.carbonFootprint), 0);
    }
  };

  const getChartData = (type: 'electric' | 'water' | 'food') => {
    let data: { labels: string[], datasets: { data: number[], backgroundColor: string[] }[] };
    const colors = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#FF8C00', '#20B2AA', '#8A2BE2', '#00CED1'];

    switch (type) {
      case 'electric':
        data = {
          labels: electricAppliances.map(a => a.name),
          datasets: [{
            data: electricAppliances.map(a => (a.power * a.hours) / 1000),
            backgroundColor: colors.slice(0, electricAppliances.length),
          }]
        };
        break;
      case 'water':
        data = {
          labels: waterAppliances.map(a => a.name),
          datasets: [{
            data: waterAppliances.map(a => a.flowRate * a.minutes),
            backgroundColor: colors.slice(0, waterAppliances.length),
          }]
        };
        break;
      case 'food':
        data = {
          labels: foodItems.map(i => i.name),
          datasets: [{
            data: foodItems.map(i => i.quantity * i.carbonFootprint),
            backgroundColor: colors.slice(0, foodItems.length),
          }]
        };
        break;
    }

    return data;
  };

  const chartOptions = {
    plugins: {
      legend: {
        position: 'right' as const,
        labels: {
          boxWidth: 20,
          padding: 20,
        },
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            const label = context.label || '';
            const value = context.raw || 0;
            const total = context.dataset.data.reduce((acc: number, curr: number) => acc + curr, 0);
            const percentage = ((value / total) * 100).toFixed(2);
            return `${label}: ${value.toFixed(2)} ${activeTab === 'electric' ? 'kWh' : activeTab === 'water' ? 'Gallons' : 'kg CO2e'} (${percentage}%)`;
          },
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold mb-6">Advanced Savings Calculator</h1>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex mb-4">
          <button
            className={`flex-1 py-2 px-4 ${activeTab === 'electric' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('electric')}
          >
            <Zap className="inline-block mr-2" /> Electricity
          </button>
          <button
            className={`flex-1 py-2 px-4 ${activeTab === 'water' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('water')}
          >
            <Droplet className="inline-block mr-2" /> Water
          </button>
          <button
            className={`flex-1 py-2 px-4 ${activeTab === 'food' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('food')}
          >
            <Apple className="inline-block mr-2" /> Food
          </button>
        </div>

        <h2 className="text-xl font-semibold mb-4">
          Add Your {activeTab === 'electric' ? 'Appliances' : activeTab === 'water' ? 'Water Usage' : 'Food Items'}
        </h2>
        
        {activeTab === 'electric' && (
          electricAppliances.map((appliance) => (
            <div key={appliance.id} className="flex items-center space-x-4 mb-4">
              <input
                type="text"
                value={appliance.name}
                onChange={(e) => updateItem(appliance.id, 'name', e.target.value, 'electric')}
                placeholder="Appliance name"
                className="flex-grow p-2 border rounded"
              />
              <input
                type="number"
                value={appliance.power}
                onChange={(e) => updateItem(appliance.id, 'power', e.target.value, 'electric')}
                placeholder="Power (watts)"
                className="w-32 p-2 border rounded"
              />
              <input
                type="number"
                value={appliance.hours}
                onChange={(e) => updateItem(appliance.id, 'hours', e.target.value, 'electric')}
                placeholder="Hours per day"
                className="w-32 p-2 border rounded"
              />
              <button onClick={() => removeItem(appliance.id, 'electric')} className="text-red-500">
                <MinusCircle size={24} />
              </button>
            </div>
          ))
        )}
        
        {activeTab === 'water' && (
          waterAppliances.map((appliance) => (
            <div key={appliance.id} className="flex items-center space-x-4 mb-4">
              <input
                type="text"
                value={appliance.name}
                onChange={(e) => updateItem(appliance.id, 'name', e.target.value, 'water')}
                placeholder="Usage name"
                className="flex-grow p-2 border rounded"
              />
              <input
                type="number"
                value={appliance.flowRate}
                onChange={(e) => updateItem(appliance.id, 'flowRate', e.target.value, 'water')}
                placeholder="Flow rate (GPM)"
                className="w-32 p-2 border rounded"
              />
              <input
                type="number"
                value={appliance.minutes}
                onChange={(e) => updateItem(appliance.id, 'minutes', e.target.value, 'water')}
                placeholder="Minutes per day"
                className="w-32 p-2 border rounded"
              />
              <button onClick={() => removeItem(appliance.id, 'water')} className="text-red-500">
                <MinusCircle size={24} />
              </button>
            </div>
          ))
        )}
        
        {activeTab === 'food' && (
          foodItems.map((item) => (
            <div key={item.id} className="flex items-center space-x-4 mb-4">
              <input
                type="text"
                value={item.name}
                onChange={(e) => updateItem(item.id, 'name', e.target.value, 'food')}
                placeholder="Food item name"
                className="flex-grow p-2 border rounded"
              />
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => updateItem(item.id, 'quantity', e.target.value, 'food')}
                placeholder="Quantity (kg)"
                className="w-32 p-2 border rounded"
              />
              <input
                type="number"
                value={item.carbonFootprint}
                onChange={(e) => updateItem(item.id, 'carbonFootprint', e.target.value, 'food')}
                placeholder="Carbon Footprint (kg CO2e/kg)"
                className="w-48 p-2 border rounded"
              />
              <button onClick={() => removeItem(item.id, 'food')} className="text-red-500">
                <MinusCircle size={24} />
              </button>
            </div>
          ))
        )}
        
        <button onClick={() => addItem(activeTab)} className="flex items-center text-green-500">
          <PlusCircle size={24} className="mr-2" /> 
          Add {activeTab === 'electric' ? 'Appliance' : activeTab === 'water' ? 'Water Usage' : 'Food Item'}
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">
          {activeTab === 'electric' ? 'Energy' : activeTab === 'water' ? 'Water' : 'Food Carbon Footprint'} Usage Breakdown
        </h2>
        <div className="h-96">
          <Pie data={getChartData(activeTab)} options={chartOptions} />
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Results</h2>
        <p className="text-2xl font-bold">
          Total Daily Usage: {calculateTotalUsage(activeTab).toFixed(2)} {' '}
          {activeTab === 'electric' ? 'kWh' : activeTab === 'water' ? 'Gallons' : 'kg CO2e'}
        </p>
        {activeTab !== 'food' && (
          <p className="text-lg">
            Estimated Monthly Cost: $
            {(calculateTotalUsage(activeTab) * 30 * (activeTab === 'electric' ? 0.12 : 0.005)).toFixed(2)}
          </p>
        )}
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Energy-Saving Recommendations</h2>
        <ul className="list-disc pl-5">
          <li>Consider replacing old appliances with energy-efficient models.</li>
          <li>Reduce usage time of high-energy consuming devices.</li>
          <li>Use smart power strips to eliminate standby power consumption.</li>
          <li>Adjust thermostat settings to optimize heating and cooling.</li>
        </ul>
      </div>

      <div className="flex space-x-4">
        <button className="btn btn-primary flex items-center">
          <Download size={18} className="mr-2" /> Download Report
        </button>
        <button className="btn btn-secondary flex items-center">
          <Share2 size={18} className="mr-2" /> Share Results
        </button>
      </div>
    </div>
  );
};

export default AdvancedSavingsCalculator;