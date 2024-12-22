import React from 'react';
import { BarChart } from 'lucide-react';
import { AnalyticsCard } from './AnalyticsCard';
import { ProgressBar } from '../ProgressBar';

const PERFORMANCE_DATA = [
  { subject: 'Алгебра', percentage: 75 },
  { subject: 'Геометрия', percentage: 80 },
  { subject: 'Вероятности', percentage: 85 },
];

export function PerformanceSection() {
  return (
    <AnalyticsCard 
      title="Успеваемость" 
      icon={<BarChart className="w-4 h-4" />}
      iconColor="text-violet-500"
    >
      <div className="space-y-3">
        {PERFORMANCE_DATA.map((item) => (
          <ProgressBar
            key={item.subject}
            label={item.subject}
            percentage={item.percentage}
            color="bg-violet-500"
          />
        ))}
      </div>
    </AnalyticsCard>
  );
}