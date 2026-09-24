# JavaScript Functions

A **Function** is a reusable block of code designed to perform a particular task. It is executed when "something" invokes (calls) it.

Functions are the core building blocks in JavaScript, adhering to the **DRY (Don't Repeat Yourself)** principle.

---

## 📌 Table of Contents
1. [Why Do We Need Functions?](#1-why-do-we-need-functions)
2. [Function Anatomy: Declaration & Invocation](#2-function-anatomy-declaration--invocation)
3. [Parameters vs Arguments](#3-parameters-vs-arguments)
4. [The `return` Statement](#4-the-return-statement)
5. [Types of Functions in JavaScript](#5-types-of-functions-in-javascript)
6. [Hoisting in Functions](#6-hoisting-in-functions)
7. [Variable Scope in Functions](#7-variable-scope-in-functions)
8. [Passing Primitives vs Passing References](#8-passing-primitives-vs-passing-references)
9. [Common Practical Examples](#9-common-practical-examples)
10. [Quick Reference Cheatsheet](#10-quick-reference-cheatsheet)

---

## 1. Why Do We Need Functions?

Without functions, repeating tasks requires duplicating code:

```javascript
// Duplicated code for calculating rectangle area:
let l1 = 10, w1 = 5;
let area1 = l1 * w1;

let l2 = 20, w2 = 4;
let area2 = l2 * w2;
```

With functions, logic is centralized and reusable anywhere:

```javascript
function calculateArea(length, width) {
    return length * width;
}

let area1 = calculateArea(10, 5); // 50
let area2 = calculateArea(20, 4); // 80
```

### Key Advantages:
- **Reusability**: Write code once, use it multiple times.
- **Maintainability**: If logic changes, update it in one place.
- **Modularity**: Break complex problems into smaller, manageable sub-tasks.
- **Readability**: Code becomes clean and self-explanatory.

---

## 2. Function Anatomy: Declaration & Invocation

### Syntax:
```javascript
function functionName(parameter1, parameter2) {
    // Function body (code to be executed)
    return result; // (Optional)
}
```

### Calling / Invoking:
A function declaration defines what the function does, but it does **not** run until you invoke it:

```javascript
function sayHello() {
    console.log("Hello, World!");
}

sayHello(); // Invoking the function
```

---

## 3. Parameters vs Arguments

These two terms are often confused:

| Term | Definition | Example |
|---|---|---|
| **Parameter** | Variables listed in the function definition (placeholders) | `a, b` in `function sum(a, b)` |
| **Argument** | Actual values passed into the function when called | `10, 20` in `sum(10, 20)` |

```javascript
// x and y are PARAMETERS
function multiply(x, y) {
    return x * y;
}

// 5 and 6 are ARGUMENTS
let result = multiply(5, 6);
```

### Default Parameters (ES6)
If an argument is missing, it defaults to `undefined`. You can provide fallback default values:

```javascript
function greetUser(name = "Guest") {
    console.log(`Welcome, ${name}!`);
}

greetUser("Mohammad"); // Welcome, Mohammad!
greetUser();           // Welcome, Guest!
```

---

## 4. The `return` Statement

The `return` statement:
1. Specifies the **value returned** to the caller.
2. **Immediately stops** function execution (any code after `return` inside the function is ignored).

```javascript
function checkAge(age) {
    if (age >= 18) {
        return "Eligible to vote";
    }
    return "Not eligible"; // runs only if condition above was false
}

let status = checkAge(20);
console.log(status); // "Eligible to vote"
```

### `console.log()` vs `return`:
- `console.log()` simply prints to the terminal for debugging. It does **not** give the value back to your program.
- `return` passes a value back so it can be stored in a variable or used in further calculations.
- If a function does not have a `return` statement, it implicitly returns **`undefined`**.

```javascript
function test() {
    console.log("Printing only");
}

let val = test();
console.log(val); // undefined
```

---

## 5. Types of Functions in JavaScript

### A. Function Declaration
Standard way of declaring a function. Can be called before it is defined due to hoisting.
```javascript
function add(a, b) {
    return a + b;
}
```

### B. Function Expression
A function assigned to a variable. It can be anonymous (no name) or named.
```javascript
const subtract = function(a, b) {
    return a - b;
};

console.log(subtract(10, 4)); // 6
```

### C. Arrow Function (ES6)
A compact syntax for writing function expressions:
```javascript
// Multi-line arrow function:
const multiply = (a, b) => {
    return a * b;
};

// Single-line (implicit return):
const divide = (a, b) => a / b;

// Single parameter (parentheses optional):
const square = x => x * x;
```

### D. Immediately Invoked Function Expression (IIFE)
Runs immediately as soon as it is defined:
```javascript
(function() {
    console.log("This runs immediately!");
})();
```

---

## 6. Hoisting in Functions

- **Function Declarations** are **hoisted** completely to the top of their scope. You can call them before their definition in the code.
- **Function Expressions & Arrow Functions** stored in `var`, `let`, or `const` are **not** hoisted as functions. Calling them before declaration results in an error!

```javascript
// ✅ Works fine (Function Declaration is hoisted)
greet(); 
function greet() {
    console.log("Hello!");
}

// ❌ Error: Cannot access 'sayHi' before initialization
sayHi(); 
const sayHi = () => {
    console.log("Hi!");
};
```

---

## 7. Variable Scope in Functions

Scope determines where variables are accessible:

1. **Global Scope**: Variables declared outside any function/block. Accessible everywhere.
2. **Function / Local Scope**: Variables declared inside a function (`var`, `let`, `const`) are only accessible inside that function.
3. **Block Scope**: Variables declared with `let` or `const` inside `{ ... }` blocks (e.g., `if`, `for`) are only accessible within that block.

```javascript
let globalVar = "I am global";

function demoScope() {
    let localVar = "I am local";
    console.log(globalVar); // Accessible
    console.log(localVar);  // Accessible
}

demoScope();
// console.log(localVar); // ❌ ReferenceError: localVar is not defined
```

---

## 8. Passing Primitives vs Passing References

### A. Primitives (Passed by Value)
Numbers, strings, booleans are passed by value. Modifying the parameter inside the function does **NOT** affect the original variable:

```javascript
function changeValue(x) {
    x = 100;
}

let num = 50;
changeValue(num);
console.log(num); // 50 (Unchanged)
```

### B. Objects & Arrays (Passed by Reference)
Arrays and objects are passed by reference. Modifying the contents of the array/object inside the function **DOES** mutate the original object/array:

```javascript
function addElement(arr) {
    arr.push("New Item");
}

let list = [1, 2, 3];
addElement(list);
console.log(list); // [1, 2, 3, "New Item"] (Mutated!)
```

---

## 9. Common Practical Examples

### 1. Check Even or Odd
```javascript
function isEven(num) {
    return num % 2 === 0;
}

console.log(isEven(4)); // true
console.log(isEven(7)); // false
```

### 2. Find Maximum in an Array
```javascript
function findMax(arr) {
    if (arr.length === 0) return null;
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(findMax([12, 45, 7, 89, 23])); // 89
```

### 3. Calculate Factorial
```javascript
function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5)); // 120
```

---

## 10. Quick Reference Cheatsheet

| Concept | Syntax Example | Notes |
|---|---|---|
| **Declaration** | `function add(a, b) { return a + b; }` | Hoisted, can call before definition |
| **Expression** | `const add = function(a, b) { return a + b; };` | Not hoisted, assigned to variable |
| **Arrow Function** | `const add = (a, b) => a + b;` | Clean syntax, implicit return if 1-line |
| **Default Param** | `function greet(name = "User") {}` | Used when argument is `undefined` |
| **No return** | `function fn() {}` | Implicitly returns `undefined` |
| **Primitives** | Passed by value | Original variable is never altered |
| **Arrays/Objects** | Passed by reference | Mutating parameter mutates original |
