# JavaScript Searching Algorithms: Linear Search

**Searching** is the process of locating a specific element (called the **target** or **key**) within a collection of data (such as an array or string), or determining that the element does not exist.

---

## 📌 Master Feature Reference Table

| Name / Feature | How to use / Syntax | Required Parameter | Optional Parameter | What does each parameter do? | What does it return? | Sample use case |
| --- | --- | --- | --- | --- | --- | --- |
| **Linear Search (Index)** | `linearSearch(arr, target)` | `arr`, `target` | None | Scans array sequentially from index `0` to `n - 1` comparing each element with `target` | **Index (Number)** of first match, or `-1` | Find index of a roll number: `linearSearch(rollNos, 42)` |
| **Linear Search (Boolean)** | `linearSearchExists(arr, target)` | `arr`, `target` | None | Checks if `target` exists anywhere in `arr` | **`true`** or **`false`** | Check if user is in attendance list |
| **Find All Occurrences** | `findAllIndices(arr, target)` | `arr`, `target` | None | Traverses the entire array and collects all matching indices | **Array of indices** | Find all positions of score `100` |
| **Find Max / Min** | `findMax(arr)` / `findMin(arr)` | `arr` | None | Compares each element against current maximum/minimum | The maximum or minimum value | Find highest marks in class |
| **Search in Array of Objects** | `searchByKey(arr, key, val)` | `arr`, `key`, `val` | None | Checks object property `obj[key] === val` for each object | **Matching Object** or `null` | Find student with `id === 101` |
| **Search in 2D Matrix** | `search2D(matrix, target)` | `matrix`, `target` | None | Nested loop scanning rows and columns | `[row, col]` or `[-1, -1]` | Locate target in grid/table |
| **Built-in `indexOf()`** | `arr.indexOf(target, fromIndex)` | `target` | `fromIndex` | Built-in linear search starting from `fromIndex` | **Index** or `-1` | `[10, 20, 30].indexOf(20)` → `1` |
| **Built-in `includes()`** | `arr.includes(target, fromIndex)` | `target` | `fromIndex` | Built-in boolean linear search | **`true`** / **`false`** | `["A", "B"].includes("A")` → `true` |
| **Built-in `find()`** | `arr.find(callback)` | `callback` function | `thisArg` | Returns first element satisfying condition | **Element** or `undefined` | `users.find(u => u.id === 5)` |
| **Built-in `findIndex()`** | `arr.findIndex(callback)` | `callback` function | `thisArg` | Returns index of first element satisfying condition | **Index** or `-1` | `users.findIndex(u => u.role === "admin")` |

---

## 1. Need for Searching

Data is rarely static or pre-arranged. In software development, datasets often arrive in random order.

### Real-World Scenarios:
1. **E-Commerce**: A user searches for `"wireless headphones"` in a product database.
2. **Authentication**: Checking if an entered `email` exists in a user list.
3. **Contact Books**: Finding a friend's phone number by name.
4. **Autocomplete / Search Bars**: Finding items matching typed keystrokes.

Without an efficient searching mechanism, software cannot retrieve, validate, update, or delete information.

---

## 2. Linear Search (Sequential Search)

### What is Linear Search?
**Linear Search** is the simplest searching algorithm. It starts at the **very first element** (index `0`) and compares each element with the target value **one by one in sequence** until:
- A match is found $\rightarrow$ return the index or element.
- The end of the collection is reached without finding a match $\rightarrow$ return `-1` or `false`.

```text
Target: 23
Array:  [ 12,  45,   7,  23,  56,  89 ]
           ▲    ▲    ▲    ▲
Step 1:   12 ≠ 23
Step 2:        45 ≠ 23
Step 3:              7 ≠ 23
Step 4:                  23 == 23  ==> FOUND AT INDEX 3!
```

---

### When to Use Linear Search?
- When the array is **unsorted** (elements are in random order).
- When the dataset is **small to medium-sized**.
- When you only need to search **once** (sorting the array first to use Binary Search would take longer: $O(n \log n)$ vs $O(n)$).
- When searching on data structures without random index access (like Linked Lists).

---

### Complexity Analysis

| Case | Scenario | Time Complexity |
|---|---|---|
| **Best Case** | Target is at index `0` (first element) | $\mathcal{O}(1)$ |
| **Worst Case** | Target is at the very last index, or does not exist at all | $\mathcal{O}(n)$ |
| **Average Case** | Target is somewhere in the middle ($\approx n/2$ comparisons) | $\mathcal{O}(n)$ |
| **Space Complexity** | Auxiliary memory (no extra data structures created) | $\mathcal{O}(1)$ (Constant) |

*(where $n$ is the total number of elements in the array).*

---

## 3. Step-by-Step Dry Run

Let's walk through concrete dry runs to understand exact execution flow.

### Dry Run 1: Target Element Exists
- **Array**: `arr = [15, 8, 42, 4, 16]`
- **Target**: `target = 4`
- **Length**: `n = 5`

| Iteration (`i`) | Current Element `arr[i]` | Condition (`arr[i] === target`) | Result | Action Taken |
|:---:|:---:|:---:|:---:|:---|
| `0` | `15` | `15 === 4` | `false` | Move to next index (`i++`) |
| `1` | `8` | `8 === 4` | `false` | Move to next index (`i++`) |
| `2` | `42` | `42 === 4` | `false` | Move to next index (`i++`) |
| `3` | `4` | `4 === 4` | **`true`** | **Target found! Return index `3` immediately.** |

