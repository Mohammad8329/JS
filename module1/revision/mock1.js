// // reveres an array

// const numbers = [12,5,8,21,7];

// for(let i = numbers.length - 1 ; 0 <= i ; i--){
//     console.log(numbers[i]);
// }
//--------------x----------

// //object of array
// const students = [
//     {name:"Aman",marks: 70},
//     {name: "Neha", marks: 91},
//     {name: "Ravi", marks: 84},
//     {name: "Pooja", marks: 69}
// ]

// const target = "Ravi";

// function findStudent(arr, target){
//     for(let i =0; i < arr.length; i++){
//         if(arr[i].name === target){
//             return arr[i];
//         }
//     }
//     return "Students not found";
// }

// const result = findStudent(students, "Ravi");
// console.log(`${result.name} -> ${result.marks}`);
//--------------x----------


//vowels
// function countVowel(str){
//     let st1 = str.length;
//     let count = 0
//     let vowel = "aeiouAEIOU";
    
//     for(let keys of str){
//         if(vowel.includes(keys)){
//             count++;
//         }
//     }
//     return count;
// }

// const str = "Javascript";
// console.log(countVowel(str));
//------------------------x----------------

// // remove recurring element
// const numbers= [4,7,4,9,2,4,7];
// const target = 4;
// let arr =[];
// for(let n of numbers){
//     if(n !== 4){
//         arr.push(n);
//     }
// }

// console.log(arr);
//-----------x------------

// const products = [
//     {name: "keyboard", price: 1200, rating: 4.2},
//     {name: "Mouse", price: 700, rating: 4.5},
//     {name:"Monitor", price: 8500, rating: 4.1},
//     {name: "USB", price: 300, rating:4.0}
// ]

// function comp(a,b){
//    return a.price - b.price;
// }

// products.sort(comp);

// for(let key of products){
//     console.log(key.name, key.price);
// }