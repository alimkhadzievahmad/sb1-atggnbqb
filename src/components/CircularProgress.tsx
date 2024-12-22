import React from 'react';

interface CircularProgressProps {
  percentage: number;
  color?: string;
}

export function CircularProgress({ 
  percentage, 
  color = 'text-blue-500' 
}: CircularProgressProps) {
  const circumference = 2 * Math.PI * 40;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg className="transform -rotate-90 w-24 h-24">
        <circle
          cx="48"
          cy="48"
          r="40"
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
          className="text-gray-100"
        />
        <circle
          cx="48"
          cy="48"
          r="40"
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
          className={`${color} transition-all duration-300 ease-in-out`}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
        />
      </svg>
      <span className="absolute text-2xl font-semibold">{percentage}%</span>
    </div>
  );
}