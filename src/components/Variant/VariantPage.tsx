import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { VariantProblem } from './VariantProblem';
import { VariantResults } from './VariantResults';
import { useVariantStore } from '../../utils/variantStore';
import { ArrowLeft } from 'lucide-react';

export function VariantPage() {
  const { variantId } = useParams();
  const navigate = useNavigate();
  const variant = useVariantStore(state => variantId ? state.getVariant(variantId) : undefined);
  const updateAnswer = useVariantStore(state => state.updateVariantAnswer);
  const submitVariant = useVariantStore(state => state.submitVariant);

  if (!variant || !variantId) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="bg-red-50 p-4 rounded-lg">
          <p className="text-red-800">Вариант не найден</p>
          <button
            onClick={() => navigate('/')}
            className="mt-4 text-red-600 hover:text-red-800"
          >
            Вернуться на главную
          </button>
        </div>
      </div>
    );
  }

  const handleAnswerChange = (problemId: number, answer: string) => {
    updateAnswer(variantId, problemId, answer);
  };

  const handleCheck = () => {
    submitVariant(variantId);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <button
        onClick={() => navigate('/')}
        className="flex items-center text-blue-600 hover:text-blue-800 mb-6"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Вернуться на главную
      </button>

      <h1 className="text-2xl font-bold text-gray-900 mb-8">
        Вариант #{variantId.slice(0, 8)}
      </h1>
      
      <div className="space-y-6">
        {variant.problems.map((problem) => (
          <VariantProblem
            key={problem.id}
            problem={problem}
            onAnswerChange={(answer) => handleAnswerChange(problem.id, answer)}
            isCompleted={variant.isCompleted}
          />
        ))}
      </div>

      {!variant.isCompleted && (
        <div className="mt-8">
          <button
            onClick={handleCheck}
            className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Проверить
          </button>
        </div>
      )}

      {variant.isCompleted && <VariantResults variant={variant} />}
    </div>
  );
}