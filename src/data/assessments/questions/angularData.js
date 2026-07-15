import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level Angular assessment.
// Questions progress from Angular fundamentals to enterprise architecture,
// RxJS, routing, forms, performance, security, testing, SSR, and modern Angular features.
export const angularData = {
  id: ASSESSMENT_TYPES.angular,
  title: 'Angular Enterprise Developer Certification',
  shortTitle: 'Angular',
  category: 'Software Development',
  durationMinutes: 50,
  pointsPerQuestion: 5,
  description:
    'Professional Angular assessment covering components, standalone architecture, dependency injection, templates, routing, forms, RxJS, HttpClient, interceptors, signals, performance optimization, testing, security, SSR, and enterprise application design.',
  questions: [
    {
      id: 'ng-01',
      type: 'mcq',
      title: 'Angular Fundamentals',
      prompt: 'What is Angular primarily used for?',
      options: [
        'Building scalable client-side web applications using TypeScript, templates, routing, dependency injection, and tooling',
        'Managing relational databases only',
        'Writing backend APIs only',
        'Replacing HTML and CSS completely'
      ],
      correctIndex: 0,
      explanation:
        'Angular is a full-featured web application framework used to build scalable, maintainable client-side applications.'
    },
    {
      id: 'ng-02',
      type: 'mcq',
      title: 'Components',
      prompt: 'What is the main role of a component in Angular?',
      options: [
        'To define a reusable UI block with its own template, styles, and behavior',
        'To store database records',
        'To replace the Angular router',
        'To run only server-side code'
      ],
      correctIndex: 0,
      explanation:
        'A component is the basic building block of Angular UI. It combines a TypeScript class, template, styles, and metadata.'
    },
    {
      id: 'ng-03',
      type: 'mcq',
      title: 'Component Decorator',
      prompt: 'Which decorator is used to define an Angular component?',
      options: ['@NgModule', '@Injectable', '@Component', '@Pipe'],
      correctIndex: 2,
      explanation:
        '@Component marks a class as an Angular component and provides metadata such as selector, template, styles, and imports.'
    },
    {
      id: 'ng-04',
      type: 'mcq',
      title: 'Standalone Components',
      prompt: 'In modern Angular, what is the main benefit of standalone components?',
      options: [
        'They allow components to be used without declaring them inside an NgModule',
        'They prevent dependency injection from working',
        'They remove the need for templates',
        'They are used only for unit tests'
      ],
      correctIndex: 0,
      explanation:
        'Standalone components simplify Angular architecture by allowing components, directives, and pipes to declare their own dependencies directly.'
    },
    {
      id: 'ng-05',
      type: 'mcq',
      title: 'Template Binding',
      prompt: 'Which syntax is used for interpolation in an Angular template?',
      options: ['[value]', '(click)', '{{ value }}', '[(ngModel)]'],
      correctIndex: 2,
      explanation:
        'Interpolation uses double curly braces to display component data inside the template.'
    },
    {
      id: 'ng-06',
      type: 'mcq',
      title: 'Property Binding',
      prompt: 'Which Angular binding syntax is used to set a DOM property from component data?',
      options: ['[src]="imageUrl"', '(src)="imageUrl"', '{{ src }}="imageUrl"', '#src="imageUrl"'],
      correctIndex: 0,
      explanation:
        'Property binding uses square brackets to bind a DOM property or component input to an expression.'
    },
    {
      id: 'ng-07',
      type: 'mcq',
      title: 'Event Binding',
      prompt: 'Which syntax correctly handles a button click event in Angular?',
      options: [
        '[click]="save()"',
        '(click)="save()"',
        '{{ click }}="save()"',
        '[(click)]="save()"'
      ],
      correctIndex: 1,
      explanation:
        'Event binding uses parentheses around the event name, such as (click), to call a component method.'
    },
    {
      id: 'ng-08',
      type: 'mcq',
      title: 'Two-Way Binding',
      prompt: 'Which syntax is commonly used for two-way binding with template-driven forms?',
      options: ['{{ value }}', '[value]', '(value)', '[(ngModel)]'],
      correctIndex: 3,
      explanation:
        '[(ngModel)] is called banana-in-a-box syntax because it combines property binding and event binding.'
    },
    {
      id: 'ng-09',
      type: 'mcq',
      title: 'Structural Directives',
      prompt: 'What is the purpose of a structural directive such as *ngIf?',
      options: [
        'To change the structure of the DOM by adding or removing elements',
        'To make HTTP requests',
        'To register services globally',
        'To encrypt route parameters'
      ],
      correctIndex: 0,
      explanation:
        'Structural directives modify the DOM layout. For example, *ngIf conditionally creates or removes an element.'
    },
    {
      id: 'ng-10',
      type: 'mcq',
      title: 'Modern Control Flow',
      prompt: 'In modern Angular templates, which syntax is used for built-in conditional rendering?',
      options: ['@if', '#if', '$if', '<if>'],
      correctIndex: 0,
      explanation:
        'Modern Angular supports built-in control flow syntax such as @if, @else, @for, and @switch for clearer template logic.'
    },
    {
      id: 'ng-11',
      type: 'mcq',
      title: 'Dependency Injection',
      prompt: 'What problem does Angular dependency injection primarily solve?',
      options: [
        'It allows classes to receive required dependencies without manually creating them',
        'It converts TypeScript into JavaScript',
        'It replaces route guards',
        'It prevents all runtime errors'
      ],
      correctIndex: 0,
      explanation:
        'Dependency injection improves testability and maintainability by letting Angular create and provide required services.'
    },
    {
      id: 'ng-12',
      type: 'mcq',
      title: 'Service Scope',
      prompt: 'What does providedIn: "root" usually mean in an Angular service?',
      options: [
        'The service is available as an application-wide singleton and can be tree-shaken if unused',
        'The service can only be used inside root HTML elements',
        'The service is recreated on every button click',
        'The service is available only inside unit tests'
      ],
      correctIndex: 0,
      explanation:
        'providedIn: "root" registers a service with the root injector, commonly creating a singleton service available throughout the app.'
    },
    {
      id: 'ng-13',
      type: 'mcq',
      title: 'Hierarchical Injectors',
      prompt: 'A service is provided in a component providers array. What is the likely result?',
      options: [
        'A new instance is created for that component subtree',
        'The application fails to compile',
        'The service becomes available only to the router',
        'The service is automatically converted into a pipe'
      ],
      correctIndex: 0,
      explanation:
        'Angular has hierarchical dependency injection. Providing a service at the component level creates a scoped instance for that component and its children.'
    },
    {
      id: 'ng-14',
      type: 'mcq',
      title: 'Lifecycle Hooks',
      prompt: 'Which lifecycle hook is commonly used for component initialization after input-bound properties are set?',
      options: ['ngOnInit', 'ngOnDestroy', 'ngAfterViewChecked', 'ngDoBootstrap'],
      correctIndex: 0,
      explanation:
        'ngOnInit is commonly used to run initialization logic after Angular initializes input-bound properties.'
    },
    {
      id: 'ng-15',
      type: 'mcq',
      title: 'ViewChild',
      prompt: 'What is @ViewChild used for?',
      options: [
        'Accessing a child component, directive, or DOM element from the component class',
        'Creating a route configuration',
        'Adding authentication headers to HTTP requests',
        'Declaring global CSS variables'
      ],
      correctIndex: 0,
      explanation:
        '@ViewChild gives the component class access to a child component, directive, or template element.'
    },
    {
      id: 'ng-16',
      type: 'mcq',
      title: 'Content Projection',
      prompt: 'Which Angular element is used to project external content into a component template?',
      options: ['<ng-content>', '<router-outlet>', '<ng-template-outlet>', '<content-view>'],
      correctIndex: 0,
      explanation:
        '<ng-content> is used for content projection, allowing parent-provided content to be inserted into a child component template.'
    },
    {
      id: 'ng-17',
      type: 'mcq',
      title: 'Pipes',
      prompt: 'What is the primary purpose of a pipe in Angular?',
      options: [
        'Transforming data for display in templates',
        'Creating HTTP interceptors',
        'Defining route permissions',
        'Creating database tables'
      ],
      correctIndex: 0,
      explanation:
        'Pipes transform values in templates. Common examples include date, currency, uppercase, lowercase, and async.'
    },
    {
      id: 'ng-18',
      type: 'mcq',
      title: 'Pure Pipes',
      prompt: 'When does a pure pipe re-run by default?',
      options: [
        'Only when Angular detects a pure change to the input value or reference',
        'On every mouse movement',
        'Only when the application starts',
        'Only after a route guard executes'
      ],
      correctIndex: 0,
      explanation:
        'Pure pipes run only when their input value changes or an object reference changes, making them efficient for template transformations.'
    },
    {
      id: 'ng-19',
      type: 'mcq',
      title: 'Routing',
      prompt: 'Which Angular directive marks where routed components should be displayed?',
      options: ['<router-link>', '<router-outlet>', '<router-view>', '<ng-route>'],
      correctIndex: 1,
      explanation:
        '<router-outlet> is the placeholder where Angular inserts the component matched by the current route.'
    },
    {
      id: 'ng-20',
      type: 'mcq',
      title: 'Route Guards',
      prompt: 'Which route guard is commonly used to prevent unauthorized users from entering a route?',
      options: ['canActivate', 'canDeactivate', 'resolve', 'pathMatch'],
      correctIndex: 0,
      explanation:
        'canActivate controls whether navigation to a route is allowed, commonly used for authentication and authorization.'
    },
    {
      id: 'ng-21',
      type: 'mcq',
      title: 'Lazy Loading',
      prompt: 'What is the primary benefit of lazy loading Angular routes?',
      options: [
        'It loads feature code only when needed, improving initial load performance',
        'It disables dependency injection',
        'It removes the need for route guards',
        'It forces every component to load at startup'
      ],
      correctIndex: 0,
      explanation:
        'Lazy loading improves performance by splitting the application into chunks and loading feature code only when the user navigates to it.'
    },
    {
      id: 'ng-22',
      type: 'mcq',
      title: 'Reactive Forms',
      prompt: 'Which class represents a group of form controls in Angular Reactive Forms?',
      options: ['FormGroup', 'FormRoute', 'FormPipe', 'FormModule'],
      correctIndex: 0,
      explanation:
        'FormGroup tracks the value and validation state of a group of related form controls.'
    },
    {
      id: 'ng-23',
      type: 'mcq',
      title: 'Form Validation',
      prompt: 'In Reactive Forms, where are validators commonly configured?',
      options: [
        'Inside FormControl or FormBuilder configuration',
        'Only inside global CSS',
        'Only inside angular.json',
        'Inside the browser console'
      ],
      correctIndex: 0,
      explanation:
        'Reactive Forms define validators in the form model using FormControl, FormGroup, or FormBuilder configuration.'
    },
    {
      id: 'ng-24',
      type: 'mcq',
      title: 'RxJS Observables',
      prompt: 'Why are Observables important in Angular?',
      options: [
        'They represent asynchronous streams used by HttpClient, forms, router events, and reactive programming patterns',
        'They are used only to write CSS',
        'They replace all services',
        'They are required only for images'
      ],
      correctIndex: 0,
      explanation:
        'Angular uses RxJS Observables extensively for asynchronous data, event streams, HTTP responses, and reactive workflows.'
    },
    {
      id: 'ng-25',
      type: 'mcq',
      title: 'HttpClient',
      prompt: 'What does Angular HttpClient usually return when making HTTP requests?',
      options: ['Observable', 'Promise only', 'Callback only', 'Plain HTML string always'],
      correctIndex: 0,
      explanation:
        'Angular HttpClient methods return RxJS Observables that emit the HTTP response when subscribed.'
    },
    {
      id: 'ng-26',
      type: 'mcq',
      title: 'Async Pipe',
      prompt: 'What is the benefit of using the async pipe in a template?',
      options: [
        'It subscribes to an Observable or Promise and automatically unsubscribes when the component is destroyed',
        'It converts CSS into JavaScript',
        'It disables change detection',
        'It prevents routes from loading'
      ],
      correctIndex: 0,
      explanation:
        'The async pipe helps reduce manual subscription management and prevents common memory leaks.'
    },
    {
      id: 'ng-27',
      type: 'mcq',
      title: 'RxJS Operators',
      prompt: 'Which RxJS operator is commonly used to cancel a previous HTTP request when a new search term arrives?',
      options: ['switchMap', 'mergeAll', 'scan', 'delay'],
      correctIndex: 0,
      explanation:
        'switchMap unsubscribes from the previous inner Observable and switches to the latest one, making it useful for search/autocomplete flows.'
    },
    {
      id: 'ng-28',
      type: 'mcq',
      title: 'Memory Leaks',
      prompt: 'Which pattern helps prevent memory leaks from long-lived manual subscriptions?',
      options: [
        'Using async pipe, takeUntilDestroyed, or explicit unsubscribe patterns',
        'Putting all subscriptions inside CSS files',
        'Calling subscribe inside every template expression',
        'Disabling TypeScript strict mode'
      ],
      correctIndex: 0,
      explanation:
        'Long-lived manual subscriptions should be cleaned up using safe patterns such as async pipe, takeUntilDestroyed, or explicit unsubscribe logic.'
    },
    {
      id: 'ng-29',
      type: 'mcq',
      title: 'HTTP Interceptors',
      prompt: 'What is a common enterprise use case for Angular HTTP interceptors?',
      options: [
        'Adding authentication headers, logging, retry logic, or centralized error handling',
        'Defining component CSS only',
        'Replacing the Angular compiler',
        'Creating database indexes'
      ],
      correctIndex: 0,
      explanation:
        'HTTP interceptors act as middleware for requests and responses, commonly used for authentication, logging, retries, and error handling.'
    },
    {
      id: 'ng-30',
      type: 'mcq',
      title: 'Functional Interceptors',
      prompt: 'In modern Angular, which interceptor style is generally recommended for more predictable ordering?',
      options: [
        'Functional interceptors configured with withInterceptors',
        'Random interceptors created inside templates',
        'CSS interceptors',
        'Interceptors declared only in index.html'
      ],
      correctIndex: 0,
      explanation:
        'Modern Angular recommends functional interceptors with withInterceptors because their ordering is more predictable than DI-based interceptor ordering.'
    },
    {
      id: 'ng-31',
      type: 'mcq',
      title: 'Change Detection',
      prompt: 'What does ChangeDetectionStrategy.OnPush help optimize?',
      options: [
        'It reduces unnecessary change detection checks by relying on input reference changes, events, async updates, and explicit triggers',
        'It disables the router completely',
        'It prevents services from being injected',
        'It forces every component to re-render every millisecond'
      ],
      correctIndex: 0,
      explanation:
        'OnPush is an important performance strategy for enterprise Angular apps because it limits unnecessary component checks.'
    },
    {
      id: 'ng-32',
      type: 'mcq',
      title: 'Signals',
      prompt: 'What is the purpose of signals in Angular?',
      options: [
        'They provide fine-grained reactive state tracking for values that can notify dependents when they change',
        'They replace HTML templates with SQL queries',
        'They are used only for HTTP status codes',
        'They are a browser-only CSS feature'
      ],
      correctIndex: 0,
      explanation:
        'Signals are Angular reactive primitives that track state changes and update dependent computations or views more granularly.'
    },
    {
      id: 'ng-33',
      type: 'mcq',
      title: 'Computed Signals',
      prompt: 'What is a computed signal used for?',
      options: [
        'Deriving a value from one or more signals and recalculating when dependencies change',
        'Creating a new Angular CLI workspace',
        'Declaring a database schema',
        'Uploading files to the server automatically'
      ],
      correctIndex: 0,
      explanation:
        'computed is used to derive reactive values from other signals. It updates when its signal dependencies change.'
    },
    {
      id: 'ng-34',
      type: 'mcq',
      title: 'Security',
      prompt: 'Which security risk is Angular template sanitization designed to reduce?',
      options: [
        'Cross-site scripting attacks caused by unsafe HTML, URLs, or script content',
        'Slow internet connection',
        'Incorrect TypeScript imports',
        'Large bundle size only'
      ],
      correctIndex: 0,
      explanation:
        'Angular sanitization helps protect against XSS by treating template values as untrusted and sanitizing risky content.'
    },
    {
      id: 'ng-35',
      type: 'mcq',
      title: 'Route-Level Authorization',
      prompt: 'Why should sensitive authorization checks not rely only on Angular route guards?',
      options: [
        'Because client-side checks can be bypassed; authorization must also be enforced on the backend',
        'Because route guards work only with CSS',
        'Because Angular route guards cannot return booleans',
        'Because backend APIs cannot authenticate users'
      ],
      correctIndex: 0,
      explanation:
        'Route guards improve frontend UX, but real security must be enforced by backend APIs because client-side code can be inspected or bypassed.'
    },
    {
      id: 'ng-36',
      type: 'mcq',
      title: 'Testing',
      prompt: 'What is TestBed used for in Angular testing?',
      options: [
        'Creating an Angular testing environment for components, services, dependency injection, and template interaction',
        'Replacing production routing permanently',
        'Minifying CSS files only',
        'Deploying applications to production'
      ],
      correctIndex: 0,
      explanation:
        'TestBed configures an Angular testing module/environment so tests can create components, inject services, and verify behavior.'
    },
    {
      id: 'ng-37',
      type: 'mcq',
      title: 'Modern Angular Test Runner',
      prompt: 'According to current Angular documentation, what is the default unit test runner for new Angular CLI projects?',
      options: ['Karma', 'Vitest', 'Mocha', 'Protractor'],
      correctIndex: 1,
      explanation:
        'Current Angular documentation states that Vitest is the default test runner for new Angular CLI projects, while Karma remains supported.'
    },
    {
      id: 'ng-38',
      type: 'mcq',
      title: 'HTTP Testing',
      prompt: 'When unit testing a service that uses HttpClient, what should you generally do?',
      options: [
        'Mock the HTTP backend and assert expected requests/responses',
        'Always call the real production API',
        'Remove all error handling',
        'Test only by refreshing the browser manually'
      ],
      correctIndex: 0,
      explanation:
        'HTTP-dependent services should usually be tested with a mocked HTTP backend so tests remain fast, reliable, and isolated.'
    },
    {
      id: 'ng-39',
      type: 'mcq',
      title: 'SSR and Hydration',
      prompt: 'What is a major benefit of Angular server-side rendering and hydration?',
      options: [
        'Improved initial load experience, SEO support, and smoother transition from server-rendered HTML to client interactivity',
        'Removing the need for JavaScript entirely in all cases',
        'Replacing components with database tables',
        'Disabling routing in production'
      ],
      correctIndex: 0,
      explanation:
        'SSR can improve perceived performance and SEO, while hydration connects server-rendered HTML to Angular client-side behavior.'
    },
    {
      id: 'ng-40',
      type: 'mcq',
      title: 'Enterprise Architecture',
      prompt: 'In a large Angular enterprise application, which practice usually improves maintainability the most?',
      options: [
        'Organizing code into clear feature boundaries with shared libraries, lazy routes, typed services, tests, and consistent state/data patterns',
        'Putting all components, services, and styles into one file',
        'Disabling TypeScript strictness to move faster',
        'Avoiding tests until production bugs appear'
      ],
      correctIndex: 0,
      explanation:
        'Enterprise Angular apps benefit from clear feature boundaries, consistent architecture, strong typing, lazy loading, reusable services, and automated testing.'
    }
  ]
};