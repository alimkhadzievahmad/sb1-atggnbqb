import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ChevronRight } from 'lucide-react';
import { mathProblems } from '../data/problems';

export function CourseList() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
        Рекомендуемые курсы
      </h2>
      {mathProblems.map((category) => (
        <div key={category.title} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          {category.topics.map((topic) => (
            <Link
              key={topic.id}
              to={`/topic/${topic.id}`}
              className="block p-4 hover:bg-gray-50 dark:hover:bg-gray-700 border-b border-gray-200 dark:border-gray-700 last:border-b-0 transition-colors"
            >
              <div className="flex items-center">
                <BookOpen className="h-6 w-6 text-blue-500 mr-3" />
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-medium text-gray-900 dark:text-white">{topic.title}</h3>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{topic.level}</p>
                  <div className="flex items-center">
                    <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full mr-3">
                      <div
                        className="h-2 bg-blue-500 rounded-full"
                        style={{ width: `${Math.floor(Math.random() * 100)}%` }}
                      />
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {topic.problems.length} уроков
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}