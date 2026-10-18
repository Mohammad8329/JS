# JavaScript Nested Loops: Complete Guide (Module 2)

A **Nested Loop** is simply a loop inside another loop. The outer loop controls the primary repetition (like rows or iterations), while the inner loop executes its complete cycle for **every single turn** of the outer loop.

---

## 📌 Master Feature Reference Table

| Name / Feature | How to use / Syntax | Required Parameter | Optional Parameter | What does each parameter do? | What does it return? | Sample use case |
| --- | --- | --- | --- | --- | --- | --- |
| **Nested `for` Loop** | `for (let i = 0; i < n; i++) { for (let j = 0; j < m; j++) { ... } }` | Loop limits for `i` and `j` | Step size (`i++`, `j++`) | Outer loop advances `i`; for each `i`, inner loop completes all `j` iterations | Nothing by itself | 2D Grid traversal, matrix operations, pattern printing |
| **Nested `while` Loop** | `while (cond1) { while (cond2) { ... } }` | Loop conditions for outer & inner | Inner counter reset before inner loop | Outer controls high-level cycles; inner must reset its variable every outer turn | Nothing by itself | Repeating dynamic conditions or multi-phase algorithms |
| **Dependent Inner Loop** | `for (let i = 1; i <= n; i++) { for (let j = 1; j <= i; j++) { ... } }` | `j` bound tied to `i` | None | Inner loop length grows or shrinks with outer loop variable `i` | Nothing by itself | Triangle patterns, generating pairs without repetition |
| **Inner `break`** | `for (...) { for (...) { if (...) break; } }` | Condition to trigger `break` | None | **Exits ONLY the inner loop**; execution continues in the outer loop | Nothing by itself | Stop scanning current row when target is found |
| **Labeled `break`** | `outer: for (...) { for (...) { if (...) break outer; } }` | Label name on outer loop | None | **Directly terminates BOTH the inner and outer loops** at once | Nothing by itself | Instant exit from nested matrix search |
| **Inner `continue`** | `for (...) { for (...) { if (...) continue; } }` | Condition | None | Skips the rest of current inner iteration and moves to next inner step | Nothing by itself | Skip specific cells/characters in a row |
| **Labeled `continue`** | `outer: for (...) { for (...) { if (...) continue outer; } }` | Label name | None | Aborts the entire current row and jumps straight to next outer loop iteration | Nothing by itself | Discard processing rest of row if invalid cell found |
| **2D Matrix Access** | `matrix[row][col]` | `row` index, `col` index | None | First index selects array row; second index selects item in that row | Value at `[row][col]` | Access grid cells: `matrix[1][2]` |
| **Pair Generation** | `for (let i = 0; i < n; i++) { for (let j = i + 1; j < n; j++) { ... } }` | Array bounds | None | Generates all unique pairs `(arr[i], arr[j])` without self-pairing or duplicates | All pairs of elements | Two Sum brute force, checking pairs |

---

## 1. How Nested Loops Work: The Clock Analogy

Think of a traditional wall clock:
- The **Hour hand** is the **Outer Loop**.
- The **Minute hand** is the **Inner Loop**.

Before the hour hand moves by just **1 unit** (e.g. from 1 to 2), the minute hand must complete **all 60 minutes**!

```text
Outer Loop (i = 1) ──> Inner Loop runs j = 1, 2, 3 (Done)
Outer Loop (i = 2) ──> Inner Loop runs j = 1, 2, 3 (Done)
Outer Loop (i = 3) ──> Inner Loop runs j = 1, 2, 3 (Done)
```

### Total Iterations Formula:
If the outer loop runs $N$ times and the inner loop runs $M$ times independently:
$$\text{Total Iterations} = N \times M$$

---

## 2. Step-by-Step Execution Trace & Dry Run

Consider this code:
```javascript
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 2; j++) {
        console.log(`i = ${i}, j = ${j}`);
    }
}
```

### Dry Run Table:

| Outer Loop (`i`) | Condition (`i <= 3`) | Inner Loop (`j`) | Condition (`j <= 2`) | Console Output | What happens next? |
|:---:|:---:|:---:|:---:|:---:|:---|
| `1` | `true` | `1` | `true` | `i = 1, j = 1` | `j` increments to `2` |
| `1` | `true` | `2` | `true` | `i = 1, j = 2` | `j` increments to `3` |
| `1` | `true` | `3` | `false` | — | Inner loop ends; `i` increments to `2` |
| `2` | `true` | `1` | `true` | `i = 2, j = 1` | Inner resets to `1`; `j++` |
| `2` | `true` | `2` | `true` | `i = 2, j = 2` | `j` increments to `3` |
| `2` | `true` | `3` | `false` | — | Inner loop ends; `i` increments to `3` |
| `3` | `true` | `1` | `true` | `i = 3, j = 1` | Inner resets to `1`; `j++` |
| `3` | `true` | `2` | `true` | `i = 3, j = 2` | `j` increments to `3` |
| `3` | `true` | `3` | `false` | — | Inner loop ends; `i` increments to `4` |
| `4` | `false` | — | — | — | **Outer loop ends. Program terminates.** |

