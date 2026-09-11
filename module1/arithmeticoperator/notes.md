# Arithmetic Operations in JavaScript

Arithmetic operators perform mathematical calculations on numbers (operands).

---

## 1. Standard Arithmetic Operators

| Operator | Name | Description | Example | Result |
| :--- | :--- | :--- | :--- | :--- |
| `+` | **Addition** | Adds numbers or concatenates strings | `5 + 3` | `8` |
| `-` | **Subtraction** | Subtracts right number from left | `10 - 4` | `6` |
| `*` | **Multiplication** | Multiplies two numbers | `4 * 3` | `12` |
| `/` | **Division** | Divides left number by right | `15 / 3` | `5` |
| `%` | **Modulus (Remainder)** | Returns remainder of integer division | `10 % 3` | `1` |
| `**` | **Exponentiation** | Raises base to power of exponent ($a^b$) | `2 ** 3` | `8` |

---

## 2. Modulus Operator (`%`) Tricks

The `%` operator gives the remainder after division:
- **Even / Odd Check**: `num % 2 === 0` (Even), `num % 2 !== 0` (Odd)
- **Last Digit Extraction**: `number % 10` gives the last digit (`28288 % 10` $\rightarrow$ `8`).
- **Remove Last Digit**: `Math.floor(number / 10)` (`Math.floor(28288 / 10)` $\rightarrow$ `2828`).

---

## 3. String Concatenation (`+`) vs Addition

The `+` operator has dual behavior in JavaScript:
- If **both** operands are numbers $\rightarrow$ Addition.
- If **any** operand is a string $\rightarrow$ String concatenation.

```javascript
console.log(5 + 5);     // 10 (Number addition)
console.log("5" + 5);   // "55" (String concatenation)
console.log(5 + 5 + "5"); // "105" (Evaluates 5+5=10, then 10+"5"="105")
```

---

## 4. Implicit Type Conversion (Coercion)

Other arithmetic operators (`-`, `*`, `/`, `%`) convert strings to numbers automatically:

```javascript
console.log("10" - "4"); // 6
console.log("10" * "2"); // 20
console.log("10" / "2"); // 5
console.log("abc" * 2);  // NaN (Not a Number)
```
