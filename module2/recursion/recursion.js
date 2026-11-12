// let i = 0;
// function recursion(){
//     if(i === 10){
//         return ;
//     }
//     i++
//     console.log(i);
//     recursion();
// }

// recursion();

// let arr = [12,3,4,4,4];
// function rec(arr, i){
//     let len = arr.length ;
//     if(len <= i) return;

//     rec(arr,i+2);
//     console.log(arr[i]);
// }
// rec(arr, 2);


// let arr = [1, 2, 3, 4, 5];

// function recursion(i, sum) {

//     if (i === arr.length) {
//         return sum;
//     }

//     sum += arr[i];

//     return recursion(i + 1, sum);
// }

// console.log(recursion(0, 0)); // 15

// function test(n){
//     if(n === 0){
//         return ;
//     }
//     console.log(n);
//     test(n-1);
//     console.log("returning",n);
// }

// test(5);


// function sums(n, total = 0){
//     if( n === 0) return total;

//     return sums(n-1, total + n);
// }
// console.log(sums(5));

// arr = [1,2,3,4,5];
// let i = 0;
// function sums(arr, i = 0, total = 1){
//     if(i === arr.length){
//         return total
//     }
//     return sums(arr,i+1,total * arr[i]);
    
// }
// console.log(sums(arr));

// factorial

function factorial(n,i=1, total = 1){
    if(i > n){
        return total;
    }
    if(n === 0){
        return 1;
    }
    return factorial(n, i + 1, total * i);
}

console.log(factorial(0));