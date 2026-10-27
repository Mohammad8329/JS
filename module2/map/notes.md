# JavaScript Map Data Structure (Module 2)

A **`Map`** is an ES6 built-in keyed collection that holds **key-value pairs** and remembers the **original insertion order** of the keys. Unlike plain JavaScript objects, **any value** (both primitive values and objects/functions) may be used as either a key or a value.

---

## 📌 Master Feature Reference Table

| Method / Property | Syntax | Parameters | Return Value | Time Complexity | Description & Example |
|---|---|---|---|:---:|---|
| **Constructor** | `new Map([iterable])` | Optional 2D array / iterable `[[k1, v1], [k2, v2]]` | New `Map` instance | $\mathcal{O}(N)$ | Creates and optionally populates a new Map. |
| **`.set()`** | `map.set(key, value)` | `key`, `value` | The `Map` object itself (chainable) | $\mathcal{O}(1)$ | Adds or updates an element with specified key and value. |
| **`.get()`** | `map.get(key)` | `key` | Associated value, or `undefined` | $\mathcal{O}(1)$ | Returns the value associated with `key`. |
| **`.has()`** | `map.has(key)` | `key` | `true` if key exists, else `false` | $\mathcal{O}(1)$ | Checks for the presence of a key in the Map. |
| **`.delete()`** | `map.delete(key)` | `key` | `true` if removed, `false` if not found | $\mathcal{O}(1)$ | Removes the specified key-value pair. |
| **`.clear()`** | `map.clear()` | None | `undefined` | $\mathcal{O}(1)$ | Removes all key-value pairs from the Map. |
| **`.size`** | `map.size` | None (Property) | Number (count of entries) | $\mathcal{O}(1)$ | Instant count of elements (does not require length calculation). |
| **`.keys()`** | `map.keys()` | None | Iterator of all keys | $\mathcal{O}(1)$ | Returns an iterable iterator of keys in insertion order. |
| **`.values()`** | `map.values()` | None | Iterator of all values | $\mathcal{O}(1)$ | Returns an iterable iterator of values in insertion order. |
| **`.entries()`** | `map.entries()` | None | Iterator of `[key, value]` pairs | $\mathcal{O}(1)$ | Returns key-value pairs iterator (default iterator for Map). |
| **`.forEach()`** | `map.forEach(cb)` | `(value, key, map) => void` | `undefined` | $\mathcal{O}(N)$ | Executes callback once per entry in insertion order. |

---

## 1. Why `Map`? `Map` vs. Plain Object (`{}`)

In JavaScript, plain objects `{}` have traditionally been used as hash maps. However, `Map` was introduced in ES6 to overcome key fundamental limitations of objects:

| Feature / Dimension | `Map` | Plain Object (`{}`) |
|---|---|---|
| **Key Types** | **Any type** (primitives, objects, arrays, functions, `NaN`, booleans) | **Strings** and **Symbols** only (numbers/objects get coerced to strings) |
| **Key Ordering** | Guaranteed **strictly insertion order** | Complex: integer keys sorted first, then string keys in insertion order |
| **Size Determination** | Instant $\mathcal{O}(1)$ access via `map.size` | Requires $\mathcal{O}(N)$ calculation: `Object.keys(obj).length` |
| **Default Keys & Inheritance** | **Clean by default** — contains zero keys when created | Contains inherited prototype keys (`toString`, `valueOf`, `constructor`) |
| **Direct Iteration** | **Directly iterable** using `for...of`, spread `[...]` | Not directly iterable (requires `Object.keys()` or `for...in`) |
| **Frequent Additions & Removals** | **Optimized for frequent additions and deletions** | Not optimized for high-frequency dynamic key churn |
| **Serialization** | Requires custom conversion to JSON | Native support via `JSON.stringify()` / `JSON.parse()` |

---

## 2. Core Syntax & Basic Operations

### 1. Creation and Initialization
```javascript
// Empty Map
const map = new Map();

// Initialized with a 2D Array of [key, value] entries
const userRoles = new Map([
  ["alice", "admin"],
  ["bob", "editor"],
  ["charlie", "viewer"]
]);

console.log(userRoles.size); // 3
```

