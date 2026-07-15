import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level Debugging & Code Quality assessment.
// Questions progress from basic JavaScript bugs to advanced async behavior,
// edge cases, state mutation, performance issues, memory leaks, testing,
// production debugging, and root-cause analysis.
export const debuggingData = {
  id: ASSESSMENT_TYPES.debugging,
  title: 'Debugging & Code Quality Professional Certification',
  shortTitle: 'Debugging',
  category: 'Software Quality',
  durationMinutes: 50,
  pointsPerQuestion: 5,
  description:
    'Professional debugging assessment covering logical flaws, JavaScript behavior, async bugs, edge cases, performance issues, memory leaks, state mutation, testing strategy, production triage, and root-cause analysis.',
  instructions:
    'Examine each code snippet or debugging scenario and choose the best answer. Questions move from easy to hard and test practical debugging judgment, not only syntax knowledge.',
  questions: [
    {
      id: 'dbg-01',
      type: 'mcq',
      title: 'Loop Boundary',
      prompt: 'What is the bug in this code? for (let i = 0; i <= arr.length; i++) { console.log(arr[i]); }',
      options: [
        'No bug',
        'Index out of bounds on the last iteration',
        'Infinite loop',
        'Wrong syntax'
      ],
      correctIndex: 1,
      explanation:
        'Arrays are zero-indexed. The last valid index is arr.length - 1, so the condition should usually be i < arr.length.'
    },
    {
      id: 'dbg-02',
      type: 'mcq',
      title: 'Off-by-One',
      prompt: 'Which index represents the 10th element in a zero-indexed array?',
      options: ['9', '10', '11', '0'],
      correctIndex: 0,
      explanation:
        'In zero-indexed arrays, the first element is index 0, so the 10th element is index 9.'
    },
    {
      id: 'dbg-03',
      type: 'mcq',
      title: 'Variable Scope',
      prompt: 'What happens when this function runs? function test() { if (true) { var x = 5; } console.log(x); }',
      options: ['ReferenceError', 'Logs 5', 'Logs undefined', 'SyntaxError'],
      correctIndex: 1,
      explanation:
        'var is function-scoped, not block-scoped. The variable x is available throughout the function.'
    },
    {
      id: 'dbg-04',
      type: 'mcq',
      title: 'Block Scope',
      prompt: 'What happens when this function runs? function test() { if (true) { let x = 5; } console.log(x); }',
      options: ['Logs 5', 'Logs undefined', 'ReferenceError', 'SyntaxError'],
      correctIndex: 2,
      explanation:
        'let is block-scoped, so x is not available outside the if block.'
    },
    {
      id: 'dbg-05',
      type: 'mcq',
      title: 'Recursion',
      prompt: 'What is missing in this recursive function? function rec(n) { return n * rec(n - 1); }',
      options: ['Return type', 'Base case', 'Variable declaration', 'Nothing'],
      correctIndex: 1,
      explanation:
        'A recursive function needs a base case. Without it, recursion continues until the call stack overflows.'
    },
    {
      id: 'dbg-06',
      type: 'mcq',
      title: 'Null Access',
      prompt: 'What happens if profile is null in this expression? user.profile.name',
      options: [
        'Returns undefined',
        'Throws TypeError',
        'Returns null',
        'Returns an empty string'
      ],
      correctIndex: 1,
      explanation:
        'Trying to access a property of null or undefined throws a TypeError.'
    },
    {
      id: 'dbg-07',
      type: 'mcq',
      title: 'Optional Chaining',
      prompt: 'Which expression safely reads name when user or profile may be null?',
      options: [
        'user.profile.name',
        'user && profile.name',
        'user?.profile?.name',
        'user.profile?.name.value'
      ],
      correctIndex: 2,
      explanation:
        'Optional chaining safely returns undefined instead of throwing when an intermediate value is null or undefined.'
    },
    {
      id: 'dbg-08',
      type: 'mcq',
      title: 'Strict Equality',
      prompt: 'Why is === usually preferred over == in JavaScript debugging?',
      options: [
        'It is always faster',
        'It avoids unexpected type coercion',
        'It converts all values to strings',
        'It ignores null and undefined'
      ],
      correctIndex: 1,
      explanation:
        'Strict equality compares both value and type, reducing bugs caused by implicit coercion.'
    },
    {
      id: 'dbg-09',
      type: 'mcq',
      title: 'Type Coercion',
      prompt: 'In JavaScript, what is the value of [] == ![]?',
      options: ['true', 'false', 'TypeError', 'undefined'],
      correctIndex: 0,
      explanation:
        'This evaluates to true because of JavaScript coercion rules. It is a good example of why strict equality is preferred.'
    },
    {
      id: 'dbg-10',
      type: 'mcq',
      title: 'typeof null',
      prompt: 'What is typeof null in JavaScript?',
      options: ['"null"', '"undefined"', '"object"', '"boolean"'],
      correctIndex: 2,
      explanation:
        'typeof null returns "object", which is a long-standing JavaScript legacy behavior.'
    },
    {
      id: 'dbg-11',
      type: 'mcq',
      title: 'NaN Check',
      prompt: 'What is the result of NaN === NaN?',
      options: ['true', 'false', 'TypeError', 'undefined'],
      correctIndex: 1,
      explanation:
        'NaN is not equal to itself. Use Number.isNaN(value) to check whether a value is NaN.'
    },
    {
      id: 'dbg-12',
      type: 'mcq',
      title: 'Floating Point',
      prompt: 'Is 0.1 + 0.2 === 0.3 in JavaScript?',
      options: ['Yes', 'No', 'Only in strict mode', 'It throws an error'],
      correctIndex: 1,
      explanation:
        'Floating-point precision causes 0.1 + 0.2 to produce 0.30000000000000004, so the strict equality check is false.'
    },
    {
      id: 'dbg-13',
      type: 'mcq',
      title: 'Closure with var',
      prompt: 'What is logged? for (var i = 0; i < 3; i++) { setTimeout(() => console.log(i), 100); }',
      options: ['0, 1, 2', '3, 3, 3', 'undefined, undefined, undefined', '0, 0, 0'],
      correctIndex: 1,
      explanation:
        'var is function-scoped, so each callback references the same i after the loop ends. The final value is 3.'
    },
    {
      id: 'dbg-14',
      type: 'mcq',
      title: 'Closure Fix',
      prompt: 'How can the previous var loop bug usually be fixed?',
      options: [
        'Use let instead of var for the loop variable',
        'Remove setTimeout',
        'Use == instead of ===',
        'Wrap console.log in JSON.stringify'
      ],
      correctIndex: 0,
      explanation:
        'let creates a new block-scoped binding for each loop iteration, so the callbacks capture the expected value.'
    },
    {
      id: 'dbg-15',
      type: 'mcq',
      title: 'Async Await',
      prompt: 'What happens if you call an async function without await?',
      options: [
        'The function does not run',
        'It returns a Promise immediately',
        'The code always crashes',
        'It blocks automatically'
      ],
      correctIndex: 1,
      explanation:
        'Async functions return Promises. Without await, the caller receives the Promise instead of the resolved value.'
    },
    {
      id: 'dbg-16',
      type: 'mcq',
      title: 'Missing await Bug',
      prompt: 'What is the likely bug? const user = fetchUser(); console.log(user.name);',
      options: [
        'fetchUser returns a Promise, so user.name is not the resolved user name',
        'console.log cannot print objects',
        'const cannot store function results',
        'JavaScript does not support functions'
      ],
      correctIndex: 0,
      explanation:
        'If fetchUser is async, user is a Promise. The code should await fetchUser() or use .then().'
    },
    {
      id: 'dbg-17',
      type: 'mcq',
      title: 'Promise Error Handling',
      prompt: 'What is the main purpose of try/catch with await?',
      options: [
        'To make async code synchronous internally',
        'To handle rejected Promises in async/await flow',
        'To speed up network requests',
        'To prevent all runtime errors forever'
      ],
      correctIndex: 1,
      explanation:
        'try/catch around awaited calls catches Promise rejections and thrown errors in the async function.'
    },
    {
      id: 'dbg-18',
      type: 'mcq',
      title: 'Promise.all Behavior',
      prompt: 'What happens if one Promise rejects inside Promise.all([p1, p2, p3])?',
      options: [
        'Promise.all resolves with null for the rejected promise',
        'Promise.all rejects immediately with that error',
        'All promises are retried automatically',
        'The rejection is ignored'
      ],
      correctIndex: 1,
      explanation:
        'Promise.all fails fast. If any input Promise rejects, the returned Promise rejects.'
    },
    {
      id: 'dbg-19',
      type: 'mcq',
      title: 'Promise.allSettled',
      prompt: 'When is Promise.allSettled more appropriate than Promise.all?',
      options: [
        'When you need results from all tasks even if some fail',
        'When every task must succeed or everything should fail',
        'When you want to block the event loop',
        'When promises are not supported'
      ],
      correctIndex: 0,
      explanation:
        'Promise.allSettled returns the status of every Promise, making it useful when partial success is acceptable.'
    },
    {
      id: 'dbg-20',
      type: 'mcq',
      title: 'Async forEach',
      prompt: 'What is the issue with using await inside Array.forEach callbacks?',
      options: [
        'forEach waits for every async callback automatically',
        'forEach does not await async callbacks, so completion order and error handling may be unexpected',
        'forEach cannot use functions',
        'await is invalid in JavaScript'
      ],
      correctIndex: 1,
      explanation:
        'forEach does not await Promises returned by callbacks. Use for...of with await or Promise.all with map depending on the desired behavior.'
    },
    {
      id: 'dbg-21',
      type: 'mcq',
      title: 'const Mutation',
      prompt: 'Does this throw an error? const x = [1, 2]; x.push(3);',
      options: ['Yes', 'No', 'Only in strict mode', 'Only in TypeScript'],
      correctIndex: 1,
      explanation:
        'const prevents reassignment of the variable binding, but the array itself can still be mutated.'
    },
    {
      id: 'dbg-22',
      type: 'mcq',
      title: 'Shallow Copy',
      prompt: 'Is this a deep copy? const b = [...a];',
      options: ['Yes', 'No, it is shallow', 'Only for objects', 'Only for strings'],
      correctIndex: 1,
      explanation:
        'The spread operator copies the first level. Nested objects remain shared references.'
    },
    {
      id: 'dbg-23',
      type: 'mcq',
      title: 'Shared Reference',
      prompt: 'What is logged? const a = [{ count: 1 }]; const b = [...a]; b[0].count = 2; console.log(a[0].count);',
      options: ['1', '2', 'undefined', 'TypeError'],
      correctIndex: 1,
      explanation:
        'The array was copied shallowly, but the nested object is still shared by reference.'
    },
    {
      id: 'dbg-24',
      type: 'mcq',
      title: 'State Mutation',
      prompt: 'In React or similar state-driven UI code, why is direct state mutation dangerous?',
      options: [
        'It may prevent change detection and cause stale or incorrect UI',
        'It always throws a syntax error',
        'It makes the code compile slower',
        'It prevents variables from being declared'
      ],
      correctIndex: 0,
      explanation:
        'State-driven UIs often rely on identity changes. Mutating existing objects can prevent updates from being detected correctly.'
    },
    {
      id: 'dbg-25',
      type: 'mcq',
      title: 'Array Sort Bug',
      prompt: 'What is the output of [10, 2, 1].sort() in JavaScript?',
      options: [
        '[1, 2, 10]',
        '[10, 2, 1]',
        '[1, 10, 2]',
        'TypeError'
      ],
      correctIndex: 2,
      explanation:
        'Default sort converts values to strings and sorts lexicographically. Use sort((a, b) => a - b) for numeric sort.'
    },
    {
      id: 'dbg-26',
      type: 'mcq',
      title: 'parseInt Map Bug',
      prompt: 'What is the result of ["1", "2", "3"].map(parseInt)?',
      options: [
        '[1, 2, 3]',
        '[1, NaN, NaN]',
        '[NaN, NaN, NaN]',
        '[0, 1, 2]'
      ],
      correctIndex: 1,
      explanation:
        'map passes value and index. parseInt receives the index as radix, causing parseInt("2", 1) and parseInt("3", 2) to return NaN.'
    },
    {
      id: 'dbg-27',
      type: 'mcq',
      title: 'Default Parameter',
      prompt: 'What is logged? function f(x = 10) { console.log(x); } f(null);',
      options: ['10', 'null', 'undefined', 'TypeError'],
      correctIndex: 1,
      explanation:
        'Default parameters apply when the argument is undefined, not when it is null.'
    },
    {
      id: 'dbg-28',
      type: 'mcq',
      title: 'Logical OR Default',
      prompt: 'What is the bug in this defaulting logic? const limit = userLimit || 10;',
      options: [
        'No bug in any case',
        'A valid value of 0 will be replaced with 10',
        'The code always throws',
        'The variable must be declared with var'
      ],
      correctIndex: 1,
      explanation:
        'The || operator treats 0 as falsy. Use nullish coalescing, userLimit ?? 10, when only null or undefined should trigger the default.'
    },
    {
      id: 'dbg-29',
      type: 'mcq',
      title: 'Nullish Coalescing',
      prompt: 'What does value ?? fallback do?',
      options: [
        'Uses fallback only when value is null or undefined',
        'Uses fallback when value is 0',
        'Uses fallback when value is an empty string',
        'Always uses fallback'
      ],
      correctIndex: 0,
      explanation:
        'The nullish coalescing operator only falls back for null or undefined, not for other falsy values like 0 or empty string.'
    },
    {
      id: 'dbg-30',
      type: 'mcq',
      title: 'De Morgan Law',
      prompt: '!(A && B) is equivalent to:',
      options: ['!A && !B', '!A || !B', 'A || B', 'A && !B'],
      correctIndex: 1,
      explanation:
        'By De Morgan’s Law, not (A and B) is equivalent to (not A) or (not B).'
    },
    {
      id: 'dbg-31',
      type: 'mcq',
      title: 'Time Complexity',
      prompt: 'What is the time complexity of nested loops where each loop iterates over the same array of size N?',
      options: ['O(N)', 'O(log N)', 'O(N²)', 'O(1)'],
      correctIndex: 2,
      explanation:
        'For each of N items, the inner loop may run N times, giving N × N operations.'
    },
    {
      id: 'dbg-32',
      type: 'mcq',
      title: 'Performance Bug',
      prompt: 'A page becomes slow after adding a loop that searches an array inside another loop. What is the likely issue?',
      options: [
        'The logic may have become O(N²)',
        'The page has too few comments',
        'The variable names are too short',
        'The code is using strict equality'
      ],
      correctIndex: 0,
      explanation:
        'Searching inside a loop often creates quadratic behavior. A Map or Set can often reduce repeated lookups.'
    },
    {
      id: 'dbg-33',
      type: 'mcq',
      title: 'Memory Leak',
      prompt: 'What commonly causes a memory leak in a long-running application?',
      options: [
        'Large files only',
        'Objects no longer needed but still referenced',
        'Fast CPU',
        'Too many comments'
      ],
      correctIndex: 1,
      explanation:
        'Garbage collectors cannot reclaim objects that are still reachable through references.'
    },
    {
      id: 'dbg-34',
      type: 'mcq',
      title: 'Event Listener Leak',
      prompt: 'A component adds a window resize listener every time it mounts but never removes it. What can happen?',
      options: [
        'Memory leak and duplicate event handling',
        'The browser automatically prevents all issues',
        'The listener runs only once forever',
        'The code becomes synchronous'
      ],
      correctIndex: 0,
      explanation:
        'Unremoved listeners can keep references alive and cause repeated handlers to run.'
    },
    {
      id: 'dbg-35',
      type: 'mcq',
      title: 'Race Condition',
      prompt: 'What is a race condition?',
      options: [
        'Code that runs too fast',
        'A bug where output depends on unpredictable timing of concurrent operations',
        'A loop that never ends',
        'Slow internet'
      ],
      correctIndex: 1,
      explanation:
        'Race conditions occur when timing or ordering of operations affects correctness.'
    },
    {
      id: 'dbg-36',
      type: 'mcq',
      title: 'Stale Response',
      prompt: 'A user types search queries quickly. The response for an older query arrives after the newer query and overwrites the UI. What bug is this?',
      options: [
        'Race condition',
        'Syntax error',
        'Integer overflow',
        'Dead code'
      ],
      correctIndex: 0,
      explanation:
        'Out-of-order async responses can create stale UI updates. Use request cancellation, sequence IDs, or latest-request guards.'
    },
    {
      id: 'dbg-37',
      type: 'mcq',
      title: 'Integer Overflow',
      prompt: 'In a fixed signed 32-bit integer system, what can happen when adding 1 to the maximum value?',
      options: [
        'It always throws an error',
        'It may wrap to a large negative number',
        'It stays at the maximum value',
        'It becomes a string'
      ],
      correctIndex: 1,
      explanation:
        'In fixed-width integer systems, overflow may wrap around, which can cause logic and security bugs.'
    },
    {
      id: 'dbg-38',
      type: 'mcq',
      title: 'Regex Dot',
      prompt: 'What does "." usually mean in a regular expression?',
      options: [
        'The literal dot character',
        'Any single character except newline',
        'End of string',
        'Start of string'
      ],
      correctIndex: 1,
      explanation:
        'In most regex contexts, . is a wildcard for any single character except newline. To match a literal dot, escape it as \\..'
    },
    {
      id: 'dbg-39',
      type: 'mcq',
      title: 'Reproduction',
      prompt: 'What is the first practical goal when debugging a complex bug?',
      options: [
        'Rewrite the entire system',
        'Create a reliable reproduction or identify the smallest failing case',
        'Blame the last person who changed the file',
        'Add random logs everywhere forever'
      ],
      correctIndex: 1,
      explanation:
        'A reliable reproduction makes it possible to isolate, test, and verify the fix.'
    },
    {
      id: 'dbg-40',
      type: 'mcq',
      title: 'Production Debugging Judgment',
      prompt: 'A production incident appears after a release, but logs show both application errors and database latency. What is the best debugging approach?',
      options: [
        'Assume the release is definitely the only cause',
        'Form hypotheses, compare timelines, check metrics by service, validate rollback safety, and stabilize customer impact first',
        'Restart random services until the issue disappears',
        'Ignore database metrics because the application changed'
      ],
      correctIndex: 1,
      explanation:
        'Strong production debugging combines hypothesis testing, timeline analysis, observability, safe mitigation, and customer-impact reduction.'
    }
  ]
};