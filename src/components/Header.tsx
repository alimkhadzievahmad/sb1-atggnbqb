import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, User } from 'lucide-react';
import { ThemeToggle } from '../theme/components/ThemeToggle';
import { ProfileModal } from './Profile/ProfileModal';
import { useAuthStore } from '../stores/authStore';

export function Header() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const user = useAuthStore(state => state.user);

  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-semibold text-gray-900 dark:text-white">
              КАУСТИКА
            </span>
          </Link>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsProfileOpen(true)}
              className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <User className="h-5 w-5 mr-2" />
              {user ? user.name : 'Личный кабинет'}
            </button>
          </div>
        </div>
      </div>

      <ProfileModal 
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
      />
    </header>
  );
}