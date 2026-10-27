// make a set and add elements from 1 to 50 in this set
// and then run another loop and add even numbers starting from 0 to 100 in same set
// now 
// delete all the odd numbers in your set 
// and at the end print the elements in set

let sets = new Set();
let i =1;
while(i <= 50){
    sets.add(i);
    i++;
}
console.log(sets);

for(let i = 1; i <= 100; i++){
    sets.add(i);
}
console.log(sets)

for(let i = 1; i <= 100; i+=2){
    sets.delete(i);
}