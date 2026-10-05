// let arr = [null, undefined, 0,9, "kkk", "ppp", "0", "9", 'a a a a ','A',' '];
// let arr1 = [1,2,4,5,6,-3,-9];
// console.log(arr1.sort((a,b) => b - a));

let arr = [2,4,3,1994,3,28292,2,27272,26474];
let sorted = arr.sort((a,b) => a-b);
console.log(sorted);
let chopped = sorted.splice(0,1,10);
console.log(sorted.sort((a,b) => b-a));
console.log(sorted);

