# JavaScript Sorting Algorithms (Module 2)

**Sorting** is the algorithmic process of arranging data into a predetermined order (typically ascending or descending). Efficient sorting is a fundamental building block in Computer Science because it unlocks logarithmic searching ($\mathcal{O}(\log N)$ Binary Search), fast deduplication, and efficient data analysis.

This guide covers the **elementary sorting algorithms** implemented in this module (`bubble.js`, `selection.js`, `insertion.js`) alongside **custom object comparators** with JavaScript's native `.sort()` (`sorting.js`).

---

## 📌 Master Feature & Algorithm Reference Table

| Algorithm / Feature | File Reference | Core Mechanism | Best Time | Average Time | Worst Time | Space | Stable? | Key Advantage / Use Case |
|---|---|---|:---:|:---:|:---:|:---:|:---:|---|
| **Bubble Sort** | [`bubble.js`](file:///c:/Mohammad/Programming/JS/module2/sorting/bubble.js) | Repeatedly swap adjacent inverted elements | $\mathcal{O}(N)$ *(optimized)* | $\mathcal{O}(N^2)$ | $\mathcal{O}(N^2)$ | $\mathcal{O}(1)$ | **Yes** | Conceptual simplicity; detects already-sorted data in 1 pass. |
| **Selection Sort** | [`selection.js`](file:///c:/Mohammad/Programming/JS/module2/sorting/selection.js) | Select minimum from unsorted portion and place at start | $\mathcal{O}(N^2)$ | $\mathcal{O}(N^2)$ | $\mathcal{O}(N^2)$ | $\mathcal{O}(1)$ | **No** | Minimizes total memory writes (at most $N - 1$ swaps). |
| **Insertion Sort** | [`insertion.js`](file:///c:/Mohammad/Programming/JS/module2/sorting/insertion.js) | Shift greater elements right and insert current into correct slot | $\mathcal{O}(N)$ | $\mathcal{O}(N^2)$ | $\mathcal{O}(N^2)$ | $\mathcal{O}(1)$ | **Yes** | Excellent for small arrays ($N \le 20$) or nearly-sorted data. |
| **Custom Comparator** | [`sorting.js`](file:///c:/Mohammad/Programming/JS/module2/sorting/sorting.js) | Native TimSort with custom 2-argument comparison function `(a, b)` | $\mathcal{O}(N)$ | $\mathcal{O}(N \log N)$ | $\mathcal{O}(N \log N)$ | $\mathcal{O}(N)$ | **Yes** | Production standard for sorting arrays of objects & custom keys. |

---

## 1. Bubble Sort

### Core Intuition
Think of heavier bubbles sinking to the bottom and lighter ones rising to the surface:
- In each pass through the array, compare every adjacent pair `arr[j]` and `arr[j + 1]`.
- If `arr[j] > arr[j + 1]`, swap them.
- After Pass 1, the **largest element** has "bubbled up" to the last position `arr[n - 1]`.
- After Pass 2, the **second largest** settles at `arr[n - 2]`, and so on.

```text
Initial: [5, 3, 8, 4]

Pass 1:
  Compare (5, 3) -> 5 > 3 -> Swap  -> [3, 5, 8, 4]
  Compare (5, 8) -> 5 < 8 -> Keep  -> [3, 5, 8, 4]
  Compare (8, 4) -> 8 > 4 -> Swap  -> [3, 5, 4, 8]  (8 is now at final position)

Pass 2:
  Compare (3, 5) -> 3 < 5 -> Keep  -> [3, 5, 4, 8]
  Compare (5, 4) -> 5 > 4 -> Swap  -> [3, 4, 5, 8]  (5 is now at final position)

Pass 3:
  Compare (3, 4) -> 3 < 4 -> Keep  -> [3, 4, 5, 8]  (Array sorted!)
```

---

### Step-by-Step Dry Run Table
Input: `arr = [5, 3, 8, 4]`, $N = 4$.

| Pass `i` | Inner `j` | Window `arr[j]`, `arr[j+1]` | Condition `arr[j] > arr[j+1]` | Array State After Step |
|:---:|:---:|:---:|:---:|---|
| `0` | `0` | `5`, `3` | `5 > 3` (True) $\rightarrow$ **Swap** | `[3, 5, 8, 4]` |
| `0` | `1` | `5`, `8` | `5 > 8` (False) $\rightarrow$ No swap | `[3, 5, 8, 4]` |
| `0` | `2` | `8`, `4` | `8 > 4` (True) $\rightarrow$ **Swap** | `[3, 5, 4, 8]` |
| `1` | `0` | `3`, `5` | `3 > 5` (False) $\rightarrow$ No swap | `[3, 5, 4, 8]` |
| `1` | `1` | `5`, `4` | `5 > 4` (True) $\rightarrow$ **Swap** | `[3, 4, 5, 8]` |
| `2` | `0` | `3`, `4` | `3 > 4` (False) $\rightarrow$ No swap | `[3, 4, 5, 8]` |

---

### Implementation (`bubble.js`)
```javascript
let arr = [5, 3, 8, 4];

function bubbleSort(arr) {
  if (arr.length <= 1) return arr;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort(arr)); // [3, 4, 5, 8]
```

### ⚡ Optimization: Early Exit with `swapped` Flag
If no elements are swapped during an entire inner loop pass, the array is **already sorted**. Breaking out early achieves optimal **$\mathcal{O}(N)$ Best Case** time:

```javascript
function bubbleSortOptimized(arr) {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    let swapped = false;

    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }

    // If no two elements were swapped in this pass, array is sorted
    if (!swapped) break;
  }

  return arr;
}
```

---

## 2. Selection Sort

### Core Intuition
Selection Sort divides the array into two logical sections:
1. **Sorted Prefix** (left side, initially empty).
2. **Unsorted Suffix** (right side, initially the entire array).

In each iteration `i`:
- Scan the entire unsorted region (`j = i + 1` to `n - 1`) to find the **index of the absolute minimum element** (`min`).
- Swap `arr[min]` with `arr[i]`.
- The sorted prefix expands by 1 element.

```text
Initial: [4, 3, 2, 1, 5]

Pass 0: Minimum in [4, 3, 2, 1, 5] is 1 at index 3 -> Swap with arr[0] -> [1, 3, 2, 4, 5]
Pass 1: Minimum in [3, 2, 4, 5]    is 2 at index 2 -> Swap with arr[1] -> [1, 2, 3, 4, 5]
Pass 2: Minimum in [3, 4, 5]       is 3 at index 2 -> min === i (no swap) -> [1, 2, 3, 4, 5]
Pass 3: Minimum in [4, 5]          is 4 at index 3 -> min === i (no swap) -> [1, 2, 3, 4, 5]
Sorted: [1, 2, 3, 4, 5]
```

---

### Step-by-Step Dry Run Table
Input: `arr = [4, 3, 2, 1, 5]`, $N = 5$.

| Pass `i` | Initial `min` | Inner Comparisons (`j = i+1 ... n-1`) | Final `min` | Swap `arr[i]` $\leftrightarrow$ `arr[min]` | Array After Pass |
|:---:|:---:|---|:---:|:---:|---|
| `0` | `0` (val `4`) | `j=1`: $3<4 \implies \min=1$<br>`j=2`: $2<3 \implies \min=2$<br>`j=3`: $1<2 \implies \min=3$<br>`j=4`: $5<1$ (False) | `3` (val `1`) | `arr[0] (4) <-> arr[3] (1)` | `[1, 3, 2, 4, 5]` |
| `1` | `1` (val `3`) | `j=2`: $2<3 \implies \min=2$<br>`j=3`: $4<2$ (False)<br>`j=4`: $5<2$ (False) | `2` (val `2`) | `arr[1] (3) <-> arr[2] (2)` | `[1, 2, 3, 4, 5]` |
| `2` | `2` (val `3`) | `j=3`: $4<3$ (False)<br>`j=4`: $5<3$ (False) | `2` (val `3`) | `min === i` (Skip swap) | `[1, 2, 3, 4, 5]` |
| `3` | `3` (val `4`) | `j=4`: $5<4$ (False) | `3` (val `4`) | `min === i` (Skip swap) | `[1, 2, 3, 4, 5]` |

---

### Implementation (`selection.js`)
```javascript
let arr = [4, 3, 2, 1, 5];

function selection(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}

console.log(selection(arr)); // [1, 2, 3, 4, 5]
```

> [!NOTE]
> **Why Selection Sort?**  
> While Selection Sort has a fixed $\mathcal{O}(N^2)$ comparison count regardless of input ordering, it makes **at most $N - 1$ swaps**. When writing to flash memory or EEPROM is expensive, Selection Sort is advantageous because memory writes are strictly minimized.

> [!WARNING]
> **Instability Alert:** Selection Sort is **unstable**. Swapping over large distances can disrupt the relative order of duplicate items (e.g. `[4a, 4b, 1]` swaps `4a` with `1`, resulting in `[1, 4b, 4a]`).

---

## 3. Insertion Sort

### Core Intuition
Insertion Sort works just like **sorting a hand of playing cards**:
1. You start with 1 card in hand (a 1-element list is always sorted).
2. Pick up the next card `current = arr[i]`.
3. Compare `current` backwards against already-sorted cards in your hand.
4. Shift cards that are greater than `current` **one position to the right**.
5. Drop `current` into the newly created empty slot (`arr[j + 1] = current`).

```text
Initial: [5, 4, 3, 2, 1, 0]

i = 1 (current = 4):
  5 > 4 -> Shift 5 right -> [5, 5, 3, 2, 1, 0]
  Insert 4 at index 0     -> [4, 5, 3, 2, 1, 0]

i = 2 (current = 3):
  5 > 3 -> Shift 5 right -> [4, 5, 5, 2, 1, 0]
  4 > 3 -> Shift 4 right -> [4, 4, 5, 2, 1, 0]
  Insert 3 at index 0     -> [3, 4, 5, 2, 1, 0]

... Repeating this builds the sorted list progressively from left to right.
```

---

### Step-by-Step Dry Run Table
Input: `arr = [5, 4, 3, 2, 1, 0]`, $N = 6$.

| Step `i` | `current` | Inner While Loop (`j = i - 1`) Shifts | Insertion Index (`j + 1`) | Array State After Step |
|:---:|:---:|---|:---:|---|
| `1` | `4` | `arr[0]` (5) $> 4 \implies$ shift 5 to `arr[1]` | `0` | `[4, 5, 3, 2, 1, 0]` |
| `2` | `3` | `arr[1]` (5) $> 3 \implies$ shift 5 to `arr[2]`<br>`arr[0]` (4) $> 3 \implies$ shift 4 to `arr[1]` | `0` | `[3, 4, 5, 2, 1, 0]` |
| `3` | `2` | Shift 5, 4, 3 each one slot right | `0` | `[2, 3, 4, 5, 1, 0]` |
| `4` | `1` | Shift 5, 4, 3, 2 each one slot right | `0` | `[1, 2, 3, 4, 5, 0]` |
| `5` | `0` | Shift 5, 4, 3, 2, 1 each one slot right | `0` | `[0, 1, 2, 3, 4, 5]` |

---

### Implementation (`insertion.js`)
```javascript
// insertion sort
let arr = [5, 4, 3, 2, 1, 0];

function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;

    // Shift elements of arr[0..i-1] that are greater than current
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    // Place current in its correct position
    arr[j + 1] = current;
  }
  return arr;
}

console.log(insertionSort(arr)); // [0, 1, 2, 3, 4, 5]
```

> [!TIP]
> **Key Strengths of Insertion Sort:**
> - **Adaptive:** If an array is already sorted, the `while` loop never executes, completing in **$\mathcal{O}(N)$ linear time**.
> - **Online Algorithm:** Can sort a list as it receives it piece-by-piece from a live data stream.
> - **Stable:** Equal values maintain their original relative order.

---

## 4. Sorting Objects & Custom Comparators (`sorting.js`)

In real-world JavaScript engineering, datasets rarely consist of plain numbers. You will frequently sort **arrays of objects** retrieved from APIs, databases, or user interactions.

### The Comparator Contract: `compareFn(a, b)`
When calling `arr.sort(comp)`:

```text
comp(a, b) returns:
  < 0  (Negative)  ===> 'a' should come BEFORE 'b' (Keep order)
  === 0 (Zero)     ===> 'a' and 'b' are equal (Preserve relative order)
  > 0  (Positive)  ===> 'b' should come BEFORE 'a' (Swap order)
```

For numbers:
- **Ascending (`a` before `b` if smaller):** `a - b`
- **Descending (`b` before `a` if larger):** `b - a`

---

### Implementation: Sorting Array of Objects by Numeric Property
From [`sorting.js`](file:///c:/Mohammad/Programming/JS/module2/sorting/sorting.js):

```javascript
let obj = [
  { a: 1,  b: "Rajat" },
  { a: 10, b: "rajat1" },
  { a: 9,  b: "rajat3" }
];

function comp(a, b) {
  return a.a - b.a; // Ascending sort by property 'a'
}

console.log(obj.sort(comp));
/*
Output:
[
  { a: 1,  b: 'Rajat' },
  { a: 9,  b: 'rajat3' },
  { a: 10, b: 'rajat1' }
]
*/
```

---

### Advanced Real-World Comparator Patterns

#### 1. Sorting by String Property (`localeCompare`)
Subtraction (`a - b`) fails for strings because `"apple" - "banana"` produces `NaN`. Always use `localeCompare()`:

```javascript
// Alphabetical sorting by string property 'b':
obj.sort((a, b) => a.b.localeCompare(b.b));
```

#### 2. Multi-Level Tie Breaking (Primary + Secondary Sort)
Sort users primarily by **Department**, then break ties by **Salary** (descending):

```javascript
let employees = [
  { dept: "Engineering", salary: 85000 },
  { dept: "Sales",       salary: 60000 },
  { dept: "Engineering", salary: 110000 },
  { dept: "Sales",       salary: 75000 }
];

employees.sort((a, b) => {
  // Primary criteria: Department (Alphabetical)
  let deptComp = a.dept.localeCompare(b.dept);
  if (deptComp !== 0) return deptComp;

  // Secondary criteria: Salary (Highest first)
  return b.salary - a.salary;
});

console.log(employees);
/*
[
  { dept: 'Engineering', salary: 110000 },
  { dept: 'Engineering', salary: 85000 },
  { dept: 'Sales',       salary: 75000 },
  { dept: 'Sales',       salary: 60000 }
]
*/
```

#### 3. Mutation-Safe Sorting (`toSorted` / Spread)
`Array.prototype.sort()` mutates the original array in-place. To maintain immutability:

```javascript
// Method 1: Using ES2023 Array.prototype.toSorted()
const sortedCopy = obj.toSorted((a, b) => a.a - b.a);

// Method 2: Spread copy
const safeCopy = [...obj].sort((a, b) => a.a - b.a);
```

---

## 5. Algorithmic Comparison & Trade-Off Matrix

| Metric | Bubble Sort | Selection Sort | Insertion Sort | JavaScript Built-in `.sort()` |
|---|:---:|:---:|:---:|:---:|
| **Best Case Time** | $\mathcal{O}(N)$ *(with flag)* | $\mathcal{O}(N^2)$ | $\mathcal{O}(N)$ | $\mathcal{O}(N)$ *(TimSort)* |
| **Average Case Time** | $\mathcal{O}(N^2)$ | $\mathcal{O}(N^2)$ | $\mathcal{O}(N^2)$ | $\mathcal{O}(N \log N)$ |
| **Worst Case Time** | $\mathcal{O}(N^2)$ | $\mathcal{O}(N^2)$ | $\mathcal{O}(N^2)$ | $\mathcal{O}(N \log N)$ |
| **Space Complexity** | $\mathcal{O}(1)$ | $\mathcal{O}(1)$ | $\mathcal{O}(1)$ | $\mathcal{O}(N)$ *(auxiliary stack)* |
| **Stability** | **Stable** | **Unstable** | **Stable** | **Stable** |
| **Total Swaps (Worst)** | $\frac{N(N - 1)}{2}$ | $\le N - 1$ | 0 (uses element shifts) | Varies |
| **Best When...** | Concept demonstration or checking if array is sorted | Writes to disk/flash memory are costly | Array is nearly sorted or very small ($N < 25$) | Production applications |

---

## 6. Interview Quick Revision & Rules of Thumb

1. **"Why does `[10, 2].sort()` output `[10, 2]`?"**  
   Because default `.sort()` converts items to strings and compares UTF-16 character codes (`'1'` comes before `'2'`). Always pass `(a, b) => a - b` for numeric sorting.
2. **"Which elementary algorithm is best for a nearly-sorted list?"**  
   **Insertion Sort** ($\mathcal{O}(N)$ linear time).
3. **"Which sorting algorithm guarantees the minimum number of swaps?"**  
   **Selection Sort** (at most $N - 1$ swaps in all cases).
4. **"What is a Stable Sort?"**  
   A sorting algorithm is stable if two elements with equal keys appear in the output array in the exact same relative order as they were in the input array.
5. **"How does modern JavaScript `.sort()` work under the hood?"**  
   V8 and modern JS engines use **TimSort** (a hybrid of Merge Sort and Insertion Sort), which is $\mathcal{O}(N \log N)$ worst-case and stable.

