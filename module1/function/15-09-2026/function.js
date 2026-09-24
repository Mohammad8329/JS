// ==========================================
// 1. Basic Function Declaration & Invocation
// ==========================================
function greet(name) {
    console.log("Hello, " + name + "! Welcome to JavaScript.");
}

greet("Mohammad");
greet("Student");


// ==========================================
// 2. Return Values & Parameters
// ==========================================
function add(a, b) {
    return a + b;
}

let sumResult = add(15, 25);
console.log("Sum:", sumResult); // 40


// ==========================================
// 3. Default Parameters (ES6)
// ==========================================
function calculateTotalPrice(price, taxRate = 0.18) {
    let tax = price * taxRate;
    return price + tax;
}

console.log("Total with default 18% tax:", calculateTotalPrice(1000));     // 1180
console.log("Total with custom 5% tax:", calculateTotalPrice(1000, 0.05)); // 1050


// ==========================================
// 4. Function Expression vs Arrow Function
// ==========================================
// Function Expression
const square = function(num) {
    return num * num;
};

// Arrow Function (compact one-liner with implicit return)
const cube = num => num * num * num;

console.log("Square of 6:", square(6)); // 36
console.log("Cube of 4:", cube(4));     // 64


// ==========================================
// 5. Passing Array to Function (Pass by Reference)
// ==========================================
function calculateStats(numbers) {
    let total = 0;
    let max = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }

    let average = total / numbers.length;

    return {
        sum: total,
        average: average,
        maximum: max
    };
}

const scores = [80, 95, 70, 85, 90];
const stats = calculateStats(scores);
console.log("Array Stats:", stats);


// ==========================================
// 6. Checking Even or Odd (Helper Function)
// ==========================================
function isEven(num) {
    return num % 2 === 0;
}

console.log("Is 14 even?", isEven(14)); // true
console.log("Is 21 even?", isEven(21)); // false
