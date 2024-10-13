import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="loading-spinner"></div>
      <p className="ml-4 text-lg font-semibold text-gray-600">Loading...</p>
    </div>
  );
};

export default LoadingSpinner;