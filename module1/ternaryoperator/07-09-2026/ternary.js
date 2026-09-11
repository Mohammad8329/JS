// ==========================================
// ⚡ JavaScript Ternary Operator (Conditional Operator)
// ==========================================
// Syntax:
// condition ? expressionIfTrue : expressionIfFalse;

// 1. Traditional if-else approach
let a = 10;

if (a < 10) {
    a = 20;
} else {
    a = 40;
}

// 2. Ternary Operator approach (shorthand for if-else)
let b = 10;

b = (b < 10) ? 20 : 40;

console.log(a); // Output: 40
console.log(b); // Output: 40

// 3. Practical Example: Checking eligibility
let age = 18;
let canVote = (age >= 18) ? "Eligible to vote" : "Not eligible to vote";
console.log("Vote Status:", canVote);

// 4. Nested Ternary Example (Multiple conditions)
let marks = 85;
let grade = (marks >= 90) ? "A+" 
          : (marks >= 80) ? "A" 
          : (marks >= 70) ? "B" 
          : "F";
console.log("Grade:", grade);