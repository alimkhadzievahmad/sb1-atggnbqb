import { Category } from '../types';

export const mathProblems: Category[] = [
  {
    title: 'Алгебра',
    topics: [
      {
        id: 'equations',
        title: 'Уравнения',
        level: 'Базовый уровень',
        problems: Array.from({ length: 10 }, (_, i) => ({
          id: i + 1,
          title: `Уравнение ${i + 1}`,
          description: `Решите уравнение: ${i + 2}x + ${i * 3} = ${i * 5 + 10}`,
          answer: `${(i * 5 + 10 - i * 3) / (i + 2)}`
        }))
      },
      {
        id: 'inequalities',
        title: 'Неравенства',
        level: 'Базовый уровень',
        problems: Array.from({ length: 10 }, (_, i) => ({
          id: i + 1,
          title: `Неравенство ${i + 1}`,
          description: `Решите неравенство: ${i + 2}x + ${i * 2} > ${i * 4}`,
          answer: `x > ${(i * 4 - i * 2) / (i + 2)}`
        }))
      },
      {
        id: 'trigonometry',
        title: 'Тригонометрия',
        level: 'Базовый уровень',
        problems: Array.from({ length: 10 }, (_, i) => ({
          id: i + 1,
          title: `Тригонометрия ${i + 1}`,
          description: `Найдите значение sin(${i * 30}°)`,
          answer: `${Math.sin(i * 30 * Math.PI / 180).toFixed(2)}`
        }))
      }
    ]
  },
  {
    title: 'Планиметрия',
    topics: [
      {
        id: 'easy',
        title: 'Лёгкие задачи',
        level: 'Базовый уровень',
        problems: Array.from({ length: 10 }, (_, i) => ({
          id: i + 1,
          title: `Задача ${i + 1}`,
          description: `Найдите площадь прямоугольника со сторонами ${i + 2} и ${i + 3}`,
          answer: `${(i + 2) * (i + 3)}`
        }))
      },
      {
        id: 'medium',
        title: 'Средний уровень',
        level: 'Продвинутый уровень',
        problems: Array.from({ length: 10 }, (_, i) => ({
          id: i + 1,
          title: `Задача ${i + 1}`,
          description: `В треугольнике ABC известны стороны: AB = ${i + 3}, BC = ${i + 4}, AC = ${i + 5}. Найдите его периметр.`,
          answer: `${i + 3 + i + 4 + i + 5}`
        }))
      },
      {
        id: 'hard',
        title: 'Сложные задачи',
        level: 'Продвинутый уровень',
        problems: Array.from({ length: 10 }, (_, i) => ({
          id: i + 1,
          title: `Задача ${i + 1}`,
          description: `Найдите площадь правильного шестиугольника со стороной ${i + 2}`,
          answer: `${(3 * Math.sqrt(3) * Math.pow(i + 2, 2) / 2).toFixed(2)}`
        }))
      }
    ]
  },
  {
    title: 'Начала Анализа',
    topics: [
      {
        id: 'limits',
        title: 'Пределы',
        level: 'Базовый уровень',
        problems: Array.from({ length: 10 }, (_, i) => ({
          id: i + 1,
          title: `Предел ${i + 1}`,
          description: `Найдите предел: lim(x→∞) (${i + 1}x + ${i * 2})/(${i + 2}x)`,
          answer: `${(i + 1)/(i + 2)}`
        }))
      },
      {
        id: 'derivatives',
        title: 'Производные',
        level: 'Базовый уровень',
        problems: Array.from({ length: 10 }, (_, i) => ({
          id: i + 1,
          title: `Производная ${i + 1}`,
          description: `Найдите производную функции f(x) = ${i + 1}x² + ${i * 2}x + ${i}`,
          answer: `${2 * (i + 1)}x + ${i * 2}`
        }))
      },
      {
        id: 'integrals',
        title: 'Интегралы',
        level: 'Базовый уровень',
        problems: Array.from({ length: 10 }, (_, i) => ({
          id: i + 1,
          title: `Интеграл ${i + 1}`,
          description: `Вычислите интеграл: ∫(${i + 1}x + ${i})dx`,
          answer: `${(i + 1)}x²/2 + ${i}x + C`
        }))
      }
    ]
  }
];