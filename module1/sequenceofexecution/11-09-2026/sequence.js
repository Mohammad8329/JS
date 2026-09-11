// Sequence of Execution & Precedence Examples

// 1. Line-by-line Execution
console.log("Step 1: Start");
let x = 10;
x += 5;
console.log("Step 2: x is", x);

// 2. Precedence Example (Multiplication over Addition)
let val1 = 10 + 5 * 2;   // 20
let val2 = (10 + 5) * 2; // 30
console.log("val1:", val1);
console.log("val2:", val2);

// 3. Right-to-Left Exponentiation Associativity
console.log("2 ** 3 ** 2 =", 2 ** 3 ** 2); // 512 (evaluates 3**2=9 then 2**9=512)

// 4. Mixed Logical & Comparison Precedence
// Comparison (>) runs before Logical AND (&&)
console.log(5 + 5 > 8 && 2 * 3 === 6); // true
