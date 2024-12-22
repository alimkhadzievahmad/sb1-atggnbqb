import React from 'react';
import { PieChart } from 'lucide-react';
import { AnalyticsCard } from './AnalyticsCard';
import { CircularProgress } from '../CircularProgress';

export function DistributionSection() {
  return (
    <AnalyticsCard 
      title="Распределение" 
      icon={<PieChart className="w-4 h-4" />}
      iconColor="text-blue-500"
    >
      <div className="flex justify-center pt-2">
        <CircularProgress percentage={78} color="text-blue-500" />
      </div>
    </AnalyticsCard>
  );
}