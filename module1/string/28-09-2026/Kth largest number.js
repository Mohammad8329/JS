let arr = [1,2,3,5,53,5555,32,3,5,3,2,3,4];

let subarray = [];
for(let i = 0; i < arr.length; i++){
    let x = [];
    for(let j =i; j < arr.length -1; j++) {
        x.push(arr[j]);
        let nx= structuredClone(x);

        let subarraySum = sum(nx);
        subarraySum.push() //not completed.
        
    }
}
console.log(subarray);
function sum (arr){
    let ss = 0;
    for(let x of arr){
        ss += x;
    }
    return ss;
}