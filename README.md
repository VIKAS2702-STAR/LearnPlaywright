# LearnPlaywright

> A personal learning repository for JavaScript fundamentals and Playwright test automation.

---

## 📖 About This Repository

This repository is a structured learning journey covering JavaScript basics, identifier rules, naming conventions, development tooling shortcuts, core JS concepts, literals, and operators. It is organized into chapters for progressive learning — from absolute beginner topics to more advanced comparisons and logical operations.

Whether you are preparing for a QA automation role, brushing up on JS fundamentals, or learning Playwright, this repo serves as a hands-on reference.

---

## 📂 Repository Structure

```
LearnPlaywright/
│
├── Chapter_00_Javascript_Task/
│   ├── 01_IQ1.js                           # HTTP status code checker
│   ├── 02_IQ2.js                           # Test pass/fail verdict checker
│   ├── 03_IQ3.js                           # Bug severity classifier
│   ├── 04_IQ4.js                           # CI build health reporter
│   └── 05_IQ5.js                           # Login lockout tracker
│
├── Chapter_01_BasicsJS/
│   ├── 01_Basics.js                          # JavaScript basics introduction
│   ├── 02_JS.js                              # Core JavaScript concepts
│   ├── 03_JS_Verify_Setup.js                 # Environment & setup verification
│   └── 04_HotCode.js                         # Performance / hot path code example
│
├── Chapter_02_Javascript_Concepts/
│   └── 05_JS_Basics.js                       # Additional JS fundamentals
│
├── Chapter_03_Identifier_Literals/
│   ├── 06_Identifier_Rules.js                # Rules for valid JS identifiers
│   ├── 07_Identifier_Part2.js                # Naming conventions & cases
│   │                                         #   - camelCase, PascalCase
│   │                                         #   - snake_case, SCREAMING_SNAKE_CASE
│   │                                         #   - kebab-case, flatcase
│   │                                         #   - Train-Case, COBOL-CASE
│   │                                         #   - dromedaryCase, UpperCamelCase
│   │                                         #   - Hungarian notation, dollarCase
│   ├── 08_Comments.js                        # Comments in JavaScript
│   ├── js_identifier_rules.js                # Identifier rules reference
│   ├── VS_Code_Keyboard_Shortcut_windows.md  # VS Code shortcuts for Windows
│   └── VS_Code_Keyboard_Shortcut_mac.md      # VS Code shortcuts for macOS
│
├── Chapter_04_Javascript_Concept/
│   ├── 09_var_let_const.js                   # var, let, const comparison
│   ├── 10_function.js                          # Functions in JavaScript
│   ├── 11_var_explained.js                   # Deep dive into var
│   ├── 12_let_people_love.js               # Deep dive into let
│   ├── 13_const_explained.js               # Deep dive into const
│   ├── 14_var_functionscope.js             # var function scope behavior
│   ├── 15_let_scope.js                     # let block scope behavior
│   ├── 16_Hoisting.js                        # Hoisting concept
│   ├── 17_Hoisting_function.js             # Function hoisting
│   ├── 18_let_hoisting.js                  # let hoisting behavior
│   ├── 19_let_hoisting_block.js          # let block hoisting
│   ├── 20_let_const.js                   # let vs const comparison
│   └── 21_jr_QA.js                       # Junior QA questions
│
├── Chapter_05_Literals/
│   ├── 22_literal.js                       # Literals introduction
│   ├── 23_null_undefined.js                # null vs undefined
│   ├── 24_null.js                          # null literal
│   ├── 25_literal_all.js                   # All literals overview
│   ├── 26_Literal_Number_all.js            # Number literals
│   ├── 27_String.js                        # Strings (single & double quotes)
│   ├── 28_Template_Literal.js              # Template literals (backticks)
│   └── 29_Backtick_single_double.js        # Backtick vs single/double quotes
│
├── Chapter_06_Double_Triple_Equal/
│   ├── 30_Operators.js                     # Assignment operators
│   ├── 31_Arithmatic_operator.js           # Arithmetic operators (+, -, *, /)
│   ├── 32_Exponential_op.js                # Exponential operator (**)
│   ├── 33_Modulus_op.js                    # Modulus operator (%)
│   ├── 34_IQ.js                            # Compound operators (+=, -=, etc.)
│   ├── 35_Comparision_op.js                # Comparison operators (>, <, >=, <=)
│   ├── 36_Comparision_Strict_Loose.js      # Strict (===) vs Loose (==) equality
│   ├── 37_IQ_Loose_Strict.js               # Tricky equality interview questions
│   ├── 38_Confusing_Comparision.js         # Confusing comparisons and edge cases
│   ├── 39_Logical_Op.js                    # Logical operators (&&, ||, !)
│   ├── 40_String_Concatenation_Op.js       # String concatenation with +=
│   ├── 41_Ternary_Op.js                    # Ternary operator (? :)
│   ├── 42_Type_op.js                       # typeof operator
│   ├── 43_Increment_Decremet_op.js         # Pre/Post increment and decrement
│   ├── 44_Null_Op.js                       # Nullish coalescing operator (??)
│   ├── 45_Post_Increment.js                # Post-increment deep dive
│   ├── 46_IQ_Incre_Decre.js                # Increment/decrement interview questions
│   ├── 47_Advance_incre_decre.js           # Advanced increment/decrement expressions
│   ├── 48_Max_Num_two_ternray.js           # Maximum of two numbers using ternary
│   ├── 49_Max_Num_Three_Ternary_op.js      # Maximum of three numbers using ternary
│   └── 50_Task_Ince_Decre_op.js            # Complex increment/decrement expression task
│
├── Chapter_07_If_Else/
│   ├── 51_If_Else.js                       # if / else conditional basics
│   ├── 52_If_ElseIf_Else.js                # if / else if / else chains
│   ├── 53_Real_Ex_If_Else.js               # Real-world if/else examples
│   ├── 54_API_If_Else.js                   # API response handling with if/else
│   ├── 55_IQ_If_Else.js                    # Interview questions using if/else
│   ├── 56_Real_Example_If_Else.js          # Additional real-world examples
│   ├── 57_IQ.js                            # If/else interview questions
│   ├── 58_If_Else.js                       # More if/else practice
│   ├── 59_IQ_Even_Odd.js                   # Even / odd check (if/else)
│   ├── 60_IQ_Grade_Calculator.js           # Grade calculator (if/else)
│   └── 61_IQ_Leap_Year.js                  # Leap year checker (if/else)
│
├── Chapter_08_Switch_Statement/
│   ├── 62_Switch.js                        # switch statement basics
│   ├── 63_No_Break.js                      # Switch without break (fall-through)
│   ├── 64_Default.js                       # Default case in switch
│   ├── 65_Real_Example.js                  # Real-world switch examples
│   ├── 66_Switch_Group.js                  # Grouped cases in switch
│   ├── 67_IQ.js                            # Switch interview questions
│   ├── 68_IQ2.js                           # Switch interview questions 2
│   ├── 69_IQ3.js                           # Switch interview questions 3
│   └── 70_IQ4.js                           # Switch interview questions 4
│
├── Chapter_09_UserInput/
│   ├── 71_User_Input.js                    # User input basics
│   ├── 72_Node_Readline.js                 # Readline input in Node.js
│   └── 73_Prompt_Sync.js                   # Synchronous prompt input
│
├── Chapter_10_Loops/
│   ├── 74_For_Loops.js                     # For loop basics
│   ├── 75_For_Loops.js                     # For loop examples
│   ├── 76_For_Loop2.js                     # For loop with different variables
│   ├── 77_IQ.js                            # For loop interview questions
│   ├── 78_For_OF_IN_Each                   # For...of / for...in / forEach placeholder
│   ├── 79_While_Loop.js                    # While loop basics
│   ├── 80_Do_While_Loop.js                 # Do...while loop basics
│   ├── 81_Do_While_Loop.js                 # Do...while loop examples
│   ├── 82_IQ.js                            # While loop interview questions (countdown)
│   ├── 83_IQ.js                            # Do...while loop interview questions
│   ├── 84_IQ.js                            # Continue statement in loops
│   ├── 85_IQ.js                            # Do...while loop edge cases
│   ├── 86_Task.js                          # Triangle classifier (loop + if/else task)
│   └── 87_Task2.js                         # FizzBuzz classic loop challenge
│
├── Chapter_11_Arrays/
│   ├── 88_Arrays.js                        # Array basics and introduction
│   ├── 89_Arrays.js                        # Creating arrays (literal, constructor, Array.of, Array.from)
│   ├── 90_Access_Array.js                  # Accessing and modifying array elements
│   ├── 91_Arrays_Adding_Removing.js        # Adding and removing elements (push, pop, unshift, shift)
│   ├── 92_Arrays_Adding_Removing2.js       # Splice for adding, removing, and replacing elements
│   ├── 93_Real_Example.js                  # Real-world array example with browser list
│   ├── 94_Searching.js                     # Searching arrays (indexOf, lastIndexOf, includes, find, findIndex)
│   ├── 95_Iterate.js                       # Iterating arrays (for, for...of, forEach, for...in, entries)
│   ├── 96_Transform.Array.js               # Transforming arrays (map, filter, reduce, flat)
│   ├── 97_Array_sort.js                    # Sorting arrays (sort, numeric sort with compare function)
│   ├── 98_Array_Slicing.js                 # Slicing and combining arrays (slice, splice)
│   ├── 99_Concat_Array.js                  # Concatenating arrays (concat, spread operator, join)
│   └── 100_Checking_Array.js               # Checking arrays (isArray, every, some)
│
├── Chapter_12_Function/
│   ├── 101_Function.js                     # Functions introduction
│   ├── 102_Type1_Basic_Function.js         # Type 1: Basic function without parameters
│   ├── 103_Typ2_fun_with_Parameter_No_Return.js  # Type 2: Function with parameters but no return
│   ├── 104_Type3_Fun_without_Para_Return.js      # Type 3: Function without parameters but with return
│   ├── 105_Type4_Fun_With_Param_With_Return.js   # Type 4: Function with parameters and return
│   ├── 106_Template_Literal.js             # Using template literals in functions
  │   ├── 107_Function_Expression.js          # Function expressions (anonymous functions)
  │   ├── 108_Arrow_Function.js               # Arrow functions (ES6 concise syntax)
  │   ├── 109_Arrow_Function_Real.js          # Real-world arrow function examples (API status validation)
  │   ├── 110_IIFE.js                         # Immediately Invoked Function Expressions (IIFE)
  │   ├── 111_Default_Param_Fun.js            # Default parameters in functions
  │   ├── 112_IQ.js                           # Function return value interview questions
  │   ├── 113_Rest_Param_Fn.js                # Rest parameters (...args)
  │   ├── 114_IQ.js                           # Function returns and hoisting edge cases
  │   ├── 115_Spread_IQ.js                    # Spread operator with functions
  │   ├── 116_Scope_IQ.js                     # Function scope and global scope access
  │   ├── 117_IQ.js                           # Nested scope and block scope concepts
  │   ├── 118_Closure.js                      # Closures — basic closure example
  │   ├── 119_Closure.js                      # Closure-based counter with increment/decrement/get
  │   ├── 120_API_Real_Closure.js             # Real-world retry tracker using closures
  │   ├── 121_Higher_Order_Fn.js              # Higher-order functions (functions as arguments)
  │   └── 122_Pure_Function.js                # Pure vs impure functions
  │
  ├── Chapter_13_Strings/
  │   ├── 123_Strings.js                        # Strings introduction and creation
  │   ├── 124_String_Property.js                # String properties (length, constructor, prototype)
  │   ├── 125_Search_Checking_str.js          # Search and checking methods (indexOf, includes, startsWith, etc.)
  │   ├── 126_Substring.js                      # Extract and slice methods (slice, substring, split, etc.)
  │   ├── 127_Transform_Str.js                  # Transform and modify methods (replace, trim, pad, etc.)
  │   ├── 128_String_Conversion.js              # Conversion and format methods (toString, toUpperCase, etc.)
  │   ├── 129_Task_String_Revers.js           # Task: Reverse a string
  │   ├── 130_Task_String_Palindrom.js        # Task: Check if a string is a palindrome
  │   ├── 131_Task_String_Anagram.js          # Task: Check if two strings are anagrams
  │   ├── javascript_stringcheatsheet.md        # Markdown cheat sheet of all string methods
  │   └── javascript_stringcheatsheet.html      # Interactive HTML table cheat sheet with search
  │
  ├── Chapter_14_Objects/
  │   ├── 132_Objects.js                        # Objects introduction and basics
  │   ├── 133_Objects2.js                       # Key-value pairs and object references
  │   ├── 134_Objects_Creation.js             # Object creation and equality comparison
  │   ├── 135_Real_Objects.js                 # Real-world object example (config management)
  │   ├── 136_Primitive_Reference.js          # Primitive vs Reference types
  │   ├── 137_Objects_Example.js              # JSON vs JS object notation
  │   ├── 138_IQ.js                           # Object properties: access, modify, dynamic keys
  │   ├── 139_Objects_Fn.js                   # Object methods and functions
  │   ├── 140_Object_Deconstruction.js        # Object destructuring (basic, rename, default, nested)
  │   ├── 141_Spread.js                       # Spread operator with objects
  │   ├── 142_Object_Get_Set_Method.js        # Getter and setter methods
  │   ├── 143_IQ.js                           # Object.keys, values, entries iteration
  │   ├── 144_Objects.Real.js                 # Real-world config objects for automation
  │   └── 145_Let_Const_Obje.js               # let vs const with objects
  │
  ├── Chapter_15_2D_Array/
  │   ├── 146_2D_Array.js                     # 2D array basics and nested loops
  │   ├── 147_IQ_2D.js                        # 2D array interview questions (grid, rows, columns)
  │   ├── 148_Real.js                         # Real-world 2D array (test matrix)
  │   ├── 149_2D_Array_Fn.js                  # 2D array with map, reduce, and filtering
  │   ├── 150_IQ_Right_Pyramid_.js            # Right pyramid pattern with nested loops
  │   ├── 151_Reverse_Pyramid.js              # Reverse pyramid pattern
  │   ├── 152_Pyramid_Pattern.js              # Centered pyramid pattern
  │   └── testdata.csv                        # Sample test data CSV file
  │
  ├── Chapter_16_Callback/
  │   ├── 153_Callback.js                     # Callback basics — named, anonymous, and arrow callbacks
  │   ├── 154_Callback.js                     # Callback patterns and execution order
  │   ├── 155_Callback_Fun.js                 # Callback functions fundamentals
  │   ├── 156_Playwright_Callback_Fun.js      # Playwright-specific callback examples
  │   ├── 157_JS_CB_Fun.js                    # JavaScript callback function patterns
  │   ├── 158_Sync_CB_Fun.js                  # Synchronous callbacks
  │   ├── 159_Async_CB.js                     # Asynchronous callbacks with setTimeout
  │   ├── 160_CB_Hell.js                      # Callback Hell — 4-step E2E login flow
  │   ├── 161_E2E_CB_Hell.js                  # Callback Hell — 22-step full E2E test flow
  │   ├── 162_CB_Parameter.js                 # Callbacks with parameters
  │   └── 163_CB_Return.js                    # Callbacks with return values and Pyramid of Doom
  │
  ├── Chapter_17_Promises/
  │   ├── 164_Promise.js                      # Promise basics — resolve and reject
  │   ├── 165_Promise_Real_API.js             # Real-world API promise with .then()
  │   ├── 166_Promise_Real_API_Part2.js       # Promise chaining and API response handling
  │   ├── 167_Finally.js                      # .finally() for cleanup logic
  │   ├── 168_CB_Pyramid.js                   # Callback pyramid vs Promise flattening
  │   ├── 169_Promise_All.js                  # Promise.all and Promise.allSettled
  │   └── 170_Promise_IQ.js                   # Promise interview questions and patterns
  │
  ├── Chapter_18_Asynch_Await/
  │   ├── 171_Async.js                        # async/await with try/catch/finally
  │   ├── 172_Async_P2.js                     # Awaiting resolved promises (token example)
  │   ├── 173_Pyramid_Dom.js                  # Flattening callback pyramid with async/await E2E flow
  │   ├── 174_Async_Ex.js                     # Basic async/await and Playwright test example
  │   ├── 175_Async_Seq.js                    # Sequential API calls with async/await
  │   ├── 176_Async_Parallel.js               # Parallel API calls with Promise.all and async/await
  │   ├── 177_Async_Await_IQ.js               # Async/await interview questions and patterns
  │   └── 178_Advance_Concept_Login.js        # Advanced Playwright login test with async/await and test.steps
  │
  ├── Chapter_19_Playwright_Basics/
  │   ├── .gitignore                            # Playwright ignore rules
  │   ├── package.json                          # Playwright setup and dependencies
  │   ├── package-lock.json                     # Lockfile for reproducible installs
  │   ├── playwright.config.ts                  # Playwright test configuration
  │   └── tests/                                # Playwright test specs
  │       ├── example.spec.ts
  │       ├── codegen-tta-cart.spec.ts
  │       └── codegen-tta-cart.spec2.ts
  │
  ├── .github/
  │   └── workflows/
  │       └── playwright.yml                    # GitHub Actions CI for Playwright
  │
  ├── interview.md                              # JavaScript interview questions and answers
  ├── index.html                                # API Login endpoint reference page
  ├── sdetlive.pdf                              # SDET learning reference PDF
  └── string-cheat-sheet.html                   # Standalone string methods cheat sheet
  ```

