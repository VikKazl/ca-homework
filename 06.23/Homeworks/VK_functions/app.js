//Parašykite funkciją kuri grąžina stulpelį su lyginiais skaičiais nuo x iki x.

function even(from, to) {
    for (let i = from; i <= to; i++) {
        if(i % 2 === 0) {
            console.log(i);
        };
    };
};

let from = +prompt(`Įveskite pirmą skaičių: `);
let to = +prompt(`Įveskite antrą skaičių: `);

even(from, to);

// Parašykite funkciją kuri patikrina ar duotas skaičius yra daugiau nei 3 ir mažiau nei 10

let f = 4;

function check() {
    if ((f > 3) && (f < 10)) {
        return 'true';
    }
    if ((f <= 3) && (f >= 10)) ;
    {
        return 'false';
    }
}

console.log(check(f));

// Parašykite funkciją kuri grąžina teigiamų masyvo skaičių sumą

const array = [1, -4, 6.1, 0.1, 2.6, 5, -2, 1.9, 6, 8.75, -7, 5];
const squareSum = (arr) => {
    return arr.reduce((acc, val) => {
       if (val > 0 && val % 1 === 0) {
           acc += val * val;
       };
        return acc;},
        0);
}
console.log(squareSum(array));

