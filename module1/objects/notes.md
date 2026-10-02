# JavaScript Objects: Complete Reference & Guide

An **Object** is an unordered collection of **key-value pairs** stored under a single variable. Keys (also called properties) are strings (or symbols), and values can be any data type (primitives, arrays, functions, or other objects).

Objects are the primary way to represent structured data and real-world entities in JavaScript.

---

## 📌 Master Feature Reference Table

| Name / Feature | How to use / Syntax | Required Parameter | Optional Parameter | What does each parameter do? | What does it return? | Sample use case |
| --- | --- | --- | --- | --- | --- | --- |
| **Object literal** | `let obj = { key: value };` | Key-value pairs inside `{}` | None | Defines an object with initial properties and values | Object | `let student = { name: "Rajat", age: 22 };` |
| **Dot notation access** | `obj.propertyName` | Property identifier | None | Directly accesses the value linked to `propertyName`. Key must be a valid JS identifier | Property value or `undefined` | `student.name` → `"Rajat"` |
| **Bracket notation access** | `obj["key"]` or `obj[variable]` | Key string or variable expression | None | Evaluates expression inside `[]` and retrieves corresponding value. Allows spaces, special chars, dynamic keys | Property value or `undefined` | `student["first name"]` or `student[keyVar]` |
| **Add / Update property** | `obj.key = value;` or `obj["key"] = value;` | Key, value | None | If key exists, updates its value; if key does not exist, adds the new key-value pair | The assigned value | `student.city = "Delhi";` |
| **`delete` operator** | `delete obj.key` or `delete obj["key"]` | Target property reference | None | Removes the specified property entirely from the object | `true` if deleted successfully | `delete student.age;` |
| **`in` operator** | `'key' in obj` | Key name (string), Object | None | Checks whether a property exists in the object (including prototype chain) | `true` / `false` | `'name' in student` → `true` |
| **`hasOwnProperty()`** | `obj.hasOwnProperty('key')` | Key name (string) | None | Checks whether property exists **directly on the object** (ignoring prototype) | `true` / `false` | `student.hasOwnProperty("age")` |
| **`for...in` loop** | `for(let key in obj)` | Object to iterate | None | Loops through all enumerable keys/properties of the object | Nothing by itself | `for(let k in obj) console.log(k, obj[k]);` |
| **`Object.keys()`** | `Object.keys(obj)` | Target object | None | Extracts all enumerable property names (keys) of the object | **Array of strings** | `Object.keys(student)` → `["name", "age"]` |
| **`Object.values()`** | `Object.values(obj)` | Target object | None | Extracts all enumerable property values of the object | **Array of values** | `Object.values(student)` → `["Rajat", 22]` |
| **`Object.entries()`** | `Object.entries(obj)` | Target object | None | Extracts pairs as nested arrays `[ [key, value], ... ]` | **Array of `[key, val]` pairs** | `Object.entries(student)` → `[["name", "Rajat"], ...]` |
| **Object Method** | `obj = { greet() { ... } };` | Function definition | Parameters for function | Defines a function as an object property. Can access properties using `this` | Function return value when invoked | `student.greet()` |
| **`this` keyword** | `this.propertyName` | None | None | Inside an object method, points to the current object executing the function | Value of object's property | `return "Hi " + this.name;` |
| **Object Destructuring** | `let { key1, key2 } = obj;` | Object on RHS | Renaming (`k: alias`), defaults (`k = val`) | Extracts specific properties directly into distinct variables | Extracted variable bindings | `let { name, age } = student;` |
| **Spread operator (`...`)** | `{ ...obj1, ...obj2 }` | Object(s) to spread | Overriding properties | Copies properties of source objects into a **new object** (shallow copy) | **New Object** | `let copy = { ...student };` |
| **`Object.assign()`** | `Object.assign(target, ...sources)` | Target object | One or more source objects | Copies all enumerable own properties from source objects to target object | **Target Object** (mutated) | `Object.assign({}, student, { city: "Delhi" })` |
| **`Object.freeze()`** | `Object.freeze(obj)` | Target object | None | Freezes object: cannot add, delete, or modify existing properties | Same frozen object | `Object.freeze(config); config.port = 80;` (Fails) |
| **`Object.seal()`** | `Object.seal(obj)` | Target object | None | Seals object: cannot add or delete properties, but **can modify** existing values | Same sealed object | `Object.seal(user); user.age = 25;` (Allowed) |
| **`structuredClone()`** | `structuredClone(obj)` | Target object/array | None | Recursively deep clones an object and all its nested objects/arrays | **New deep copied Object** | `let clone = structuredClone(user);` |
| **Array of Objects** | `let list = [ { ... }, { ... } ];` | Objects inside `[]` | None | Stores multiple entity records in an ordered list | Array | `let users = [{ name: "A", val: 0 }, ...];` |

