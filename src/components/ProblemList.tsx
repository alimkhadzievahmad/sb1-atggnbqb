import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { mathProblems } from '../data/problems';
import { ArrowLeft } from 'lucide-react';

export function ProblemList() {
  const { topicId } = useParams();
  const topic = mathProblems
    .flatMap((category) => category.topics)
    .find((t) => t.id === topicId);

  if (!topic) {
    return <div>Тема не найдена</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link
        to="/"
        className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-6"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Назад к темам</span>
      </Link>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">{topic.title}</h1>
      <div className="space-y-6">
        {topic.problems.map((problem) => (
          <Link
            key={problem.id}
            to={`/topic/${topicId}/problem/${problem.id}`}
            className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-lg font-medium text-gray-900">{problem.title}</h3>
            <p className="mt-2 text-gray-600">{problem.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}