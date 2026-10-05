// array of objects in increasing order of the

arrObj = [
    {
        names:1,
        place:2
    },
    {
        names:2,
        place:1
    },
    {
        names:3,
        place:4
    },
    {
        names:4,
        place:3
    }
]


//console.log(arrObj.sort());

let comp = (a,b) => {
    return a.names - b.names;
}


