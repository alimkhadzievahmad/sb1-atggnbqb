import React from 'react';
import { Variant } from '../../types';

interface VariantResultsProps {
  variant: Variant;
}

export function VariantResults({ variant }: VariantResultsProps) {
  const percentage = Math.round((variant.score! / variant.totalProblems) * 100);
  
  return (
    <div className="mt-8 p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Результаты</h2>
      <div className="space-y-4">
        <p className="text-lg">
          Правильных ответов: {variant.score} из {variant.totalProblems}
        </p>
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                Процент выполнения
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold inline-block text-blue-600">
                {percentage}%
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
            <div
              style={{ width: `${percentage}%` }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}