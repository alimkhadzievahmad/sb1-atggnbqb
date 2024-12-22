import React, { ReactNode } from 'react';

interface AnalyticsCardProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
  iconColor?: string;
}

export function AnalyticsCard({ title, icon, children, iconColor = 'text-gray-400' }: AnalyticsCardProps) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <span className={`${iconColor}`}>{icon}</span>
        <h3 className="text-sm font-medium text-gray-700">{title}</h3>
      </div>
      {children}
    </div>
  );
}