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
└── README.md                                 # This file
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
