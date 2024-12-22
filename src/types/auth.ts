export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  createdAt: Date;
  stats: {
    solvedProblems: number;
    correctAnswers: number;
    totalTime: number;
    averageTime: number;
  };
}

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}