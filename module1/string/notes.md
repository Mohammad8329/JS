# JavaScript Strings: Complete Reference & Guide

A **String** is an indexed sequence of characters used to represent text in JavaScript. In JavaScript, strings are **primitives** and are **immutable** (they cannot be changed in place).

---

## 📌 Master Feature Reference Table

| Name / Feature | How to use / Syntax | Required Parameters | What does it return? | Sample use case |
| --- | --- | --- | --- | --- |
| **String declaration (Single/Double quotes)** | `let s = "Hello";` or `let s = 'Hello';` | Text inside quotes | A primitive String | `let name = "Rajat";` |
| **Template Literal (Backticks)** | ``let s = `Hi ${name}`;`` | Backticks (`` ` ``) | Evaluated String with variable interpolation | ``let greeting = `Hello, ${name}!`;`` |
| **`length` property** | `str.length` | None | Total number of characters (**Number**) | `"Hello".length` → `5` |
| **Bracket access** | `str[index]` | `index` (0 to n - 1) | Character at that index or `undefined` | `"cat"[0]` → `"c"` |
| **`charAt()`** | `str.charAt(index)` | `index` | Character at that index or empty string `""` | `"Rajat".charAt(2)` → `"j"` |
| **`charCodeAt()`** | `str.charCodeAt(index)` | `index` | UTF-16 / ASCII integer code | `"A".charCodeAt(0)` → `65` |
| **`at()` (ES2022)** | `str.at(index)` | `index` (supports negative) | Character at index; supports negative indexing | `"hello".at(-1)` → `"o"` (last char) |
| **Basic `for` loop** | `for(let i = 0; i < str.length; i++)` | Initialization, condition, update | Nothing by itself | Traverse and access character by index |
| **`for...of` loop** | `for(let ch of str)` | String/iterable | Nothing by itself | Iterate directly over characters |
| **`indexOf()`** | `str.indexOf(substr, fromIndex)` | `substr` | **Index of first match**, or `-1` | `"hello".indexOf("l")` → `2` |
| **`lastIndexOf()`** | `str.lastIndexOf(substr, fromIndex)` | `substr` | **Index of last match**, or `-1` | `"hello".lastIndexOf("l")` → `3` |
| **`includes()`** | `str.includes(substr, fromIndex)` | `substr` | **`true`** or **`false`** | `"banana".includes("nan")` → `true` |
| **`startsWith()`** | `str.startsWith(substr, position)` | `substr` | **`true`** or **`false`** | `"Dr. Rajat".startsWith("Dr.")` → `true` |
| **`endsWith()`** | `str.endsWith(substr, length)` | `substr` | **`true`** or **`false`** | `"image.png".endsWith(".png")` → `true` |
| **`slice()`** | `str.slice(start, end)` | `start` (optional `end`) | **New extracted substring** (supports negative indices) | `"JavaScript".slice(0, 4)` → `"Java"` |
| **`substring()`** | `str.substring(start, end)` | `start` (optional `end`) | **New extracted substring** (swaps if start > end) | `"Hello".substring(1, 4)` → `"ell"` |
| **`toUpperCase()`** | `str.toUpperCase()` | None | **New string** in all UPPERCASE | `"hello".toUpperCase()` → `"HELLO"` |
| **`toLowerCase()`** | `str.toLowerCase()` | None | **New string** in all lowercase | `"WORLD".toLowerCase()` → `"world"` |
| **`trim()`** | `str.trim()` | None | **New string** with whitespaces removed from both ends | `"  hi  ".trim()` → `"hi"` |
| **`trimStart()` / `trimLeft()`** | `str.trimStart()` | None | **New string** without leading whitespace | `"  hi".trimStart()` → `"hi"` |
| **`trimEnd()` / `trimRight()`** | `str.trimEnd()` | None | **New string** without trailing whitespace | `"hi  ".trimEnd()` → `"hi"` |
| **`replace()`** | `str.replace(pattern, replacement)` | `pattern`, `replacement` | **New string** with **first** match replaced | `"apple".replace("p", "b")` → `"abple"` |
| **`replaceAll()`** | `str.replaceAll(pattern, replacement)` | `pattern`, `replacement` | **New string** with **all** matches replaced | `"apple".replaceAll("p", "b")` → `"abble"` |
| **`split()`** | `str.split(separator)` | `separator` | **Array** of divided substrings | `"a-b-c".split("-")` → `["a", "b", "c"]` |
| **`concat()`** | `str.concat(str2, ...)` | String(s) to append | **New combined string** | `"Hello ".concat("World")` → `"Hello World"` |
| **`repeat()`** | `str.repeat(count)` | `count` (integer >= 0) | **New string** repeated `count` times | `"ha".repeat(3)` → `"hahaha"` |
| **`padStart()`** | `str.padStart(targetLength, padString)` | `targetLength` | **New padded string** at the start | `"5".padStart(3, "0")` → `"005"` |
| **`padEnd()`** | `str.padEnd(targetLength, padString)` | `targetLength` | **New padded string** at the end | `"5".padEnd(3, "0")` → `"500"` |
| **Immutability check** | `str[0] = 'X';` | None | Fails silently (does NOT mutate `str`) | `"hello"[0] = "y"` → string stays `"hello"` |

---

## 1. Creating Strings in JavaScript

Strings can be created using single quotes (`''`), double quotes (`""`), or template literals (`` ` ` ``):

```javascript
let single = 'Single quotes';
let double = "Double quotes";
let template = `Template literal`;
```

### Template Literals (Backticks `` ` ``)
Template literals provide two superpowers:
1. **String Interpolation**: Embed variables and expressions with `${}`:
   ```javascript
   let name = "Rajat";
   let score = 95;
   console.log(`Hello ${name}, your score is ${score + 5}.`);
   // Output: Hello Rajat, your score is 100.
   ```
