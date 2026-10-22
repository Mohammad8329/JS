// downward triangle
// let n = 5;
// for(let i = 0; i < n; i++){
//     let str = "";
//     for(let j = 0; j < 5-i; j++){
//         str += "* ";
//     }
//     console.log(str);
// }

/*
Rule for Growing vs. Shrinking Triangles:

Growing triangle: inner condition is j <= i (stars increase as row increases).

Shrinking triangle: inner condition is j < n - i (stars decrease as row increases).
*/

// let str = "";
// let n = 8;
// for(let i = 0; i <= n; i++){
//     if(i == 7){
//         str += "*";
//     }else{
//         str += " ";
//     }
// }
// console.log(str);

// for(let i = 3; i >= 0; i--){
//     let str = "";
//     for(let j = 0; j < n; j++){
//         if(j >= i && j < n - i){
//             str += "* ";
//         }else{
//             str += "  ";
//         }
//     }
//     console.log(str);
// }


/*
Symmetrical Pyramid Patterns: Starting Index Formula

For a grid of width `W` using the condition: `j >= i && j < W - i`

The outer loop starting index `i` (representing the apex/tip) depends on the center median:

The Two Rules (where `M = Math.floor(W / 2)`):

• Even Width (`W` is even): Tip index is `M - 1` (tapers to 2 stars).

• Odd Width (`W` is odd): Tip index is `M` (tapers to 1 star).

Unified Formula:

`const startI = Math.floor((W - 1) / 2);`

---

Examples:

1. Even Width (`W = 8`):

  • `M = 8 / 2 = 4`

  • `startI = 4 - 1 = 3`

  • At `i = 3`, `j >= 3 && j < 5` $\rightarrow$ indices `[3, 4]` (2 stars).

2. Odd Width (`W = 7`):

  • `M = Math.floor(7 / 2) = 3`

  • `startI = 3`

  • At `i = 3`, `j >= 3 && j < 4` $\rightarrow$ index `[3]` (1 star). 
*/


let num = 5;
  for(let i = num ; 0 < i; i--){
    let str ="";
    for(let j = 1; j <= num; j++){
      if(i <= j){
        str += "# ";
      }else{
        str +=" ";
      }

    }
    console.log(str);
  }
