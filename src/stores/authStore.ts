import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AuthState, User } from '../types/auth';

interface AuthStore extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
  updateProfile: (data: Partial<User>) => Promise<void>;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      isLoading: false,
      error: null,

      login: async (email, password) => {
        set({ isLoading: true, error: null });
        try {
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          // Mock user data
          const user: User = {
            id: '1',
            email,
            name: 'Пользователь',
            createdAt: new Date(),
            stats: {
              solvedProblems: 145,
              correctAnswers: 89,
              totalTime: 12.4,
              averageTime: 4.5,
            }
          };
          
          set({ user, isLoading: false });
        } catch (error) {
          set({ error: 'Ошибка входа', isLoading: false });
        }
      },

      register: async (email, password, name) => {
        set({ isLoading: true, error: null });
        try {
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          const user: User = {
            id: '1',
            email,
            name,
            createdAt: new Date(),
            stats: {
              solvedProblems: 0,
              correctAnswers: 0,
              totalTime: 0,
              averageTime: 0,
            }
          };
          
          set({ user, isLoading: false });
        } catch (error) {
          set({ error: 'Ошибка регистрации', isLoading: false });
        }
      },

      logout: () => {
        set({ user: null, error: null });
      },

      updateProfile: async (data) => {
        set({ isLoading: true, error: null });
        try {
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          set(state => ({
            user: state.user ? { ...state.user, ...data } : null,
            isLoading: false
          }));
        } catch (error) {
          set({ error: 'Ошибка обновления профиля', isLoading: false });
        }
      }
    }),
    {
      name: 'auth-storage'
    }
  )
);