Total executions of inner body: $3 \times 2 = 6$ times.

---

## 3. Time & Space Complexity

### 1. Independent Nested Loops: $\mathcal{O}(N \times M)$ or $\mathcal{O}(N^2)$
When both loops run up to a fixed number:
```javascript
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        // Runs n * n = n^2 times -> O(n^2)
    }
}
```

### 2. Dependent Nested Loops: $\mathcal{O}(N^2)$
When the inner loop boundary depends on the outer loop variable `i` (e.g. triangles):
```javascript
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        // When i = 1: 1 iteration
        // When i = 2: 2 iterations
        // ...
        // When i = n: n iterations
    }
}
```
$$\text{Total Operations} = 1 + 2 + 3 + \dots + n = \frac{n(n + 1)}{2} = \frac{n^2 + n}{2} \implies \mathcal{O}(n^2)$$

### Space Complexity:
Unless you create large new arrays/matrices inside, nested loops use **$\mathcal{O}(1)$ auxiliary space** (only a few scalar counter variables `i`, `j`).

---

## 4. Pattern Printing: The 3-Step Strategy 🌟

Pattern printing is the most common way to master nested loop logic in Module 2.

### The Universal 3-Step Rule for Any Pattern:
1. **Step 1 (Outer Loop)**: Ask: *"How many total rows are there?"*  
   $\rightarrow$ Sets outer loop: `for (let row = 1; row <= n; row++)`
2. **Step 2 (Inner Loop)**: Ask: *"For the current `row`, how many columns / spaces / stars must be printed?"*  
   $\rightarrow$ Connects inner loop boundary to `row`.
3. **Step 3 (Print & Line Break)**: Accumulate characters in a row string `let rowStr = ""` and print at the end of each row `console.log(rowStr)`.

---

### Pattern 1: Solid Square of Stars ($N \times N$)
**Goal ($N = 4$):**
```text
* * * *
* * * *
* * * *
* * * *
```
```javascript
function solidSquare(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= n; j++) {
            row += "* ";
        }
        console.log(row.trim());
    }
}
solidSquare(4);
```

---

### Pattern 2: Right-Angled Star Triangle
**Goal ($N = 4$):**
```text
*
* *
* * *
* * * *
```
- Row 1 has 1 star, Row 2 has 2 stars ... Row `i` has `i` stars.
```javascript
function rightTriangle(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += "* ";
        }
        console.log(row.trim());
    }
}
rightTriangle(4);
```

---

### Pattern 3: Inverted Right-Angled Triangle
**Goal ($N = 4$):**
```text
* * * *
* * *
* *
*
```
- Row 1 has $N$ stars, Row 2 has $N - 1$ stars ... Row `i` has $N - i + 1$ stars.
```javascript
function invertedTriangle(n) {
    for (let i = n; i >= 1; i--) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += "* ";
        }
        console.log(row.trim());
    }
}
invertedTriangle(4);
```

---

### Pattern 4: Number Triangle & Floyd's Triangle

#### A. Number Triangle:
```text
1
1 2
1 2 3
1 2 3 4
```
```javascript
function numberTriangle(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += j + " ";
        }
        console.log(row.trim());
    }
}
numberTriangle(4);
```

#### B. Floyd's Triangle (Continuous Counter):
```text
1
2 3
4 5 6
7 8 9 10
```
```javascript
function floydsTriangle(n) {
    let count = 1;
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += count + " ";
            count++;
        }
        console.log(row.trim());
    }
}
floydsTriangle(4);
```

---

### Pattern 5: Centered Full Pyramid (Managing Spaces + Stars)
**Goal ($N = 4$):**
```text
   *
  ***
 *****
*******
```
- In Row `i`:
  - **Leading spaces** = $n - i$
  - **Stars** = $2 \times i - 1$

```javascript
function pyramid(n) {
    for (let i = 1; i <= n; i++) {
        let spaces = " ".repeat(n - i);
        let stars = "*".repeat(2 * i - 1);
        console.log(spaces + stars);
    }
}
pyramid(4);
```

---

## 5. 2D Matrix / Grid Traversal