### 2. Adding & Updating Elements (`.set()`)
The `.set()` method is **chainable** because it returns the map itself:
```javascript
const inventory = new Map();

// Single additions
inventory.set("apples", 15);
inventory.set("bananas", 30);

// Method chaining
inventory
  .set("oranges", 25)
  .set("grapes", 40);

// Updating an existing key overrides the old value
inventory.set("apples", 20);

console.log(inventory.get("apples")); // 20
```

### 3. Reading Elements (`.get()`) & Checking Existence (`.has()`)
```javascript
const scores = new Map([
  ["Mohammad", 98],
  ["Sarah", 92]
]);

console.log(scores.get("Mohammad")); // 98
console.log(scores.get("John"));     // undefined (key does not exist)

// Always verify key existence using .has()
if (scores.has("Sarah")) {
  console.log(`Sarah's score: ${scores.get("Sarah")}`);
}
```

### 4. Deleting & Clearing Elements
```javascript
const cache = new Map([
  ["id_1", "data1"],
  ["id_2", "data2"]
]);

// Deleting returns a boolean indicating success
console.log(cache.delete("id_1")); // true
console.log(cache.delete("id_99")); // false (not found)

// Empty entire map
cache.clear();
console.log(cache.size); // 0
```

---

## 3. Any Value as Key: The Power of `Map`

In plain objects, keys are always coerced to strings:
```javascript
// Object Trap:
const obj = {};
const keyA = { id: 1 };
const keyB = { id: 2 };

obj[keyA] = "Value A";
obj[keyB] = "Value B"; // Overwrites keyA because both become "[object Object]"!

console.log(obj[keyA]); // "Value B" ❌
```

With `Map`, references and types are preserved:
```javascript
// Map preserves object references:
const map = new Map();
const key1 = { id: 1 };
const key2 = { id: 2 };

map.set(key1, "User Profile 1");
map.set(key2, "User Profile 2");

console.log(map.get(key1)); // "User Profile 1" ✅
console.log(map.get(key2)); // "User Profile 2" ✅
```

### Key Equality: SameValueZero Algorithm
`Map` determines key equality using the **SameValueZero** algorithm:
- Primitive values (`"hello"`, `42`, `true`) are compared by value.
- Objects and arrays are compared **by reference memory address**, not structure.
- `NaN` is considered equal to `NaN` (unlike strict `===`).
- `+0` and `-0` are considered equal.

```javascript
const equalityMap = new Map();

// 1. NaN works seamlessly as a key
equalityMap.set(NaN, "Not a Number");
console.log(equalityMap.get(NaN)); // "Not a Number"

// 2. Object Reference Trap
equalityMap.set([1, 2], "Array Value");
console.log(equalityMap.get([1, 2])); // undefined ⚠️ (different memory reference!)

// Correct way to use objects as keys:
const myArr = [1, 2];
equalityMap.set(myArr, "Stored Value");
console.log(equalityMap.get(myArr)); // "Stored Value" ✅
```

---

## 4. Iteration Techniques

`Map` preserves the **exact insertion order** of its entries.

### 1. `for...of` Loop (Destructuring)
```javascript
const capitalCities = new Map([
  ["India", "New Delhi"],
  ["Japan", "Tokyo"],
  ["France", "Paris"]
]);

// Iterate over [key, value] pairs
for (const [country, capital] of capitalCities) {
  console.log(`${country} -> ${capital}`);
}
```

### 2. Iterating Keys, Values, or Entries
```javascript
// Keys only
for (const country of capitalCities.keys()) {
  console.log(country);
}

// Values only
for (const capital of capitalCities.values()) {
  console.log(capital);
}

// Entries explicitly
for (const [country, capital] of capitalCities.entries()) {
  console.log(country, capital);
}
```

### 3. `.forEach()` Method
> [!WARNING]
> Note the parameter ordering in `.forEach()`: **`value` comes first**, then **`key`**!
```javascript
capitalCities.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});
```

---

## 5. Conversions: Map $\longleftrightarrow$ Array $\longleftrightarrow$ Object

### 1. Map to Array (and vice-versa)
```javascript
const map = new Map([
  ["a", 1],
  ["b", 2]
]);

// Map -> 2D Array
const arrFromSpread = [...map];         // [ ["a", 1], ["b", 2] ]
const arrFromEntries = Array.from(map);  // [ ["a", 1], ["b", 2] ]

