# JavaScript Binary Search Algorithm (Module 2)

**Binary Search** is an optimal search algorithm designed for **sorted collections**. It operates on the principle of **Divide and Conquer**, repeatedly halving the search interval by comparing the target value against the middle element.

> [!IMPORTANT]
> **Prerequisite:** The input array **MUST be sorted** (either ascending or descending). If the array is unsorted, Linear Search must be used, or the array must be sorted first ($\mathcal{O}(N \log N)$).

---

## 📌 Master Feature Reference Table

| Concept / Pattern | Syntax / Approach | Condition / Pointers | Time Complexity | Space Complexity | Description & Use Case |
|---|---|---|---|---|---|
| **Standard Binary Search** | `binarySearch(arr, target)` | `start <= end`<br>`mid = Math.floor(start + (end - start) / 2)` | $\mathcal{O}(\log N)$ | $\mathcal{O}(1)$ | Returns the index of `target`, or `-1` if absent. |
| **Recursive Binary Search** | `binarySearchRec(arr, target, start, end)` | Base case: `start > end`<br>Recurse left/right half | $\mathcal{O}(\log N)$ | $\mathcal{O}(\log N)$ | Functional/recursive divide-and-conquer using call stack. |
| **First Occurrence (Lower Bound)** | `findFirstOccurrence(arr, target)` | `if (arr[mid] === target) ans = mid; end = mid - 1;` | $\mathcal{O}(\log N)$ | $\mathcal{O}(1)$ | Finds leftmost index of a duplicated element. |
| **Last Occurrence (Upper Bound)** | `findLastOccurrence(arr, target)` | `if (arr[mid] === target) ans = mid; start = mid + 1;` | $\mathcal{O}(\log N)$ | $\mathcal{O}(1)$ | Finds rightmost index of a duplicated element. |
| **Element Frequency Count** | `countOccurrences(arr, target)` | `last - first + 1` | $\mathcal{O}(\log N)$ | $\mathcal{O}(1)$ | Total frequency of target in sorted array without scanning. |
| **Search Insert Position** | `searchInsert(arr, target)` | Return `start` after loop finishes | $\mathcal{O}(\log N)$ | $\mathcal{O}(1)$ | Finds the index where `target` should be inserted to maintain order. |
| **Floor of Target** | `findFloor(arr, target)` | Largest element $\le target$<br>`ans = arr[mid]; start = mid + 1;` | $\mathcal{O}(\log N)$ | $\mathcal{O}(1)$ | Finds highest value in array smaller than or equal to target. |
| **Ceil of Target** | `findCeil(arr, target)` | Smallest element $\ge target$<br>`ans = arr[mid]; end = mid - 1;` | $\mathcal{O}(\log N)$ | $\mathcal{O}(1)$ | Finds lowest value in array greater than or equal to target. |
| **Order-Agnostic BS** | `orderAgnosticBS(arr, target)` | Check `arr[0] < arr[arr.length - 1]` | $\mathcal{O}(\log N)$ | $\mathcal{O}(1)$ | Handles both ascending and descending sorted arrays dynamically. |
| **2D Matrix Binary Search** | `searchMatrix(matrix, target)` | Treat $N \times M$ grid as 1D array:<br>`row = Math.floor(mid / M)`, `col = mid % M` | $\mathcal{O}(\log(N \times M))$ | $\mathcal{O}(1)$ | Searches in a sorted 2D grid where each row is continued on the next. |
| **Integer Square Root** | `integerSquareRoot(n)` | Binary search search space `[1, n]` where `mid * mid <= n` | $\mathcal{O}(\log N)$ | $\mathcal{O}(1)$ | Finds $\lfloor\sqrt{N}\rfloor$ without using `Math.sqrt()`. |

---

## 1. Core Intuition: Divide & Conquer

### The Dictionary / Phonebook Analogy
Imagine looking up the word **"Mango"** in an English dictionary:
1. You do **not** flip through every single page from letter 'A' onwards (that would be **Linear Search** $\mathcal{O}(N)$).
2. Instead, you open the book roughly in the **middle**.
3. If you land on letter **'P'**, you know "M" comes before "P". You completely discard the entire right half of the book.
4. You now repeat the process on the remaining left half.

By discarding **half** of the remaining search space at every single step, even a collection of **1,000,000** elements can be searched in at most **20 comparisons** ($\log_2(10^6) \approx 19.93$).

