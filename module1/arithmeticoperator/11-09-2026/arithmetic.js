// Arithmetic Operations Examples

// 1. Basic Arithmetic
let a = 15;
let b = 4;

console.log("Addition:", a + b);       // 19
console.log("Subtraction:", a - b);    // 11
console.log("Multiplication:", a * b); // 60
console.log("Division:", a / b);       // 3.75
console.log("Modulus (Remainder):", a % b); // 3
console.log("Exponentiation:", 2 ** 4); // 16

// 2. Modulus Use Case: Extract Digits
let num = 456;
console.log("Last digit of 456:", num % 10); // 6
console.log("Number without last digit:", Math.floor(num / 10)); // 45

// 3. Type Coercion with + vs other operators
console.log(10 + "20"); // "1020"
console.log(10 - "20"); // -10