// Extract keys or values to arrays
const keysArr = [...map.keys()];     // ["a", "b"]
const valuesArr = [...map.values()]; // [1, 2]
```

### 2. Map to Object & Object to Map
```javascript
// Object -> Map (using Object.entries)
const userObj = { name: "Mohammad", age: 24 };
const userMap = new Map(Object.entries(userObj));

// Map -> Object (using Object.fromEntries)
const backToObj = Object.fromEntries(userMap);
console.log(backToObj); // { name: "Mohammad", age: 24 }
```

---

## 6. High-Yield DSA Problem Patterns with `Map`

### Pattern 1: Frequency Counter / Character Counter
Count how many times each element appears in $\mathcal{O}(N)$ time:
```javascript
function getFrequencyMap(items) {
  const freq = new Map();

  for (const item of items) {
    // If key exists, increment; otherwise initialize to 1
    freq.set(item, (freq.get(item) || 0) + 1);
  }

  return freq;
}

const word = "programming";
const charCounts = getFrequencyMap(word);

for (const [char, count] of charCounts) {
  console.log(`${char}: ${count}`);
}
```

---

### Pattern 2: Two Sum Problem in $\mathcal{O}(N)$ Time
Find two indices in an array whose values sum to a `target`:
```javascript
function twoSum(nums, target) {
  const numToIndex = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (numToIndex.has(complement)) {
      return [numToIndex.get(complement), i];
    }

    numToIndex.set(nums[i], i);
  }

  return [];
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
```

---

### Pattern 3: First Non-Repeating Character
Using `Map`'s guaranteed insertion order:
```javascript
function firstUniqueChar(str) {
  const freq = new Map();

  // Step 1: Build frequency map
  for (const ch of str) {
    freq.set(ch, (freq.get(ch) || 0) + 1);
  }

  // Step 2: Iterate in insertion order to find first with count 1
  for (const [ch, count] of freq) {
    if (count === 1) {
      return ch;
    }
  }

  return null;
}

console.log(firstUniqueChar("swiss")); // "w" (s:3, w:1, i:1)
```

---

### Pattern 4: Grouping Elements (Group Anagrams)
```javascript
function groupAnagrams(words) {
  const groups = new Map();

  for (const word of words) {
    // Canonical key: sorted letters
    const sortedKey = word.split("").sort().join("");

    if (!groups.has(sortedKey)) {
      groups.set(sortedKey, []);
    }
    groups.get(sortedKey).push(word);
  }

  return Array.from(groups.values());
}

const words = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(words));
// [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]
```

---

## 7. Common Pitfalls & Traps to Avoid

### ⚠️ Trap 1: Using Square Bracket Syntax on a Map
```javascript
const map = new Map();

// ❌ WRONG: This sets an ordinary object property, NOT a Map key!
map["key"] = 100;

console.log(map.has("key")); // false!
console.log(map.size);       // 0! (Map internals are bypassed)

// ✅ CORRECT: Always use .set() and .get()
map.set("key", 100);
console.log(map.has("key")); // true
console.log(map.size);       // 1
```

### ⚠️ Trap 2: Object Key by Literal Reference
```javascript
const map = new Map();

// Literal objects get distinct memory references
map.set({ id: 10 }, "Admin");

// ❌ Searching with a new object literal fails
console.log(map.get({ id: 10 })); // undefined

// ✅ CORRECT: Retain the reference in a variable
const userKey = { id: 10 };
map.set(userKey, "Admin");
console.log(map.get(userKey)); // "Admin"
```

### ⚠️ Trap 3: Callback Argument Order in `.forEach()`
In JavaScript `Array.prototype.forEach` the callback signature is `(element, index)`.  
In `Map.prototype.forEach` the callback signature is:
```javascript
// (VALUE, KEY, MAP) -> Value comes BEFORE Key!
map.forEach((value, key) => {
  // Don't accidentally treat the first parameter as the key!
});
```

---

## 8. Summary & Quick Revision Checklist

1. **Use `Map` when:**
   - Keys are unknown until runtime or are not strings/symbols.
   - You need guaranteed insertion-order traversal.
   - You need fast frequent additions and deletions.
   - You need immediate access to collection size (`map.size`).
2. **Key Methods:** `.set(k, v)`, `.get(k)`, `.has(k)`, `.delete(k)`, `.clear()`.
3. **Looping:** `for (const [key, value] of map)` is the most idiomatic way.
4. **Complexity:** Average $\mathcal{O}(1)$ time for insertions, lookups, and deletions.
