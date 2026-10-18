# JavaScript 2D Arrays & Matrix Operations (Module 2)

A **2D Array** (often called a **Matrix** or **Grid**) is an array whose elements are themselves arrays. In JavaScript, matrices are represented as nested arrays: `arr[row][col]`.

---

## 📌 Master Feature Reference Table

| Concept / Operation | Syntax / Approach | Formula / Condition | Time Complexity | Space Complexity | Description & Use Case |
|---|---|---|---|---|---|
| **Matrix Dimensions** | `let rows = mat.length;`<br>`let cols = mat[0].length;` | — | $\mathcal{O}(1)$ | $\mathcal{O}(1)$ | Determines row count ($N$) and column count ($M$). |
| **Row-Wise Traversal** | `for (let i = 0; i < rows; i++)`<br>`  for (let j = 0; j < cols; j++)` | Access: `mat[i][j]` | $\mathcal{O}(N \times M)$ | $\mathcal{O}(1)$ | Standard left-to-right, top-to-bottom matrix visit. |
| **Column-Wise Traversal** | `for (let j = 0; j < cols; j++)`<br>`  for (let i = 0; i < rows; i++)` | Access: `mat[i][j]` | $\mathcal{O}(N \times M)$ | $\mathcal{O}(1)$ | Top-to-bottom, column-by-column scan. |
| **Primary Diagonal** | `mat[i][i]` | `row === col` | $\mathcal{O}(N)$ | $\mathcal{O}(1)$ | Top-left to bottom-right diagonal in $N \times N$ square matrix. |
| **Secondary Diagonal** | `mat[i][n - 1 - i]` | `row + col === n - 1` | $\mathcal{O}(N)$ | $\mathcal{O}(1)$ | Top-right to bottom-left anti-diagonal. |
| **Matrix Transpose** | `result[j][i] = mat[i][j]` | Swap rows with columns | $\mathcal{O}(N \times M)$ | $\mathcal{O}(N \times M)$ | Converts an $N \times M$ matrix into an $M \times N$ matrix. |
| **Column Swapping** | `let temp = mat[i][c1];`<br>`mat[i][c1] = mat[i][c2];`<br>`mat[i][c2] = temp;` | For each row `i` | $\mathcal{O}(N)$ | $\mathcal{O}(1)$ | In-place swapping of two columns across all rows (e.g., first & last). |

---

## 1. 2D Matrix Basics & Indexing

```javascript
const matrix = [
  [1,  2,  3,  4],   // Row 0
  [5,  6,  7,  8],   // Row 1
  [9, 10, 11, 12]    // Row 2
];

console.log(matrix.length);    // 3 (Total Rows)
console.log(matrix[0].length); // 4 (Total Columns)
console.log(matrix[1][2]);     // 7 (Row 1, Column 2)
```

---

## 2. Diagonals of a Square Matrix ($N \times N$)

For a square matrix where `rows === cols === n`:

```javascript
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let n = matrix.length;
let primarySum = 0;
let secondarySum = 0;

for (let i = 0; i < n; i++) {
  primarySum += matrix[i][i];            // 1 + 5 + 9 = 15
  secondarySum += matrix[i][n - 1 - i];  // 3 + 5 + 7 = 15
}
```

---

## 3. Matrix Transpose

Transposing a matrix swaps rows with columns ($mat[i][j] \to res[j][i]$):

```javascript
function transposeMatrix(mat) {
  let rows = mat.length;
  let cols = mat[0].length;
  let result = [];

  for (let j = 0; j < cols; j++) {
    result.push(new Array(rows));
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      result[j][i] = mat[i][j];
    }
  }

  return result;
}
```

---

## 4. Swapping Columns In-Place

Swapping the first column with the last column for every row:

```javascript
let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12]
];

let rows = matrix.length;
let cols = matrix[0].length;

for (let i = 0; i < rows; i++) {
  let temp = matrix[i][0];
  matrix[i][0] = matrix[i][cols - 1];
  matrix[i][cols - 1] = temp;
}
```
