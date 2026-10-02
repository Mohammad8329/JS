# JavaScript Strings: Complete Reference & Guide

A **String** is an indexed sequence of characters used to represent text in JavaScript. In JavaScript, strings are **primitives** and are **immutable** (they cannot be changed in place).

---

## 📌 Master Feature Reference Table

| Name / Feature | How to use / Syntax | Required Parameter | Optional Parameter | What does each parameter do? | What does it return? | Sample use case |
| --- | --- | --- | --- | --- | --- | --- |
| **String literal** | `"Hello"` / `'Hello'` / ``Hello`` | String content | None | The characters written inside quotes become the string | String | `let name = "Rajat";` |
| **Escape characters** | `"\n"`, `"\t"`, `\"`, `\'`, `\\` | Escape sequence | None | `\n` → new line, `\t` → tab, `\"` → `"`, `\'` → `'`, `\\` → `\` | String | `"Hello\nWorld"` |
| **Template literal** | ``Hello ${name}`` | None | `${expression}` | `${}` allows JavaScript expressions/variables to be evaluated and inserted into the string | String | ``Hello ${name}`` |
| **`length`** | `str.length` | None | None | Gives the total number of characters. Counting starts from `1`, while indexes start from `0` | Number | `"Hello".length` → `5` |
| **Access with `[]`** | `str[index]` | `index` | None | Specifies which character to access. Index starts at `0`. | Character | `"Hello"[0]` → `"H"` |
| **`charAt()`** | `str.charAt(index)` | `index` | None | Specifies the character position. Index starts at `0`. | Character | `"Hello".charAt(1)` → `"e"` |
| **Immutability** | `str[index] = value` does not modify the string | None | None | Individual characters of an existing string cannot be changed directly | No useful return value | `str[0] = "X"` does not change `str` |
| **Concatenation `+`** | `str1 + str2` | Values to combine | None | Joins values from left to right into a new string | String | `"Hello " + "World"` → `"Hello World"` |
| **`for` loop** | `for(let i = 0; i < str.length; i++)` | Initialization, condition, update | None | `i` normally represents the current index. `i++` moves forward one position each iteration | Nothing by itself | Visit every character using `str[i]` |
| **`for...of`** | `for(let ch of str)` | String / iterable | None | Automatically moves through the string from the first character to the last | Nothing by itself | Print every character |
| **`indexOf()`** | `str.indexOf(searchValue, fromIndex)` | `searchValue` | `fromIndex` | `searchValue` is what we search for. `fromIndex` tells JavaScript where to **start searching forward**. If omitted, search starts at index `0`. | First matching index, or `-1` | `"banana".indexOf("a")` → `1` |
| **`lastIndexOf()`** | `str.lastIndexOf(searchValue, fromIndex)` | `searchValue` | `fromIndex` | Searches **backward**. `fromIndex` tells JavaScript where to start searching backward. If omitted, it starts from the end of the string. | Last matching index, or `-1` | `"banana".lastIndexOf("a")` → `5` |
| **`includes()`** | `str.includes(searchValue, position)` | `searchValue` | `position` | `searchValue` is what we search for. `position` tells where the search should **start**. Search continues toward the end. If omitted, starts at `0`. | `true` / `false` | `"JavaScript".includes("Script")` → `true` |
| **`startsWith()`** | `str.startsWith(searchValue, position)` | `searchValue` | `position` | Checks whether `searchValue` starts at the specified position. If `position` is omitted, it checks from index `0`. | `true` / `false` | `"JavaScript".startsWith("Java")` → `true` |
| **`endsWith()`** | `str.endsWith(searchValue, endPosition)` | `searchValue` | `endPosition` | `searchValue` must finish exactly at `endPosition`. The character at `endPosition` itself is **not considered**. If omitted, uses the end of the string. | `true` / `false` | `"JavaScript".endsWith("Script")` → `true` |
| **`slice()`** | `str.slice(start, end)` | `start` | `end` | `start` tells where extraction begins. `end` tells where extraction stops. **Start is included, end is excluded.** If `end` is omitted, goes to the end. Negative values count from the end. | New string | `"JavaScript".slice(0, 4)` → `"Java"` |
| **`substring()`** | `str.substring(start, end)` | `start` | `end` | `start` is included, `end` is excluded. If `end` is omitted, goes to the end. Negative values are treated as `0`. If `start > end`, JavaScript swaps them. | New string | `"JavaScript".substring(0, 4)` → `"Java"` |
| **`toUpperCase()`** | `str.toUpperCase()` | None | None | Converts all applicable letters to uppercase | New string | `"hello".toUpperCase()` → `"HELLO"` |
| **`toLowerCase()`** | `str.toLowerCase()` | None | None | Converts all applicable letters to lowercase | New string | `"HELLO".toLowerCase()` → `"hello"` |
| **ASCII / Character codes** | Character ↔ numeric code concept | None | None | Characters such as `A`, `B`, `a`, `0` have numeric character codes. `charCodeAt()` gets the code and `fromCharCode()` converts a code back | Number or String depending on method | `A → 65`, `a → 97` |
| **`replace()`** | `str.replace(searchValue, replacement)` | `searchValue`, `replacement` | None | Finds the first matching occurrence and replaces it. The original string is not changed | New string | `"cat cat".replace("cat", "dog")` → `"dog cat"` |
| **`replaceAll()`** | `str.replaceAll(searchValue, replacement)` | `searchValue`, `replacement` | None | Finds all matching occurrences and replaces them | New string | `"cat cat".replaceAll("cat", "dog")` → `"dog dog"` |
| **`split()`** | `str.split(separator, limit)` | None | `separator`, `limit` | `separator` decides where the string is divided. `limit` restricts how many pieces can be returned. If separator is omitted, the entire string becomes one array element. | Array | `"a,b,c".split(",")` → `["a","b","c"]` |
| **`join()`** | `arr.join(separator)` | None | `separator` | `separator` is placed **between every array element**. If omitted, elements are joined without anything between them | String | `["a","b","c"].join("-")` → `"a-b-c"` |
| **`trim()`** | `str.trim()` | None | None | Removes whitespace from both the beginning and end. Does not remove spaces between words | New string | `" Hello ".trim()` → `"Hello"` |
| **`trimStart()`** | `str.trimStart()` | None | None | Removes whitespace only from the beginning | New string | `" Hello ".trimStart()` → `"Hello "` |
| **`trimEnd()`** | `str.trimEnd()` | None | None | Removes whitespace only from the end | New string | `" Hello ".trimEnd()` → `" Hello"` |
| **`padStart()`** | `str.padStart(targetLength, padString)` | `targetLength` | `padString` | `targetLength` is the desired final length. `padString` is added to the **beginning** until that length is reached. If omitted, spaces are used | New string | `"7".padStart(3, "0")` → `"007"` |
| **`padEnd()`** | `str.padEnd(targetLength, padString)` | `targetLength` | `padString` | `targetLength` is the desired final length. `padString` is added to the **end** until that length is reached. If omitted, spaces are used | New string | `"7".padEnd(3, "0")` → `"700"` |
| **`charCodeAt()`** | `str.charCodeAt(index)` | `index` | None | Specifies which character's UTF-16 code unit to get. Index starts at `0` | Number | `"ABC".charCodeAt(0)` → `65` |
| **`String.fromCharCode()`** | `String.fromCharCode(code1, code2, ...)` | At least one code | Additional character codes | Each numeric code is converted into its corresponding UTF-16 character. Multiple codes produce multiple characters | String | `String.fromCharCode(65, 66)` → `"AB"` |

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

## 7. ASCII / Character Codes: `charCodeAt()` & `String.fromCharCode()`

Every character in computer memory is represented by an underlying numeric integer (ASCII / UTF-16 code):
- `'A' - 'Z'` corresponds to `65 - 90`
- `'a' - 'z'` corresponds to `97 - 122`
- `'0' - '9'` corresponds to `48 - 57`

### A. Getting Character Code: `str.charCodeAt(index)`
Returns the numeric ASCII / UTF-16 code unit for the character at the specified index:
```javascript
let str = "ABC abc 0";

console.log(str.charCodeAt(0)); // 65 (for 'A')
console.log(str.charCodeAt(4)); // 97 (for 'a')
console.log(str.charCodeAt(8)); // 48 (for '0')
```

### B. Converting Code to Character: `String.fromCharCode(code1, code2, ...)`
Takes one or more numeric codes and converts them back into characters:
```javascript
console.log(String.fromCharCode(65));         // "A"
console.log(String.fromCharCode(97));         // "a"
console.log(String.fromCharCode(72, 105, 33)); // "Hi!"
```

### C. Joining Arrays back into Strings: `arr.join(separator)`
When you use `.split()` to transform a string into an array, you often use `.join()` to turn the modified array back into a string:
```javascript
let words = ["JavaScript", "is", "fun"];

console.log(words.join(" ")); // "JavaScript is fun"
console.log(words.join("-")); // "JavaScript-is-fun"
console.log(words.join(""));  // "JavaScriptisfun"
```

---

## 8. Common String Interview Algorithms

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
