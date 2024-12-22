import React from 'react';
import { PerformanceSection } from './PerformanceSection';
import { DistributionSection } from './DistributionSection';
import { ProgressSection } from './ProgressSection';
import { TimeSection } from './TimeSection';

export function Analytics() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h2 className="text-lg font-medium text-gray-900 mb-6">Аналитика</h2>
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-gray-50 p-4 rounded-xl">
          <PerformanceSection />
        </div>
        <div className="bg-gray-50 p-4 rounded-xl">
          <DistributionSection />
        </div>
        <div className="bg-gray-50 p-4 rounded-xl">
          <ProgressSection />
        </div>
        <div className="bg-gray-50 p-4 rounded-xl">
          <TimeSection />
        </div>
      </div>
    </div>
  );
}