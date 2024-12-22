import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useAuthStore } from '../../stores/authStore';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';
import { ProfileView } from './ProfileView';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProfileModal({ isOpen, onClose }: ProfileModalProps) {
  const [view, setView] = useState<'login' | 'register' | 'profile'>('login');
  const user = useAuthStore(state => state.user);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={onClose} />
        
        <div className="relative w-full max-w-md transform overflow-hidden rounded-lg bg-white dark:bg-gray-800 p-6 text-left shadow-xl transition-all">
          <div className="absolute right-4 top-4">
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {user ? (
            <ProfileView onClose={onClose} />
          ) : (
            <>
              {view === 'login' ? (
                <LoginForm onRegister={() => setView('register')} />
              ) : (
                <RegisterForm onLogin={() => setView('login')} />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}