// let details =[
// {
//     Name:"A",
//     value:0,
//     dummy:10,
//     dummy1:20,
//     dummy2:30
// },{
//     Name:"a",
//     value:1
// },{
//     Name:"c",
//     value:1
// },{
//     Name:"D",
//     value:0
// }
// ]

// // for(let i = 0; i < details.length; i++){
// //     if(details[i].Name >= "A" && details[i].Name <= "Z"){
// //         console.log(details[i].value);
// //     }
// // }

// // for each element in array check if the Name is in captial letter if yes print the Value key inside that element ignore otherewise.

// let kk = ['dummay','Value','name','p'];

// for(let i = 0; i < kk.length; i++){
//     console.log(details[kk[i]]);

// }


// const student = {
//     isName:"Rajat",
//     age: 22,
//     coures: "Full stack Web dev",
//     isEnrolled: true
// }

// keyname = "age";

// console.log(student[keyname]);
// console.log(student.coures);
// console.log(student["isEnrolled"]);

// student.email = "coder@gmail.com";
// console.log(student.email);
// student["city"] = "mumbai";
// console.log(student.city);
// console.log(student);

// let arr = [1,2,3,4,5,6];
// for(let x of arr){
//     console.log(x);
// }

// console.log(student.age !== undefined);
// console.log("courese" in student);
// console.log(student.hasOwnProperty("FMD"));

// for(let x in student){
//     console.log(x, student[x]);
// }

// console.log(Object.keys(student));
// console.log(Object.values(student));
// console.log(Object.entries(student));

// for(let [key, val] of Object.entries(student)){
//     console.log(key, val);
// }

// const account = {
//     owner: "mohammad",
//     balance: 5000,
//     depoist(amount){
//         this.balance += amount;
//         return  `depoisted ${amount}. New amount ${this.balance}`
//     },
//     getBalance(){
//         return `${this.owner} has Rs${this.balance}`;
//     }
// };

// console.log(account.depoist(3000));
// console.log(account.getBalance());


// const employee = {
//     id: 101,
//     empName: "Priya",
//     department: "Engineering",
//     salary: 75000
// };

// const {empName, department} = employee;
// console.log(empName);
// console.log(department);

// const { empName: fullName, location = "india"} = employee;
// console.log(fullName);

// const defaults = { theme: "dark", notifications: true,notifications: false };
// const userPrefs = { notifications: false, fontSize: 16 };

// // const  settings = {...defaults, ...userPrefs};

// // console.log(settings);

// const clone= {...defaults};
// defaults.theme  = "light";
// console.log(defaults.theme);
// console.log(clone.theme);
// console.log(clone);

let details = [
    { Name: "A", value: 0 },
    { Name: "a", value: 1 },
    { Name: "c", value: 1 },
    { Name: "D", value: 0 }
];

// // for(let i = 0; i < details.length; i++ ){
// //     if(details[i].Name >= "A" && details[i].Name <= "Z"){
// //         console.log(details[i].value);
// //     }
// // }

// const one = details.filter(item => item.value === 1);
// console.log(one);

// const names = details.map(item => item.Name);
// console.log(names);

details.map((item, index, array) => {
    console.log(item);
    console.log(index);
    console.log(array);
});