```text
Step 0:  [ 2,  5,  8, 12, 16, 23, 38, 56, 72, 91 ]  (Target = 23)
           ▲                  ▲                  ▲
         start               mid                end
         mid element is 16 < 23 -> Discard left half, move start = mid + 1

Step 1:                     [ 23, 38, 56, 72, 91 ]
                              ▲       ▲        ▲
                            start    mid      end
                            mid element is 56 > 23 -> Discard right half, move end = mid - 1

Step 2:                     [ 23, 38 ]
                              ▲   ▲
                            start end
                             mid
                            mid element is 23 === 23 -> MATCH FOUND!
```

---

## 2. Mathematical Complexity Analysis

### Time Complexity Derivation
At each iteration, the remaining search window of size $N$ is halved:
$$\frac{N}{2^0} \longrightarrow \frac{N}{2^1} \longrightarrow \frac{N}{2^2} \longrightarrow \frac{N}{2^3} \longrightarrow \dots \longrightarrow \frac{N}{2^k} = 1$$

Setting $\frac{N}{2^k} = 1$:
$$2^k = N \implies k = \log_2 N$$

Therefore, the maximum number of iterations $k$ is directly proportional to $\log_2 N$.

| Case | Scenario | Time Complexity | Comparisons ($N = 10^6$) |
|---|---|:---:|:---:|
| **Best Case** | Target is located exactly at initial `mid` | $\mathcal{O}(1)$ | **1** |
| **Worst Case** | Target is at extreme ends or not present at all | $\mathcal{O}(\log N)$ | $\approx \mathbf{20}$ |
| **Average Case** | Target found after arbitrary splits | $\mathcal{O}(\log N)$ | $\approx \mathbf{20}$ |
| **Space Complexity (Iterative)** | In-place pointers (`start`, `mid`, `end`) | $\mathcal{O}(1)$ | Constant memory |
| **Space Complexity (Recursive)** | Call stack frames for recursive splits | $\mathcal{O}(\log N)$ | Auxiliary stack space |

---

## 3. Step-by-Step Dry Runs

### Dry Run 1: Target Exists (`target = 23`)
`arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]`, Length $N = 10$.

| Step | `start` | `end` | `mid` formula | `mid` | `arr[mid]` | Comparison with `target (23)` | Next Action |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---|
| **1** | `0` | `9` | $\lfloor 0 + \frac{9 - 0}{2} \rfloor$ | `4` | `16` | $16 < 23$ | Target is greater $\rightarrow$ `start = mid + 1` (`5`) |
| **2** | `5` | `9` | $\lfloor 5 + \frac{9 - 5}{2} \rfloor$ | `7` | `56` | $56 > 23$ | Target is smaller $\rightarrow$ `end = mid - 1` (`6`) |
| **3** | `5` | `6` | $\lfloor 5 + \frac{6 - 5}{2} \rfloor$ | `5` | `23` | $23 === 23$ | **Target matched! Return index `5`.** |

- **Total Comparisons:** 3
- **Result:** Index `5`

---

### Dry Run 2: Target Does Not Exist (`target = 40`)
`arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]`, Length $N = 10$.

| Step | `start` | `end` | `mid` | `arr[mid]` | Comparison with `target (40)` | Next Action |
|:---:|:---:|:---:|:---:|:---:|:---:|:---|
| **1** | `0` | `9` | `4` | `16` | $16 < 40$ | `start = mid + 1` (`5`) |
| **2** | `5` | `9` | `7` | `56` | $56 > 40$ | `end = mid - 1` (`6`) |
| **3** | `5` | `6` | `5` | `23` | $23 < 40$ | `start = mid + 1` (`6`) |
| **4** | `6` | `6` | `6` | `38` | $38 < 40$ | `start = mid + 1` (`7`) |
| **5** | `7` | `6` | — | — | **Condition `start <= end` (`7 <= 6`) fails!** | **Loop terminates. Return `-1`.** |

- **Total Comparisons:** 4
- **Result:** `-1` (Not found)

---

## 4. Canonical Implementations in JavaScript

### 1. Iterative Binary Search (Standard & Production Choice)
```javascript
/**
 * Searches for a target value within a sorted ascending array.
 * @param {number[]} arr - Ascending sorted array.
 * @param {number} target - The value to locate.
 * @returns {number} The index of target if found, otherwise -1.
 */
function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    // Overflow-safe midpoint calculation
    let mid = Math.floor(start + (end - start) / 2);

    if (arr[mid] === target) {
      return mid; // Target found
    } else if (arr[mid] < target) {
      start = mid + 1; // Target lies in right half
    } else {
      end = mid - 1; // Target lies in left half
    }
  }

  return -1; // Target not found
}

// Example:
const numbers = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
console.log(binarySearch(numbers, 23)); // 5
console.log(binarySearch(numbers, 40)); // -1
```

---

