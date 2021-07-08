let text = "";
let i = 0;
while (i <= 100) {
    text += "<br>Number" + i;
    i++;
}
console.log(text);
document.write(text);

document.write('<br>');
document.write('<hr>');

let result = '';
let num = 0;

do {
    num = num + 1;
    result = result + num;
} while (num <= 99);

console.log(result);
document.write(result);

document.write('<br>');
document.write('<hr>');

let str = '';

for (let ii = 0; ii <= 100; ii++) {
    str = str + ii;
}

console.log(str);
document.write(str);

