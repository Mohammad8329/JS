// Logical Operators Examples

// 1. Logical AND (&&)
console.log(true && true);   // true
console.log(true && false);  // false
console.log(5 > 2 && 10 > 5); // true

// Short-circuiting AND
console.log("User" && "Admin"); // "Admin"
console.log(0 && "Admin");      // 0

// 2. Logical OR (||)
console.log(true || false);  // true
console.log(false || false); // false

// Short-circuiting OR (Default values)
let username = "";
let defaultName = username || "Guest";
console.log(defaultName); // "Guest"

// 3. Logical NOT (!)
console.log(!true);  // false
console.log(!!1);    // true
