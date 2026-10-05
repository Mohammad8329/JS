# JavaScript Sorting Algorithms: Complete Guide

**Sorting** is the process of arranging elements of a collection into a specific order (typically ascending or descending).

---

## 📌 Master Feature Reference Table

| Name / Feature | How to use / Syntax | Required Parameter | Optional Parameter | What does each parameter do? | What does it return? | Sample use case |
| --- | --- | --- | --- | --- | --- | --- |
| **Default `sort()`** | `arr.sort()` | None | `compareFn` | Converts elements to strings and compares their UTF-16 code units (lexicographical order) | **Same Array** (mutated in-place) | Alphabetical sorting: `["b", "a"].sort()` → `["a", "b"]` |
| **Numerical Ascending** | `arr.sort((a, b) => a - b)` | `compareFn` | None | Returns negative if `a < b`, positive if `a > b`, zero if equal | **Same Array** sorted in ascending order | `[10, 2, 5].sort((a, b) => a - b)` → `[2, 5, 10]` |
| **Numerical Descending** | `arr.sort((a, b) => b - a)` | `compareFn` | None | Reverses subtraction logic to place larger elements first | **Same Array** sorted in descending order | `[10, 2, 5].sort((a, b) => b - a)` → `[10, 5, 2]` |
| **String `localeCompare()`** | `arr.sort((a, b) => a.localeCompare(b))` | `compareFn` | None | Correctly handles localized alphabets, accents, and case rules | **Same Array** sorted alphabetically | `["banana", "apple"].sort((a, b) => a.localeCompare(b))` |
| **Sort Array of Objects** | `arr.sort((a, b) => a.age - b.age)` | `compareFn` | None | Compares specified object properties | **Same Array** of objects sorted | Sort students by marks or employees by salary |
| **Non-Mutating Sort** | `[...arr].sort((a, b) => a - b)` or `arr.toSorted()` | None | `compareFn` | Creates a copy first (or uses ES2023 `toSorted`) to avoid mutating original | **New sorted Array** | Sort data without modifying original dataset |
| **Bubble Sort** | `bubbleSort(arr)` | `arr` | None | Repeatedly steps through list, comparing adjacent items and swapping them if out of order | **Sorted Array** in-place | Educational elementary sorting with early exit |
| **Selection Sort** | `selectionSort(arr)` | `arr` | None | Repeatedly finds minimum from unsorted sublist and moves it to the beginning | **Sorted Array** in-place | Minimal memory swaps ($O(n)$ writes) |
| **Insertion Sort** | `insertionSort(arr)` | `arr` | None | Builds sorted array one element at a time by inserting each item into its correct slot | **Sorted Array** in-place | Optimal for small or nearly sorted arrays |

---

## 1. Need for Sorting

Searching unsorted data requires Linear Search ($\mathcal{O}(n)$). But once data is sorted:
1. **Enables Binary Search**: Searching shrinks from $\mathcal{O}(n)$ to $\mathcal{O}(\log n)$ (e.g. searching 1,000,000 items takes only ~20 comparisons).
2. **E-Commerce & User Interfaces**: Filtering products by price (low to high), rating (high to low), or release date.
3. **Analytics & Aggregations**: Finding medians, highest/lowest percentiles, or eliminating duplicates efficiently.
4. **Leaderboards & Gaming**: Ranking players by high scores.

---

## 2. The JavaScript Built-in `.sort()` & The "10 vs 2" Problem

A notorious quirk in JavaScript trips up almost every beginner:

```javascript
let arr = [2, 10, 1, 20];
console.log(arr.sort()); 
// ❌ Output: [1, 10, 2, 20]  (Wait! Why is 10 before 2?)
```

### Why does this happen?
By default, `Array.prototype.sort()` **converts all elements into strings** and compares their UTF-16 character codes alphabetically (lexicographically):
- `'10'` starts with `'1'`, and `'2'` starts with `'2'`.
- In character codes, `'1'` (`49`) comes before `'2'` (`50`).
- Therefore, `'10'` is placed before `'2'`, just like `"apple"` comes before `"banana"`!

---

### The Fix: Providing a Compare Function `(a, b)`

To sort numbers numerically, you **must provide a comparator function**:
```javascript
arr.sort((a, b) => a - b);
```

#### How the Compare Function Works:
The compare function takes two arguments `(a, b)`:

| Return Value of `compareFn(a, b)` | Meaning | Sorting Decision |
|---|---|---|
| **Negative number (`< 0`)** | `a` is smaller than `b` | Keep `a` before `b` |
| **Positive number (`> 0`)** | `a` is greater than `b` | Swap! Put `b` before `a` |
| **Zero (`=== 0`)** | `a` and `b` are equal | Leave order unchanged |

