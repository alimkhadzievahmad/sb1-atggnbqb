export interface Problem {
  id: number;
  title: string;
  description: string;
  answer: string;
}

export interface Topic {
  id: string;
  title: string;
  level: string;
  problems: Problem[];
}

export interface Category {
  title: string;
  topics: Topic[];
}

export interface VariantProblem extends Problem {
  topicId: string;
  userAnswer?: string;
  isCorrect?: boolean;
}

export interface Variant {
  id: string;
  problems: VariantProblem[];
  isCompleted: boolean;
  score?: number;
  totalProblems: number;
}

export interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}