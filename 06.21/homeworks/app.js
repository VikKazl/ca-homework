// Sukurkite masyvą a, b, c. Parodykite masyvą naudodami console.log funkciją.
let arr = [
    'a', 'b', 'c'
];
console.log(arr);

// Naudodamiesi ankstesnės užduoties masyvu, parodykite pirmojo, antrojo ir trečiojo elementų turinį.
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

// Sukurkite masyvą a, b, c, d ir naudodami jį parodykite eilutė a + b, c + d.
let arr_1 = [
    'a', 'b', 'c', 'd'
];
console.log(arr_1);
console.log((arr_1[0] + arr_1[1]), (arr_1[2] + arr_1[3]));

// Sukurkite masyvą su elementais 2, 5, 3, 9.
let a = 2;
let b = 5;
let c = 3;
let d = 9;

let arr_2 = [a, b, c, d];
console.log(arr_2);

// Pirmąjį masyvo elementą padauginkite iš antrojo, o trečiąjį elementą iš ketvirtojo.
let mul = [ (a * b), (c * d)];
console.log(mul);

// Sudėkite rezultatus, priskirkite kintamąjam. Parodykite šio kintamojo reikšmę.
let str = (mul[0] + mul[1]);
console.log(str);

// Daugialypiai masyvai
// Yra pateiktas masyvas [[1, 2, 3], [4, 5, 6], [7,8,9]]. Parodykite skaičių 4 iš šio masyvo.
let multiArray = [[1, 2, 3], [4, 5, 6], [7,8,9]];
console.log(multiArray[1][0]);

// Duoti du masyvai: 1, 2, 3 ir 4, 5, 6. Sujunkite juos.
let multiArray_1 = [
    [1, 2, 3],
    [4, 5, 6],
];
console.log(multiArray_1);

// Duotas masyvas 1, 2, 3. Iš jo padarykite masyvą 3, 2, 1.
let arr_3 = [1, 2, 3];
let reversed = arr_3.reverse();
console.log(reversed);

// Duotas masyvas 1, 2, 3. Pridėkite elementus 4, 5, 6 į galą ir -1, -2, -3 į priekį.
let arr_4 = [1, 2, 3];
arr_4.push(4, 5, 6);
arr_4.unshift(-1, -2, -3);
console.log(arr_4);

// Duotas masyvas html, css, js. Parodykite pirmąjį ir paskutinį elementus.
let str_1 = 'html';
let str_2 = 'css';
let str_3 = 'js';
let arr_5 = [str_1, str_2, str_3];
console.log(arr_5[0],arr_5[2]);

// Duotas masyvas 3, 4, 1, 2, 7. Surūšiuokite jį.
let arr_6 = [3, 4, 1, 2, 7]
arr_6.sort();
console.log(arr_6);

// Duotas masyvas 1, 2, 3, 4, 5. Konvertuokite masyvą į 1, 2, 3.
let arr_7 = [1, 2, 3, 4, 5];
arr_7.splice(-2, 2);
console.log(arr_7);

//console.log(arr_7.slice(0,-2));