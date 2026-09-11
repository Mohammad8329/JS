# Logical Operators & Short-Circuit Evaluation

Logical operators are used to determine the logic between variables or values. They return boolean values (`true` or `false`) or the actual operand value in JavaScript.

---

## 1. Types of Logical Operators

| Operator | Name | Description | Example |
| :--- | :--- | :--- | :--- |
| `&&` | **Logical AND** | Returns `true` if **both** operands are true | `(5 > 3 && 10 > 5)` $\rightarrow$ `true` |
| `\|\|` | **Logical OR** | Returns `true` if **at least one** operand is true | `(5 > 10 \|\| 10 > 5)` $\rightarrow$ `true` |
| `!` | **Logical NOT** | Inverts the boolean value (`true` $\rightarrow$ `false`) | `!(5 > 3)` $\rightarrow$ `false` |
| `??` | **Nullish Coalescing** | Returns right operand if left is `null` or `undefined` | `null ?? "default"` $\rightarrow$ `"default"` |

---

## 2. Truthy and Falsy Values

In JavaScript, values automatically convert to boolean in logical contexts.

### Falsy Values (Only 8 in JS):
- `false`
- `0`, `-0`, `0n` (BigInt zero)
- `""` (empty string)
- `null`
- `undefined`
- `NaN`

*Everything else is **Truthy** (including `[]`, `{}`, `"0"`, `"false"`).*

---

## 3. Short-Circuit Evaluation

JavaScript evaluates logical operators from **left to right** and stops as soon as the result is determined.

### Logical AND (`&&`)
- Stops and returns the **first falsy value**.
- If all are truthy, returns the **last value**.

```javascript
console.log(true && "Hello"); // "Hello"
console.log(0 && "Hello");    // 0 (Short-circuits at 0)
console.log(1 && 2 && 3);     // 3
```

### Logical OR (`||`)
- Stops and returns the **first truthy value**.
- If all are falsy, returns the **last value**.

```javascript
console.log("Cat" || "Dog");  // "Cat" (Short-circuits at "Cat")
console.log("" || "Default"); // "Default"
console.log(0 || false || null); // null
```

---

## 4. Logical NOT (`!`) & Double NOT (`!!`)

- `!val` converts `val` to boolean and inverts it.
- `!!val` explicitly converts any value to its actual **boolean type**.

```javascript
console.log(!true);      // false
console.log(!"Hello");   // false
console.log(!!"Hello");  // true (Truthy conversion)
console.log(!!0);        // false (Falsy conversion)
```
