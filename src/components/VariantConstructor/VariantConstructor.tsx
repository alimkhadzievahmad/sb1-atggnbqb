import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TopicItem } from './TopicItem';
import { mathProblems } from '../../data/problems';
import { useVariantStore } from '../../utils/variantStore';

const TOPICS = mathProblems.flatMap(category => 
  category.topics.map(topic => ({
    id: topic.id,
    title: topic.title,
    total: topic.problems.length
  }))
);

export function VariantConstructor() {
  const navigate = useNavigate();
  const createVariant = useVariantStore(state => state.createVariant);
  const [counts, setCounts] = useState<Record<string, number>>(
    Object.fromEntries(TOPICS.map(topic => [topic.id, 0]))
  );

  const handleIncrement = (id: string) => {
    setCounts(prev => ({ ...prev, [id]: Math.min(prev[id] + 1, TOPICS.find(t => t.id === id)?.total || 0) }));
  };

  const handleDecrement = (id: string) => {
    setCounts(prev => ({ ...prev, [id]: Math.max(0, prev[id] - 1) }));
  };

  const handleClearAll = () => {
    setCounts(Object.fromEntries(TOPICS.map(topic => [topic.id, 0])));
  };

  const handleStartVariant = () => {
    const selectedTopics = Object.entries(counts)
      .filter(([_, count]) => count > 0)
      .map(([id, count]) => ({ id, count }));

    if (selectedTopics.length === 0) {
      alert('Выберите хотя бы одну тему');
      return;
    }

    const variantId = createVariant(selectedTopics);
    navigate(`/variant/${variantId}`);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm transition-colors">
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
        Конструктор варианта
      </h2>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
        Выберите темы и количество заданий для тренировки
      </p>
      <div className="space-y-4 max-h-[400px] overflow-y-auto">
        {TOPICS.map(topic => (
          <TopicItem
            key={topic.id}
            title={topic.title}
            count={counts[topic.id]}
            total={topic.total}
            onIncrement={() => handleIncrement(topic.id)}
            onDecrement={() => handleDecrement(topic.id)}
          />
        ))}
      </div>
      <div className="mt-6 flex justify-between items-center">
        <button
          onClick={handleClearAll}
          className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
        >
          Убрать все
        </button>
        <button
          onClick={handleStartVariant}
          className="py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Начать тренировку
        </button>
      </div>
    </div>
  );
}