A **2D Array (Matrix)** is an array of arrays. Nested loops are the primary way to traverse matrices.

```javascript
const matrix = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
];
```

### A. Row-Wise Traversal (Standard)
Visits elements row by row: `(0,0) -> (0,1) -> (0,2) -> (1,0) ...`
```javascript
for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
        console.log(`[${row}][${col}] = ${matrix[row][col]}`);
    }
}
```

### B. Column-Wise Traversal
Swaps outer and inner loops to traverse top-to-bottom column by column:
```javascript
let rows = matrix.length;
let cols = matrix[0].length;

for (let col = 0; col < cols; col++) {
    for (let row = 0; row < rows; row++) {
        console.log(`Col ${col}, Row ${row}: ${matrix[row][col]}`);
    }
}
```

### C. Matrix Diagonals
In an $N \times N$ square matrix:
- **Primary / Main Diagonal:** `row === col`
- **Secondary / Anti-Diagonal:** `row + col === n - 1`

```javascript
function printDiagonals(matrix) {
    let n = matrix.length;
    for (let i = 0; i < n; i++) {
        console.log("Main Diagonal:", matrix[i][i]);
        console.log("Anti Diagonal:", matrix[i][n - 1 - i]);
    }
}
```

---

## 6. Generating Pairs & Problem Solving

Many array problems require comparing every element with every other element.

### A. Generating All Unique Pairs (Without Self-Pairing & Duplicates)
By starting `j` at `i + 1`, we compare every pair $(i, j)$ exactly once:
```javascript
const arr = [1, 2, 3, 4];

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        console.log(`Pair: (${arr[i]}, ${arr[j]})`);
    }
}
// Output:
// Pair: (1, 2)
// Pair: (1, 3)
// Pair: (1, 4)
// Pair: (2, 3)
// Pair: (2, 4)
// Pair: (3, 4)
```

### B. Two Sum Problem (Brute Force using Nested Loops)
Check if any pair of numbers adds up to a given `target`:
```javascript
function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]; // Return indices
            }
        }
    }
    return []; // No pair found
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1] (2 + 7 = 9)
```

### C. Checking for Duplicates in an Array
```javascript
function containsDuplicate(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return true; // Duplicate found
            }
        }
    }
    return false;
}

console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false
```

---

## 7. Controlling Nested Loops: `break`, `continue`, and Labels

### A. Standard `break` (Only Breaks the Innermost Loop!)
```javascript
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (j === 2) break; // Exits only j loop!
        console.log(`i=${i}, j=${j}`);
    }
}
// Output:
// i=1, j=1
// i=2, j=1
// i=3, j=1
// Notice: The outer i loop kept running!
```

---

### B. Labeled Statements: Breaking the Outer Loop Directly
To break **both loops completely**, label the outer loop with `labelName:` and use `break labelName;`:

```javascript
outerLoop: for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (i === 2 && j === 2) {
            console.log("Terminating entire nested structure!");
            break outerLoop; // Exits BOTH loops immediately!
        }
        console.log(`i=${i}, j=${j}`);
    }
}
// Output:
// i=1, j=1
// i=1, j=2
// i=1, j=3
// i=2, j=1
// Terminating entire nested structure!
```

---

## 8. Common Pitfalls & Mistakes

### 1. ❌ Accidental Variable Shadowing (Reusing `i`)
```javascript
// BUG: Both loops use the same variable 'i'!
for (let i = 0; i < 3; i++) {
    for (let i = 0; i < 3; i++) { // Overwrites outer 'i' or shadows it!
        console.log(i);
    }
}
// Always use distinct, meaningful variable names: i, j, k or row, col!
```

### 2. ❌ Forgetting to Reset Inner Counter in `while` Loops
```javascript
let i = 1;
let j = 1; // ❌ Declared outside outer loop!

while (i <= 3) {
    while (j <= 2) {
        console.log(i, j);
        j++;
    }
    // After i = 1, j is 3! For i = 2, the inner while NEVER runs again!
    i++;
}

// ✅ Correct Fix: Reset j inside the outer loop:
let row = 1;
while (row <= 3) {
    let col = 1; // Reset every time outer loop runs
    while (col <= 2) {
        console.log(row, col);
        col++;
    }
    row++;
}
```

### 3. ❌ Performance Traps ($\mathcal{O}(n^2)$)
Nested loops grow quadratically. If $n = 100,000$, an $n^2$ loop executes **$10,000,000,000$ operations** (which causes your browser or Node.js program to freeze or time out on coding platforms like LeetCode or Acciojobs). When $N > 10^4$, look for optimal solutions (e.g. Hash Maps, Two Pointers, Binary Search).
