import React from 'react';
import { Link } from 'react-router-dom';
import { Book, ChevronRight } from 'lucide-react';
import { mathProblems } from '../../data/problems';

export function TheoryList() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Теория</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mathProblems.map((category) => (
          <div 
            key={category.title} 
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden transition-colors"
          >
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {category.title}
              </h2>
              <div className="space-y-3">
                {category.topics.map((topic) => (
                  <Link
                    key={topic.id}
                    to={`/theory/${topic.id}`}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <Book className="w-5 h-5 text-blue-500" />
                      <span className="text-gray-700 dark:text-gray-200">
                        {topic.title}
                      </span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}