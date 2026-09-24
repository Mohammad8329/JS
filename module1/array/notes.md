# JavaScript Arrays: Complete Guide (Basics to Advanced)

An **Array** is an ordered, zero-indexed collection of elements stored under a single variable name. In JavaScript, arrays are flexible, dynamic objects that can hold mixed data types and expand or shrink automatically.

---

## 📌 Master Table of Contents

### 🟢 Part 1: Basics & Core Concepts
1. [Why Do We Need Arrays?](#1-why-do-we-need-arrays)
2. [Key Characteristics of JS Arrays](#2-key-characteristics-of-js-arrays)
3. [Creating & Declaring Arrays (`const` vs `let`)](#3-creating--declaring-arrays-const-vs-let)
4. [Indexing & Accessing Elements (0 to n - 1)](#4-indexing--accessing-elements)
5. [The `.length` Property & Sparse Arrays](#5-the-length-property--sparse-arrays)

### 🟡 Part 2: Traversal & Essential Methods
6. [Iterating Over Arrays](#6-iterating-over-arrays)
7. [Essential Array Methods](#7-essential-array-methods)
   - [Adding and Removing Elements (`push`, `pop`, `shift`, `unshift`)](#1-adding-and-removing-elements)
   - [Searching & Checking (`indexOf`, `lastIndexOf`, `includes`)](#2-searching--checking)
   - [Slicing & Splicing (`slice` vs `splice`)](#3-slicing--splicing)
   - [Combining & Transforming (`concat`, `join`, `reverse`)](#4-combining--transforming)

### 🟠 Part 3: Advanced ES6+ Features
8. [Array Flattening (`flat()`) & Handling Empty Slots](#8-array-flattening-flat--handling-empty-slots)
9. [Array Destructuring & Rest Operator (`...`)](#9-array-destructuring--rest-operator)
10. [Array Mutation (Mutating vs Non-Mutating Operations)](#10-array-mutation-mutating-vs-non-mutating-operations)

### 🔴 Part 4: Memory Architecture & Deep Copying
11. [Memory Architecture: Reference vs Copy](#11-memory-architecture-reference-vs-copy)
    - [Reference Assignment (`b = a`)](#a-reference-assignment-b--a)
    - [Shallow Copy & The Nested Array Pitfall](#b-shallow-copy-1st-level-only)
    - [Deep Copy (`structuredClone`)](#c-deep-copy-complete-recursive-clone)

### 🔵 Part 5: Algorithms & Reference Cheatsheet
12. [Common Array Algorithms & Patterns](#12-common-array-algorithms--patterns)
    - [Sum & Average](#a-calculate-sum-and-average)
    - [Min & Max Search](#b-find-maximum-and-minimum-element)
    - [Linear Search](#c-linear-search-find-index-of-target)
    - [Two-Pointer In-Place Reversal](#d-reverse-an-array-in-place-two-pointer-technique)
13. [Master Quick Reference Cheatsheet](#13-master-quick-reference-cheatsheet)

---

# 🟢 Part 1: Basics & Core Concepts

## 1. Why Do We Need Arrays?

Without arrays, storing related data requires declaring separate variables:

```javascript
// Inefficient, repetitive, and unscalable:
let student1 = "Amit";
let student2 = "Priya";
let student3 = "Rahul";
// Managing 500 students like this is impossible!
```

With arrays, data is bundled into a single organized structure:

```javascript
// Clean, scalable, and manageable:
const students = ["Amit", "Priya", "Rahul"];
console.log(students[0]); // "Amit"
```

---

## 2. Key Characteristics of JS Arrays

1. **Zero-Indexed**: The first element starts at index `0`, the second at index `1`, up to `n - 1`.
2. **Heterogeneous Data Types**: Unlike C++ or Java, JavaScript arrays can store any mixture of data types:
   ```javascript
   let mixed = [42, "Hello", true, null, undefined, { role: "admin" }, [1, 2]];
   ```
3. **Dynamic Size**: Arrays are not fixed in size; they automatically grow or shrink when you add or remove elements.
4. **Reference Type (Object)**: Arrays are special objects in JS. `typeof []` evaluates to `"object"`.

---

## 3. Creating & Declaring Arrays (`const` vs `let`)

### A. Array Literal Syntax (Standard & Preferred)
```javascript
const numbers = [10, 20, 30, 40, 50];
const emptyArr = [];
```

### B. Using the `Array` Constructor
```javascript
// With specific elements:
const fruits = new Array("Apple", "Banana", "Orange");

// With initial length (creates empty/sparse slots):
const slots = new Array(5); // [ <5 empty items> ]
```

### C. `const` vs `let` for Arrays
Best practice is to declare arrays with `const`:
- `const` prevents **reassigning** the variable to a different array or value.
- However, `const` does **not** make the array immutable! You can still push, pop, and change elements freely:

```javascript
const a = [0, 10, 11];

a.push(99);       // ✅ ALLOWED: Modifies internal contents
a[0] = 100;       // ✅ ALLOWED: Modifies element at index 0

// a = [1, 2, 3]; // ❌ TypeError: Assignment to constant variable

// Assigning a reference to a let variable:
let b = a;        // b points to the same array in memory
b.push(500);      // Modifies both a and b!
```

---

## 4. Indexing & Accessing Elements

Elements are accessed and modified using square bracket notation `[index]`:
- Valid index range: **`0` to `arr.length - 1`**.

```javascript
const colors = ["Red", "Green", "Blue"];

// Accessing:
console.log(colors[0]); // "Red" (first element)
console.log(colors[1]); // "Green"
console.log(colors[2]); // "Blue" (last element, index = 3 - 1 = 2)

// Modifying:
colors[1] = "Yellow";
console.log(colors);    // ["Red", "Yellow", "Blue"]
```

### Out-of-Bounds Indexing:
Accessing an index that does not exist does **NOT** throw an error; JavaScript returns **`undefined`**:

```javascript
const arr = [1, 2, 3];
console.log(arr[10]); // undefined
console.log(arr[-1]); // undefined
```

---

### Nested & Multi-Dimensional Arrays (Chained Indexing)
An array can contain other arrays as its elements. To access inner elements, use **chained brackets `[outerIndex][innerIndex]`**:

```javascript
let combinearr = [1, 'a', null, undefined, '', 1.2, 'ajajaj', [10, 20, 30, 40]];

console.log(combinearr.length);    // 8
console.log(combinearr[7]);         // [10, 20, 30, 40] (nested array)
console.log(combinearr[7][1]);      // 20 (element at index 1 of nested array)
```

#### 2D Matrix Example:
```javascript
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix[0][0]); // 1 (Row 0, Col 0)
console.log(matrix[1][2]); // 6 (Row 1, Col 2)
console.log(matrix[2][1]); // 8 (Row 2, Col 1)
```

---

## 5. The `.length` Property & Sparse Arrays

The `.length` property returns the total count of elements in the array:

```javascript
const arr = [10, 20, 30, 40, 50];
console.log(arr.length); // 5

// Access the last element dynamically:
let lastItem = arr[arr.length - 1]; // 50
```

### Modifying `.length` Directly:
```javascript
let nums = [1, 2, 3, 4, 5];

// 1. Truncating (shortening) the array:
nums.length = 3;
console.log(nums); // [1, 2, 3] (items 4 and 5 are permanently deleted)

// 2. Clearing an array completely:
nums.length = 0;
console.log(nums); // []
```

### Sparse Arrays (Holes / Empty Slots):
When an array has gaps (e.g. consecutive commas or setting `length` higher), it creates **empty slots**:

```javascript
let sparse = [1, 2, , , 5];
console.log(sparse);        // [1, 2, <2 empty items>, 5]
console.log(sparse.length); // 5
console.log(sparse[2]);     // undefined
```

---

# 🟡 Part 2: Traversal & Essential Methods

## 6. Iterating Over Arrays

### A. Traditional `for` Loop (Best for Index Control)
```javascript
const arr = [10, 20, 30, 40, 50];

// Forward traversal:
for (let i = 0; i < arr.length; i++) {
    console.log(`Index ${i}: ${arr[i]}`);
}

// Backward traversal:
for (let i = arr.length - 1; i >= 0; i--) {
    console.log(`Index ${i}: ${arr[i]}`);
}
```

### B. `for...of` Loop (Iterating Over Values)
Iterates directly over the **values** of an array cleanly without index bookkeeping:

```javascript
const animals = ["Cat", "Dog", "Elephant"];

for (let animal of animals) {
    console.log(animal); // "Cat", "Dog", "Elephant"
}
```

#### ⚠️ Critical Gotcha: Reassigning the Loop Variable Does NOT Mutate the Array!
```javascript
let letters = ['a', 'b', 'c'];

for (let item of letters) {
    console.log(item); // 'a'
    item = 20;         // ❌ Only reassigns local variable `item`
    console.log(item); // 20
}

console.log(letters); 
// Output: ['a', 'b', 'c'] -> The array is COMPLETELY UNCHANGED!
```
**Why?** In each round, `item` is a separate local variable holding a copy of the primitive value. Reassigning `item = 20` does not update the array memory.  
**Fix:** To mutate elements during a loop, use the index with a traditional `for` loop:
```javascript
for (let i = 0; i < letters.length; i++) {
    letters[i] = 20; // ✅ Modifies actual array element
}
console.log(letters); // [20, 20, 20]
```

### C. `for...in` Loop (Iterates Over Keys/Indices)
> ⚠️ **Note:** `for...in` iterates over string property keys. For arrays, always prefer standard `for` or `for...of`.
```javascript
const letters = ["a", "b", "c"];
for (let index in letters) {
    console.log(index, letters[index]); // index is a string: "0", "1", "2"
}
```

### D. `forEach` Method
```javascript
const nums = [1, 2, 3];
nums.forEach((val, idx) => {
    console.log(`Index ${idx} holds ${val}`);
});
```

---

## 7. Essential Array Methods

### 1. Adding and Removing Elements

| Method | Position | Mutates Original? | Returns |
|---|---|---|---|
| **`push(...items)`** | End | ✅ Yes | New array length |
| **`pop()`** | End | ✅ Yes | The removed element |
| **`unshift(...items)`** | Beginning | ✅ Yes | New array length |
| **`shift()`** | Beginning | ✅ Yes | The removed element |

```javascript
let arr = [20, 30];

// push: Add to end
let newLen = arr.push(40, 50); // arr = [20, 30, 40, 50], newLen = 4

// unshift: Add to beginning
arr.unshift(10);               // arr = [10, 20, 30, 40, 50]

// pop: Remove from end
let popped = arr.pop();        // popped = 50, arr = [10, 20, 30, 40]

// shift: Remove from beginning
let shifted = arr.shift();     // shifted = 10, arr = [20, 30, 40]
```

---

### 2. Searching & Checking

#### `indexOf(searchElement, fromIndex)`
Returns the **first index** where the element is found, or **`-1`** if not found.
- **Argument 1 (`searchElement`)**: Target element.
- **Argument 2 (`fromIndex` - Optional)**: Starting index for the search (default `0`). Negative values count from end (`arr.length + fromIndex`).
- Uses strict equality (`===`). Cannot locate `NaN`.

```javascript
const nums = [1, 2, 8, 9, 94, 494, 94, 444];

console.log(nums.indexOf(94));     // 4 (first match)
console.log(nums.indexOf(94, 5));  // 6 (starts search from index 5)
console.log(nums.indexOf(8, 3));   // -1 (8 is at index 2, search started at 3)
```

#### `lastIndexOf(searchElement, fromIndex)`
Returns the **last index** of the element, searching backwards from `fromIndex`:
```javascript
const colors = ["red", "green", "blue", "green"];
console.log(colors.lastIndexOf("green"));    // 3
console.log(colors.lastIndexOf("green", 2)); // 1 (searches backwards from index 2)
```

#### `includes(searchElement, fromIndex)`
Returns **`true`** if the element exists, otherwise **`false`**.
- Handles `NaN` correctly (unlike `indexOf`).

```javascript
const list = [10, 20, 30, 40, NaN];

console.log(list.includes(30));    // true
console.log(list.includes(30, 3)); // false (search starts at index 3: [40, NaN])
console.log(list.includes(NaN));   // true
```

---

### 3. Slicing & Splicing

#### `slice(start, end)` (Non-Mutating)
Extracts a shallow copy of elements from `start` up to (but not including) `end`. **Does not modify the original array**.
```javascript
const numbers = [10, 20, 30, 40, 50];

const sub = numbers.slice(1, 4); // indices 1, 2, 3
console.log(sub);     // [20, 30, 40]
console.log(numbers); // [10, 20, 30, 40, 50] (Original intact!)

// Negative index counts from the end:
console.log(numbers.slice(-2)); // [40, 50]
```

#### `splice(start, deleteCount, ...itemsToAdd)` (Mutating)
Modifies the original array by deleting, replacing, or inserting elements in-place. **Returns an array of the removed items**.

```javascript
let letters = ["a", "b", "c", "d", "e"];

// 1. Delete 2 items starting from index 1:
let removed = letters.splice(1, 2);
console.log(removed); // ["b", "c"]
console.log(letters); // ["a", "d", "e"]

// 2. Insert items without deleting (deleteCount = 0):
letters.splice(1, 0, "x", "y");
console.log(letters); // ["a", "x", "y", "d", "e"]

// 3. Replace item at index 2:
letters.splice(2, 1, "z");
console.log(letters); // ["a", "x", "z", "d", "e"]
```

---

### 4. Combining & Transforming

#### `concat(...items)` (Non-Mutating)
Merges arrays and/or standalone values into a **brand new array**:
```javascript
let arr1 = [0, 0, 0, 0];
let arr2 = [1, 2, 3];

let newarr = arr1.concat(arr2, 99, 100);
console.log(newarr); // [0, 0, 0, 0, 1, 2, 3, 99, 100]
console.log(arr1);   // [0, 0, 0, 0] (Unchanged!)
```

#### `join(separator)` (Non-Mutating)
Converts all elements into a single string joined by the separator:
```javascript
const words = ["Hello", "World", "JavaScript"];
console.log(words.join(" "));  // "Hello World JavaScript"
console.log(words.join("-"));  // "Hello-World-JavaScript"
console.log(words.join(""));   // "HelloWorldJavaScript"
```

#### `reverse()` (Mutating)
Reverses the elements of an array in place:
```javascript
const nums = [1, 2, 3];
nums.reverse();
console.log(nums); // [3, 2, 1]
```

---

# 🟠 Part 3: Advanced ES6+ Features

## 8. Array Flattening (`flat()`) & Handling Empty Slots

The `.flat(depth)` method creates a new array with all sub-array elements concatenated into it recursively up to the specified `depth`. **It does not mutate the original array**.

### Syntax:
```javascript
arr.flat(depth); // depth is optional (default: 1)
```

### 1. Default Depth (1 level):
```javascript
let nested = [1, 2, [3, 4, [5, 6]]];

let flat1 = nested.flat();
console.log(flat1); // [1, 2, 3, 4, [5, 6]] (1 level flattened)
```

### 2. Custom Depth:
```javascript
let flat2 = nested.flat(2);
console.log(flat2); // [1, 2, 3, 4, 5, 6] (2 levels flattened)
```

### 3. Infinite Depth (`Infinity`):
Flattens all nested levels regardless of how deeply nested they are:
```javascript
let deep = [1, [2, [3, [4, [5]]]]];
console.log(deep.flat(Infinity)); // [1, 2, 3, 4, 5]
```

### 4. Special Superpower: Removing Empty Slots in Sparse Arrays!
A very important feature of `flat()` is that it **automatically strips out empty holes/slots** from sparse arrays:

```javascript
let sparseArr = [1, 2, , , 5, [6, , 8]];

let clean = sparseArr.flat();
console.log(clean); 
// Output: [1, 2, 5, 6, 8] -> All empty slots removed!
```

---

## 9. Array Destructuring & Rest Operator (`...`)

Array destructuring allows unpacking values from arrays into distinct variables in a clean, concise way.

### A. Basic Destructuring
```javascript
let arr = [10, 20, 30];

let [first, second, third] = arr;
console.log(first);  // 10
console.log(second); // 20
console.log(third);  // 30
```

### B. Using the Rest Operator (`...rest`)
Collects the remaining elements into a new array:
```javascript
let numbers = [1, 2, 3, 4, 5, 6, 7];

let [a, b, c, ...d] = numbers;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
console.log(d); // [4, 5, 6, 7] (remaining elements)

// Whole array cloning via rest pattern:
let [...all] = numbers;
console.log(all); // [1, 2, 3, 4, 5, 6, 7]
```

### C. Skipping Elements
Use empty commas to skip items you don't need:
```javascript
let colors = ["red", "green", "blue", "yellow"];

let [primary, , secondary] = colors;
console.log(primary);   // "red"
console.log(secondary); // "blue" (skipped "green")
```

### D. Default Values
Fallback values if the element is `undefined`:
```javascript
let [x = 5, y = 10] = [100];
console.log(x); // 100
console.log(y); // 10 (default used)
```

### E. Swapping Variables without a Temp Variable
```javascript
let val1 = "A";
let val2 = "B";

[val1, val2] = [val2, val1];
console.log(val1); // "B"
console.log(val2); // "A"
```

---

## 10. Array Mutation (Mutating vs Non-Mutating Operations)

**Mutation** means modifying the existing array in memory instead of creating a new one.

### A. Mutating Elements via Index
```javascript
const colors = ["red", "green", "blue"];
colors[1] = "yellow"; // Mutates index 1

console.log(colors); // ["red", "yellow", "blue"]
```

### B. Summary of Methods: Mutating vs Pure (Non-Mutating)

| Mutating Methods (Change original in-place) | Pure / Non-Mutating Methods (Return new value/array) |
|---|---|
| `push()` / `unshift()` | `slice()` |
| `pop()` / `shift()` | `concat()` |
| `splice()` | `flat()` |
| `reverse()` | `join()` |
| `sort()` | `map()`, `filter()` |
| Modifying `.length = n` | Spread syntax `[...arr]` |

---

# 🔴 Part 4: Memory Architecture & Deep Copying

## 11. Memory Architecture: Reference vs Copy

Understanding how JavaScript manages memory is essential to prevent bugs.

### A. Reference Assignment (`b = a`)
When you assign an array to a variable, JavaScript **does not copy the array**. It copies only the **memory pointer (reference)**:

```javascript
let a1 = [1, 2, 3];
let a2 = a1; // Shares the SAME memory address!

a2.unshift(101); // Modifies both!

console.log(a1); // [101, 1, 2, 3] -> a1 is changed!
console.log(a2); // [101, 1, 2, 3]
console.log(a1 === a2); // true (Identical reference)
```

---

### B. Shallow Copy (1st Level Only)
A shallow copy creates a new outer array, but if any elements are **nested arrays or objects**, their **references are copied**, not the nested values!

#### Ways to create a Shallow Copy:
```javascript
let copy1 = [...a1];
let copy2 = a1.slice();
let copy3 = [].concat(a1);
let copy4 = Array.from(a1);
```

#### Where Shallow Copy works (1D Arrays):
```javascript
let original = [1, 2, 3];
let copy = [...original];

copy.push(99);
console.log(original); // [1, 2, 3] (Safe! Original untouched)
console.log(copy);     // [1, 2, 3, 99]
```

#### ⚠️ The Shallow Copy Pitfall (Nested Arrays / Objects):
```javascript
let original = [1, 2, [10, 20]];
let shallow = [...original];

// Modifying top-level primitive:
shallow[0] = 99;
console.log(original[0]); // 1 (Safe!)

// Modifying nested array element:
shallow[2][0] = 999;
console.log(original[2][0]); // 999! ⚠️ MUTATED! Both share the inner array reference!
```

---

### C. Deep Copy (Complete Recursive Clone)
A deep copy recursively duplicates every level of nested arrays and objects, making the copy **100% independent**.

```text
Original: [1, 2, [10, 20]]
                 ▲
Shallow:  [1, 2, ──┘     ] <-- Inner array is shared!

Deep:     [1, 2, [10, 20]] <-- Completely separate memory addresses!
```

#### 1. `structuredClone()` (Modern Standard - Recommended):
Native built-in function for deep cloning:
```javascript
let original = [1, 2, [10, 20]];
let deep = structuredClone(original);

deep[2][0] = 999;
console.log(original[2][0]); // 10 (Safe! Original is completely untouched)
console.log(deep[2][0]);     // 999
```

#### 2. `JSON.parse(JSON.stringify())` (Legacy / JSON-safe):
Serializes to string and parses back:
```javascript
let deepJSON = JSON.parse(JSON.stringify(original));
```
> ⚠️ **Limitation:** Cannot clone functions, `undefined`, `NaN`, `Infinity`, or circular structures. `structuredClone()` is always preferred.

---

### Comparison Matrix:

| Operation | Top-Level Independent? | Nested Objects/Arrays Independent? | Example Syntax |
|---|---|---|---|
| **Reference Assignment** | ❌ No | ❌ No | `let b = a;` |
| **Shallow Copy** | ✅ Yes | ❌ No | `let b = [...a];` |
| **Deep Copy** | ✅ Yes | ✅ Yes | `let b = structuredClone(a);` |

---

# 🔵 Part 5: Algorithms & Reference Cheatsheet

## 12. Common Array Algorithms & Patterns

### A. Calculate Sum and Average
```javascript
const marks = [85, 92, 78, 90, 88];
let sum = 0;

for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
}

let avg = sum / marks.length;
console.log("Sum:", sum);                 // 433
console.log("Average:", avg.toFixed(2));  // 86.60
```

### B. Find Maximum and Minimum Element
```javascript
const nums = [23, 5, 89, 42, -3, 67];

let maxVal = nums[0];
let minVal = nums[0];

for (let i = 1; i < nums.length; i++) {
    if (nums[i] > maxVal) maxVal = nums[i];
    if (nums[i] < minVal) minVal = nums[i];
}

console.log("Max:", maxVal); // 89
console.log("Min:", minVal); // -3
```

### C. Linear Search (Find Index of Target)
```javascript
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
}

const arr = [10, 25, 47, 88, 99];
console.log(linearSearch(arr, 88)); // 3
console.log(linearSearch(arr, 50)); // -1
```

### D. Reverse an Array In-Place (Two-Pointer Technique)
Swaps symmetric elements from both ends moving inward. **$O(n)$ time complexity, $O(1)$ auxiliary memory**.

#### Implementation 1: Using `while`
```javascript
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let i = 0;
let j = arr.length - 1;

while (i < j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

    i++;
    j--;
}

console.log(arr); // [8, 7, 6, 5, 4, 3, 2, 1]
```

#### Implementation 2: Simultaneous `for` loop
```javascript
let arr = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

console.log(arr); // [8, 7, 6, 5, 4, 3, 2, 1]
```

#### 💡 Gotchas:
- **Why `i < j` instead of `i <= j`?** Prevents swapping the middle element with itself in odd-length arrays.
- **Typo warning (`arr.lenght`)**: `arr.lenght - 1` becomes `NaN`. Since `0 < NaN` is `false`, the loop fails to execute without throwing an error!

---

## 13. Master Quick Reference Cheatsheet

| Category | Method / Syntax | Example | Mutates Original? | Returns / Description |
|---|---|---|---|---|
| **Property** | `.length` | `arr.length` | ❌ (read) / ⚠️ (write) | Total count of elements |
| **Access** | Bracket notation | `arr[0]` or `arr[i][j]` | ❌ No | Accesses top-level or nested element |
| **Add/Remove** | `push` | `arr.push(val)` | ✅ Yes | Adds to end; returns new length |
| **Add/Remove** | `pop` | `arr.pop()` | ✅ Yes | Removes from end; returns removed item |
| **Add/Remove** | `unshift` | `arr.unshift(val)` | ✅ Yes | Adds to start; returns new length |
| **Add/Remove** | `shift` | `arr.shift()` | ✅ Yes | Removes from start; returns removed item |
| **Subarray** | `slice` | `arr.slice(start, end)` | ❌ No | Returns extracted chunk (shallow copy) |
| **Subarray** | `splice` | `arr.splice(start, count, ...items)` | ✅ Yes | Deletes, inserts, or replaces items in-place |
| **Search** | `indexOf` | `arr.indexOf(val, fromIndex)` | ❌ No | Returns first index or `-1` |
| **Search** | `includes` | `arr.includes(val, fromIndex)` | ❌ No | Returns `true`/`false` (can find `NaN`) |
| **Flatten** | `flat` | `arr.flat(depth)` | ❌ No | Flattens nested arrays & removes empty slots |
| **Destructure**| `[a, b, ...rest]` | `let [x, ...y] = arr;` | ❌ No | Unpacks elements into distinct variables |
| **Transform** | `join` | `arr.join(sep)` | ❌ No | Joins elements into a string |
| **Transform** | `reverse` | `arr.reverse()` | ✅ Yes | Reverses elements in-place |
| **Combine** | `concat` | `arr1.concat(arr2, val)` | ❌ No | Returns merged array with arrays and primitives |
| **Shallow Copy**| Spread / `slice` | `[...arr]` or `arr.slice()` | ❌ No | Clones top-level elements only |
| **Deep Copy** | `structuredClone` | `structuredClone(arr)` | ❌ No | Recursively clones array and all nested structures |
