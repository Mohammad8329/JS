// insertion sort

arr = [5,4,3,2,1,0];

function insertionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let current = arr[i];
        let j = i -1;
        while(j >= 0 && arr[j]  > current ){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = current;
    }
    return arr;
}

console.log(insertionSort(arr));