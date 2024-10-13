import React, { useState, useEffect } from 'react';
import EnergyCalculator from '../components/EnergyCalculator';
import WaterCalculator from '../components/WaterCalculator';
import Results from '../components/Results';
import ConservationMap from '../components/ConservationMap';
import EnergySavingTips from '../components/EnergySavingTips';
import EnergyUsageChart from '../components/EnergyUsageChart';
import CarbonFootprintCalculator from '../components/CarbonFootprintCalculator';
import MediaReports from '../components/MediaReports';
import CleanEnergySection from '../components/CleanEnergySection';
import FeaturedTopics from '../components/FeaturedTopics';
import InvestingInAmericaAgenda from '../components/InvestingInAmericaAgenda';
import ProgressBar from '../components/ProgressBar';

const Home: React.FC = () => {
  const [energySavings, setEnergySavings] = useState(0);
  const [waterSavings, setWaterSavings] = useState(0);
  const [carbonFootprint, setCarbonFootprint] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate progress based on energy and water savings
    const totalSavings = energySavings + waterSavings;
    const newProgress = Math.min(100, Math.round((totalSavings / 1000) * 100));
    setProgress(newProgress);
  }, [energySavings, waterSavings]);

  return (
    <div className="space-y-8 animate-fadeIn">
      <h1 className="text-4xl font-bold mb-8 text-center">Energy Conservation Dashboard</h1>
      
      <InvestingInAmericaAgenda />
      
      <ProgressBar progress={progress} />
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="transition-all duration-300 hover:shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Energy Savings</h2>
          <EnergyCalculator setEnergySavings={setEnergySavings} />
        </div>
        <div className="transition-all duration-300 hover:shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Water Savings</h2>
          <WaterCalculator setWaterSavings={setWaterSavings} />
        </div>
      </div>
      
      <Results energySavings={energySavings} waterSavings={waterSavings} />
      
      <CleanEnergySection />
      
      <div className="grid md:grid-cols-2 gap-8">
        <EnergyUsageChart />
        <MediaReports />
      </div>
      
      <CarbonFootprintCalculator setCarbonFootprint={setCarbonFootprint} />
      
      <ConservationMap />
      
      <EnergySavingTips />
      
      <FeaturedTopics />
    </div>
  );
};

export default Home;