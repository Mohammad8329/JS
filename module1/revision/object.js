const people = [
    {
        name: "aaush",
        age: 20
    },
    {
        name: "vikram",
        age: 31
    },
    {
        name: "sigh",
        age: 18
    },
    {
        name: "Ram",
        age: 25
    }
] // array of object

let youngest = people[0];
let oldest = people[0];

for(let i = 0; i < people.length; i++){
    if(people[i].age < youngest.age){
        youngest = people[i].age;
    }
    if(people[i].age > oldest.age){
        oldest = people[i].age;
    }
}

console.log(`youngest -> ${youngest} and oldest ${oldest}`);

