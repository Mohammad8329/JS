# JavaScript Arrays

An **Array** is an ordered collection of elements stored under a single variable name. Each element in an array has a numeric position called an **index**, starting from `0`.

---

## 📌 Table of Contents
1. [Why Do We Need Arrays?](#1-why-do-we-need-arrays)
2. [Key Characteristics of JS Arrays](#2-key-characteristics-of-js-arrays)
3. [Creating Arrays](#3-creating-arrays)
4. [Array Indexing & Accessing Elements](#4-array-indexing--accessing-elements)
5. [The `length` Property](#5-the-length-property)
6. [Iterating Over Arrays](#6-iterating-over-arrays)
7. [Essential Array Methods](#7-essential-array-methods)
8. [Array Mutation (Mutating vs Non-Mutating Operations)](#8-array-mutation-mutating-vs-non-mutating-operations)
9. [Memory & Reference Behavior (Pass by Reference)](#9-memory--reference-behavior-pass-by-reference)
10. [Common Array Algorithms & Patterns](#10-common-array-algorithms--patterns)
11. [Quick Reference Cheatsheet](#11-quick-reference-cheatsheet)

---

## 1. Why Do We Need Arrays?

Without arrays, storing multiple related data items requires individual variables:

```javascript
// Inefficient and unmanageable:
let student1 = "Amit";
let student2 = "Priya";
let student3 = "Rahul";
// What if we have 500 students?
```

With arrays, we store and manage all items in a single structure:

```javascript
// Clean and scalable:
const students = ["Amit", "Priya", "Rahul"];
console.log(students[0]); // "Amit"
```

---

## 2. Key Characteristics of JS Arrays

1. **Zero-Indexed**: The first element is at index `0`, the second at index `1`, etc.
2. **Heterogeneous Data Types**: Unlike C++ or Java, JavaScript arrays can store mixed data types in the same array:
   ```javascript
   let mixed = [42, "Hello", true, null, undefined, { role: "admin" }, [1, 2]];
   ```
3. **Dynamic / Resizable**: Size is not fixed. You can add or remove elements at any time.
4. **Reference Type (Object)**: In JavaScript, arrays are technically special objects. `typeof []` evaluates to `"object"`.

---

## 3. Creating Arrays

### A. Array Literal Syntax (Recommended)
```javascript
const numbers = [10, 20, 30, 40, 50];
const emptyArr = [];
```

### B. Using the `Array` Constructor
```javascript
// Array with specific elements:
const fruits = new Array("Apple", "Banana", "Orange");

// Array with initial length (creates 5 empty/sparse slots):
const slots = new Array(5); // [ <5 empty items> ]
```

---

## 4. Array Indexing & Accessing Elements

Elements are accessed and modified using square bracket notation `[index]`:

```javascript
const colors = ["Red", "Green", "Blue"];

// Accessing:
console.log(colors[0]); // "Red" (first element)
console.log(colors[1]); // "Green"
console.log(colors[2]); // "Blue"

// Modifying:
colors[1] = "Yellow";
console.log(colors);    // ["Red", "Yellow", "Blue"]
```

### Out-of-Bounds Indexing:
In JavaScript, accessing an index that does not exist does **NOT** throw an error; it returns `undefined`:

```javascript
const arr = [1, 2, 3];
console.log(arr[10]); // undefined
```

---

## 5. The `length` Property

The `.length` property returns the total count of elements in the array.

```javascript
const arr = [10, 20, 30, 40, 50];

console.log(arr.length); // 5

// Access the last element:
let lastItem = arr[arr.length - 1]; // 50
```

### Modifying `length` Property:
```javascript
let nums = [1, 2, 3, 4, 5];

// Truncating the array:
nums.length = 3;
console.log(nums); // [1, 2, 3]

// Expanding the array (creates empty slots):
nums.length = 5;
console.log(nums); // [1, 2, 3, <2 empty items>]
```

---

## 6. Iterating Over Arrays

### A. Standard `for` Loop (Best for Index Control)
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
Introduced in ES6, the `for...of` loop iterates directly over the **values** of an iterable (like an Array, String, Set, etc.) without needing an index counter:

```javascript
const animals = ["Cat", "Dog", "Elephant"];

for (let animal of animals) {
    console.log(animal); // "Cat", "Dog", "Elephant"
}
```

#### ⚠️ Critical Gotcha: Reassigning the Loop Variable Does NOT Mutate the Array!
A very common beginner mistake is trying to modify array elements by reassigning the loop variable:

```javascript
let letters = ['a', 'b', 'c'];

for (let item of letters) {
    console.log(item); // 'a'
    item = 20;         // ❌ Only reassigns the local variable `item`
    console.log(item); // 20
}

console.log(letters); 
// Output: ['a', 'b', 'c'] -> The array is COMPLETELY UNCHANGED!
```

**Why doesn't this mutate the array?**
- In each iteration, `item` is a **fresh local variable** that receives a copy of the primitive value from that array slot.
- Writing `item = 20` merely changes what the local variable `item` holds during that single iteration. It does **not** write back to the array's memory location.
- **Rule of thumb:** If you need to mutate/update values inside an array during a loop, use the index with a traditional `for` loop:
  ```javascript
  for (let i = 0; i < letters.length; i++) {
      letters[i] = 20; // ✅ Modifies the actual array element
  }
  console.log(letters); // [20, 20, 20]
  ```


### C. `for...in` Loop (Iterates Over Indices)
> ⚠️ **Note:** `for...in` iterates over property keys (strings). For arrays, use standard `for` or `for...of`.
```javascript
const letters = ["a", "b", "c"];

for (let index in letters) {
    console.log(index, letters[index]); // index is string: "0", "1", "2"
}
```

### D. `forEach` Method
```javascript
const nums = [1, 2, 3];
nums.forEach((val, idx) => {
    console.log(idx, val);
});
```

---

## 7. Essential Array Methods

### 1. Adding and Removing Elements

| Method | Description | Mutates Original? | Returns |
|---|---|---|---|
| `push(item)` | Adds element(s) to the **end** | ✅ Yes | New length |
| `pop()` | Removes element from the **end** | ✅ Yes | The removed element |
| `unshift(item)` | Adds element(s) to the **beginning** | ✅ Yes | New length |
| `shift()` | Removes element from the **beginning** | ✅ Yes | The removed element |

```javascript
let arr = [20, 30];

// push: Add to end
arr.push(40);        // arr is now [20, 30, 40]

// unshift: Add to beginning
arr.unshift(10);     // arr is now [10, 20, 30, 40]

// pop: Remove from end
let popped = arr.pop(); // popped = 40, arr is [10, 20, 30]

// shift: Remove from beginning
let shifted = arr.shift(); // shifted = 10, arr is [20, 30]
```

---

### 2. Searching & Checking

#### `indexOf(value)`
Returns the first index of the value, or `-1` if not found.
```javascript
const colors = ["red", "green", "blue", "green"];
console.log(colors.indexOf("green")); // 1
console.log(colors.indexOf("yellow")); // -1
```

#### `lastIndexOf(value)`
Returns the last index of the value, or `-1` if not found.
```javascript
console.log(colors.lastIndexOf("green")); // 3
```

#### `includes(value)`
Returns `true` if element exists, otherwise `false`.
```javascript
console.log(colors.includes("blue"));  // true
console.log(colors.includes("yellow")); // false
```

---

### 3. Extracting and Modifying Parts of an Array

#### `slice(start, end)` (Non-Mutating)
Extracts a shallow copy of a portion of an array from `start` to `end` (exclusive). **Does not modify the original array**.
```javascript
const numbers = [10, 20, 30, 40, 50];

const sub = numbers.slice(1, 4); // indices 1, 2, 3
console.log(sub);     // [20, 30, 40]
console.log(numbers); // [10, 20, 30, 40, 50] (unchanged)

// Negative indices count from end:
console.log(numbers.slice(-2)); // [40, 50]
```

#### `splice(start, deleteCount, ...itemsToAdd)` (Mutating)
Modifies the original array by deleting, replacing, or inserting elements.
```javascript
let letters = ["a", "b", "c", "d", "e"];

// Delete 2 items starting from index 1:
let removed = letters.splice(1, 2);
console.log(removed); // ["b", "c"]
console.log(letters); // ["a", "d", "e"]

// Insert items at index 1 without deleting:
letters.splice(1, 0, "x", "y");
console.log(letters); // ["a", "x", "y", "d", "e"]

// Replace item at index 2:
letters.splice(2, 1, "z");
console.log(letters); // ["a", "x", "z", "d", "e"]
```

---

### 4. Joining & Combining

#### `concat(...arrays)`
Merges two or more arrays without mutating originals:
```javascript
const a = [1, 2];
const b = [3, 4];
const combined = a.concat(b);
console.log(combined); // [1, 2, 3, 4]
```

#### `join(separator)`
Joins all array elements into a single string separated by the given separator:
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

## 8. Array Mutation (Mutating vs Non-Mutating Operations)

### What is Mutation?
**Mutation** means changing, adding, or removing elements directly within the existing array in memory, rather than creating a brand-new array.

- **Mutable**: The original array is modified in-place.
- **Immutable / Non-Mutating**: The original array stays untouched; a new array or value is returned.

---

### A. Mutating Elements via Index
You can mutate an element directly by assigning a new value to its index:
```javascript
const colors = ["red", "green", "blue"];
colors[1] = "yellow"; // Mutates index 1

console.log(colors); // ["red", "yellow", "blue"]
```

#### Why does `const` allow array mutation?
A very common concept: Declaring an array with `const` locks the **variable binding** (you cannot point it to a new array/address), but the **contents inside the array remain completely mutable**!

```javascript
const numbers = [1, 2, 3];

numbers[0] = 99;       // ✅ ALLOWED: Mutating internal contents
numbers.push(4);       // ✅ ALLOWED: Mutating array structure

// numbers = [10, 20]; // ❌ TypeError: Assignment to constant variable
```

---

### B. Mutating Methods vs Non-Mutating Methods

Understanding which methods mutate the original array is vital to avoid bugs:

#### 1. Mutating Methods (Modify original in-place):
- **`push()`** & **`unshift()`**: Adds elements to end / beginning.
- **`pop()`** & **`shift()`**: Removes elements from end / beginning.
- **`splice()`**: Inserts, removes, or replaces elements.
- **`reverse()`**: Reverses array in-place.
- **`sort()`**: Sorts elements in-place.
- **`.length = n`**: Truncates or expands array in-place.

```javascript
let arr = [3, 1, 2];
arr.reverse(); 
console.log(arr); // [2, 1, 3] -> Mutated!
```

#### 2. Non-Mutating Methods (Original array stays intact):
- **`slice()`**: Returns a new extracted copy.
- **`concat()`**: Merges arrays into a new array.
- **`join()`**: Returns a string.
- **`map()`, `filter()`**: Returns a brand-new array.
- **Spread operator `[...arr]`**: Creates an independent copy.

```javascript
let arr = [10, 20, 30];
let sub = arr.slice(0, 2);

console.log(sub); // [10, 20] (new array)
console.log(arr); // [10, 20, 30] (original unchanged!)
```

---

### C. Mutation Inside Loops: Primitives vs Objects

#### 1. Arrays of Primitives (Numbers, Strings, Booleans):
- In `for...of`, the iteration variable receives a **copy of the primitive value**. Reassigning it has **zero effect** on the array:
  ```javascript
  let nums = [1, 2, 3];
  for (let n of nums) {
      n = n * 10; // ❌ Only reassigns local variable `n`
  }
  console.log(nums); // [1, 2, 3] -> NOT mutated!
  ```
- To mutate primitive elements during a loop, update via index in a standard `for` loop:
  ```javascript
  for (let i = 0; i < nums.length; i++) {
      nums[i] = nums[i] * 10; // ✅ Mutates the array element
  }
  console.log(nums); // [10, 20, 30]
  ```

#### 2. Arrays of Objects (References):
- If the array contains objects, `for...of` holds a **reference** to the object. Mutating an object property **will mutate** that object inside the array:
  ```javascript
  let users = [{ name: "alice" }, { name: "bob" }];

  for (let user of users) {
      user.name = user.name.toUpperCase(); // ✅ Mutates property via reference!
  }

  console.log(users); // [{ name: "ALICE" }, { name: "BOB" }]
  ```

---

## 9. Memory & Reference Behavior (Pass by Reference)

Primitives (`number`, `string`, `boolean`) are copied **by value**, but arrays are **reference types**.

```javascript
let arr1 = [1, 2, 3];
let arr2 = arr1; // Copies the reference (memory address), NOT the values!

arr2.push(4);

console.log(arr1); // [1, 2, 3, 4] — arr1 changed as well!
console.log(arr2); // [1, 2, 3, 4]
console.log(arr1 === arr2); // true (both point to the same memory location)
```

### How to Create an Independent Copy (Shallow Copy):

1. **Spread Operator `...`**:
   ```javascript
   let copy1 = [...arr1];
   ```
2. **`slice()` method**:
   ```javascript
   let copy2 = arr1.slice();
   ```

```javascript
let original = [10, 20, 30];
let copy = [...original];

copy.push(40);
console.log(original); // [10, 20, 30] (unaffected)
console.log(copy);     // [10, 20, 30, 40]
```

---

## 10. Common Array Algorithms & Patterns

### A. Calculate Sum and Average
```javascript
const marks = [85, 92, 78, 90, 88];
let sum = 0;

for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
}

let avg = sum / marks.length;
console.log("Sum:", sum);       // 433
console.log("Average:", avg);   // 86.6
```

### B. Find Maximum and Minimum Element
```javascript
const nums = [23, 5, 89, 42, -3, 67];

let maxVal = nums[0];
let minVal = nums[0];

for (let i = 1; i < nums.length; i++) {
    if (nums[i] > maxVal) {
        maxVal = nums[i];
    }
    if (nums[i] < minVal) {
        minVal = nums[i];
    }
}

console.log("Max:", maxVal); // 89
console.log("Min:", minVal); // -3
```

### C. Linear Search (Find Index of Target)
```javascript
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Found at index i
        }
    }
    return -1; // Not found
}

const arr = [10, 25, 47, 88, 99];
console.log(linearSearch(arr, 88)); // 3
console.log(linearSearch(arr, 50)); // -1
```

### D. Reverse an Array In-Place (Two-Pointer Technique)
```javascript
const arr = [1, 2, 3, 4, 5];
let left = 0;
let right = arr.length - 1;

while (left < right) {
    // Swap elements
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    left++;
    right--;
}

console.log(arr); // [5, 4, 3, 2, 1]
```

---

## 11. Quick Reference Cheatsheet

| Category | Method / Property | Syntax | Mutates Original? | Description |
|---|---|---|---|---|
| **Property** | `.length` | `arr.length` | ❌ (read) / ⚠️ (write) | Total number of elements |
| **Add/Remove** | `push` | `arr.push(val)` | ✅ Yes | Adds to end |
| **Add/Remove** | `pop` | `arr.pop()` | ✅ Yes | Removes last element |
| **Add/Remove** | `unshift` | `arr.unshift(val)` | ✅ Yes | Adds to front |
| **Add/Remove** | `shift` | `arr.shift()` | ✅ Yes | Removes first element |
| **Subarray** | `slice` | `arr.slice(start, end)` | ❌ No | Returns extracted chunk |
| **Subarray** | `splice` | `arr.splice(start, count, ...items)` | ✅ Yes | Inserts/deletes/replaces elements |
| **Search** | `indexOf` | `arr.indexOf(val)` | ❌ No | Returns index or `-1` |
| **Search** | `includes` | `arr.includes(val)` | ❌ No | Returns `true`/`false` |
| **Transform** | `join` | `arr.join(sep)` | ❌ No | Joins elements into string |
| **Transform** | `reverse` | `arr.reverse()` | ✅ Yes | Reverses elements in place |
| **Combine** | `concat` | `arr.concat(arr2)` | ❌ No | Combines multiple arrays |
| **Copy** | Spread | `[...arr]` | ❌ No | Creates shallow copy |
