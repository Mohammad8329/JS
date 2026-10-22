let arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
function com(a,b){
    return a-b;
}

arr.sort(com);
console.log(arr);

let start = 0;
let end = arr.length -1;

let target = 40;

let found = false;

while(start <= end){
    let mid = Math.floor(start + (end - start)/2);
    
    if(arr[mid] === target){
        console.log(mid) ;
        found = true;
        break;
    }else if(arr[mid] < target){
        start = mid +1;
    }else{
        end = mid -1;
    }
}
if(!found){
    console.log("not found");
}