### Chapter 10 — Loops
Master the different ways to repeat code in JavaScript:
- **For Loop:** The classic loop with initialization, condition, and increment (`for (let i = 0; i < 10; i++)`)
- **While Loop:** Executes a block as long as a condition is true (`while (condition)`)
- **Do...While Loop:** Executes the block at least once before checking the condition (`do { ... } while (condition)`)
- **Loop Control:** Using `continue` to skip iterations and understanding loop exit conditions
- **Interview Questions:** Countdown patterns, edge cases with `do...while`, and infinite loop scenarios
- **Practical Tasks:** Triangle classifier combining loops with conditionals, and the classic FizzBuzz challenge

**Key takeaways:**
- How to choose between `for`, `while`, and `do...while`
- Understanding loop initialization, condition, and update
- Common loop pitfalls and how to avoid them
- Practice with real loop-based interview questions and algorithmic tasks

### Chapter 11 — Arrays
Learn how to work with JavaScript arrays — one of the most important data structures for automation and testing. This chapter covers creating arrays, accessing and modifying elements, adding and removing items, searching, iterating, and transforming arrays.

- **Creating Arrays:** Array literals, `new Array()`, `Array.of()`, and `Array.from()`
- **Accessing & Modifying:** Reading by index, using `.at()` for negative indexing, and updating values
- **Adding & Removing:** `push()` and `pop()` for the end, `unshift()` and `shift()` for the beginning, `splice()` for middle operations
- **Searching:** `indexOf()`, `lastIndexOf()`, `includes()`, `find()`, `findIndex()`, `findLast()`, `findLastIndex()`
- **Iterating:** `for` loop, `for...of`, `forEach()`, `for...in`, and `entries()`
- **Transforming:** `map()` to transform every element, `filter()` to keep matching elements, `reduce()` to accumulate to a single value, and `flat()` to flatten nested arrays

