// arr = [
//     [1,2585,599292,0],
//     [1,25, 9292,0],
//     [14,285,599292,1],
//     [1,285,5292,0]
// ];


// let n = arr.length;
// let m = arr[0].length;

// for(let i = 0; i< n; i++){
//     let add
//     for(j = 0; j < m; j++){
//         console.log(arr[i][j]);
//     }
// }


// diagonals in matrix
// 1-5-6 => primary diagonal
// 3-5-7 => secondary diagonal
// let matrix =[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

// let sum = 0;
// if(i === j){
//     sum += arr[i][j];
// }
// if(i === m-1-j){
//     sum += arr[i][j];
// }

// let rows = matrix.length;
// let cols = matrix[0].length;
// let result = [];
// for (let i = 0; i < cols; i++) {
//     result.push(new Array(rows));
// }
// // Fill the transposed matrix
// for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < cols; j++) {
//         result[j][i] = mat[i][j];
//     }
// }
// console.log()


let matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

let rows = matrix.length;
let cols = matrix[0].length;

for (let i = 0; i < rows; i++) {
    let temp = matrix[i][0];
    matrix[i][0] = matrix[i][cols - 1];
    matrix[i][cols - 1] = temp;
}

console.log(matrix);
