// num = "abcde";

// for(let i = num.length -1; i > 0 ; i--){
//     let res = "";
//     for(let j = i; j >= 0; j--){
//         res += num[j];
//         console.log(res);
//     }
// }


//subarrays, 1st largest, 2nd and 3rd largest subarray, pattern printing



// let arr = [1,2,3,4,5];
// let arr1 = [];

// for(let i = 0; i < arr.length; i++){
//     let newarr = [];
//     for(let j = i; j < arr.length; j++){
//         newarr.push(arr[j]);
//         arr1.push(structuredClone(newarr));
//     }
//     }

//     console.log(arr1);
    

// for(let i = 1; i <= 2; i++){
//     console.log(`this is the outer loop ${i}`);
//     for(let j = 1; j <= 3; j++){
//         console.log(`\tthis is the inner loop ${j}`);
//     }
// }


// const arr = [1,2,3];

// for(let i = 0; i < arr.length; i++){
//     let newarr = [];
//     for(let j = i; j < arr.length; j++){
//         newarr.push(arr[j]);
//         console.log(newarr);
//     }
//     //console.log(newarr);
// }

// let arr = [1,0,3];
// let cnt = 0;
// let target = 3;
// for(let i = 0; i < arr.length; i++){
//     let sum = 0; 
//     for(let j = i; j < arr.length; j++){
//         sum += arr[j];
//         if(sum === target){
//             cnt++;
//             break;
//         }
//         if(sum > target){
//             break;
//         }
//     }
// }
// console.log(cnt);

//------------------------------------
// Maximum subarray sum
let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let maxSum = -Infinity;
let newarr = [];
for(let i = 0; i < arr.length; i++){
    let currentSum = 0;
    for(let j = i; j < arr.length; j++){
        currentSum += arr[j];
        if(currentSum > maxSum){
            maxSum = currentSum;
            newarr = arr.slice(i,j+1);
        }
    }
}

console.log(maxSum, newarr);