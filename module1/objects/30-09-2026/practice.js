

let k = {

    a: 1,
    b: 2,
    c: 3
}

let {a,b,c, ...rest} = k;
console.log(a,rest) 

// make an object where you can decide any key at least 5
// print the number of keys using code not by counting yourself
// instructore: "Rajat"
//make a copy of this object
// then delete the key Instructor from the new copy and then print the both old and new copy you a both printed objects should be different

let obj ={
    a: 10,
    b: 20,
    c: 30,
    d: 40,
    e: 50
}
let newObj = {k: 99, l: 101, ...obj};// if ...obj is placed first in the array and the same keys are written, then the the value of new key will override the older value of that key
let new1Obj = {...newObj, k:88, a: 1001};
console.log(new1Obj);

//

// console.log(Object.values(obj).length);

// obj.Instructor = "Rajat";
// console.log(obj);
// let copyObj = structuredClone(obj);
// delete copyObj["instructor"];
// obj.e = "Singh";
// console.log(obj, copyObj);

// for(let i = 0; i < obj.length; i++){
//     obj
// }