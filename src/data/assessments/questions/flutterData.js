import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level assessment data.
// Original uploaded questions are preserved and extended with advanced scenarios.
export const flutterData = {
  id: ASSESSMENT_TYPES.flutter,
  title: "Flutter Multi-Platform Developer Professional Certification",
  shortTitle: "Flutter",
  category: "Software Development",
  durationMinutes: 60,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: "Professional Flutter assessment covering Dart, widgets, state management, layout, navigation, async UI, platform channels, testing, performance, and production app judgment.",
  instructions: "Choose the best answer. Questions move from easy to hard and test practical Flutter development judgment.",
  questions: [
{ id: 'fl-01', type: 'mcq', title: 'Core Philosophy', prompt: 'What is the primary unit of UI in Flutter?', options: ['View', 'Component', 'Widget', 'Element'], correctIndex: 2, explanation: 'In Flutter, "Everything is a Widget".' },
        { id: 'fl-02', type: 'mcq', title: 'Language', prompt: 'Which programming language is used to build Flutter apps?', options: ['Java', 'Swift', 'Kotlin', 'Dart'], correctIndex: 3, explanation: 'Dart is optimized for UI and offers fast development with Hot Reload.' },
        { id: 'fl-03', type: 'mcq', title: 'Reactivity', prompt: 'What is the difference between a StatelessWidget and a StatefulWidget?', options: ['Stateless is faster', 'Stateful allows the UI to change dynamically based on internal data', 'Stateless is for iOS only', 'Stateful uses more memory'], correctIndex: 1, explanation: 'StatefulWidgets maintain state that can change over time.' },
        { id: 'fl-04', type: 'mcq', title: 'Hot Reload', prompt: 'What is "Hot Reload" in Flutter?', options: ['A phone charger', 'Injecting updated code into the running Dart VM without losing app state', 'A full restart', 'A build tool'], correctIndex: 1, explanation: 'Hot Reload allows developers to see changes instantly.' },
        { id: 'fl-05', type: 'mcq', title: 'Layout', prompt: 'Which widget is used to arrange children vertically?', options: ['Row', 'Column', 'Stack', 'ListView'], correctIndex: 1, explanation: 'Columns align children in a vertical array.' },
        { id: 'fl-06', type: 'mcq', title: 'Pubspec', prompt: 'What is the purpose of the pubspec.yaml file?', options: ['Writing code', 'Managing app dependencies, assets, and metadata', 'Configuring the server', 'Styling'], correctIndex: 1, explanation: 'It is the configuration file for the Dart package manager.' },
        { id: 'fl-07', type: 'mcq', title: 'State Management', prompt: 'Which of these is a popular state management solution in the Flutter community?', options: ['Redux', 'Provider', 'Context', 'Vuex'], correctIndex: 1, explanation: 'Provider is a wrapper around InheritedWidget, recommended for many apps.' },
        { id: 'fl-08', type: 'mcq', title: 'BuildContext', prompt: 'What is "BuildContext" in Flutter?', options: ['The app theme', 'A handle to the location of a widget in the widget tree', 'A database connection', 'A type of animation'], correctIndex: 1, explanation: 'Context is used to look up themes, media queries, and navigators.' },
        { id: 'fl-09', type: 'mcq', title: 'Navigation', prompt: 'How do you move to a new screen in Flutter?', options: ['<a> tags', 'Navigator.push()', 'window.location', 'Screen.load()'], correctIndex: 1, explanation: 'Navigator manages a stack of Route objects.' },
        { id: 'fl-10', type: 'mcq', title: 'Main', prompt: 'What is the entry point of a Flutter application?', options: ['main() function', 'App.java', 'index.html', 'AppDelegate.swift'], correctIndex: 0, explanation: 'The main() function calls runApp() to start the app.' },
        { id: 'fl-11', type: 'mcq', title: 'Material vs Cupertino', prompt: 'What is the difference between Material and Cupertino widgets?', options: ['Material is for Web, Cupertino is for Mobile', 'Material follows Google design; Cupertino follows Apple design', 'No difference', 'Cupertino is paid'], correctIndex: 1, explanation: 'Flutter provides both design systems out of the box.' },
        { id: 'fl-12', type: 'mcq', title: 'FutureBuilder', prompt: 'What is the purpose of a FutureBuilder?', options: ['Predicting the future', 'Building widgets based on the latest snapshot of interaction with a Future', 'Saving data', 'Caching'], correctIndex: 1, explanation: 'It simplifies handling asynchronous data in the UI.' },
        { id: 'fl-13', type: 'mcq', title: 'Keys', prompt: 'When are "Keys" typically needed in Flutter?', options: ['Everywhere', 'When preserving state across the widget tree when widgets move', 'To unlock features', 'For encryption'], correctIndex: 1, explanation: 'Keys help identify widgets when their position in the tree changes.' },
        { id: 'fl-14', type: 'mcq', title: 'Assets', prompt: 'Where must you declare images/fonts to use them in a Flutter app?', options: ['In code only', 'In pubspec.yaml', 'In a separate database', 'In index.html'], correctIndex: 1, explanation: 'All assets must be listed in the pubspec under the assets section.' },
        { id: 'fl-15', type: 'mcq', title: 'Scaffold', prompt: 'What is a "Scaffold" widget?', options: ['A temporary build tool', 'A helper widget providing a structure for the standard Material Design layout (AppBar, Drawer, etc.)', 'A type of bug', 'A database schema'], correctIndex: 1, explanation: 'Scaffold is the "foundation" of most Flutter screens.' },
        { id: 'fl-16', type: 'mcq', title: 'Packages', prompt: 'Where can you find community-built packages for Flutter?', options: ['GitHub only', 'pub.dev', 'App Store', 'npm'], correctIndex: 1, explanation: 'pub.dev is the official repository for Dart and Flutter packages.' },
        { id: 'fl-17', type: 'mcq', title: 'Native Bridge', prompt: 'How does Flutter communicate with native platform APIs (Java/Swift)?', options: ['Directly', 'Method Channels', 'Webviews', 'HTTP'], correctIndex: 1, explanation: 'Method channels allow passing messages between Dart and native code.' },
        { id: 'fl-18', type: 'mcq', title: 'Build Modes', prompt: 'What is the difference between Debug and Release mode in Flutter?', options: ['No difference', 'Release is optimized for performance and doesn\'t include the debugger or JIT compiler', 'Debug is faster', 'Release is larger'], correctIndex: 1, explanation: 'Release mode uses AOT (Ahead-of-Time) compilation for speed.' },
        { id: 'fl-19', type: 'mcq', title: 'Sliver', prompt: 'What is a "Sliver" in Flutter?', options: ['A small bug', 'A portion of a scrollable area that can be configured to behave in special ways', 'A type of button', 'A color'], correctIndex: 1, explanation: 'Slivers allow for complex scrolling effects like shrinking app bars.' },
        { id: 'fl-20', type: 'mcq', title: 'Dart - Null Safety', prompt: 'Does Dart support sound null safety?', options: ['No', 'Yes, since version 2.12', 'Only in experimental mode', 'Only for strings'], correctIndex: 1, explanation: 'Sound null safety prevents null-related crashes at compile time.' },
    {
          "id": "fl-21",
          "type": "mcq",
          "title": "Widget Tree",
          "prompt": "What is the widget tree?",
          "options": [
                "The hierarchical structure of widgets that describes the UI",
                "Only a folder of images",
                "A database schema",
                "A server process"
          ],
          "correctIndex": 0,
          "explanation": "Flutter UIs are composed as trees of widgets."
    },
    {
          "id": "fl-22",
          "type": "mcq",
          "title": "Element Tree",
          "prompt": "What does an Element represent?",
          "options": [
                "A widget instance mounted at a specific location in the tree",
                "Only a CSS class",
                "A package version",
                "A network request"
          ],
          "correctIndex": 0,
          "explanation": "Elements connect widgets to the rendered tree and hold location/context."
    },
    {
          "id": "fl-23",
          "type": "mcq",
          "title": "setState",
          "prompt": "When should setState be called?",
          "options": [
                "When internal state changes and the widget needs rebuilding",
                "During every build unconditionally",
                "Only before runApp",
                "Never"
          ],
          "correctIndex": 0,
          "explanation": "setState notifies Flutter that state changed and UI should rebuild."
    },
    {
          "id": "fl-24",
          "type": "mcq",
          "title": "Build Method",
          "prompt": "Why should build methods avoid expensive side effects?",
          "options": [
                "Build can run often; side effects can cause performance issues or repeated work",
                "Build runs only once forever",
                "Build cannot access widgets",
                "Build is only for networking"
          ],
          "correctIndex": 0,
          "explanation": "Build should be a pure description of UI where possible."
    },
    {
          "id": "fl-25",
          "type": "mcq",
          "title": "Keys",
          "prompt": "Why are Keys useful?",
          "options": [
                "They help Flutter preserve widget identity during tree changes",
                "They encrypt widgets",
                "They replace routes",
                "They control app permissions"
          ],
          "correctIndex": 0,
          "explanation": "Keys are important when reordering or preserving state among similar widgets."
    },
    {
          "id": "fl-26",
          "type": "mcq",
          "title": "FutureBuilder",
          "prompt": "What is FutureBuilder used for?",
          "options": [
                "Building UI based on the state of a Future",
                "Creating fonts",
                "Replacing all state management",
                "Only drawing images"
          ],
          "correctIndex": 0,
          "explanation": "FutureBuilder reacts to async snapshot states."
    },
    {
          "id": "fl-27",
          "type": "mcq",
          "title": "StreamBuilder",
          "prompt": "When is StreamBuilder appropriate?",
          "options": [
                "When UI should update from a stream of asynchronous values",
                "Only for static text",
                "Only for app icons",
                "Only during build configuration"
          ],
          "correctIndex": 0,
          "explanation": "StreamBuilder listens to a stream and rebuilds as new data arrives."
    },
    {
          "id": "fl-28",
          "type": "mcq",
          "title": "Provider",
          "prompt": "What is a core benefit of Provider?",
          "options": [
                "Sharing and reacting to state through the widget tree",
                "Compiling native code only",
                "Replacing Dart",
                "Editing Gradle files"
          ],
          "correctIndex": 0,
          "explanation": "Provider helps expose state and dependencies to descendants."
    },
    {
          "id": "fl-29",
          "type": "mcq",
          "title": "Bloc Pattern",
          "prompt": "What does BLoC help separate?",
          "options": [
                "Business logic from UI presentation",
                "Images from assets",
                "Android from iOS only",
                "Fonts from colors"
          ],
          "correctIndex": 0,
          "explanation": "BLoC structures events, state, and business logic separately from widgets."
    },
    {
          "id": "fl-30",
          "type": "mcq",
          "title": "InheritedWidget",
          "prompt": "What is InheritedWidget used for?",
          "options": [
                "Efficiently propagating data down the widget tree",
                "Creating APK files",
                "Running SQL queries",
                "Replacing navigation"
          ],
          "correctIndex": 0,
          "explanation": "InheritedWidget is a foundation for many state sharing patterns."
    },
    {
          "id": "fl-31",
          "type": "mcq",
          "title": "Layout Constraints",
          "prompt": "What is a key rule of Flutter layout?",
          "options": [
                "Constraints go down, sizes go up, parent sets position",
                "Children choose unlimited size always",
                "CSS controls all layout",
                "Rows always scroll automatically"
          ],
          "correctIndex": 0,
          "explanation": "Flutter layout is driven by constraints from parent to child."
    },
    {
          "id": "fl-32",
          "type": "mcq",
          "title": "Expanded",
          "prompt": "What does Expanded do inside a Row or Column?",
          "options": [
                "Takes available remaining space along the main axis",
                "Creates a new route",
                "Loads an image",
                "Stops rebuilds"
          ],
          "correctIndex": 0,
          "explanation": "Expanded tells a child to fill available flex space."
    },
    {
          "id": "fl-33",
          "type": "mcq",
          "title": "ListView.builder",
          "prompt": "Why use ListView.builder for long lists?",
          "options": [
                "It lazily builds visible items for better performance",
                "It creates all items at startup",
                "It disables scrolling",
                "It only works for two items"
          ],
          "correctIndex": 0,
          "explanation": "Builder constructors improve performance for large or dynamic lists."
    },
    {
          "id": "fl-34",
          "type": "mcq",
          "title": "Navigation 2.0",
          "prompt": "Why use declarative routing in complex apps?",
          "options": [
                "To represent navigation state explicitly and support deep links better",
                "To remove all routes",
                "To make every screen global",
                "To block browser URLs"
          ],
          "correctIndex": 0,
          "explanation": "Declarative routing helps with complex navigation and web/deep-link scenarios."
    },
    {
          "id": "fl-35",
          "type": "mcq",
          "title": "Platform Channels",
          "prompt": "What are platform channels used for?",
          "options": [
                "Communicating between Dart and native platform code",
                "Managing only colors",
                "Replacing widgets",
                "Writing HTML"
          ],
          "correctIndex": 0,
          "explanation": "Platform channels bridge Flutter with native Android/iOS functionality."
    },
    {
          "id": "fl-36",
          "type": "mcq",
          "title": "Assets",
          "prompt": "Where are Flutter assets declared?",
          "options": [
                "pubspec.yaml",
                "main.dart comments",
                "Only AndroidManifest.xml",
                "Only AppDelegate.swift"
          ],
          "correctIndex": 0,
          "explanation": "Assets must be registered in pubspec.yaml."
    },
    {
          "id": "fl-37",
          "type": "mcq",
          "title": "Testing",
          "prompt": "Which test type verifies a single widget’s UI behavior?",
          "options": [
                "Widget test",
                "Unit test only",
                "Integration test only",
                "Manual test only"
          ],
          "correctIndex": 0,
          "explanation": "Widget tests test widget rendering and interactions in isolation."
    },
    {
          "id": "fl-38",
          "type": "mcq",
          "title": "Performance",
          "prompt": "What can cause jank in a Flutter app?",
          "options": [
                "Heavy work on the UI isolate or expensive builds",
                "Using widgets",
                "Having a main function",
                "Using constants"
          ],
          "correctIndex": 0,
          "explanation": "Expensive UI-thread work can miss frames."
    },
    {
          "id": "fl-39",
          "type": "mcq",
          "title": "Const Widgets",
          "prompt": "Why use const constructors where possible?",
          "options": [
                "They reduce unnecessary object creation and can improve rebuild efficiency",
                "They make widgets mutable",
                "They disable hot reload",
                "They only work in tests"
          ],
          "correctIndex": 0,
          "explanation": "const helps Flutter reuse immutable widget instances."
    },
    {
          "id": "fl-40",
          "type": "mcq",
          "title": "Advanced Flutter Judgment",
          "prompt": "An app has slow scrolling in a product list. What should be checked?",
          "options": [
                "List building strategy, image sizes/caching, rebuild scope, layout cost, and profiling results",
                "Only app name",
                "Only package description",
                "Nothing if it works locally"
          ],
          "correctIndex": 0,
          "explanation": "Performance debugging requires profiling and targeted optimization."
    }
  ]
};
