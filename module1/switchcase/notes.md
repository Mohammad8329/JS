# 🔀 Switch-Case Statement in JavaScript

The **`switch` statement** evaluates an expression, matching the expression's value against a series of `case` clauses, and executes statements associated with the first matching case.

---

## 📌 Basic Syntax

```javascript
switch (expression) {
    case value1:
        // Code to execute if expression === value1
        break;
    case value2:
        // Code to execute if expression === value2
        break;
    default:
        // Code to execute if no cases match
}
```

---

## 🧩 Key Components Breakdown

1. **`switch (expression)`**: The target value or variable being checked.
2. **`case value:`**: Each case compares the target expression using **Strict Equality (`===`)**. Both data type and value must match!
3. **`break`**: Terminates the `switch` block. If `break` is omitted, execution **falls through** to subsequent cases regardless of whether they match!
4. **`default:`**: Optional fallback block executed if none of the cases match (similar to the final `else` in an `if-else` chain).

---

## 🔍 Examples

### 1. Basic Day of the Week Example
```javascript
let dayNumber = 3;
let dayName;

switch (dayNumber) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day number";
}

console.log(dayName); // Output: Wednesday
```

---

### 2. Case Grouping & Fall-Through Behavior
If multiple cases share the same code logic, you can omit `break` between them to group them together.

```javascript
let day = "Saturday";

switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        console.log("It's a weekday 💼");
        break;
    case "Saturday":
    case "Sunday":
        console.log("It's the weekend! 🎉");
        break;
    default:
        console.log("Invalid day");
}
```

---

### 3. Range Checking with `switch (true)` Pattern
While `switch` traditionally checks exact values, using `switch (true)` lets you check boolean ranges:

```javascript
let score = 85;
let grade;

switch (true) {
    case score >= 90:
        grade = "A+";
        break;
    case score >= 80:
        grade = "A";
        break;
    case score >= 70:
        grade = "B";
        break;
    default:
        grade = "F";
}

console.log(`Grade: ${grade}`); // Output: Grade: A
```

---

## ⚡ Strict Equality Matching (`===`)

A common mistake in JavaScript switch statements is type mismatches. `switch` uses strict comparison:

```javascript
let code = "10"; // string

switch (code) {
    case 10: // number 10 -> NO MATCH!
        console.log("Number 10");
        break;
    case "10": // string "10" -> MATCH!
        console.log("String 10");
        break;
}
```

---

## 📊 `if-else` vs `switch-case`

| Feature | `if-else` Statement | `switch-case` Statement |
|---|---|---|
| **Matching Type** | Boolean condition evaluations | Discrete value matching (strict `===`) |
| **Readability** | Messy for many equality checks | Very clean & organized for fixed values |
| **Performance** | Evaluates sequentially top-to-bottom | Optimized jump tables by JS engine |
| **Best Used For** | Complex logical expressions (`&&`, `||`, ranges) | Matching single variable against discrete options |

---

## ⚠️ Summary Best Practices

- ✅ Always include `break` unless deliberate fall-through behavior is required.
- ✅ Always provide a `default` case to handle unexpected inputs.
- ⚠️ Remember that string `"10"` does NOT match number `10`.
