let grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
let sum = 0;
let newsum = 0;
for(let i = 0; i < grid.length; i++){
    for(let j = 0; j < grid[i].length; j++){
        if(j === i){
            sum += grid[i][j]
        }
        if(j === grid[i].length - 1 -i){
            newsum += grid[i][j];
        }
    }
}
console.log(sum);
console.log(newsum);