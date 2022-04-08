// 1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)
console.log('---1---');
const a = 1;
const b = 4;
if (a>b) {
    console.log('a yra didesnis');
} else{
    console.log('b yra didesnis');
}
if (a===b){
    console.log('a ir b yra lygus');
}
console.log('---2---');
// 2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)
for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
// 3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)
console.log('---3---');

for (let i = -1; i <= 10; i++) {
    i++
    console.log(i);
  }

  console.log('---4---');
// 4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)
for (i = 0; i < 5; i++) {
    console.log(Math.floor(Math.random()*10)+1);
}
console.log('---5---');
// 5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)

let m = 0;
while (m !== 5) {
  m = (Math.floor(Math.random() * 10)+1);
  console.log(m);
}

console.log('---6---');
// 6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)
// const masyvoIlgis = 20 + Math.floor(Math.random() * 11); 
// masyvas = [];
// nr = 0;
// for (let i = 0; i < 30; i++) {
//     masyvas[i] = ++nr;
//     }
// console.log(masyvas);
// console.log(masyvas.length);


// 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)

console.log('---8---');
// 8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
// Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)
function lygineSuma(a,b) {
    if (typeof a==='number' && typeof b === 'number' && (a+b)%2===0 )  {
        return ` Kintamuju suma : ${a+b}`
    }
    else if (typeof a==='number' && typeof b === 'number' && (a+b)%2!==0 )  {
        return ` Suma nelygine`}
   else  if (typeof a==='object' && typeof b === 'object' && (a.length+b.length)%2===0 ) {
    return ` Masyvu ilgiu suma  ${a.length + b.length}`
   }
   else if (typeof a==='object' && typeof b === 'object' && (a.length+b.lengt)%2!==0 )  {
    return ` Suma nelygine`}
    
}

t1 = lygineSuma (1, [1,2,3])
console.log(t1);
t1 = lygineSuma (3, 2)
console.log(t1);
t1 = lygineSuma ([1,5,5], [1,2,3])
console.log(t1);
t1 = lygineSuma ([1,2,3], 1)
console.log(t1);


// 9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)
// console.log('---9---');

function pirminisSkaicius(x) {
    if (typeof x==='number' && x%x===0 && x%1===0 && x%2!==0) {
        return `Skaicius ${x} yra priminis`
    }
    else  if (x===2); {
    return `Skaicius ${x} yra priminis`
    }
 else if {return `Skaicius ${x} nera priminis`
}}
console.log(pirminisSkaicius(2));



// 10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - Funkcija turi grąžinti telefono numerį tokiu formatu - 
// "(XXX) XXX-XXXX". (10 taškų)

console.log('---10---');
function telefonoNumeris(num) {
    if (num.length === 10 && typeof num === 'object') {
        return `Telefono numeris yra (${num[0]}${num[1]}${num[2]}) ${num[3]}${num[4]}${num[5]} ${num[6]}${num[7]}${num[8]}${num[9]}`;
    }
    if (num.length < 10 || num.length > 10) {
        return `Telefono numeri turi sudaryti 10 skaiciu`
    }
}

num = [5,6,3,7,9,2,6,2,1,8];
console.log(telefonoNumeris(num));

num = [5,6,3,7,9,2,6,2,1,8,1];
console.log(telefonoNumeris(num));

num = [5,6,3,7,9,2,1,8];
console.log(telefonoNumeris(num));