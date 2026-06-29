# Understanding `default` vs Non-Default Exports in JavaScript/TypeScript

This guide explains the difference between **named exports** (non-default) and **default exports** using the files in this project.

---

## 1. Named Exports (Non-Default)

When you want to export **multiple** items from a single file, you use **named exports**.

### Export Syntax
Use the `export` keyword in front of each variable, function, or class you want to expose.

**File: `../utils.js`**
```javascript
export let BASE_URL = "https://api.staging.com";

export function formatTestName( testName ) {
    return "TC_" + name.toUpperCase();
}
```

**File: `../testutils.js`**
```javascript
export let BASE_URL = "https://app.vwo.com";

export function formatUpperCaseString( name ) {
    return name.toUpperCase();
}
```

### Import Syntax
Use **curly braces `{}`** to import named exports. You can also rename them using the `as` keyword to avoid naming conflicts.

**File: `180_Utils.js`**
```javascript
import { BASE_URL as bul_util, formatTestName } from "../utils.js";
import { BASE_URL as bul_testutil, formatUpperCaseString } from "../testutils.js";

console.log( bul_util );                         // Output: https://api.staging.com
console.log( bul_testutil );                     // Output: https://app.vwo.com
console.log( formatUpperCaseString( "Login Page" ) ); // Output: TC_LOGIN PAGE
```

### Key Points for Named Exports
- A module can have **many** named exports.
- You must use the **same name** (or an alias) as the exported item when importing.
- Aliases (`as`) are useful when two modules export items with the same name (e.g., `BASE_URL`).

---

## 2. Default Exports

When a module is designed to provide **a single main thing**, you can use a **default export**.

### Export Syntax
Use the `export default` keywords.

**File: `../logger.js`**
```javascript
export default function log( message ) {
    console.log( "[LOG] - default " + message );
}

export function log2( message ) {
    console.log( "[LOGS] " + message );
}
```

> Note: `logger.js` also has a named export `log2`, but the **primary** export is the default `log` function.

### Import Syntax
**Do not use curly braces.** You can assign **any name** you like to a default import because there is only one default export per module.

**File: `181_Logger.js`**
```javascript
import log from "../logger.js";
log( "Start of the test cases" );
```

### Key Points for Default Exports
- A module can have **only one** `export default`.
- You can name the import **whatever you want** (e.g., `import log`, `import myLogger`, `import logger` would all work for the same default export).
- The import is cleaner and shorter when a module has one clear purpose.

---

## 3. Quick Comparison

| Feature | Named Export | Default Export |
|---|---|---|
| Keyword | `export` | `export default` |
| Imports per module | Multiple allowed | Only one allowed |
| Import syntax | `import { name } from "..."` | `import name from "..."` |
| Naming requirement | Must match exported name (or use alias) | Can be named anything |
| Use case | Utility libraries with many functions | Single primary class/function |

---

## 4. Summary

- **Named exports** (`180_Utils.js`) are best when a file exports several related utilities. You import them with `{}`.
- **Default exports** (`181_Logger.js`) are best when a file represents a single primary responsibility. You import them without `{}` and can give them any name.

Both styles can even be mixed in the same file (as seen in `logger.js` which has both a default export and a named export `log2`).
