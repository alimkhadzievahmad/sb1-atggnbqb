import React from 'react';
import { Clock } from 'lucide-react';
import { AnalyticsCard } from './AnalyticsCard';

interface StatItemProps {
  label: string;
  value: string;
}

function StatItem({ label, value }: StatItemProps) {
  return (
    <div className="flex justify-between items-center py-1">
      <span className="text-gray-600 text-sm">{label}</span>
      <span className="text-gray-900 font-medium">{value}</span>
    </div>
  );
}

export function TimeSection() {
  return (
    <AnalyticsCard 
      title="Время" 
      icon={<Clock className="w-4 h-4" />}
      iconColor="text-orange-400"
    >
      <div className="space-y-1">
        <StatItem label="Среднее время на задачу" value="4.5 мин" />
        <StatItem label="Всего времени" value="12.4 ч" />
      </div>
    </AnalyticsCard>
  );
}