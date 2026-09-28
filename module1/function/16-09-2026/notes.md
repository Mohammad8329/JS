# JavaScript Functions - Notes

## 1. What is a Function?
A function is a reusable block of code designed to perform a specific task. Functions allow you to write code once and reuse it multiple times with different inputs.

---

## 2. Function Declaration (Named Function)
A function declaration defines a function with a specified name.

```javascript
function greet(name) {
    return `Hello, ${name}!`;
}

// Invoking / Calling the function
console.log(greet("Mohammad"));
```

---

## 3. Function Expression
A function can also be defined inside an expression and assigned to a variable.

```javascript
const add = function(a, b) {
    return a + b;
};

console.log(add(5, 3)); // Output: 8
```

---

## 4. Arrow Functions (ES6)
A shorter syntax for writing function expressions using `=>`.

```javascript
// Basic Arrow Function
const multiply = (a, b) => {
    return a * b;
};

// Implicit Return (One-liner)
const square = x => x * x;

console.log(multiply(4, 5)); // Output: 20
console.log(square(6));       // Output: 36
```

---

## 5. Parameters vs Arguments
- **Parameters**: The variable names listed in the function definition.
- **Arguments**: The actual values passed to the function when it is called.

```javascript
function showInfo(param1, param2) { // param1, param2 are parameters
    console.log(param1, param2);
}

showInfo("Argument 1", "Argument 2"); // Values passed are arguments
```

### Default Parameters
You can assign default values to parameters in case no argument is provided.

```javascript
function greetUser(name = "Guest") {
    console.log(`Welcome, ${name}!`);
}

greetUser();         // Output: Welcome, Guest!
greetUser("Alice"); // Output: Welcome, Alice!
```

---

## 6. Return Statement
The `return` statement stops function execution and returns a value to the function caller. If no `return` statement is provided, the function returns `undefined` by default.

```javascript
function doNothing() {}
console.log(doNothing()); // Output: undefined
```

---

## 7. First-Class Functions & Higher-Order Functions
In JavaScript, functions are **First-Class Citizens**, meaning they can be:
1. Stored in variables
2. Passed as arguments to other functions (Callback functions)
3. Returned from other functions

```javascript
// Callback Function example
function processInput(callback) {
    let name = "Mohammad";
    callback(name);
}

processInput(function(name) {
    console.log(`Hello from callback, ${name}!`);
});
```
