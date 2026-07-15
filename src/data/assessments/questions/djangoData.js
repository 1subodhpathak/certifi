import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level Django Backend assessment.
// Questions progress from Django fundamentals to ORM, migrations,
// request/response flow, security, authentication, DRF, performance,
// testing, deployment, and production-grade backend judgment.
export const djangoData = {
  id: ASSESSMENT_TYPES.django,
  title: 'Django Backend Developer Professional Certification',
  shortTitle: 'Django',
  category: 'Software Development',
  durationMinutes: 60,
  pointsPerQuestion: 5,
  description:
    'Professional Django backend assessment covering MVT architecture, ORM, migrations, forms, admin, middleware, authentication, authorization, security, Django REST Framework, query optimization, testing, deployment, and production readiness.',
  instructions:
    'Choose the best answer. Questions move from easy to hard and test practical Django backend development judgment, not only definitions.',
  questions: [
    {
      id: 'dj-01',
      type: 'mcq',
      title: 'Architecture',
      prompt: 'What does Django’s MVT architecture stand for?',
      options: [
        'Model-View-Target',
        'Model-View-Template',
        'Model-Value-Template',
        'Module-View-Template'
      ],
      correctIndex: 1,
      explanation:
        'Django uses Models for data, Views for request handling/business logic, and Templates for presentation.'
    },
    {
      id: 'dj-02',
      type: 'mcq',
      title: 'Project Structure',
      prompt: 'What is the main role of settings.py in a Django project?',
      options: [
        'It stores only HTML templates',
        'It contains project configuration such as installed apps, database settings, middleware, static files, and security settings',
        'It replaces all URL routing',
        'It stores database rows directly'
      ],
      correctIndex: 1,
      explanation:
        'settings.py is the central configuration file for the Django project.'
    },
    {
      id: 'dj-03',
      type: 'mcq',
      title: 'Apps',
      prompt: 'What is a Django app?',
      options: [
        'A reusable module that provides a specific set of functionality inside a Django project',
        'Only a mobile application',
        'A database server',
        'A replacement for Python packages'
      ],
      correctIndex: 0,
      explanation:
        'A Django project can contain multiple apps, each focused on a specific domain such as users, orders, billing, or content.'
    },
    {
      id: 'dj-04',
      type: 'mcq',
      title: 'ORM',
      prompt: 'How do you usually define database tables in Django?',
      options: [
        'By defining Python classes in models.py',
        'By editing HTML templates',
        'By writing JavaScript routes',
        'By changing only urls.py'
      ],
      correctIndex: 0,
      explanation:
        'Django models are Python classes that map to database tables through the ORM.'
    },
    {
      id: 'dj-05',
      type: 'mcq',
      title: 'Migrations',
      prompt: 'Which command creates migration files for model changes?',
      options: [
        'python manage.py migrate',
        'python manage.py makemigrations',
        'python manage.py collectstatic',
        'python manage.py runserver'
      ],
      correctIndex: 1,
      explanation:
        'makemigrations creates migration files. migrate applies those migrations to the database.'
    },
    {
      id: 'dj-06',
      type: 'mcq',
      title: 'Applying Migrations',
      prompt: 'Which command applies migration files to the database?',
      options: [
        'python manage.py makemigrations',
        'python manage.py migrate',
        'python manage.py startapp',
        'python manage.py shell'
      ],
      correctIndex: 1,
      explanation:
        'migrate applies pending migrations and updates the database schema.'
    },
    {
      id: 'dj-07',
      type: 'mcq',
      title: 'URL Routing',
      prompt: 'Where do you typically map URL patterns to views?',
      options: [
        'models.py',
        'views.py only',
        'urls.py',
        'admin.py'
      ],
      correctIndex: 2,
      explanation:
        'urls.py defines URL patterns and maps incoming requests to the appropriate views.'
    },
    {
      id: 'dj-08',
      type: 'mcq',
      title: 'Views',
      prompt: 'What is the main responsibility of a Django view?',
      options: [
        'Define database columns only',
        'Receive a request and return a response, often using models, templates, or serializers',
        'Store static files',
        'Run the database server'
      ],
      correctIndex: 1,
      explanation:
        'Views handle request/response logic and coordinate data retrieval, business rules, and rendering.'
    },
    {
      id: 'dj-09',
      type: 'mcq',
      title: 'Templates',
      prompt: 'Which syntax outputs a variable in a Django template?',
      options: [
        '{% variable %}',
        '{{ variable }}',
        '[[ variable ]]',
        '(( variable ))'
      ],
      correctIndex: 1,
      explanation:
        'Double curly braces output variables. Curly-percent syntax is used for template tags and logic.'
    },
    {
      id: 'dj-10',
      type: 'mcq',
      title: 'Template Logic',
      prompt: 'Which syntax is used for template tags such as if, for, and extends?',
      options: [
        '{{ if user }}',
        '{% if user %}',
        '[[ if user ]]',
        '(( if user ))'
      ],
      correctIndex: 1,
      explanation:
        'Django template tags use {% %} syntax.'
    },
    {
      id: 'dj-11',
      type: 'mcq',
      title: 'Middleware',
      prompt: 'What is Django middleware?',
      options: [
        'A database table type',
        'A framework of hooks that process requests and responses globally',
        'A template engine only',
        'A CSS bundler'
      ],
      correctIndex: 1,
      explanation:
        'Middleware can handle cross-cutting concerns such as sessions, authentication, security, CSRF, and request processing.'
    },
    {
      id: 'dj-12',
      type: 'mcq',
      title: 'Admin Interface',
      prompt: 'What is a major out-of-the-box Django feature for managing model data?',
      options: [
        'Built-in IDE',
        'Automatic admin interface',
        'Native image editor',
        'Cloud hosting dashboard'
      ],
      correctIndex: 1,
      explanation:
        'Django Admin provides a configurable interface for creating, reading, updating, and deleting model data.'
    },
    {
      id: 'dj-13',
      type: 'mcq',
      title: 'Forms',
      prompt: 'What is a key benefit of Django Form classes?',
      options: [
        'They handle rendering, validation, cleaning, and structured access to submitted data',
        'They replace the database',
        'They make every form client-side only',
        'They disable CSRF protection'
      ],
      correctIndex: 0,
      explanation:
        'Django Forms centralize validation and cleaned data handling, reducing manual form-processing bugs.'
    },
    {
      id: 'dj-14',
      type: 'mcq',
      title: 'ModelForm',
      prompt: 'When is ModelForm most useful?',
      options: [
        'When a form maps directly to a Django model',
        'When no database model exists',
        'Only when building static pages',
        'Only for JavaScript validation'
      ],
      correctIndex: 0,
      explanation:
        'ModelForm reduces boilerplate by generating form fields and validation from a model.'
    },
    {
      id: 'dj-15',
      type: 'mcq',
      title: 'QuerySet Laziness',
      prompt: 'What does it mean that Django QuerySets are lazy?',
      options: [
        'They are always slow',
        'They usually do not hit the database until the data is evaluated',
        'They cannot be filtered',
        'They are cached forever by default'
      ],
      correctIndex: 1,
      explanation:
        'QuerySets can be built and chained before the SQL query is actually executed.'
    },
    {
      id: 'dj-16',
      type: 'mcq',
      title: 'get vs filter',
      prompt: 'What is the difference between Model.objects.get() and Model.objects.filter()?',
      options: [
        'get() returns exactly one object or raises an exception; filter() returns a QuerySet',
        'filter() always returns one object',
        'get() never queries the database',
        'There is no difference'
      ],
      correctIndex: 0,
      explanation:
        'get() is for one expected row. filter() is for zero or more rows and returns a QuerySet.'
    },
    {
      id: 'dj-17',
      type: 'mcq',
      title: 'N+1 Query Problem',
      prompt: 'A page lists orders and accesses order.customer.name inside a loop, causing many extra queries. What is the likely issue?',
      options: [
        'N+1 query problem',
        'CSRF failure',
        'Template syntax error',
        'Static file issue'
      ],
      correctIndex: 0,
      explanation:
        'Accessing related objects repeatedly inside a loop can trigger one query for the list plus one query per row.'
    },
    {
      id: 'dj-18',
      type: 'mcq',
      title: 'select_related',
      prompt: 'When should select_related usually be used?',
      options: [
        'For ForeignKey or OneToOne relationships that can be joined in one SQL query',
        'Only for ManyToMany fields',
        'Only for static files',
        'Only for authentication'
      ],
      correctIndex: 0,
      explanation:
        'select_related follows single-valued relationships using SQL joins, reducing extra queries.'
    },
    {
      id: 'dj-19',
      type: 'mcq',
      title: 'prefetch_related',
      prompt: 'When is prefetch_related usually better than select_related?',
      options: [
        'For ManyToMany or reverse ForeignKey relationships where separate queries are combined in Python',
        'For reading environment variables',
        'For applying migrations',
        'For rendering one static HTML file'
      ],
      correctIndex: 0,
      explanation:
        'prefetch_related is useful for multi-valued relationships where SQL joins would create duplicate or inefficient result sets.'
    },
    {
      id: 'dj-20',
      type: 'mcq',
      title: 'Transactions',
      prompt: 'When should transaction.atomic() be considered?',
      options: [
        'When multiple database writes must succeed or fail together',
        'Only when rendering templates',
        'Only when serving CSS',
        'Whenever a variable is declared'
      ],
      correctIndex: 0,
      explanation:
        'transaction.atomic() helps keep related database operations consistent by wrapping them in a transaction.'
    },
    {
      id: 'dj-21',
      type: 'mcq',
      title: 'Race Condition',
      prompt: 'Two requests update the same inventory row at the same time and oversell stock. Which approach may help?',
      options: [
        'Use transactions and row-level locking such as select_for_update where appropriate',
        'Use only print statements',
        'Move the bug into the template',
        'Disable all database constraints'
      ],
      correctIndex: 0,
      explanation:
        'Concurrent writes may require transactions, locking, constraints, or atomic database updates to preserve correctness.'
    },
    {
      id: 'dj-22',
      type: 'mcq',
      title: 'Custom User Model',
      prompt: 'What is a Django best practice for projects that may need custom user fields or login behavior?',
      options: [
        'Plan a custom user model early, commonly using AbstractUser when suitable',
        'Edit Django’s built-in source code',
        'Store users only in sessions',
        'Avoid authentication entirely'
      ],
      correctIndex: 0,
      explanation:
        'Choosing the user model early avoids painful migrations later if user requirements change.'
    },
    {
      id: 'dj-23',
      type: 'mcq',
      title: 'Authentication',
      prompt: 'How do you check whether the current request user is authenticated?',
      options: [
        'request.user.is_authenticated',
        'request.user.exists()',
        'is_logged_in(request)',
        'request.authenticated_user()'
      ],
      correctIndex: 0,
      explanation:
        'Django exposes is_authenticated as a property on the user object.'
    },
    {
      id: 'dj-24',
      type: 'mcq',
      title: 'Authorization',
      prompt: 'Authentication confirms identity. What does authorization determine?',
      options: [
        'Whether the user is allowed to perform a specific action or access a specific resource',
        'Whether HTML is valid',
        'Whether static files exist',
        'Whether the server has enough RAM'
      ],
      correctIndex: 0,
      explanation:
        'Authorization controls permissions after the user has been identified.'
    },
    {
      id: 'dj-25',
      type: 'mcq',
      title: 'CSRF',
      prompt: 'What is the purpose of {% csrf_token %} in Django forms?',
      options: [
        'To make forms load faster',
        'To help protect against Cross-Site Request Forgery attacks',
        'To style the form',
        'To upload files automatically'
      ],
      correctIndex: 1,
      explanation:
        'CSRF tokens help verify that a form submission came from a trusted source.'
    },
    {
      id: 'dj-26',
      type: 'mcq',
      title: 'Security Settings',
      prompt: 'Which production setting is most dangerous if left enabled?',
      options: [
        'DEBUG = True',
        'USE_TZ = True',
        'INSTALLED_APPS contains admin',
        'STATIC_URL is set'
      ],
      correctIndex: 0,
      explanation:
        'DEBUG=True can expose sensitive error details and should not be used in production.'
    },
    {
      id: 'dj-27',
      type: 'mcq',
      title: 'Allowed Hosts',
      prompt: 'What is the purpose of ALLOWED_HOSTS in Django?',
      options: [
        'To restrict which host/domain names the Django site can serve',
        'To define database tables',
        'To list HTML templates',
        'To configure only CSS files'
      ],
      correctIndex: 0,
      explanation:
        'ALLOWED_HOSTS helps prevent certain Host header attacks by limiting accepted hostnames.'
    },
    {
      id: 'dj-28',
      type: 'mcq',
      title: 'Static Files',
      prompt: 'Which command is commonly used to collect static files for production deployment?',
      options: [
        'python manage.py collectstatic',
        'python manage.py makestatic',
        'python manage.py migrate_static',
        'python manage.py runassets'
      ],
      correctIndex: 0,
      explanation:
        'collectstatic gathers static assets into the configured static root for serving in production.'
    },
    {
      id: 'dj-29',
      type: 'mcq',
      title: 'Media Files',
      prompt: 'What is the difference between static files and media files in Django?',
      options: [
        'Static files are app assets like CSS/JS/images; media files are user-uploaded files',
        'They are exactly the same',
        'Media files are only Python files',
        'Static files are database rows'
      ],
      correctIndex: 0,
      explanation:
        'Static assets belong to the application, while media files are typically uploaded by users.'
    },
    {
      id: 'dj-30',
      type: 'mcq',
      title: 'Context Processors',
      prompt: 'What is a context processor?',
      options: [
        'A function that adds data to template context globally or across many templates',
        'A database backup tool',
        'A CSS optimizer',
        'A migration command'
      ],
      correctIndex: 0,
      explanation:
        'Context processors are useful for common data needed by many templates, such as user/session/site context.'
    },
    {
      id: 'dj-31',
      type: 'mcq',
      title: 'Signals',
      prompt: 'What are Django signals best used for?',
      options: [
        'Decoupled notifications when certain actions occur, such as post_save or pre_delete',
        'Replacing all business logic',
        'Routing every request',
        'Rendering CSS files'
      ],
      correctIndex: 0,
      explanation:
        'Signals can decouple event reactions, but overusing them can make flow harder to trace.'
    },
    {
      id: 'dj-32',
      type: 'mcq',
      title: 'Django REST Framework',
      prompt: 'What is Django REST Framework mainly used for?',
      options: [
        'Designing CSS themes',
        'Building Web APIs with Django',
        'Managing image compression only',
        'Replacing the database engine'
      ],
      correctIndex: 1,
      explanation:
        'DRF is a toolkit for building API endpoints, serializers, permissions, authentication, viewsets, and related API behavior.'
    },
    {
      id: 'dj-33',
      type: 'mcq',
      title: 'Serializers',
      prompt: 'In DRF, what is the role of a serializer?',
      options: [
        'To convert complex objects to native data types and validate incoming data',
        'To encrypt every database table automatically',
        'To define only URL patterns',
        'To serve static files'
      ],
      correctIndex: 0,
      explanation:
        'Serializers handle representation, validation, and conversion between complex objects and primitive data structures.'
    },
    {
      id: 'dj-34',
      type: 'mcq',
      title: 'ViewSets',
      prompt: 'What is a benefit of using a DRF ViewSet?',
      options: [
        'It combines related actions for a resource, such as list, retrieve, create, update, and delete',
        'It replaces all database indexes',
        'It disables authentication',
        'It is only used for HTML templates'
      ],
      correctIndex: 0,
      explanation:
        'ViewSets organize related API behavior for a resource and are often paired with routers.'
    },
    {
      id: 'dj-35',
      type: 'mcq',
      title: 'DRF Permissions',
      prompt: 'What do DRF permissions determine?',
      options: [
        'Whether a request should be allowed to access or modify a resource',
        'Whether a CSS file is compressed',
        'Whether migrations are created',
        'Whether the server can start'
      ],
      correctIndex: 0,
      explanation:
        'Permissions determine whether authenticated or unauthenticated requests are authorized for an action or object.'
    },
    {
      id: 'dj-36',
      type: 'mcq',
      title: 'DRF Throttling',
      prompt: 'What is the purpose of throttling in DRF?',
      options: [
        'To control the rate of API requests',
        'To make serializers slower',
        'To replace database constraints',
        'To disable pagination'
      ],
      correctIndex: 0,
      explanation:
        'Throttling limits request rates and helps protect APIs from abuse or excessive traffic.'
    },
    {
      id: 'dj-37',
      type: 'mcq',
      title: 'Pagination',
      prompt: 'Why is pagination important for list API endpoints?',
      options: [
        'It splits large result sets into smaller responses for better performance and usability',
        'It encrypts passwords',
        'It replaces authentication',
        'It prevents all database writes'
      ],
      correctIndex: 0,
      explanation:
        'Pagination avoids returning very large datasets in one response and improves API performance.'
    },
    {
      id: 'dj-38',
      type: 'mcq',
      title: 'Testing',
      prompt: 'Which command runs Django’s built-in test suite?',
      options: [
        'python manage.py runtests',
        'python manage.py test',
        'python manage.py checktests',
        'django testserver only'
      ],
      correctIndex: 1,
      explanation:
        'python manage.py test runs Django’s test runner.'
    },
    {
      id: 'dj-39',
      type: 'mcq',
      title: 'Production Debugging',
      prompt: 'A Django endpoint became slow after adding related data to the response. What should you inspect first?',
      options: [
        'Query count, SQL generated by the ORM, select_related/prefetch_related usage, indexes, and serializer behavior',
        'Only the page font',
        'Only the admin site title',
        'Only the README file'
      ],
      correctIndex: 0,
      explanation:
        'Slow Django endpoints often come from extra queries, inefficient joins, missing indexes, or expensive serialization.'
    },
    {
      id: 'dj-40',
      type: 'mcq',
      title: 'Advanced Backend Judgment',
      prompt: 'A Django API handles financial transactions. Which design choice is most important?',
      options: [
        'Prioritize transactional consistency, idempotency, validation, authorization, auditability, and clear failure handling',
        'Store all transaction state only in the browser',
        'Disable database constraints for speed',
        'Skip tests if the API works once locally'
      ],
      correctIndex: 0,
      explanation:
        'Financial workflows require strong correctness guarantees, safe retries, validation, authorization, audit trails, and reliable error handling.'
    }
  ]
};