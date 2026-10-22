let matrix = [
  [10, 20, 30],
  [5, 15],
  [100, 200]
];
let rowSum = [];
let rowAverage = [];
let total = 0;
for(let i = 0; i < matrix.length; i++){
    let sum = 0;
    for(let j = 0; j < matrix[i].length; j++){
        sum += matrix[i][j];
    }
    let avg = sum / matrix[i].length;
    rowSum.push(sum);
    rowAverage.push(avg);
    total += sum;

}
console.log(rowSum);
console.log(rowAverage);
console.log(total);