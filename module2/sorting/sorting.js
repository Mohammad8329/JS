let obj = [
    {
        a:1,
        b:"Rajat"
    },
    {
        a:10,
        b:"rajat1"
    },
    {
        a:9,
        b:"rajat3"
    }
]

function comp(a,b){
    return a.a - b.a
}

console.log(obj.sort(comp));