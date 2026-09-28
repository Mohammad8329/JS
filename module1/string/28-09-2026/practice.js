// //console.log(' '.charCodeAt(0));
// let row = "";
// for(let i = 0; i < 124; i++){
//     row += String.fromCharCode(i);
// }
// console.log(row);

// console.log(String.fromCharCode(0));


let str = "slkfjosiwlsgsjfs adsklfja fj afjalf sdlkf as;f";
// console.log(str.replace('s','9'));// replace only the first occurence
// console.log(str.replaceAll('l','L'));

// let splitarray = str.split(' ');
// console.log(splitarray);
// let trimArray = "   lfjsdlf   ";
// let trimStartArray = "  jslfjsdlf";
// let trimEndArray = "   fjdsl";
// console.log(trimArray.trim());
// console.log(trimStartArray.trimStart());
// console.log(trimEndArray.trimEnd());


// let ps = "lfjslkfj";
// console.log(ps.padStart(100));// add space in the start so until total lenght become the given argument in total
// console.log(ps.padEnd(100));// add space from the end of the string

//question - you have to print charcode of each index of kk

// let kk = '  akakkak lalalla  ';

// for(let i = 0; i < kk.length; i++){
//     console.log(kk.charCodeAt(i));
// }

// let num = -1;
// console.log(Math.abs(num));

// let ans = 0;
// for(let start =0; start < w.length; start++){
//     for(let end = start+1; end <= w.length; end++){
//         let
//     }
// }

// reverse the words in a sentense
function reversewords(str){
    const char = [...str];
    let start = 0;
    for(let end = 0; end <= char.length; end++){
        if(end === char.length || char[end]  === " "){
            let left = start;
            let right = end -1;
            while(left < right){
                const temp = char[left];
                char[left] = char[right];
                char[right] = temp;
                left++;
                right--;
            }
            start = end + 1 // the new word after the space
        }
    }
    return char.join("");
}
const input = "welcome my friend";
console.log(reversewords(input));