**Key takeaways:**
- Arrays can hold any data type and are zero-indexed
- Choosing the right method for adding, removing, or replacing elements
- Searching arrays efficiently with built-in methods
- Using `for...of` and `forEach` for clean iteration
- Leveraging `map`, `filter`, and `reduce` for powerful data transformations

### Chapter 11 (Continued) — Sorting, Slicing, Concatenating & Checking Arrays
Continue mastering arrays with practical operations every developer and QA engineer needs:

- **Sorting:** `sort()` for alphabetical sorting, numeric sort with compare functions `(a, b) => a - b` for ascending and `(a, b) => b - a` for descending
- **Slicing & Splicing:** `slice(start, end)` returns a new subarray without mutating the original; `splice(index, count)` removes elements in-place
- **Concatenating:** `concat()` for merging arrays, the modern spread operator `[...a, ...b]` for elegant combination, and `join()` for creating delimited strings
- **Checking Arrays:** `Array.isArray()` to verify array types, `every()` to confirm all elements pass a test, and `some()` to check if at least one element passes

**Key takeaways:**
- `sort()` sorts alphabetically by default — use a compare function for numbers
- `slice()` does not mutate; `splice()` does mutate the original array
- Spread syntax (`...`) is the modern, preferred way to concatenate arrays
- `every()` and `some()` are powerful for validation and assertion patterns in QA

