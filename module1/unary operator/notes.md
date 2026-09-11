# JavaScript Unary Operators

A **unary operator** is an operator that operates on a single operand (variable or value).

---

## Overview of Key Unary Operators

| Operator | Name | Description | Example |
| :--- | :--- | :--- | :--- |
| `+` | **Unary Plus** | Converts an operand into a number | `+"5"` $\rightarrow$ `5` |
| `-` | **Unary Negation** | Converts an operand to a number and negates it | `-"5"` $\rightarrow$ `-5` |
| `++` | **Increment** | Increases value by `1` | `x++` or `++x` |
| `--` | **Decrement** | Decreases value by `1` | `x--` or `--x` |
| `!` | **Logical NOT** | Converts to boolean and flips its value | `!true` $\rightarrow$ `false` |
| `!!` | **Double NOT** | Converts any value directly to a boolean | `!!"hello"` $\rightarrow$ `true` |
| `typeof` | **Type of** | Returns a string indicating the type of operand | `typeof 42` $\rightarrow$ `"number"` |
| `delete` | **Delete** | Deletes a property from an object | `delete obj.key` |
| `void` | **Void** | Evaluates an expression and returns `undefined` | `void 0` $\rightarrow$ `undefined` |

---

## 1. Unary Plus (`+`) & Unary Negation (`-`)

- **Unary Plus (`+`)**: Attempts to convert its operand to a number.
- **Unary Negation (`-`)**: Converts its operand to a number and negates the value.

```javascript
// Unary Plus (+)
console.log(+"10");       // 10 (number)
console.log(+true);       // 1
console.log(+false);      // 0
console.log(+null);       // 0
console.log(+"hello");    // NaN

// Unary Negation (-)
console.log(-"10");       // -10
console.log(-true);       // -1
console.log(-false);      // -0
```

---

## 2. Increment (`++`) & Decrement (`--`)

Modifies the operand by adding or subtracting `1`.

### Prefix vs Postfix

- **Prefix (`++x` / `--x`)**: Increments/Decrements **first**, then returns the updated value.
- **Postfix (`x++` / `x--`)**: Returns the **original** value first, then increments/decrements.

```javascript
// Prefix Increment
let a = 5;
let b = ++a; // 'a' becomes 6, then assigned to 'b'
console.log(a, b); // 6, 6

// Postfix Increment
let x = 5;
let y = x++; // 'x' (5) assigned to 'y', then 'x' becomes 6
console.log(x, y); // 6, 5
```

---

## 3. Logical NOT (`!`) & Double NOT (`!!`)

- **Logical NOT (`!`)**: Inverts the truthiness of a value.
- **Double NOT (`!!`)**: Convenient way to convert any value to its exact **boolean** (`true` or `false`) equivalent.

```javascript
// Logical NOT (!)
console.log(!true);       // false
console.log(!0);          // true (0 is falsy)
console.log(!"");         // true (empty string is falsy)

// Double NOT (!!) - Boolean Conversion
console.log(!!"JavaScript"); // true
console.log(!!0);            // false
console.log(!!undefined);    // false
```

---

## 4. `typeof` Operator

Evaluates the operand and returns a string specifying its data type.

```javascript
console.log(typeof 100);        // "number"
console.log(typeof "text");     // "string"
console.log(typeof true);       // "boolean"
console.log(typeof undefined);  // "undefined"
console.log(typeof {});         // "object"
console.log(typeof function(){}); // "function"
console.log(typeof null);       // "object" (JavaScript legacy bug!)
```

---

## 5. `delete` Operator

Removes a property from an object.

```javascript
const user = { name: "Mohammad", age: 20 };
delete user.age;

console.log(user); // { name: "Mohammad" }
```

---

## Summary Cheat Sheet

```javascript
let num = "25";

console.log(+num);     // 25 (Number)
console.log(-num);     // -25 (Number)
console.log(typeof num); // "string"

let val = 10;
console.log(val++);    // Output: 10, val is now 11
console.log(++val);    // val becomes 12, Output: 12
```