```javascript
let numbers = [2, 10, 1, 20];

// Ascending order (Smallest to Largest):
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 2, 10, 20]

// Descending order (Largest to Smallest):
numbers.sort((a, b) => b - a);
console.log(numbers); // [20, 10, 2, 1]
```

> ⚠️ **Important Mutation Warning:** `.sort()` modifies the **original array in place**. To keep the original array unchanged, clone it first using spread `[...arr].sort(...)` or use the modern ES2023 method `arr.toSorted(...)`.

---

## 3. Elementary Sorting Algorithms

While built-in `.sort()` is used in production (implemented via TimSort under the hood), interviews and computer science curricula heavily test the mechanics of fundamental sorting algorithms:
1. **Bubble Sort**
2. **Selection Sort**
3. **Insertion Sort**

---

## 4. Bubble Sort

### Concept:
In **Bubble Sort**, adjacent elements are compared. If the left element is greater than the right element, they are swapped.  
With each complete pass, the **largest unsorted element "bubbles up"** to its correct position at the end of the array.

---

### Step-by-Step Dry Run:
- **Array**: `[5, 1, 4, 2, 8]`
- **Pass 1 ($i = 0$):**
  - Compare `5` & `1` $\rightarrow$ $5 > 1$ $\rightarrow$ Swap $\rightarrow$ `[1, 5, 4, 2, 8]`
  - Compare `5` & `4` $\rightarrow$ $5 > 4$ $\rightarrow$ Swap $\rightarrow$ `[1, 4, 5, 2, 8]`
  - Compare `5` & `2` $\rightarrow$ $5 > 2$ $\rightarrow$ Swap $\rightarrow$ `[1, 4, 2, 5, 8]`
  - Compare `5` & `8` $\rightarrow$ $5 < 8$ $\rightarrow$ No swap $\rightarrow$ `[1, 4, 2, 5, 8]`  
  *(Largest element `8` is now in its final position at the end!)*
- **Pass 2 ($i = 1$):**
  - Compare `1` & `4` $\rightarrow$ No swap $\rightarrow$ `[1, 4, 2, 5, 8]`
  - Compare `4` & `2` $\rightarrow$ $4 > 2$ $\rightarrow$ Swap $\rightarrow$ `[1, 2, 4, 5, 8]`
  - Compare `4` & `5` $\rightarrow$ No swap $\rightarrow$ `[1, 2, 4, 5, 8]`  
  *(Element `5` is now sorted!)*
- **Pass 3 ($i = 2$):**
  - No swaps occur $\rightarrow$ Array is completely sorted $\rightarrow$ Exit early!

---

### Optimized Bubble Sort Implementation:
```javascript
function bubbleSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let swapped = false; // Optimization for early exit

        // Last i elements are already in place
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap adjacent elements
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }

        // If no swaps occurred in this pass, array is already sorted!
        if (!swapped) break;
    }

    return arr;
}

console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90]));
// Output: [11, 12, 22, 25, 34, 64, 90]
```

### Complexity Analysis:
- **Best Case (Already Sorted):** $\mathcal{O}(n)$ (due to the `swapped` flag early exit)
- **Worst Case (Reverse Sorted):** $\mathcal{O}(n^2)$
- **Average Case:** $\mathcal{O}(n^2)$
- **Space Complexity:** $\mathcal{O}(1)$ (in-place)

---

## 5. Selection Sort

### Concept:
**Selection Sort** divides the array into two parts: a sorted subarray and an unsorted subarray.  
In each pass, it finds the **minimum element** in the unsorted subarray and swaps it with the **first unsorted element**, growing the sorted subarray by one.

---

### Step-by-Step Dry Run:
- **Array**: `[29, 10, 14, 37, 13]`
- **Pass 0:** Find min from index `0` to `4`: min is `10` at index `1`. Swap `arr[0]` and `arr[1]` $\rightarrow$ `[10, 29, 14, 37, 13]`
- **Pass 1:** Find min from index `1` to `4`: min is `13` at index `4`. Swap `arr[1]` and `arr[4]` $\rightarrow$ `[10, 13, 14, 37, 29]`
- **Pass 2:** Find min from index `2` to `4`: min is `14` at index `2`. Already at index `2` $\rightarrow$ `[10, 13, 14, 37, 29]`
- **Pass 3:** Find min from index `3` to `4`: min is `29` at index `4`. Swap `arr[3]` and `arr[4]` $\rightarrow$ `[10, 13, 14, 29, 37]`
- **Result:** `[10, 13, 14, 29, 37]`

---

