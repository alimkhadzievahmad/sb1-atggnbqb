import React from 'react';
import { Activity } from 'lucide-react';
import { AnalyticsCard } from './AnalyticsCard';

interface StatItemProps {
  label: string;
  value: string | number;
  highlight?: boolean;
}

function StatItem({ label, value, highlight }: StatItemProps) {
  return (
    <div className="flex justify-between items-center py-1">
      <span className="text-gray-600 text-sm">{label}</span>
      <span className={`${highlight ? 'text-green-500' : 'text-gray-900'} font-medium`}>
        {value}
      </span>
    </div>
  );
}

export function ProgressSection() {
  return (
    <AnalyticsCard 
      title="Прогресс" 
      icon={<Activity className="w-4 h-4" />}
      iconColor="text-green-500"
    >
      <div className="space-y-1">
        <StatItem label="Решено задач:" value="145" />
        <StatItem label="Правильных ответов:" value="89%" highlight />
      </div>
    </AnalyticsCard>
  );
}