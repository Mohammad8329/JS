# Sequence of Execution & Operator Precedence

In JavaScript, code executes synchronously line-by-line from top to bottom (sequence of execution). However, within a single line or expression, **operator precedence** and **associativity** determine which operations are performed first.

---

## 1. Sequence of Execution (Control Flow)

JavaScript engine reads and executes statements in top-to-bottom order:

```javascript
console.log("First");
console.log("Second");
console.log("Third");
```

Control flow can be altered using:
- **Conditionals**: `if...else`, `switch`
- **Loops**: `for`, `while`, `do...while`
- **Functions**: Pauses main execution stack until function returns.

---

## 2. Operator Precedence Table (Highest to Lowest)

Operators with **higher precedence** are evaluated first.

| Precedence | Operator Category | Operators | Associativity |
| :---: | :--- | :--- | :---: |
| **17** | Grouping | `( )` | N/A |
| **15** | Member / Call | `.` `[ ]` `()` | Left-to-Right |
| **14** | Unary (Post-increment) | `i++` `i--` | N/A |
| **13** | Unary (Pre-increment / NOT) | `++i` `--i` `!` `typeof` | Right-to-Left |
| **12** | Exponentiation | `**` | Right-to-Left |
| **11** | Multiplicative | `*` `/` `%` | Left-to-Right |
| **10** | Additive | `+` `-` | Left-to-Right |
| **9** | Relational | `<` `<=` `>` `>=` | Left-to-Right |
| **8** | Equality | `==` `!=` `===` `!==` | Left-to-Right |
| **4** | Logical AND | `&&` | Left-to-Right |
| **3** | Logical OR | `\|\|` | Left-to-Right |
| **2** | Conditional / Assignment | `? :` `=` `+=` `-=` | Right-to-Left |

---

## 3. Associativity (Left-to-Right vs Right-to-Left)

When operators have the **same precedence**, associativity determines the order of evaluation.

### Left-to-Right Associativity
Most operators evaluate left-to-right:
```javascript
let result = 10 - 4 - 2; // (10 - 4) - 2 = 4
```

### Right-to-Left Associativity
Assignments and Exponentiation evaluate right-to-left:
```javascript
let a, b;
a = b = 5; // b = 5 first, then a = b

let exp = 2 ** 3 ** 2; // 2 ** (3 ** 2) = 2 ** 9 = 512
```

---

## 4. PEMDAS Rule for Math Expressions

1. **P**arentheses `()`
2. **E**xponents `**`
3. **M**ultiplication `*` & **D**ivision `/` & **M**odulus `%` (Left to Right)
4. **A**ddition `+` & **S**ubtraction `-` (Left to Right)

```javascript
let ans = 5 + 3 * 2;   // 11 (Multiplication first)
let ans2 = (5 + 3) * 2; // 16 (Parentheses first)
```