### Chapter 12 — Functions
Master JavaScript functions — the building blocks of reusable code. This chapter covers all function types, from basic declarations to modern ES6 arrow functions.

- **Function Basics:** Defining and calling functions with `function` keyword
- **Type 1 — No Parameters:** Simple functions that execute fixed logic (`greet()`)
- **Type 2 — With Parameters, No Return:** Functions that accept inputs and log or act on them (`greetByName(name)`)
- **Type 3 — No Parameters, With Return:** Functions that compute and return a value without needing input (`goToRelativeHouse()`)
- **Type 4 — With Parameters and Return:** The most common pattern — accept inputs, process them, and return a result (`sumOfTwoNumber(a, b)`)
- **Template Literals in Functions:** Using backticks and `${variable}` interpolation to build dynamic return strings
- **Function Expressions:** Storing anonymous functions in variables (`const greet = function(name) { ... }`)
- **Arrow Functions:** Concise ES6 syntax — removing `function`, `return`, and `{}` for clean one-liners (`const doubleIt = n => n * 2`)

**Key takeaways:**
- Functions enable code reuse and modularity
- Parameters are inputs; `return` is the output
- Arrow functions provide a shorter, cleaner syntax for simple operations
- Use function expressions when you need to pass functions as arguments or assign them to variables

### Chapter 12 (Continued) — Advanced Function Concepts
Dive deeper into modern and advanced function patterns that are essential for writing clean, maintainable automation code and handling real-world testing scenarios.

- **Real-World Arrow Functions:** Converting normal functions and function expressions to arrow functions for cleaner API validation logic (e.g., `validateStatusCode` for HTTP status checks)
- **IIFE (Immediately Invoked Function Expressions):** Self-executing functions that run immediately after definition — useful for setup scripts, test initialization, and avoiding global scope pollution (`(function(){ ... })()` and `(() => { ... })()`)
- **Default Parameters:** Providing fallback values for function arguments so your code is robust when arguments are missing (`function retry(testName, maxRetries = 3, delay = 1000)`)
- **Rest Parameters:** Accepting an indefinite number of arguments as an array using `...args` (`function logResult(suitName, ...Results)`)
- **Spread Operator with Functions:** Passing array elements as individual arguments using `...` (`add(...numbers)`)
- **Function Scope & Nested Scope:** Understanding global scope vs local scope, and how nested functions can access outer variables — but not vice versa
- **Closures:** Functions that remember the scope in which they were created, even when executed elsewhere. Used for:
  - Private state (counter with increment/decrement/get)
  - Retry trackers that keep state across multiple calls
  - Encapsulating configuration in test automation utilities
- **Higher-Order Functions:** Functions that accept other functions as arguments or return functions — the foundation of functional programming and many array methods (`runWithLogin(testFn, testName)`)
- **Pure vs Impure Functions:** Writing predictable functions that return the same output for the same input with no side effects (e.g., `calculatePassRate(total, passed)`), and recognizing impure functions that depend on external state

**Key takeaways:**
- IIFEs are great for isolated setup and teardown logic in test suites
- Default parameters make functions more flexible and prevent `undefined` errors
- Rest parameters and spread operator simplify working with variable-length data
- Closures enable private state and are widely used in retry logic, caching, and module patterns
- Higher-order functions are the backbone of functional programming and array iteration
- Pure functions are easier to test, debug, and reason about — prefer them when possible

### Chapter 13 — Strings
Master JavaScript strings — one of the most frequently used data types in testing, automation, and UI validation. This chapter covers everything from creating strings to manipulating them with 50+ built-in methods.

- **String Basics:** Creating strings with single quotes (`'Hello'`), double quotes (`"Hello"`), and template literals (backticks `` `Hello` ``)
- **String Properties:** Accessing `length`, `constructor`, and `prototype`
- **Search & Check Methods:** `indexOf()`, `lastIndexOf()`, `search()`, `match()`, `matchAll()`, `includes()`, `startsWith()`, `endsWith()`, `localeCompare()`
- **Extract & Slice Methods:** `slice()`, `substring()`, `substr()`, `charAt()`, `charCodeAt()`, `codePointAt()`, `at()`, `split()`, `concat()`
- **Transform & Modify Methods:** `toUpperCase()`, `toLowerCase()`, `trim()`, `trimStart()`, `trimEnd()`, `padStart()`, `padEnd()`, `repeat()`, `replace()`, `replaceAll()`, `normalize()`
- **Conversion & Format Methods:** `toString()`, `valueOf()`, `toLocaleUpperCase()`, `toLocaleLowerCase()`, `Symbol.iterator`
- **Static Methods:** `String.fromCharCode()`, `String.fromCodePoint()`, `String.raw()`
- **Practical Tasks:** String reversal, palindrome checker, and anagram checker
- **Cheat Sheets:** 
  - [`javascript_stringcheatsheet.md`](./Chapter_13_Strings/javascript_stringcheatsheet.md) — Markdown reference table
  - [`javascript_stringcheatsheet.html`](./Chapter_13_Strings/javascript_stringcheatsheet.html) — Interactive searchable HTML table

**Key takeaways:**
- Strings are immutable — all methods return new strings, never modify the original
- `slice()` accepts negative indices; `substring()` does not
- `at()` is the modern way to access characters (supports negative indexing unlike `charAt()`)
- `replace()` only replaces the first match — use `replaceAll()` or regex with `/g` for global replacement
- `String.raw` is perfect for file paths: ``String.raw`C:\Users\name` ``
- Always prefer `===` for string comparisons, and `localeCompare()` for sorting
- Use `trim()` to clean user input, and `padStart()`/`padEnd()` for formatting numbers and codes

### Chapter 14 — Objects
Master JavaScript objects — the core data structure for organizing and managing data. This chapter covers everything from basic object creation to advanced patterns like destructuring, spread operators, getters/setters, and real-world automation configurations.

