import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedTopics: React.FC = () => {
  const topics = [
    {
      title: 'Energy Efficiency',
      description: 'Learn how to reduce energy consumption and save money.',
      link: '/solutions#energy-efficiency',
    },
    {
      title: 'Renewable Energy',
      description: 'Explore clean energy sources for a sustainable future.',
      link: '/solutions#renewable-energy',
    },
    {
      title: 'Electric Vehicles',
      description: 'Discover the benefits of switching to electric transportation.',
      link: '/solutions#electric-vehicles',
    },
    {
      title: 'Smart Grid Technology',
      description: 'Understand how smart grids are revolutionizing energy distribution.',
      link: '/solutions#smart-grid',
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Featured Topics</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {topics.map((topic, index) => (
          <div key={index} className="border p-4 rounded-lg hover:shadow-md transition-all duration-300 transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">{topic.title}</h3>
            <p className="text-gray-600 mb-4">{topic.description}</p>
            <Link
              to={topic.link}
              className="btn btn-primary inline-flex items-center btn-pulse"
            >
              Learn more <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedTopics;