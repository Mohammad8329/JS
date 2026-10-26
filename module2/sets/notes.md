# JavaScript Sets: Complete Reference & Guide

A **Set** is a built-in JavaScript object and data structure introduced in ES6 (ECMAScript 2015) that stores a collection of **unique values** of any type (both primitive values and object references). 

Unlike standard Arrays, Sets enforce uniqueness automatically—duplicate elements cannot be added. Furthermore, elements within a Set maintain their **insertion order**, and membership checking (`.has()`) operates in average $\mathcal{O}(1)$ constant time.

---

## 📌 Master Feature Reference Table

| Name / Feature | How to use / Syntax | Required Parameter | Optional Parameter | What does each parameter do? | What does it return? | Sample use case |
| --- | --- | --- | --- | --- | --- | --- |
| **`new Set()`** | `let set = new Set();` | None | `iterable` (e.g., Array, String) | If an iterable is provided, iterates over it and adds all its unique values to the new Set | A new `Set` instance | `let s = new Set([1, 2, 2, 3]);` |
| **`.size`** | `set.size` | None | None | **Accessor property** (getter) that reports the total number of unique elements in the Set | `number` | `set.size` → `3` |
| **`.add()`** | `set.add(value)` | `value` | None | Appends `value` to the Set if not already present. Returns the Set instance to enable chaining | The updated `Set` (enables chaining) | `set.add(10).add(20);` |
| **`.has()`** | `set.has(value)` | `value` | None | Checks whether an element with the specified value exists in the Set using *SameValueZero* equality | `boolean` (`true` or `false`) | `set.has(10)` → `true` |
| **`.delete()`** | `set.delete(value)` | `value` | None | Removes the specified value from the Set if it exists | `boolean` (`true` if found & removed, else `false`) | `set.delete(10)` → `true` |
| **`.clear()`** | `set.clear()` | None | None | Removes all elements from the Set, resetting its `.size` to `0` | `undefined` | `set.clear();` |
| **`for...of`** | `for (let val of set)` | Target iterable Set | None | Traverses each element in the Set in the exact order they were inserted | Nothing by itself | `for (let x of set) console.log(x);` |
| **`.forEach()`** | `set.forEach((val, key, s) => {})` | `callbackFn` | `thisArg` | Executes callback on each item. In Sets, `key === val` for consistency with `Map.prototype.forEach` | `undefined` | `set.forEach(v => console.log(v));` |
| **`.values()` / `.keys()`** | `set.values()` / `set.keys()` | None | None | Returns a new iterator object yielding each value in insertion order (`keys()` is an alias of `values()`) | `SetIterator` | `[...set.values()]` |
| **`.entries()`** | `set.entries()` | None | None | Returns an iterator of `[value, value]` pairs (kept for compatibility with `Map.prototype.entries`) | `SetIterator` yielding `[val, val]` | `for (let [k, v] of set.entries())` |
| **Array Deduplication** | `[...new Set(arr)]` | Array / Iterable | None | Creates a Set from an array to drop duplicates, then spreads unique values into a clean Array | New Array with unique values | `let unique = [...new Set([1, 1, 2])];` |
| **Modern ES2024 Set Ops** | `setA.intersection(setB)` | Other Set | None | Computes mathematical operations (`union`, `intersection`, `difference`, `symmetricDifference`, `isSubsetOf`) | New `Set` or `boolean` | `setA.intersection(setB)` |

---

## 🔍 Review & Corrections of Your Initial Draft

In your initial scratchpad notes, you had written:
```javascript
set -> a datastructure that stores unique value

arr = [1,2];

let set1 = new Set(); //initalize set

// to add element in a set you function add().

set.add(arr);
set.add([1,2]); 

// output
{[1,2],[1,2]} -> here the it will print both becasuse arr and [1,2] has two different references.

// set.size -> use to find length.

// fucntion in set; 
```

### 1. What was correct and insightful in your notes:
- ✅ **Uniqueness Definition:** You correctly identified that a Set stores unique values.
- ✅ **Reference Equality Insight:** You accurately noted that adding `arr` and `[1, 2]` causes **both** to be preserved in the Set because they reside at two distinct memory addresses (references), despite containing the exact same numerical values.

### 2. Flaws and errors corrected:
- ❌ **Variable Name Typo (`set` vs `set1`):** You declared `let set1 = new Set();`, but then called `set.add(...)` and `set.size`. In JavaScript, referencing `set` throws a `ReferenceError: set is not defined`. You must call methods on the variable you created: `set1.add(...)`.
- ❌ **Calling `.size` a function:** You wrote `"// fucntion in set;"` right after `// set.size -> use to find length.`. 
  - **Correction:** `.size` is **not a function/method**; it is a **read-only accessor property** (like `array.length`). 
  - Never call `set.size()`; calling it like a function throws a `TypeError: set1.size is not a function`. Always write `set1.size`.
- ❌ **Incomplete Content:** The notes stopped at line 17 without enumerating the built-in methods, iteration patterns, equality rules, or deduplication algorithms.

---

## 1. How Uniqueness Works in Sets (The SameValueZero Algorithm)

Sets use an internal equality comparison called **SameValueZero**, which behaves almost identically to the strict equality operator (`===`), with two key differences:

1. **`NaN` is equal to `NaN`:** Under normal JavaScript strict equality, `NaN === NaN` is `false`. However, in a `Set`, `NaN` is considered equal to another `NaN`, meaning only one `NaN` can ever exist in a Set.
2. **`+0` and `-0` are equal:** Both `+0` and `-0` are considered the same value in a Set.
3. **Strict Type Checking Applies:** Like `===`, numbers and strings are distinct: `20 !== "20"`.

```javascript
const mySet = new Set();

// Primitives
mySet.add(20);
mySet.add(20);      // Ignored (duplicate primitive number)
mySet.add("20");    // Added! Different data type (string vs number)
mySet.add(NaN);
mySet.add(NaN);     // Ignored! Only one NaN is retained

console.log(mySet); // Set(3) { 20, '20', NaN }
console.log(mySet.size); // 3
```

---

## 2. Primitives vs. Non-Primitives (Reference Equality)

This is one of the most important concepts to understand when working with Sets:

- **Primitive values** (numbers, strings, booleans, `null`, `undefined`, symbols, BigInt) are compared by their **literal value**.
- **Objects, Arrays, and Functions** (non-primitives) are compared by their **memory reference address**, NOT by their visual content.

```javascript
const set = new Set();

const arr = [1, 2];

set.add(arr);     // Reference A added
set.add(arr);     // Reference A again -> IGNORED (same reference)
set.add([1, 2]);  // Reference B created in memory -> ADDED!
set.add([1, 2]);  // Reference C created in memory -> ADDED!

console.log(set.size); // 3
console.log(set);      // Set(3) { [ 1, 2 ], [ 1, 2 ], [ 1, 2 ] }

// Checking membership:
console.log(set.has(arr));    // true  (same reference A)
console.log(set.has([1, 2])); // false (fresh array created with new reference D!)
```

> [!IMPORTANT]
> To check or find an object or array in a Set, you must retain and query with the **exact same variable reference** that was originally added.

---

## 3. All Built-in Set Methods & Properties

### A. `.size` (Property)
Returns the total number of unique elements currently in the Set.
```javascript
const fruits = new Set(["apple", "banana", "orange", "apple"]);
console.log(fruits.size); // 3 (duplicate "apple" was discarded)
```

---

### B. `.add(value)` (Method)
Appends a new value to the Set. Because it returns the Set itself, you can **chain** multiple `.add()` calls:
```javascript
const scores = new Set();

// Method chaining
scores.add(90).add(85).add(95).add(90);

console.log(scores);      // Set(3) { 90, 85, 95 }
console.log(scores.size); // 3
```

---

### C. `.has(value)` (Method)
Checks whether an element exists in the Set.
- Returns `true` if the item exists, otherwise `false`.
- Operates in average $\mathcal{O}(1)$ time complexity (much faster than `array.includes()`, which takes $\mathcal{O}(N)$).

```javascript
const roles = new Set(["admin", "editor", "viewer"]);

console.log(roles.has("admin"));     // true
console.log(roles.has("moderator")); // false
```

---

### D. `.delete(value)` (Method)
Removes an element from the Set.
- Returns `true` if the element existed and was successfully deleted.
- Returns `false` if the element was not found in the Set.

```javascript
const tags = new Set(["js", "html", "css"]);

console.log(tags.delete("html")); // true  (removed)
console.log(tags.delete("php"));  // false (not found)
console.log(tags);                // Set(2) { 'js', 'css' }
```

---

### E. `.clear()` (Method)
Removes all elements from the Set. Does not take any arguments and returns `undefined`.

```javascript
const items = new Set([1, 2, 3, 4]);
console.log(items.size); // 4

items.clear();
console.log(items.size); // 0
console.log(items);      // Set(0) {}
```

---

## 4. Iterating Over Sets

Sets preserve **insertion order**, making loops predictable:

### A. Using `for...of` (Most Common & Recommended)
```javascript
const colors = new Set(["Red", "Green", "Blue"]);

for (const color of colors) {
    console.log(color);
}
// Output:
// Red
// Green
// Blue
```

---

### B. Using `.forEach()`
In Sets, keys and values are identical because Sets do not have key-value pairs like Maps or Objects. The callback signature `(value, key, set)` provides `key === value` for consistency with `Map.prototype.forEach`.

```javascript
const numbers = new Set([10, 20, 30]);

numbers.forEach((value, key, currentSet) => {
    console.log(`Value: ${value}, Key: ${key}`);
});
// Value: 10, Key: 10
// Value: 20, Key: 20
// Value: 30, Key: 30
```

---

### C. Iterator Methods: `.values()`, `.keys()`, `.entries()`
```javascript
const set = new Set(["cat", "dog"]);

// .values() returns an iterable of values
for (const val of set.values()) {
    console.log(val); // 'cat', 'dog'
}

// .keys() is an exact alias of .values()
for (const key of set.keys()) {
    console.log(key); // 'cat', 'dog'
}

// .entries() returns [value, value] pairs
for (const [k, v] of set.entries()) {
    console.log(k, v); // 'cat' 'cat', 'dog' 'dog'
}
```

---

## 5. Converting Between Sets and Arrays

### A. Removing Duplicates From an Array (Deduplication)
The standard modern way to remove duplicate items from an array in JavaScript:

```javascript
const numbers = [1, 2, 2, 3, 4, 4, 4, 5];

// Method 1: Using the Spread Operator [...] (Cleanest)
const uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers); // [1, 2, 3, 4, 5]

// Method 2: Using Array.from()
const uniqueArray = Array.from(new Set(numbers));
console.log(uniqueArray); // [1, 2, 3, 4, 5]
```

---

### B. Counting Duplicates in an Array
From your daily practice file `sets.js`:
```javascript
let arr = [1, 2, 1, 2, 3, 4, 3, 4];

let totalCount = arr.length;               // 8
let uniqueCount = new Set(arr).size;       // 4
let duplicateCount = totalCount - uniqueCount;

console.log("Total elements:", totalCount);          // 8
console.log("Unique elements:", uniqueCount);        // 4
console.log("Duplicate items eliminated:", duplicateCount); // 4
```

---

## 6. Mathematical Set Operations

### A. Classic Cross-Version Implementations (ES6 Spread & Filter)

```javascript
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);

// 1. UNION (A ∪ B) -> All unique elements from both sets
const union = new Set([...setA, ...setB]);
console.log("Union:", [...union]); 
// [1, 2, 3, 4, 5, 6]

// 2. INTERSECTION (A ∩ B) -> Elements present in BOTH sets
const intersection = new Set([...setA].filter(x => setB.has(x)));
console.log("Intersection:", [...intersection]); 
// [3, 4]

// 3. DIFFERENCE (A \ B) -> Elements in setA that are NOT in setB
const difference = new Set([...setA].filter(x => !setB.has(x)));
console.log("Difference (A - B):", [...difference]); 
// [1, 2]

// 4. SYMMETRIC DIFFERENCE (A △ B) -> Elements in either A or B, but NOT both
const symDifference = new Set([
    ...[...setA].filter(x => !setB.has(x)),
    ...[...setB].filter(x => !setA.has(x))
]);
console.log("Symmetric Difference:", [...symDifference]); 
// [1, 2, 5, 6]

// 5. SUBSET CHECK (A ⊆ B) -> Are all elements of A inside B?
const isSubset = (subset, superset) => [...subset].every(x => superset.has(x));
console.log("Is A subset of B?:", isSubset(new Set([3, 4]), setA)); // true
```

---

### B. Modern ES2024 Built-in Set Methods
In modern JavaScript environments (Node.js 22+, modern browsers), Set includes official built-in mathematical methods:

```javascript
const setA = new Set([1, 2, 3]);
const setB = new Set([2, 3, 4]);

// Official ES2024 methods:
// setA.union(setB);               // Set { 1, 2, 3, 4 }
// setA.intersection(setB);        // Set { 2, 3 }
// setA.difference(setB);          // Set { 1 }
// setA.symmetricDifference(setB); // Set { 1, 4 }
// setA.isSubsetOf(setB);          // false
// setA.isSupersetOf(setB);        // false
// setA.isDisjointFrom(setB);      // false (share 2, 3)
```

---

## 7. Performance: Set vs. Array Comparison

| Feature / Operation | JavaScript `Array` | JavaScript `Set` |
| --- | --- | --- |
| **Duplicates Allowed?** | Yes | No (Strictly unique values) |
| **Element Order** | Indexed (`0, 1, 2...`) | Insertion order |
| **Length / Count** | `arr.length` | `set.size` (read-only property) |
| **Access by index** | `arr[0]` $\rightarrow \mathcal{O}(1)$ | Not indexed directly; requires iteration |
| **Value Search / Lookup** | `arr.includes(val)` $\rightarrow \mathcal{O}(N)$ (Linear scan) | `set.has(val)` $\rightarrow \mathcal{O}(1)$ (Hash lookup) |
| **Adding an element** | `arr.push(val)` $\rightarrow \mathcal{O}(1)$ | `set.add(val)` $\rightarrow \mathcal{O}(1)$ |
| **Removing an element** | `arr.splice(index, 1)` $\rightarrow \mathcal{O}(N)$ (Shift elements) | `set.delete(val)` $\rightarrow \mathcal{O}(1)$ |
| **Primary Use Cases** | Ordered lists, numeric indexing, stacks, queues | Fast membership testing, deduplicating data, tracking visited states in graphs/grids |

---

## 8. Common Real-World DSA Problems Solved with Sets

### Problem 1: Check if Array Contains Any Duplicate
Given an integer array `nums`, return `true` if any value appears at least twice, and `false` if every element is distinct.

```javascript
function containsDuplicate(nums) {
    const seen = new Set();
    for (const num of nums) {
        if (seen.has(num)) {
            return true; // Found duplicate early!
        }
        seen.add(num);
    }
    return false;
}

// Or single-line comparison:
const hasDuplicates = (nums) => new Set(nums).size !== nums.length;

console.log(hasDuplicates([1, 2, 3, 1])); // true
console.log(hasDuplicates([1, 2, 3, 4])); // false
```

---

### Problem 2: First Unique Character / First Repeating Element
Find the first number that repeats in an array:

```javascript
function firstRepeating(arr) {
    const seen = new Set();
    for (const val of arr) {
        if (seen.has(val)) {
            return val;
        }
        seen.add(val);
    }
    return null; // No duplicate found
}

console.log(firstRepeating([10, 5, 3, 4, 3, 5, 6])); // 3
```

---

## 🧠 Summary & Quick Revision Checklist

1. **Instantiation:** Use `const s = new Set([iterable])`.
2. **Size:** Always access `.size` without parentheses: `s.size`.
3. **Adding:** `s.add(val)` allows method chaining (`s.add(1).add(2)`).
4. **Checking:** `s.has(val)` is ultra-fast $\mathcal{O}(1)$ lookup.
5. **Deleting:** `s.delete(val)` returns `true` if present and removed.
6. **Clearing:** `s.clear()` empties the Set.
7. **Deduplication:** Clean an array in one line: `[...new Set(array)]`.
8. **Objects/Arrays Uniqueness:** Distinct references `[1, 2]` are NOT equal in a Set even if their contents look identical.