2. **Multi-line Strings**: No need for `\n` to break lines:
   ```javascript
   let multiline = `First line
   Second line
   Third line`;
   ```

### Escape Characters (`\`):
When a character has a special meaning in JavaScript, precede it with a backslash `\` to escape it:

| Escape Sequence | Description |
|---|---|
| `\n` | New line |
| `\t` | Tab |
| `\'` | Single quote |
| `\"` | Double quote |
| `\\` | Backslash itself |

```javascript
console.log("Hello there..\nHow may I help you?\nThat\'s great to know!");
```

---

## 2. ⚠️ String Immutability (Core Concept)

In JavaScript, **Strings are immutable primitive values**.
- Once a string is created, its characters **cannot be modified, added, or deleted in place**.
- Attempting to reassign a character via index `str[0] = 'i'` fails silently (in non-strict mode) or throws an error in strict mode.

```javascript
let s = "hello world";
s[0] = 'i'; // ❌ Does NOT change 'h' to 'i'

console.log(s); // Still "hello world"!
```

### How to "change" a string?
To produce a modified string, you must create a **new string** and reassign it:
```javascript
let s = "hello world";
s = "i" + s.slice(1);
console.log(s); // "iello world"
```

---

## 3. Accessing Characters: `[]` vs `charAt()` vs `at()`

| Method / Syntax | Example | Out of Bounds (`index = 100`) | Negative Index (`index = -1`) |
|---|---|---|---|
| **Bracket `str[i]`** | `"Hello"[1]` → `"e"` | Returns `undefined` | Returns `undefined` |
| **`charAt(i)`** | `"Hello".charAt(1)` → `"e"` | Returns empty string `""` | Returns empty string `""` |
| **`at(i)` (ES2022)** | `"Hello".at(-1)` → `"o"` | Returns `undefined` | **Returns from the end!** (`-1` = last char) |

```javascript
let str = "Rajat singh";

console.log(str[0]);         // "R"
console.log(str.charAt(5));   // " " (space character at index 5)
console.log(str.at(-1));      // "h" (last character)
```

---

## 4. Traversing / Looping Through Strings

### A. Traditional `for` loop (with index):
```javascript
let text = "Accio";

for (let i = 0; i < text.length; i++) {
    console.log(`Index ${i} -> ${text[i]}`);
}
```

### B. `for...of` loop (character values directly):
```javascript
let text = "Accio";

for (let ch of text) {
    console.log(ch); // 'A', 'c', 'c', 'i', 'o'
}
```

---

## 5. Extracting Substrings: `slice()` vs `substring()`

Both extract a section of a string without modifying the original:

```javascript
let str = "JavaScript";
```

### Key Differences:
1. **Negative Indices**:
   - `slice(-4)`: Counts backwards from the end (`"ript"`).
   - `substring(-4)`: Treats negative numbers as `0` (`"JavaScript"`).
2. **Start > End**:
   - `slice(6, 2)`: Returns an empty string `""`.
   - `substring(6, 2)`: **Swaps** the arguments to `(2, 6)` → `"vaSc"`.

```javascript
let str = "JavaScript";

// slice:
console.log(str.slice(0, 4));  // "Java"
console.log(str.slice(-6));    // "Script"

// substring:
console.log(str.substring(0, 4)); // "Java"
console.log(str.substring(4, 0)); // "Java" (swaps arguments automatically)
```

---

## 6. Splitting Strings into Arrays: `split()`

`split(separator)` breaks a string into an array of substrings:

```javascript
let sentence = "JavaScript is awesome";

// Split by space:
let words = sentence.split(" ");
console.log(words); // ["JavaScript", "is", "awesome"]

// Split into individual characters:
let chars = "hello".split("");
console.log(chars); // ["h", "e", "l", "l", "o"]

// Split by delimiter:
let csv = "apple,banana,orange";
console.log(csv.split(",")); // ["apple", "banana", "orange"]
```

---

## 7. Common String Interview Algorithms

### A. Reverse a String
Strings are immutable, so we can convert to an array or build using a loop:

#### Approach 1: Built-in `split()`, `reverse()`, `join()`
```javascript
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("hello")); // "olleh"
```

#### Approach 2: Backward Loop (Manual)
```javascript
function reverseManual(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log(reverseManual("hello")); // "olleh"
```

---

### B. Check if String is Palindrome
A string is a palindrome if it reads the same forward and backward (e.g. `"radar"`, `"madam"`):

```javascript
function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

console.log(isPalindrome("radar")); // true
console.log(isPalindrome("hello")); // false
```

---

### C. Count Vowels in a String
```javascript
function countVowels(str) {
    let count = 0;
    let vowels = "aeiouAEIOU";

    for (let ch of str) {
        if (vowels.includes(ch)) {
            count++;
        }
    }
    return count;
}

console.log(countVowels("Hello World")); // 3 ('e', 'o', 'o')
```
