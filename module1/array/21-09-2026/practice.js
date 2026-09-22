let AtoZ = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let str = '';
for(let i = AtoZ.length -1 ; i >= 0; i--){
    str += AtoZ[i];
}
console.log(str);

for(let aa of AtoZ){
    console.log(aa);
    aa = 20;
    console.log(aa);
}