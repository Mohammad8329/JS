# ⚡ One-Shot Revision: Arithmetic, Logical Operators & Conditionals

A complete, high-yield revision sheet covering **Arithmetic Operators**, **Logical Operators**, and **Conditionals** in JavaScript.

---

## 🔢 PART 1: ARITHMETIC OPERATORS & COERCION

### 1. Core Arithmetic Operators

| Operator | Name | Example | Behavior |
| :--- | :--- | :--- | :--- |
| `+` | Addition / Concatenation | `5 + 3` $\rightarrow$ `8`<br>`"5" + 3` $\rightarrow$ `"53"` | Dual behavior: adds numbers, concatenates strings |
| `-` | Subtraction | `10 - 4` $\rightarrow$ `6` | Converts strings to numbers implicitly |
| `*` | Multiplication | `4 * 3` $\rightarrow$ `12` | Converts strings to numbers implicitly |
| `/` | Division | `15 / 3` $\rightarrow$ `5` | Always returns a float division result (`5 / 2` $\rightarrow$ `2.5`) |
| `%` | Modulus (Remainder) | `10 % 3` $\rightarrow$ `1` | Returns the integer remainder after division |
| `**` | Exponentiation ($a^b$) | `2 ** 3` $\rightarrow$ `8` | Evaluates right-to-left (`2 ** 3 ** 2` $\rightarrow$ `512`) |

---

### 2. Crucial Arithmetic Concepts & Tricks

#### A. Modulus `%` Tricks
1. **Even / Odd Check**:
   ```javascript
   num % 2 === 0; // True if Even
   num % 2 !== 0; // True if Odd
   ```
2. **Extract Last Digit of a Number**:
   ```javascript
   let num = 28288;
   let lastDigit = num % 10; // 8
   ```
3. **Remove Last Digit of a Number**:
   ```javascript
   let num = 28288;
   let truncated = Math.floor(num / 10); // 2828
   ```

#### B. Plus `+` Operator vs Other Operators
- **Addition vs String Concatenation**:
  ```javascript
  console.log(5 + 5);       // 10 (Number)
  console.log("5" + 5);     // "55" (String)
  console.log(5 + 5 + "5"); // "105" (Evaluates (5+5) first -> 10 + "5" = "105")
  console.log("5" + 5 + 5); // "555" (Evaluates ("5"+5) first -> "55" + 5 = "555")
  ```
- **Automatic Coercion (Subtraction, Multiplication, Division)**:
  ```javascript
  console.log("10" - "4"); // 6 (String -> Number)
  console.log("10" * "2"); // 20
  console.log("abc" - 2);  // NaN (Not a Number)
  ```

---

## 🧠 PART 2: LOGICAL OPERATORS & SHORT-CIRCUITING

### 1. Core Logical Operators

| Operator | Name | Description | Example |
| :--- | :--- | :--- | :--- |
| `&&` | **Logical AND** | Returns `true` if **both** operands are true | `(5 > 3 && 10 > 5)` $\rightarrow$ `true` |
| `\|\|` | **Logical OR** | Returns `true` if **at least one** operand is true | `(5 > 10 \|\| 10 > 5)` $\rightarrow$ `true` |
| `!` | **Logical NOT** | Inverts boolean (`true` $\rightarrow$ `false`) | `!(5 > 3)` $\rightarrow$ `false` |
| `??` | **Nullish Coalescing** | Fallback for `null` or `undefined` only | `null ?? "default"` $\rightarrow$ `"default"` |

---

### 2. Truthy and Falsy Values

In JavaScript, boolean contexts automatically convert values to boolean.

#### Falsy Values (Only 8 in JS):
`false`, `0`, `-0`, `0n` (BigInt zero), `""` (empty string), `null`, `undefined`, `NaN`

*Everything else is **Truthy** (including `[]`, `{}`, `"0"`, `"false"`).*

---

### 3. Short-Circuit Evaluation Rules

Logical operators return the **actual operand value**, not strictly `true`/`false`.

#### A. Logical AND (`&&`)
- Stops and returns the **first falsy value**.
- If all operands are truthy, returns the **last value**.
```javascript
console.log(true && "Hello"); // "Hello"
console.log(0 && "Hello");    // 0 (Short-circuits at 0)
console.log(1 && 2 && 3);     // 3
```

#### B. Logical OR (`||`)
- Stops and returns the **first truthy value**.
- If all operands are falsy, returns the **last value**.
```javascript
console.log("Cat" || "Dog");     // "Cat" (Short-circuits at "Cat")
console.log("" || "Default");    // "Default"
console.log(0 || false || null); // null
```

#### C. Double NOT (`!!`)
Converts any value explicitly into a boolean:
```javascript
console.log(!!"Hello"); // true
console.log(!!0);       // false
```

---

## 🔀 PART 3: CONDITIONALS & CONTROL FLOW

JavaScript offers 3 main conditional structures: `if...else`, `ternary operator`, and `switch...case`.

---

### 1. `if...else` Statements

Used for executing blocks of code based on logical conditions.

```javascript
let score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 75) {
    console.log("Grade: B");
} else {
    console.log("Grade: C");
}
```

---

### 2. Ternary Operator (`? :`)

Shorthand for simple `if...else` statements that **return a value**.

#### Syntax:
```javascript
condition ? expressionIfTrue : expressionIfFalse;
```

#### Examples:
```javascript
// Basic Usage
let age = 20;
let canVote = age >= 18 ? "Yes" : "No"; // "Yes"

// Nested Ternary
let marks = 85;
let result = marks >= 90 ? "A" : marks >= 75 ? "B" : "C"; // "B"
```

---

### 3. `switch...case` Statements

Best when checking a single variable against **multiple fixed discrete values**.

```javascript
let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break; // Stops execution from falling through!
    default:
        console.log("Invalid Day");
}
```

#### Essential `switch` Rules:
1. **Strict Equality (`===`)**: `switch` compares values using `===` (matching type and value).
2. **`break` Statement**: If omitted, execution **falls through** to subsequent cases!
3. **`switch(true)` Pattern** (Evaluating ranges in switch):
   ```javascript
   let marks = 85;
   switch (true) {
       case (marks >= 90):
           console.log("A");
           break;
       case (marks >= 75):
           console.log("B"); // Executes
           break;
   }
   ```

---

## ⚡ SUMMARY COMPARISON TABLE

| Feature | `if...else` | Ternary (`? :`) | `switch...case` |
| :--- | :--- | :--- | :--- |
| **Best For** | Complex logic / range checks | Simple inline 2-way checks | Single variable with discrete values |
| **Returns a Value?** | No (Statement) | **Yes** (Expression) | No (Statement) |
| **Equality Check** | Flexible (`>`, `<`, `==`, `===`) | Flexible | **Strict Equality (`===`)** |
| **Readability** | Good for multiple conditions | Excellent for short assignments | Excellent for long list of exact values |

---

## 📝 QUICK REVISION QUIZ / CHECKLIST

- [ ] Does `"10" + 2` give the same result as `"10" - 2`? *(No: `"102"` vs `8`)*
- [ ] What is `28288 % 10`? *(Answer: `8`)*
- [ ] What does `"Cat" || "Dog"` return? *(Answer: `"Cat"` due to short-circuiting)*
- [ ] What does `0 && "Hello"` return? *(Answer: `0` due to short-circuiting)*
- [ ] What happens if you forget `break` in a `switch` case? *(Fall-through: executes subsequent cases)*
- [ ] Is `[]` (empty array) truthy or falsy? *(Truthy)*
