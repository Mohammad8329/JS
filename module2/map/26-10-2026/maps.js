// let arr = [1, 2, 2, 3, 1, 1, 4];

// function maps(arr){
//     let map = new Map();

//     for(let num of arr){
//         if(map.has(num)){
//             map.set(num, map.get(num)+ 1); 
//         }else{
//             map.set(num, 1);
//         }
//     }
//     return map;
// }

// console.log(maps(arr));

// let str1 = "hello";
// function countfreq(str1){
//     let str = str1.split('');
//     let map = new Map();

//     for(let st of str){
//         if(map.has(st)){
//             map.set(st, map.get(st) + 1);
//         }else{
//             map.set(st, 1);
//         }
//     }
//     return map;
// }
// console.log(countfreq(str1));


// let str = "aabbcdde";
// function strfreq(str){

//     let map = new Map();
    
//     for(let st of str){
//         map.set(st, (map.get(st) || 0) + 1)
//     }
    
//     for(let [key, value] of map.entries()){
//         if(value === 1){
//             console.log(key);
//             break;
//         }
//     }
// }

// strfreq(str);


// let arr = [2, 11, 15,7];
// let target = 9;
// function sumequal(arr, target){
//     let map = new Map();

//     for(let i = 0; i < arr.length; i++){
//         let compliment = target - arr[i];
//         if(map.has(compliment)){
//             return [map.get(compliment), i];
//         }else{
//             map.set(arr[i],i);
//         }
//     }
//     return null;

// }
// console.log(sumequal(arr,target));


// let words = ["eat", "tea", "tan", "ate", "nat", "bat"];
// function anagram(arr){
//     let map = new Map();
    
//     for(let str of arr){
//         let sorted = str.split('').sort().join('');
//         if(map.has(sorted)){
//             map.get(sorted).push(str);
//         }else{
//             map.set(sorted, [str]);
//         }

//     }
//     return Array.from(map.values());
// }

// console.log(anagram(words));



// let arr = [1, 2, 3, 2, 4, 5, 1, 6, 3];
// function freq(arr){

//     let map = new Map();
//     let res = [];
    
//     for(let num of arr){
//         map.set(num, (map.get(num) || 0) + 1)
//     }
    
//     for(let [key, value] of map.entries()){
//         if(value > 1){
//             res.push(key);
//         }
//     }
//     return res;
// }

// console.log(freq(arr));


// arr = [1,2,3,4,5,5,5,9,9,9,10,11,12,13,14,15];

// function consecutiveSeq(arr){
//     let sets = new Set(arr);
//     let longest = 0;

//     for(let num of sets){
//         if(!sets.has(num-1)){
//             let current = num;
//             let count = 1;

//             while(sets.has(current+1)){
//                 current++;
//                 count++;
//             }
//             longest = Math.max(longest, count);
//         }
//     }
//     return longest;
// }

// console.log(consecutiveSeq(arr));


function countSubarrays(arr, sum) {
    let map = new Map();
    let prefix = 0;
    let count = 0;

    map.set(0, 1);

    for (let i = 0; i < arr.length; i++) {
        prefix += arr[i];

        let required = prefix - sum;

        if (map.has(required)) {
            count += map.get(required);
        }

        map.set(prefix, (map.get(prefix) || 0) + 1);
    }

    return count;
}

console.log(countSubarrays([10, 2, -2, -20, 10], -10));