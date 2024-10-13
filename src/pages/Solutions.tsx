import React from 'react';
import { Lightbulb, Droplet, Zap, Recycle, Leaf, Home } from 'lucide-react';

const Solution: React.FC<{ title: string; description: string; icon: React.ReactNode; tips: string[]; image: string }> = ({ title, description, icon, tips, image }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl font-semibold ml-2">{title}</h3>
      </div>
      <p className="mb-4">{description}</p>
      <h4 className="font-semibold mb-2">Tips:</h4>
      <ul className="list-disc pl-5">
        {tips.map((tip, index) => (
          <li key={index} className="mb-1">{tip}</li>
        ))}
      </ul>
    </div>
  </div>
);

const Solutions: React.FC = () => {
  const solutions = [
    {
      title: "Smart Home Technology",
      description: "Implement smart devices to optimize energy usage based on your habits and preferences.",
      icon: <Home className="text-blue-500" size={24} />,
      tips: [
        "Install a smart thermostat to automatically adjust temperature",
        "Use smart power strips to cut off phantom energy use",
        "Implement smart lighting systems with motion sensors"
      ],
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Water Conservation",
      description: "Reduce water consumption through efficient practices and technology.",
      icon: <Droplet className="text-blue-500" size={24} />,
      tips: [
        "Install low-flow showerheads and faucet aerators",
        "Use drought-resistant plants in landscaping",
        "Collect rainwater for garden irrigation"
      ],
      image: "https://images.unsplash.com/photo-1527672809634-04ed36500acd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Renewable Energy",
      description: "Harness clean, renewable energy sources to power your home or community.",
      icon: <Zap className="text-yellow-500" size={24} />,
      tips: [
        "Install solar panels on your roof",
        "Consider a small wind turbine if you have enough space",
        "Look into community solar projects in your area"
      ],
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Waste Reduction",
      description: "Minimize waste production and maximize recycling efforts.",
      icon: <Recycle className="text-green-700" size={24} />,
      tips: [
        "Start composting kitchen scraps and yard waste",
        "Use reusable bags, bottles, and containers",
        "Properly sort recyclables and learn local recycling guidelines"
      ],
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Energy-Efficient Appliances",
      description: "Upgrade to appliances that consume less energy without sacrificing performance.",
      icon: <Lightbulb className="text-orange-500" size={24} />,
      tips: [
        "Look for ENERGY STAR certified products",
        "Replace old refrigerators and freezers",
        "Use a clothesline or drying rack instead of a dryer when possible"
      ],
      image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Sustainable Transportation",
      description: "Reduce your carbon footprint by choosing eco-friendly transportation options.",
      icon: <Leaf className="text-green-500" size={24} />,
      tips: [
        "Use public transportation or carpool when possible",
        "Consider an electric or hybrid vehicle for your next car",
        "Bike or walk for short trips"
      ],
      image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  return (
    <div>
      <div className="relative h-64 mb-8 rounded-lg overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
          alt="Energy Conservation Solutions"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h2 className="text-4xl font-bold text-white">Energy Conservation Solutions</h2>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {solutions.map((solution, index) => (
          <Solution key={index} {...solution} />
        ))}
      </div>
    </div>
  );
};

export default Solutions;