---

## 1. Creating Objects & Accessing Properties

### A. Object Literal Syntax (Preferred)
```javascript
const student = {
    name: "Rajat",
    age: 22,
    course: "Full Stack Web Dev",
    isEnrolled: true
};
```

---

### B. Dot Notation vs. Bracket Notation

| Feature | Dot Notation (`obj.key`) | Bracket Notation (`obj["key"]` or `obj[variable]`) |
|---|---|---|
| **Syntax** | `student.name` | `student["name"]` |
| **Dynamic Key / Variables** | ❌ No (`student.keyVar` looks literally for a property named `"keyVar"`) | ✅ Yes (`student[keyVar]` evaluates the variable) |
| **Keys with spaces/hyphens** | ❌ SyntaxError (`student.first name`) | ✅ Allowed (`student["first name"]`) |
| **Numeric keys** | ❌ SyntaxError (`student.1`) | ✅ Allowed (`student[1]` or `student["1"]`) |

#### When Bracket Notation is Mandatory:
```javascript
const person = {
    "first name": "Mohammad",
    age: 23,
    100: "Numeric key"
};

// 1. Keys with spaces:
console.log(person["first name"]); // "Mohammad"

// 2. Numeric keys:
console.log(person[100]); // "Numeric key"

// 3. Dynamic property name stored in a variable:
let prop = "age";
console.log(person.prop);    // undefined (looks for key literally named "prop")
console.log(person[prop]);    // 23 (evaluates prop -> "age")
```

---

## 2. Adding, Updating, and Deleting Properties

Objects in JavaScript are **dynamic**: properties can be added, updated, or removed at runtime.

```javascript
const user = {
    username: "coder123"
};

// Adding new properties:
user.email = "coder@gmail.com";
user["city"] = "Mumbai";

// Updating an existing property:
user.username = "expert_coder";

console.log(user);
// { username: "expert_coder", email: "coder@gmail.com", city: "Mumbai" }

// Deleting a property:
delete user.city;
console.log(user);
// { username: "expert_coder", email: "coder@gmail.com" }
```

---

## 3. Checking If a Property Exists

```javascript
const car = { brand: "Toyota", model: "Corolla" };

// Method 1: Comparison with undefined
console.log(car.year !== undefined); // false

// Method 2: 'in' operator
console.log("brand" in car); // true
console.log("year" in car);  // false

// Method 3: hasOwnProperty()
console.log(car.hasOwnProperty("model")); // true
```

---

## 4. Iterating Over Objects

Objects are **not iterables** (you cannot do `for...of` directly on `{}`). Use one of these three techniques:

### A. `for...in` Loop
Iterates through all property **keys**:
```javascript
const scores = { math: 90, physics: 85, chemistry: 88 };

for (let subject in scores) {
    console.log(`${subject}: ${scores[subject]}`);
}
// Output:
// math: 90
// physics: 85
// chemistry: 88
```

---

### B. `Object.keys()`, `Object.values()`, `Object.entries()`

```javascript
const person = { name: "Aman", role: "Developer", city: "Pune" };

// 1. Object.keys() -> Array of keys:
console.log(Object.keys(person)); 
// ["name", "role", "city"]

// 2. Object.values() -> Array of values:
console.log(Object.values(person)); 
// ["Aman", "Developer", "Pune"]

// 3. Object.entries() -> Array of [key, value] pairs:
console.log(Object.entries(person)); 
// [ ["name", "Aman"], ["role", "Developer"], ["city", "Pune"] ]

// Clean traversal with for...of and destructuring:
for (let [key, val] of Object.entries(person)) {
    console.log(`${key} => ${val}`);
}
```

---

## 5. Methods & The `this` Keyword

A function stored as a property of an object is called a **method**.