### 2. Recursive Binary Search
```javascript
/**
 * Recursive divide-and-conquer implementation.
 * @param {number[]} arr - Ascending sorted array.
 * @param {number} target - Target value.
 * @param {number} start - Lower bound index.
 * @param {number} end - Upper bound index.
 * @returns {number} Index of target or -1.
 */
function binarySearchRecursive(arr, target, start = 0, end = arr.length - 1) {
  // Base case: Search space exhausted
  if (start > end) {
    return -1;
  }

  let mid = Math.floor(start + (end - start) / 2);

  if (arr[mid] === target) {
    return mid;
  }

  if (arr[mid] < target) {
    return binarySearchRecursive(arr, target, mid + 1, end);
  }

  return binarySearchRecursive(arr, target, start, mid - 1);
}
```

---

## 5. Critical Edge Cases & Common Pitfalls

### 1. Why `Math.floor(start + (end - start) / 2)` instead of `(start + end) / 2`?
- **Integer Division in JS:** JavaScript numbers are 64-bit floating point by default. Without `Math.floor()`, `(0 + 3) / 2` evaluates to `1.5` (an invalid array index).
- **Integer Overflow Guard:** In languages like C++/Java, `start + end` can exceed $2^{31} - 1$. While JS handles larger safe integers (`Number.MAX_SAFE_INTEGER = 2^{53} - 1`), writing `start + (end - start) / 2` is the universal, bug-free competitive programming standard.

### 2. Loop Condition: `start <= end` vs `start < end`
- **Use `start <= end`** when looking for an exact match. When `start === end`, there is still **one single candidate element** remaining that must be tested.
- If you use `start < end`, the loop stops prematurely and fails to evaluate single-element arrays (e.g., `[5]` with `target = 5`).

### 3. Pointer Updates: `mid + 1` / `mid - 1` vs `mid`
- **Never write** `start = mid` or `end = mid`.
- If the current `arr[mid]` is not equal to `target`, `mid` itself is ruled out.
- Failing to adjust by $\pm 1$ causes **infinite loops** when `start` and `end` converge (e.g., when `end - start === 1`).

---

## 6. Advanced Patterns & High-Yield Variations

### Pattern A: First and Last Occurrences (Handling Duplicates)
In a sorted array with duplicate elements, standard Binary Search may land on any duplicate. To find the exact boundaries:

```javascript
/**
 * Finds the first (leftmost) occurrence index of target.
 */
function findFirstOccurrence(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let result = -1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (arr[mid] === target) {
      result = mid;       // Potential answer recorded
      end = mid - 1;      // Keep searching in LEFT half
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return result;
}

/**
 * Finds the last (rightmost) occurrence index of target.
 */
function findLastOccurrence(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let result = -1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (arr[mid] === target) {
      result = mid;       // Potential answer recorded
      start = mid + 1;    // Keep searching in RIGHT half
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return result;
}

// Example:
const dupes = [2, 4, 4, 4, 6, 7];
console.log(findFirstOccurrence(dupes, 4)); // 1
console.log(findLastOccurrence(dupes, 4));  // 3
```

---

### Pattern B: Count Occurrences in $\mathcal{O}(\log N)$
Instead of scanning sequentially ($\mathcal{O}(N)$), compute the count directly using the boundaries:

```javascript
function countOccurrences(arr, target) {
  const first = findFirstOccurrence(arr, target);
  if (first === -1) return 0;
  const last = findLastOccurrence(arr, target);
  return last - first + 1;
}

console.log(countOccurrences([2, 4, 4, 4, 6, 7], 4)); // 3 - 1 + 1 = 3
```

---

### Pattern C: Floor and Ceiling of a Number
- **Floor:** The greatest element in `arr` that is $\le target$.
- **Ceil:** The smallest element in `arr` that is $\ge target$.

```javascript
function findFloor(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let floor = -1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (arr[mid] === target) {
      return arr[mid];
    } else if (arr[mid] < target) {
      floor = arr[mid]; // arr[mid] is a valid candidate
      start = mid + 1;  // Look for an even larger valid candidate
    } else {
      end = mid - 1;
    }
  }

  return floor;
}

function findCeil(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let ceil = -1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (arr[mid] === target) {
      return arr[mid];
    } else if (arr[mid] > target) {
      ceil = arr[mid];  // arr[mid] is a valid candidate
      end = mid - 1;    // Look for an even smaller valid candidate
    } else {
      start = mid + 1;
    }
  }

  return ceil;
}

const list = [1, 2, 8, 10, 10, 12, 19];
console.log(findFloor(list, 5)); // 2
console.log(findCeil(list, 5));  // 8
```

---

