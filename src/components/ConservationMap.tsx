import React, { useState, useEffect } from 'react';
import { MapPin, Search, Compass, TreeDeciduous, Recycle, Droplet } from 'lucide-react';

const ConservationMap: React.FC = () => {
  const [address, setAddress] = useState('');
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [localEfforts, setLocalEfforts] = useState<Array<{ title: string; distance: number; icon: React.ReactNode }>>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    simulateGeocoding(address);
  };

  const simulateGeocoding = (input: string) => {
    const randomLat = (Math.random() * 180 - 90).toFixed(4);
    const randomLng = (Math.random() * 360 - 180).toFixed(4);
    setLocation({ lat: parseFloat(randomLat), lng: parseFloat(randomLng) });
    generateLocalEfforts();
  };

  const getUserLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: parseFloat(position.coords.latitude.toFixed(4)),
            lng: parseFloat(position.coords.longitude.toFixed(4))
          });
          setErrorMsg('');
          generateLocalEfforts();
        },
        (error) => {
          setErrorMsg('Unable to retrieve your location. Please enter an address.');
          console.error(error);
        }
      );
    } else {
      setErrorMsg('Geolocation is not supported by your browser. Please enter an address.');
    }
  };

  const generateLocalEfforts = () => {
    const efforts = [
      { title: "Local Park Cleanup", icon: <TreeDeciduous size={18} className="text-green-600" /> },
      { title: "Community Garden", icon: <Droplet size={18} className="text-blue-600" /> },
      { title: "Recycling Drive", icon: <Recycle size={18} className="text-yellow-600" /> },
    ];

    const localEffortsWithDistance = efforts.map(effort => ({
      ...effort,
      distance: parseFloat((Math.random() * 5).toFixed(1))
    }));

    setLocalEfforts(localEffortsWithDistance);
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  return (
    <div className="mt-8 bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <MapPin className="mr-2 text-green-500" /> Find Local Conservation Efforts
      </h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="flex">
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your address"
            className="flex-grow p-2 border rounded-l"
          />
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-r hover:bg-green-600 transition-colors flex items-center">
            <Search size={18} className="mr-2" /> Find
          </button>
        </div>
      </form>
      <button 
        onClick={getUserLocation} 
        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors flex items-center"
      >
        <Compass size={18} className="mr-2" /> Use My Location
      </button>
      {errorMsg && <p className="text-red-500 mb-4">{errorMsg}</p>}
      {location && (
        <>
          <div className="bg-green-100 p-4 rounded-lg mb-4">
            <h3 className="font-semibold text-green-700 mb-2">Your Location</h3>
            <p className="text-sm text-gray-600">
              Latitude: {location.lat}, Longitude: {location.lng}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              (This is a simulated location for demonstration purposes)
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {localEfforts.map((effort, index) => (
              <div key={index} className="bg-green-50 p-3 rounded">
                <h3 className="font-semibold text-green-700 flex items-center">
                  {effort.icon}
                  <span className="ml-2">{effort.title}</span>
                </h3>
                <p className="text-sm text-gray-600">Distance: {effort.distance} miles</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ConservationMap;