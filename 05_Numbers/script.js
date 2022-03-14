let yariCap=15;
const piSayisi=3.14; //sabit sayılar da const

console.log(yariCap,piSayisi);

//let alan=piSayisi*yariCap*yariCap;
let alan=piSayisi*yariCap**2;
console.log(alan);
console.log(16/4);

let kalan=yariCap%10; //mod
console.log(kalan);

let kalan2=alan%2;
console.log(kalan2);

let kalan3=piSayisi%2;
console.log(kalan3);

let tamSayi=Math.trunc(145.478); //ondalık almaz
console.log(tamSayi);

let asagiYuvarla=Math.floor(145.478); //en yakın alt sayı
console.log(asagiYuvarla);

let yukariYuvarla=Math.round(145.49);//matematiksel kurallar uyarak yuvarlar
console.log(yukariYuvarla);

let yuvarla=Math.ceil(145.1); //tavan yuvarlar
console.log(yuvarla);