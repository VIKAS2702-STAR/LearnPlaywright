# JavaScript Interview Questions

## Q: Why do we use `const` for object references instead of `let` or `var`?

### Answer:

```javascript
const obj1 = { a: 1, b: 2 };
```

1. **Reference Immutability**: `const` prevents reassignment of the entire object. The properties can still be mutated, but the reference itself cannot be changed.

2. **Intent Clarity**: Using `const` signals that the object reference is meant to remain stable throughout the scope.

3. **Bug Prevention**: Prevents accidental overwrites like `obj1 = { c: 3 }` which would lose the original reference and potentially cause bugs.

4. **Best Practice**: Modern JavaScript recommends using `const` by default. Only use `let` when reassignment is actually needed. `var` is generally avoided in modern code due to function-scoping and hoisting issues.

### Important Distinction:
`const` only makes the **reference** constant, not the object's properties:

```javascript
const obj1 = { a: 1, b: 2 };
obj1.a = 10;        // This WORKS! Properties are mutable
obj1 = { c: 3 };    // This FAILS! Reference cannot be reassigned
```

For true immutability, use `Object.freeze()`:
```javascript
const frozenObj = Object.freeze({ a: 1, b: 2 });
frozenObj.a = 10;   // This is silently ignored (or throws in strict mode)
```

### Summary:
- Use `const` for objects when you don't plan to reassign the reference
- Use `let` only when you need to reassign the variable
- Avoid `var` in modern JavaScript