Total Comparisons: **4**  
Return Value: **`3`**

---

### Dry Run 2: Target Element Does Not Exist
- **Array**: `arr = [10, 20, 30]`
- **Target**: `target = 99`
- **Length**: `n = 3`

| Iteration (`i`) | Current Element `arr[i]` | Condition (`arr[i] === target`) | Result | Action Taken |
|:---:|:---:|:---:|:---:|:---|
| `0` | `10` | `10 === 99` | `false` | Move to next index (`i++`) |
| `1` | `20` | `20 === 99` | `false` | Move to next index (`i++`) |
| `2` | `30` | `30 === 99` | `false` | Move to next index (`i++`) |
| `3` | — | Loop ends (`i < 3` is `false`) | — | Exit loop |

After loop completes without returning:
Return Value: **`-1`**

---

## 4. Implementation

### A. Standard Linear Search (Returns Index)
```javascript
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Early exit as soon as match is found
        }
    }
    return -1; // Target not present in array
}

const numbers = [12, 45, 7, 23, 56, 89];

console.log(linearSearch(numbers, 23)); // 3
console.log(linearSearch(numbers, 100)); // -1
```

---

### B. Boolean Linear Search (Check Existence)
```javascript
function linearSearchExists(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return true;
        }
    }
    return false;
}

console.log(linearSearchExists(["apple", "banana", "mango"], "banana")); // true
console.log(linearSearchExists(["apple", "banana", "mango"], "grape"));  // false
```

---

### C. JavaScript Built-in Linear Search Methods
Under the hood, JavaScript's built-in array search methods execute linear search:

```javascript
const fruits = ["apple", "banana", "orange", "banana"];

// 1. indexOf(): returns first matching index or -1
console.log(fruits.indexOf("banana")); // 1

// 2. lastIndexOf(): linear search backwards from the end
console.log(fruits.lastIndexOf("banana")); // 3

// 3. includes(): returns boolean true/false
console.log(fruits.includes("orange")); // true

// 4. find(): returns first element matching callback condition
const numbers = [5, 12, 8, 130, 44];
const firstOverTen = numbers.find(num => num > 10);
console.log(firstOverTen); // 12

// 5. findIndex(): returns index of first element matching callback
const idx = numbers.findIndex(num => num > 10);
console.log(idx); // 1
```

---

## 5. Problem Solving Using Linear Search

Linear search is not just for finding a single element; its iterative scanning pattern solves many foundational coding interview problems.

### Problem 1: Find Maximum and Minimum in an Array
```javascript
function findMaxAndMin(arr) {
    if (arr.length === 0) return { max: null, min: null };

    let max = arr[0];
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return { max, min };
}

console.log(findMaxAndMin([23, 5, 89, 42, -3, 67]));
// Output: { max: 89, min: -3 }
```

---

### Problem 2: Count Occurrences (Frequency) of Target
```javascript
function countOccurrences(arr, target) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            count++;
        }
    }
    return count;
}

const scores = [10, 20, 10, 30, 10, 40];
console.log(countOccurrences(scores, 10)); // 3
console.log(countOccurrences(scores, 99)); // 0
```

---

### Problem 3: Find All Indices of Target Element
```javascript
function findAllIndices(arr, target) {
    const indices = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            indices.push(i);
        }
    }
    return indices;
}

const letters = ["a", "b", "c", "a", "d", "a"];
console.log(findAllIndices(letters, "a")); // [0, 3, 5]
```

---

### Problem 4: Linear Search in Strings (Character Search)
```javascript
function searchCharacter(str, char) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return i;
        }
    }
    return -1;
}

console.log(searchCharacter("Acciojobs", "j")); // 5
console.log(searchCharacter("Acciojobs", "z")); // -1
```

---

### Problem 5: Search in Array of Objects
```javascript
const students = [
    { id: 101, name: "Rajat", marks: 88 },
    { id: 102, name: "Priya", marks: 95 },
    { id: 103, name: "Amit", marks: 74 }
];

function findStudentById(arr, targetId) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === targetId) {
            return arr[i]; // Return matched student object
        }
    }
    return null; // Not found
}

console.log(findStudentById(students, 102)); 
// Output: { id: 102, name: "Priya", marks: 95 }

console.log(findStudentById(students, 999)); 
// Output: null
```

---

### Problem 6: Search in a 2D Matrix (Grid)
```javascript
function searchMatrix(matrix, target) {
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] === target) {
                return [row, col]; // Found at row, col
            }
        }
    }
    return [-1, -1]; // Not found
}

const grid = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
];

console.log(searchMatrix(grid, 50)); // [1, 1]
console.log(searchMatrix(grid, 99)); // [-1, -1]
```

---

## 6. Summary: Advantages & Limitations

### Advantages:
1. **Simple to understand and implement**.
2. **Works on unsorted data** — no preprocessing or sorting required.
3. **Memory efficient**: Operates with $\mathcal{O}(1)$ auxiliary space.
4. **Works on all linear data structures** (Arrays, Strings, Linked Lists).

### Limitations:
1. **Slow for large datasets**: With 1,000,000 items, worst-case requires 1,000,000 comparisons ($\mathcal{O}(n)$).
2. **Inefficient for repeated searches**: If you search many times on static data, sorting once and using **Binary Search** ($\mathcal{O}(\log n)$) or using a **Hash Map / Object** ($\mathcal{O}(1)$) is significantly faster.
