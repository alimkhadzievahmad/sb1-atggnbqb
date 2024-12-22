import React from 'react';
import { BarChart2, PieChart, Activity, Clock } from 'lucide-react';

const PERFORMANCE_DATA = [
  { subject: 'Алгебра', percentage: 75 },
  { subject: 'Геометрия', percentage: 80 },
  { subject: 'Вероятности', percentage: 85 },
];

function ProgressBar({ label, percentage }: { label: string; percentage: number }) {
  return (
    <div className="mb-3">
      <div className="flex justify-between text-sm mb-1">
        <span className="text-gray-600 dark:text-gray-400">{label}</span>
        <span className="text-gray-900 dark:text-gray-100">{percentage}%</span>
      </div>
      <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full">
        <div
          className="h-full bg-violet-500 rounded-full transition-all"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

function CircularProgress({ percentage }: { percentage: number }) {
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
          className="text-gray-100 dark:text-gray-700"
        />
        <circle
          cx="48"
          cy="48"
          r="40"
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
          className="text-blue-500 transition-all duration-300"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
        />
      </svg>
      <span className="absolute text-2xl font-semibold text-gray-900 dark:text-white">
        {percentage}%
      </span>
    </div>
  );
}

export function Analytics() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm transition-colors">
      <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
        Аналитика
      </h2>
      <div className="grid grid-cols-2 gap-6">
        {/* Успеваемость */}
        <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-xl">
          <div className="flex items-center gap-2 mb-4">
            <BarChart2 className="w-4 h-4 text-violet-500" />
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-200">
              Успеваемость
            </h3>
          </div>
          <div className="space-y-2">
            {PERFORMANCE_DATA.map((item) => (
              <ProgressBar
                key={item.subject}
                label={item.subject}
                percentage={item.percentage}
              />
            ))}
          </div>
        </div>

        {/* Распределение */}
        <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-xl">
          <div className="flex items-center gap-2 mb-4">
            <PieChart className="w-4 h-4 text-blue-500" />
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-200">
              Распределение
            </h3>
          </div>
          <div className="flex justify-center">
            <CircularProgress percentage={78} />
          </div>
        </div>

        {/* Прогресс */}
        <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-xl">
          <div className="flex items-center gap-2 mb-4">
            <Activity className="w-4 h-4 text-green-500" />
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-200">
              Прогресс
            </h3>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400 text-sm">
                Решено задач:
              </span>
              <span className="text-gray-900 dark:text-gray-100">145</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400 text-sm">
                Правильных ответов:
              </span>
              <span className="text-green-500">89%</span>
            </div>
          </div>
        </div>

        {/* Время */}
        <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-xl">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-4 h-4 text-orange-400" />
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-200">
              Время
            </h3>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400 text-sm">
                Среднее время на задачу
              </span>
              <span className="text-gray-900 dark:text-gray-100">4.5 мин</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400 text-sm">
                Всего времени
              </span>
              <span className="text-gray-900 dark:text-gray-100">12.4 ч</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}