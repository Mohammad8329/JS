// const add = function(a,b){
//     return a + b;
// }

// console.log(add(19,1));


// const sq = x => x*x;
// console.log(sq(5));

// const greet = (names, time) => names+" "+time;
// console.log(greet("Rohan", "morning"));

// const getUser = () => ({id: 1,names: "john"});
// console.log(Object.keys(getUser));


let arr = [{
    names:2,
    places: 4
},
{
    names:5,
    places:8
},
{
    names: 1,
    places:1
},
{
    names: 3,
    places:2
}
]

let sorted = arr.sort((a, b) => a.names - b.names);
console.log(sorted);