### Pattern D: Search Insert Position
Determines the index where `target` should be placed if it is not found (LeetCode #35):

```javascript
function searchInsert(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  // When loop terminates, `start` always points to the exact insert position!
  return start;
}

console.log(searchInsert([1, 3, 5, 6], 5)); // 2
console.log(searchInsert([1, 3, 5, 6], 2)); // 1
console.log(searchInsert([1, 3, 5, 6], 7)); // 4
console.log(searchInsert([1, 3, 5, 6], 0)); // 0
```

---

### Pattern E: Order-Agnostic Binary Search
When an array is sorted, but you don't know whether it is in **ascending** or **descending** order:

```javascript
function orderAgnosticBS(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  // Determine sorting order
  const isAscending = arr[start] < arr[end];

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    if (isAscending) {
      if (arr[mid] < target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    } else {
      // Descending logic: larger numbers are on the left
      if (arr[mid] < target) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }

  return -1;
}

console.log(orderAgnosticBS([1, 3, 5, 7, 9], 7));  // 3 (Ascending)
console.log(orderAgnosticBS([9, 7, 5, 3, 1], 7));  // 1 (Descending)
```

---

### Pattern F: Binary Search on 2D Matrix ($N \times M$)
If a 2D matrix of shape $N \times M$ is sorted row-by-row (such that the last element of row $i$ is smaller than the first element of row $i+1$), it can be treated as a single continuous 1D sorted array of length $N \times M$:

$$\text{row} = \lfloor \text{mid} / M \rfloor, \quad \text{col} = \text{mid} \pmod M$$

```javascript
function searchMatrix(matrix, target) {
  if (!matrix || matrix.length === 0) return false;

  const rows = matrix.length;
  const cols = matrix[0].length;
  let start = 0;
  let end = rows * cols - 1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    let row = Math.floor(mid / cols);
    let col = mid % cols;
    let val = matrix[row][col];

    if (val === target) {
      return true;
    } else if (val < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return false;
}

const matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 60]
];
console.log(searchMatrix(matrix, 3));  // true
console.log(searchMatrix(matrix, 13)); // false
```

---

### Pattern G: Binary Search on Answer Space (Integer Square Root)
Binary Search is not limited to indices in an array—it can be applied to any **monotonic mathematical search space** $[1, N]$:

```javascript
/**
 * Computes floor(sqrt(x)) without Math.sqrt().
 * Search space: [1, x]
 */
function mySqrt(x) {
  if (x === 0 || x === 1) return x;

  let start = 1;
  let end = x;
  let ans = 1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (mid * mid === x) {
      return mid;
    } else if (mid * mid < x) {
      ans = mid;        // mid is a valid floor candidate
      start = mid + 1;  // Try to find a larger candidate
    } else {
      end = mid - 1;
    }
  }

  return ans;
}

console.log(mySqrt(16)); // 4
console.log(mySqrt(27)); // 5 (5 * 5 = 25 <= 27)
```

---

## 7. Linear Search vs. Binary Search: The Showdown

| Dimension | Linear Search | Binary Search |
|---|---|---|
| **Array Precondition** | Works on **Unsorted** or Sorted data | **Must be Sorted** |
| **Data Structure Access** | Sequential access allowed (Arrays, Linked Lists) | Requires **Random Index Access** $\mathcal{O}(1)$ |
| **Best Case Time** | $\mathcal{O}(1)$ (element at index 0) | $\mathcal{O}(1)$ (element at middle) |
| **Worst Case Time** | $\mathcal{O}(N)$ (element at end or absent) | $\mathcal{O}(\log_2 N)$ |
| **Operations for $N = 10^6$** | Up to **1,000,000** iterations | At most **20** iterations |
| **Code Simplicity** | Extremely simple 1-loop scan | Requires careful pointer calculations |
| **When to Choose?** | Single lookup on unsorted array, small arrays ($N \le 10$) | Large datasets, repeated lookups, sorted data |

---

## 8. Quick Revision Checklist & Interview Rules of Thumb

1. **Check Sorting First:** If the problem doesn't mention the array is sorted, think if sorting it first ($\mathcal{O}(N \log N)$) makes multiple binary searches ($\mathcal{O}(Q \log N)$) worthwhile.
2. **Always Use `Math.floor()`:** In JavaScript, integer division requires explicit flooring: `Math.floor(start + (end - start) / 2)`.
3. **Guard Boundary Updates:** Always increment/decrement past `mid`: `start = mid + 1` or `end = mid - 1`.
4. **Recognize Search on Answer:** Whenever a problem asks for *"minimum time"*, *"maximum capacity"*, *"closest value"*, or *"k-th smallest"*, check if the answer space is monotonic—if it is, apply Binary Search!
