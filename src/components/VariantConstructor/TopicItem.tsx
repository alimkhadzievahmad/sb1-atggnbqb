import React from 'react';
import { Minus, Plus, ChevronRight } from 'lucide-react';

interface TopicItemProps {
  title: string;
  count: number;
  total: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export function TopicItem({ title, count, total, onIncrement, onDecrement }: TopicItemProps) {
  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex-1">
        <span className="text-gray-700 dark:text-gray-300">{title}</span>
        <span className="text-gray-400 dark:text-gray-500 ml-2">{total} шт.</span>
      </div>
      <div className="flex items-center space-x-3">
        <button
          onClick={onDecrement}
          disabled={count === 0}
          className="w-6 h-6 flex items-center justify-center rounded border border-gray-300 dark:border-gray-600 text-gray-400 dark:text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <Minus className="w-4 h-4" />
        </button>
        <span className="w-8 text-center text-gray-900 dark:text-white">{count}</span>
        <button
          onClick={onIncrement}
          disabled={count === total}
          className="w-6 h-6 flex items-center justify-center rounded border border-gray-300 dark:border-gray-600 text-gray-400 dark:text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <Plus className="w-4 h-4" />
        </button>
        <ChevronRight className="w-4 h-4 text-gray-400 dark:text-gray-500" />
      </div>
    </div>
  );
}