- **Object Basics:** Creating objects with `{}`, key-value pairs, and nested objects
- **Property Access:** Dot notation (`obj.key`) vs bracket notation (`obj["key"]`) vs dynamic keys
- **Primitive vs Reference:** Understanding how objects are copied by reference, unlike primitive types
- **Object Methods:** Defining and calling functions inside objects
- **Destructuring:** Extracting properties with `{ name, age }`, renaming variables, setting defaults, and nested destructuring
- **Spread Operator:** Copying and merging objects with `{ ...obj1, ...obj2 }`
- **Getters & Setters:** Using `get` and `set` for computed properties
- **Object Iteration:** `Object.keys()`, `Object.values()`, `Object.entries()`, and `for...in` loops
- **Real-World Examples:** ENV configs, API expected responses, test configurations, and retry settings
- **let vs const with Objects:** Why `const` is preferred for object references and how property mutation differs from reassignment

**Key takeaways:**
- Objects are copied by reference — modifying a copied object affects the original
- Use `const` for object references to prevent accidental reassignment
- Destructuring makes code cleaner when extracting multiple properties
- Spread operator is the modern way to clone and merge objects
- `Object.entries()` combined with `forEach` is powerful for iterating key-value pairs
- Getters and setters provide a clean interface for computed object properties

### Chapter 15 — 2D Arrays & Patterns
Master two-dimensional arrays and nested loop patterns — essential for matrix operations, test result grids, and algorithmic problem solving in automation and QA.

- **2D Array Basics:** Creating grids and matrices with nested arrays (`[[1,2,3], [4,5,6], [7,8,9]]`)
- **Accessing Elements:** Using `grid[row][column]` notation and understanding zero-based indexing
- **Nested Loops:** Traversing rows and columns with `for` loops (`for (let i = 0; i < rows; i++)` and `for (let j = 0; j < cols; j++)`)
- **Row & Column Count:** Using `grid.length` for rows and `grid[0].length` for columns
- **Real-World Test Matrix:** Representing test cases with name, status, and duration in a 2D array
- **Modern Iteration:** Using `for...of` and `forEach` for cleaner nested iteration
- **Functional Operations:** Using `map()` and `reduce()` to calculate row sums and aggregate 2D data
- **Filtering in 2D:** Searching and filtering elements across nested arrays (e.g., finding all failed test cases)
- **Pattern Programming:** Building star patterns to strengthen nested loop logic:
  - Right pyramid (`*`, `**`, `***`)
  - Reverse pyramid (`*****`, `****`, `***`)
  - Centered pyramid with spaces

**Key takeaways:**
- 2D arrays are arrays of arrays — think rows and columns
- Always use nested loops when you need to visit every element in a matrix
- `for...of` and `forEach` make 2D iteration more readable
- `map()` + `reduce()` can flatten or summarize 2D data efficiently
- Pattern problems are excellent for building nested loop intuition

### Chapter 16 — Callbacks & Callback Hell
Master JavaScript callbacks — one of the most important concepts for understanding asynchronous programming, event handling, and modern automation frameworks like Playwright.

- **Callback Basics:** Understanding what callbacks are — functions passed as arguments to other functions and executed later
- **Callback Types:** Named callbacks, anonymous callbacks, and arrow function callbacks
- **Synchronous Callbacks:** Callbacks that execute immediately within the same call stack
- **Asynchronous Callbacks:** Callbacks deferred with `setTimeout`, simulating real-world delays like API calls and page loads
- **Callback Hell (Pyramid of Doom):** Deeply nested callbacks that make code hard to read and maintain
  - `160_CB_Hell.js` — 4-step E2E login flow demonstrating callback nesting
  - `161_E2E_CB_Hell.js` — 22-step full E2E test flow (open browser → navigate → login → dashboard → profile → settings → logout → close browser) showing how quickly callbacks become unmanageable
- **Callbacks with Parameters:** Passing data between callback functions
- **Callbacks with Return Values:** Using callbacks to compute and return results
- **Real-World Context:** How callbacks appear in Playwright, API chaining, and event-driven architectures

**Key takeaways:**
- Callbacks are the foundation of asynchronous JavaScript
- Named, anonymous, and arrow functions can all be used as callbacks
- Synchronous callbacks run immediately; asynchronous callbacks are deferred
- Callback Hell occurs when multiple asynchronous operations are nested deeply
- This chapter sets the stage for understanding Promises and async/await (coming next!)

### Chapter 17 — Promises
Master JavaScript Promises — the modern way to handle asynchronous operations. This chapter builds directly on callbacks and shows how Promises flatten nested code, improve readability, and make error handling predictable.

- **Promise Basics:** Creating promises with `new Promise((resolve, reject) => { ... })`
- **Resolve & Reject:** Handling success and failure states in asynchronous logic
- **Real-World API Calls:** Using `.then()` to process resolved values (e.g., HTTP status and response body)
- **Promise Chaining:** Linking multiple `.then()` calls to transform data step by step
- **Error Handling:** Using `.catch()` to handle rejected promises and thrown errors in chains
- **.finally():** Running cleanup code regardless of whether the promise resolved or rejected
- **Callback Pyramid vs Promises:** Visual comparison of nested callback hell vs flat promise chains
- **Promise.all:** Running multiple promises in parallel and waiting for all to succeed
- **Promise.allSettled:** Getting results for every promise even when some fail — perfect for test reporting
- **Interview Questions:** Common promise patterns, chaining behavior, and error flow questions

**Key takeaways:**
- Promises represent a value that may not exist yet but will be resolved at some point in the future
- `.then()` handles success, `.catch()` handles errors, and `.finally()` runs always
- Promise chaining keeps asynchronous code flat and readable compared to nested callbacks
- `Promise.all` is great for parallel independent operations; `Promise.allSettled` is ideal when you need every result
- Understanding promise execution order is a common interview topic

### Chapter 18 — Async/Await
Master JavaScript `async/await` — the modern, readable syntax for writing asynchronous code that looks and behaves like synchronous code. This chapter builds directly on Promises and shows how `async` functions and `await` expressions eliminate callback pyramid complexity and make automation code cleaner.

- **async/await Basics:** Declaring async functions with `async` and pausing execution with `await`
- **try/catch/finally:** Handling errors and cleanup in async functions using familiar synchronous patterns
- **Awaiting Promises:** Waiting for resolved values from promise-returning functions (e.g., `getToken()`)
- **Flattening Callback Pyramid:** Converting deeply nested callback hell into clean, linear async/await code
  - `173_Pyramid_Dom.js` — 4-step E2E login flow rewritten with async/await for maximum readability
- **Playwright Test Example:** Using async/await in real Playwright tests (`page.goto()`, `expect()`)
- **Sequential Execution:** Running dependent async operations one after another (e.g., Login → Dashboard → Report)
- **Parallel Execution:** Using `Promise.all` inside async functions to run independent calls concurrently
- **Interview Questions:** Common async/await patterns, execution order, and behavior questions

**Key takeaways:**
- `async` functions always return a Promise implicitly
- `await` pauses execution until the promise resolves, making code read top-to-bottom
- Use `try/catch/finally` for error handling in async functions — just like synchronous code
- `await` sequential calls when operations depend on each other; use `Promise.all` for independent parallel calls
- `async/await` is the modern standard for Playwright and most JavaScript automation frameworks

