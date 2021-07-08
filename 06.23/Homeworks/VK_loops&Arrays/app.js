// For and While
// Atspausdinkite skaičių stulpelį nuo 1 iki 100.
let res = "";
let a = 0;
while (a <= 100) {
    res += "" + a;
   a++;
}
console.log(res);

let res2 = '';
let b = 0;
do {
    b = b + 1;
    res2 = res2 + b;
} while (b < 100);
console.log(res2);

let res3 = '';
for (let a = 0; a <= 100; a++) {
    res3 = res3 + a;
}
console.log(res3);

// Atspausdinkite skaičių stulpelį nuo 11 iki 33.
let res4 = "";
let x = 11;
while (x <= 33) {
    res4 += "" + x;
    x++;
}
console.log(res4);

let n1 = '';
for (let i = 11; i <= 33; i++) {
    n1 = n1 + i;
}
console.log(n1);

// Atspausdinkite stulpelį su lyginiais skaičiais nuo 0 iki 100.
let res5 = "";
let i = 0;
while (i <= 100) {
    res5 += "" + i;
    i += 2;
}
console.log(res5);

let n2 = '';
for (let i = 0; i <= 100; i += 2) {
    n2 = n2 + i;
}
console.log(n2);

// Naudodami ciklą parodykite sumą nuo 1 iki 100.

const num = parseInt(100);
let sum = 0, y = 1;
while(y <= num) {
    sum += y;
    y++;
}
console.log(sum);

const number = parseInt(100);
let total = 0;
for(let z = 1; z <= number; z++) {
    total += z;
}
console.log(total);

// For ir masyvai
// Duotas masyvas su elementais [1, 2, 3, 4, 5]. Parodykite visus masyvo elementus ekrane.
let arr = [ 1, 2, 3, 4, 5];
arr.forEach(element => console.log(element));
arr.forEach(element => document.write(element));
document.write('<br>');
document.write('<hr>');

// Duotas masyvas su elementais [1, 2, 3, 4, 5]. Parodykite šio masyvo elementų sumą.
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(arr.reduce(reducer));
document.write(arr.reduce(reducer));
