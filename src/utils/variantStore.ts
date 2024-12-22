import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { v4 as uuidv4 } from 'uuid';
import { Variant, VariantProblem } from '../types';
import { mathProblems } from '../data/problems';

interface VariantStore {
  variants: Record<string, Variant>;
  createVariant: (selectedTopics: { id: string; count: number }[]) => string;
  getVariant: (id: string) => Variant | undefined;
  updateVariantAnswer: (variantId: string, problemId: number, answer: string) => void;
  submitVariant: (variantId: string) => void;
}

export const useVariantStore = create<VariantStore>()(
  persist(
    (set, get) => ({
      variants: {},
      
      createVariant: (selectedTopics) => {
        const problems: VariantProblem[] = [];
        
        selectedTopics.forEach(({ id, count }) => {
          const topic = mathProblems
            .flatMap(category => category.topics)
            .find(t => t.id === id);
            
          if (topic) {
            const selectedProblems = [...topic.problems]
              .sort(() => Math.random() - 0.5)
              .slice(0, count)
              .map(problem => ({
                ...problem,
                topicId: id,
                userAnswer: '',
              }));
            
            problems.push(...selectedProblems);
          }
        });

        const variantId = uuidv4();
        const variant: Variant = {
          id: variantId,
          problems: problems.sort(() => Math.random() - 0.5),
          isCompleted: false,
          totalProblems: problems.length,
          createdAt: Date.now(),
        };

        set(state => ({
          variants: { ...state.variants, [variantId]: variant }
        }));

        return variantId;
      },

      getVariant: (id) => {
        return get().variants[id];
      },

      updateVariantAnswer: (variantId, problemId, answer) => {
        set(state => {
          const variant = state.variants[variantId];
          if (!variant) return state;

          return {
            variants: {
              ...state.variants,
              [variantId]: {
                ...variant,
                problems: variant.problems.map(p =>
                  p.id === problemId ? { ...p, userAnswer: answer } : p
                ),
              },
            },
          };
        });
      },

      submitVariant: (variantId) => {
        set(state => {
          const variant = state.variants[variantId];
          if (!variant) return state;

          const checkedProblems = variant.problems.map(problem => ({
            ...problem,
            isCorrect: problem.userAnswer?.trim() === problem.answer.trim(),
          }));

          const score = checkedProblems.filter(p => p.isCorrect).length;

          return {
            variants: {
              ...state.variants,
              [variantId]: {
                ...variant,
                problems: checkedProblems,
                score,
                isCompleted: true,
              },
            },
          };
        });
      },
    }),
    {
      name: 'variant-storage',
    }
  )
);