---

### Chapter 19 — Playwright Basics
Get hands-on with browser automation using Playwright. This chapter sets up the Playwright testing environment, writes real test specs in TypeScript, and runs them locally and via GitHub Actions CI.

- **Project Setup:** Playwright installation with `npm`, TypeScript configuration, and `playwright.config.ts`
- **Test Specs:** Real-world example tests including generated cart flows (`codegen-tta-cart.spec.ts`)
- **Configuration:** Browser projects (Chromium), HTML reporting, retries on CI, and trace collection
- **CI/CD:** GitHub Actions workflow (`.github/workflows/playwright.yml`) that installs dependencies, browsers, and runs tests on every push/PR
- **Key Commands:**
  - `npx playwright test` — run all tests
  - `npx playwright test --ui` — run tests in UI mode
  - `npx playwright show-report` — view HTML test report

**Key takeaways:**
- Playwright tests are async by nature — use `async/await` with page actions
- `playwright.config.ts` controls browsers, parallelism, retries, and reporters
- GitHub Actions automates test execution and artifact collection for every code change

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [Visual Studio Code](https://code.visualstudio.com/) (recommended editor)
- [Git](https://git-scm.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/VIKAS2702-STAR/LearnPlaywright.git
   ```

2. Navigate into the project:
   ```bash
   cd LearnPlaywright
   ```

3. Open in VS Code:
   ```bash
   code .
   ```

4. Run any JavaScript file with Node.js:
   ```bash
   node Chapter_01_BasicsJS/01_Basics.js
   ```

### Running Playwright Tests

1. Navigate to the Playwright directory:
   ```bash
   cd Chapter_19_Playwright_Basics
   ```

2. Install dependencies:
   ```bash
   npm ci
   ```

3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

4. Run the tests:
   ```bash
   npx playwright test
   ```

5. View the HTML report:
   ```bash
   npx playwright show-report
   ```

---

## 📚 Chapter Overview

### Chapter 00 — JavaScript Tasks
Hands-on JavaScript exercises designed for QA and automation scenarios. These practical tasks bridge fundamental concepts with real-world testing situations, including API response handling, test verdict checking, bug severity classification, CI build health monitoring, and security logic like login lockout.

**Key takeaways:**
- Checking HTTP status code categories (200, 300, 400, 500)
- Comparing expected vs actual results to print test verdicts
- Classifying bug severity based on impact scores
- Reporting CI build health from test pass percentages
- Implementing login lockout logic after failed attempts

### Chapter 01 — Basics of JavaScript
Learn the foundational concepts of JavaScript including basic syntax, core concepts, environment setup verification, and performance-oriented code patterns. This chapter sets the stage for understanding how JavaScript runs in Node.js and browsers.

**Key takeaways:**
- How to write and execute a `.js` file
- Basic syntax and statements
- Verifying your local development environment

### Chapter 02 — JavaScript Concepts
Dive deeper into JavaScript fundamentals with additional examples and explanations. This chapter bridges basic syntax with more complex ideas like control flow and data handling.

**Key takeaways:**
- Reinforcing fundamentals before moving to advanced topics
- Understanding how JS engines process code

### Chapter 03 — Identifiers, Literals & Comments
Master the art of naming variables and functions:
- **Identifier Rules:** What makes a valid variable name in JS
  - Must start with a letter, underscore (`_`), or dollar sign (`$`)
  - Subsequent characters can also include digits (`0-9`)
  - Cannot use reserved keywords (e.g., `let`, `class`, `return`)
- **Naming Conventions:** camelCase, snake_case, PascalCase, SCREAMING_SNAKE_CASE, kebab-case, flatcase, Train-Case, COBOL-CASE, dromedaryCase, UpperCamelCase, Hungarian notation, dollarCase, and more
  - `camelCase` — used for variables and functions (`myVariableName`)
  - `PascalCase` — used for classes and constructors (`MyClassName`)
  - `snake_case` — common in Python, sometimes used in JS configs (`my_variable_name`)
  - `SCREAMING_SNAKE_CASE` — used for constants (`MAX_SIZE`)
  - `kebab-case` — used in HTML/CSS (`my-variable-name`)
- **Comments:** Single-line (`//`), multi-line (`/* */`), and JSDoc-style comments
- **VS Code Shortcuts:** Comprehensive keyboard shortcut references for both Windows and macOS to boost productivity

### Chapter 04 — JavaScript Concepts
Deep dive into core JavaScript concepts that every developer and QA engineer must know:
- **var, let, const:** Variable declarations and their differences
  - `var` — function-scoped, can be re-declared and updated, hoisted with `undefined`
  - `let` — block-scoped, can be updated but not re-declared in the same scope, hoisted but in Temporal Dead Zone (TDZ)
  - `const` — block-scoped, cannot be updated or re-declared, must be initialized at declaration
- **Functions:** Function declaration and usage
  - Declarations vs expressions
  - Parameters and return values
- **Scope:** Function scope (`var`) vs block scope (`let`, `const`)
  - Global scope, function scope, block scope, and lexical scope
- **Hoisting:** Variable and function hoisting behavior
  - `var` declarations are hoisted and initialized with `undefined`
  - `let` and `const` are hoisted but not initialized (TDZ)
  - Function declarations are hoisted with their definition

### Chapter 05 — Literals
Explore JavaScript literals and data types:
- **String Literals:** Single quotes (`'Hello'`), double quotes (`"Hello"`), and template literals (backticks `` `Hello` ``)
- **Number Literals:** Integer (`42`), float (`3.14`), binary (`0b1010`), octal (`0o755`), and hexadecimal (`0xFF`) numbers
- **null & undefined:**
  - `null` — an intentional absence of any object value (assigned by developer)
  - `undefined` — a variable that has been declared but not assigned a value
- **Template Literals:** String interpolation (`${variable}`) and multi-line strings with backticks
- **Backtick vs Quotes:** When to use each — single/double for simple strings, backticks for interpolation and multi-line

### Chapter 06 — Operators & Comparisons
Understand how JavaScript performs calculations and comparisons:
- **Assignment Operators:** `=` to assign values to variables
- **Arithmetic Operators:** `+` (addition), `-` (subtraction), `*` (multiplication), `/` (division)
- **Exponential Operator:** `**` raises the left operand to the power of the right (`2 ** 3` → `8`)
- **Modulus Operator:** `%` returns the remainder of division (`13 % 7` → `6`)
  - Useful for checking even/odd: `n % 2 === 0` means even
- **Compound Operators:** `+=`, `-=`, `*=`, `/=`, `%=` for shorthand updates (`x += 10` is `x = x + 10`)
- **Comparison Operators:** `>`, `<`, `>=`, `<=` return boolean values
- **Loose Equality (`==`):** Compares values after type coercion (can lead to unexpected results)
- **Strict Equality (`===`):** Compares both value **and** type — **always prefer this**
- **Logical Operators:** `&&` (AND), `||` (OR), `!` (NOT)
- **String Concatenation:** Using `+=` to build strings dynamically
- **Ternary Operator:** `condition ? valueIfTrue : valueIfFalse` for concise conditional expressions
- **typeof Operator:** Returns the type of a value (`"string"`, `"number"`, `"boolean"`, `"undefined"`, `"object"`, etc.)
- **Increment/Decrement Operators:**
  - Pre-increment (`++a`) — increase first, then use the value
  - Post-increment (`a++`) — use the value first, then increase
  - Pre-decrement (`--a`) — decrease first, then use the value
  - Post-decrement (`a--`) — use the value first, then decrease
- **Nullish Coalescing Operator (`??`):** Returns the right-hand operand when the left is `null` or `undefined`
  - Useful for providing default values: `let name = userInput ?? "Guest"`
- **Edge Cases & Interview Questions:** Common tricky comparisons like `0 == ""`, `null == undefined`, `[] == ![]`, `NaN !== NaN`, and complex increment/decrement expressions

**Best Practice:**
> Always use `===` (strict equality) unless you explicitly need type coercion. Use `==` only when checking for both `null` and `undefined` together: `if (x == null)`.

### Chapter 07 — If/Else Statements
Learn how to make decisions in code using `if`, `else if`, and `else` statements. This chapter covers basic conditional logic, chained conditions, real-world examples, API response handling, and classic interview questions like even/odd checks, grade calculators, and leap year detection.

**Key takeaways:**
- How to structure `if`, `else if`, and `else` blocks
- Real-world conditional logic for APIs and user input
- Solving interview questions with conditionals

### Chapter 08 — Switch Statements
Understand the `switch` statement as an alternative to long `if/else` chains. Explore cases with and without `break`, default handling, grouped cases, and real-world switch examples. Also includes multiple interview question sets for mastering switch behavior.

**Key takeaways:**
- When to use `switch` vs `if/else`
- How fall-through behavior works (and when to avoid it)
- Grouping multiple cases for shared logic

### Chapter 09 — User Input
Learn how to capture user input in Node.js applications. Covers basic input concepts, `readline` module for asynchronous input, and `prompt-sync` for synchronous input. This chapter bridges the gap between static scripts and interactive CLI tools.

**Key takeaways:**
- Reading user input with `readline`
- Synchronous input with `prompt-sync`
- Building interactive CLI scripts

---

## 🎯 Topics Covered

| Topic | Description |
|-------|-------------|
| QA Scenarios & Tasks | HTTP status codes, test verdicts, bug severity, build health, login lockout |
| JavaScript Basics | Variables, data types, basic syntax |
| Core JS Concepts | Functions, loops, conditionals, execution flow |
| Identifiers | Naming rules, reserved words, valid characters |
| Naming Cases | camelCase, PascalCase, snake_case, kebab-case, flatcase, SCREAMING_SNAKE_CASE, etc. |
| Comments | Code documentation best practices |
| VS Code Shortcuts | Productivity boost with keyboard shortcuts for Windows & macOS |
| Variable Declarations | `var`, `let`, `const` — differences, scope, hoisting, TDZ |
| Functions | Function declarations, expressions, parameters, return values |
| Scope | Global, function, block, and lexical scope |
| Hoisting | Variable and function hoisting behavior, Temporal Dead Zone |
| String Literals | Single quotes, double quotes, backticks (template literals) |
| Number Literals | Integer, float, binary, octal, hexadecimal |
| null & undefined | Differences, use-cases, and common mistakes |
| Template Literals | String interpolation and multi-line strings |
| Assignment Operators | `=`, `+=`, `-=`, `*=`, `/=`, `%=` |
| Arithmetic Operators | `+`, `-`, `*`, `/`, `**`, `%` |
| Comparison Operators | `>`, `<`, `>=`, `<=`, `==`, `===`, `!=`, `!==` |
| Loose vs Strict Equality | Type coercion, edge cases, best practices |
| Logical Operators | `&&`, `\|\|`, `!` |
| Ternary Operator | Concise conditional expressions with `? :` |
| typeof Operator | Checking data types at runtime |
| Increment/Decrement | Pre (`++a`, `--a`) and post (`a++`, `a--`) operators |
| Nullish Coalescing | `??` for default values when `null` or `undefined` |
| String Concatenation | Building strings with `+=` |
| Tricky Comparisons | `NaN`, `null`, `undefined`, empty arrays, interview questions |
| If/Else Statements | Conditional logic, branching, real-world examples |
| Switch Statements | `switch`, `case`, `break`, `default`, grouped cases |
| User Input | `readline`, `prompt-sync`, interactive CLI programs |
| Loops | `for`, `while`, `do...while`, loop control, `continue` |
| Loop Interview Questions | Countdown, edge cases, infinite loops, do...while behavior |
| Arrays | Creating, accessing, modifying, adding, removing elements |
| Array Searching | `indexOf`, `lastIndexOf`, `includes`, `find`, `findIndex`, `findLast`, `findLastIndex` |
| Array Iteration | `for`, `for...of`, `forEach`, `for...in`, `entries` |
| Array Transformation | `map`, `filter`, `reduce`, `flat` |
| Array Sorting | `sort()`, numeric compare functions, ascending & descending order |
| Array Slicing & Splicing | `slice()` (non-mutating), `splice()` (mutating) |
| Array Concatenation | `concat()`, spread operator (`...`), `join()` |
| Array Checking | `Array.isArray()`, `every()`, `some()` |
| Functions | Defining, calling, parameters, return values |
| Function Types | No parameters, with parameters, with return, without return |
| Function Expressions | Anonymous functions assigned to variables |
| Arrow Functions | ES6 concise syntax (`=>`), implicit returns |
| IIFE | Immediately Invoked Function Expressions for setup and scope isolation |
| Default Parameters | Fallback values for function arguments |
| Rest Parameters | `...args` for variable-length argument lists |
| Spread Operator | Expanding arrays into individual function arguments |
| Nested Scope | Block scope and nested function scope access |
| Closures | Functions that retain access to their outer scope |
| Higher-Order Functions | Functions that accept or return other functions |
| Pure Functions | Predictable functions with no side effects |
| String Basics | Creation with quotes, template literals, backticks |
| String Properties | `length`, `constructor`, `prototype` |
| String Search | `indexOf`, `lastIndexOf`, `search`, `match`, `matchAll`, `includes`, `startsWith`, `endsWith` |
| String Extraction | `slice`, `substring`, `substr`, `charAt`, `charCodeAt`, `codePointAt`, `at`, `split`, `concat` |
| String Transformation | `toUpperCase`, `toLowerCase`, `trim`, `trimStart`, `trimEnd`, `padStart`, `padEnd`, `repeat`, `replace`, `replaceAll` |
| String Conversion | `toString`, `valueOf`, `toLocaleUpperCase`, `toLocaleLowerCase`, `Symbol.iterator` |
| String Static Methods | `String.fromCharCode`, `String.fromCodePoint`, `String.raw` |
| String Tasks | Reverse string, palindrome checker, anagram checker |
| String Cheat Sheets | Markdown and HTML interactive reference tables |
| Objects | Creation, property access, dot vs bracket notation, dynamic keys |
| Object Methods | Functions inside objects, getters and setters |
| Primitive vs Reference | How objects and arrays are copied by reference |
| Object Destructuring | Basic, rename, default values, nested destructuring |
| Object Spread | Cloning and merging objects with `...` |
| Object Iteration | `Object.keys()`, `Object.values()`, `Object.entries()`, `for...in` |
| Object Configurations | Real-world ENV, API response, and test config objects |
| Interview Questions | `const` with objects, property mutation vs reassignment |
| 2D Arrays | Creating, accessing, and iterating nested arrays (matrices) |
| Nested Loops | Row and column traversal with nested `for` loops |
| 2D Array Methods | `map()`, `reduce()`, `forEach()`, `for...of` on 2D data |
| Pattern Programming | Right pyramid, reverse pyramid, centered pyramid with stars |
| Test Matrices | Representing test cases and results in 2D arrays |
| Interview File | Standalone interview questions and answers (`interview.md`) |
| Callbacks | Functions passed as arguments to other functions |
| Synchronous Callbacks | Callbacks executed immediately in the same call stack |
| Asynchronous Callbacks | Callbacks deferred with `setTimeout`, simulating API delays |
| Callback Hell | Deeply nested callbacks — the "Pyramid of Doom" |
| Named Callbacks | Pre-defined functions passed as callback arguments |
| Anonymous Callbacks | Inline functions passed directly as arguments |
| Arrow Callbacks | Concise arrow functions used as callbacks |
| Callback Parameters | Passing data between nested callback functions |
| Callback Return Values | Using callbacks to compute and return results |
| Promises | Creating, resolving, and rejecting promises |
| Promise .then() | Handling resolved values and chaining promises |
| Promise .catch() | Error handling in promise chains |
| Promise .finally() | Cleanup logic regardless of outcome |
| Promise.all | Parallel execution of multiple promises |
| Promise.allSettled | Getting all results including failures |
| Promise Interview Questions | Common patterns and execution order |
| async/await Basics | Declaring async functions and awaiting promises |
| try/catch with async/await | Error handling in async functions |
| Sequential Async Execution | Awaiting dependent operations one after another |
| Parallel Async Execution | Promise.all inside async functions for concurrent calls |
| Async/Await Interview Questions | Common patterns and execution order |
| Playwright Basics Setup | Installing Playwright and dependencies |
| Playwright Config | `playwright.config.ts`, browsers, reporters, retries, and tracing |
| Playwright Test Specs | TypeScript test files with `page`, `expect`, and async/await |
| GitHub Actions CI | Automated test execution on push and pull requests |

---

## 🛤️ Suggested Learning Path

If you are new to JavaScript or preparing for QA automation, follow this order:

1. **Chapter 00** → Start with practical QA-oriented JavaScript tasks to warm up
2. **Chapter 01** → Get comfortable running JS files and basic syntax
3. **Chapter 02** → Reinforce core concepts
4. **Chapter 03** → Learn how to name things properly and use VS Code efficiently
5. **Chapter 04** → Master variables, scope, and hoisting (critical for debugging)
6. **Chapter 05** → Understand data types and literals deeply
7. **Chapter 06** → Learn operators and comparisons thoroughly — this is where many bugs hide!
8. **Chapter 07** → Master conditional logic with `if/else` statements
9. **Chapter 08** → Explore `switch` statements for cleaner multi-branch logic
10. **Chapter 09** → Learn to build interactive CLI programs with user input
11. **Chapter 10** → Master loops — `for`, `while`, and `do...while` — for repetitive tasks
12. **Chapter 11** → Master arrays — creating, searching, iterating, and transforming data collections
13. **Chapter 12** → Master functions — parameters, return values, expressions, arrow functions, IIFE, default parameters, rest/spread, closures, higher-order functions, and pure functions
  14. **Chapter 13** → Master strings — creation, search, extraction, transformation, and all 50+ built-in methods with practical tasks and cheat sheets
  15. **Chapter 14** → Master objects — creation, property access, reference vs primitive, destructuring, spread, getters/setters, and real-world configuration objects
  16. **Chapter 15** → Master 2D arrays and nested loops — matrix traversal, test result grids, functional operations, and pattern programming
  17. **Chapter 16** → Understand callbacks — synchronous, asynchronous, and the infamous Callback Hell (Pyramid of Doom) that makes the case for Promises and async/await
  18. **Chapter 17** → Master Promises — resolve/reject, `.then()` chaining, `.catch()` error handling, `.finally()` cleanup, `Promise.all`, `Promise.allSettled`, and interview patterns
  19. **Chapter 18** → Master async/await — the modern syntax for clean asynchronous code, sequential and parallel execution, and Playwright test integration
  20. **Chapter 19** → Playwright basics — set up Playwright, write TypeScript test specs, configure browsers/reporters, and run tests locally and via GitHub Actions CI

---

## ⌨️ VS Code Keyboard Shortcuts

Quick references are available for both platforms to help you code faster:

- [Windows Shortcuts](./Chapter_03_Identifier_Literals/VS_Code_Keyboard_Shortcut_windows.md)
- [macOS Shortcuts](./Chapter_03_Identifier_Literals/VS_Code_Keyboard_Shortcut_mac.md)

---

## 📝 File Naming Convention

Files in this repository follow a numbered chapter structure for easy navigation:

```
XX_DescriptiveName.js
```

Where `XX` is a two-digit number indicating the learning sequence. This makes it easy to follow the material in the intended order.

---

## 💡 Tips for Learning

- **Run the code:** Don’t just read — execute every file with `node filename.js`
- **Experiment:** Modify values and predict the output before running
- **Take notes:** Write down confusing concepts, especially hoisting and `==` vs `===`
- **Practice comparisons:** Chapter 06 has many edge cases — test them yourself
- **Use the shortcuts:** Memorize a few VS Code shortcuts each day

---

## 🤝 Contributing

This is a personal learning repository. Suggestions and improvements are welcome! Feel free to open an issue or pull request if you spot an error or want to add more examples.

---

## 📄 License

This project is for personal learning and educational purposes.

---

> **Happy Learning!** Keep coding and keep growing! 🚀
