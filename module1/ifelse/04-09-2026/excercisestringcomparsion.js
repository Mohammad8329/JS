let a = " zzzzzzzz";
let b = 'Z';

console.log(a < b); // true
a = '18181';
b = ' ';

console.log(a < b); // false

a = 'llll  a  a a ';
b = '    papapappa 11';

console.log(a < b); //false

a = `aaaaaaaaa`;
b = '999999';
console.log(a < b); // false

a = 111;
b = '12';

console.log(a < b); // false

a = '}}}}}';
b = 'aA';
console.log(a < b); // false

a = 'ppp';
b = 'PPP';
console.log(a < b);// false

a = ')))';
b = " ";
console.log(a < b); // false