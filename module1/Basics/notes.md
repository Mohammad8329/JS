# JavaScript Basics - Notes

## 1. What is JavaScript?
- A lightweight, interpreted (or JIT-compiled), dynamic programming language.
- Primarily used for web development to make webpages interactive.
- Runs in browser environments (V8, SpiderMonkey) and server-side via Node.js.

---

## 2. Variables & Keywords (`var`, `let`, `const`)

JavaScript provides three keywords to declare variables: `var`, `let`, and `const`.

### Quick Comparison

| Feature | `var` | `let` | `const` |
| :--- | :--- | :--- | :--- |
| **Scope** | Function / Global | Block (`{}`) | Block (`{}`) |
| **Re-declaration** | Allowed | Not Allowed | Not Allowed |
| **Re-assignment** | Allowed | Allowed | Not Allowed |
| **Hoisting** | Hoisted with `undefined` | Hoisted (in TDZ*) | Hoisted (in TDZ*) |
| **Introduced In** | ES5 and earlier | ES6 (2015) | ES6 (2015) |

> *\*TDZ = Temporal Dead Zone (cannot access before declaration).*

---

### Detailed Differences & Behavior

#### 1. Scope
- **`var`**: Function-scoped. If declared outside a function, it becomes global. Ignore block boundaries (`if`, `for`).
- **`let` & `const`**: Block-scoped. Only accessible within the nearest `{}` enclosing block.

#### 2. Re-declaration & Re-assignment
- **`var`**: Can be re-declared and updated anywhere in its scope.
- **`let`**: Cannot be re-declared in the same scope, but value can be reassigned.
- **`const`**: Cannot be re-declared or reassigned. Must be initialized at declaration. *(Note: Object/array properties inside a `const` reference can still be mutated).*

#### 3. Hoisting
- **`var`**: Variables are hoisted to the top of their scope and initialized as `undefined`.
- **`let` / `const`**: Also hoisted, but placed in a **Temporal Dead Zone (TDZ)** from block start until declaration. Accessing them beforehand throws a `ReferenceError`.

---

### Key Use Cases & Best Practices

- **Use `const` by default**: For variables whose reference should not change (functions, objects, arrays, fixed configuration values).
- **Use `let` when needed**: For variables whose values change over time (counters, loop iterators, toggles).
- **Avoid `var`**: Considered legacy due to scope leakage and unintended global variable creation.

---

## 3. Data Types (Brief Overview)

### Primitive Types (Stored by value)
- `String`: Textual data (`"Hello"`)
- `Number`: Integers and floats (`42`, `3.14`)
- `Boolean`: `true` or `false`
- `Undefined`: Variable declared but not assigned a value
- `Null`: Intentional absence of any object value
- `Symbol`: Unique and immutable identifier
- `BigInt`: Integers larger than \(2^{53} - 1\)

### Non-Primitive / Reference Types (Stored by reference)
- `Object`: Collection of key-value pairs
- `Array`: Ordered collection of values
- `Function`: Executable code blocks
