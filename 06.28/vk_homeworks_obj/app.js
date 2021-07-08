// for-in
// Sukurkite objektą green: žalia, red: raudona, blue: mėlyna. Parodykite šio objekto raktus ir elementus.
let colors = {
    green: 'žalia',
    red: 'raudona',
    blue: 'mėlyna',
}
for (let key in colors) {
    console.log(`${key} - ${colors[key]}`);
};

// Sukurkite objektą su raktais Mantas, Paulius, Mindaugas ir reikšmėm 200, 300, 300.
let list = {
    Mantas: 200,
    Paulius: 300,
    Mindaugas: 300,
}
console.log(list);

// Parodykite eilutes tokiu formatu: Mantas - 200 EU atlyginimas.
for (let key in list) {
    console.log(`${key} - ${list[key]} EU atlyginimas`)
}

// Sukurkite objektą su savaitės dienomis.
// Raktai jame turėtų būti dienų skaičiai nuo savaitės pradžios
// (1 -> pirmadienis ir t.t.).

let weekdays = {
    1: 'monday',
    2: 'tuesday',
    3: 'wednesday',
    4: 'thursday',
    5: 'friday',
    6: 'saturday',
    0: 'sunday',
};
// Parodykite dabartinę savaitės dieną.
console.log(weekdays[4]);

// Sukurkite kintamjį day kuriame saugomas savaitės dienos numeris.
// Atspausdinkite savaitės dieną naudojant sita kintamajį.

let day = new Date().getDay();
console.log(weekdays[day]);

// Duotas objektas {js: ['jQuery', 'Angular'], php: 'hello', css: 'world'}.
// Parodykite žodį jQuery.
let obj = {
    js: ['jQuery', 'Angular'],
    php: 'hello',
    css: 'world'};
console.log(obj.js[0]);

// Sukurkite objektą. Pirmieji du raktai yra lt ir en.
// Raktai turi savaitės dienų vardų masyvus lietuviškai ir angliškai atitinkamai.
let week = {
    lt: ['pirmadienis', 'antradienis', 'trečiacienis', 'ketvirtadienis', 'penktadienis', 'šeštadienis', 'sekmadienis'],
    en: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday',],
}

// Naudodamiesi šiuo masyvu, pirmadienį parodykite lietuvių kalba, o trečiadienį - anglų kalba.
console.log(week.lt[0], week.en[2]);

// Sukurkite kintamsios lang ir day (reikšmės lt arba en) ir naudojant lang ir day parodykite dieną

let lang = week.lt;
console.log(lang[day -1]);