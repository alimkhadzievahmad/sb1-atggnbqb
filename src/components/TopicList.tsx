import React from 'react';
import { WeekProgress } from './WeekProgress';
import { Analytics } from './Analytics';
import { CourseList } from './CourseList';
import { VariantConstructor } from './VariantConstructor/VariantConstructor';
import { AIChat } from './AIAssistant/AIChat';

export function TopicList() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <WeekProgress />
          <VariantConstructor />
          <Analytics />
        </div>
        <div className="space-y-8">
          <CourseList />
          <AIChat />
        </div>
      </div>
    </div>
  );
}