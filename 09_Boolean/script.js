let email="enginniyazi@gmail.com";
let isimler=["Aslı","Mikail","Recep"];

let varMi=email.includes("g");
console.log(varMi);

let isimVarMi=isimler.includes("Recep");
console.log(isimVarMi);

// let yas=47;
// console.log(yas==47);
// console.log(yas==40);
// console.log(yas!=40);
// console.log(yas<40);
// console.log(yas>=40);
// console.log(yas<=40);
// console.log(yas>40);

let ad="mikail";
console.log(ad=="mikail");
console.log(ad=="Mikail");
console.log(ad>"Recep");

let yas=29;
console.log(yas+" "+ typeof(yas));

let adSoyad="Engin Niyazi Ergül";
console.log(adSoyad+" " +typeof(adSoyad));

let durum=true;
console.log(durum+" "+typeof(durum));

console.log(typeof(yas)=="number");
console.log(typeof(yas)=="string");