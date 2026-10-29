// let items = [1,4,2,5,3,4,4,3,5,3,4];//"programming";
// const freq = new Map(items);
// for(let item of items){
//     freq.set(item, (freq.get(item) || 0) + 1);
// }
// console.log(freq);

// let nums = [2,7,11,15];
// let t = 9;
// let maps = new Map();
// for(let i = 0; i <= nums.length; i++){
//     let complement = t - nums[i];
//     if(maps.has(complement)){
//         console.log( [maps.get(complement),i]);
//     }
//     maps.set(nums[i], i);
// }

// ------------------------------------------

let str = "brownefoxjumpedoverthefence";

let maps = new Map();

for(let count of str){
    maps.set(count, (maps.get(count) || 0) +1 );
}

for(let [key,value] of maps){
    if( value === 1){
        console.log(key);
        break;
    }
}