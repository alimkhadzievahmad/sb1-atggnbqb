import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { mathProblems } from '../data/problems';
import { ArrowLeft, Check, X } from 'lucide-react';

export function Problem() {
  const { topicId, problemId } = useParams();
  const [answer, setAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const topic = mathProblems
    .flatMap((category) => category.topics)
    .find((t) => t.id === topicId);
  const problem = topic?.problems.find((p) => p.id === Number(problemId));

  if (!topic || !problem) {
    return <div>Задача не найдена</div>;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCorrect(answer.trim() === problem.answer.trim());
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link
        to={`/topic/${topicId}`}
        className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-6"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Назад к списку задач</span>
      </Link>
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">{problem.title}</h1>
        <p className="text-gray-600 mb-6">{problem.description}</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="answer" className="block text-sm font-medium text-gray-700">
              Ваш ответ:
            </label>
            <input
              type="text"
              id="answer"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Введите ответ..."
            />
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Проверить
          </button>
        </form>
        {isCorrect !== null && (
          <div className={`mt-4 p-4 rounded-md ${isCorrect ? 'bg-green-50' : 'bg-red-50'}`}>
            <div className="flex">
              {isCorrect ? (
                <Check className="h-5 w-5 text-green-400" />
              ) : (
                <X className="h-5 w-5 text-red-400" />
              )}
              <p className={`ml-3 text-sm ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                {isCorrect ? 'Правильно!' : 'Неправильно. Попробуйте еще раз.'}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}