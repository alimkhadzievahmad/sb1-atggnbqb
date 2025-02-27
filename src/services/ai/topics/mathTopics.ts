export interface MathTopic {
  keywords: string[];
  response: string;
}

export const mathTopics: MathTopic[] = [
  {
    keywords: ['уравнен', 'решить', 'найти x'],
    response: 'Для решения уравнений следуйте этим шагам:\n1. Приведите подобные члены\n2. Перенесите все члены с переменной в одну часть\n3. Выполните необходимые преобразования\n4. Проверьте решение'
  },
  {
    keywords: ['производн', 'дифференц'],
    response: 'При нахождении производной используйте основные правила:\n1. (x^n)′ = n⋅x^(n-1)\n2. (u + v)′ = u′ + v′\n3. (u⋅v)′ = u′⋅v + u⋅v′'
  },
  {
    keywords: ['интеграл'],
    response: 'Для вычисления интегралов помните:\n1. ∫x^n dx = (x^(n+1))/(n+1) + C\n2. ∫(u + v) dx = ∫u dx + ∫v dx\n3. Используйте таблицу интегралов'
  },
  {
    keywords: ['геометри', 'площадь', 'периметр'],
    response: 'Основные формулы геометрии:\n1. Площадь треугольника: S = (a⋅h)/2\n2. Площадь круга: S = πr²\n3. Теорема Пифагора: a² + b² = c²'
  }
];