### Selection Sort Implementation:
```javascript
function selectionSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        // Find the index of the minimum element in the remaining unsorted array
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Swap minimum element with first unsorted element
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    return arr;
}

console.log(selectionSort([29, 10, 14, 37, 13]));
// Output: [10, 13, 14, 29, 37]
```

### Complexity Analysis:
- **Best Case:** $\mathcal{O}(n^2)$
- **Worst Case:** $\mathcal{O}(n^2)$
- **Average Case:** $\mathcal{O}(n^2)$
- **Space Complexity:** $\mathcal{O}(1)$ (in-place)
- **Key Advantage:** Makes at most $\mathcal{O}(n)$ swaps (useful when writing to memory is expensive).

---

## 6. Insertion Sort

### Concept:
**Insertion Sort** works the way you sort playing cards in your hand.  
You take one element at a time from the unsorted portion and **insert it into its correct position** within the already-sorted portion by shifting larger elements one position to the right.

---

### Step-by-Step Dry Run:
- **Array**: `[12, 11, 13, 5, 6]`
- **$i = 1$ (`key = 11`):** $12 > 11 \rightarrow$ shift `12` right $\rightarrow$ insert `11` at index `0` $\rightarrow$ `[11, 12, 13, 5, 6]`
- **$i = 2$ (`key = 13`):** $12 < 13 \rightarrow$ no shift $\rightarrow$ `[11, 12, 13, 5, 6]`
- **$i = 3$ (`key = 5`):** Shift `13`, `12`, `11` right $\rightarrow$ insert `5` at index `0` $\rightarrow$ `[5, 11, 12, 13, 6]`
- **$i = 4$ (`key = 6`):** Shift `13`, `12`, `11` right $\rightarrow$ insert `6` at index `1` $\rightarrow$ `[5, 6, 11, 12, 13]`

---

### Insertion Sort Implementation:
```javascript
function insertionSort(arr) {
    let n = arr.length;

    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;

        // Move elements of arr[0..i-1] that are greater than key one position ahead
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = key;
    }

    return arr;
}

console.log(insertionSort([12, 11, 13, 5, 6]));
// Output: [5, 6, 11, 12, 13]
```

### Complexity Analysis:
- **Best Case (Already Sorted):** $\mathcal{O}(n)$
- **Worst Case (Reverse Sorted):** $\mathcal{O}(n^2)$
- **Average Case:** $\mathcal{O}(n^2)$
- **Space Complexity:** $\mathcal{O}(1)$ (in-place)
- **Key Advantage:** Extremely efficient for small arrays ($n \le 20$) and nearly-sorted datasets.

---

## 7. Real-World Problem: Sorting Arrays of Objects

In real applications, data is almost always structured as an **Array of Objects**:

```javascript
const employees = [
    { name: "Aman", age: 28, salary: 55000 },
    { name: "Priya", age: 24, salary: 72000 },
    { name: "Rajat", age: 30, salary: 48000 },
    { name: "Deepak", age: 26, salary: 72000 }
];

// 1. Sort by Salary (Ascending):
employees.sort((a, b) => a.salary - b.salary);
console.log("By Salary Ascending:", employees);

// 2. Sort Alphabetically by Name using localeCompare():
employees.sort((a, b) => a.name.localeCompare(b.name));
console.log("Alphabetical by Name:", employees);

// 3. Multi-level Sort: Sort by Salary (Descending), then by Age (Ascending):
employees.sort((a, b) => {
    if (b.salary !== a.salary) {
        return b.salary - a.salary; // Higher salary first
    }
    return a.age - b.age; // If salary is equal, younger first
});
console.log("Multi-level Sorted:", employees);
```

---

## 8. Summary Comparison of Elementary Sorting Algorithms

| Algorithm | Best Time | Average Time | Worst Time | Space | Stable? | Best Used When |
|---|---|---|---|---|---|---|
| **Bubble Sort** | $\mathcal{O}(n)$ | $\mathcal{O}(n^2)$ | $\mathcal{O}(n^2)$ | $\mathcal{O}(1)$ | Yes | Teaching basic sorting, detecting if list is already sorted |
| **Selection Sort** | $\mathcal{O}(n^2)$ | $\mathcal{O}(n^2)$ | $\mathcal{O}(n^2)$ | $\mathcal{O}(1)$ | No | Memory write operations are very expensive |
| **Insertion Sort** | $\mathcal{O}(n)$ | $\mathcal{O}(n^2)$ | $\mathcal{O}(n^2)$ | $\mathcal{O}(1)$ | Yes | Array is small or almost sorted; online data streams |
| **JS `.sort()`** | $\mathcal{O}(n)$ | $\mathcal{O}(n \log n)$ | $\mathcal{O}(n \log n)$ | $\mathcal{O}(n)$ | Yes | **Production code for general-purpose sorting** |
