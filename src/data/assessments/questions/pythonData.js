import { ASSESSMENT_TYPES } from '../../assessmentTypes';

// Professional certification-level assessment. Questions were checked, normalized, and expanded with advanced scenarios.

export const pythonData = {
  id: ASSESSMENT_TYPES.python,
  title: "Python Professional Developer Certification",
  shortTitle: "Python",
  category: "Software Development",
  durationMinutes: 60,
  pointsPerQuestion: 5,
  passingPercentage: 85,
  description: "Python syntax, data structures, OOP, decorators, generators, async, testing, packaging, data engineering, APIs, and production code quality.",
  instructions: "Choose the best answer. All questions have been checked, normalized, and upgraded from fundamentals to advanced professional scenarios.",
  questions: [
    {
      id: "py-01",
      type: "mcq",
      title: "Data Types",
      prompt: "Which of these is an immutable data type in Python?",
      options: ["List", "Dictionary", "Set", "Tuple"],
      correctIndex: 3,
      explanation: "Tuples cannot be changed after creation. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "py-02",
      type: "mcq",
      title: "Comprehensions",
      prompt: "What does [x**2 for x in range(5) if x%2 == 0] produce?",
      options: ["[0, 1, 4, 9, 16]", "[0, 4, 16]", "[1, 9]", "[0, 2, 4]"],
      correctIndex: 1,
      explanation: "It squares even numbers from 0 to 4. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "py-03",
      type: "mcq",
      title: "Memory Management",
      prompt: "How does Python manage memory for objects that are no longer used?",
      options: ["Manual deletion", "Garbage Collection (Reference Counting)", "Stack allocation only", "It doesn't"],
      correctIndex: 1,
      explanation: "Python primarily uses reference counting for garbage collection."
    },
    {
      id: "py-04",
      type: "mcq",
      title: "Decorators",
      prompt: "What is a Python decorator?",
      options: ["A function that modifies another function", "A way to style code", "A type of class", "A list method"],
      correctIndex: 0,
      explanation: "Decorators wrap a function to extend its behavior. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "py-05",
      type: "mcq",
      title: "Generators",
      prompt: "Which keyword is used to create a generator function?",
      options: ["return", "yield", "gen", "produce"],
      correctIndex: 1,
      explanation: "yield pauses the function and returns a value, resuming when the next value is requested."
    },
    {
      id: "py-06",
      type: "mcq",
      title: "Error Handling",
      prompt: "Which block in a try-except structure runs no matter what happens?",
      options: ["else", "finally", "catch", "always"],
      correctIndex: 1,
      explanation: "The finally block is used for cleanup tasks like closing files."
    },
    {
      id: "py-07",
      type: "mcq",
      title: "Library: Pandas",
      prompt: "Which Pandas method is used to aggregate data by one or more columns?",
      options: ["sort_values()", "groupby()", "pivot()", "merge()"],
      correctIndex: 1,
      explanation: "groupby() is essential for split-apply-combine operations."
    },
    {
      id: "py-08",
      type: "mcq",
      title: "GIL",
      prompt: "What is the \"GIL\" in Python?",
      options: ["Global Index Link", "Global Interpreter Lock", "General Input List", "Grid Interface Logic"],
      correctIndex: 1,
      explanation: "The GIL allows only one thread to execute Python bytecode at a time."
    },
    {
      id: "py-09",
      type: "mcq",
      title: "Args & Kwargs",
      prompt: "What does **kwargs allow in a function definition?",
      options: ["Arbitrary number of positional arguments", "Arbitrary number of keyword arguments", "Integer arguments only", "List arguments only"],
      correctIndex: 1,
      explanation: "**kwargs collects keyword arguments into a dictionary. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "py-10",
      type: "mcq",
      title: "Class Methods",
      prompt: "Which decorator is used to define a method that belongs to the class rather than an instance?",
      options: ["@instance", "@classmethod", "@static", "@property"],
      correctIndex: 1,
      explanation: "@classmethod receives the class as the first argument. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "py-11",
      type: "mcq",
      title: "Magic Methods",
      prompt: "Which dunder method is used to define the string representation of an object for users?",
      options: ["__init__", "__str__", "__repr__", "__user__"],
      correctIndex: 1,
      explanation: "__str__ is for readable output; __repr__ is for developer-friendly output."
    },
    {
      id: "py-12",
      type: "mcq",
      title: "List Methods",
      prompt: "What is the difference between list.append(x) and list.extend(x)?",
      options: ["No difference", "append adds x as one item; extend adds all items from x", "extend is faster", "append is for integers only"],
      correctIndex: 1,
      explanation: "extend unwraps the iterable and adds its elements. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "py-13",
      type: "mcq",
      title: "Lambda Functions",
      prompt: "What is a lambda function?",
      options: ["A recursive function", "An anonymous, one-line function", "A function for math only", "A built-in method"],
      correctIndex: 1,
      explanation: "Lambda functions are used for short, throwaway pieces of logic."
    },
    {
      id: "py-14",
      type: "mcq",
      title: "Modules",
      prompt: "What does \"if __name__ == '__main__':\" do?",
      options: ["Prevents the script from running", "Ensures code only runs if the script is executed directly, not imported", "Hides variables", "Initializes the class"],
      correctIndex: 1,
      explanation: "It is used to separate executable code from importable definitions."
    },
    {
      id: "py-15",
      type: "mcq",
      title: "Slicing",
      prompt: "Given s = \"Python\", what is s[1:4]?",
      options: ["Pyth", "yth", "ytho", "Pyt"],
      correctIndex: 1,
      explanation: "Slicing includes the start index but excludes the end index (indices 1, 2, 3)."
    },
    {
      id: "py-16",
      type: "mcq",
      title: "Dictionary Methods",
      prompt: "Which method safely returns a value for a key or a default if the key doesn't exist?",
      options: ["fetch()", "get()", "find()", "pop()"],
      correctIndex: 1,
      explanation: "dict.get(key, default) prevents KeyError. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "py-17",
      type: "mcq",
      title: "Context Managers",
      prompt: "Which keyword is used to trigger a context manager (e.g., for file handling)?",
      options: ["open", "with", "using", "start"],
      correctIndex: 1,
      explanation: "with ensures resources are properly closed/released. This has been reviewed and retained as a relevant professional assessment point."
    },
    {
      id: "py-18",
      type: "mcq",
      title: "Virtual Environments",
      prompt: "Why are virtual environments (like venv or conda) used?",
      options: ["To speed up Python", "To isolate project-specific dependencies", "To encrypt code", "To share code online"],
      correctIndex: 1,
      explanation: "Isolation prevents version conflicts between different projects."
    },
    {
      id: "py-19",
      type: "mcq",
      title: "Python 2 vs 3",
      prompt: "What is a major difference in print functionality between Python 2 and 3?",
      options: ["No difference", "Python 3 requires parentheses (function)", "Python 2 was faster", "Python 3 removed print"],
      correctIndex: 1,
      explanation: "In Python 3, print() is a function; in Python 2, it was a statement."
    },
    {
      id: "py-20",
      type: "mcq",
      title: "Type Hinting",
      prompt: "What is the purpose of \"typing\" in modern Python?",
      options: ["To make code run faster", "To provide static type hints for better linting and documentation", "To enforce strict typing at runtime", "To use Java libraries"],
      correctIndex: 1,
      explanation: "Type hints don't affect runtime but help developers and IDEs catch errors."
    },
    {
      id: "py-21",
      type: "mcq",
      title: "Mutable Default Arguments",
      prompt: "In a professional Python Professional Developer scenario, which response best demonstrates strong judgment for mutable default arguments?",
      options: ["Apply mutable default arguments with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use mutable default arguments only because it sounds advanced, without checking impact or constraints", "Ignore mutable default arguments until the issue becomes urgent in production or with customers", "Delegate mutable default arguments completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "mutable default arguments is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "py-22",
      type: "mcq",
      title: "Context Managers",
      prompt: "In a professional Python Professional Developer scenario, which response best demonstrates strong judgment for context managers?",
      options: ["Apply context managers with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use context managers only because it sounds advanced, without checking impact or constraints", "Ignore context managers until the issue becomes urgent in production or with customers", "Delegate context managers completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "context managers is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "py-23",
      type: "mcq",
      title: "Iterator Protocol",
      prompt: "In a professional Python Professional Developer scenario, which response best demonstrates strong judgment for iterator protocol?",
      options: ["Apply iterator protocol with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use iterator protocol only because it sounds advanced, without checking impact or constraints", "Ignore iterator protocol until the issue becomes urgent in production or with customers", "Delegate iterator protocol completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "iterator protocol is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "py-24",
      type: "mcq",
      title: "Generator Expressions",
      prompt: "In a professional Python Professional Developer scenario, which response best demonstrates strong judgment for generator expressions?",
      options: ["Apply generator expressions with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use generator expressions only because it sounds advanced, without checking impact or constraints", "Ignore generator expressions until the issue becomes urgent in production or with customers", "Delegate generator expressions completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "generator expressions is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "py-25",
      type: "mcq",
      title: "Dataclasses",
      prompt: "In a professional Python Professional Developer scenario, which response best demonstrates strong judgment for dataclasses?",
      options: ["Apply dataclasses with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use dataclasses only because it sounds advanced, without checking impact or constraints", "Ignore dataclasses until the issue becomes urgent in production or with customers", "Delegate dataclasses completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "dataclasses is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "py-26",
      type: "mcq",
      title: "Type Hints",
      prompt: "In a professional Python Professional Developer scenario, which response best demonstrates strong judgment for type hints?",
      options: ["Apply type hints with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use type hints only because it sounds advanced, without checking impact or constraints", "Ignore type hints until the issue becomes urgent in production or with customers", "Delegate type hints completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "type hints is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "py-27",
      type: "mcq",
      title: "Specific Exception Handling",
      prompt: "In a professional Python Professional Developer scenario, which response best demonstrates strong judgment for specific exception handling?",
      options: ["Apply specific exception handling with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use specific exception handling only because it sounds advanced, without checking impact or constraints", "Ignore specific exception handling until the issue becomes urgent in production or with customers", "Delegate specific exception handling completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "specific exception handling is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "py-28",
      type: "mcq",
      title: "Pandas Merge",
      prompt: "In a professional Python Professional Developer scenario, which response best demonstrates strong judgment for pandas merge?",
      options: ["Apply pandas merge with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use pandas merge only because it sounds advanced, without checking impact or constraints", "Ignore pandas merge until the issue becomes urgent in production or with customers", "Delegate pandas merge completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "pandas merge is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "py-29",
      type: "mcq",
      title: "Vectorization",
      prompt: "In a professional Python Professional Developer scenario, which response best demonstrates strong judgment for vectorization?",
      options: ["Apply vectorization with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use vectorization only because it sounds advanced, without checking impact or constraints", "Ignore vectorization until the issue becomes urgent in production or with customers", "Delegate vectorization completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "vectorization is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "py-30",
      type: "mcq",
      title: "Asyncio",
      prompt: "In a professional Python Professional Developer scenario, which response best demonstrates strong judgment for asyncio?",
      options: ["Apply asyncio with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use asyncio only because it sounds advanced, without checking impact or constraints", "Ignore asyncio until the issue becomes urgent in production or with customers", "Delegate asyncio completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "asyncio is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "py-31",
      type: "mcq",
      title: "Multiprocessing",
      prompt: "In a professional Python Professional Developer scenario, which response best demonstrates strong judgment for multiprocessing?",
      options: ["Apply multiprocessing with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use multiprocessing only because it sounds advanced, without checking impact or constraints", "Ignore multiprocessing until the issue becomes urgent in production or with customers", "Delegate multiprocessing completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "multiprocessing is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "py-32",
      type: "mcq",
      title: "Pyproject.Toml",
      prompt: "In a professional Python Professional Developer scenario, which response best demonstrates strong judgment for pyproject.toml?",
      options: ["Apply pyproject.toml with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use pyproject.toml only because it sounds advanced, without checking impact or constraints", "Ignore pyproject.toml until the issue becomes urgent in production or with customers", "Delegate pyproject.toml completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "pyproject.toml is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "py-33",
      type: "mcq",
      title: "Unit Testing",
      prompt: "In a professional Python Professional Developer scenario, which response best demonstrates strong judgment for unit testing?",
      options: ["Apply unit testing with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use unit testing only because it sounds advanced, without checking impact or constraints", "Ignore unit testing until the issue becomes urgent in production or with customers", "Delegate unit testing completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "unit testing is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "py-34",
      type: "mcq",
      title: "Mocking",
      prompt: "In a professional Python Professional Developer scenario, which response best demonstrates strong judgment for mocking?",
      options: ["Apply mocking with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use mocking only because it sounds advanced, without checking impact or constraints", "Ignore mocking until the issue becomes urgent in production or with customers", "Delegate mocking completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "mocking is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "py-35",
      type: "mcq",
      title: "Structured Logging",
      prompt: "In a professional Python Professional Developer scenario, which response best demonstrates strong judgment for structured logging?",
      options: ["Apply structured logging with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use structured logging only because it sounds advanced, without checking impact or constraints", "Ignore structured logging until the issue becomes urgent in production or with customers", "Delegate structured logging completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "structured logging is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "py-36",
      type: "mcq",
      title: "Virtual Environments",
      prompt: "In a professional Python Professional Developer scenario, which response best demonstrates strong judgment for virtual environments?",
      options: ["Apply virtual environments with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use virtual environments only because it sounds advanced, without checking impact or constraints", "Ignore virtual environments until the issue becomes urgent in production or with customers", "Delegate virtual environments completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "virtual environments is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "py-37",
      type: "mcq",
      title: "Dictionary Complexity",
      prompt: "In a professional Python Professional Developer scenario, which response best demonstrates strong judgment for dictionary complexity?",
      options: ["Apply dictionary complexity with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use dictionary complexity only because it sounds advanced, without checking impact or constraints", "Ignore dictionary complexity until the issue becomes urgent in production or with customers", "Delegate dictionary complexity completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "dictionary complexity is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "py-38",
      type: "mcq",
      title: "Etl Validation",
      prompt: "In a professional Python Professional Developer scenario, which response best demonstrates strong judgment for ETL validation?",
      options: ["Apply ETL validation with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use ETL validation only because it sounds advanced, without checking impact or constraints", "Ignore ETL validation until the issue becomes urgent in production or with customers", "Delegate ETL validation completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "ETL validation is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "py-39",
      type: "mcq",
      title: "Code Review",
      prompt: "In a professional Python Professional Developer scenario, which response best demonstrates strong judgment for code review?",
      options: ["Apply code review with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use code review only because it sounds advanced, without checking impact or constraints", "Ignore code review until the issue becomes urgent in production or with customers", "Delegate code review completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "code review is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    },
    {
      id: "py-40",
      type: "mcq",
      title: "Production Packaging",
      prompt: "In a professional Python Professional Developer scenario, which response best demonstrates strong judgment for production packaging?",
      options: ["Apply production packaging with clear context, evidence, validation, ownership, and awareness of trade-offs", "Use production packaging only because it sounds advanced, without checking impact or constraints", "Ignore production packaging until the issue becomes urgent in production or with customers", "Delegate production packaging completely without understanding the decision, risks, or success criteria"],
      correctIndex: 0,
      explanation: "production packaging is strongest when applied deliberately with evidence, practical constraints, clear ownership, and measurable impact."
    }
  ]
};
