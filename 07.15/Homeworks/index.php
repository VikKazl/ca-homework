<?php
//Sukurkite 3 kintamuosius: skaičių, raidinės vertės bei tuščią kintamąjį ir juos išveskite į ekraną.

$nmb = 3;
$str = 'a';
$temp = NULL;

var_dump($nmb, $str, $temp);

//Parašykite skriptą, kuris išspausdintų paskutiniąsias 3 stringo raides.

$str = 'Lorem ipsum dolor';

var_dump(substr($str, -3));

//Sukurkite funkciją negative, kuri priimtų vieną argumentą "$skaicius" ir išvestų į ekraną atitinkamą neigiamą skaičių. (Įvedame 3, išveda -3)

function negative($number) {
    return $number * -1;
}

var_dump(negative('3'));

$arg = '';
if (!is_numeric($arg)) {
    $arg = floatval($arg);
}
var_dump($arg);

//Sukurkite funkciją kauliukas, kuri imituotų kauliuko metimą. (Į ekraną atspaudintų atsitiktinį skaičių nuo 1 iki 6); Užuomina: rand();

$dice = rand(1, 6);
var_dump($dice);

//Parašykite funkciją pusePloto, kuri priimtų 2 argumentus ir išvestų į ekraną pusę abiejų skaičių sandaugą.

function halfArea($lenght, $width){
   $res = $lenght*$width/2;
   var_dump($res);
}

halfArea(5,3);

//Sukurkite funkciją 'arEsiDarJaunas', kuri priimtų vieną argumentą amžius ir į ekraną išvestų pranešimą, kiek metų trūksta iki 100. (Pvž.: "Iki šimto jūms trūksta 70 metų! Dar gyventi liko daug!")

$date_1 = new DateTime( '1983-01-15' );
$date_2 = new DateTime( date( 'Y-m-d' ) );
$difference = $date_2->diff( $date_1 );
var_dump('Iki 100 metų Jums trūksta '. 100 - $difference->y. ' metų!');

function stillYoung($age){
    return 100-$age;
}
var_dump('Esate jaunas.Iki 100 metų dar gyvensite '. stillYoung(38). ' metus!');


//Sukurkite funkciją, kuri priimtų argumentą farenheitas ir laipsnius iš farenheito konvertuotų į celsijų.

$temp = 30;
function celsius_to_fahrenheit($temp)
{
    $fahrenheit=$temp*9/5+32;
    return $fahrenheit;
}
var_dump(celsius_to_fahrenheit($temp));
