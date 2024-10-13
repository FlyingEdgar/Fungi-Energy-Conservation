import React from 'react';
import { Link } from 'react-router-dom';

const InvestingInAmericaAgenda: React.FC = () => {
  return (
    <div className="bg-green-50 p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Investing In America Agenda</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-blue-600">Save Energy. Save Money.</h3>
          <p className="text-gray-700">
            It's easier than ever to take control of your energy costs.
          </p>
          <Link to="/energy-savings-hub" className="text-blue-500 hover:underline">
            Visit our Energy Savings Hub.
          </Link>
          <img 
            src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            alt="Energy Savings"
            className="w-full h-48 object-cover rounded-lg mt-4"
          />
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-blue-600">Historic Clean Energy Investments</h3>
          <p className="text-gray-700">
            Bringing manufacturing back to America after decades of offshoring.
          </p>
          <Link to="/progress-hub" className="text-blue-500 hover:underline">
            Visit our progress hub.
          </Link>
          <img 
            src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            alt="Clean Energy Investments"
            className="w-full h-48 object-cover rounded-lg mt-4"
          />
        </div>
      </div>
    </div>
  );
};

export default InvestingInAmericaAgenda;