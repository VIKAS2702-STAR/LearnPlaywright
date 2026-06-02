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
│   ├── 41_Ternary_Op.js                    # Ternary operator placeholder
│   ├── 42_Type_op.js                       # Type operator placeholder
│   ├── 43_Increment_Decremet_op.js         # Increment/Decrement placeholder
│   └── 44_Null_Op.js                       # Nullish operator placeholder
│
└── README.md                                 # This file
```

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
- **Edge Cases & Interview Questions:** Common tricky comparisons like `0 == ""`, `null == undefined`, `[] == ![]`, and why `NaN !== NaN`

**Best Practice:**
> Always use `===` (strict equality) unless you explicitly need type coercion. Use `==` only when checking for both `null` and `undefined` together: `if (x == null)`.

---

## 🎯 Topics Covered

| Topic | Description |
|-------|-------------|
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
| String Concatenation | Building strings with `+=` |
| Tricky Comparisons | `NaN`, `null`, `undefined`, empty arrays, interview questions |

---

## 🛤️ Suggested Learning Path

If you are new to JavaScript or preparing for QA automation, follow this order:

1. **Chapter 01** → Get comfortable running JS files and basic syntax
2. **Chapter 02** → Reinforce core concepts
3. **Chapter 03** → Learn how to name things properly and use VS Code efficiently
4. **Chapter 04** → Master variables, scope, and hoisting (critical for debugging)
5. **Chapter 05** → Understand data types and literals deeply
6. **Chapter 06** → Learn operators and comparisons thoroughly — this is where many bugs hide!

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
