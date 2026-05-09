# JavaScript: Literals, Identifiers & Keywords

> A comprehensive reference for JavaScript naming rules, fixed values, and reserved words.

---

## 1️⃣ Identifiers

An **identifier** is a name given to a variable, function, class, or label in JavaScript.

| Aspect | Description | Example |
|--------|-------------|---------|
| **Definition** | A sequence of characters used to identify a variable, function, or property | `userName`, `calculateSum` |
| **Valid Characters** | Letters (`a-z`, `A-Z`), digits (`0-9`), underscore (`_`), dollar sign (`$`) | `name1`, `_private`, `$value` |
| **First Character Rule** | Cannot start with a digit | ✅ `name1` ❌ `1name` |
| **Case Sensitivity** | `name` and `Name` are different identifiers | `firstName` ≠ `FirstName` |
| **No Spaces** | Cannot contain spaces or hyphens | ✅ `first_name` ❌ `first-name` |
| **No Special Symbols** | `@`, `#`, `%`, `&`, etc. are not allowed (except `_` and `$`) | ❌ `@name`, `user@name` |
| **Unicode Support** | Supports Unicode letters (e.g., `ñ`, `中`) | `nombre`, `用户` |
| **Common Styles** | camelCase, snake_case, PascalCase, SCREAMING_SNAKE_CASE | `firstName`, `first_name`, `FirstName`, `MAX_SIZE` |
| **Conventions** | Variables/functions: `camelCase`, Classes: `PascalCase`, Constants: `UPPER_SNAKE_CASE` | `let userAge;`, `class UserProfile {}`, `const PI = 3.14;` |

---

## 2️⃣ Literals

A **literal** is a fixed value that appears directly in the source code. It represents a constant value.

| Type | Description | Example |
|------|-------------|---------|
| **String Literal** | Text enclosed in single, double, or backticks | `'Hello'`, `"World"`, `` `Template ${x}` `` |
| **Number Literal** | Integer or floating-point values | `42`, `3.14`, `-10`, `0.5` |
| **BigInt Literal** | Large integers beyond `Number.MAX_SAFE_INTEGER` | `9007199254740991n`, `12345678901234567890n` |
| **Boolean Literal** | Logical true or false values | `true`, `false` |
| **Null Literal** | Represents intentional absence of any value | `null` |
| **Undefined Literal** | Represents an uninitialized variable | `undefined` |
| **Array Literal** | Ordered list of values inside square brackets | `[1, 2, 3]`, `['a', 'b']` |
| **Object Literal** | Collection of key-value pairs inside curly braces | `{ name: 'Vikas', age: 25 }` |
| **Regular Expression Literal** | Pattern for matching text | `/ab+c/i`, `/\d+/g` |
| **Template Literal** | String with embedded expressions (backticks) | `` `Hello, ${name}!` `` |

### Literal vs Identifier Example
```javascript
let name = "Vikas";
//  ^identifier  ^string literal

const PI = 3.14;
//    ^identifier  ^number literal
```

---

## 3️⃣ Keywords (Reserved Words)

**Keywords** are predefined words that have special meaning in JavaScript. They cannot be used as identifiers (variable names, function names, etc.).

| Category | Keywords | Purpose |
|----------|----------|---------|
| **Variable Declaration** | `var`, `let`, `const` | Declare variables |
| **Control Flow** | `if`, `else`, `switch`, `case`, `default`, `break`, `continue` | Conditional and loop control |
| **Loops** | `for`, `while`, `do`, `in`, `of` | Iteration constructs |
| **Functions** | `function`, `return`, `yield`, `async`, `await` | Function definition and async operations |
| **Object-Oriented** | `class`, `extends`, `super`, `new`, `this`, `constructor`, `static`, `get`, `set` | Class-based programming |
| **Data Types** | `typeof`, `instanceof`, `void`, `delete`, `in` | Type checking and property operations |
| **Exception Handling** | `try`, `catch`, `finally`, `throw`, `Error` | Error handling |
| **Logical / Boolean** | `true`, `false`, `null`, `undefined` | Boolean and nullish values |
| **Modules** | `import`, `export`, `from`, `as`, `default` | ES6 module system |
| **Strict Mode** | `use strict` | Enables strict parsing and error handling |
| **Others** | `debugger`, `with`, `eval` | Debugging and legacy features |

### Strict Mode Reserved Words
These words are reserved in strict mode and cannot be used as identifiers:

| `implements` | `interface` | `let` | `package` | `private` |
| `protected` | `public` | `static` | `yield` | |

### Future Reserved Words
These may become keywords in future ECMAScript versions:

| `enum` | `await` (outside async) |

---

## 📊 Quick Comparison Table

| Feature | Identifier | Literal | Keyword |
|---------|-----------|---------|---------|
| **Definition** | Name of a variable/function/property | Fixed value written in code | Reserved word with special meaning |
| **Examples** | `userName`, `_value`, `$count` | `"Vikas"`, `42`, `true`, `[1,2]` | `let`, `function`, `return`, `class` |
| **Can be custom?** | ✅ Yes | ✅ Yes (you write the value) | ❌ No (predefined by JS) |
| **Used as variable name?** | ✅ Yes | ❌ No | ❌ No |
| **Case Sensitive?** | ✅ Yes | Varies (strings are, numbers/booleans are not) | ✅ Yes |
| **Starts with digit?** | ❌ No | ✅ Yes (`123` is a valid number literal) | ❌ No |

---

## 🎯 Summary

| Term | What it is | Example |
|------|------------|---------|
| **Identifier** | The *name* you give to a variable or function | `firstName`, `calculateTotal` |
| **Literal** | The *actual value* assigned or used | `"Vikas"`, `25`, `true`, `[1, 2]` |
| **Keyword** | A *reserved word* with special meaning in JS | `let`, `const`, `function`, `return` |

---

> **Tip:** Always choose meaningful identifiers, use consistent naming conventions, and avoid using reserved keywords as variable names to prevent syntax errors!
