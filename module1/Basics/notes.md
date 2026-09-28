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

---

## 4. Output / Printing Messages

In JavaScript, there are different ways to output/print messages depending on the runtime environment:

### In Console (Node.js & Browser DevTools)
- **`console.log()`**: Prints messages/data to the standard output.
```javascript
console.log("Hello, World!");
console.log("Age:", 20);
```
- **Other console methods**: `console.warn()`, `console.error()`, `console.table()`.

### In Browser Webpages
- **`alert()`**: Displays a popup alert box with a message.
- **`document.write()`**: Writes directly to the HTML document (mostly used for quick testing).

---

## 5. String Interpolation / Template Literals (JS "F-String")

In Python, formatted strings are called f-strings (`f"Hello {name}"`). In JavaScript, the equivalent feature is called **Template Literals** (introduced in ES6).

- Uses **backticks** (``` ` ```) instead of single (`'`) or double (`"`) quotes.
- Uses `${expression}` to insert variables or evaluate JS expressions directly inside strings.

### Examples

```javascript
let name = "Mohammad";
let age = 20;

// Basic Interpolation
console.log(`Hello, my name is ${name} and I am ${age} years old.`);
// Output: Hello, my name is Mohammad and I am 20 years old.

// Expressions inside template literals
console.log(`Next year I will be ${age + 1} years old.`);
// Output: Next year I will be 21 years old.

// Multi-line Strings
let multiLine = `This is line 1.
This is line 2.`;
```

---

## 6. Taking Input from User

The method to take input depends on whether you are running code in a **Browser** or in **Node.js**.

### A. In Browser
- **`prompt()`**: Shows a dialog box asking the user for input. Returns the entered value as a `String` (or `null` if cancelled).

```javascript
let userName = prompt("Enter your name:");
console.log(`Hello, ${userName}!`);

// Convert input string to Number if doing math:
let num = Number(prompt("Enter a number:"));
```

### B. In Node.js (Terminal)
Node.js does not have built-in `prompt()`. You can use the built-in `readline` module or `readline-sync` package.

#### 1. Using built-in `readline` module (Asynchronous / Callback):
```javascript
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (answer) => {
  console.log(`Hello, ${answer}!`);
  rl.close();
});
```

#### 2. Using `readline-sync` (Synchronous - like Python's `input()`):
*(Requires installing: `npm install readline-sync`)*

```javascript
const readlineSync = require('readline-sync');

let name = readlineSync.question('Enter your name: ');
console.log(`Hello, ${name}!`);
```

