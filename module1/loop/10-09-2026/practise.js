// ++ -> increment
// -- -> decrement

// ++a -> preincrement
// a++ -> postincrement

// console.log(a++)
// let b = ++a;

// these questions were homework
// for (let a = 1; a*a< 500; a++){
//     console.log(a*a);
// }

// let a = 1000;
// let b = 5;
// for ()

// for (let a = 2; a< 3000; a+=a){
//     if (a*a < 3000)
//         console.log(a);
// }


// break -> breaks out of the loop
// continue  -> ends the current step of the loop and contines the loop -> skips the step

// you will print numbers from 1  to 100 and if it's divisible by 3 you will also print a n string "dvisible by 3", if  not, print other numbers.
// do this using continue;

// for (let a = 2; a < 100; a++){
//     if (a % 3 === 0){
//         console.log(a+ " Divisible by 3");
//         continue;
//     }
//     console.log(a);
// }

for (let i= 2; i < 100; i++){
    console.log(i);
    if(i % 3 === 0){
        console.log("divisible by 3");
        continue;
    }
}








// write notes on for loop and break and continue

//you have a number in variable x
//check if the number is divisible by 3 or not, find the sum of he digits to find divisiblity of 3

let x = 28288;
let sumofdigit = 0;
let lastdigit;

for (x; x> 0; x = Math.floor(x/10)){
    lastdigit  = x % 10;
    sumofdigit +=  lastdigit;
}
console.log(sumofdigit)


