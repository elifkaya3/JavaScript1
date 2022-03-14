let email="elif@gmail.com";
console.log(email);

let bolumAd='web geliştirme';
console.log(bolumAd);

let tumu= bolumAd + " " + email;
console.log(tumu);

console.log(bolumAd[2]);
console.log(bolumAd.length);

let sehirAd="Ağrı";
console.log(sehirAd.toUpperCase());
console.log(sehirAd.toLowerCase());
console.log(sehirAd.toLocaleUpperCase());
console.log(sehirAd.toLocaleLowerCase());

let sehirAd1="İzmir"
console.log(sehirAd1.toUpperCase());
console.log(sehirAd1.toLowerCase());
console.log(sehirAd1.toLocaleUpperCase());
console.log(sehirAd1.toLocaleLowerCase());

let siraNo=email.indexOf('@'); //aranan diziyi bulma
console.log(siraNo);

let adSoyad="Engin Niyazi Ergül";
console.log(adSoyad);

let sonSiraNo=adSoyad.lastIndexOf('i');
console.log(sonSiraNo);

let bastanAl=adSoyad.slice(3,7);
console.log(bastanAl);

let bastanAl2=adSoyad.substring(11,6);
console.log(bastanAl2);

let bastanAl3=adSoyad.substr(11,6);
console.log(bastanAl3);

let degistir=adSoyad.replace(" ","");
console.log(degistir);

let degistir1=adSoyad.replace("r","c");
console.log(degistir1);