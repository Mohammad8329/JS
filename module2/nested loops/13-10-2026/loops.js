// str = "abcde";

// for(let i = str.length -1; i >= 0; i--){
//     let newstr = "";
//     for(let j =i; j >= 0; j--){
//         newstr += str[j];
//         console.log(newstr);
//     }
// }

// let arr = [5, 4, 3, 2, 1];
// let subarrary =[];

// for(let i = arr.length -1; i >= 0; i--){
//     let newarr = [];
//     for(let j = i; j >= 0; j--){
//         newarr.push(arr[j]);
//         subarrary.push(newarr.slice());
//     }
// }
// console.log(subarrary);

let nums = [2, 4, 6];
let allPairs = [];
let pairProducts = [];

for (let i = 0; i < nums.length; i++) {
  let pair = [nums[i]];
  for (let j = i + 1; j < nums.length; j++) {
    pair.push(nums[j]);
    allPairs.push(...pair);
    pairProducts.push(nums[i]* nums[j]);
    // 1. Add nums[j] to pair
    // 2. Safely store a snapshot of pair into allPairs
    // 3. Store the product (nums[i] * nums[j]) into pairProducts
    // 4. Reset or remove nums[j] so the next j iteration can pair properly with nums[i]
}
}
console.log(allPairs);
console.log(pairProducts);
