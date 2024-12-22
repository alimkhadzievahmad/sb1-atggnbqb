import { v4 as uuidv4 } from 'uuid';
import { mathProblems } from '../data/problems';
import { Variant, VariantProblem } from '../types';

interface TopicSelection {
  id: string;
  count: number;
}

export function generateVariant(selectedTopics: TopicSelection[]): Variant {
  const problems: VariantProblem[] = [];
  
  selectedTopics.forEach(({ id, count }) => {
    const topic = mathProblems
      .flatMap(category => category.topics)
      .find(t => t.id === id);
      
    if (topic) {
      // Randomly select problems from the topic
      const selectedProblems = [...topic.problems]
        .sort(() => Math.random() - 0.5)
        .slice(0, count)
        .map(problem => ({
          ...problem,
          topicId: id,
        }));
      
      problems.push(...selectedProblems);
    }
  });

  return {
    id: uuidv4(),
    problems: problems.sort(() => Math.random() - 0.5),
    isCompleted: false,
    totalProblems: problems.length,
  };
}

export function checkVariant(variant: Variant): Variant {
  const checkedProblems = variant.problems.map(problem => ({
    ...problem,
    isCorrect: problem.userAnswer?.trim() === problem.answer.trim(),
  }));

  const score = checkedProblems.filter(p => p.isCorrect).length;

  return {
    ...variant,
    problems: checkedProblems,
    score,
    isCompleted: true,
  };
}