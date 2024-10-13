import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Calculator, Award, ArrowRight, Zap, Droplet, Leaf, BarChart, Wind, FileText, MessageSquare, CloudRain, Recycle } from 'lucide-react';
import EnergySavingTips from '../components/EnergySavingTips';
import ProgressBar from '../components/ProgressBar';
import EnergyUsageChart from '../components/EnergyUsageChart';

const NewHome: React.FC = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to Fungi Energy Conservation</h1>
      
      <section className="bg-green-50 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Your Energy Dashboard</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2 flex items-center">
                <Zap className="mr-2 text-yellow-500" /> Energy Savings Progress
              </h3>
              <ProgressBar progress={65} color="bg-yellow-500" />
              <p className="mt-1 text-sm">You've saved 65% of your energy goal this month!</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 flex items-center">
                <Droplet className="mr-2 text-blue-500" /> Water Savings Progress
              </h3>
              <ProgressBar progress={40} color="bg-blue-500" />
              <p className="mt-1 text-sm">You've saved 40% of your water goal this month!</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 flex items-center">
                <CloudRain className="mr-2 text-green-500" /> Carbon Footprint Reduction
              </h3>
              <ProgressBar progress={30} color="bg-green-500" />
              <p className="mt-1 text-sm">You've reduced your carbon footprint by 30% this year!</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 flex items-center">
                <Recycle className="mr-2 text-purple-500" /> Renewable Energy Usage
              </h3>
              <ProgressBar progress={50} color="bg-purple-500" />
              <p className="mt-1 text-sm">50% of your energy comes from renewable sources!</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Energy Usage Trend</h3>
            <EnergyUsageChart />
          </div>
        </div>
        <Link to="/advanced-calculator" className="mt-4 inline-flex items-center text-green-600 hover:text-green-800">
          <Calculator className="mr-2" /> Use Advanced Calculator
          <ArrowRight className="ml-1" size={16} />
        </Link>
      </section>

      {/* Rest of the component remains unchanged */}
      <section className="bg-blue-50 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Energy Conservation Solutions</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: <Sun className="text-yellow-500" />, title: "Solar Energy", link: "/energy/solar" },
            { icon: <Wind className="text-blue-500" />, title: "Wind Energy", link: "/energy/wind" },
            { icon: <Droplet className="text-blue-400" />, title: "Hydropower", link: "/energy/hydropower" },
            { icon: <Zap className="text-red-500" />, title: "Geothermal", link: "/energy/geothermal" },
          ].map((item, index) => (
            <Link key={index} to={item.link} className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="flex items-center">
                {item.icon}
                <span className="ml-2 font-semibold">{item.title}</span>
              </div>
            </Link>
          ))}
        </div>
        <Link to="/solutions" className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800">
          <Leaf className="mr-2" /> Explore All Solutions
          <ArrowRight className="ml-1" size={16} />
        </Link>
      </section>

      <section className="bg-yellow-50 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Community and Reports</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Community Posts</h3>
            <p>Connect with other energy conservationists and share your experiences.</p>
            <Link to="/posts" className="mt-2 inline-flex items-center text-yellow-600 hover:text-yellow-800">
              <MessageSquare className="mr-2" /> View Community Posts
              <ArrowRight className="ml-1" size={16} />
            </Link>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">UN Reports</h3>
            <p>Stay informed with the latest United Nations reports on energy and environment.</p>
            <Link to="/un-reports" className="mt-2 inline-flex items-center text-yellow-600 hover:text-yellow-800">
              <FileText className="mr-2" /> Read UN Reports
              <ArrowRight className="ml-1" size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-purple-50 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Data Visualization</h2>
        <p>Explore interactive charts and graphs to better understand energy consumption patterns.</p>
        <Link to="/data" className="mt-2 inline-flex items-center text-purple-600 hover:text-purple-800">
          <BarChart className="mr-2" /> View Data Visualizations
          <ArrowRight className="ml-1" size={16} />
        </Link>
      </section>

      <section className="bg-orange-50 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Your Achievements</h2>
        <p>Track your progress and earn badges for your energy conservation efforts.</p>
        <Link to="/achievements" className="mt-2 inline-flex items-center text-orange-600 hover:text-orange-800">
          <Award className="mr-2" /> View Your Achievements
          <ArrowRight className="ml-1" size={16} />
        </Link>
      </section>

      <EnergySavingTips />
    </div>
  );
};

export default NewHome;