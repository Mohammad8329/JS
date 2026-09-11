// let a = 1;
// do{
//     a++;
//     if (a == 5){continue;}
//     console.log(a);
// }while(a < 10);


//print number from 1 to 15 only if it's an odd number -> print odd numbers from 1 to 15
let a = 1;
do{
    if (a % 2 !== 0){console.log(a);}
    a++;
}while(a< 15+1);