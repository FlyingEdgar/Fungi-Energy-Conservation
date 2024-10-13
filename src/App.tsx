import React, { Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Leaf, Lightbulb, MessageSquare, FileText, User, BarChart, Calculator, Award, Menu, Home as HomeIcon } from 'lucide-react';
import LoadingSpinner from './components/LoadingSpinner';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy load components
const NewHome = React.lazy(() => import('./pages/NewHome'));
const Solutions = React.lazy(() => import('./pages/Solutions'));
const UserPosts = React.lazy(() => import('./pages/UserPosts'));
const UNReports = React.lazy(() => import('./pages/UNReports'));
const SolarEnergy = React.lazy(() => import('./pages/SolarEnergy'));
const WindEnergy = React.lazy(() => import('./pages/WindEnergy'));
const HydropowerEnergy = React.lazy(() => import('./pages/HydropowerEnergy'));
const GeothermalEnergy = React.lazy(() => import('./pages/GeothermalEnergy'));
const UserDashboard = React.lazy(() => import('./pages/UserDashboard'));
const DataVisualization = React.lazy(() => import('./pages/DataVisualization'));
const AdvancedSavingsCalculator = React.lazy(() => import('./pages/AdvancedSavingsCalculator'));
const UserAchievements = React.lazy(() => import('./pages/UserAchievements'));

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { to: "/", icon: <HomeIcon className="mr-1" />, text: "Home" },
    { to: "/dashboard", icon: <User className="mr-1" />, text: "Dashboard" },
    { to: "/solutions", icon: <Lightbulb className="mr-1" />, text: "Solutions" },
    { to: "/posts", icon: <MessageSquare className="mr-1" />, text: "Community" },
    { to: "/un-reports", icon: <FileText className="mr-1" />, text: "Reports" },
    { to: "/data", icon: <BarChart className="mr-1" />, text: "Data" },
    { to: "/advanced-calculator", icon: <Calculator className="mr-1" />, text: "Calculator" },
    { to: "/achievements", icon: <Award className="mr-1" />, text: "Achievements" },
  ];

  return (
    <Router>
      <div className="min-h-screen bg-green-50 flex flex-col">
        <header className={`bg-green-600 text-white p-4 fixed w-full z-10 transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
          <nav className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold flex items-center">
              <Leaf className="mr-2" /> Fungi: Energy Conservation
            </h1>
            <div className="hidden md:flex space-x-4">
              {navItems.map((item, index) => (
                <Link key={index} to={item.to} className="link hover:text-green-200 transition-colors flex items-center">
                  {item.icon} {item.text}
                </Link>
              ))}
            </div>
            <button className="md:hidden" onClick={toggleMobileMenu}>
              <Menu />
            </button>
          </nav>
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.to}
                  className="block py-2 px-4 text-white hover:bg-green-700 transition-colors flex items-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.icon} {item.text}
                </Link>
              ))}
            </div>
          )}
        </header>
        <main className="flex-grow container mx-auto p-4 pt-24">
          <ErrorBoundary>
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<NewHome />} />
                <Route path="/dashboard" element={<UserDashboard />} />
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/posts" element={<UserPosts />} />
                <Route path="/un-reports" element={<UNReports />} />
                <Route path="/energy/solar" element={<SolarEnergy />} />
                <Route path="/energy/wind" element={<WindEnergy />} />
                <Route path="/energy/hydropower" element={<HydropowerEnergy />} />
                <Route path="/energy/geothermal" element={<GeothermalEnergy />} />
                <Route path="/data" element={<DataVisualization />} />
                <Route path="/advanced-calculator" element={<AdvancedSavingsCalculator />} />
                <Route path="/achievements" element={<UserAchievements />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;