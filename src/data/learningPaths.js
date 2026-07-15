// src/data/learningPaths.js

export const LEARNING_PATHS = [
    {
      id: 'frontend-mastery',
      title: 'Frontend Mastery',
      role: 'Frontend Developer',
      description: 'Master modern frontend development from zero to hero.',
      progress: 0,
      totalModules: 3,
      modules: [
        {
          id: 'html-css',
          title: 'HTML & CSS Fundamentals',
          description: 'Semantic HTML, Flexbox, Grid, and Responsive Design.',
          status: 'current', // unlocked
          quizId: 'html-basic'
        },
        {
          id: 'js-depth',
          title: 'JavaScript In-Depth',
          description: 'ES6+, Closures, Async/Await, and DOM Manipulation.',
          status: 'locked',
          quizId: 'js-adv'
        },
        {
          id: 'react-pro',
          title: 'React Ecosystem',
          description: 'Hooks, Context API, Redux, and Performance.',
          status: 'locked',
          quizId: 'react-adv'
        }
      ]
    }
  ];