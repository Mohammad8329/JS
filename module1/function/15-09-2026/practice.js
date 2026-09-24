// let func = function(a,b,c){
//     if(a > b && a > c){
//         return a;
//     }else if(b > c){
//         return b;
//     }else{
//         return c;
//     }
// }

// console.log(func(9,3,6));

let isDate = function(d,m,y){
    isValid = true;
    if(d > 31 || d < 1 || m > 12 || m < 1){
        isValid = false;
    }else if(m === 4 || m === 6 || m === 9 || m === 11){ // 30 days
        if(d > 30){
            isValid = false;
        }
    }else if(m === 2){
        if(y % 4 === 0 && y % 100 !== 0 || y % 400 === 0){
            if(d > 29){
                isValid = false;
            }
        }else{
            if(d > 28){
                isValid = false;
            }
        }
    }
    return isValid ? "Valid" : "Invalid";
}

console.log(isDate(29,13,2025))