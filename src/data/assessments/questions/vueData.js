import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level Vue.js assessment.
// Questions cover Vue 3 fundamentals, Composition API, reactivity,
// directives, components, routing, Pinia, performance, testing, SSR,
// accessibility, and production engineering judgment.
export const vueData = {
  id: ASSESSMENT_TYPES.vue,
  title: 'Vue.js Frontend Engineering Professional Certification',
  shortTitle: 'Vue',
  category: 'Software Development',
  durationMinutes: 50,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description:
    'Professional Vue.js assessment covering Vue 3 reactivity, Composition API, Single File Components, directives, component communication, Pinia, Vue Router, composables, forms, performance, testing, SSR, accessibility, and production-ready frontend architecture.',
  instructions:
    'Choose the best answer for each Vue.js scenario. Questions move from core concepts to practical frontend engineering judgment.',
  questions: [
    {
      id: 'vu-01',
      type: 'mcq',
      title: 'Vue Purpose',
      prompt: 'What is Vue.js primarily used for?',
      options: [
        'Building user interfaces and single-page applications',
        'Managing only server databases',
        'Replacing HTML and CSS entirely',
        'Writing operating system kernels'
      ],
      correctIndex: 0,
      explanation:
        'Vue is a progressive JavaScript framework used to build interactive user interfaces and web applications.'
    },
    {
      id: 'vu-02',
      type: 'mcq',
      title: 'Composition API Reactivity',
      prompt: 'Which APIs are commonly used to create reactive state in the Vue 3 Composition API?',
      options: [
        'reactive() and ref()',
        'state() and model()',
        'watch() and mount() only',
        'render() and route()'
      ],
      correctIndex: 0,
      explanation:
        'ref() creates a reactive reference for primitives or objects, while reactive() creates a reactive proxy for objects.'
    },
    {
      id: 'vu-03',
      type: 'mcq',
      title: 'ref Value Access',
      prompt: 'Inside JavaScript setup logic, how do you read or update the value stored in a ref?',
      options: [
        'refName.value',
        'refName.get()',
        'refName.data',
        'refName.state'
      ],
      correctIndex: 0,
      explanation:
        'Refs expose their inner value through the .value property in JavaScript.'
    },
    {
      id: 'vu-04',
      type: 'mcq',
      title: 'reactive Object',
      prompt: 'When is reactive() most appropriate?',
      options: [
        'When creating a reactive object with multiple related properties',
        'When defining a router path',
        'When importing a component',
        'When declaring a CSS class only'
      ],
      correctIndex: 0,
      explanation:
        'reactive() is best suited for object state where properties should be tracked through a proxy.'
    },
    {
      id: 'vu-05',
      type: 'mcq',
      title: 'v-model',
      prompt: 'Which directive is used for two-way binding on form inputs?',
      options: [
        'v-bind',
        'v-on',
        'v-model',
        'v-if'
      ],
      correctIndex: 2,
      explanation:
        'v-model synchronizes form input value with component state.'
    },
    {
      id: 'vu-06',
      type: 'mcq',
      title: 'setup Function',
      prompt: 'In the Composition API, which part runs before most component lifecycle hooks and is used to declare reactive state and functions?',
      options: [
        'created()',
        'setup()',
        'mounted()',
        'rendered()'
      ],
      correctIndex: 1,
      explanation:
        'setup() is the entry point for Composition API logic and runs before lifecycle hooks such as onMounted.'
    },
    {
      id: 'vu-07',
      type: 'mcq',
      title: 'Computed Properties',
      prompt: 'What is the primary benefit of a computed property over a method for derived state?',
      options: [
        'It is cached based on reactive dependencies',
        'It always runs asynchronously',
        'It can only be used for strings',
        'It bypasses reactivity'
      ],
      correctIndex: 0,
      explanation:
        'Computed properties are cached and only re-evaluate when their reactive dependencies change.'
    },
    {
      id: 'vu-08',
      type: 'mcq',
      title: 'Props',
      prompt: 'How should data usually be passed from a parent component to a child component?',
      options: [
        'Events',
        'Props',
        'Direct DOM mutation',
        'Local storage'
      ],
      correctIndex: 1,
      explanation:
        'Props are the standard way to pass data down the component tree.'
    },
    {
      id: 'vu-09',
      type: 'mcq',
      title: 'Events',
      prompt: 'How should a child component usually communicate a change back to its parent?',
      options: [
        'By mutating the parent directly',
        'By emitting an event',
        'By editing the DOM manually',
        'By importing the parent file'
      ],
      correctIndex: 1,
      explanation:
        'The common Vue pattern is props down and events up.'
    },
    {
      id: 'vu-10',
      type: 'mcq',
      title: 'State Management',
      prompt: 'What is the recommended store library for Vue 3 applications?',
      options: [
        'Vuex for every new project',
        'Pinia',
        'Redux Toolkit only',
        'MobX only'
      ],
      correctIndex: 1,
      explanation:
        'Pinia is the current recommended state management library for Vue applications.'
    },
    {
      id: 'vu-11',
      type: 'mcq',
      title: 'Slots',
      prompt: 'What is the purpose of slots in Vue?',
      options: [
        'To distribute parent-provided content into a child component',
        'To define database schemas',
        'To configure server ports',
        'To replace props completely'
      ],
      correctIndex: 0,
      explanation:
        'Slots let parent components inject content into specific areas of a child component.'
    },
    {
      id: 'vu-12',
      type: 'mcq',
      title: 'Named Slots',
      prompt: 'When are named slots useful?',
      options: [
        'When a child component exposes multiple content insertion areas such as header, body, and footer',
        'Only when routing between pages',
        'Only when using Vuex',
        'When disabling reactivity'
      ],
      correctIndex: 0,
      explanation:
        'Named slots allow a reusable component to accept content in multiple defined regions.'
    },
    {
      id: 'vu-13',
      type: 'mcq',
      title: 'watch',
      prompt: 'When should watch() be preferred over a computed property?',
      options: [
        'When you need a side effect in response to state changes, such as fetching data or syncing storage',
        'When calculating simple derived display text',
        'When defining CSS classes only',
        'Never'
      ],
      correctIndex: 0,
      explanation:
        'watch() is intended for side effects triggered by reactive changes.'
    },
    {
      id: 'vu-14',
      type: 'mcq',
      title: 'Single File Components',
      prompt: 'What are the three common top-level sections of a Vue Single File Component?',
      options: [
        'HTML, JavaScript, CSS',
        '<template>, <script>, and <style>',
        'Model, View, Controller',
        'Start, Middle, End'
      ],
      correctIndex: 1,
      explanation:
        'Single File Components commonly combine template, script, and style sections in one .vue file.'
    },
    {
      id: 'vu-15',
      type: 'mcq',
      title: 'v-bind',
      prompt: 'What is the shorthand for v-bind?',
      options: [
        '@',
        '#',
        ':',
        '&'
      ],
      correctIndex: 2,
      explanation:
        ':href is shorthand for v-bind:href.'
    },
    {
      id: 'vu-16',
      type: 'mcq',
      title: 'v-on',
      prompt: 'What is the shorthand for v-on?',
      options: [
        ':',
        '@',
        '#',
        '!'
      ],
      correctIndex: 1,
      explanation:
        '@click is shorthand for v-on:click.'
    },
    {
      id: 'vu-17',
      type: 'mcq',
      title: 'Vue Router',
      prompt: 'Which library is the official router for Vue applications?',
      options: [
        'Vue Router',
        'React Router',
        'Page.js only',
        'NavVue'
      ],
      correctIndex: 0,
      explanation:
        'Vue Router is the official routing solution for Vue applications.'
    },
    {
      id: 'vu-18',
      type: 'mcq',
      title: 'Teleport',
      prompt: 'What does the Teleport component do?',
      options: [
        'Navigates to a different route',
        'Renders part of a component template into another location in the DOM',
        'Compresses the bundle',
        'Encrypts component state'
      ],
      correctIndex: 1,
      explanation:
        'Teleport is useful for modals, popovers, and overlays that should render outside the normal component hierarchy.'
    },
    {
      id: 'vu-19',
      type: 'mcq',
      title: 'Provide Inject',
      prompt: 'When is provide/inject typically useful?',
      options: [
        'Passing dependencies or shared data to deeply nested components without prop drilling',
        'Replacing all API calls',
        'Styling individual buttons',
        'Creating route guards only'
      ],
      correctIndex: 0,
      explanation:
        'provide/inject is useful for dependency-style sharing across deep component trees.'
    },
    {
      id: 'vu-20',
      type: 'mcq',
      title: 'Fragments',
      prompt: 'Does Vue 3 support multiple root elements in a component template?',
      options: [
        'No',
        'Yes',
        'Only with Vuex',
        'Only in production builds'
      ],
      correctIndex: 1,
      explanation:
        'Vue 3 supports fragments, so a component template can have multiple root nodes.'
    },
    {
      id: 'vu-21',
      type: 'mcq',
      title: 'v-if vs v-show',
      prompt: 'What is the difference between v-if and v-show?',
      options: [
        'There is no difference',
        'v-if adds or removes elements from the DOM; v-show toggles CSS display',
        'v-show destroys component state every time',
        'v-if is only for mobile screens'
      ],
      correctIndex: 1,
      explanation:
        'Use v-show for frequent toggling and v-if when conditional rendering is less frequent or expensive.'
    },
    {
      id: 'vu-22',
      type: 'mcq',
      title: 'v-for Key',
      prompt: 'Why is the key attribute important when using v-for?',
      options: [
        'It makes text bold',
        'It helps Vue track node identity and update lists efficiently',
        'It automatically sorts the list',
        'It sends analytics events'
      ],
      correctIndex: 1,
      explanation:
        'Stable keys help Vue preserve component state and correctly patch list changes.'
    },
    {
      id: 'vu-23',
      type: 'mcq',
      title: 'Template Refs',
      prompt: 'How do you usually access a DOM element directly in Vue 3 Composition API?',
      options: [
        'Create a ref and bind it to the template ref attribute',
        'Use document.getElementById in every component',
        'Use $els',
        'Use the router instance'
      ],
      correctIndex: 0,
      explanation:
        'Template refs allow controlled direct access to DOM elements or child component instances.'
    },
    {
      id: 'vu-24',
      type: 'mcq',
      title: 'Composables',
      prompt: 'What is a composable in Vue?',
      options: [
        'A reusable function that encapsulates stateful Composition API logic',
        'A compiled CSS file',
        'A type of route parameter',
        'A database migration'
      ],
      correctIndex: 0,
      explanation:
        'Composables help reuse logic such as fetching, form state, permissions, or viewport tracking across components.'
    },
    {
      id: 'vu-25',
      type: 'mcq',
      title: 'Pinia Store',
      prompt: 'What does a Pinia store usually contain?',
      options: [
        'Shared state, getters or computed values, and actions',
        'Only CSS variables',
        'Only route definitions',
        'Only static HTML'
      ],
      correctIndex: 0,
      explanation:
        'Pinia stores organize shared application state and behavior outside individual components.'
    },
    {
      id: 'vu-26',
      type: 'mcq',
      title: 'storeToRefs',
      prompt: 'Why is storeToRefs() useful with Pinia?',
      options: [
        'It preserves reactivity when destructuring store state and getters',
        'It disables actions',
        'It converts routes into components',
        'It creates CSS modules'
      ],
      correctIndex: 0,
      explanation:
        'Direct destructuring can lose reactivity. storeToRefs() creates refs for reactive store properties.'
    },
    {
      id: 'vu-27',
      type: 'mcq',
      title: 'Route Guards',
      prompt: 'What is a common use of Vue Router navigation guards?',
      options: [
        'Protecting routes based on authentication or permissions',
        'Changing only button colors',
        'Replacing all API requests',
        'Minifying JavaScript'
      ],
      correctIndex: 0,
      explanation:
        'Navigation guards can allow, redirect, or block route changes based on application logic.'
    },
    {
      id: 'vu-28',
      type: 'mcq',
      title: 'Lazy Loading Routes',
      prompt: 'Why lazy-load route components?',
      options: [
        'To reduce initial bundle size by loading route code only when needed',
        'To disable code splitting',
        'To prevent routing',
        'To make all pages render on the server'
      ],
      correctIndex: 0,
      explanation:
        'Lazy loading improves startup performance by splitting code into smaller chunks.'
    },
    {
      id: 'vu-29',
      type: 'mcq',
      title: 'nextTick',
      prompt: 'When should nextTick() be used?',
      options: [
        'When you need to wait until Vue has applied DOM updates after a state change',
        'Before every variable assignment',
        'Only when importing Pinia',
        'To create a new route'
      ],
      correctIndex: 0,
      explanation:
        'Vue batches DOM updates. nextTick() waits for the DOM to reflect the latest reactive changes.'
    },
    {
      id: 'vu-30',
      type: 'mcq',
      title: 'Performance',
      prompt: 'A large list renders slowly in Vue. Which approach is usually most appropriate?',
      options: [
        'Render all rows and hide most with CSS',
        'Use pagination or virtual scrolling and keep item keys stable',
        'Move all data into localStorage',
        'Disable reactivity globally'
      ],
      correctIndex: 1,
      explanation:
        'Large lists should avoid rendering thousands of DOM nodes at once. Pagination or virtualization improves performance.'
    },
    {
      id: 'vu-31',
      type: 'mcq',
      title: 'v-memo',
      prompt: 'What is the purpose of v-memo?',
      options: [
        'To memoize part of a template and skip unnecessary updates when dependencies have not changed',
        'To create a global store',
        'To define a route parameter',
        'To fetch API data'
      ],
      correctIndex: 0,
      explanation:
        'v-memo can be used as a performance optimization for expensive subtrees.'
    },
    {
      id: 'vu-32',
      type: 'mcq',
      title: 'Form Validation',
      prompt: 'Which pattern is strongest for Vue form validation?',
      options: [
        'Validate only after deployment',
        'Use clear field rules, useful error messages, and accessible feedback tied to inputs',
        'Use alerts for every keystroke',
        'Disable submit forever'
      ],
      correctIndex: 1,
      explanation:
        'Good validation combines clear rules, accessible errors, and helpful recovery guidance.'
    },
    {
      id: 'vu-33',
      type: 'mcq',
      title: 'Accessibility',
      prompt: 'A custom dropdown built in Vue cannot be used with a keyboard. What is the key issue?',
      options: [
        'Accessibility and keyboard interaction support are incomplete',
        'The component has too many props',
        'The template has too many comments',
        'Vue Router is missing'
      ],
      correctIndex: 0,
      explanation:
        'Custom interactive components must support keyboard navigation, focus management, ARIA where appropriate, and screen reader behavior.'
    },
    {
      id: 'vu-34',
      type: 'mcq',
      title: 'Testing Components',
      prompt: 'What should component tests usually focus on?',
      options: [
        'Implementation details only',
        'Rendered behavior, user interactions, emitted events, and visible outcomes',
        'File names only',
        'CSS indentation only'
      ],
      correctIndex: 1,
      explanation:
        'Useful component tests verify behavior from the user and integration perspective rather than internal implementation only.'
    },
    {
      id: 'vu-35',
      type: 'mcq',
      title: 'Error Boundaries',
      prompt: 'Which Vue feature can capture errors from descendant components?',
      options: [
        'onErrorCaptured',
        'onMounted',
        'defineProps',
        'v-bind'
      ],
      correctIndex: 0,
      explanation:
        'onErrorCaptured can intercept errors from child component rendering, event handlers, lifecycle hooks, and setup logic.'
    },
    {
      id: 'vu-36',
      type: 'mcq',
      title: 'SSR Hydration',
      prompt: 'What is hydration in a server-rendered Vue application?',
      options: [
        'The browser attaching Vue interactivity to server-rendered HTML',
        'A process for compressing images',
        'A method for deleting unused routes',
        'A CSS reset technique'
      ],
      correctIndex: 0,
      explanation:
        'Hydration reuses server-rendered markup and connects it to the client-side Vue application.'
    },
    {
      id: 'vu-37',
      type: 'mcq',
      title: 'Hydration Mismatch',
      prompt: 'What can cause a hydration mismatch?',
      options: [
        'Rendering different HTML on the server and client because of non-deterministic or browser-only logic',
        'Using props',
        'Using a component name',
        'Writing scoped CSS'
      ],
      correctIndex: 0,
      explanation:
        'Server and client markup must match during hydration. Browser-only values should be handled carefully.'
    },
    {
      id: 'vu-38',
      type: 'mcq',
      title: 'Security',
      prompt: 'Which practice helps reduce XSS risk in a Vue application?',
      options: [
        'Avoid rendering untrusted HTML with v-html unless it is sanitized',
        'Use more watchers',
        'Disable Vue Devtools',
        'Put secrets in the frontend bundle'
      ],
      correctIndex: 0,
      explanation:
        'v-html can inject raw HTML. Untrusted HTML must be sanitized or avoided.'
    },
    {
      id: 'vu-39',
      type: 'mcq',
      title: 'Production Architecture',
      prompt: 'A Vue app has duplicated API loading logic across many components. What is the best improvement?',
      options: [
        'Copy the code into more components',
        'Extract shared logic into composables or a store where appropriate',
        'Move all logic into templates',
        'Disable linting'
      ],
      correctIndex: 1,
      explanation:
        'Reusable composables and stores reduce duplication and make behavior easier to test and maintain.'
    },
    {
      id: 'vu-40',
      type: 'mcq',
      title: 'Advanced Vue Judgment',
      prompt: 'A Vue page works locally but production users report slow initial load. What should you inspect first?',
      options: [
        'Bundle size, route-level code splitting, heavy dependencies, network waterfall, and rendering cost',
        'Only the logo size',
        'Only the component names',
        'Only the number of comments in code'
      ],
      correctIndex: 0,
      explanation:
        'Production performance requires checking JavaScript payload, lazy loading, dependencies, network timing, and runtime rendering.'
    }
  ]
};