// // arrow function
// const prices = [100, 200, 300];

// const newPrice = prices.map(prices => prices * 1.10);
// console.log(newPrice);

//make a function that take an integer number as input and print and then return true if its divisible by both 3 and 7

// const func = x => {if(x % 3 ===0 && x % 7 === 0) {
//     return true;
// }else{
//     return false;
// }
// }
// console.log(func(21));

//callback function
let add = (a,b) => a+b;

let multiply = function(a,num1,num2,callbackfuncAdd){
    let callbackfunc = callbackfuncAdd(num1,num2);
    return a * callbackfunc

}

console.log(multiply(5,1,1,add));// the actuall call of the function is inside the function call