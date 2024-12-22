import React, { useState } from 'react';
import { useAuthStore } from '../../stores/authStore';

interface ProfileViewProps {
  onClose: () => void;
}

export function ProfileView({ onClose }: ProfileViewProps) {
  const { user, logout, updateProfile, isLoading } = useAuthStore();
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user?.name || '');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateProfile({ name });
    setIsEditing(false);
  };

  const handleLogout = () => {
    logout();
    onClose();
  };

  if (!user) return null;

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
        Личный кабинет
      </h2>

      {isEditing ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Имя
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
            />
          </div>

          <div className="flex space-x-3">
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
            >
              Сохранить
            </button>
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="flex-1 py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              Отмена
            </button>
          </div>
        </form>
      ) : (
        <>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Имя
              </h3>
              <p className="mt-1 text-gray-900 dark:text-white">{user.name}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Email
              </h3>
              <p className="mt-1 text-gray-900 dark:text-white">{user.email}</p>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
              Статистика
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {user.stats.solvedProblems}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Решено задач
                </p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {user.stats.correctAnswers}%
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Правильных ответов
                </p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {user.stats.averageTime}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Среднее время
                </p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {user.stats.totalTime}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Всего часов
                </p>
              </div>
            </div>
          </div>

          <div className="flex space-x-3">
            <button
              onClick={() => setIsEditing(true)}
              className="flex-1 py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Редактировать
            </button>
            <button
              onClick={handleLogout}
              className="flex-1 py-2 px-4 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              Выйти
            </button>
          </div>
        </>
      )}
    </div>
  );
}