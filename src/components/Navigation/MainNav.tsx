import React from 'react';
import { NavLink } from 'react-router-dom';
import { BookOpen, GraduationCap } from 'lucide-react';

export function MainNav() {
  const navItems = [
    { to: '/theory', icon: BookOpen, label: 'Теория' },
    { to: '/practice', icon: GraduationCap, label: 'Практика' },
  ];

  return (
    <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-8">
          {navItems.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center px-3 py-4 text-sm font-medium border-b-2 ${
                  isActive
                    ? 'border-blue-500 text-blue-600 dark:text-blue-500'
                    : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                }`
              }
            >
              <Icon className="w-5 h-5 mr-2" />
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}