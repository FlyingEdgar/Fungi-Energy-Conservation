import React from 'react';

interface ProgressBarProps {
  progress: number;
  color?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, color = 'bg-green-500' }) => {
  return (
    <div className="bg-gray-200 rounded-full h-4 overflow-hidden">
      <div 
        className={`${color} h-full transition-all duration-500 ease-out`}
        style={{ width: `${progress}%` }}
      >
        <span className="flex h-full items-center justify-center text-white text-xs font-semibold">
          {progress}%
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;