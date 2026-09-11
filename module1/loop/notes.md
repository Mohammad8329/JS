# JavaScript Loops

Loops are used to execute a block of code repeatedly as long as a specified condition evaluates to `true`.

---

## Types of Loops in JavaScript

1. **`for` Loop**: Best when you know in advance how many times the loop should run.
2. **`while` Loop**: Repeats as long as a specified condition evaluates to `true`. Useful when the number of iterations is unknown.
3. **`do...while` Loop**: Runs the block of code **at least once** before evaluating the condition.
4. **`for...in` Loop**: Iterates over the enumerable **keys/properties** of an object or indices of an array.
5. **`for...of` Loop**: Iterates over **values** of an iterable object (like Array, String, Map, Set).

---

## 1. The `for` Loop

### Syntax
```javascript
for (initialization; condition; increment/decrement) {
    // Code to execute
}
```

### Example
```javascript
for (let i = 1; i <= 5; i++) {
    console.log("Iteration:", i);
}
```

---

## 2. The `while` Loop

### Syntax
```javascript
while (condition) {
    // Code to execute
    // Don't forget to update the counter/condition variable to avoid infinite loops!
}
```

### Example
```javascript
let count = 1;
while (count <= 3) {
    console.log("Count is:", count);
    count++;
}
```

---

## 3. The `do...while` Loop

Executes the code block first, then evaluates the condition. Guaranteed to run **at least once**.

### Syntax
```javascript
do {
    // Code to execute
} while (condition);
```

### Example
```javascript
let num = 10;
do {
    console.log("This will print even though condition is false once.");
} while (num < 5);
```

---

## 4. `for...in` Loop (Object Keys / Array Indices)

Iterates over object properties or array index keys.

```javascript
// With Objects
const person = { name: "Mohammad", age: 22, city: "Delhi" };

for (let key in person) {
    console.log(key + ": " + person[key]);
}

// Output:
// name: Mohammad
// age: 22
// city: Delhi
```

---

## 5. `for...of` Loop (Iterable Values)

Iterates directly over values of arrays, strings, maps, sets, etc.

```javascript
// With Arrays
const fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
    console.log(fruit);
}

// With Strings
for (let char of "JS") {
    console.log(char); // 'J', 'S'
}
```

---

## Loop Control Statements

### `break`
Exits the loop immediately.

```javascript
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break; // Stops loop when i reaches 5
    }
    console.log(i); // Prints 1, 2, 3, 4
}
```

### `continue`
Skips the rest of the current iteration and jumps directly to the next condition check / update.

```javascript
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue; // Skips printing 3
    }
    console.log(i); // Prints 1, 2, 4, 5
}
```

> [!WARNING]
> **Gotcha in `while` loops with `continue`:**
> In a `while` loop, if your counter increment (`a++`) is located **after** `continue`, calling `continue` will skip the increment. This freezes the counter at its current value and creates an **infinite loop**!
>
> ```javascript
> // ❌ Infinite Loop Example:
> let a = 1;
> while (a < 10) {
>     console.log(a);
>     if (a === 5) {
>         continue; // Skips a++, leaving a = 5 forever!
>     }
>     a++;
> }
>
> // ✅ Correct Approach:
> let a = 1;
> while (a < 10) {
>     if (a === 5) {
>         a++; // Must update counter before continue!
>         continue;
>     }
>     console.log(a);
>     a++;
> }
> ```

---

## Key Takeaways & Common Pitfalls

1. **`for` Loop Update Expression Must Assign/Reassign**:
   - `Math.floor(x / 10)` calculates a value but does **not** update `x`. To update `x` in a `for` loop header, you must assign it: `for (; x > 0; x = Math.floor(x / 10))`.
   - Operators like `i++` work because they perform assignment behind the scenes (`i = i + 1`).

2. **Loop Structure Mental Model**:
   - A `for` loop consists of: `for (Initial Value; Condition to Check; New Value Update)`


## Summary Comparison

| Loop Type | Best Used For | Runs At Least Once? |
| :--- | :--- | :---: |
| `for` | Known number of iterations | No |
| `while` | Condition-driven / Unknown count | No |
| `do...while` | Must run at least once | **Yes** |
| `for...in` | Object keys / Array indices | No |
| `for...of` | Array/String element values | No |
