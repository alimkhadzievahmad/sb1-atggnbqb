import React from 'react';
import { Trophy } from 'lucide-react';

const WEEKDAYS = [
  { key: 'mon', label: 'П' },
  { key: 'tue', label: 'В' },
  { key: 'wed', label: 'С' },
  { key: 'thu', label: 'Ч' },
  { key: 'fri', label: 'П' },
];

export function WeekProgress() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm transition-colors">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">0</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Решите 3 задачи, чтобы начать серию
          </p>
        </div>
        <Trophy className="h-12 w-12 text-yellow-400" />
      </div>
      <div className="flex justify-between space-x-4">
        {WEEKDAYS.map(({ key, label }) => (
          <div
            key={key}
            className="w-12 h-12 rounded-full border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-400 dark:text-gray-500 transition-colors"
          >
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}