import React from 'react';
import { Award, Zap, Droplet, TreeDeciduous, Recycle, Target } from 'lucide-react';

interface Achievement {
  icon: React.ReactNode;
  title: string;
  description: string;
  progress: number;
}

const UserAchievements: React.FC = () => {
  const achievements: Achievement[] = [
    {
      icon: <Zap className="text-yellow-500" size={32} />,
      title: "Energy Saver",
      description: "Reduce your energy consumption by 20%",
      progress: 75,
    },
    {
      icon: <Droplet className="text-blue-500" size={32} />,
      title: "Water Conserver",
      description: "Save 1000 gallons of water",
      progress: 60,
    },
    {
      icon: <TreeDeciduous className="text-green-500" size={32} />,
      title: "Carbon Reducer",
      description: "Reduce your carbon footprint by 1 ton",
      progress: 40,
    },
    {
      icon: <Recycle className="text-green-600" size={32} />,
      title: "Recycling Champion",
      description: "Recycle 100 lbs of waste",
      progress: 90,
    },
    {
      icon: <Target className="text-red-500" size={32} />,
      title: "Goal Setter",
      description: "Set and achieve 5 energy-saving goals",
      progress: 80,
    },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold mb-6">Your Achievements</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Award className="mr-2 text-yellow-500" /> Your Progress
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                {achievement.icon}
                <h3 className="text-xl font-semibold ml-2">{achievement.title}</h3>
              </div>
              <p className="text-gray-600 mb-2">{achievement.description}</p>
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200">
                      Progress
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-green-600">
                      {achievement.progress}%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
                  <div style={{ width: `${achievement.progress}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Recent Milestones</h2>
        <ul className="space-y-2">
          <li className="flex items-center">
            <Zap className="text-yellow-500 mr-2" />
            <span>Reduced energy consumption by 15% this month</span>
          </li>
          <li className="flex items-center">
            <Droplet className="text-blue-500 mr-2" />
            <span>Saved 500 gallons of water in the last week</span>
          </li>
          <li className="flex items-center">
            <TreeDeciduous className="text-green-500 mr-2" />
            <span>Planted 5 trees in your community</span>
          </li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Next Challenges</h2>
        <ul className="space-y-2">
          <li className="flex items-center">
            <Target className="text-red-500 mr-2" />
            <span>Reduce your energy bill by 25% in the next 3 months</span>
          </li>
          <li className="flex items-center">
            <Recycle className="text-green-600 mr-2" />
            <span>Start a community recycling program</span>
          </li>
          <li className="flex items-center">
            <Zap className="text-yellow-500 mr-2" />
            <span>Switch to 100% renewable energy sources</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserAchievements;