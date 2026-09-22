// let AtoZ = ['a'];
// let val = AtoZ.push('z');
// console.log(AtoZ);
// console.log(val);

//note*
// push returns number length after adding element at the end of the array in sequence

// make an array that insert number 1 to 100
// let arr = [];
// for(let i= 1; i <= 100; i++){
//     arr.push(i);
// }
// console.log(arr);



//the array that you already have at this piont, from the array you are supposed to take out one elemetn at a time and check if that number is divislbe by 3 if yes push it to a new array with name arr3 and do this until your arr is empty.

let arr = [
   1,  2,  3,   4,  5,  6,  7,  8,  9, 10, 11, 12,
  13, 14, 15,  16, 17, 18, 19, 20, 21, 22, 23, 24,
  25, 26, 27,  28, 29, 30, 31, 32, 33, 34, 35, 36,
  37, 38, 39,  40, 41, 42, 43, 44, 45, 46, 47, 48,
  49, 50, 51,  52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63,  64, 65, 66, 67, 68, 69, 70, 71, 72,
  73, 74, 75,  76, 77, 78, 79, 80, 81, 82, 83, 84,
  85, 86, 87,  88, 89, 90, 91, 92, 93, 94, 95, 96,
  97, 98, 99, 100
];
arr3 = [];

// for(let i = arr.length -1; i > 0; i-- ){
//     let num = arr.pop();
//     if(num % 3 === 0){
//         arr3.push(num);
//     }

// }

while(arr.length > 0){
    let num = arr.pop();
    if(num % 3 === 0){
        arr3.push(num);
    }
}

console.log(arr3);
console.log(arr);
//for(let i = arr.length; i)
