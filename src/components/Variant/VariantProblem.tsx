import React from 'react';
import { VariantProblem as VariantProblemType } from '../../types';

interface VariantProblemProps {
  problem: VariantProblemType;
  onAnswerChange: (answer: string) => void;
  isCompleted: boolean;
}

export function VariantProblem({ problem, onAnswerChange, isCompleted }: VariantProblemProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">{problem.title}</h3>
      <p className="text-gray-600 mb-6">{problem.description}</p>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Ваш ответ:
          </label>
          <input
            type="text"
            value={problem.userAnswer || ''}
            onChange={(e) => onAnswerChange(e.target.value)}
            disabled={isCompleted}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Введите ответ..."
          />
        </div>
        {isCompleted && (
          <div className={`p-4 rounded-md ${problem.isCorrect ? 'bg-green-50' : 'bg-red-50'}`}>
            <p className={`text-sm ${problem.isCorrect ? 'text-green-800' : 'text-red-800'}`}>
              {problem.isCorrect ? 'Правильно!' : `Неправильно. Правильный ответ: ${problem.answer}`}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}