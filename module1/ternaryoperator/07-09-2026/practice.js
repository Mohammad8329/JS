// write ternary example, nested ternary and then example my teacher

let name1 = "Rajat";
let a = 10;

// if (name1 === 'Singh'){
//     name1 = "your Name";
// }else if(a == 10){
//     name1 = "xyz";
// }



(name1 === "Singh") ? name1 = "mohammad" : (a == 10) ? name1 = "xyz" : null;
console.log(name1);

let isLoggedIn = true;
let userMessage = isLoggedIn ? "Welcome back!" : "Please log in";
console.log(userMessage)

let b = 10;
let x = 9;
(x > b) ? console.log("x is less than b") : (x = 10, b = 9, console.log(b,x));