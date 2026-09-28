// traverse string



//------------
//access ith character of a string




//-------------
// charAt()
let str = "Rajat singh";
console.log(str.charAt(5));

let str1 = "acciojob";

let str3 = str+str1;

console.log(str3);


let inp = "abcdefaghijklmnopqrstuvwxyz";
// check if chat is vowel, if it's vowel print it's a vowel else print it's consonant.

// for(let i = 0; i < 26; i++){
//     if(inp[i] === 'a' || inp[i] === 'e' || inp[i] === 'i' || inp[i] === 'o' || inp[i] === 'u'){
//         console.log(`${inp[i]} is a vowel`);
//     }else{
//         console.log(`${inp[i]} is a consonant`);
//     }
// }

// lastIndexOf() find the occurence of element specified and the second argument is used to start the search from, and it starts searching backwards
// console.log(inp.lastIndexOf('a', 10));
// console.log(inp.indexOf('gi'));
// console.log(inp.indexOf('h'));
// console.log(inp.startsWith('hi',8));

let names = 'ralaJaalsjfdslfLSJFDLSLFS';

let str2 = names.toLocaleUpperCase() 
console.log(str2);