```javascript
const account = {
    owner: "Mohammad",
    balance: 5000,

    deposit(amount) {
        this.balance += amount;
        return `Deposited ${amount}. New balance: ${this.balance}`;
    },

    getBalance() {
        return `${this.owner} has Rs. ${this.balance}`;
    }
};

console.log(account.deposit(1500)); // "Deposited 1500. New balance: 6500"
console.log(account.getBalance());   // "Mohammad has Rs. 6500"
```
> ⚠️ **Arrow Functions & `this` Gotcha:** Do NOT use arrow functions for object methods if you need `this`. Arrow functions do not bind their own `this`; they inherit `this` from the surrounding outer scope!

---

## 6. Object Destructuring & Spread Operator (ES6)

### A. Object Destructuring
Extracts properties directly into standalone variables:
```javascript
const employee = {
    id: 101,
    empName: "Priya",
    department: "Engineering",
    salary: 75000
};

// Basic destructuring:
const { empName, department } = employee;
console.log(empName);    // "Priya"
console.log(department); // "Engineering"

// Renaming variables and default values:
const { empName: fullName, location = "India" } = employee;
console.log(fullName); // "Priya"
console.log(location); // "India" (fallback used because location was undefined)

// Rest pattern in destructuring:
const { id, salary, ...restInfo } = employee;
console.log(restInfo); // { empName: "Priya", department: "Engineering" }
```

---

### B. Spread Operator (`...`) for Copying & Merging
```javascript
const defaults = { theme: "dark", notifications: true };
const userPrefs = { notifications: false, fontSize: 16 };

// Merging objects (userPrefs overrides defaults):
const settings = { ...defaults, ...userPrefs };
console.log(settings);
// { theme: "dark", notifications: false, fontSize: 16 }

// Shallow copy:
const clone = { ...defaults };
clone.theme = "light";
console.log(defaults.theme); // "dark" (unaffected)
```

---

## 7. Arrays of Objects (Real-World Pattern)

In web development, backend APIs almost always send data as an **Array of Objects**:

```javascript
let details = [
    { Name: "A", value: 0 },
    { Name: "a", value: 1 },
    { Name: "c", value: 1 },
    { Name: "D", value: 0 }
];

// Traversing and accessing properties:
for (let i = 0; i < details.length; i++) {
    if (details[i].Name >= "A" && details[i].Name <= "Z") {
        console.log(`Uppercase entry found: ${details[i].Name} with value ${details[i].value}`);
    }
}
// Output:
// Uppercase entry found: A with value 0
// Uppercase entry found: D with value 0
```

### Useful Array Methods on Array of Objects:
```javascript
// Filter: Get all entries with value === 1
const ones = details.filter(item => item.value === 1);
console.log(ones); // [{ Name: "a", value: 1 }, { Name: "c", value: 1 }]

// Map: Extract all Names into a simple array
const names = details.map(item => item.Name);
console.log(names); // ["A", "a", "c", "D"]

// Find: Find first entry where Name is "c"
const match = details.find(item => item.Name === "c");
console.log(match); // { Name: "c", value: 1 }
```

---

## 8. Object Protection: `Object.freeze()` vs `Object.seal()`

| Feature | `Object.freeze()` | `Object.seal()` | Regular `const obj = {}` |
|---|---|---|---|
| **Can modify existing property values?** | ❌ No | ✅ Yes | ✅ Yes |
| **Can add new properties?** | ❌ No | ❌ No | ✅ Yes |
| **Can delete existing properties?** | ❌ No | ❌ No | ✅ Yes |
| **Can reassign variable to new object?** | ❌ (if `const`) | ❌ (if `const`) | ❌ No |

```javascript
const config = { api: "https://api.com", timeout: 5000 };

Object.freeze(config);
config.timeout = 10000; // Fails silently (or TypeError in strict mode)
config.newProp = "test"; // Fails
console.log(config.timeout); // Still 5000!
```

---

## 9. Common Algorithms: Frequency Counter Pattern

One of the most important algorithmic patterns in coding interviews uses an object as a **hash map / frequency counter**:

```javascript
// Count frequency of characters in a string:
function getCharFrequency(str) {
    const freq = {};

    for (let ch of str) {
        if (ch === " ") continue; // skip spaces
        if (freq[ch]) {
            freq[ch] += 1;
        } else {
            freq[ch] = 1;
        }
        // Shorthand: freq[ch] = (freq[ch] || 0) + 1;
    }

    return freq;
}

console.log(getCharFrequency("hello world"));
// Output: { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }
```
