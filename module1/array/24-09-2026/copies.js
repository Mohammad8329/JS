//make an array with a1 with elements from 1 to 100
// then make any other array with name a2 such that it's similar to a1 then add 101 at the start of this array a2 such that it also insert an element at the beginning of a1
// then make an array a3 such that it's similar to a1  and pop last 50 elements without disturbing a1 and a2 and at lasat all 3 arrays


// let a1 = [];
// let i = 1;
// while(i < 100+1){
//     a1.push(i);
//     i++;
// }

// let a2 = a1;
// console.log(a2)
// a2.unshift(101);
// console.log(a2);

// let a3 = structuredClone(a1);
// console.log(a3);
// console.log(a3.splice(50-1, 50));


// // -------

// creating array using const
// const a = [0,10101,11];
// console.log(a)
// let  b = a;
// console.log(b);

//---------
// assing variables to elements of array
// let arr = [1,2,3,4,5,6,7,8,46,73,46,4,3,2];
// let [a,b,c, ...d] = arr;
// console.log(a,b, c,d);
// let [...x] = arr;
// console.log(x);


//---------
//arr.flat(); // arr.flat(optional paramete) -> it extracts the elements from inner arrays and put in outer array in sequence default working depth is 1 and you can give Infinity to flat every nested array 
arr = [1,2,44,5,3,3,4,5,3,,5,6,4,3,6,3,,4,5,4,,44,[1,24,53,[2,3,,5,5]]];
let a = arr.flat();
console.log(a);
console.log(arr);